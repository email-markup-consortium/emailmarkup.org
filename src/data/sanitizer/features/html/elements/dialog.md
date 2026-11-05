---
title: "<dialog>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `closedby`
- `open`

## Recommendation

It is highly recommended for an email client to support the `<dialog>` element.

### open and closedby

It is highly recommended to support `open` and `closedby` when the client can preserve their native display and dismissal behavior within the message. Modal activation and focus management require separate handling for each embedding context.

## Impacts

### Accessibility

A supported dialog needs an accessible name, appropriate focus placement, keyboard dismissal, and focus restoration. A modal dialog inside an email must not make the email client’s own controls inaccessible.

## Resources

- [MDN: `<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [HTML Standard: The `dialog` element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)

## Email client compatibility

<iframe title="Can I email… &lt;dialog&gt; element" src="https://embed.caniemail.com/html-dialog/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
