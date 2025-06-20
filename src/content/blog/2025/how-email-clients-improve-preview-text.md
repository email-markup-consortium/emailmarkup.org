---
title: How email clients can improve preview text with one simple tag
description: Email clients can improve preview text by supporting a standard HTML meta tag; no hacks needed.
author: hussein-alhammad
pubDate: 2025-06-20
published: true
layout: "@layouts/BlogLayout"
---

For over a decade, email developers have relied on a hack to control what appears as the inbox preview text, which is often displayed next to or beneath the subject line. This "preheader spacing" hack involves stuffing hundreds of invisible characters after the desired text to manipulate how preview text is rendered by email clients.

The exact implementation changes over time as email clients change how they generate the preview text, but the concept has remained the same:

1. Add your preferred preview text after the opening `<body>` tag and before any other content
2. Add a few 100s special characters as HTML entities. What these characters are have changed over the years.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div style="display:none;">
    Desired preview text

    &#8199;&#847; &#8199;&#847; &#8199;&#847; <!-- (100s more) -->
  </div>

  <div>
    <!-- Visible email content -->
  </div>
</body>
</html>
```

These characters create invisible padding and prevent the rest of the email content from appearing in the preview text.

This hack is just poor for everyone. Email clients try to display a helpful preview text message. Senders want to control the preview text (or add a secondary piece of text besides the subject line).


## Next generation preview text

The new approach email clients are taking is to display AI-generated summary of the email message as the preview text. This approach aims to better represent what the email is actually about, but it doesn't give senders control over messaging.

## A solution: use `<meta name="description">`

Web developers have long used the `<meta name="description">` tag to influence how pages are previewed in search results and social media platforms. Email can do the same. We do not need to invent a new mechanism, and developers shouldn't need to rely on a trick like the preheader spacing hack.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Desired preview text">
  <title>Document</title>
</head>
<body>
  <div>
    <!-- Visible email content -->
  </div>
</body>
</html>
```

If adopted by email clients, this method would provide a clear, standardized, and machine-readable way for senders to define preview text without resorting to hacks.


## What we're proposing

For email clients:

* Disregard invisible characters when generating preview text.
* Support the `<meta name="description">` tag as a standard developer-friendly alternative.

For senders (after email clients adopt these changes):

* Use the `<meta name="description">` tag to define your desired preview text.
* Stop adding preheader spacing hacks that rely on hundreds of invisible characters.


## Why this matters

The preheader hack bloats HTML and provides inconsistent results across email clients. It exists because of sender's needs and the lack of standards. The lack of transparent communication between email clients and developers also plays a role.

Gmail and Yahoo have allowed developers to use industry standard structured data and Schema to explicitly express marketing promotions which influence how the email is presented to the user. This highlights the need to provide developers with a proper mechanism to set the preview text or at least influence it without resorting to a hacky approach.

By moving to a standard meta tag, we make email more predictable and maintainable while giving senders a proper mechanism to explicitly set the desired content for the preview text. 

Whether email clients display the text provided in the meta tag as the preview text or generate an AI summary is a product choice. Regardless, the future doesn't need the preheader spacing hack. It needs to go.