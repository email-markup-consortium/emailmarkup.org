---
title: "<iframe>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `align` - deprecated
- `allow`
- `allowfullscreen`
- `allowpaymentrequest` - deprecated
- `browsingtopics` - deprecated
- `credentialless` - experimental
- `csp` - experimental
- `frameborder` - deprecated
- `height`
- `loading`
- `longdesc` - deprecated
- `marginheight` - deprecated
- `marginwidth` - deprecated
- `name`
- `privateToken` - experimental
- `referrerpolicy`
- `sandbox`
- `scrolling` - deprecated
- `src`
- `srcdoc`
- `width`

## Recommendation

This section is under active discussion.

## Impacts

### Security and privacy

An embedded document introduces another browsing context and may make network requests or run scripts. Any support needs an explicit isolation and permissions policy for the email client’s embedding context.

## Resources

- [MDN: `<iframe>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [HTML Standard: The `iframe` element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)

## Email client compatibility

No compatibility data available.
