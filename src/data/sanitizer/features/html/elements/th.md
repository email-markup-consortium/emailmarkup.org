---
title: "<th>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `abbr`
- `align` - deprecated
- `axis` - deprecated
- `bgcolor` - deprecated
- `char` - deprecated
- `charoff` - deprecated
- `colspan`
- `headers`
- `height` - deprecated
- `rowspan`
- `scope`
- `valign` - deprecated
- `width` - deprecated

## Recommendation

It is highly recommended for an email client to support the `<th>` element.

### abbr, colspan, rowspan, and scope

It is highly recommended to support these attributes to preserve the table’s header labels, cell spans, and header scope.

### headers

It is highly recommended to support `headers`. If header cell IDs are rewritten, update every ID in this space-separated list and keep the references within the email message.

### Deprecated attributes

The positive recommendation does not include the deprecated attributes listed above. Their handling is under active discussion.

## Impacts

### Accessibility

Header cells and their `scope`, `headers`, and `abbr` attributes help assistive technology communicate the context of data cells. Preserve these relationships when sanitizing tables.

## Resources

- [MDN: `<th>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/th)
- [HTML Standard: The `th` element](https://html.spec.whatwg.org/multipage/tables.html#the-th-element)

## Email client compatibility

No compatibility data available.
