---
title: "<area>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `alt`
- `coords`
- `download`
- `href`
- `interestfor` - experimental
- `ping`
- `referrerpolicy`
- `rel`
- `shape`
- `target`

## Recommendation

It is highly recommended for an email client to support the `<area>` element.

### alt, coords, and shape

It is highly recommended to support `alt`, `coords`, and `shape` so linked regions retain their names and geometry.

### href, download, ping, referrerpolicy, rel, and target

These attributes need the same individual treatment as the corresponding attributes on the [`<a>` element](/en/docs/sanitizer/features/html/elements/a/). Supporting the element does not imply support for every URL scheme, tracking request, download, or target context.

### interestfor

This section is under active discussion. Any support must keep the target reference within the email message.

## Impacts

### Accessibility

Preserve `alt` on linked areas to give each image-map link an accessible name. Keep each area inside its map and retain the image-to-map association.

## Resources

- [MDN: `<area>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/area)
- [HTML Standard: The `area` element](https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element)

## Email client compatibility

<iframe title="Can I email… Image maps" src="https://embed.caniemail.com/html-image-maps/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
