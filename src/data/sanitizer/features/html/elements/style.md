---
title: "<style>"
description: ""
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Attributes

- `blocking`
- `media`
- `title` - global attribute with element-specific meaning
- `type` - deprecated

## Recommendation

This section is under active discussion.

## Impacts

### Privacy

Stylesheets can load external resources through imports, image URLs, and font sources. CSS rules need separate sanitization and, when necessary, scoping to keep them from affecting the email client’s interface.

## Resources

- [MDN: `<style>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/style)
- [HTML Standard: The `style` element](https://html.spec.whatwg.org/multipage/semantics.html#the-style-element)

## Email client compatibility

<iframe title="Can I email… &lt;style&gt; element" src="https://embed.caniemail.com/html-style/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>
