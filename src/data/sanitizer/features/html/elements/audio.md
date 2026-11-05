---
title: "<audio>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `autoplay`
- `controls`
- `controlslist` - non-standard
- `crossorigin`
- `disableremoteplayback`
- `loading` - experimental
- `loop`
- `muted`
- `preload`
- `src`

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

Any support should retain usable playback controls and a readable alternative for essential audio information. Unexpected autoplay can interfere with screen-reader output.

## Resources

- [MDN: `<audio>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio)
- [HTML Standard: The `audio` element](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)

## Email client compatibility

<iframe title="Can I email… &lt;audio&gt; element" src="https://embed.caniemail.com/html-audio/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
