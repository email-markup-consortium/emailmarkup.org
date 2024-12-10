---
title: id
description:
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `id` global attribute defines a unqiue identifier on an element.

## Recommendation

It is highly recommended to support the `id` attribute.

The value of the `id` attribute on an element may be referenced in the values of other attributes on other elements such as the `for` and `aria-labelledby` attributes. Removing the `id` attribute in such cases affects the semantics of the HTML document and has negative impact on accessibility.

If a webmail client directly embeds HTML messages on the same webpage (see [embedding contexts](/en/docs/vision/#embedding-contexts)), then it is a good idea to prefix the values of `id` attributes within the HTML message to avoid clashes with values used by the email client elsewhere. However, all relevant references must also be prefixed such as:

- CSS selectors
- Values of attributes referencing the value of the `id` attribute (e.g. `for`, `aria-labelledby`)

## Resources

- [MDN: The `id` global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
- [HTML Standard: The `id` global attribute](https://html.spec.whatwg.org/multipage/dom.html#global-attributes:the-id-attribute-2)

## Email client compatibility

No compatibility data available.