---
title: "<math>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `display`

This list excludes global MathML attributes.

## Recommendation

It is highly recommended for an email client to support the `<math>` element and its attributes.

This recommendation concerns mathematical structure and accessibility. It does not extend to unrestricted attributes or descendants; MathML needs namespace-aware sanitization rules.

## Impacts

### Accessibility

Preserving structured MathML allows compatible assistive technology to navigate and speak mathematical expressions. Flattening expressions into plain text or an image can lose mathematical relationships.

### Progressive enhancement

Preserve any supplied accessible fallback if MathML cannot be rendered. The handling of MathML descendants needs its own rules; support for `<math>` alone is insufficient.

## Resources

- [MDN: `<math>` element](https://developer.mozilla.org/en-US/docs/Web/MathML/Reference/Element/math)
- [HTML Standard: MathML in HTML](https://html.spec.whatwg.org/multipage/embedded-content-other.html#mathml)
- [MathML Core: The `math` element](https://w3c.github.io/mathml-core/#the-top-level-math-element)

## Email client compatibility

No compatibility data available.
