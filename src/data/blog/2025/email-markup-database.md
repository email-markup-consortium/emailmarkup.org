---
title: Announcing the Email Markup Database
description: A comprehensive, continuously updated repository of how real-world emails are built. Real usage metrics from real emails covering HTML and CSS features, external assets and more.
author: hussein-alhammad
pubDate: 2025-12-12
published: true
layout: "@layouts/BlogLayout"
---

In 2022, we began our [Data Collection project](https://emailmarkup.org/en/blog/2022/email-data-collection/) with a clear vision for how this data could benefit the ecosystem starting with our [annual accessibility reports](https://emailmarkup.org/en/reports/accessibility/). Today, we’re excited to announce the next major step in that vision: the [Email Markup Database](https://database.emailmarkup.org/).

The Email Markup Database is a comprehensive, continuously updated repository of how real-world emails are built. By scanning over a million emails, with new emails added daily, it surfaces the patterns, features, and coding techniques that real senders rely on. This is real usage metrics from real emails covering HTML and CSS features, external assets and more.

This insight offers practical value to everyone in the email ecosystem. Email clients, build tools and ESPs can learn what senders really use today, prioritize improvements with confidence and make well-informed decisions that directly benefit both email recipients and the users of their products.

We understand that feature popularity is not a good enough criterion for all products in the email ecosystem to support it. There are other factors and each product has its own constraints and architectural considerations. Nonetheless, usage data helps us ask better questions.

For example, `min-width` and `max-width` are the [most used media features by a big margin](https://database.emailmarkup.org/css/media-features). Yet in some [embedding contexts](https://emailmarkup.org/en/docs/vision/#embedding-contexts) (when the HTML message is rendered by webmail client that directly embeds the HTML within the same page), these media features don’t behave as the author of the code expects. The author of the code here needs [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) instead. Insights like this help highlight the gaps and give us a forum for constructive discussion on how email clients can evolve.

We’re committed to surfacing these findings publicly on an ongoing basis. We’re eager to collaborate with teams across the industry to ensure we collectively use this data wisely and pave the way for better email experiences. It is [our mission](https://emailmarkup.org/en/docs/mission/).

If you work at an email client, build tool, or ESP and think this data could help guide your roadmap, we’d love to talk. We're happy to share findings and insights and hear what would be most useful to your team. Contact us at [consortium@emailmarkup.org](mailto:consortium@emailmarkup.org)