---
title: "<menu>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `compact` - deprecated

## Recommendation

It is highly recommended for an email client to support the `<menu>` element.

### Deprecated attributes

The positive recommendation does not include the deprecated attributes listed above. Their handling is under active discussion.

## Impacts

### Accessibility

Preserving the menu and its `<li>` children retains native list semantics. This element alone does not create an ARIA application menu or its keyboard interaction model.

## Resources

- [MDN: `<menu>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/menu)
- [HTML Standard: The `menu` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element)

## Email client compatibility

No compatibility data available.
