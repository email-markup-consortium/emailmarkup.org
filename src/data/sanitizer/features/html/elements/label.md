---
title: "<label>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `for`

## Recommendation

It is highly recommended for an email client to support the `<label>` element.

### for

It is highly recommended to support `for`. If control IDs are rewritten, update the label’s reference and keep it within the email message.

## Impacts

### Accessibility

An associated label provides a form control with an accessible name and a larger activation area. Preserve both explicit `for` associations and implicit associations through nesting.

## Resources

- [MDN: `<label>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)
- [HTML Standard: The `label` element](https://html.spec.whatwg.org/multipage/forms.html#the-label-element)

## Email client compatibility

No compatibility data available.
