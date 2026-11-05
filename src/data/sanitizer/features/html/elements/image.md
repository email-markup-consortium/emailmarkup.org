---
title: "<image>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

In the HTML namespace, the HTML parser converts an `<image>` start tag to `<img>`. The applicable attributes are listed under the [`<img>` element](/en/docs/sanitizer/features/html/elements/img/).

## Recommendation

This section is under active discussion.

Sanitization must account for the parser converting this obsolete spelling to `<img>`. This entry does not refer to the SVG `<image>` element, which belongs to a different namespace.

## Resources

- [MDN: Obsolete and deprecated elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#obsolete_and_deprecated_elements)
- [HTML Standard: The "in body" insertion mode](https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inbody)

## Email client compatibility

No compatibility data available for this obsolete spelling.
