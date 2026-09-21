---
title: Gmail app dark mode update
description: Gmail has updated to allow senders to block the forced dark mode conversion of emails.
author: mark-robbins
pubDate: 2026-09-21
published: true
layout: "@layouts/BlogLayout"
---

On 31st August 2026 an update was made to a 5 year old [ticket on the Google Issue Tracker](https://issuetracker.google.com/issues/201441498?pli=1#comment18).

![Aug 31, 2026 08:38PM. Marked as fixed. Thank you for reporting this issue, We have a fix rolling out in the upcoming release.](/img/blog/gmail-dark-update.png)

For several years now Gmail has applied a forced dark theme onto emails. The Android app uses the Chromium algorithmic darkening to darken colors. The iOS app uses a luminance inversion, meaning that as well as darkening light emails, emails that start out as dark end up light when viewed in dark mode. 

Both methods have led to a number of issues in emails being sent:
* The colors in the email no longer match a brand's colors. 
* Text color changing but background images not, leading to hard to read text. 
* Both text and background colors changing but seeing a drop in contrast ratio to fall below WCAG recommendations. 
* Some icons inverting, leading to inconsistency, contrast issues and in some cases changing the meaning. 


## The fix
With the update Gmail now recognizes the color-scheme meta tag. However only with the `light only` value.

```HTML
<meta name="color-scheme" content="light only" />
```

When this is included in the email, the Gmail app will not apply the forced dark theme. The email will remain as if it were opened in light mode.

Although the issue was originally logged under the Android issue tracker, the fix has been applied to both Android and iOS apps.

This fix is only for emails received into Google accounts (`@gmail.com` or Google Workspace accounts), and not third party accounts using the Gmail app (`@Yahoo.com`, `@Outlook.com`, etc.)


## How this affects other email clients
The color-scheme meta tag tells the user agent (email client) what color schemes the document (email) supports. This is mostly related to UI features (color of a radio button, scroll bar). However some email clients take it a little further, like AppleMail on desktop, where this also means that our custom dark styles set with `@media (prefers-color-scheme: dark)` won't be applied.

To work around that we can reset the supported color schemes with some CSS on the `:root`.

```CSS
:root{
    color-scheme: light dark;
}
```

This additional code is only needed if you are planning on setting your own dark styles.


## Recommendations for senders and developers
It's tempting to add this in to all templates as a blanket fix. However it's important to remember that these users have set a preference for dark mode, therefore would prefer emails that showed as dark. If the current dark conversion is acceptable for you then it may be best to leave things as they are.

If you maintain an email design system, building tool, or framework, setting this up as an opt-in toggle is the ideal approach. This gives developers the flexibility to choose on a case-by-case basis:
* Block Gmail dark mode
* Block Gmail but allow custom dark mode
* Leave Gmail as it is

While setting a `light only` meta tag on an email already designed in dark mode seems counterintuitive, it is actually one of the most effective use cases. It prevents the iOS Gmail app from running the luminance inversion that turns your dark email light.

## The path forward for email clients
Blocking forced dark mode is a good start. It's a quick fix to the problem, however it brings back the original issue that forced dark mode was intended to fix. We are no longer respecting the user's preference.

Allowing senders full customization of dark mode with `@media (prefers-color-scheme: dark)` is the ideal solution. [A number of email clients support this already](https://www.caniemail.com/features/css-at-media-prefers-color-scheme/) but some may still have their reasons for not allowing this. 

Alternatively using [CSS `light-dark()` functions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark) would allow senders to set a preferred light and dark options for each color used. Alongside that a `<picture>` element could allow for sending preferred light and dark image option.

Another option, following Gmail's example of using `color-scheme` but instead done via [CSS `color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme) so it could be applied only where needed. Setting a header to `light only` so the transparent logo still shows, setting the main text content to `light dark` so it can be automatically converted for easier reading, and setting a footer to be `dark only`.

The shared goal here is to support the end users. If they have stated a preference for a dark theme, that should be provided to them. The HTML and CSS spec has provided the solutions so it's down to senders and email clients to work on a way to use them.


