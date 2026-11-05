---
title: "<html>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `manifest` - obsolete
- `version` - deprecated
- `xmlns` - non-standard

## Recommendation

This section is under active discussion.

## Impacts

### Internationalisation

Preserve the message’s language and text direction when adapting the root element for embedding. These values may differ from those used by the email client’s interface.

### Privacy

The obsolete `manifest` attribute historically referenced an application-cache manifest. It is not included in any recommendation to preserve message language or direction.

## Resources

- [MDN: `<html>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html)
- [HTML Standard: The `html` element](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element)

## Email client compatibility

No compatibility data available.
