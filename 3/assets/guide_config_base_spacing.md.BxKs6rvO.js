import{c as i,I as a,w as r,k as e,a as l,R as p,D as s,o,F as h,E as u,t as _,n as m}from"./chunks/framework.DkhUyr1-.js";const g=e("h1",{id:"间距",tabindex:"-1"},[l("间距 "),e("a",{class:"header-anchor",href:"#间距","aria-label":'Permalink to "间距"'},"​")],-1),f=e("h2",{id:"间距配置",tabindex:"-1"},[l("间距配置 "),e("a",{class:"header-anchor",href:"#间距配置","aria-label":'Permalink to "间距配置"'},"​")],-1),b=e("p",null,"为了方便实现风格一致的交互界面，ZUI 预置了间距设置。下面为默认的间距配置：",-1),x=e("div",{class:"gap-4 mb-2 row"},[e("div",{class:"w-12 font-bold muted"},"名称"),e("div",{class:"w-12 font-bold muted"},"实际值"),e("div",{class:"w-12 font-bold muted"},"预览")],-1),w={class:"w-12 font-mono font-bold"},v=["id"],k=p('<div class="tip custom-block"><p class="custom-block-title"><code>4px</code> 约定</p><p>通过上表可以看到，除了 <code>0</code> 和 <code>px</code> 比较特殊的设置，其他间距实际值都是 <code>4px</code> 的倍数，这是有意设计，无论是设计还是开发都应该将间距为 <code>4px</code> 的倍数作为约定，这样更有利于实现风格一致的交互界面。</p><p>当以上间距无法满足要求时，如果需要引入新的间距值也应当遵从 <code>4px</code> 约定。</p></div><p>间距会影响所有相关 CSS 属性配置，包括 <code>padding</code>、<code>margin</code>、<code>width</code>、<code>height</code>、<code>maxHeight</code>、<code>gap</code>、<code>inset</code> 等。</p><h2 id="使用间距" tabindex="-1">使用间距 <a class="header-anchor" href="#使用间距" aria-label="Permalink to &quot;使用间距&quot;">​</a></h2><p>在 ZUI 中提供了大量 CSS 工具类，可以非常方便的来应用间距配置，包括：</p><ul><li><a href="/zui/3/utilities/layout/utilities/top-right-bottom-left.html">布局 / 上/右/下/左</a></li><li><a href="/zui/3/utilities/spacing/utilities/margin.html">间距 / 外边距</a></li><li><a href="/zui/3/utilities/spacing/utilities/padding.html">间距 / 内边距</a></li><li><a href="/zui/3/utilities/spacing/utilities/space.html">间距 / 子元素间距</a></li><li><a href="/zui/3/utilities/sizing/utilities/width.html">尺寸 / 宽</a></li><li><a href="/zui/3/utilities/sizing/utilities/height.html">尺寸 / 高</a></li></ul><p>如需了解，请参考对应的文档。</p><h2 id="自定义间距" tabindex="-1">自定义间距 <a class="header-anchor" href="#自定义间距" aria-label="Permalink to &quot;自定义间距&quot;">​</a></h2><p>可以通过定制主题来修改间距设置，具体参见 <a href="/zui/3/guide/theme/">主题</a> 文档。</p>',8),T=JSON.parse('{"title":"间距","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/base/spacing.md","filePath":"guide/config/base/spacing.md","lastUpdated":null}'),S={name:"guide/config/base/spacing.md"},N=Object.assign(S,{setup(z){const c=["0","px","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"];return(P,C)=>{const d=s("CssPropValue"),n=s("Example");return o(),i("div",null,[g,f,b,a(n,{background:"light-circle",class:"space-y-1"},{default:r(()=>[x,(o(),i(h,null,u(c,t=>e("div",{key:t,class:"gap-4 row"},[e("div",w,_(t),1),a(d,{class:"w-12 text-sm text-center muted",prop:"width",target:`#example-spacing-${t.replace(".","\\.")}`},null,8,["target"]),e("div",{class:m(`bg-secondary h-4 w-${t}`),id:`example-spacing-${t}`},null,10,v)])),64))]),_:1}),k])}}});export{T as __pageData,N as default};