---
title: "<ol>: The Ordered List element"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `<ol>` element represents an ordered list of items.

## Attributes

- `reversed`
- `start`
- `type`


## Recommendation

It is highly recommended for an email client to support the `<ol>` element and its attributes.

## Impacts

### Accessibility

The `<ol>` element is a semantic element. Assistive techology including screen-readers treat this differently to other pieces of text. This includes the `reversed` attributes as [screen-readers handle these appropriately](https://www.tempertemper.net/blog/reversing-an-ordered-list-in-html).

## Resources

- [MDN: `<ol>`: The Unordered List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
- [HTML Standard: The `ol` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)
- [Reversing an ordered list in HTML](https://www.tempertemper.net/blog/reversing-an-ordered-list-in-html)

## Email client compatibility

<iframe title="Can I email… &lt;ul&gt;, &lt;ol&gt; and &lt;dl&gt;" src="https://embed.caniemail.com/html-lists/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>