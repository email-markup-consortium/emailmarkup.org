---
title: Backward compatibility in email
description: Email clients processing of HTML emails change and evolve. With no standards to follow, what happens to the rendering of old email messages?
author: hussein-alhammad
pubDate: 2023-10-18
published: true
layout: "@layouts/BlogLayout"
---

Due to the different ways email clients process HTML emails, developers resort to using various targeting techniques to display/hide different DOM elements or conditionally enhance certain elements for specific email clients. This is typically done with CSS by using selectors that only match elements in specific email clients. Developers may even rely on how an email client processes invalid HTML/CSS code or how they handle HTML/CSS features they do not support.

This is how the email industry ended up with a big stack of hacks only known to a niche of web developers; email developers.

Besides the unideal situation, this is contributing to a bigger issue; backward compatibility. These email client targeting hacks eventually stop working even though they may be present in hundreds of email messages in your inbox. As a result, HTML emails that make use of these hacks may look broken and their accessibility and usability could be affected.

Based on how developers build their emails today, the most common issues caused by the lack of backward compatibility are:

* duplicated content
* missing content
* broken rendering

The current state of the industry does not allow developers to properly practice progressive enhancement. Instead, they have to follow the dark, impractical path of hacks to provide the recipient with the best experience possible.

## Standards for the future

The [Email Markup Consortium’s vision](https://emailmarkup.org/en/docs/vision/) of a standard way of processing and sanitizing HTML emails (which does not impose identical feature support across all email clients) helps this issue.

While this does not introduce true backward compatibility, it empowers developers to drop the email client targeting hacks and allows them to progressively enhance their code with confidence. 

Even as email clients change their level of support for different HTML/CSS features, HTML emails built following the progressive enhancement methodology will still render a fine and presentable version. Hence, this takes the burden of backward compatibility off the email clients’ plates.

## Reader mode for the past

We fully realize how introducing a new standard way of sanitizing HTML emails is potentially introducing big breaking changes and may have a big impact on how old messages in your inbox will render. This is expected with a big fundamental change like this. 

One way email clients could help their users to still view potentially broken old email messages is by introducing a reading mode that simplifies and declutters HTML emails for the reader (similar to Microsoft Edge’s [Immersive Reader](https://support.microsoft.com/en-us/topic/use-immersive-reader-in-microsoft-edge-78a7a17d-52e1-47ee-b0ac-eff8539015e1)). This would remove all of the layout and design of the email and just keep the default semantic HTML values, styled with some user defined settings. Meaning that the email may look quite different but the content will be fully readable.

The Email Markup Consortium has published [“Email reader view”](https://chrome.google.com/webstore/detail/email-reader-view/eekkbigfifdabokecancejangeoallck), a browser extension for this as a proof of concept. Email clients can introduce a built-in one that better serves their users.