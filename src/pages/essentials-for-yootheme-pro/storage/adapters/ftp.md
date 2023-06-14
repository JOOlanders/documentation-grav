---
title: FTP Storage Adapter
description: A storage adapter for the S/FTP protocol
icon: '
  <path stroke="none" d="M20.57 13.056H9.426a.233.233 0 0 0-.233.232v11.666c0 .128.105.233.233.233H20.57a.233.233 0 0 0 .232-.233V13.288a.233.233 0 0 0-.232-.232Zm-9.52 1.857h7.895v3.395h-7.894v-3.395Zm7.895 8.416h-7.894v-3.395h7.894v3.395Z"/>
  <path stroke="none" d="M12.444 21.82c0 .51.42.929.929.929.509 0 .928-.42.928-.929 0-.51-.42-.929-.928-.929-.51 0-.929.42-.929.93Zm0-5.166c0 .51.42.929.929.929.509 0 .928-.42.928-.929 0-.51-.42-.929-.928-.929-.51 0-.929.42-.929.929Z"/>
  <path stroke="none" d="M23.687 10.818c-1.33-3.509-4.716-6.005-8.683-6.005-3.968 0-7.355 2.493-8.684 6.002a5.816 5.816 0 0 0-4.324 5.653c.017 3.03 2.368 5.494 5.329 5.758a.232.232 0 0 0 .252-.232v-1.752a.232.232 0 0 0-.203-.23 3.618 3.618 0 0 1-2.093-1.001 3.577 3.577 0 0 1-1.08-2.571c0-.813.265-1.58.76-2.218a3.615 3.615 0 0 1 1.92-1.268l1.1-.29.403-1.066a7.13 7.13 0 0 1 2.557-3.294 7.028 7.028 0 0 1 4.063-1.282c1.465 0 2.87.444 4.063 1.286a7.07 7.07 0 0 1 1.52 1.45c.439.56.787 1.182 1.037 1.843l.4 1.063 1.097.29a3.604 3.604 0 0 1 2.673 3.483c0 .975-.383 1.889-1.08 2.57a3.612 3.612 0 0 1-2.086 1.002.229.229 0 0 0-.2.23v1.755c0 .137.118.244.255.232C25.635 21.96 27.98 19.5 28 16.474a5.815 5.815 0 0 0-4.313-5.656Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The S/FTP Storage Adapter stores files in a remote server using the S/FTP protocol.

{% image %}
![S/FTP Storage Adapter](/assets/ytp/storage/adapter-ftp.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | A name to identify this storage. |
| **Host** | The URL to the server hosting the folder. | &#x2713; |
| **Port** | The port to use for establishing the connection with the server, defualts to `21`. |
| **Username/Password** | The credentials for establishing the connection with the server. | &#x2713; |
| **Root** | The remote path that will be used as the storage root. |
| **Write Permission** | Wether the storage will have Write in addition to Read permission. |
| **Passive Mode** | Wether to use Passive Mode for the connection. |
| **SSL** | Wether to use SSL for the connection. |
| **UTF8** | Wether to use UTF8 as the files content encoding format. |
| **Ignore Passive Address** | Wether to ignore Passive Address for the connection. |