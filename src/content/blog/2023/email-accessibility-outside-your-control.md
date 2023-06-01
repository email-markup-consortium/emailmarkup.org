---
title: How to deal with email accessibility issues outside of your control
description: Accessibility issues in HTML emails can be introduced in various ways, and sometimes you are not in full control of the HTML that is sent to the user.
author: mark-robbins
pubDate: 2023-05-30
published: true
layout: "@layouts/BlogLayout"
---

At the Email Markup Consortium our mission is focused on improving email markup. However, off the back of our accessibility reports we hear from a number of people who are not able to make their code accessible, either because they don’t write the code themselves or because their code gets edited before it hits the inbox.

It’s rare for one person to be able to have full control of everything that goes into an email, and if you want to make your emails more accessible there can be a number of things blocking you. So we’re going to look at a few of these situations and what you can do to help.

Nobody can do everything, but everybody can do something.

## How to deal with accessibility issues

Treat issues with accessibility the same way you’d treat other issues you find.  Think what would you do if you found your content wasn’t displaying properly in a popular email client? The steps are the same, test to find the issues, report the issues, request fixes.

## Finding the issues

For the accessibility report we use the Parcel accessibility checker to test the emails. This is free for anyone to use and gives a lot of detail of the errors it finds. Other email accessibility tools are available, as well as numerous web accessibility tools, however be careful using web tools as some of the accessibility requirements can be different to email and these may give you incorrect information.

## Getting more information

If you unsure about any of the errors found, there are a number of great resources to learn more about them

* [Parcel.io](https://parcel.io) provides links with more information on issues it finds.
* If you have any questions you can ask for help in the `#email-accessibility` channel on [email.geeks.chat](https://email.geeks.chat/) Slack workspace.
* You could also ask for help on Twitter, using hashtags like [#EmailGeeks](https://twitter.com/hashtag/EmailGeeks) [#Accessibility](https://twitter.com/hashtag/Accessibility)

### Built by someone else
If the issues come from markup provided by an agency or freelancer, give them feedback asking them to address the issues. 

* Run the code through an accessibility checker and gather the results.
* Give as much detail as possible, how and where you found the issues.

It’s best to set these expectations at the start of a project. You might say you want an email to render well in Gmail and Outlook, you can also say you want it to pass certain accessibility tests.

### Generated or modified by a third-party tool

This could be markup created by an email build tool or framework, or maybe your markup is passing all accessibility tests but it’s getting changed at send time to start failing.

* Open a support ticket, talk to your account manager or submit a contact form.
* Give as much detail as possible, provide a code sample, links to any relevant accessibility documentation and explain what actions you took that produced this issue. 
* If there is a user community, ask other users if they are experiencing the same thing and have a work around.

You may be directed to workarounds for the issues you are having, but if there aren’t any then you can ask for a change to be made.

When asking for these things, it can sometimes feel like nobody is listening, but even if you don’t get a reply, the number of requests really do get noticed and the more requests they get, the more they take notice so it’s always worth doing.


## Using generic content

Sometimes you can see the issue but you don’t have the necessary resources to address it fully. In some cases there may be a generic solution you can use while you’re working on a long term fix.


### Title element

Ideally you’d have a unique `<title></title>` element places in the the `<head>` of each email, with text describing detail about what’s inside. This could be the subject line, but if you don’t yet have a way to edit that easily you can use a generic title while you work on a longer term solution. It’s much better than leaving it blank.

But as a partial solution you can use a generic title, such as;

* “Email from MyBrand”
* “MyBrand Newsletter”
* “MyBrand Order Update”


### Language and language direction

It’s important to set a language and direction. This helps with a number of assistive technology tools as well as translation tools.

If you are using one main template for sending in multiple languages, and you don’t yet have a solution to be able to change it each time to match the content, you can set an undetermined language and automatic direction `lang="und" dir="auto"`.

Without a `lang` or `dir` attribute the language and direction will inherit from the email client language settings. If the language is the same that works well but a lot of people in the world are multilingual and may receive emails in languages different to their email client settings. Setting undetermined, will allow the user agent to take a guess at the language rather than assume it’s the same. And `dir="auto"` will allow it to apply the appropriate direction to the assumed language.

There is room for error here as the user agent might make the wrong guess, so setting an exact language and direction is always best. But setting `lang="und" dir="auto"` is far better than setting nothing and works as a good solution while you’re working on a longer term fix.


### Content added by sending tools

Sending tools often add additional content to emails, this content doesn’t always meet accessibility standards. It’s understandable as It can be hard to match the requirements of the specific email. But there are a number of things sending tools can do to help this.

### Preview text

This is the text that can appear just below the subject line in the inbox. Some sending tools will add preview text to the email, making it easier for the user. The user can just type the text they want into an input and it gets added to the code. It’s really helpful however this code is often added directly after the opening `<body>` tag so may not be included in the wrapping element used for adding language and direction.

There are a few options here to work around this issue;

* Allow a user to add the preview text themselves with a merge tag. This will allow the user to place the preview text in exactly the right place. This is a great option but not every user will know how to edit the code to put this in.
* Place the preview text inside the wrapping element with the language and direction set. This can be tricky to detect accurately, also there is a chance there is no wrapping element at all.
* Set generic language and direction on the preview text

```html
<div style="display:none" lang="und" dir="auto">preview text</div>
```


### Tracking codes

Most marketing emails include some kind of open tracking. This is usually an `<img>` tag, sometimes with a `<style>` block for some more advanced tracking.

Sometimes this `<img>` doesn’t have an `alt` attribute. This image isn’t adding any meaning of function to the content. So it can be fixed by adding an empty `alt=""` attribute on the image.

The tracking code can also get inserted automatically so again, like the preview text it may not be included in the wrapping element used for adding language and direction.


The options for sending tools to fix this are similar to the solutions to preview text;

* Allow a user to add the tracking code themselves with a merge tag. This will allow the user to place the it in exactly the right place. This is a great option but not every user will know how to edit the code to put this in.
* Place the tracking code inside the wrapping element with the language and direction set. This can be tricky to detect accurately, also there is a chance there is no wrapping element at all.
* Set a language and direction on the tracking code

```html
<div lang="zxx" dir="auto" aria-hidden="true">
  <style></style>
  <img src="[trackingcode]" alt="">
</div>
```

Here we’re using `lang="zxx"` to say that this is source code, also  we’re also adding `aria-hidden="true"` to say this should not be read out by assistive technology.


### Empty links

Some tools will add in a honeypot link to help track bots. The idea is a link is hidden from the user, but bots will automatically click on it. However if the link is included in the DOM then it’s going to be found by assistive technology, like keyboard inputs and screen readers.

The options for fixing this could be

* Make it optional, allow the users to choose weather to prioritize accessibility or tracking bots. 
* When an email address has been flagged as a bot, it’s likely they will be removed from the list. There is an opportunity to use similar logic, so once an address has been flagged as legitimate, remove this link.
* We can try and hide it from assistive technology by adding `aria-hidden="true"` and also removing it from the tab order by adding tabindex="-1". This may flag as an accessibility issues itself as the user won’t be able to access the link.

```html
<a href="trackinglink" aria-hidden="true" tabindex="-1"></a>
```


## Ask for help

If you are facing an issue and don’t know how to fix it ask for help:
- [EmailGeeks Slack](https://email.geeks.chat/) `#Email-Accessibility` channel
- On social media use the hashtags [#A11y](https://twitter.com/hashtag/A11y) and [#EmailGeeks](https://twitter.com/hashtag/EmailGeeks)
