---
title: "<bdi>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

This element has no element-specific attributes.

## Recommendation

It is highly recommended for an email client to support the `<bdi>` element.

## Impacts

### Internationalisation

Isolating text of an unknown direction prevents it from changing the ordering of surrounding punctuation and text. This is particularly useful for names and other user-generated content in mixed-direction messages.

## Resources

- [MDN: `<bdi>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdi)
- [HTML Standard: The `bdi` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element)

## Email client compatibility

<iframe title="Can I email… &lt;bdi&gt; element" src="https://embed.caniemail.com/html-bdi/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
