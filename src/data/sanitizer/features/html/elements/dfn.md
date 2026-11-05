---
title: "<dfn>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `title` - global attribute with element-specific meaning

## Recommendation

It is highly recommended for an email client to support the `<dfn>` element.

### title

The `title` attribute can be supported for the term being defined. It is a global attribute with a specific meaning on this element.

## Impacts

### Accessibility

Preserving definition markup retains the relationship between a term and its definition. The definition should remain available in visible text rather than only through a tooltip.

## Resources

- [MDN: `<dfn>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dfn)
- [HTML Standard: The `dfn` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element)

## Email client compatibility

<iframe title="Can I email… &lt;dfn&gt; element" src="https://embed.caniemail.com/html-dfn/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
