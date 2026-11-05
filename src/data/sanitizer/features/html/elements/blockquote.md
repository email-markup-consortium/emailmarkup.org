---
title: "<blockquote>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `cite`

## Recommendation

It is highly recommended for an email client to support the `<blockquote>` element.

### cite

The `cite` attribute can be retained as source metadata. Retaining the URL should not automatically fetch the cited resource or imply that every URL scheme is supported.

## Impacts

### Accessibility

Preserving quotation markup allows assistive technology to distinguish quoted content from the surrounding message. The `cite` URL is metadata and is not a replacement for a visible attribution.

## Resources

- [MDN: `<blockquote>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote)
- [HTML Standard: The `blockquote` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element)

## Email client compatibility

<iframe title="Can I email… &lt;blockquote&gt; element" src="https://embed.caniemail.com/html-blockquote/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
