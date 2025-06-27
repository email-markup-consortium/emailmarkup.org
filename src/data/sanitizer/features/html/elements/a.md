---
title: "<a>: The Anchor element"
description:
layout: "@layouts/MainLayout"
sidebarType: sanitizer
---

The `<a>` element creates a hyperlink to anything a URL can address including web pages.


## Attributes

- `download`
- `href`
- `hreflang`
- `ping`
- `referrerpolicy`
- `rel`
- `target`


## Recommendation

It is highly recommended for an email client to support the `<a>` element. However, special care needs to be taken with the element's attributes and their values as it has direct impact on the users' security and privacy.

### download

The Email Markup Consortium does not have an official recommendation at this stage.


### href

The value of the `href` attribute represent a URL. This could be a HTTP-based URL, or a URI scheme supported by browsers such as `mailto:` and `tel:`.

Some URI schemes are [officially registered with Internet Assigned Numbers Authority (IANA)](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml). There are other unofficial, but common URI schemes such as `app:`.

The fact that a URI scheme is registered with IANA is not enough to determine the scheme is safe to be fully supported by an email client. The `mailto:` URI scheme is a good example of [how fully supporting a registered URI scheme](https://www.zdnet.com/article/some-email-clients-are-vulnerable-to-attacks-via-mailto-links/) is not a wise approach as it can be abused by malicious attackers.

While the `href` is needed to make the `<a>` useful, the Email Markup Consortium does not currently have an official stance on what URI schemes should be considered safe. It is out of this project's scope at this stage.


### hreflang

The `hreflang` attribute and its allowed values can be safely supported.


### ping

The use of the `ping` attribute, while safe, is a privacy concern as it can be used for tracking the user. In fact, this feature is disabled by default on Firefox for this reason.

However, marketing emails heavily use "click tracker" links; a URL with the sole purpose of tracking clicks and redirecting to the actual desired URL. 

If click trackers are deemed safe, the `ping` attribute should be too. If used in place of click trackers, it may even elevate the user experience as the user would not need to wait for the click tracker to redirect them to the page they intend to visit.


### target

It is not recommended to support the `target` attribute with all its values. The email client can determine how and where links are opened instead.


### referrerpolicy

The Email Markup Consortium does not have an official recommendation at this stage.


### rel

If `target="_blank"` is used, it is advised to have `rel="noreferrer"` and `rel="noopener"` to protect the user from `window.opener` API exploitation attacks. This applies regardless whether the sender or the email client is the one that sets the `target` attribute.

Newer browser versions implicitly sets `rel="noopener"`.


## Resources

- [MDN: `<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [HTML Standard: The `a` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element)
- [Some email clients are vulnerable to attacks via 'mailto' links](https://www.zdnet.com/article/some-email-clients-are-vulnerable-to-attacks-via-mailto-links/)


## Email client compatibility

### Linking to an element on the same page

<iframe title="Can I email… Local anchors" src="https://embed.caniemail.com/html-anchor-links/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>

### mailto URI scheme

<iframe title="Can I email… mailto: links" src="https://embed.caniemail.com/html-mailto-links/" width="640" height="420" style="width:100%; max-width:40rem; height:26.25rem; border:none;" loading="lazy"></iframe>