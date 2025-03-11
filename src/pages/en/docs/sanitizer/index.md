---
title: Sanitizer
description:
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

## Introduction

The Email Sanitizer defines how an email client should handle supported and unsupported HTML features in third-party code (HTML messages).

## Audience

This document is intended for:

1. Implementers: software engineers who implement features relating to the embedding of third-party HTML code in their application particularly in the context of email.
2. Individuals: developers who wish to understand how code in their HTML emails is modified when rendered by an email client that follows this specification.

## Background

### The problem

For an email client to safely embed a HTML message, it needs to:

1. Sanitize the HTML message
2. Embed the HTML message

In the context of email, a HTML message is considered third-party content and email clients must sanitize this content to safely display it to the recipient. As things stand, each email client has their own way of sanitizing HTML messages. They mainly differ in two ways:

1. Supported features: What HTML/CSS features are considered safe to keep
2. Unsupported features: How HTML/CSS features that are not considered safe are handled

Given each email client has their own implementation of (2), even if all email clients agreed on (1), there can still be major inconsistencies in how HTML messages are rendered in different email clients.

### Embedding contexts

Embedding third-party code is another challenge email clients face. Currently there are 3 distinct embedding contexts:

1. Native app
2. Web page (webmail client): embedded in an `<iframe>`
3. Web page (webmail client): directly embedded in the same page

Email clients need to take the embedding context into account as it can affect how they handle the HTML message. What may be considered safe when embedded in an `<iframe>`, may not be safe when directly embedded in the same page. And in some contexts, email clients may need to do additional processing such as CSS scoping.

### Solution

Having a standardized sanitization approach for third-party code (i.e. HTML messages) in email clients tackles the core issue most directly. Getting there requires:

1. Documenting a specification which details how supported and unsupported features should be handled.
2. Building an open source, email-specific sanitizer. Email clients can choose to use this sanitizer, but they would also be free to build their own spec-compliant version.
