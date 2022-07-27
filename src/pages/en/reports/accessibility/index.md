---
title: Accessibility Reports
description:
layout: "@layouts/MainLayout"

setup: |
  let posts = await Astro.glob('./*.md');
  posts = posts.sort((a, b) => new Date(b.frontmatter.publishDate).valueOf() - new Date(a.frontmatter.publishDate).valueOf());
---

## Data

Reports published here relies on data sourced by the the Email Markup Consortium [Data Collection project](https://dev.to/emailmarkup/collecting-data-1gdb) unless otherwise stated.

## Testing methodology

The testing is performed via [Parcel](https://parcel.io/) accessibility checker unless stated otherwise. This is a tool built specifically for email accessibility tests. Learn more about the tests and what they cover by reading the [Parcel accessibility-checker documentation](https://parcel.io/docs/dev-tools/accessibility-checker).

## Reports

<ul>
{posts.map(post => (
  <li>
    <a href={post.url}>
      {post.frontmatter.title}
    </a>
  </li>
))}
</ul>
