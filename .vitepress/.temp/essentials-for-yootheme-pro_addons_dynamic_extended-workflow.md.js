import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_1$1 } from "./field-dynamic-options.BsmbXNg2.js";
import { _ as _imports_8 } from "./field-composed-source.BiNJKLw2.js";
import { _ as _imports_2$1 } from "./global-queries-manager.DoL03hOP.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_1 = "/assets/field-filter-implode.GX992PC6.webp";
const _imports_2 = "/assets/field-inherit-node.DGiAow83.webp";
const _imports_3 = "/assets/field-inherit-parent.CNggu63E.webp";
const _imports_4 = "/assets/field-page-query.JA8dNYz2.webp";
const _imports_5 = "/assets/field-global-query.r2VgFe1X.webp";
const _imports_6 = "/assets/field-custom-query.L_8M97Dy.webp";
const _imports_7 = "/assets/field-custom-query-config.Bya8hqzM.webp";
const _imports_10 = "/assets/dynamic-query-arguments.B4gH5vNz.webp";
const __pageData = JSON.parse('{"title":"Extended Workflow","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/dynamic/extended-workflow.md","filePath":"essentials-for-yootheme-pro/addons/dynamic/extended-workflow.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/dynamic/extended-workflow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="extended-workflow" tabindex="-1">Extended Workflow <a class="header-anchor" href="#extended-workflow" aria-label="Permalink to &quot;Extended Workflow&quot;">​</a></h1><p>YOOtheme Pro <a href="https://yootheme.com/support/yootheme-pro/joomla/dynamic-content" target="_blank" rel="noreferrer">Dynamic Content</a> has been extended with advanced features that integrates natively into the workflow. Don&#39;t worry much about those, simply set your layouts dynamic content as documented by YOOtheme and find next what are those advanced features all about.</p><h2 id="field-sources" tabindex="-1">Field Sources <a class="header-anchor" href="#field-sources" aria-label="Permalink to &quot;Field Sources&quot;">​</a></h2><p>In YOOtheme Pro a dynamic content source is set on a node level, e.g. a Text element, in which case the elements fields will be enhanced with an option to map a dynamic content from the node source. Essentials expands on that notion adding the option to choose a source on an element field level regardless of the element source configuration.</p><p>With that in mind is expected that a Dynamic option will always be present above the element fields allowing to map to those any source directly.</p><p><img${ssrRenderAttr("src", _imports_1$1)} alt="Field Dynamic Options"></p><p>If the mapped source content results in multiple values, those will be joined with a custom separator, or optionally left as is for the underlying element to deal with the content instead.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="Field Implode Filter"></p><h3 id="inherit-node" tabindex="-1">Inherit Node <a class="header-anchor" href="#inherit-node" aria-label="Permalink to &quot;Inherit Node&quot;">​</a></h3><p>What if a source has already been set in the element! In such case, an <em>Inherit Node</em> option will appear and you can opt to inherit the souce from the node for that field specifically.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Field Inherit Node"></p><h3 id="inherit-parent" tabindex="-1">Inherit Parent <a class="header-anchor" href="#inherit-parent" aria-label="Permalink to &quot;Inherit Parent&quot;">​</a></h3><p>Similarly, if an upper level parent with a source is found, an <em>Inherit Parent</em> will appear as a dynamic option.</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Field Inherit Parent"></p><h3 id="page-sources" tabindex="-1">Page Sources <a class="header-anchor" href="#page-sources" aria-label="Permalink to &quot;Page Sources&quot;">​</a></h3><p>If there are source queries related to the current view, e.g. <em>Article</em> or <em>Post</em>, those will be available as dynamic options under the <em>Page</em> group.</p><p><img${ssrRenderAttr("src", _imports_4)} alt="Field Page Query"></p><h3 id="global-sources" tabindex="-1">Global Sources <a class="header-anchor" href="#global-sources" aria-label="Permalink to &quot;Global Sources&quot;">​</a></h3><p>Global sources will always be available under the group <em>Global</em>, such is the <em>Site Source</em>, as well as the custom set <a href="#global-queries">global queries</a>.</p><p><img${ssrRenderAttr("src", _imports_5)} alt="Field Global Query"></p><h3 id="custom-queries" tabindex="-1">Custom Queries <a class="header-anchor" href="#custom-queries" aria-label="Permalink to &quot;Custom Queries&quot;">​</a></h3><p>If none of the dynamic options fit the use case, there is a <em>Custom Query</em> option that allows fetching a source with a custom query.</p><p><img${ssrRenderAttr("src", _imports_6)} alt="Field Custom Query"></p><p><img${ssrRenderAttr("src", _imports_7)} alt="Field Custom Query Config"></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Custom queries might affect page loading performance as the query would be executed for each field instead of each node. When possible, set those on a node level instead.</p></div><h3 id="composed-sources" tabindex="-1">Composed Sources <a class="header-anchor" href="#composed-sources" aria-label="Permalink to &quot;Composed Sources&quot;">​</a></h3><p>Finally, the <em>Composed Source</em> option allows composing any dynamic options in a free-form text where sources are simple to set placeholders. As this is rather a feature reach option there is a <a href="./composed-sources.html">dedicated documentation</a> about it.</p><p><img${ssrRenderAttr("src", _imports_8)} alt="Field Composed Source"></p><h2 id="global-queries" tabindex="-1">Global Queries <a class="header-anchor" href="#global-queries" aria-label="Permalink to &quot;Global Queries&quot;">​</a></h2><p>A global query is a custom source query made available as a global dynamic source option. It can help speed up the creation of layouts that use complex queries over and over. Those can be managed within the <a href="/essentials-for-yootheme-pro/settings.html#global-queries">Global Queries Manager</a>.</p><p><img${ssrRenderAttr("src", _imports_2$1)} alt="Global Queries"></p><h2 id="query-arguments" tabindex="-1">Query Arguments <a class="header-anchor" href="#query-arguments" aria-label="Permalink to &quot;Query Arguments&quot;">​</a></h2><p>YOOtheme Pro Dynamic source queries arguments are limited to static configuration. Essentials breakes through that limitation and allows setting dynamic arguments opening the door for even more advanced dynamic workflows.</p><p><img${ssrRenderAttr("src", _imports_10)} alt="Dynamic Query Arguments"></p><div class="warning custom-block"><p class="custom-block-title">Obvious Limitation</p><p>The arguments dynamic options are limited to <em>Page</em>, <em>Global</em> and <em>Custom</em> sources. That&#39;s expected as it would not be possible to inherit dynamic content from a node which source hasn&#39;t been set yet!</p></div><p>If you want your custom sources to support this feature, add <code>&#39;source&#39; =&gt; &#39;true&#39;</code> property to your source query aguments configuration.</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// query fields configuration</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;fields&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">    &#39;events&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">        &#39;type&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">            &#39;listOf&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;Event&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">        &#39;args&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">            &#39;timeMin&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">                &#39;type&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;String&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">            ]</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">        &#39;metadata&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">            &#39;fields&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">                &#39;timeMin&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">                    &#39;label&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;Time Min&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">                    &#39;source&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;true&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">                ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">            ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    ],</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">]</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/dynamic/extended-workflow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const extendedWorkflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  extendedWorkflow as default
};