---
title: "<link>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `as`
- `blocking`
- `charset` - deprecated
- `color`
- `crossorigin`
- `disabled`
- `fetchpriority`
- `href`
- `hreflang`
- `imagesizes`
- `imagesrcset`
- `integrity`
- `media`
- `referrerpolicy`
- `rel`
- `rev` - deprecated
- `sizes`
- `target` - deprecated
- `title` - global attribute with element-specific meaning
- `type`

## Recommendation

This section is under active discussion.

## Impacts

### Privacy

External resource links and resource hints can contact remote servers. Such requests may disclose message access and recipient identifiers embedded in resource URLs, so they need the client’s remote-content policy.

## Resources

- [MDN: `<link>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link)
- [HTML Standard: The `link` element](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)

## Email client compatibility

<iframe title="Can I email… &lt;link&gt; element" src="https://embed.caniemail.com/html-link/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
