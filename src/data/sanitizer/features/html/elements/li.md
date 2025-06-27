---
title: "<li>: The List Item element"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `<li>` element represents an ordered list of items.

## Attributes

- `value`
- `type` - deprecated, no longer part of the HTML Standard


## Recommendation

It is highly recommended for an email client to support the `<li>` element and its attributes (excluding the deprecated `type` attribute).

## Impacts

### Accessibility

The `<li>` element is a semantic element. It is vital for other semantic elements to be useful such as `<ul>` and `<ol>`.


## Resources

- [MDN: `<li>`: The List Item element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
- [HTML Standard: The `li` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element)


## Email client compatibility

<iframe title="Can I email… &lt;ul&gt;, &lt;ol&gt; and &lt;dl&gt;" src="https://embed.caniemail.com/html-lists/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>