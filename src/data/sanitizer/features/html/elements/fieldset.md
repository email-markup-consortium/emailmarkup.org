---
title: "<fieldset>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `disabled`
- `form`
- `name`

## Recommendation

It is highly recommended for an email client to support the `<fieldset>` element.

### disabled and name

It is highly recommended to support `disabled` and `name` when the associated controls are supported.

### form

It is highly recommended to preserve the form association when the referenced form is supported. If IDs are rewritten, update the reference and keep it within the email message.

## Impacts

### Accessibility

Preserving a fieldset with its `<legend>` gives related form controls a shared accessible label. Removing the grouping can make individual controls harder to understand.

## Resources

- [MDN: `<fieldset>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset)
- [HTML Standard: The `fieldset` element](https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element)

## Email client compatibility

No compatibility data available.
