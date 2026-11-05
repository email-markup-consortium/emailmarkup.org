---
title: "<picture>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

This element has no element-specific attributes.

## Recommendation

This section is under active discussion.

## Impacts

### Progressive enhancement

Preserve the fallback `<img>` and its text alternative so content remains available when source selection is unsupported.

### Performance

Responsive source selection can avoid downloading an image larger than the recipient’s display requires.

## Resources

- [MDN: `<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)
- [HTML Standard: The `picture` element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)

## Email client compatibility

<iframe title="Can I email… &lt;picture&gt; element" src="https://embed.caniemail.com/html-picture/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
