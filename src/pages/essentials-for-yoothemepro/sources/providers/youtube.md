---
title: YouTube Source
description: Content Source based on YouTube videos
icon: '
    <path stroke="none" d="M15.006 24.394h-.014c-.784-.005-7.72-.068-9.685-.6A4.018 4.018 0 012.48 20.97c-.515-1.93-.482-5.647-.478-5.944-.004-.295-.037-4.042.476-5.988l.002-.006c.366-1.358 1.474-2.474 2.824-2.844l.01-.003c1.943-.51 8.892-.573 9.678-.578h.014c.787.005 7.74.068 9.688.6a4.017 4.017 0 012.824 2.822c.533 1.947.484 5.703.478 6.02.004.312.035 3.995-.476 5.935l-.001.005a4.02 4.02 0 01-2.83 2.826l-.005.002c-1.942.51-8.892.573-9.678.578zM4.441 9.558c-.451 1.718-.408 5.417-.408 5.454v.027c-.014 1.026.034 3.997.409 5.404a1.98 1.98 0 001.394 1.39c1.45.392 7.099.516 9.163.53 2.07-.014 7.727-.134 9.166-.511a1.982 1.982 0 001.392-1.39c.375-1.427.422-4.384.408-5.403v-.032c.019-1.039-.018-4.044-.406-5.463l-.001-.004a1.982 1.982 0 00-1.396-1.393c-1.436-.393-7.093-.516-9.163-.53-2.068.014-7.72.134-9.163.51a2.037 2.037 0 00-1.395 1.41zm22.097 11.166zM12.41 19.113v-8.226L19.52 15l-7.11 4.113z"/>

'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

**YouTube Source** provides three [YouTube](https://www.youtube.com/) sources, [Videos](#videos-source), [Channel Videos](#my-channel-source) and [Playlists Videos](#my-playlist-source). Based on the [multi-instance](manager#multi-instance) source workflow, it allows connecting to multiple accounts with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "YouTube"} /%}

{% callout title="Cache" %}
You can adjust the cache time as needed but being this an API-driven source it is highly recommended to keep the cache active.
{% /callout %}

---

## Content Sources

Follow through [integration](#integration) to create one of the following sources, create as many as needed.

### Videos Source

Fetches public videos with an API Key and advanced params, resolves to a list of [Video Type](#video-type).

{% image %}
![YouTube Videos Source](/assets/ytp/sources/youtube-videos-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `YouTube`. |
| **API Key** | The Google API Key which to [authenticate](../../auths-manager#google-api-key-driver) with. | &#x2713; |

{% image %}
![YouTube Videos Query](/assets/ytp/sources/youtube-videos-query.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Channel** | | Restricts the results to videos created by a specific channel ID. |
| **Query Term** | | The list of terms the videos should be associated with. Use the Boolean NOT (`-`) and OR (`\|`) operators to exclude or find videos that are associated with one of several search terms. For example, to match either "boating" or "sailing", set as `boating\|sailing`. Similarly, to exclude "fishing", set as `boating\|sailing -fishing`. |
| **Since/Until** | | Restricts the results to videos that have been published within the specified range of dates. |
| **Location/Radius** | | Location in conjunction with radius, defines a circular geographic area to which to restrict the videos. The location points the center of the area with latitude/longitude coordinates e.g. `37.42307,-122.08427`, while the radius is the maximum distance from the location in `m`, `km`, `ft`, or `mi` units, e.g `5km`. |
| **Region** | | Restricts the results to videos that can be viewed in the specified country. The value is an [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) country code, e.g `ES`.
| **Language** | | Restricts the results to videos that are most relevant to the specified language. The value is typically an [ISO 639-1 two-letter](https://www.loc.gov/standards/iso639-2/php/code_list.php) language code, however, you should use the values `zh-Hans` for simplified Chinese and `zh-Hant` for traditional Chinese. Note that results in other languages will still be returned if they are highly relevant to the search query term. |
| **Definition** | `Any` | Restricts the results based on the videos quality, either `High Definition`, `Standard Definition`,  or `Any`. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. |
| **Duration** | `Any` | Restricts the results based on the videos duration, either `Long`, longer than 20 minutes, `Medium`, between four and 20 minutes, `Short`, less than four minutes, or `Any`. |
| **Start** | `1` | The starting point, e.g of a list of 20 videos start from the number 2. |
| **Quantity** | `20` | The maximum amount of videos to retrieve. |
| **Order** | `Relevance` | The order in which the videos will be returned, within `Date`, reverse chronological order based on the date the videos were created, `Rating`, from highest to lowest rating, `Relevance`, based on their relevance to the search query, `Title`, alphabetically by title, or `View Count`, from highest to lowest number of views. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Channel Source

{% image %}
![My YouTube Channel Source](/assets/ytp/sources/youtube-mychannel-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `YouTube My Channel`. |
| **Account** | The Google Account which to [authenticate](../../auths-manager#google-oauth-driver) with. | &#x2713; |
| **Channel** | The YouTube Channel from which to create the source. | &#x2713; |

#### My Channel Video Query

Fetches a single video from the authenticated channel, resolves to a [Video Type](#video-type).

{% image %}
![My YouTube Channel Video Query](/assets/ytp/sources/youtube-mychannel-video.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Video** | The unique identifier of the video to retrieve. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

#### My Channel Videos Query

Fetches videos from the authenticated channel, resolves to a list of [Video Type](#video-type).

{% image %}
![My YouTube Channel Videos Query](/assets/ytp/sources/youtube-mychannel-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The starting position to retrieve the videos at. |
| **Quantity** | `20` | The maximum amount of videos to fetch. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Playlist Source

{% image %}
![My YouTube Playlist Source](/assets/ytp/sources/youtube-myplaylist-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `YouTube My Playlist`. |
| **Account** | The Google Account which to [authenticate](../../auths-manager#google-oauth-driver) with. | &#x2713; |
| **Playlist** | The YouTube Playlist from which to create the source. | &#x2713; |

#### My Playlist Videos Query

Queries videos from the authenticated playlist, resolves to a list of [Video Type](#video-type).

{% image %}
![My YouTube Playlist Videos Query](/assets/ytp/sources/youtube-myplaylist-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The starting position to retrieve the videos at. |
| **Quantity** | `20` | The maximum amount of videos to fetch. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

## Content Mapping

The mapping fields are specified by the following `Object Types`.

### Video Type

{% image %}
![YouTube Video Mapping](/assets/ytp/sources/youtube-mapping-video.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this video. | `String` |
| **Title** | The title of this video. | `String` | `Limit` |
| **Description** | The description of this video. | `String` | `Limit` |
| **URL** | The YouTube public URL, e.g. `www.youtube.com/watch?v=c2pz2mlSfXA`. | `String` |
| **Published At** | The date this video was published. | `String` | `Date` |
| **Thumbnail URL** | The URL to this video thumbnail with different size options, `Low`, `Medium` (default), `High Resolution`, `Standard`, and `Max Resolution` | `String` |
| **Thumbnail Width** | The width of this video thumbnail with same size options as for URL. | `String` |
| **Thumbnail Height** | The height of this video thumbnail with same size options as for URL. | `String` |
| **Total Views** | Number of times this video has been viewed. | `String` |
| **Total Comments** | Number of comments for this video. | `String` |
| **Total Likes** | Number of users who have indicated they like this video. | `String` |
| **Total Dislikes** | Number of users who have indicated they dislike this video. | `String` |