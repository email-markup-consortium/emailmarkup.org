---
title: "<ruby>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

This element has no element-specific attributes.

## Recommendation

It is highly recommended for an email client to support the `<ruby>` element.

## Impacts

### Internationalisation

Preserving ruby structure retains pronunciation or other annotations alongside their base text. Keep `<rt>` and fallback `<rp>` children associated with the correct base text.

## Resources

- [MDN: `<ruby>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ruby)
- [HTML Standard: The `ruby` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element)

## Email client compatibility

<iframe title="Can I email… &lt;ruby&gt; element" src="https://embed.caniemail.com/html-ruby/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
