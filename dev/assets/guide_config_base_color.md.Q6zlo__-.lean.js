import{D as g,o as p,c as r,k as s,t as a,I as n,w as e,R as k,a as l,F as d,E as o,n as u,m as C}from"./chunks/framework.rhBm7HUy.js";const v=k('<h1 id="颜色" tabindex="-1">颜色 <a class="header-anchor" href="#颜色" aria-label="Permalink to &quot;颜色&quot;">​</a></h1><p>ZUI 的颜色体系基于 <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank" rel="noreferrer">TailwindCSS 调色板</a> 实现，主要包含语义化调色板、界面公共颜色和特殊颜色。下面分别进行介绍。</p><h2 id="语义化调色板" tabindex="-1">语义化调色板 <a class="header-anchor" href="#语义化调色板" aria-label="Permalink to &quot;语义化调色板&quot;">​</a></h2>',3),S={class:u("row gap-4 mb-2 items-center")},A=["data-title"],w=s("span",{class:"muted"},"—",-1),x={class:"text-sm muted"},q={class:"justify-between gap-2 row"},P={class:"text-xs px-0.5 text-fore"},U=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"提示"),s("p",null,"点击调色板中的颜色，可以复制颜色变量名称方便在代码中使用。")],-1),T=s("h2",{id:"界面公共颜色",tabindex:"-1"},[l("界面公共颜色 "),s("a",{class:"header-anchor",href:"#界面公共颜色","aria-label":'Permalink to "界面公共颜色"'},"​")],-1),I=s("p",null,"在 ZUI 中，界面上公共的颜色已被精心梳理和定义，尽可能使用更少的颜色来定义大部分界面元素上可能用到的颜色。界面公共颜色都应该来自语义化调色板，你可以根据产品中的需要来更换其他调色板。下面是这些颜色的定义：",-1),D={class:"flex-auto"},Z=s("span",{class:"muted"},"—",-1),L={class:"gap-4 row"},$={class:"muted"},z=s("h2",{id:"特殊颜色",tabindex:"-1"},[l("特殊颜色 "),s("a",{class:"header-anchor",href:"#特殊颜色","aria-label":'Permalink to "特殊颜色"'},"​")],-1),N=s("p",null,"在 ZUI 中会用到一些特殊颜色，这些颜色的定义是固定的，不会因为更换主题或调色板而改变。下面是这些颜色的定义：",-1),V={class:"flex-auto"},H=s("span",{class:"muted"},"—",-1),M={class:"gap-4 row"},O=["innerHTML"],j=k('<h2 id="使用颜色" tabindex="-1">使用颜色 <a class="header-anchor" href="#使用颜色" aria-label="Permalink to &quot;使用颜色&quot;">​</a></h2><p>你拥有多种方式来使用颜色，下面分别进行介绍。</p><h3 id="通过-css-变量" tabindex="-1">通过 CSS 变量 <a class="header-anchor" href="#通过-css-变量" aria-label="Permalink to &quot;通过 CSS 变量&quot;">​</a></h3><p>每种语义化颜色都被定义为 CSS 变量，变量名称拥有相同的格式，都以 <code>--color-</code> 开头，然后通过 <code>-</code> 连接颜色名称得到。例如 CSS 变量 <code>--color-primary-500</code> 可以引用 Primary 调色板上的第 500 号颜色。下面为一个在 HTML 代码中使用的例子：</p>',4),R=s("h4",{style:{color:"var(--color-primary-500)"}}," 这是一段使用 Primary 调色板上的第 500 号颜色的文本 ",-1),G=k(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color: var(--color-primary-500)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  这是一段使用 Primary 调色板上的第 500 号颜色的文本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="使用-css-工具类" tabindex="-1">使用 CSS 工具类 <a class="header-anchor" href="#使用-css-工具类" aria-label="Permalink to &quot;使用 CSS 工具类&quot;">​</a></h3><p>在 ZUI 中提供了大量 <a href="/zui/dev/utilities/">CSS 工具类</a>，大部分定义与 TailwindCSS 的工具类一致。在这些工具类中为你提供了大量的颜色相关的工具类，你可以通过这些工具类来使用颜色。下面为使用 CSS 工具类的例子：</p>`,3),J=s("h4",{class:"text-primary"}," 这是一段使用 Primary 调色板上的第 500 号颜色的文本 ",-1),K=k(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text-primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  这是一段使用 Primary 调色板上的第 500 号颜色的文本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>更多用法和例子参考 <a href="/zui/dev/utilities/">CSS 工具类</a> 文档。</p><h3 id="在设计中使用" tabindex="-1">在设计中使用 <a class="header-anchor" href="#在设计中使用" aria-label="Permalink to &quot;在设计中使用&quot;">​</a></h3><p>为了实现统一流程的交互体验，应该在设计时使用 ZUI 的颜色体系，下面为一些具体的建议：</p><ul><li>在设计中使用 ZUI 的颜色体系，而不是使用设计工具自带的颜色体系；</li><li>在设计工具中为颜色进行命名，命名方式与 ZUI 中的颜色名称一致，例如 <code>color-primary-500</code>；</li><li>如果需要实现不同风格，推荐定义新的调色板实现，而不是只修改调色板中的某一个颜色；</li><li>因为界面公共颜色来自调色版，不建议手动进行修改，除非主题需要实现对比度更明显的风格；</li><li>任何时候都不建议修改特殊颜色的定义。</li></ul><h2 id="自定义配色" tabindex="-1">自定义配色 <a class="header-anchor" href="#自定义配色" aria-label="Permalink to &quot;自定义配色&quot;">​</a></h2><p>通过自定义配色可以实现不通的主题风格。你可以在页面中通过定义新的颜色变量来覆盖默认的颜色定义，从而实现自定义配色。下面为一个例子：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 覆盖主要调色板的定义 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#faf5ff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#f3e8ff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#e9d5ff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#d8b4fe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#c084fc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#a855f7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#9333ea</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-700</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#7e22ce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#6b21a8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-900</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#581c87</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-950</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#3b0764</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-50-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">245</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-100-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">243</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">233</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-200-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">233</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">214</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">254</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-300-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">216</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">182</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">252</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-400-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">191</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">136</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">249</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-500-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">167</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">92</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">244</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-600-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">146</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">62</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">231</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-700-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">125</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">46</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">203</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-800-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">106</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">41</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">166</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-900-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">88</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">133</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  --color-primary-950-rgb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">59</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">99</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,8),Q=k('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>在定义 CSS 变量覆盖调色板时，除了定义 50~950 的十六进制颜色外，还需要定义对应的 RGB 颜色，这是为了在一些特殊场景下通过改变透明度来实现颜色的变化。</p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果你需要自定义配色，建议只通过修改调色板来实现，不建议修改界面公共颜色，除非主题需要实现对比度更明显的风格，任何时候都不应该修改特殊颜色的定义。</p></div><p>更多关于主题的内容参考 <a href="/zui/dev/theme/">主题</a> 文档。</p>',3),ss=JSON.parse('{"title":"颜色","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/base/color.md","filePath":"guide/config/base/color.md","lastUpdated":null}'),W={name:"guide/config/base/color.md"},is=Object.assign(W,{setup(X){const y=[{id:"primary",tailwind:"blue",name:"主要",meaning:"品牌、主题、可交互、正常"},{id:"secondary",tailwind:"sky",name:"次要",meaning:"品牌、主题、次级、常态的"},{id:"success",tailwind:"green",name:"成功",meaning:"完成、积极"},{id:"warning",tailwind:"amber",name:"关注",meaning:"提示、重点"},{id:"danger",tailwind:"red",name:"警告",meaning:"提示、异常、警醒"},{id:"important",tailwind:"pink",name:"重要",meaning:"优先"},{id:"special",tailwind:"purple",name:"特殊",meaning:"触动、激情"},{id:"gray",tailwind:"slate",name:"灰色",meaning:"中立、背景、边界"}],b=[50,100,200,300,400,500,600,700,800,900,950],B=[{code:"canvas",name:"画布颜色",meaning:"通常用于页面背景、组件背景等，在浅色主题中为白色，在深色主题中为深黑色。"},{code:"inverse",name:"画布反色",meaning:"通常用于界面突出部分的背景或文字颜色，例如工具提示背景等，在浅色主题中为黑色，在深色主题中为白色。"},{code:"surface-light",name:"轻量的控件背景",meaning:"轻量的控件的背景颜色"},{code:"surface",name:"控件背景",meaning:"用于控件的背景颜色，例如按钮背景、可交互面板背景等，在浅色主题中为浅灰色，在深色主题中为深黑色。"},{code:"surface-strong",name:"加重的控件背景",meaning:"加重的控件的背景颜色"},{code:"fore",name:"文本颜色",meaning:"默认的文本颜色，在浅色主题中为深黑色，在深色主题中为浅灰色。"},{code:"focus",name:"焦点颜色",meaning:"可聚焦控件的焦点状态指示颜色，例如按钮获得焦点的轮廓颜色。"},{code:"link",name:"链接颜色",meaning:"链接的颜色，例如超链接、按钮链接等，通常与主题色保持一致。"},{code:"link-hover",name:"链接悬停颜色",meaning:"链接的在鼠标悬停状态时的颜色"},{code:"link-visited",name:"链接访问后的颜色",meaning:"链接的在点击访问后的颜色"},{code:"placeholder",name:"占位文本颜色",meaning:"通常用于输入框的占位文本颜色"},{code:"border",name:"边框颜色",meaning:"控件的边框颜色"},{code:"border-strong",name:"加重的边框颜色",meaning:"加重的控件的边框颜色"},{code:"border-light",name:"轻量的边框颜色",meaning:"轻量的控件的边框颜色"}],_=[{code:"white",name:"白色",meaning:"永远为纯白色 <code>#FFFFFF</code>，不会受主题影响"},{code:"black",name:"黑色",meaning:"永远为纯黑色 <code>#000000</code>，不会受主题影响"},{code:"transparent",name:"透明色",meaning:"Alpha 通道永远为 <code>0</code>，不会受主题影响"},{code:"inherit",name:"继承色",meaning:"继承父元素同属性的颜色值，由 CSS color 属性值 <code>inherit</code> 提供。"},{code:"current",name:"当前色",meaning:"继承父元素文本颜色属性的值，由 CSS color 属性值 <code>currentColor</code> 提供。"}],m=()=>{let t=document.getElementById("doc-css-vars");t?t.remove():(t=document.createElement("style"),t.id="doc-css-vars",t.innerHTML=[":root {","  --color-primary-50: #faf5ff;","  --color-primary-100: #f3e8ff;","  --color-primary-200: #e9d5ff;","  --color-primary-300: #d8b4fe;","  --color-primary-400: #c084fc;","  --color-primary-500: #a855f7;","  --color-primary-600: #9333ea;","  --color-primary-700: #7e22ce;","  --color-primary-800: #6b21a8;","  --color-primary-900: #581c87;","  --color-primary-950: #3b0764;","  --color-primary-50-rgb: 250, 245, 255;","  --color-primary-100-rgb: 243, 233, 255;","  --color-primary-200-rgb: 233, 214, 254;","  --color-primary-300-rgb: 216, 182, 252;","  --color-primary-400-rgb: 191, 136, 249;","  --color-primary-500-rgb: 167, 92, 244;","  --color-primary-600-rgb: 146, 62, 231;","  --color-primary-700-rgb: 125, 46, 203;","  --color-primary-800-rgb: 106, 41, 166;","  --color-primary-900-rgb: 88, 34, 133;","  --color-primary-950-rgb: 59, 14, 99;","}"].join(`
`),document.head.appendChild(t))};return(t,F)=>{const E=g("ColorTile"),h=g("Example"),f=g("ClientOnly");return p(),r("div",null,[v,s("p",null,"ZUI 内置了 "+a(y.length)+" 种语义化调色板，每种类型都来自 TailwindCSS 内置的调色板，你可以根据产品中的需要来更换现有调色板。",1),n(h,{background:"light-circle",class:"space-y-4"},{default:e(()=>[(p(),r(d,null,o(y,i=>s("div",{key:i.id},[s("div",S,[s("div",{"data-toggle":"tooltip","data-title":`TailwindCSS 调色板名称：${i.tailwind}`},[s("strong",{class:u(`text-${i.id}`)},a(i.id.toUpperCase()),3),l(),w,l(),s("span",null,a(i.name),1)],8,A),s("small",x,a(i.meaning),1)]),s("div",q,[(p(),r(d,null,o(b,c=>s("div",{key:c,class:"flex-auto"},[n(E,{color:`color-${i.id}-${c}`},null,8,["color"]),s("div",P,a(c),1)])),64))])])),64))]),_:1}),U,T,I,n(h,{background:"light-circle",class:"space-y-4"},{default:e(()=>[(p(),r(d,null,o(B,i=>s("div",{class:"items-center gap-4 row",key:i.code},[n(E,{color:`color-${i.code}`,tileClass:"w-10 h-10 border border-fore rounded square"},null,8,["color"]),s("div",D,[s("div",null,[s("strong",null,a(i.code.toUpperCase()),1),l(),Z,l(),s("span",null,a(i.name),1)]),s("div",L,[s("div",$,a(i.meaning),1)])])])),64))]),_:1}),z,N,n(h,{background:"light-circle",class:"space-y-4"},{default:e(()=>[(p(),r(d,null,o(_,i=>s("div",{class:"items-center gap-4 row",key:i.code},[n(E,{color:`color-${i.code}`,tileClass:"w-10 h-10 border border-fore rounded square"},null,8,["color"]),s("div",V,[s("div",null,[s("strong",null,a(i.code.toUpperCase()),1),l(),H,l(),s("span",null,a(i.name),1)]),s("div",M,[s("div",{class:"muted",innerHTML:i.meaning},null,8,O)])])])),64))]),_:1}),j,n(h,null,{default:e(()=>[R]),_:1}),G,n(h,null,{default:e(()=>[J]),_:1}),K,n(f,null,{default:e(()=>[s("button",{type:"button",class:"rounded btn primary",onClick:F[0]||(F[0]=(...i)=>C(m)&&C(m)(...i))},"切换使用上面的调色板定义")]),_:1}),Q])}}});export{ss as __pageData,is as default};