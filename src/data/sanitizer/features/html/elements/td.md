---
title: "<td>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `abbr` - deprecated
- `align` - deprecated
- `axis` - deprecated
- `bgcolor` - deprecated
- `char` - deprecated
- `charoff` - deprecated
- `colspan`
- `headers`
- `height` - deprecated
- `rowspan`
- `scope` - deprecated
- `valign` - deprecated
- `width` - deprecated

## Recommendation

It is highly recommended for an email client to support the `<td>` element.

### colspan and rowspan

It is highly recommended to support `colspan` and `rowspan` to preserve the table’s cell structure.

### headers

It is highly recommended to support `headers`. If header cell IDs are rewritten, update every ID in this space-separated list and keep the references within the email message.

### Deprecated attributes

The positive recommendation does not include the deprecated attributes listed above. Their handling is under active discussion.

## Impacts

### Accessibility

Preserve cell spans and `headers` references so assistive technology can associate data with the correct row and column headers.

## Resources

- [MDN: `<td>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/td)
- [HTML Standard: The `td` element](https://html.spec.whatwg.org/multipage/tables.html#the-td-element)

## Email client compatibility

No compatibility data available.
