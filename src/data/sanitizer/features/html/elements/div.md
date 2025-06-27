---
title: "<div>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `<div>` element is a generic container with no special meaning.

## Recommendation

It is highly recommended for an email client to support the `<div>` element. 


## Impacts

### Progressive enhancement

In the context of email in which some HTML elements are expected not to be supported by some email clients, supporting `<div>` may allow the developer to code the email with progressive enhancement in mind and implement an alternative more basic experience.

### Accessibility

While it does not have any semantic meaning on its own and is mainly used for styling, adding the `role` tag attribute can change the semantic meaning of a `<div>`. Supporting `<div>` allows the developer to group elements that semantically need to belong to the same parent.


## Resources

- [MDN: `<div>`: The Content Division element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
- [HTML Standard: The `div` element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element)


## Email client compatibility

<iframe title="Can I email… &lt;div&gt; element" src="https://embed.caniemail.com/html-div/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>