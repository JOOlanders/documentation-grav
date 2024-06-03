import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/formarea-config-shortcut.B97kQekJ.webp";
const _imports_1 = "/assets/actions.B1KTPNbb.webp";
const _imports_2 = "/assets/exec-dynamic.CAWrJtnn.webp";
const _imports_3 = "/assets/formarea-config-actions.CK7HqMDD.webp";
const _imports_4 = "/assets/formarea-config-settings.BZx8h-JV.webp";
const _imports_5 = "/assets/formarea-config-errors-display.DOAfptrd.webp";
const _imports_6 = "/assets/formarea-config-attr.CuKGjbZb.webp";
const _imports_7 = "/assets/formarea-config-action-override.Cg6q6-0N.webp";
const _imports_8 = "/assets/formarea-config-custom-scripts.xizie6v6.webp";
const __pageData = JSON.parse('{"title":"Form Area","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/addons/forms/form-area.md","filePath":"essentials-for-yootheme-pro/addons/forms/form-area.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/addons/forms/form-area.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="form-area" tabindex="-1">Form Area <a class="header-anchor" href="#form-area" aria-label="Permalink to &quot;Form Area&quot;">​</a></h1><p>When a Section, Column or Sublayout is defined as a Form Area, it is enclosed with a standard <code>&lt;form\\&gt;</code> HTML element without losing any builder capabilities. A Form Area limits the scope of the form configuration and fields structure, enabling the placement of multiple forms in the same page.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Form Area Shortcut"></p><p>A <code>paper-plane</code> icon will appear in the builder&#39;s main panel to both state that the node is a Form Area as well as to allow directly opening its configuration panel when clicked.</p><h2 id="after-submit-actions" tabindex="-1">After Submit Actions <a class="header-anchor" href="#after-submit-actions" aria-label="Permalink to &quot;After Submit Actions&quot;">​</a></h2><p>After Submit Actions, or simply actions, are multi-instance functions that will run sequentially, after a form has been successfully submitted, as long as the chain is not disrupted by an error. These are crucial for the form workflow, as submission data is not processed or logged unless there is an action set for the task.</p><p>Actions are set in the Form Area <a href="#form-area-configuration">configuration</a> and tipically involves sending an email or saving the submission data to the database. For a full overview of available actions and their capabilities, consult the <a href="./actions.html">actions</a> section.</p><p><img${ssrRenderAttr("src", _imports_1)} alt="After Submit Actions"></p><p>Actions will by default be always executed unless their status has been manually set to <code>disabled</code>, or it execution condition dynamically been resolved to false. The execution condition supports Dynamic Content, including the form submitted data.</p><p><img${ssrRenderAttr("src", _imports_2)} alt="Actions Dynamic Execution"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Use execution conditions for advanced workflows, e.g. subscribing to a newsletter only if a specific checkbox has been checked on.</p></div><h2 id="form-area-configuration" tabindex="-1">Form Area Configuration <a class="header-anchor" href="#form-area-configuration" aria-label="Permalink to &quot;Form Area Configuration&quot;">​</a></h2><p>The Form Area configuration panel contains form specific settings, including <a href="#after-submit-actions">after submit actions</a>.</p><p><img${ssrRenderAttr("src", _imports_3)} alt="Form Area Actions"></p><p><img${ssrRenderAttr("src", _imports_4)} alt="Form Area Settings"></p><table><thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><em>After Submit Actions</em></td><td><code>[]</code></td><td>List of actions to execute after a successful submission. At least one action is necessary.</td></tr><tr><td><em>HTML 5 Validation</em></td><td><code>true</code></td><td>Whether the front side HTML5 validation should be executed before submission. Server side validation is always executed.</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Note</p><p>For field specific validation refer to <a href="./elements.html">elements field settings</a>.</p></div><p><img${ssrRenderAttr("src", _imports_5)} alt="Form Area Errors Display"></p><table><thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><em>Display in Modal</em></td><td><code>false</code></td><td>Wether to display server side errors in a Modal instead of the bottom block.</td></tr><tr><td><em>Modal Content</em></td><td></td><td>The content to be displayed in the modal, use <code>{errors}</code> as placeholder for the list of errors.</td></tr><tr><td><em>Center Modal</em></td><td><code>false</code></td><td>Wether to vertically center the modal.</td></tr></tbody></table><p><img${ssrRenderAttr("src", _imports_6)} alt="Form Attributes"></p><table><thead><tr><th>Setting</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><em>Name</em></td><td></td><td>A custom name attribute for the form dom node.</td></tr><tr><td><em>ID</em></td><td></td><td>A custom ID attribute for the form dom node.</td></tr><tr><td><em>Class</em></td><td></td><td>Custom classes for the form dom node.</td></tr></tbody></table><p><img${ssrRenderAttr("src", _imports_7)} alt="Form Action Override"></p><table><thead><tr><th>Setting</th><th>Description</th></tr></thead><tbody><tr><td><em>Action URL</em></td><td>The URL where the form should submit the data to.</td></tr><tr><td><em>Action Method</em></td><td>The method that should user for submitting the data, <code>GET</code> or <code>POST</code>.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">Side Effects</p><p>Notice that when a custom action URL is set, server-side validation and after submit actions will not be executed.</p></div><p><img${ssrRenderAttr("src", _imports_8)} alt="Form Area Custom Scripts"></p><table><thead><tr><th>Event</th><th>Scope Variables</th><th>Description</th></tr></thead><tbody><tr><td><em>Before Submission</em></td><td><code>event</code>, <code>form</code></td><td>Executes before the submission allowing to prevent it.</td></tr><tr><td><em>After Submission</em></td><td><code>event</code>, <code>form</code>, <code>data</code>, <code>response</code></td><td>Executes after successfull submission.</td></tr><tr><td><em>After Submission Error</em></td><td><code>event</code>, <code>form</code>, <code>data</code>, <code>errors</code>, <code>validation</code></td><td>Executes after server side submission error, including validation errors.</td></tr><tr><td><em>After Validation Error</em></td><td><code>event</code>, <code>form</code>, <code>data</code></td><td>Executes after front-end validation error.</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For more advanced customizations consult <a href="/essentials-for-yootheme-pro/developer/form-hooks.html">Extending Forms</a> section.</p></div><h2 id="form-in-a-modal" tabindex="-1">Form in a Modal <a class="header-anchor" href="#form-in-a-modal" aria-label="Permalink to &quot;Form in a Modal&quot;">​</a></h2><p>Out of the box, a form cannot be displayed in a Modal, but there are 3rd party solutions.</p><ul><li><a href="https://flart.studio/yootheme-pro/teaser-card" target="_blank" rel="noreferrer">FS Teaser Card</a> by Flart Studio</li><li><a href="https://dj-extensions.com/yootheme/dj-popup" target="_blank" rel="noreferrer">DJ-Popup</a> by DJ Extensions</li><li><a href="https://extensions.joomlapro.com/product/ce-modal-pro" target="_blank" rel="noreferrer">JP CE Modal Pro</a> by JoomlaPro</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/addons/forms/form-area.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const formArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  formArea as default
};