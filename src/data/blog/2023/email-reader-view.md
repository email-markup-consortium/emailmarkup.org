---
title: Email Reader View browser extension
description: Display emails in a more readable format. Remove clutter and complicated layouts to help focus on reading the content of emails.
author: mark-robbins
pubDate: 2023-08-07
published: true
layout: "@layouts/BlogLayout"
---

We’re excited to launch our new Email Reader View browser extension. You can [install it from Chrome Web Store now](https://chrome.google.com/webstore/detail/email-reader-view/eekkbigfifdabokecancejangeoallck).

You should also be able to use that link to install it on any Chromium based browsers such as Edge, Opera, Brave, etc.

## What is reader view

Email Reader View is a browser extension that allows the user to view an HTML email without all the clutter and distractions that can make reading difficult. It reduces the content to its most basic form of text but unlike a plain text email it keeps it’s semantic structure. Users can then apply their own styles to the text to suit their own preferences on things like font, text size, spacing and colors.

This is inspired by web reader view features have become popular over the last few years, with built in versions in many browser as well as a number of browser extension. 

## Why we built it

There are a number of goals we had with this project.

### Help users with consuming content

Accessibility is a big goal for us at the EMC. This tool could help a number of users consume email content more easily. If a user struggles to read a certain font, or if the text is too small to read, or if they experience glare or halo effects on text with certain color combinations these can all be fixed. We also have an option to replace images with their alt text so text in images can now be more readable (assuming the sender has added good quality alt text).

Personally I use reader view on webpages a lot and since working on this project, I’ve started using it in email often too.

### Help with email client rendering issues

Sometimes HTML email messages are badly displayed due to various issue in different email clients or badly written code from the sender. Applying reader view removes all of the styling, simplifying the content and should mean the content is always readable despite these potential issues. 

A common issue is an email that isn’t built to be responsive, can now be scaled much better using reader view. Another issue is unexpected changes in email rendering, at the time of writing we recently saw a Gmail bug remove support for background image along with all other styles around it. This caused a number of emails to be unreadable. The browser extension provides the user with a way to still consume the content easily when rendering unexpectedly breaks like this.

If you find an example where an email is displaying poorly when using reader view, please let us know.

### Encourage developers to use semantic markup

We’re always trying to get email senders to use semantic code, this tool helps emphasise the importance of semantic structure and hierarchy in a very visual way. When viewed in reader view, well written semantic code, simply looks better. If developers write code to optimise for reader view, the benefits should also apply more widely to the accessibility of the email.

Additionally using the block images option makes checking alt text much easier, allowing you to easily read it in the flow of the email content, much like how a screen reader would.

### Encourage email clients to build their own

We think this would be a very valuable feature to build directly into the email clients. We’re hoping this project will help encourage the email clients to follow suit and build their own. Outlook does already have [Immersive Reader](https://support.microsoft.com/en-au/topic/open-immersive-reader-for-outlook-9249595c-4b9d-4f27-9f59-bc590a6152da) however, I've found it to be unintuitive to use and it can be quite hard to find in the user interface. 

A few of the benefits we see, with a native reader view inside the email clients include;

* Users can consume content when rendering unexpectedly break because of an email client bug.
* Users can consume content when rendering break because sender included a bug in their code.
* It would be available on native mobile/desktop apps rather than just in the browser. 

The code is all open source so if you are from an email client, please feel free to read over it.

## What next
This is a free and open-source project, and updates can be slow. In the future we are hoping to add support for more email clients as well as looking at any feedback we get from users. 

However if you are interested on working on this project or have more ideas for it, please check out the [Email Reader View Github page](https://github.com/email-markup-consortium/email-reader-view) and get in touch.