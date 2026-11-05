---
title: "<map>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `name`

## Recommendation

It is highly recommended for an email client to support the `<map>` element.

### name

It is highly recommended to support `name`. If a name is prefixed for isolation, update matching `usemap` references as well.

## Impacts

### Accessibility

Preserve the connection between an image’s `usemap`, the map’s `name`, and its `<area>` children. Each linked area needs a meaningful text alternative.

## Resources

- [MDN: `<map>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/map)
- [HTML Standard: The `map` element](https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element)

## Email client compatibility

<iframe title="Can I email… Image maps" src="https://embed.caniemail.com/html-image-maps/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
