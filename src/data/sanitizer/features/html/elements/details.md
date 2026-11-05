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

It is highly recommended for an email client to support the `<details>` element.

### open and name

It is highly recommended to support `open` and `name`. If names are rewritten to isolate mutually exclusive disclosure groups, preserve grouping within the message and avoid collisions with groups in the email client’s interface.

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
