---
title: "<track>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `default`
- `kind`
- `label`
- `src`
- `srclang`

## Recommendation

It is highly recommended for an email client to support the `<track>` element.

### default, kind, label, and srclang

It is highly recommended to support `default`, `kind`, `label`, and `srclang` when the parent media element is supported.

### src

This section is under active discussion. Track loading must follow the client’s URL and remote-content policies; a positive recommendation for captions does not endorse unrestricted external requests.

## Impacts

### Accessibility

Captions, subtitles, and descriptions can make media usable for people who cannot hear the audio or see the visual content. Preserve track language, labels, and association with the parent media element.

### Internationalisation

Preserving `srclang` and `label` lets recipients distinguish caption and subtitle languages.

## Resources

- [MDN: `<track>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track)
- [HTML Standard: The `track` element](https://html.spec.whatwg.org/multipage/media.html#the-track-element)

## Email client compatibility

No compatibility data available.
