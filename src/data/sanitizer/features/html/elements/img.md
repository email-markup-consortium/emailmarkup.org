---
title: "<img>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `align` - deprecated
- `alt`
- `attributionsrc` - deprecated
- `border` - deprecated
- `controls`
- `crossorigin`
- `decoding`
- `elementtiming` - experimental
- `fetchpriority`
- `height`
- `hspace` - deprecated
- `ismap`
- `loading`
- `longdesc` - deprecated
- `name` - deprecated
- `referrerpolicy`
- `sizes`
- `src`
- `srcset`
- `usemap`
- `vspace` - deprecated
- `width`

## Recommendation

It is highly recommended for an email client to support the `<img>` element.

### alt, width, and height

It is highly recommended to support `alt`, `width`, and `height`. Preserve empty alternative text for decorative images.

### src, srcset, sizes, crossorigin, and referrerpolicy

This section is under active discussion. Apply the client’s URL and remote-content policies consistently to every image candidate, including candidates in `srcset`.

### usemap and ismap

It is highly recommended to preserve a supported client-side image map through `usemap`. Keep the map reference within the email message and update it if the map’s name is rewritten. The server-side `ismap` behavior remains under active discussion because it can send pointer coordinates to a server.

### decoding, fetchpriority, loading, and controls

This section is under active discussion. Rendering and loading hints need to follow the client’s resource policy. The HTML Standard’s `controls` attribute allows user-agent image controls, such as fullscreen viewing, and needs separate support consideration.

### elementtiming and attributionsrc

This section is under active discussion. These features introduce performance reporting or attribution behavior and are not included in the positive recommendation for the element.

### Deprecated attributes

The positive recommendation does not include the deprecated attributes listed above. Their handling is under active discussion.

## Impacts

### Accessibility

Preserve `alt`, including an empty value for decorative images, so the message remains understandable when images are blocked or cannot be seen.

### Performance

Preserving image dimensions helps reserve layout space. Loading and decoding hints can reduce resource use, but they must not bypass the client’s remote-image controls.

## Resources

- [MDN: `<img>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)
- [HTML Standard: The `img` element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)

## Email client compatibility

### `<img>` element

<iframe title="Can I email… &lt;img&gt; element" src="https://embed.caniemail.com/html-img/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

### srcset and sizes attributes

<iframe title="Can I email… srcset and sizes attributes" src="https://embed.caniemail.com/html-srcset/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

### loading attribute

<iframe title="Can I email… loading attribute" src="https://embed.caniemail.com/html-loading-attribute/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
