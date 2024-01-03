---
title: "Secure SSD Erase options for Apple and Windows"
description: 'Lorem ipsum dolor sit amet'
pubDate: 'May 24 2019'
heroImage: '/blog-placeholder-3.jpg'
---
In the modern era of SSDs in everything, I'm seeing many many questions about
how to securely erase them. Some folks aren't even asking, just assuming that
DBAN works or that their magnetic erasers work still. In truth, neither of those
is going to be a reliable method for SSDs.

# DBAN
DBAN will not reliably function on an SSD due to the way SSDs function. An SSD
will preform wear leveling. When preforming a write there is no guarantee that
it won't shuffle the writes around or get all of your data, even if you run DBAN
multiple times. The storage isn't even physically indexable the same way a
traditional HDD is.

# HDD Degausser
A degausser is also ineffective on an SSD. The degausser is used to scramble the
magnetic storage of a traditional HDD, but SSDs have no magnetic storage and are
unaffected by a degausser.

# Embedded Components
Making this an even greater challenge is manufacturers such as Apple embedding
storage directly on the motherboard or logic board, and in Apple's case
restricting the ability to boot to non-apple external boot media. No longer can
a drive just be removed from a computer and plugged into another one or run
through a degausser.

# Solutions
## Full Disk Encryption
One option is to turn on full disk encryption. Most OSes have a native option
for this: BitLocker on Windows, FileVault 2 on macOS, the native encryption a T2
chip provides on newer Apple hardware, and LUKS on Linux. This protects your
data in a few ways, but it also leaves you in a position where you can delete
the volume and be reasonably assured that the data is safe. On a Mac with T2, it
deletes the keys used to encrypt the volume when you delete the volume. On
Windows you can delete the keys from the TPM. I'm not at all certain on Linux
what the interactions are, I don't personally use LUKS there.

## Physical shredding
Another option is to physically shred the SSD or computer. This will guarantee
the data is gone and ground to a powder.

## SSD Secure erase
There is a standard in place for secure erasure of SSDs bootable tools such as
parted magic have the ability to utilize. This option is enabled on the SSD
hardware, and if it isn't there no software can make it exist. But this option
will tell the SSD to flash all storage to blank and takes a few seconds."