---
title: "<select>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `autocomplete`
- `disabled`
- `form`
- `multiple`
- `name`
- `required`
- `size`

## Recommendation

It is highly recommended for an email client to support the `<select>` element.

### autocomplete, disabled, multiple, name, required, and size

It is highly recommended to preserve these attributes when their associated native control behavior is supported. The client’s handling of form submission remains under active discussion.

### form

It is highly recommended to preserve the form association when the referenced form is supported. Update the reference if the form’s ID is rewritten and keep it within the email message.

## Impacts

### Accessibility

Native selection controls provide keyboard interaction and expose choices and selection state to assistive technology. Preserve the label and the associated `<option>` and `<optgroup>` children.

## Resources

- [MDN: `<select>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)
- [HTML Standard: The `select` element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element)

## Email client compatibility

<iframe title="Can I email… &lt;select&gt; element" src="https://embed.caniemail.com/html-select/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
