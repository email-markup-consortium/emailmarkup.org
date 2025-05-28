---
title: Email clients are stripping out accessibility at the expense of user needs
description: Many email clients, including Gmail, strip out code developers use to respect system-level accessibility preferences. Respecting user preferences is a clear accessibility requirement. Ignoring these is harmful to users and is a potential legal issue.
author: hussein-alhammad
pubDate: 2025-05-28
published: true
layout: "@layouts/BlogLayout"
---

Respecting user preferences isn't a nice-to-have. It is a basic accessibility principle.

Many people rely on system-level settings, such as prefers-reduced-motion or prefers-color-scheme, to make digital content safer, more readable, and less physically or cognitively taxing. These aren't just personalizations; they're assistive mechanisms that reflect a user's needs and sometimes their medical requirements.

But for users reading email messages in many email clients including Gmail, these preferences are ignored. Worse: these emails clients strips out the code that developers use to respect these preferences.

## Email clients should support accessibility preferences

Modern browsers and operating systems allow users to set their preferences such as:

* Reduced motion: important for some users to avoid triggering vestibular motion disorders
* High contrast / light or dark color scheme: helps improve readability for those with certain vision conditions

On the web, developers can adapt to these settings using CSS media queries. This ensures the page's experience aligns with what users have told their devices they need.

In email, the situation is different. Many email clients, including major ones such as Gmail, fail to support these media queries and choose remove them entirely.

## What the 2025 Accessibility Report shows

In our 2025 Accessibility Report, we tested several widely-used email clients for support of user preference CSS media queries. Many email clients do not support CSS media queries for prefers-reduced-motion and prefers-color-scheme, stripping them completely from the email before rendering.

This means:

* Developers cannot disable animations, transitions or animated images for users who opt out of motion.
* Developers cannot adjust the colour scheme of the email message to the user's preferred color scheme.
* Emails may cause discomfort or harm to users who rely on these settings.

Other email clients like Apple Mail and SFR Mail show that it is possible to support these features in a privacy and security-conscious way.

## Why this matters

Disregarding these user settings doesn't just result in a poor user experience, but it could also be a compliance risk. In many countries, accessibility regulations (such as the Americans with Disabilities Act and the European Accessibility Act) apply to digital communications, including email.

If a user has explicitly chosen reduced motion and an email client makes it impossible for the sender to adapt to that preference, who's responsible for the harmful experience: the sender or the email client? If the email client strips out the developer's attempt to honor that preference, the answer becomes more complicated.

## A call to Gmail and other email clients

The web has set the standard: user preferences must be respected. It is an accessibility rule of thumb.

Gmail and other email clients need to rethink their approach. Their sanitization layers shouldn't disable the very features developers use to make email messages more inclusive and accessible.

We're asking for:

* Support for accessibility related HTML and CSS features, such as prefers-reduced-motion and prefers-color-scheme CSS media queries
* Transparent documentation about what features are allowed or stripped from HTML emails as well as recommendations for workarounds when features cannot be supported (e.g. for security or privacy reasons).
* Collaboration with standards bodies and developer communities to close these accessibility gaps.

Until these features are supported, developers are stuck and recipients are left behind.

## Let developers build inclusive email messages

Accessibility in email is hard enough. When email clients block even the most basic accessibility features, they're not limiting creativity; they're limiting access.

Respecting user preferences is non-negotiable for inclusive digital communication. It's time email clients enable developers to build more accessible HTML emails.

If you're working on Gmail, or any major email client: help us make this better.

* [Read the full 2025 Accessibility Report](https://emailmarkup.org/en/reports/accessibility/2025/)
* Get involved and work with us on our [Shared Sanitizer solution](https://emailmarkup.org/en/docs/sanitizer/). Contact us at [consortium@emailmarkup.org](mailto:consortium@emailmarkup.org)