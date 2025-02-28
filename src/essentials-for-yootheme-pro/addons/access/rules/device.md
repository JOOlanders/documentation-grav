---
title: Device
description: Validates against the device type
collection: Device
---

# Device Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-device.svg-->
</div>

The **Device Rule** evaluates whether the browser agent matches one of the selected device types, _Mobile_, _Table_, or _Desktop_.

::: warning Limited Detection
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
:::

![Device Rule Settings](./assets//rule-device.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The device types that the browser agent must match, at least one, for the condition to be considered valid. . | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
