---
title: Operating System
description: Validates against the operating system
collection: Device
---

<!--@include: ./_partials/intro-->

The Operating System Access Rule evaluates whether the browser agent matches one of the specified patterns, e.g. `MacOS 10.1`.

Supported OS: `Mac OS X`, `Mac OS Classic`, `Linux`, `Open BSD`, `Sun OS`, `QNX`, `BeOS`, `OS/2`, `Windows`, `Windows Vista`, `Windows Server 2003`, `Windows XP`, `Windows 2000 sp1`, `Windows 2000`, `Windows NT`, `Windows Me`, `Windows 98`, `Windows 95`, `Windows CE`.

::: warning Limited Detection
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
:::

## Settings

![Operating System Access Rule](../assets/rules/rule-os.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The Operating System list with optional version range that the browser agent must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `Windows, Mac OS X 10.2-10`. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings

<!--@include: ./_partials/advanced-settings-->

:::