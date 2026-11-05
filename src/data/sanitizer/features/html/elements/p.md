---
title: "<p>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `align` - deprecated

## Recommendation

It is highly recommended for an email client to support the `<p>` element.

### Deprecated attributes

The positive recommendation does not include the deprecated attributes listed above. Their handling is under active discussion.

## Impacts

### Accessibility
Assistive technology including screen-readers understand what the `<p>` is meant to represent which allows them to provide their users with a way to perform common reading tasks such as skipping a paragraph and navigating to the next/previous paragraph.

## Resources

- [MDN: `<p>`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
- [HTML Standard: The `p` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element)

## Email client compatibility

<iframe title="Can I email… &lt;p&gt; element" src="https://embed.caniemail.com/html-p/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
