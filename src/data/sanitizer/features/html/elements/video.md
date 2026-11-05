---
title: "<video>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `autoplay`
- `controls`
- `controlslist` - non-standard
- `crossorigin`
- `disablepictureinpicture`
- `disableremoteplayback`
- `height`
- `loading` - experimental
- `loop`
- `muted`
- `playsinline`
- `poster`
- `preload`
- `src`
- `width`

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

Any support should retain playback controls, associated text tracks, and fallback content. Avoid behavior that forces recipients to consume autoplaying or continuously looping media.

## Resources

- [MDN: `<video>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)
- [HTML Standard: The `video` element](https://html.spec.whatwg.org/multipage/media.html#the-video-element)

## Email client compatibility

<iframe title="Can I email… &lt;video&gt; element" src="https://embed.caniemail.com/html-video/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
