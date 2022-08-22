import{_ as a,r as l,o as t,c as p,a as o,w as r,e as s,b as n}from"./app.4316a658.js";const g=JSON.parse('{"title":"\u6D4F\u89C8\u5668\u5DE5\u5177\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u65B9\u5F0F","slug":"\u4F7F\u7528\u65B9\u5F0F"},{"level":2,"title":"selectText","slug":"selecttext-func"}],"relativePath":"js/helpers/_/browser-helpers/index.md","lastUpdated":null}'),c={name:"js/helpers/_/browser-helpers/index.md"},d=s(`<h1 id="\u6D4F\u89C8\u5668\u5DE5\u5177\u65B9\u6CD5" tabindex="-1">\u6D4F\u89C8\u5668\u5DE5\u5177\u65B9\u6CD5 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5DE5\u5177\u65B9\u6CD5" aria-hidden="true">#</a></h1><p>\u63D0\u4F9B\u4E86\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u7684\u4E00\u4E9B\u5DE5\u5177\u65B9\u6CD5\u3002</p><h2 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1">\u4F7F\u7528\u65B9\u5F0F <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {browserHelpers} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><code>browserHelpers</code> \u5BF9\u8C61\u4E0A\u5C06\u62E5\u6709\u6240\u6709\u53EF\u7528\u7684\u6D4F\u89C8\u5668\u5DE5\u5177\u65B9\u6CD5\u3002</p><h2 id="selecttext-func" tabindex="-1"><code>selectText</code> <span class="text-blue-500 text-sm font-mono bg-blue-100 p-1 rounded">func</span> <a class="header-anchor" href="#selecttext-func" aria-hidden="true">#</a></h2><p>\u9009\u62E9\u754C\u9762\u4E0A\u67D0\u4E2A\u53EF\u7F16\u8F91\u5143\u7D20\u4E0A\u7684\u6587\u672C\u3002\u53EF\u7F16\u8F91\u5143\u7D20\u5305\u62EC\u8F93\u5165\u6846\u548C <code>contenteditable</code> \u5C5E\u6027\u4E3A <code>true</code> \u7684 HTML \u5143\u7D20\u3002</p><p><strong>\u5B9A\u4E49</strong></p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#8B949E;">/** \u6307\u5B9A\u5143\u7D20\u5B9E\u4F8B\u6267\u884C\u9009\u62E9\u6587\u672C\u64CD\u4F5C */</span></span>
<span class="line"><span style="color:#D2A8FF;">selectText</span><span style="color:#C9D1D9;">(element: HTMLElement) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> boolean;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">/** \u6307\u5B9A\u5143\u7D20\u9009\u62E9\u5668\u4F8B\u6267\u884C\u9009\u62E9\u6587\u672C\u64CD\u4F5C */</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">*/</span></span>
<span class="line"><span style="color:#D2A8FF;">selectText</span><span style="color:#C9D1D9;">(selector: string) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> boolean;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u53C2\u6570</strong></p><table><thead><tr><th>\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td><code>element</code></td><td style="text-align:center;"><code>Element</code></td><td>\u8981\u6267\u884C\u64CD\u4F5C\u7684\u5143\u7D20</td></tr><tr><td><code>selector</code></td><td style="text-align:center;"><code>string</code></td><td>\u8981\u6267\u884C\u64CD\u4F5C\u7684\u5143\u7D20\u9009\u62E9\u5668\u6587\u672C</td></tr></tbody></table><p><strong>\u8FD4\u56DE\u503C</strong></p><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th>\u5B9A\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><code>boolean</code></td><td>\u5982\u679C\u64CD\u4F5C\u6210\u529F\u8FD4\u56DE <code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE <code>false</code></td></tr></tbody></table><p><strong>\u793A\u4F8B</strong></p>`,14),i=n("input",{type:"text",id:"selectTextInput",value:"\u9E45\uFF0C\u9E45\uFF0C\u9E45",class:"form-control"},null,-1),D=n("button",{id:"selectTextBtn",class:"btn",onclick:"zui.selectText('#selectTextInput')"},"\u70B9\u51FB\u9009\u4E2D\u6587\u672C\u6846\u6587\u672C",-1),y=s(`<div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">input</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;text&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;input&quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">value</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;\u9E45\uFF0C\u9E45\uFF0C\u9E45&quot;</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">id</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;button&quot;</span><span style="color:#C9D1D9;">&gt;\u70B9\u51FB\u9009\u4E2D\u6587\u672C\u6846\u6587\u672C&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {selectText} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;zui/browserHelpers&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">button.</span><span style="color:#D2A8FF;">addEventListener</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;click&#39;</span><span style="color:#C9D1D9;">, () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">selectText</span><span style="color:#C9D1D9;">(input);</span></span>
<span class="line"><span style="color:#C9D1D9;">});</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1);function u(b,m,_,F,h,C){const e=l("Example");return t(),p("div",null,[d,o(e,{class:"flex flex-col gap-2 items-start"},{default:r(()=>[i,D]),_:1}),y])}var T=a(c,[["render",u]]);export{g as __pageData,T as default};
