---
title: "<meta>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `charset`
- `content`
- `http-equiv`
- `media`
- `name`

## Recommendation

This section is under active discussion.

## Impacts

### Privacy

Some metadata changes behavior rather than describing content. In particular, a refresh directive can navigate to an external destination without a link click and needs separate consideration from metadata such as color-scheme.

## Resources

- [MDN: `<meta>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta)
- [HTML Standard: The `meta` element](https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element)

## Email client compatibility

### color-scheme metadata

This test covers `<meta name="color-scheme">`, not the element’s other metadata names or directives.

<iframe title="Can I email… color-scheme meta tag" src="https://embed.caniemail.com/html-meta-color-scheme/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
