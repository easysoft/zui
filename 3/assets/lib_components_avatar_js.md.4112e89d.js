import{_ as e,H as t,o as p,c as r,J as n,E as l,V as a,C as o}from"./chunks/framework.42439fff.js";const c={mounted(){onZUIReady(()=>{new zui.Avatar("#avatar1",{text:"user"}),new zui.Avatar("#avatar2",{src:"/assets/avatar/avatar.png"})})}},k=JSON.parse('{"title":"头像生成器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/avatar/js.md","filePath":"lib/components/avatar/js.md","lastUpdated":null}'),i=a('<h1 id="头像生成器" tabindex="-1">头像生成器 <a class="header-anchor" href="#头像生成器" aria-label="Permalink to &quot;头像生成器&quot;">​</a></h1><p>头像生成器允许通过 JS 动态创建一个<a href="/zui/3/lib/components/avatar/index.html">头像</a>。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>通过构造一个 <code>Avatar</code> 实例, 在一个空的 <code>&lt;div&gt;</code> 元素上创建一个头像。</p><h3 id="文字头像" tabindex="-1">文字头像 <a class="header-anchor" href="#文字头像" aria-label="Permalink to &quot;文字头像&quot;">​</a></h3>',5),E=o("div",{id:"avatar1"},null,-1),d=a(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;avatar1&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Avatar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#avatar1&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text:</span><span style="color:#9ECBFF;">&quot;user&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="图片头像" tabindex="-1">图片头像 <a class="header-anchor" href="#图片头像" aria-label="Permalink to &quot;图片头像&quot;">​</a></h3>`,2),u=o("div",{id:"avatar2"},null,-1),y=a('<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;avatar2&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Avatar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#avatar2&#39;</span><span style="color:#E1E4E8;">, {</span></span>\n<span class="line"><span style="color:#E1E4E8;">        src: </span><span style="color:#9ECBFF;">&quot;/assets/avatar/avatar.png&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    });</span></span>\n<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><h3 id="通过-npm" tabindex="-1">通过 npm <a class="header-anchor" href="#通过-npm" aria-label="Permalink to &quot;通过 npm&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {Avatar} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;zui/avatar&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Avatar</span><span style="color:#E1E4E8;">(element, options);</span></span></code></pre></div><h3 id="通过全局对象-zui" tabindex="-1">通过全局对象 <code>zui</code> <a class="header-anchor" href="#通过全局对象-zui" aria-label="Permalink to &quot;通过全局对象 `zui`&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Avatar</span><span style="color:#E1E4E8;">(element, options);</span></span></code></pre></div><h3 id="使用-react-组件" tabindex="-1">使用 React 组件 <a class="header-anchor" href="#使用-react-组件" aria-label="Permalink to &quot;使用 React 组件&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {render} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {Avatar} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;zui/avatar/react&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(element, &lt;</span><span style="color:#79B8FF;">Avatar</span><span style="color:#E1E4E8;"> {</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">options} /&gt;);</span></span></code></pre></div><h3 id="使用-jquery-扩展" tabindex="-1">使用 jQuery 扩展 <a class="header-anchor" href="#使用-jquery-扩展" aria-label="Permalink to &quot;使用 jQuery 扩展&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(element).</span><span style="color:#B392F0;">avatar</span><span style="color:#E1E4E8;">(options);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(element).</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;zui.avatar&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="更新头像" tabindex="-1">更新头像 <a class="header-anchor" href="#更新头像" aria-label="Permalink to &quot;更新头像&quot;">​</a></h2><p>调用头像组件实例上的 <code>render</code> 方法来更新头像项，并重新进行渲染：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">avatar.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">({</span></span>\n<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ... 新的头像参数</span></span>\n<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="构造方法" tabindex="-1">构造方法 <a class="header-anchor" href="#构造方法" aria-label="Permalink to &quot;构造方法&quot;">​</a></h2><p><strong>定义：</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">constructor</span><span style="color:#E1E4E8;">(element: HTMLElement </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> string, options: AvatarOptions);</span></span></code></pre></div><p><strong>参数：</strong></p><ul><li><code>element</code>：指定用于创建头像的容器元素，或者通过字符串指定用于查找容器元素的选择器</li><li><code>options</code>：指定选项</li></ul><p><strong>示例：</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Avatar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#menu&#39;</span><span style="color:#E1E4E8;">, options: AvatarOptions);</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><h3 id="classname" tabindex="-1"><code>className</code> <a class="header-anchor" href="#classname" aria-label="Permalink to &quot;`className`&quot;">​</a></h3><p>类名。</p><ul><li>类型：<code>&#39;string&#39; | &#39;object&#39; | &#39;array&#39;</code></li><li>必选：否</li></ul><h3 id="size" tabindex="-1"><code>size</code> <a class="header-anchor" href="#size" aria-label="Permalink to &quot;`size`&quot;">​</a></h3><p>大小。</p><ul><li>类型：<code>&#39;xs&#39; | &#39;sm&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;number&#39;</code></li><li>必选：否</li></ul><h3 id="circle" tabindex="-1"><code>circle</code> <a class="header-anchor" href="#circle" aria-label="Permalink to &quot;`circle`&quot;">​</a></h3><p>是否为圆形。</p><ul><li>类型：<code>boolean</code></li><li>必选： 否</li></ul><h3 id="rounded" tabindex="-1"><code>rounded</code> <a class="header-anchor" href="#rounded" aria-label="Permalink to &quot;`rounded`&quot;">​</a></h3><p>头像圆角。</p><ul><li>类型：<code>&#39;boolean&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;number&#39;</code></li><li>必选：否</li></ul><h3 id="background" tabindex="-1"><code>background</code> <a class="header-anchor" href="#background" aria-label="Permalink to &quot;`background`&quot;">​</a></h3><p>背景颜色。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="forecolor" tabindex="-1"><code>foreColor</code> <a class="header-anchor" href="#forecolor" aria-label="Permalink to &quot;`foreColor`&quot;">​</a></h3><p>字体颜色。</p><ul><li>类型：<code>string</code></li><li>必选： 否</li></ul><h3 id="text" tabindex="-1"><code>text</code> <a class="header-anchor" href="#text" aria-label="Permalink to &quot;`text`&quot;">​</a></h3><p>字体头像内容。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="src" tabindex="-1"><code>src</code> <a class="header-anchor" href="#src" aria-label="Permalink to &quot;`src`&quot;">​</a></h3><p>文件头像路径。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="code" tabindex="-1"><code>code</code> <a class="header-anchor" href="#code" aria-label="Permalink to &quot;`code`&quot;">​</a></h3><p>唯一标识，通常指定为用 ID 或 账号 组件会根据传入值生成唯一的颜色。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="render" tabindex="-1"><code>render</code> <a class="header-anchor" href="#render" aria-label="Permalink to &quot;`render`&quot;">​</a></h3><p>重新渲染，可以指定新的选项。</p><p><strong>定义：</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(options: AvatarOptions): </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre></div>',53);function h(b,g,m,v,F,_){const s=t("Example");return p(),r("div",null,[i,n(s,null,{default:l(()=>[E]),_:1}),d,n(s,null,{default:l(()=>[u]),_:1}),y])}const C=e(c,[["render",h]]);export{k as __pageData,C as default};