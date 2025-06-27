---
title: "data-*"
description:
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `data-*` attributes provide a way for adding custom attribute to HTML elements in a standard way. They provide no functionality on their own, but can be accessed via CSS and JavaScript.

## Recommendation

The Email Markup Consortium does not have an official stance yet.

The main value `data-*` attributes provide in the context of HTML messages is their uses in CSS:

1. attribute selectors
2. the `attr()` CSS function

```css
[data-example="value"] {
  color: red;
}

.example {
  content: attr(data-example);
}
```

The embedding context of the email message here plays an important role. If the HTML message is embedded directly on the same page, then there is a chance the email client app and the embedded HTML message use the same data attribute (whether coincidentally or for malicous reasons).

## Resources

- [MDN: Using data attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
- [MDN: Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [MDN: attr()](https://developer.mozilla.org/en-US/docs/Web/CSS/attr)

## Email client compatibility

No compatibility data available.