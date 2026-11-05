---
title: "<del>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `cite`
- `datetime`

## Recommendation

It is highly recommended for an email client to support the `<del>` element.

### datetime

It is highly recommended to support `datetime` to retain the machine-readable time of the change.

### cite

The `cite` attribute can be retained as source metadata. Retaining it should not automatically fetch the cited resource or imply support for every URL scheme.

## Impacts

### Accessibility

Preserving deletion markup retains the author’s change history. Many screen readers do not announce deletions by default, so important changes should also be explained in text.

## Resources

- [MDN: `<del>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/del)
- [HTML Standard: The `del` element](https://html.spec.whatwg.org/multipage/edits.html#the-del-element)

## Email client compatibility

<iframe title="Can I email… &lt;del&gt; element" src="https://embed.caniemail.com/html-del/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
