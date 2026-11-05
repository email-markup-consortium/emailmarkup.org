---
title: "<details>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `name`
- `open`

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

The native disclosure control supports keyboard interaction and exposes its expanded state. Preserve the associated `<summary>` and ensure users can reveal the contents.

### Progressive enhancement

If the disclosure feature is unsupported, keep its contents readable rather than leaving information permanently hidden.

## Resources

- [MDN: `<details>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
- [HTML Standard: The `details` element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)

## Email client compatibility

No compatibility data available.
