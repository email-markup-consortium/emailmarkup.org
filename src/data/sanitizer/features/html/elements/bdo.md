---
title: "<bdo>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `dir`

`dir` is a global attribute, but is required on this element and must be `ltr` or `rtl`.

## Recommendation

It is highly recommended for an email client to support the `<bdo>` element and its attributes.

## Impacts

### Internationalisation

Preserving an explicit direction override retains the intended character order in mixed-direction text. The `dir` attribute must remain associated with the element.

## Resources

- [MDN: `<bdo>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdo)
- [HTML Standard: The `bdo` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element)

## Email client compatibility

No compatibility data available.
