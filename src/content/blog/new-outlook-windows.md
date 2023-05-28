---
title: The new Outlook for Windows
description: On May 2022, Microsoft announced the new Outlook for Windows, a version that will have a huge positive impact in the email space. Learn how this version is expected to impact the industry.
author: Hussein Al Hammad
pubDate: 2023-03-13
published: true
layout: "@layouts/MainLayout"
---

On 17 May 2022, Microsoft [announced the new Outlook for Windows](https://insider.office.com/en-us/blog/the-new-outlook-for-windows-helps-you-be-more-productive-and-in-control-of-your-inbox), a version that will have a huge positive impact in the email space.

## Now

For years, the Outlook for Windows desktop apps relied on proprietary technology to render HTML emails: their own Microsoft Word. The historic and business reasons behind that decision is not the topic of today, but its impact is.

Besides proprietary features that only work on Outlook for Windows, the rendering of HTML and CSS features is not always identical to the W3C specification. The Microsoft Word rendering engine had not kept up with the HTML’s living standard.

The result? Given the wide use of Outlook for Windows globally, email developers stuck with patterns only needed to ensure their HTML emails render well on Outlook for Windows. Because these patterns are not needed for emails to render well elsewhere, it’s an Outlook-first approach and not a user-first one.

## The new Outlook for Windows

<iframe width="560" height="315" src="https://www.youtube.com/embed/dfWTGgi7xAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The new Outlook for Windows brings a fundamental change. It no longer uses Microsoft Word as a rendering engine, but a normal web browser engine. 

Based on the initial testing of developers in the email community, it is reported to have an almost identical handling of HTML/CSS features to the web version of Outlook. This aligns with Microsoft’s goal to “bring consistency across our Windows and web codebases”. 

It has been a multi-year effort to reach this point, and Microsoft has been [betting on web technologies](https://techcommunity.microsoft.com/t5/video-hub/the-evolution-of-outlook/ba-p/1681527) when developing new features for their Outlook apps across all operating systems for some time now. Finally, it’s now time for the HTML rendering to catch up with the rest of the app.

## Availability

At the time of the announcement:

> The new Outlook for Windows is available to Beta Channel users running Version 2205 (Build 15225.20000) or later.

However, it seems Microsoft is making the new version more accessible to more users as it can be downloaded and installed via its [Windows App store](https://apps.microsoft.com/store/detail/outlook-for-windows/9NRX63209R7B).

## The path forward

“Code like it’s the 90s” - an eternal joke that is reaching its expiry date. [October 2026](https://learn.microsoft.com/en-us/lifecycle/products/?terms=Outlook) is the month when Microsoft is ending support to the last version of Outlook that uses the Microsoft Word rendering engine. We can anticipate users to start using the new Outlook for Windows well before that date.

The step Microsoft is taking here makes the goal of enforcing some email standards more feasible. One of the key reasons we started the Email Markup Consortium [last year](https://dev.to/emailmarkup/introducing-the-email-markup-consortium-emc-52ak) was we believed the timing is right. This is a huge milestone in the email industry and we believe it is going to help us realize [our vision](https://emailmarkup.org/en/docs/vision/).