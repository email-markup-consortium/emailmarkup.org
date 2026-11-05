---
title: "<output>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `for`
- `form`
- `name`

## Recommendation

It is highly recommended for an email client to support the `<output>` element.

### for, form, and name

It is highly recommended to support these attributes. If IDs are rewritten, update every referenced control and form ID while keeping references within the email message.

## Impacts

### Accessibility

An output has native status semantics that can help assistive technology announce changes. Preserve its accessible name and related control references; do not rely on scripts to supply essential initial content.

## Resources

- [MDN: `<output>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/output)
- [HTML Standard: The `output` element](https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element)

## Email client compatibility

No compatibility data available.
