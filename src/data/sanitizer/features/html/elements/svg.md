---
title: "<svg>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `baseProfile` - deprecated
- `height`
- `preserveAspectRatio`
- `version` - deprecated
- `viewBox`
- `width`
- `x`
- `y`

This list excludes global SVG attributes.

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

Accessible SVG content can include titles, descriptions, and structured labels. Any future support should preserve those text alternatives while separately handling scripting, external resources, and embedded foreign content.

## Resources

- [MDN: `<svg>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/svg)
- [HTML Standard: SVG in HTML](https://html.spec.whatwg.org/multipage/embedded-content-other.html#svg-0)
- [SVG 2: The `svg` element](https://svgwg.org/svg2-draft/struct.html#SVGElement)

## Email client compatibility

<iframe title="Can I email… Embedded &lt;svg&gt; image" src="https://embed.caniemail.com/html-svg/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
