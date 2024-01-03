---
title: 'Fedora 25 in pxe'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

Just a brief entry about what the pxelinux.cfg related to your newer fedora installs should look like. I make the assumption that everything should be pulled from an http(s) mirror server, and nothing should be on the local server, as that is how I tend to setup my pxeboot environments.

```
LABEL fedora-linux
    MENU LABEL Install Fedora 25
    KERNEL http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/vmlinuz
    APPEND initrd=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/initrd.img inst.stage2=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os ip=dhcp
```