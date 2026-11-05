---
title: "<ins>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `cite`
- `datetime`

## Recommendation

It is highly recommended for an email client to support the `<ins>` element.

### datetime

It is highly recommended to support `datetime` to retain the machine-readable time of the change.

### cite

The `cite` attribute can be retained as source metadata. Retaining it should not automatically fetch the cited resource or imply support for every URL scheme.

## Impacts

### Accessibility

Preserving insertion markup retains the author’s change history. Many screen readers do not announce insertions by default, so important changes should also be explained in text.

## Resources

- [MDN: `<ins>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ins)
- [HTML Standard: The `ins` element](https://html.spec.whatwg.org/multipage/edits.html#the-ins-element)

## Email client compatibility

No compatibility data available.
