---
title: "<form>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `accept` - deprecated
- `accept-charset`
- `action`
- `autocomplete`
- `enctype`
- `method`
- `name`
- `novalidate`
- `rel`
- `target`

## Recommendation

This section is under active discussion.

## Impacts

### Security and privacy

Form submission can transmit information to an external destination. Decisions about submission URLs, methods, and target contexts need to account for recipient consent and the email client’s embedding context.

## Resources

- [MDN: `<form>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form)
- [HTML Standard: The `form` element](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)

## Email client compatibility

<iframe title="Can I email… &lt;form&gt; element" src="https://embed.caniemail.com/html-form/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
