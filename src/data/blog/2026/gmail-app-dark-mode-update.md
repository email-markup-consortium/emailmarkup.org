---
title: Gmail app dark mode update
description: Gmail have updated to allow senders to block the forced dark mode conversion of emails.
author: mark-robbins
pubDate: 2026-09-14
published: true
layout: "@layouts/BlogLayout"
---

On 31st August 2026 an update was made to a 5 year old [ticket on the Google Issue Tracker](https://issuetracker.google.com/issues/201441498?pli=1#comment18).

![Aug 31, 2026 08:38PM. Marked as fixed. Thank you for reporting this issue, We have a fix rolling out in the upcoming release.](/img/blog/gmail-dark-update.png)

For several years now Gmail has applied a forced dark theme onto emails. The Android app uses the Chromium algorithmic darkening to darken colors. The iOS app uses a luminance inversion, meaning that as well as darkening emails, emails that start out as dark end up light when viewed in dark mode. Both method have lead to a number of issue in emails being sent;
* The colors in the email no longer match a brands colors. 
* Text color changing but background images not, leading to hard to read text. 
* Both text and background colors changing but seeing a drop in contrast ratio to fall below WCAG recomendations. 
* Some icons inverting, leading to inconsistency, contrast issues and in some cases like flags chaning the meanings.


## The fix
With the update Gmail now recognises the color-scheme meta tag. However only with the `light only` value.

```HTML
<meta name="color-scheme" content="light only" />
```

When this is included in the email, the Gmail app will not apply the forced dark theme. The email will remain as if it were opened in light mode.

Although the issue was originaly logged under the Android issue tracker, the fix has been applied to both Android and iOS apps.

This fix is only for emails recived into Google accounts (`@gmail.com` or Google workspace accounts), and not third party accounts using the Gmail app (`@Yahoo.com`, `@Outlook.com`, etc.)


## How this affects other email clients
The color-scheme meta tag tell the user agent (email client) what color schemes the document (email) supports. Because we are setting the vlaue to`light only`. For some email clients like AppleMail on desktop this also means that `@media (prefers-color-scheme: dark)` won't be applied.

To work around that we can reset the supported color schemes with some CSS on the `:root`.

```CSS
:root{
    color-scheme: light dark;
}
```

This additional code is only needed if you are planning on setting your own dark styles.


## Recomendarions
It's tempting to add this in to all templates as a blanket fix, however it's important to remember that these users have set a preference for dark mode, therefor would prefer emails that showed as dark. If the current dark conversion is acceptable for you then it may be best to leave things as they are.

If you are working on a an email design system, an email building tool or an email framework, having this as an optional setting is probably the best way to go. Allowing users to choose on a case by case basis if they want to;
* Block Gmail dark mode
* Block Gmail but allow custom dark mode
* Leave Gmail it as it is


## Is this the best solution
Allowing full customisation of dark mode is the dream for a lot of senders. However email clients have their reasons for not allowing this. So there is a need to find a compramise.

Forcing a dark theme is a good solution for simple text based emails, but falls down quickly as more desing feature are added.

This option that allows senders to block that if a useful feature and an easy fix.  

We would have prefered to see something more granular, if media queries are an issue perhaps allowing uses to set alturnate colors with [CSS `light-dark()` functions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), or parhaps allowing senders to set [CSS `color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme) only on the problem areas, still allowing for some forced dark converstion where it works well.