---
title: Vision
description: Email Markup Consortium's vision for more consistent rendering in email clients.
layout: "@layouts/MainLayout"
---

## Background

Email clients have the challenge of dealing with third-party code: HTML email messages. For an email client to safely embed a HTML message, they need to:

1. Sanitize the HTML message
2. Embed the HTML message

### Third-party content sanitization

Third-party content sanitization is a problem any app/website must address if they wish to safely process or display third-party content. That is, only what is considered to be safe is kept and anything else is either removed or replaced.

In the context of email, a HTML message is considered third-party content and email clients must sanitize this content to safely display it to the recipient. As things stand, each email client has their own way of sanitizing HTML messages. They mainly differ in two ways:

1. Supported features: What features are considered safe to keep
2. Unsupported features: How features that are not considered safe are handled

Given each email client has their own implementation of (2), even if all email clients agreed on (1), there can still be major inconsistencies in how HTML messages are rendered in different email clients.

#### Example

At the time of writing, both Yahoo and Gmail do not support:

1. CSS values using `rgb()` functional notation in the whitespace syntax
2. `<picture>` element

However, the rendered HTML in each email client is significantly different.

Consider this snippet using the `rgb()` functional notation:

```html
<h1 style="text-transform:uppercase; font-size:1.3em; color:rgb(0 128 0 / .8);">
  Heading
</h1>
```

Yahoo removes the `color` property and its value because it does not support the `rgb()` functional notation in the whitespace syntax. It keeps everything as it.

```html
<h1 style="text-transform:uppercase; font-size:1.3em;">
  Heading
</h1>
```

On the other hand, Gmail removes the entire `style` attribute:

```html
<h1>
  Heading
</h1>
```

Consider this example using the `<picture>` element:

```html
<picture>
  <source srcset="https://example.com/image-400x400.jpg" media="(min-width: 800px)">
  <img src="https://example.com/image-150x150.jpg" alt="">
</picture>
```

Yahoo removes the `<picture>` and `<source>` tags, but keeps the `<img>` tag:

```html
<img src="https://example.com/image-150x150.jpg" alt="">
```

Whereas Gmail replace the `<picture>` and `<source>` tags with empty `<u>` tags:

```html
<u></u>
<u></u>
<img src="https://example.com/image-150x150.jpg" alt="">
```

As illustrated above from real-world examples, identical level of support is not adequate for consistent rendering nor it enables developers to progressively enhance their HTML emails in a simple manner.

### Embedding contexts

Embedding third-party code is another challenge email clients face. Currently there are 3 distinct embedding contexts:

1. Native app
2. Web page (webmail client): embedded in an `<iframe>`
3. Web page (webmail client): directly embedded in the same page

Email clients need to take the embedding context into account as it can affect how they handle the HTML message. What may be considered safe when embedded in an `<iframe>`, may not be safe when directly embedded in the same page. And in some contexts, email clients may need to do additional processing such as CSS scoping.

## Vision

### No feature list

The Email Markup Consortium is not encouraging all email clients to agree on and adopt a single list of supported HTML/CSS features. In addition to this being an unfeasible goal, we think there genuinely can be good reasons for some email clients not to support some features (e.g. because of the embedding context of the HTML message).

We also do not think this alone would be enough to reach our goal of consistent and reliable rendering across email clients, and developers would still turn to hacky approaches in order to progressively enhance their code.

Having said that, we may recommend for some features to be supported.

### Solution

The Email Markup Consortium is aiming to standardize the sanitization approach for third-party code in email clients. We are working on documenting a specification that details how supported and unsupported features should be handled.

In addition, we are working on building an open-source email-specific sanitizer. Email clients can choose to use this sanitizer, but they are also free to build their own spec-compliant version.