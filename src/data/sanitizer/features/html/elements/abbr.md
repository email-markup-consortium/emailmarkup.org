---
title: "<abbr>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `title` - global attribute with element-specific meaning

## Recommendation

It is highly recommended for an email client to support the `<abbr>` element.

### title

The `title` attribute can be supported for an abbreviation’s expansion. It is a global attribute with a specific meaning on this element.

## Impacts

### Accessibility

Preserving abbreviations and their expansions helps readers understand shortened terms. An expansion in `title` is not consistently available to touch, keyboard, or screen-reader users, so authors should also explain unfamiliar abbreviations in visible text.

## Resources

- [MDN: `<abbr>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr)
- [HTML Standard: The `abbr` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)

## Email client compatibility

<iframe title="Can I email… &lt;abbr&gt; element" src="https://embed.caniemail.com/html-abbr/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
