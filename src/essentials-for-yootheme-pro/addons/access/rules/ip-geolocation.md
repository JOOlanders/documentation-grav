---
title: IP Geolocation
description: Validates against the IP location
collection: Device
---

<!--@include: ./_partials/intro-->

The IP Geolocation Access Rule evaluates whether the device ip location, determined by [MaxMind GeoIp Database](/essentials-for-yootheme-pro/geolocation), matches one of the specified patterns.

## Settings

![IP Geolocation Access Rule](../assets/rules/rule-ip-geolocation.webp)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Continents* | The list of continents that the IP location must constraint to for the condition to be considered valid. International names and two letter codes are supported. Separate the entries with a comma and/or new line, e.g. `Africa, AU`. | &#x2713; |
| *Countries* | The list of countries that the IP location must constraint to for the condition to be considered valid. International names and [ISO Codes](https://www.iso.org/iso-3166-country-codes.html) are supported. Separate the entries with a comma and/or new line, e.g. `Spain, DE`. | &#x2713; |
| *Cities* | The list of cities that the IP location must constraint to for the condition to be considered valid. International names are supported. Separate the entries with a comma and/or new line, e.g. `Barcelona, Hamburg`. | &#x2713; |
| *Postal Codes* | The list of postal codes that the IP location must constraint to for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g. `55455, 55456`. | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | &#x2713; |

::: details Advanced Settings

<!--@include: ./_partials/advanced-settings-->

:::