---
name: Time
title: Time Access Rule
collection: Date & Time
description: Validates against the current time
icon: '
  <path stroke="none" d="M2.034 15.023c0-2.349.587-4.525 1.75-6.518a12.955 12.955 0 014.733-4.733c1.992-1.162 4.157-1.738 6.495-1.738 1.75 0 3.43.345 5.032 1.025 1.6.679 2.97 1.612 4.134 2.763 1.163 1.152 2.084 2.534 2.763 4.146a12.833 12.833 0 011.025 5.055c0 1.75-.345 3.431-1.025 5.032a12.944 12.944 0 01-2.763 4.134c-1.152 1.152-2.534 2.073-4.134 2.752a12.73 12.73 0 01-5.032 1.025c-1.762 0-3.455-.345-5.056-1.025a13.142 13.142 0 01-4.145-2.763c-1.163-1.152-2.073-2.534-2.764-4.123-.69-1.589-1.013-3.27-1.013-5.032zm2.856 0c0 2.73.99 5.101 2.982 7.117 1.992 1.992 4.364 2.982 7.14 2.982 1.819 0 3.512-.45 5.055-1.359 1.543-.91 2.787-2.13 3.696-3.685a9.829 9.829 0 001.37-5.055 9.87 9.87 0 00-1.37-5.067 10.158 10.158 0 00-3.696-3.696A9.822 9.822 0 0015.012 4.9c-1.82 0-3.513.45-5.056 1.359a10.374 10.374 0 00-3.708 3.696c-.92 1.555-1.358 3.247-1.358 5.067zm9.12 0V7.354a.93.93 0 01.276-.68.93.93 0 01.68-.276.93.93 0 01.679.276.93.93 0 01.276.68v7.082l4.134 2.406a.94.94 0 01.438.588.865.865 0 01-.104.714.897.897 0 01-.829.483.8.8 0 01-.484-.138l-4.399-2.568a.95.95 0 01-.483-.334.875.875 0 01-.184-.564z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A condition based on the **Time Access Rule** will validate if the current time is within the specified time range constraint.

---

## Settings

{% image %}
![Time Access Rule](/assets/ytp/access/rule-time.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **From/Until** | The range of time in `H:i` format that the current time must constrain to for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}