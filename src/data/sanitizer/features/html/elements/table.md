---
title: "<table>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `align` - deprecated
- `background` - deprecated
- `bgcolor` - deprecated
- `border` - deprecated
- `cellpadding` - deprecated
- `cellspacing` - deprecated
- `frame` - deprecated
- `rules` - deprecated
- `summary` - deprecated
- `width` - deprecated

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

Preserve data-table structure, captions, and header relationships so assistive technology can communicate cell context. Layout tables need their presentation semantics preserved so they are not announced as data tables.

### Privacy

The deprecated `background` attribute can load a remote image. Its handling must follow the same remote-content policy as other image requests.

## Resources

- [MDN: `<table>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table)
- [HTML Standard: The `table` element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)

## Email client compatibility

<iframe title="Can I email… &lt;table&gt; element" src="https://embed.caniemail.com/html-table/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
