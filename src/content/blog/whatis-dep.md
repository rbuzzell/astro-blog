---
title: 'What is DEP?'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

After a stakeholders meeting yesterday, I was left with the realization that many of us in the IT community may be saying "Hey, you need this DEP thing if you want to keep managing Apple devices correctly and efficently". But we may not be explaining what this DEP thing is, and some of us may not be fully understanding it. So this is meant to be a overview of what DEP is and the background needed to understand why you want it without going too deep into the weeds.

# Background
To start, let's talk about what Apple is doing with configuration. Apple is slowly moving away from the classic tried-and-true methods for configuration such as imaging, modifications to the default user profile, and the `defaults` command. [They're removing imaging entirely on new hardware](https://scriptingosx.com/2017/12/imac-pro-implications-for-mac-admins/), [protecting the default user profile from modification](https://discussions.apple.com/thread/7855765?answerId=31510451022#31510451022), and [pushing configuration profiles](https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html) and the preference hierarchy.

## Imaging
Monolithic imaging has been going away for a very long time, they've been pushing thin image workflows for longer than I've been in the industry. They've now stopped supporting thin imaging as well with the [removal of netboot from the iMac Pro](https://support.apple.com/en-gb/HT202770) and [netboot components from Server.app](https://support.apple.com/en-us/HT208312).

## SIP
With the introduction of SIP, Apple started locking down critical parts of the operating system so no user can touch them. Not even with `sudo` or by being root. If you're familliar with `selinux` or `AppArmor` it's a similar concept, but only modifiable by Apple. This included most of `/System`, and the default user profile is in there. With APFS, all of `/System` is expected to become read-only, no more modifications to default profile or any other system directory allowed.

## Configuration Profiles
Apple introduced configuration profiles in 10.8. Since then they've been at the top of the preference domain hierarchy. A setting set with a profile cannot be overridden by `defaults` or `sudo defaults`. [They can control many things by default](https://developer.apple.com/library/content/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html) and [you can configure existing configurations](https://github.com/timsutton/mcxToProfile) to be compatible. Many softwares are compatible with them as well. [Microsoft Office 2016](https://docs.google.com/spreadsheets/d/1ESX5td0y0OP3jdzZ-C2SItm-TUi-iA_bcHCBvaoCumw/edit) is one of many examples.

## MDM
Apple has historically been pushing MDM as a way to create and issue Configuration Profiles. They have a reference implementation called Profile Manager, a component of Server.app. This is just for reference, there exists more than one story of profile manager just imploding and everything being lost even with backups. Apple themselves uses Jamf Pro. This has led to a "friends don't let friends use Profile Manager" attitude within the mac admins community. Many options exist for this, [Jamf](https://www.jamf.com/), [SimpleMDM](https://simplemdm.com/), and [MicroMDM](https://micromdm.io/) being just three options.

# How this ties together
With a proper thin imaging workflow a machine would be unboxed, a vanilla copy of the OS installed using a tool like DeployStudio or Imagr, part of that workflow would bind to a directory service, install some bootstrapping tools, complete any MDM enrollment, and pass the software installation and OS configuration on to the bootstrapping tools like Jamf Self Service or Munki. The bootstrapping tool would then download any software from a managed repository and install it, and add any configuration profiles it's configured to.

Without the ability to image a machine, these bootstrapping tools and any mdm enrollment have to be manually added after the OOBE (out of box experience) is completed. This presents two issues: Having to manually walk through the OOBE on every machine you deploy, and the introduction of [UAMDM](https://simplemdm.com/2017/11/01/user-approved-mdm-enrollment/) disabling features of your MDM until a person physically moves the cursor to the "Approve" button on the end-user's machine. There's also [UAKEL](https://developer.apple.com/library/content/technotes/tn2459/_index.html) for your kernel extensions. This _also_ needs to be preformed by a person physically at the machine.

## DEP, Finally
Sounds like a pain? It is, and Apple recognizes this. DEP exists to make this process easier. DEP is an Apple program where they will work with a vendor to integrate their PoS system with Apple's backend. Apple also works with you to create a DEP account that your business purchases can be tied to. Once your account exists, and provided your vendor of choice is DEP approved, any purchases made going forwards can be automatically tied to your DEP account. 

DEP will integrate with your MDM solution(s) and automatically enroll the machine during the OOBE. If you have multiple MDMs, you can choose the MDM you want devices to be configured to go to in the DEP portal, using the serial of a specific device for one, an order number for multiple devices, or several other options. DEP allows you to configure the OOBE as well. After DEP enrolls the machine into your MDM (optionally this can require authentication), the MDM will optionally send a payload with software like Jamf's Self Service, the Munki Project's Managed Software Center, or SplashBuddy, which can then be used to bootstrap the rest of the machine's software and configuration. This process is regularly advertised as able to get you to a "zero-touch" environment: the ability to provide a factory shrinkwrapped box to an end-user and know that the machine can configure itself.

DEP also comes with the benefit that MDM it enrolls the machine in is automatically considered user-approved, and a user-approved MDM can issue a configuration profile that whitelists kernel extensions, thus getting you around UAKEL in the same stroke.

### Security addendum
DEP isn't something that can be gotten around by simply wiping the machine. If a laptop is stolen then wiped, during the OOBE it will check in with Apple to see if there is a DEP configuration available, and if there is it will pull it down again or block the process waiting for authentication. If your device is marked as stolen or placed in lost mode, it will also sit at the OOBE until unlocked or returned.