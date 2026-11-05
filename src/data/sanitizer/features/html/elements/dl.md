---
title: "<dl>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `compact` - deprecated

## Recommendation

It is highly recommended for an email client to support the `<dl>` element.

### Deprecated attributes

The positive recommendation does not include the deprecated attributes listed above. Their handling is under active discussion.

## Impacts

### Accessibility

Preserving the list together with its `<dt>` and `<dd>` children retains term–description relationships for assistive technology.

## Resources

- [MDN: `<dl>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl)
- [HTML Standard: The `dl` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)

## Email client compatibility

<iframe title="Can I email… &lt;ul&gt;, &lt;ol&gt; and &lt;dl&gt;" src="https://embed.caniemail.com/html-lists/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
