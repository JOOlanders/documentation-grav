import { useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const _imports_0 = "/assets/icon-collections.CJTQ4Qd1.webp";
const data = JSON.parse(`[{"name":"antdesign","title":"Ant Design","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M28.563 6.771l-6.808 4.196-6.53-8.71a.28.28 0 00-.227-.112.28.28 0 00-.225.113l-6.527 8.71L1.434 6.77a.284.284 0 00-.428.278L3.68 27.366c.037.276.275.49.559.49h21.524a.56.56 0 00.556-.49L28.995 7.05a.286.286 0 00-.432-.278zm-4.41 18.69H5.844L3.96 11.137l4.891 3.013 6.15-8.204 6.148 8.204 4.891-3.013-1.886 14.326zM15 14.908a3.945 3.945 0 00-3.94 3.942 3.943 3.943 0 003.94 3.94 3.943 3.943 0 003.94-3.94A3.945 3.945 0 0015 14.907zm0 5.631a1.687 1.687 0 01-1.686-1.69A1.69 1.69 0 0115 17.159a1.69 1.69 0 010 3.38z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/antdesign_4.3.0.zip","description":"The abstract trees of the Ant Design SVG icons.","groups":["filled","outlined"],"version":"4.3.0","release":"August, 2023","license":"MIT","url":"https://github.com/ant-design/ant-design-icons","icons":639},{"name":"bootstrap","title":"Bootstrap","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M10.225 21.502h5.648c2.932 0 4.694-1.476 4.694-3.895 0-1.792-1.237-3.114-3.095-3.307v-.16c1.353-.228 2.41-1.513 2.41-2.953 0-2.113-1.553-3.43-4.133-3.43h-5.524v13.745zm2.134-7.925V9.568h2.893c1.582 0 2.506.743 2.506 2.01 0 1.304-.982 2-2.867 2h-2.532zm0 6.116v-4.429h2.96c2.01 0 3.069.752 3.069 2.191 0 1.457-1.02 2.238-2.945 2.238H12.36z\\"/>\\n    <path stroke=\\"none\\" d=\\"M1.996 8.498c0-3.567 2.935-6.502 6.502-6.502h13.004c3.567 0 6.502 2.935 6.502 6.502v13.004c0 3.567-2.935 6.502-6.502 6.502H8.498c-3.567 0-6.502-2.935-6.502-6.502V8.498zm6.502-4.877c-2.675 0-4.877 2.202-4.877 4.877v13.004c0 2.675 2.202 4.877 4.877 4.877h13.004c2.675 0 4.877-2.202 4.877-4.877V8.498c0-2.675-2.202-4.877-4.877-4.877H8.498z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/bootstrap_1.10.5.zip","description":"Official Bootstrap SVG icon library with over 1.300 icons.","groups":["filled"],"version":"1.10.5","release":"April, 2023","license":"MIT","url":"https://icons.getbootstrap.com","icons":1953},{"name":"boxicons","title":"Boxicons","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M3.224 8.452a3.522 3.522 0 00-.536 1.876v9.053c0 1.448.724 2.656 2.051 3.38l9.174 5.07c.845.483 1.931-.12 1.931-1.086V14.682l-12.62-6.23z\\"/>\\n    <path stroke=\\"none\\" d=\\"M26.588 6.948l-9.416-4.587a4.122 4.122 0 00-3.38 0L4.86 6.948c-.774.423-1.383 1.01-1.757 1.714.038-.071.078-.141.121-.21l12.62 6.23v-.008l10.744-5.432a1.27 1.27 0 000-2.294z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/boxicons_2.1.4.zip","description":"High Quality Web Icons Set.","groups":["regular","solid","logos"],"version":"2.1.4","release":"September, 2022","license":"MIT","url":"https://boxicons.com","icons":1634},{"name":"feather","title":"Feather","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke-width=\\"1.2\\" fill=\\"none\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M25.148 15.3a7.395 7.395 0 002.165-5.227c0-4.055-3.337-7.392-7.392-7.392-1.96 0-3.842.78-5.228 2.165l-8.312 8.312v10.467h10.467l8.3-8.324zM19.927 10.08L2.687 27.32M21.774 18.7H11.307\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/feather_4.29.0.zip","description":"Simply beautiful open source icons.","version":"4.29.0","release":"March, 2022","license":"MIT","url":"https://feathericons.com","icons":287},{"name":"fontawesome","title":"Font Awesome","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M28.004 2.93v19.506c-3.663 1.309-4.78 1.858-6.937 1.858-3.647 0-5.028-1.858-8.668-1.858-1.196 0-2.125.21-2.972.476v-3.715c.847-.267 1.776-.476 2.972-.476 3.642 0 5.022 1.857 8.668 1.857 1.184 0 2.066-.174 3.222-.54V7.964c-1.156.366-2.038.54-3.222.54-3.647 0-5.028-1.857-8.668-1.857-2.949 0-4.348 1.195-6.688 1.666v17.84a1.857 1.857 0 1 1-3.715 0V3.807C1.996 2.833 2.828 2 3.8 2c.974 0 1.91.832 1.91 1.806v.787c2.34-.466 3.74-1.664 6.688-1.664 3.642 0 5.022 1.858 8.668 1.858 2.16 0 3.274-.55 6.937-1.858Z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/fa6_6.4.2.zip","description":"Icons and social logos by Font Awesome, the web's most popular icon set.","groups":["regular","solid","brands"],"version":"6.4.2","release":"August, 2023","license":"CC BY 4.0","url":"https://fontawesome.com","icons":2025},{"name":"heroicons","title":"Heroicons","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path fill=\\"none\\" stroke-width=\\"2.7\\" stroke-linejoin=\\"round\\" d=\\"M16 4.542a23.241 23.241 0 0013.713 4.83c.189 1.083.287 2.198.287 3.338 0 8.825-5.915 16.274-14 18.589C7.915 28.984 2 21.535 2 12.71c0-1.14.098-2.256.287-3.34A23.238 23.238 0 0016 4.543v-.001z\\" transform=\\"matrix(.893 0 0 .89582 .712 -1.054)\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/heroicons_2.0.18.zip","description":"Beautiful hand-crafted icons, by the makers of Tailwind CSS.","groups":["outline","solid"],"version":"2.0.18","release":"May, 2023","license":"MIT","url":"https://heroicons.com","icons":584},{"name":"ionicons","title":"Ionicons","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M15 4.513C9.208 4.513 4.513 9.208 4.513 15S9.208 25.487 15 25.487 25.487 20.792 25.487 15c0-.773-.083-1.525-.241-2.248l2.459-.537c.196.898.3 1.83.3 2.785 0 7.182-5.823 13.004-13.005 13.004S1.996 22.182 1.996 15C1.996 7.818 7.818 1.996 15 1.996c3.182 0 6.1 1.144 8.36 3.043l-1.619 1.927A10.438 10.438 0 0015 4.513z\\"/>\\n    <path stroke=\\"none\\" d=\\"M24.229 6.19a1.259 1.259 0 100 2.519 1.259 1.259 0 000-2.518zm-3.776 1.26a3.776 3.776 0 117.552 0 3.776 3.776 0 01-7.552 0z\\"/>\\n    <circle stroke=\\"none\\" cx=\\"16\\" cy=\\"16\\" r=\\"6\\" transform=\\"translate(1.576 1.576) scale(.83897)\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/ionicons_7.1.2.zip","groups":["outline","filled","sharp","logo"],"description":"Beautifully crafted open source icons built by the Ionic Framework team.","version":"7.1.2","release":"May, 2023","license":"MIT","url":"https://ionicons.com","icons":1338},{"name":"octicons","title":"Octicons","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M15 1.999c-7.365 0-13.33 5.965-13.33 13.33 0 5.898 3.815 10.88 9.114 12.647.668.116.917-.284.917-.633 0-.317-.017-1.368-.017-2.483-3.349.615-4.215-.817-4.482-1.567-.15-.384-.8-1.566-1.366-1.883-.467-.25-1.133-.867-.016-.883 1.049-.017 1.8.967 2.049 1.367 1.2 2.017 3.116 1.449 3.883 1.1.115-.867.466-1.45.849-1.783-2.966-.333-6.065-1.483-6.065-6.582 0-1.449.517-2.65 1.366-3.583-.133-.333-.6-1.698.133-3.532 0 0 1.117-.35 3.666 1.366 1.066-.299 2.2-.45 3.332-.45 1.133 0 2.266.151 3.333.45 2.548-1.733 3.665-1.365 3.665-1.365.734 1.833.267 3.2.134 3.531.849.934 1.366 2.117 1.366 3.583 0 5.116-3.115 6.249-6.082 6.582.484.416.9 1.216.9 2.466 0 1.782-.017 3.215-.017 3.666 0 .35.25.766.916.633A13.38 13.38 0 0028.33 15.33c0-7.365-5.965-13.33-13.33-13.33z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/octicons_19.5.0.zip","description":"Set of SVG icons built by GitHub for GitHub.","version":"19.5.0","release":"July, 2023","license":"MIT","url":"https://github.com/primer/octicons","icons":274},{"name":"remixicon","title":"Remix Icon","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <g transform=\\"translate(2.463 1.999) scale(.46432)\\" stroke-linejoin=\\"round\\" stroke=\\"none\\">\\n      <path d=\\"M32.665 4.01A15.35 15.35 0 0 0 32 8.52C32 15.732 38.268 22 46.519 22c2.127 0 4.172-.545 5.998-1.499.316 1.45.483 2.955.483 4.499 0 11.598-9.402 21-21 21v10H0V4h32c.222 0 .444.003.665.01z\\"/>\\n      <path d=\\"m0 4 52 52H0V4z\\"/>\\n      <circle cx=\\"46\\" cy=\\"8\\" r=\\"8\\"/>\\n    </g>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/remixicon_3.5.0.zip","description":"A set of open-source neutral-style system symbols for designers and developers.","groups":["buildings","business","communication","design","development","device","document","editor","finance","health","logos","map","media","others","system","user","weather"],"version":"3.5.0","release":"May 23, 2023","license":"Apache","url":"https://remixicon.com","icons":2537},{"name":"tablericons","title":"Tabler Icons","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M7.776 2.586c4.789-.77 9.66-.77 14.448 0a7.178 7.178 0 015.195 5.196c.771 4.789.771 9.659 0 14.448a7.178 7.178 0 01-5.195 5.195c-4.789.77-9.66.77-14.448 0A7.178 7.178 0 012.58 22.23c-.771-4.79-.771-9.66 0-14.448a7.178 7.178 0 015.195-5.196zm8.635 8.597l-6.348.738-1.88 7.26a2.057 2.057 0 00.275 1.638l4.26-3.973c-.354-.69-.124-1.518.546-1.96a1.775 1.775 0 012.163.172c.58.541.658 1.393.184 2.017-.474.625-1.362.84-2.102.51l-4.26 3.977c.527.303 1.16.399 1.762.267l7.785-1.753.791-5.92-3.176-2.973zm1.337-3.823l-1.219 2.021 4.857 4.86 2.024-1.213-5.662-5.668z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/tablericons_2.30.0.zip","description":"A set of over 1250 high-quality SVG icons designed on a 24x24 grid and a 2px stroke.","version":"2.30.0","release":"July, 2023","license":"MIT","url":"https://tabler-icons.io","icons":4601},{"name":"teenyicons","title":"Teenyicons","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path stroke=\\"none\\" d=\\"M8.757 19.568c.763-.102 1.274-.447 1.531-1.035.267-.635.414-1.362.441-2.18 0-.314-.289-.47-.868-.47-.552 0-.847.16-.884.483-.028.426-.083.85-.165 1.27-.049.31-.151.609-.304.883a.863.863 0 01-.152-.249 7.05 7.05 0 01-.662-2.29c0-.028.027-.041.083-.041 1.02-.111 1.794-.631 2.318-1.56.24-.524.359-1.062.359-1.614 0-1.086-.364-1.795-1.09-2.126a2.218 2.218 0 00-.828-.165c-.414 0-.805.11-1.173.331-.727.45-1.192 1.458-1.394 3.022a4.901 4.901 0 00-.124 1.104c.046 1.233.276 2.346.69 3.34.22.524.575.9 1.062 1.13.296.112.61.167.925.167h.235zm-1.16-4.54a7.982 7.982 0 01.842-3.464c.166.211.249.612.249 1.2 0 1.059-.364 1.812-1.09 2.264zm6.294 4.54c.764-.102 1.274-.447 1.532-1.035.267-.635.413-1.362.441-2.18 0-.314-.29-.47-.87-.47-.551 0-.845.16-.882.483-.029.426-.084.85-.166 1.27-.048.31-.151.609-.304.883a.856.856 0 01-.151-.249 7.057 7.057 0 01-.663-2.29c0-.028.028-.041.083-.041 1.021-.111 1.794-.631 2.319-1.56.239-.524.358-1.062.358-1.614 0-1.086-.364-1.795-1.09-2.126a2.215 2.215 0 00-.828-.165c-.414 0-.805.11-1.173.331-.726.45-1.191 1.458-1.393 3.022a4.883 4.883 0 00-.125 1.104c.046 1.233.276 2.346.69 3.34.22.524.575.9 1.063 1.13.295.112.609.167.924.167h.235zm-1.16-4.54a7.973 7.973 0 01.843-3.464c.165.211.248.612.248 1.2 0 1.059-.364 1.812-1.09 2.264zm5.466 4.719c.276-.01.497-.05.663-.125.175-.073.313-.238.414-.496.138-.45.257-.888.359-1.311.21-.901.469-1.776.772-2.622.138-.377.294-.837.47-1.38l.027.014c0 .672.004 1.334.014 1.987.009.644.05 1.279.124 1.904.01.212.05.368.124.47.083.092.225.156.428.193.12.027.244.041.373.041.312 0 .56-.064.745-.193a.253.253 0 00.124-.22v-.028c-.129-.764-.193-1.923-.193-3.478l.027-1.421c0-.432-.032-.86-.096-1.284-.065-.496-.447-.745-1.146-.745-.892 0-1.55.607-1.973 1.822a14.44 14.44 0 00-.51 1.463l-.676 2.015-.014-.083a17.39 17.39 0 01-.07-.939c-.009-.174-.018-.58-.027-1.214 0-.7.028-1.329.083-1.89l.055-.91c0-.24-.069-.41-.207-.512-.138-.11-.331-.175-.58-.193-.579.037-.901.317-.965.842-.056.478-.088.864-.097 1.159l-.041 1.545c0 .911.055 1.78.165 2.609.11.818.313 1.646.607 2.484.13.33.47.496 1.022.496zm8.633-.069c.506 0 .947-.129 1.324-.386.387-.258.621-.65.704-1.173.092-.7.138-1.399.138-2.098 0-1.196-.032-2.47-.097-3.822l-.04-1.367c0-.349-.305-.524-.911-.524-.267 0-.484.037-.65.11-.165.065-.29.226-.372.483-.083.26-.17.517-.262.773l-.138.387a29.163 29.163 0 01-.91 2.4.15.15 0 00-.029.056.154.154 0 01-.055.055l-.041-.096a10.005 10.005 0 01-.386-2.07l-.056-.428a.806.806 0 00-.317-.552.914.914 0 00-.58-.194c-.174 0-.363.06-.565.18a.564.564 0 00-.304.51l.014.042c.055.635.143 1.255.262 1.862.128.605.347 1.186.649 1.725.138.24.317.4.538.483.23.083.474.125.731.125.405 0 .736-.106.994-.318a2.84 2.84 0 00.69-.883v-.028a.156.156 0 00.027-.04c.01-.02.023-.029.042-.029.009.01.014.295.014.856 0 .68-.028 1.362-.083 2.043-.019.11-.042.234-.07.372a2.012 2.012 0 01-.082.36c-.037.1-.078.15-.124.15-.019 0-.042-.023-.07-.069-.23-.322-.57-.483-1.02-.483l-.194.015c-.1 0-.193.009-.276.027a.904.904 0 00-.29.138c-.11.073-.165.147-.165.22 0 .047.019.093.055.139.037.046.083.096.138.151.065.046.125.102.18.166.423.488.952.731 1.587.731v.001z\\"/>\\n    <path stroke=\\"none\\" d=\\"M3.846 19.706l.152-.014c.107 0 .213-.01.318-.028a.85.85 0 00.317-.138c.11-.083.166-.17.166-.262a.413.413 0 00-.07-.22 1.102 1.102 0 01-.11-.235c-.186-.801-.278-1.62-.276-2.443 0-1.04.023-1.84.07-2.401.036-.515.091-1.095.165-1.739l.11-.91c0-.102.01-.166.028-.194.028-.037.078-.055.152-.055.184.019.441.028.773.028.22 0 .427-.028.62-.083.194-.055.29-.152.29-.29 0-.129-.1-.225-.303-.29a2.833 2.833 0 00-.69-.124 7.177 7.177 0 00-.732-.041l-2.29.041a5.121 5.121 0 01-.249-.027.988.988 0 00-.165-.014 1.38 1.38 0 00-.22-.014l-.194.014c-.11 0-.212.014-.304.041a.685.685 0 00-.29.152c-.073.055-.11.115-.11.18 0 .082.055.15.165.206.276.166.833.249 1.67.249.074 0 .11.023.11.069-.026.341-.063.682-.11 1.02a37.388 37.388 0 00-.22 3.782c0 .635.013 1.187.04 1.656.038.46.134.989.29 1.587.102.33.4.497.898.497z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/teenyicons_0.4.1.zip","description":"Designed on a 15x15 grid, Teenyicons easily fit in very small spaces and maintain a crisp look.","groups":["outline","solid"],"version":"0.4.1","release":"February 4, 2021","license":"CC","url":"https://teenyicons.com","icons":1200},{"name":"zondicons","title":"Zondicons","icon":"<svg viewBox=\\"0 0 30 30\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n  <g stroke=\\"#444\\" fill=\\"#444\\">\\n    <path fill=\\"none\\" stroke-width=\\"2\\" d=\\"M25.86 16.207a9.054 9.054 0 01-4.224 7.167L15 27.066l-6.636-3.692a9.054 9.054 0 01-4.223-7.167V6.554c4.078 0 7.843-1.351 10.859-3.62a17.938 17.938 0 0010.86 3.62v9.653z\\"/>\\n  </g>\\n</svg>\\n","package":"http://static.zoolanders.com/icons/zondicons_1.0.0.zip","description":"A set of icons with charming yet sophisticated personality designed by Steve Schoger.","version":"1.0.0","release":"July 12, 2017","license":"CC","url":"https://zondicons.com","icons":297}]`);
const __pageData = JSON.parse('{"title":"Collections","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/icons/collections.md","filePath":"essentials-for-yootheme-pro/addons/icons/collections.md"}');
const __default__ = { name: "essentials-for-yootheme-pro/addons/icons/collections.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const collections = data;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="collections" tabindex="-1">Collections <a class="header-anchor" href="#collections" aria-label="Permalink to &quot;Collections&quot;">​</a></h1><p>An icon collection represents a set of icons that can be added or removed collectively from the builder&#39;s icon library. Those are distributed by Essentials as additional packages managed in the <a href="/essentials-for-yootheme-pro/settings.html#icon-collections">Icon Collections</a> settings panel.</p><p>After installation, the collection icons will integrate natively and become available throughout the builder.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Icon Collections"></p><!--[-->`);
      ssrRenderList(unref(collections), (col) => {
        _push(`<!--[--><h2${ssrRenderAttr("id", col.name)} tabindex="-1">${ssrInterpolate(col.title)} Icon Collection <a class="header-anchor"${ssrRenderAttr("href", `#${col.name}`)}${ssrRenderAttr("aria-label", `Permalink to "${col.name}"`)}>​</a></h2><div class="tm-resource-icon">${col.icon ?? ""}</div><p>A collection of <code>${ssrInterpolate(col.icons)}</code> icons from <a${ssrRenderAttr("href", col.url)} target="_blank">${ssrInterpolate(col.title)}</a> released on ${ssrInterpolate(col.release)} under the ${ssrInterpolate(col.license)} license as version <code>${ssrInterpolate(col.version)}</code>.</p><img${ssrRenderAttr("src", `./assets/collection-${col.name}.webp`)}${ssrRenderAttr("alt", `${col.title} Icon Collection`)}><!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/icons/collections.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};