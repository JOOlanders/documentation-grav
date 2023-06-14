---
name: Month
title: Month Access Rule
collection: Date & Time
description: Validates against the current month
icon: '
  <path stroke="none" d="M6.16 20.415l.877-2.604h3.225l.877 2.604h1.167L9.22 11.75h-1.13l-3.085 8.665H6.16zm2.509-7.357l1.294 3.86H7.337l1.3-3.86h.032zm9.337.686h-1.098v4.132c0 1.06-.673 1.663-1.632 1.663-.876 0-1.592-.4-1.592-1.645v-4.15h-1.099v4.462c0 1.53.985 2.316 2.361 2.316 1.066 0 1.695-.455 1.93-.983h.045v.875h1.085v-6.67zm3.67 8.2c-.915 0-1.48-.494-1.601-1.034h-1.117c.153 1.11 1.016 1.949 2.711 1.949 1.511 0 2.837-.857 2.837-2.565v-6.55h-1.054v.94h-.031c-.31-.566-1.035-1.04-1.942-1.04-1.568 0-2.665 1.103-2.665 3.064v.552c0 2 1.11 3.091 2.665 3.091.907 0 1.638-.476 1.904-1.053h.033v.983c0 1.048-.688 1.663-1.74 1.663zm.013-7.362c1.052 0 1.725.857 1.725 2.209v.41c0 1.379-.634 2.217-1.726 2.217-1.124 0-1.784-.832-1.784-2.216v-.411c0-1.41.66-2.21 1.784-2.21v.001z"/>
  <path stroke="none" d="M7.688 2c.445 0 .812.367.812.813v.812h13v-.813c0-.445.367-.812.813-.812.445 0 .812.367.812.813v.812h1.625A3.265 3.265 0 0128 6.875V24.75A3.265 3.265 0 0124.75 28H5.25A3.265 3.265 0 012 24.75V6.875a3.265 3.265 0 013.25-3.25h1.625v-.813c0-.445.367-.812.813-.812zM3.625 8.5v16.25c0 .891.734 1.625 1.625 1.625h19.5c.891 0 1.625-.734 1.625-1.625V8.5H3.625z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Month Access Rule evaluates whether the current month matches one of the selected months.

---

## Settings

{% image %}
![Month Access Rule](/assets/ytp/access/rule-month.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The months that the current month must match, at least one, for the condition to be considered valid. Timezone from Site configuration is automatically applied. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}