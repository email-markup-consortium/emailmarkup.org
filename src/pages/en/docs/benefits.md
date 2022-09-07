---
title: Benefits to email clients
description: How supporting and partnering with the Email Markup Consortium benefits email clients
layout: "@layouts/MainLayout"
---

# Benefits to Email Clients

Senders, recipients, and email clients share the common goals of better user experience, accessibility, performance, consistency, and reliability. However, currently there is a lack of cooperation in trying to achieve these goals, leading to inconsistent results. By working together on agreed approaches, we can save everyone time, effort and money while delivering a better experience to the recipients.

Shared standards and collaboration across email clients has a number of benefits.

## Shared resources and information

All email clients face the same challenges with email markup.  They need to allow HTML and CSS support without opening up any security or privacy risks. They need to account for poorly coded markup from senders that could lead to layout and accessibility issues. They need to allow for user preferences to pass from the OS to the email markup.

All of these requirements take a lot of resources to get right.  Collaborating with other email clients, sharing problems and solutions, could save everyone time effort and money.

## More consistency for user to user emailing

When a group of users have a thread of emails, going between different email clients, it can quickly hit display issues as their conversation goes back and forth . Forwarding an email between email clients will also often have display issues.  These inconsistencies lead to a poor user experience.

If the email clients use a shared approach of how to process the code, they could dramatically reduce these issues.

## More consistency in code sent

More consistency in the way code is processed will mean senders can more easily create good quality semantic code. This in turn will allow email clients to build more tools like the [Outlook immersive reader](https://support.microsoft.com/en-us/topic/open-immersive-reader-for-outlook-9249595c-4b9d-4f27-9f59-bc590a6152da) that can present semantic markup in a more readable way to the user. These tools could take the content and display it in a way better suited to the user.

## Backward compatibility

Because of the current inconsistencies in the email rendering, senders will often use [CSS targeting hacks](https://howtotarget.email/) to try and fix issues specific to a single email client.  As the email clients change these targeting hacks can become outdated and cause display issues in older emails. A more consistent way of processing the code will allow senders to use cleaner solutions for progressive enhancements that will fall back gracefully when not supported by the email client.

## Smaller file sizes

Currently, with all the additional targeting, hacks and workarounds needed in email markup it can lead to large files sizes.  Reducing the causes of this extra code means senders can be more efficient in their code. Smaller files sizes means less pressure on storage and sending processes.

## Clear communication with the email industry
There are probably a number of things senders do that frustrate the email clients. The Email Markup Consortium can provide a central hub to help communicate these things to ESP’s, email developers and all the community that touch email markup.  We can also help provide feedback to the email clients from the senders, condensing it down to a single clear voice.


## Shared HTML sanitizer 

One potential project that we’d hope to explore with the involvement of email clients, would be a shared HTML sanitizer.

Sharing resources and knowledge would lead to a better product.  Each email client could still customize their own allow list and block list but the way these blocked elements, attributes, styles, etc. are handled would be consistent across the board.

A number of competing email clients are already using a [shared render engine](https://amp.dev/documentation/guides-and-tutorials/contribute/email-viewer/?format=email) in the form of [AMP for Email](https://amp.dev/about/email/). 

Like AMP for Email, this sanitizer could additionally be built into email tools to help senders create and test code more efficiently. 


<!-- Prevent CSS fingerprinting
Currently, it’s easy to track which email client a recipient is using by focusing on the quirks of the markup. Is this a privacy concern?  -->