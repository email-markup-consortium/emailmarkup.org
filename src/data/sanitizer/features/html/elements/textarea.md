---
title: "<textarea>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `autocomplete`
- `cols`
- `dirname`
- `disabled`
- `form`
- `maxlength`
- `minlength`
- `name`
- `placeholder`
- `readonly`
- `required`
- `rows`
- `wrap`

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

Preserve a textarea’s accessible label, instructions, and editable or read-only state. Placeholder text is not a replacement for a persistent label.

### Internationalisation

Preserving `dirname` retains the author’s mechanism for submitting the entered text’s direction when form submission is supported.

## Resources

- [MDN: `<textarea>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea)
- [HTML Standard: The `textarea` element](https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element)

## Email client compatibility

<iframe title="Can I email… &lt;textarea&gt; element" src="https://embed.caniemail.com/html-textarea/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
