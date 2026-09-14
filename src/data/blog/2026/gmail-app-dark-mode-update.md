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

For several years now Gmail has applied a forced dark theme onto emails. The Android app uses the Chromium algorithmic darkening to darken colors. The iOS app uses a luminance inversion, meaning that as well as darkening light emails, emails that start out as dark end up light when viewed in dark mode. 

Both method have led to a number of issues in emails being sent:
* The colors in the email no longer match a brands colors. 
* Text color changing but background images not, leading to hard to read text. 
* Both text and background colors changing but seeing a drop in contrast ratio to fall below WCAG recommendations. 
* Some icons inverting, leading to inconsistency, contrast issues and in some cases chaning the meanings. 


## The fix
With the update Gmail now recognises the color-scheme meta tag. However only with the `light only` value.

```HTML
<meta name="color-scheme" content="light only" />
```

When this is included in the email, the Gmail app will not apply the forced dark theme. The email will remain as if it were opened in light mode.

Although the issue was originally logged under the Android issue tracker, the fix has been applied to both Android and iOS apps.

This fix is only for emails received into Google accounts (`@gmail.com` or Google Workspace accounts), and not third party accounts using the Gmail app (`@Yahoo.com`, `@Outlook.com`, etc.)


## How this affects other email clients
The color-scheme meta tag tell the user agent (email client) what color schemes the document (email) supports. Because we are setting the value to `light only`. For some email clients like AppleMail on desktop this also means that `@media (prefers-color-scheme: dark)` won't be applied.

To work around that we can reset the supported color schemes with some CSS on the `:root`.

```CSS
:root{
    color-scheme: light dark;
}
```

This additional code is only needed if you are planning on setting your own dark styles.


## Recommendations
It's tempting to add this in to all templates as a blanket fix, however it's important to remember that these users have set a preference for dark mode, therefore would prefer emails that showed as dark. If the current dark conversion is acceptable for you then it may be best to leave things as they are.

If you are working on a an email design system, an email building tool or an email framework, having this as an optional setting is probably the best way to go. Allowing users to choose on a case by case basis if they want to;
* Block Gmail dark mode
* Block Gmail but allow custom dark mode
* Leave Gmail as it is


## Is this the best solution
Allowing full customisation of dark mode is the dream for a lot of senders. However email clients have their reasons for not allowing this. So there is a need to find a compromise.

Forcing a dark theme is a good solution for simple text based emails, but falls down quickly as more design features are added.

This option that allows senders to block that is a useful feature, an easy fix to implement and definitely a big improvement. 

We would have prefered to see something more granular, if media queries are an issue perhaps allowing users to set alternate colors with [CSS `light-dark()` functions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), or perhaps allowing senders to set [CSS `color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme) only on the problem areas, still allowing for some forced dark conversion where it works well.