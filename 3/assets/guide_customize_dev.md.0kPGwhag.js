import{_ as a,o as e,c as s,R as t}from"./chunks/framework.GV9-6vKB.js";const m=JSON.parse('{"title":"开发","description":"","frontmatter":{},"headers":[],"relativePath":"guide/customize/dev.md","filePath":"guide/customize/dev.md","lastUpdated":null}'),i={name:"guide/customize/dev.md"},o=t('<h1 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h1><h2 id="开发服务" tabindex="-1">开发服务 <a class="header-anchor" href="#开发服务" aria-label="Permalink to &quot;开发服务&quot;">​</a></h2><p>执行如下命令启动开发服务：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><p>开发服务器启动后，默认情况下可以通过网址：<code>http://localhost:5173/</code> 来访问开发服务页面。通过页面上的组件导航，可以访问对应的组件开发页面。也可以将组件名附加到网址后面，直接访问对应的组件页面，例如 <code>http://localhost:5173/button/</code>。</p><p>在开发服务页面上支持热更新，当开发文件变更后会自动反馈到开发服务页面上。</p><h2 id="对组件进行开发调试" tabindex="-1">对组件进行开发调试 <a class="header-anchor" href="#对组件进行开发调试" aria-label="Permalink to &quot;对组件进行开发调试&quot;">​</a></h2><h3 id="组件开发目录" tabindex="-1">组件开发目录 <a class="header-anchor" href="#组件开发目录" aria-label="Permalink to &quot;组件开发目录&quot;">​</a></h3><p>ZUI3 每个组件在一个独立的目录内，拥有自己的 <code>package.json</code> 文件，使得组件可以独立作为 npm 包来使用，也可以单独作为子项目进行开发维护。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>通常组件通过在 <code>package.json</code> 文件中设置属性 <code>private: true</code> 来让包仅在 zui3 <a href="https://pnpm.io/zh/workspaces" target="_blank" rel="noreferrer">工作空间</a>内可用，但组件仍然拥有作为公开的包发布到 npm 上进行独立使用。</p></div><h2 id="文档开发服务" tabindex="-1">文档开发服务 <a class="header-anchor" href="#文档开发服务" aria-label="Permalink to &quot;文档开发服务&quot;">​</a></h2><p>启动 ZUI 文档网站开发服务执行如下命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><p>此命令会先打包 ZUI 并启动文档开发服务器，默认情况下可以通过网址：<code>http://localhost:5174/</code> 来访问文档开发服务页面。</p>',14),l=[o];function p(d,h,c,n,r,k){return e(),s("div",null,l)}const _=a(i,[["render",p]]);export{m as __pageData,_ as default};
