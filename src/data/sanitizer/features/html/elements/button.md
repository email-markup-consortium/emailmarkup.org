---
title: "<button>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `command`
- `commandfor`
- `disabled`
- `form`
- `formaction`
- `formenctype`
- `formmethod`
- `formnovalidate`
- `formtarget`
- `interestfor` - experimental
- `name`
- `popovertarget`
- `popovertargetaction`
- `type`
- `value`

## Recommendation

It is highly recommended for an email client to support the `<button>` element.

### disabled, name, type, and value

It is highly recommended to preserve these attributes when their associated behavior is supported. The `type` value determines whether a button submits, resets, or performs no default form action; submission and reset behavior remain under active discussion.

### form, formaction, formenctype, formmethod, formnovalidate, and formtarget

This section is under active discussion. These attributes can associate the button with a form or change where and how information is submitted. Form references must remain within the email message.

### command, commandfor, popovertarget, popovertargetaction, and interestfor

This section is under active discussion. Any supported target references must remain within the email message and must not control the email client’s interface.

## Impacts

### Accessibility

Native buttons provide keyboard activation and button semantics to assistive technology. Preserve an accessible name and ensure that any supported action remains operable without a pointing device.

## Resources

- [MDN: `<button>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- [HTML Standard: The `button` element](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)

## Email client compatibility

### `<button type="reset">` element

<iframe title="Can I email… &lt;button type=&quot;reset&quot;&gt; element" src="https://embed.caniemail.com/html-button-reset/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

### `<button type="submit">` element

<iframe title="Can I email… &lt;button type=&quot;submit&quot;&gt; element" src="https://embed.caniemail.com/html-button-submit/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

### command and commandfor attributes

<iframe title="Can I email… command and commandfor attributes" src="https://embed.caniemail.com/html-command-attribute/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
