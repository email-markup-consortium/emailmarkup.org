---
title: "<source>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `height`
- `media`
- `sizes`
- `src`
- `srcset`
- `type`
- `width`

## Recommendation

This section is under active discussion.

## Impacts

### Performance

Preserving source selection can let the client choose a suitable format or image size rather than downloading an unnecessarily large resource. Source URLs still need the client’s normal remote-content policy.

## Resources

- [MDN: `<source>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source)
- [HTML Standard: The `source` element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element)

## Email client compatibility

No compatibility data available.
