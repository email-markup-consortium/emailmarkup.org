---
title: Impact of accessibility work by EMC
description: Since launching the EMC's annual accessibility report, we’ve seen a number of large vendors taking actions to improve the accessibility of their tools.
author: naomi-west
pubDate: 2023-12-13
published: true
layout: "@layouts/BlogLayout"
---

The Email Markup Consortium launched an [annual accessibility report](https://emailmarkup.org/en/reports/accessibility/) to bring awareness to the state of accessibility within the email industry. We aim to do more than just support end subscribers who would benefit from improvements or educate marketers and email creators on crafting with better detail. Our goal is also to demonstrate to vendors the need for enhancements to the tools that marketers use to create emails. This, in turn, will provide greater value to their subscribers.

When initially releasing the report, we heard from email creators that they felt their ESPs, or email building tools, either altered their code to change the structure (which resulted in accessibility issues) or prevented them from creating an accessible email to begin with. 

We are committed to using this data to advocate and push for change in our industry for the better. Since launching the report, we’ve seen a number of large vendors such as Beefree, Stripo, and Customer.io taking on feedback, engaging in discussion,  and making improvements.

## [Beefree](https://beefree.io/)

The team at [Beefree](https://beefree.io/) has been incredibly open to conversation and collaboration. Accessibility is an ongoing line of development in each of their product cycles and they continue to work on making the HTML that is generated with their builder more and more accessible with each release. 

Their work is not just exclusive to the code that the tool produces, but also the accessibility of their email builder itself. 

Although Beefree already offers creators an input to manually add alt-text, they understand how important this tag is on an image, and have worked on a feature with AI to automatically write the alt-text for images and ensure it is added as a tag on the image source. They are committed to not just notifying the user that they are missing an alt-tag, but also providing a proactive fix. 

Another win we’ve seen with Beefree is the ability for email creators to define the language of their email, which results in the content inside the email body being wrapped in a `lang` attribute. This was the top-most common error in the accessibility report, with 96% of emails missing this key detail that screen readers must rely on.

We are continually grateful for this tool that provides a means for creators to build emails easily, but also with best practices in mind.


## [Stripo](https://stripo.email/)

The team at [Stripo](https://stripo.email/) has maintained a strong interest in improving Accessibility standards — including setting a target of decreasing the failure rate from 99% to 97%. They have made a number of fixes to improve their code output, including setting a language direction and ensuring tables that require `role="presentation"` have the value included on it. 

We’re looking forward to a continued relationship with them, and updates around changes to the platform that enable creators to build accessible emails.


## [Customer.io](https://customer.io/)

At [Customer.io](https://customer.io/), they have integrated [Parcel’s Accessibility Checker](https://parcel.io/docs/dev-tools/accessibility-checker) into the email building experience, enabling creators to seamlessly check their code for errors. 

We have also worked with the team to identify changes to email code post-send, and remediate a fix that now declares a language direction on the preheader text that previously wasn’t able to be controlled by the end user as,well as setting an empty `alt`` attribute on the tracking pixel. Ultimately, this solved for an Accessibility issue that was previously failing. 


## Future vendor relations 

Commonly, we see drag and drop tools present similar issues such as not assigning tables a `role` attribute, not assigning a `lang` attribute, defining a text direction, or excluding discernible texts on links. We’re grateful to the two companies above for being open to collaboration and conversation. It shows that not only email developers are interested in these improvements, but also that the companies that own building these email tools are keen to make accessibility improvements as well. 

You can use the latest [2023 report](https://emailmarkup.org/en/reports/accessibility/2023/) as an overview in understanding what issues most commonly arise, and use [Parcel’s Accessibility Checker](https://parcel.io/docs/dev-tools/accessibility-checker) to review presenting issues of your own. 

Again, we are committed as a group to working towards improving emails standards for the industry. If you are a vendor reading this, and would like to chat about ways in which your tool may be impacting email accessibility, please reach out!