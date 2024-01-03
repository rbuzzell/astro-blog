---
title: 'Fedora 25 in ipxe'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---


As a followup to my earlier brief post about Fedora 25 in syslinux pxe, this one adds Fedora 25 as a function in ipxe.

```
    :fedora25
    initrd http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/initrd.img
    chain http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os/images/pxeboot/vmlinuz
    inst.stage2=http://mirror.rit.edu/fedora/fedora/linux/releases/25/Workstation/x86_64/os ip=dhcp
```