---
title: CSV Source
description: Content Source based on CSV files
icon: '
    <path stroke="none" d="M24.034 6.975l-4.26-4.259A2.436 2.436 0 0018.054 2H7.687A2.446 2.446 0 005.25 4.442v21.121A2.438 2.438 0 007.687 28h14.626a2.438 2.438 0 002.437-2.437V8.702c0-.645-.259-1.269-.716-1.727zm-5.782-3.32a.795.795 0 01.375.213l4.26 4.26a.785.785 0 01.213.376h-4.848V3.655zm4.874 21.908a.816.816 0 01-.813.813H7.687a.816.816 0 01-.813-.813V4.442c0-.447.366-.817.813-.817h8.94V8.91c0 .675.543 1.215 1.218 1.215h5.281v15.438z"/>
    <path stroke="none" d="M16.4 19.554a1.9 1.9 0 01-.334.168 2.698 2.698 0 01-.462.119l-.391.074c-.368.065-.631.145-.79.239-.269.159-.404.406-.404.74 0 .298.083.513.248.646a.93.93 0 00.603.199c.375 0 .721-.11 1.037-.331.317-.22.481-.622.493-1.205v-.649zm-1.059-.814c.322-.041.553-.092.692-.153.249-.107.373-.272.373-.496 0-.274-.095-.462-.284-.566-.19-.105-.469-.157-.836-.157-.412 0-.704.102-.875.306-.123.151-.204.356-.245.613h-1.684c.037-.584.2-1.063.49-1.439.461-.588 1.253-.881 2.375-.881.731 0 1.38.145 1.947.434.567.29.851.837.851 1.641v3.06c0 .213.004.47.012.772.012.228.047.383.104.465a.622.622 0 00.257.202v.257H16.62a1.985 1.985 0 01-.11-.38 5.039 5.039 0 01-.049-.404c-.24.262-.518.484-.832.668-.376.216-.8.324-1.273.324-.604 0-1.103-.172-1.497-.517-.394-.345-.591-.834-.591-1.466 0-.82.316-1.414.949-1.781.347-.2.857-.343 1.53-.429l.594-.073zM19.602 24.249c.35-.098.609-.261.774-.49.165-.228.26-.549.284-.961h-1.058v-1.824h1.885v1.579c0 .278-.037.567-.11.869-.074.302-.21.564-.41.784a2.126 2.126 0 01-.763.536c-.291.12-.492.18-.602.18v-.673z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The CSV Source feeds data from local files formatted as CSV (comma-separated values) or TSV (tab-separated values), supporting dynamic filtering/ordering. Based on the [multi-instance](manager#multi-instance) source workflow it allows loading multiple files with different configurations.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![CSV Instance Settings](/assets/ytp/sources/csv-config.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **File** | | The relative or absolute local path to the file which to use as source. | &#x2713; |
| **Delimeter** | `,` | The delimiter character the content is formated with. |
| **Enclosure** | `"` | The enclosure character the content is formated with. |

{% partial file="ytp-sources-common-settings.md" variables={name: "CSV"} /%}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Records Query

Fetches records from the file and resolves to a list of dynamically generated CSV record type based on the file schema.

{% image %}
![CSV Records Query](/assets/ytp/sources/csv-query-records.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of [filter conditions](../query-conditions#filter-conditions) applied to the query. |
| **Ordering** | `[]` | The list of [ordering conditions](../query-conditions#order-conditions) applied to the query. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |