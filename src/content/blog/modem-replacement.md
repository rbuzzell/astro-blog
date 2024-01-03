---
title: 'My experience replacing a modem'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

I thought I might talk about that time I replaced my modem with one that only did DOCSIS 3.0 -> Ethernet conversion, and how that was a mess for a very long time.

About a year ago I was looking to get IPv6 into my home, and I needed to replace my modem to do that. So I bought one on Amazon that had good reviews, got on the phone with Time Warner Cable, and got it fully replaced. Unfortunately I didn't expect it to not do any routing, NAT, firewall features, or not provide DHCP/DNS, and I suddenly had a house full of roommates and IoT devices that didn't get a network connection. I really didn't want to move backwards, so I grabbed a pfSense firewall I had between the rest of the house and my homelab, and put it as the WAN firewall. Problem Solved.

However, there were some issues with this setup. First and foremost being that I hadn't planned to make pfSense the WAN firewall for a while, so it was running a Beta or Alpha of pfSense 2.3, and was also not configured correctly for use as a WAN router. I quickly put all the wired ports in the house on the VLAN I had been using for my lab, and restored internet to those. I then had to shore up the firewall and get the NAT rules working correctly, which took a little bit some time and eventually a "Oh, I have to allow traffic out. Whoops."

Wireless was a different issue. For those I needed to reconfigure a pair of Ubiquiti APs to use the new network instead of the old one that went away when I swapped the modem. The network then proceeded to chug along for a while, having few issues for several weeks.

Then the power went out.

Services were having a bit of a time coming back up. I came to discover that this was due to my using static addresses only for DHCP/DNS/AD and gateways. I didn't use static IPs on my storage or on my VM hosts, so when those went to reboot they couldn't talk until the DHCP servers were up, which couldn't come up until the hypervisors and storage were up. After fixing that, and giving static IPs to all of my infrastructure, I haven't had any issues after power outages.

So what did I learn?

* Do some research on hardware if I'm putting it into place on a production network. Make sure it has the features I expect it to have when I install it.
* Static IP _**anything**_ that is infrastructure. Have a physical stand-by of any critical infrastructure. When I wrote this post I used a clustered DNS / DHCP setup, with one host being physical.
* Make sure I have a plan B. That pfSense firewall wasn't ready for where I put it. I was still trying to learn the interface and get some of the services working the way I wanted them to. I lucked out by having it, but I could have been more prepared.