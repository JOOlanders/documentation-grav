---
title: Markdown Element
description: A markdown element based on CommonMark
icon: '
    <path stroke="none" d="M27.834 5.77H2.166A2.166 2.166 0 0 0 0 7.931v14.133c0 1.195.97 2.166 2.166 2.166h25.673A2.16 2.16 0 0 0 30 22.069V7.931c0-1.19-.97-2.161-2.166-2.161ZM15.867 19.903h-2.883v-5.625l-2.882 3.605-2.883-3.605v5.625H4.327v-9.806h2.882l2.883 3.605 2.883-3.605h2.883v9.806h.009Zm6.342.145L17.883 15h2.883v-4.903h2.882V15h2.883l-4.322 5.048Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

Markdown is a lightweight markup language that is used to create content with plain text syntax. With the Markdown Element, static or dynamic markdown content can be rendered with [CommonMark](https://commonmark.org) and cached for optimal performance.

{% image %}
![Markdown Element](/assets/ytp/elements/markdown-element.webp)
{% /image %}