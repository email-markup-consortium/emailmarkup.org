---
title: "<span>"
description:
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `<span>` element is a generic container with no special meaning.

## Recommendation

It is highly recommended for an email client to support the `<span>` element. 


## Impacts

### Progressive enhancement

In the context of email in which some HTML elements are expected not to be supported by some email clients, supporting `<span>` may allow the developer to code the email with progressive enhancement in mind and implement an alternative more basic experience.

### Accessibility

While it does not have any semantic meaning on its own and is mainly used for styling, adding the `role` tag attribute can change the semantic meaning of a `<span>`. Supporting `<span>` allows the developer to group elements that semantically need to belong to the same parent or wrap some content that needs to belong to an element with a specific role.


## Resources

- [MDN: `<span>`: The Content Span element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
- [HTML Standard: The `span` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element)


## Email client compatibility

<iframe title="Can I email… &lt;span&gt; element" src="https://embed.caniemail.com/html-span/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>