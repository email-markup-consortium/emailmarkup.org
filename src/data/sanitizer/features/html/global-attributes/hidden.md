---
title: hidden
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `hidden` global attribute indicates to the browser that it should not render an element.

## Values

The `hidden` attribute is an enumerated attribute that only accepts the following values:

- an empty string: sets the element in the hidden state
- the keyword `hidden`: sets the element in the hidden state
- the keyword `until-found`: sets the element in the hidden state until found

## Recommendation

The Email Markup Consortium does not have an official recommendation at this stage.

It is worth noting that the user-agent default styles for `[hidden]` and `[hidden="until-found"]` are different and developers expect them to be different by default.

## Resources

- [MDN: The `hidden` global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)
- [HTML Standard: The `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)

## Email client compatibility

<iframe title="Can I email… hidden attribute" src="https://embed.caniemail.com/html-hidden/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>