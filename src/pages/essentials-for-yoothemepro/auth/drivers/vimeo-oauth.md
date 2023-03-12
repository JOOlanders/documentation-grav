---
title: Vimeo OAuth Driver
description: A Driver for Vimeo OAuth authorization
icon: '
  <path fill="none" stroke-width="1.7" stroke-linejoin="round" d="M27.987 8.92c-.115 2.547-1.883 6.034-5.302 10.46-3.535 4.623-6.526 6.934-8.972 6.934-1.515 0-2.799-1.407-3.846-4.223l-2.099-7.742c-.778-2.815-1.612-4.223-2.504-4.223-.195 0-.875.412-2.04 1.232L2 9.772a328.813 328.813 0 0 0 3.794-3.404c1.712-1.488 2.997-2.27 3.853-2.35 2.023-.195 3.269 1.196 3.736 4.175.505 3.215.855 5.214 1.051 5.996.584 2.667 1.225 3.998 1.927 3.998.544 0 1.361-.865 2.45-2.594 1.09-1.73 1.673-3.046 1.752-3.95.155-1.493-.429-2.242-1.751-2.242-.623 0-1.264.145-1.924.43 1.277-4.212 3.719-6.257 7.322-6.14 2.672.079 3.931 1.822 3.777 5.23Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Vimeo OAuth Driver** manage Vimeo OAuth protocol to authenticate and grant scope permissions.

{% image %}
![Vimeo OAuth Driver](/assets/ytp/auths/driver-vimeo-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [vimeo.com/settings](https://vimeo.com/settings/apps). |
| **Authentication** | Triggers the OAuth authentication and permission grant. |
| **Custom App** | Whether to use a custom OAuth App instead of ZOOlanders one. |