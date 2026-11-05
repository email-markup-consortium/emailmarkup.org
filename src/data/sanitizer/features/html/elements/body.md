---
title: "<body>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `alink` - deprecated
- `background` - deprecated
- `bgcolor` - deprecated
- `bottommargin` - deprecated
- `leftmargin` - deprecated
- `link` - deprecated
- `onafterprint`
- `onbeforeprint`
- `onbeforeunload`
- `onblur`
- `onerror`
- `onfocus`
- `onhashchange`
- `onlanguagechange`
- `onload`
- `onmessage`
- `onmessageerror`
- `onoffline`
- `ononline`
- `onpagehide`
- `onpagereveal`
- `onpageshow`
- `onpageswap`
- `onpopstate`
- `onrejectionhandled`
- `onresize`
- `onstorage`
- `onunhandledrejection`
- `onunload` - deprecated
- `rightmargin` - deprecated
- `text` - deprecated
- `topmargin` - deprecated
- `vlink` - deprecated

The `on*` attributes listed here are event handler attributes with window-level behavior on `<body>`. Listing them does not imply support for executable event handlers.

## Recommendation

This section is under active discussion.

## Impacts

### Embedding context

An email message’s body is embedded within an application rather than replacing the application’s document. Body attributes and window event handlers need separate handling so they do not affect the email client’s interface.

### Privacy

The deprecated `background` attribute can load a remote image. Its handling must follow the same remote-content policy as other image requests.

## Resources

- [MDN: `<body>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body)
- [HTML Standard: The `body` element](https://html.spec.whatwg.org/multipage/sections.html#the-body-element)

## Email client compatibility

<iframe title="Can I email… &lt;body&gt; element" src="https://embed.caniemail.com/html-body/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
