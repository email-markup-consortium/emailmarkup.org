---
title: "<input>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `accept`
- `alpha` - experimental
- `alt`
- `autocomplete`
- `capture`
- `checked`
- `colorspace` - experimental
- `dirname`
- `disabled`
- `form`
- `formaction`
- `formenctype`
- `formmethod`
- `formnovalidate`
- `formtarget`
- `height`
- `incremental` - non-standard
- `list`
- `max`
- `maxlength`
- `min`
- `minlength`
- `multiple`
- `name`
- `orient` - non-standard
- `pattern`
- `placeholder`
- `popovertarget`
- `popovertargetaction`
- `readonly`
- `required`
- `results` - non-standard
- `size`
- `src`
- `step`
- `switch` - experimental
- `title` - global attribute with element-specific meaning
- `type`
- `value`
- `webkitdirectory` - non-standard
- `width`

## Recommendation

This section is under active discussion.

## Impacts

### Accessibility

Any future support should preserve accessible labels, relevant instructions, and native control states. Input types and their attributes require individual consideration; supporting one type does not establish support for every control.

### Privacy

Inputs can contribute hidden, entered, autofilled, or user-selected file data to a form submission. Image inputs can also load remote resources and submit click coordinates.

## Resources

- [MDN: `<input>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)
- [HTML Standard: The `input` element](https://html.spec.whatwg.org/multipage/input.html#the-input-element)

## Email client compatibility

<iframe title="Can I email… &lt;input type=&quot;checkbox&quot;&gt; element" src="https://embed.caniemail.com/html-input-checkbox/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

<iframe title="Can I email… &lt;input type=&quot;hidden&quot;&gt; element" src="https://embed.caniemail.com/html-input-hidden/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

<iframe title="Can I email… &lt;input type=&quot;radio&quot;&gt; element" src="https://embed.caniemail.com/html-input-radio/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

<iframe title="Can I email… &lt;input type=&quot;reset&quot;&gt; element" src="https://embed.caniemail.com/html-input-reset/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

<iframe title="Can I email… &lt;input type=&quot;submit&quot;&gt; element" src="https://embed.caniemail.com/html-input-submit/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

<iframe title="Can I email… &lt;input type=&quot;text&quot;&gt; element" src="https://embed.caniemail.com/html-input-text/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
