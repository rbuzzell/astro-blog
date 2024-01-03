---
title: "Terminal tricks: Handy Shortcuts"
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

Over the years I've collected a few favorite time saving tricks for working in bash or terminal work in general.

This is one I use pretty often while doing support work. `w` is  all the fun of `uptime` and `last` in the space of one letter. `user` is the username of the logged in user. `tty` shows how they're logged in. `from` shows the hostname or ip address they're connected from if over ssh. `login` shows the time or date of the login. `idle`, `jcpu` and `pcpu` are useful for seeing how much cpu time a user is taking up, and the `what` field shows the current command the user is using.

    [root@machine ~]# w
    20:56:50 up 2 days,  1:39,  1 user,  load average: 0.12, 0.28, 0.42
    USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
    root     pts/0    machine2.local.t Thu22    2.00s  0.09s  0.06s -bash

This group is super useful if you're like me and make mistakes while typing things out. 

* `ctrl + w` will remove whatever word your cursor is in.
* `ctrl + u` will clear from the cursor all the way back to the start of the line
* `ctrl + l` will clear any lines above the one you're working in and bring your working line to the top of the screen.

`!!` is an excellent shortcut for appending or prefixing some bit of command you forgot.
  
    bash-4.3$ cat /var/log/secure
    cat: /var/log/secure: Permission denied
    bash-4.3$ suod !!
    bash: suod: command not found

`^^` is a great way to fix the typo in that last command. It will replace everything after the first `^` and replace it with everything after the second.

    bash-4.3$ ^od^do
    sudo cat /var/log/secure