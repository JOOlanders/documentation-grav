import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Custom Twitter Dev App","titleTemplate":":title | Essentials YOOtheme Pro Documentation | ZOOlanders","description":"","frontmatter":{},"headers":[],"relativePath":"essentials-for-yootheme-pro/developer/custom-twitter-dev-app.md","filePath":"essentials-for-yootheme-pro/developer/custom-twitter-dev-app.md"}');
const _sfc_main = { name: "essentials-for-yootheme-pro/developer/custom-twitter-dev-app.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="custom-twitter-dev-app" tabindex="-1">Custom Twitter Dev App <a class="header-anchor" href="#custom-twitter-dev-app" aria-label="Permalink to &quot;Custom Twitter Dev App&quot;">​</a></h1><p>Learn how to create a custom Twitter Dev App and get your own credentials. Once ready, you can use the resulting <em>Client ID</em>, <em>Client Secret</em> and <em>Refresh Token</em> into the respective <a href="/essentials-for-yootheme-pro/auth-drivers.html#twitter">Twitter Auth</a> to authenticate.</p><div class="warning custom-block"><p class="custom-block-title">ZOOlanders OAuth</p><p>Beware that it&#39;s a technical process that requires some development skills like interacting with REST APIs.</p></div><h2 id="_1-create-a-new-dev-app" tabindex="-1">1. Create a new Dev App <a class="header-anchor" href="#_1-create-a-new-dev-app" aria-label="Permalink to &quot;1. Create a new Dev App&quot;">​</a></h2><p>Following the <a href="https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api" target="_blank" rel="noreferrer">Twitter guide</a> select the plan that best suits your case. Once the app is created, you need to enable the OAuth2 support at the bottom of the App Page on the Twitter Developer Portal.</p><h2 id="_2-generate-a-refresh-token" tabindex="-1">2. Generate a Refresh Token <a class="header-anchor" href="#_2-generate-a-refresh-token" aria-label="Permalink to &quot;2. Generate a Refresh Token&quot;">​</a></h2><p>Generate a refresh token via REST APIs calls following <a href="https://developer.twitter.com/en/docs/authentication/oauth-2-0/user-access-token" target="_blank" rel="noreferrer">this guide</a> where the first step is to generate a proper authorization url and visit it in your browser. The url will look something like this:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">https://twitter.com/i/oauth2/authorize?response_type=code&amp;client_id=YOUR_APP_CLIENT_ID&amp;redirect_uri=https://www.example.com&amp;scope=tweet.read%20users.read%20offline.access&amp;state=state&amp;code_challenge=challenge&amp;code_challenge_method=plain</span></span></code></pre></div><p>Be sure that the redirect url you set there is the same you specified at Step 1 in your app settings. It doesn&#39;t need to be a particular url, it can be whatever you want, but it should be the same as the one specified in the <code>redirect_uri</code> parameter.</p><h2 id="_3-authenticate-with-twitter" tabindex="-1">3. Authenticate With Twitter <a class="header-anchor" href="#_3-authenticate-with-twitter" aria-label="Permalink to &quot;3. Authenticate With Twitter&quot;">​</a></h2><p>When visiting such url, you will be asked to authenticate with your desidered twitter account, and allow access. The system will redirect you to the url specified in the <em>redirect_url</em> parameter. Ignore the page itself and look at the url. Copy the value of the <em>code</em> pararameter, you will need it in the next step.</p><h2 id="_4-get-a-refresh-token" tabindex="-1">4. Get a Refresh Token <a class="header-anchor" href="#_4-get-a-refresh-token" aria-label="Permalink to &quot;4. Get a Refresh Token&quot;">​</a></h2><p>Using a console or a tool like Postman, make a post request to create an access and refresh token:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">curl</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> --location</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> --request</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> POST</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &#39;https://api.twitter.com/2/oauth2/token&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> \\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">--header </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;Content-Type: application/x-www-form-urlencoded&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> \\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">--data-urlencode </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;code=THE_CODE_YOU_COPIED_AT_STEP_6&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> \\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">--data-urlencode </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;grant_type=authorization_code&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> \\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">--data-urlencode </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;client_id=YOUR_APP_CLIENT_ID&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> \\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">--data-urlencode </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;redirect_uri=https://www.example.com&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> \\</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">--data-urlencode </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;code_verifier=challenge&#39;</span></span></code></pre></div><p>In the reply, copy the value of the refresh token. Then fill in Client id, Client Secret and Refresh Token in Essentials configuration.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("essentials-for-yootheme-pro/developer/custom-twitter-dev-app.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customTwitterDevApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customTwitterDevApp as default
};