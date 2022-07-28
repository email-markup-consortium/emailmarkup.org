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

## Issues severity categories

Accessibility issues are categorized into 4 categories depending on how serious they are. These are defined by Deque Axe as:

- **Mild** - Considered to be a nuisance or an annoyance bug. Prioritize fixing if the fix only takes a few minutes and the developer is working on the same screen/feature at the same time, otherwise the issue should not be prioritized. Will still get in the way of compliance if not fixed. Should be very infrequent.
- **Moderate** - Results in some barriers for people with disabilities, but will not prevent them from accessing fundamental features or content. Prioritize fixing in this release, if there are no higher-priority issues. Will get in the way of compliance if not fixed. Should be fairly common.
- **Serious** - Results in serious barriers for people with disabilities, and will partially prevent them from accessing fundamental features or content. People relying on assistive technologies will experience significant frustration as a result. Issues falling under this category are major problems, and remediation should be a priority. Should be very common.
- **Critical** - Results in blocked content for people with disabilities, and will definitely prevent them from accessing fundamental features or content. This type of issue puts your organization at risk. Prioritize fixing as soon as possible, within the week if possible. Remediation should be a top priority. Should be infrequent.

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
