---
title: 'Vim Tricks: Visual Block Mode'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'March 30 2018'
heroImage: '/blog-placeholder-3.jpg'
---
I thought I'd write down one of my favorite vim tricks. This one is to change or comment a vertical block of text all at once, instead of one line at a time.

* Step One
  - Enter Visual Block mode with <kbd><kbd>Ctrl</kbd>+<kbd>v</kbd></kbd>, then highlight a single character wide slice you wish to add comment characters to.
* Step two
  - Press <kbd><kbd>Shift</kbd>+<kbd>i</kbd></kbd> to enter insert mode, then enter your comment character. Don't worry, this will only effect one line at first.
* Step three
  - Press <kbd>Esc</kbd> to apply your change to all lines you previously had highlighted.