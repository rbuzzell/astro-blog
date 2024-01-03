---
title: 'Vim Tricks: "Increment or decrement numbers'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'August 3 2017'
heroImage: '/blog-placeholder-3.jpg'
---

Here again with another of my favorite vim tricks. This one is really quick, and is for quick decrement or increment of numbers. 

While in Normal mode, if you bring the cursor to a number, you can use ctrl+a to increment it or ctrl+x to decrement it. As with all vim commands, you can enter a number first and it will do the action that many times. So 400 ctrl+a will add 400 to the highlighted number.

The other fun thing this will do is automatically hop to the first number on a line, so if you have the letter "f" highlighted, but the number "418" is 50 characters to the right, ctrl+a or ctrl+x will hop 50 characters to the right and apply the action to the number.