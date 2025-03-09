---
title: Exploring using the ping attribute for click tracking
description: The click tracking method used today has some clear downsides. Can the ping tag attribute be used instead?
author: hussein-alhammad
pubDate: 2024-07-05
published: true
layout: "@layouts/BlogLayout"
---

Tracking any user behavior in the digital space is a controversial topic. Nonetheless, click tracking is a widely used practice in email marketing. There are clear downsides to how click tracking is currently implements, and it is worth exploring an alternative implementation that prioritizes the user.

## What is click tracking in email?

Click tracking is the practice of replacing the final destination URL with a click tracker URL in emails. Each visit to the click tracker URL counts as a click. The click tracker then redirects the user to the final destination URL.

Most ESPs do this automatically for their users. If the code contains an anchor tag like this:

```html
<a href="https://emailmarkup.org">Email Markup Consortium</a>
```

It is automatically replaced with a click tracker link:

```html
<a href="https://click.example.com?id=....">Email Markup Consortium</a>
```

The user first lands on the click tracker page before they are redirected to the actual page. This is often seamless and most recipients are not aware of it.

## Problems

### Opting out (privacy)

It is tricky for the recipient to opt out of click tracking. A lot of effort is required to prevent senders from tracking clicks. One solution is the use of email privacy protection services, such as [DuckDuckGo’s Email Protection](https://duckduckgo.com/email/), that replaces click tracker links with the final destination URL - basically undoing what the ESP did with the links.

It is not just us who think this is a privacy concern. One of the main goals of [Yahoo’s performance feeds](https://senders.yahooinc.com/email-deliverability-performance-feeds/) is to provide senders with insights, such as link clicks, in a privacy conscious way. 

### Transparency

Given that the actual URLs are replaced by click tracker URLs, there is less transparency provided to the recipient. It’s not that the page path is different; often the whole domain is different. It makes it harder for the recipient to verify whether it is safe to follow a link.

### Delays

Not all click trackers load and redirect quickly. And not all users have fast internet connections.

I personally have seen many click trackers take 5+ seconds before they redirect to the final destination URL, which may also take just as long to load or even longer. This is a perfect example of putting data collection ahead of the user experience: a user stairs at white blank screen for 5 seconds, then waits a further 5 seconds before they can interact with the page they want to visit.

In fact, this is probably a good example where senders are putting data collection ahead of conversion.

### Dead URLs

Click trackers URLs are not always under the sender’s own domain. In many cases it is a domain the ESP owns. If the sender deletes an account with an ESP which they had used to send emails, what happens to the click tracker links in the inbox of the sender’s audience? In [some cases](https://twitter.com/wesbos/status/1331631945407754240), they cease to exist. This hurts both the sender and the recipients.

## Exploring a native solution: the `ping` attribute

The HTML spec for the anchor tag includes a `ping` attribute. The attribute value accepts a valid URL. When a user clicks on an anchor tag, the browser takes the user to the URL in the `href` attribute, but also makes a second request to the URL in the `ping` attribute.

```html
<a href="https://emailmarkup.org" ping="https://click.example.com?id=....">Email Markup Consortium</a>
```

This solves all three problems:

1. The email client can provide a privacy setting. If enabled, it is easy for the email client to strip the `ping` attribute.
2. The user is taken directly to the final destination URL. This puts the user experience ahead of data collection and minimizes the time during which the user stares at a blank screen.
3. If the URL of a click tracker in the `ping` attribute no longer exists, the user can still reach the final destination URL.

### Pushback

We realize many in the marketing world would probably not favor this approach because it affects a key metric they currently track. However, we cannot tie ourselves to old practices at the cost of users privacy. Open rates was once a key metric for most email marketers is no longer accurate. Similarly, click tracking would still exist, but it wouldn’t give you the full picture either as some users may choose to disable it.

The proposed solution does not prevent the sender from adding query string parameters to the URLs (e.g. UTM parameters). This means some level of tracking would still be possible and user actions can still be attributed to specific email campaigns.

### Enforcing the solution

We know it is naive to think ESPs and senders would choose to simply switch to the proposed solution. History shows us that ESPs and senders adopt new practices when major email clients announce penalties if they are not follow. If we want to see this change in the industry, major email clients will probably have to:

1. support the `ping` attribute
2. penalize senders who use click trackers in the `href` attribute of anchor tags

## Support

### Browser support

All browsers support the `ping` attribute with the exception of Firefox which has the feature behind a flag due to [privacy implications](https://kb.mozillazine.org/Browser.send_pings). 

We believe user’s privacy preferences should be respected. A major reason why people use Firefox is because of its privacy features. So unless the user has enabled the flag on Firefox, the sender should not be actively looking for ways to track what the user does not want to be tracked.

### Email client support

At the time of writing only the following email clients support the `ping` attribute on anchor tags:

* Apple Mail
* T-Online
* Mail.ru