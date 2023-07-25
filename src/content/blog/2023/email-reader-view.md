---
title: Email Reader View browser extension 
description: Display emails in a more readable format
Remove clutter and complicated layouts to help focus on reading the content of emails. Supported in Gmail, Yahoo, AOL, Outlook when viewed in the browser.
author: mark-robbins
pubDate: 2023-07-27
published: true
layout: "@layouts/BlogLayout"
---
We’re excited to launch our new Email Reader View browser extension. You can [install it from Chrome Web Store now](https://chrome.google.com/webstore/detail/email-reader-view/eekkbigfifdabokecancejangeoallck).

You should also be able to use that link to install it on any Chromium based browsers such as Edge, Opera, Brave, etc.

## What is reader view

Email Reader View is a browser extension that allows the user to view an HTML email without all the clutter and distractions that can make reading difficult. It reduces the content to its most basic form of text but unlike a plain text email it keeps it’s semantic structure. Users can then apply their own styles to the text to suit their own preferences on things like font, text size, spacing and colors.

This is inspired by web reader view features have become popular over the last few years, with built in versions in many browser as well as a number of browser extension. 

## Why did we build it

There are a number of goals we had with this project 

### Help users with consuming content

Accessibility is a big goal for us at the EMC. This tool could help a number of users consume email content more easily. If a user struggles to read a certain font, or if the text is too small to read, or if they experience glare or halo effects on text with certain color combinations these can all be fixed. We also have an option to replace images with their alt text so text in images can now be more readable (assuming the sender has added good quality alt text).

Personally I use reader view on webpages a lot and since working on this project, I’ve started using it in email often too.

### Help with email client rendering issues

Sometimes emails can display badly due to various issue in different email clients or badly written code from the sender. Applying reader view removes all of the styling, simplifying the content and should mean the content is always readable despite these potential issues. A common issue is an email that isn’t built to be responsive can be scaled much better now using reader view. 

If you find an example where an email is displaying poorly when using reader view, please let us know.

### Encourage developers to use semantic markup

We’re always trying to get email senders to use semantic code, this tool helps emphasises the importance of semantic structure and hierarchy in a very visual way. When viewed in reader view, well written semantic code, simply looks better. If developers write code to optimise for reader view, the benefits should also apply more widely to the accessibility of the email.

Additionally using the block images option makes checking alt text much easier, allowing you to easily read it in the flow of the email content, much like how a screen reader would.

### Encourage email clients to build their own

We think this would be a very valuable feature to build directly into the email clients. We’re hoping this project will help encourage the email clients to follow suit and build their own. The code is all open source so if you are from an email client, please feel free to read over it.

## What next

In the future we are hoping to add support for more email clients and support for more browsers as well as looking at any feedback we get from users. But the EMC members behind this have day jobs as well as other commitments, so don’t expect a lot of updates.

However if you are interested on working on this project or have more ideas for it, please check out the [Email Reader View Github page](https://github.com/email-markup-consortium/email-reader-view) and get in touch.

