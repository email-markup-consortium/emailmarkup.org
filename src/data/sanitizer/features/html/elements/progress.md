---
title: "<progress>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `max`
- `value`

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

Native progress semantics expose progress and whether it is determinate. Preserve the accessible name and do not invent a `value` for an indeterminate task.

## Resources

- [MDN: `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress)
- [HTML Standard: The `progress` element](https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element)

## Email client compatibility

<iframe title="Can I email… &lt;progress&gt; element" src="https://embed.caniemail.com/html-progress/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
