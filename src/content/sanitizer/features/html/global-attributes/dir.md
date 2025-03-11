---
title: dir
description:
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `dir` global attribute sets the direction of an element's text (left-to-right or right-to-left).

## Recommendation

It is highly recommended for an email client to support the `dir` attribute. It allows the author to set the direction of the text in the HTML message. 

The direction of the text in the HTML message may not match the direction of the text in the email client UI. The HTML message may also have mixed directional text and the author would need in this case to specify the `dir` attribute on multiple elements.

## Resources

- [MDN: The `dir` global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
- [HTML Standard: The `dir` attribute](https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute)

## Email client compatibility

<iframe title="Can I email… dir attribute" src="https://embed.caniemail.com/html-dir/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>