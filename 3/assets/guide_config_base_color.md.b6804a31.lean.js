import{C as F,o as c,c as t,k as s,t as n,H as o,w as p,Q as i,a as l,F as E,D as y,n as b,l as g}from"./chunks/framework.723e1065.js";const T=i("",3),k={class:b("row gap-4 mb-2 items-center")},A=["data-title"],v=s("span",{class:"muted"},"—",-1),w={class:"text-sm muted"},x={class:"justify-between gap-2 row"},P={class:"text-xs px-0.5 text-fore"},q=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"提示"),s("p",null,"点击调色板中的颜色，可以复制颜色变量名称方便在代码中使用。")],-1),I=s("h2",{id:"界面公共颜色",tabindex:"-1"},[l("界面公共颜色 "),s("a",{class:"header-anchor",href:"#界面公共颜色","aria-label":'Permalink to "界面公共颜色"'},"​")],-1),V=s("p",null,"在 ZUI 中，界面上公共的颜色已被精心梳理和定义，尽可能使用更少的颜色来定义大部分界面元素上可能用到的颜色。界面公共颜色都应该来自语义化调色板，你可以根据产品中的需要来更换其他调色板。下面是这些颜色的定义：",-1),D={class:"flex-auto"},U=s("span",{class:"muted"},"—",-1),N={class:"gap-4 row"},Z={class:"muted"},L=s("h2",{id:"特殊颜色",tabindex:"-1"},[l("特殊颜色 "),s("a",{class:"header-anchor",href:"#特殊颜色","aria-label":'Permalink to "特殊颜色"'},"​")],-1),R=s("p",null,"在 ZUI 中会用到一些特殊颜色，这些颜色的定义是固定的，不会因为更换主题或调色板而改变。下面是这些颜色的定义：",-1),$={class:"flex-auto"},z=s("span",{class:"muted"},"—",-1),H={class:"gap-4 row"},M=["innerHTML"],O=i("",4),j=s("h4",{style:{color:"var(--color-primary-500)"}}," 这是一段使用 Primary 调色板上的第 500 号颜色的文本 ",-1),G=i("",3),J=s("h4",{class:"text-primary"}," 这是一段使用 Primary 调色板上的第 500 号颜色的文本 ",-1),Q=i("",8),K=i("",3),ss=JSON.parse('{"title":"颜色","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/base/color.md","filePath":"guide/config/base/color.md","lastUpdated":null}'),W={name:"guide/config/base/color.md"},as=Object.assign(W,{setup(X){const _=[{id:"primary",tailwind:"blue",name:"主要",meaning:"品牌、主题、可交互、正常"},{id:"secondary",tailwind:"sky",name:"次要",meaning:"品牌、主题、次级、常态的"},{id:"success",tailwind:"green",name:"成功",meaning:"完成、积极"},{id:"warning",tailwind:"amber",name:"关注",meaning:"提示、重点"},{id:"danger",tailwind:"red",name:"警告",meaning:"提示、异常、警醒"},{id:"important",tailwind:"pink",name:"重要",meaning:"优先"},{id:"special",tailwind:"purple",name:"特殊",meaning:"触动、激情"},{id:"gray",tailwind:"slate",name:"灰色",meaning:"中立、背景、边界"}],B=[50,100,200,300,400,500,600,700,800,900,950],f=[{code:"canvas",name:"画布颜色",meaning:"通常用于页面背景、组件背景等，在浅色主题中为白色，在深色主题中为深黑色。"},{code:"inverse",name:"画布反色",meaning:"通常用于界面突出部分的背景或文字颜色，例如工具提示背景等，在浅色主题中为黑色，在深色主题中为白色。"},{code:"surface",name:"控件背景",meaning:"用于控件的背景颜色，例如按钮背景、可交互面板背景等，在浅色主题中为浅灰色，在深色主题中为深黑色。"},{code:"fore",name:"文本颜色",meaning:"默认的文本颜色，在浅色主题中为深黑色，在深色主题中为浅灰色。"},{code:"focus",name:"焦点颜色",meaning:"可聚焦控件的焦点状态指示颜色，例如按钮获得焦点的轮廓颜色。"},{code:"link",name:"链接颜色",meaning:"链接的颜色，例如超链接、按钮链接等，通常与主题色保持一致。"},{code:"link-hover",name:"链接悬停颜色",meaning:"链接的在鼠标悬停状态时的颜色"},{code:"link-visited",name:"链接访问后的颜色",meaning:"链接的在点击访问后的颜色"},{code:"placeholder",name:"占位文本颜色",meaning:"通常用于输入框的占位文本颜色"},{code:"border",name:"边框颜色",meaning:"控件的边框颜色"},{code:"border-strong",name:"加重的边框颜色",meaning:"加重的控件的边框颜色"},{code:"border-light",name:"轻量的边框颜色",meaning:"轻量的控件的边框颜色"}],C=[{code:"white",name:"白色",meaning:"永远为纯白色 <code>#FFFFFF</code>，不会受主题影响"},{code:"black",name:"黑色",meaning:"永远为纯黑色 <code>#000000</code>，不会受主题影响"},{code:"transparent",name:"透明色",meaning:"Alpha 通道永远为 <code>0</code>，不会受主题影响"},{code:"inherit",name:"继承色",meaning:"继承父元素同属性的颜色值，由 CSS color 属性值 <code>inherit</code> 提供。"},{code:"current",name:"当前色",meaning:"继承父元素文本颜色属性的值，由 CSS color 属性值 <code>currentColor</code> 提供。"}],u=()=>{let e=document.getElementById("doc-css-vars");e?e.remove():(e=document.createElement("style"),e.id="doc-css-vars",e.innerHTML=[":root {","  --color-primary-50: #faf5ff;","  --color-primary-100: #f3e8ff;","  --color-primary-200: #e9d5ff;","  --color-primary-300: #d8b4fe;","  --color-primary-400: #c084fc;","  --color-primary-500: #a855f7;","  --color-primary-600: #9333ea;","  --color-primary-700: #7e22ce;","  --color-primary-800: #6b21a8;","  --color-primary-900: #581c87;","  --color-primary-950: #3b0764;","  --color-primary-50-rgb: 250, 245, 255;","  --color-primary-100-rgb: 243, 233, 255;","  --color-primary-200-rgb: 233, 214, 254;","  --color-primary-300-rgb: 216, 182, 252;","  --color-primary-400-rgb: 191, 136, 249;","  --color-primary-500-rgb: 167, 92, 244;","  --color-primary-600-rgb: 146, 62, 231;","  --color-primary-700-rgb: 125, 46, 203;","  --color-primary-800-rgb: 106, 41, 166;","  --color-primary-900-rgb: 88, 34, 133;","  --color-primary-950-rgb: 59, 14, 99;","}"].join(`
`),document.head.appendChild(e))};return(e,h)=>{const d=F("ColorTile"),r=F("Example"),S=F("ClientOnly");return c(),t("div",null,[T,s("p",null,"ZUI 内置了 "+n(_.length)+" 种语义化调色板，每种类型都来自 TailwindCSS 内置的调色板，你可以根据产品中的需要来更换现有调色板。",1),o(r,{background:"light-circle",class:"space-y-4"},{default:p(()=>[(c(),t(E,null,y(_,a=>s("div",{key:a.id},[s("div",k,[s("div",{"data-toggle":"tooltip","data-title":`TailwindCSS 调色板名称：${a.tailwind}`},[s("strong",{class:b(`text-${a.id}`)},n(a.id.toUpperCase()),3),l(),v,l(),s("span",null,n(a.name),1)],8,A),s("small",w,n(a.meaning),1)]),s("div",x,[(c(),t(E,null,y(B,m=>s("div",{key:m,class:"flex-auto"},[o(d,{color:`color-${a.id}-${m}`},null,8,["color"]),s("div",P,n(m),1)])),64))])])),64))]),_:1}),q,I,V,o(r,{background:"light-circle",class:"space-y-4"},{default:p(()=>[(c(),t(E,null,y(f,a=>s("div",{class:"items-center gap-4 row",key:a.code},[o(d,{color:`color-${a.code}`,tileClass:"w-10 h-10 border border-fore rounded square"},null,8,["color"]),s("div",D,[s("div",null,[s("strong",null,n(a.code.toUpperCase()),1),l(),U,l(),s("span",null,n(a.name),1)]),s("div",N,[s("div",Z,n(a.meaning),1)])])])),64))]),_:1}),L,R,o(r,{background:"light-circle",class:"space-y-4"},{default:p(()=>[(c(),t(E,null,y(C,a=>s("div",{class:"items-center gap-4 row",key:a.code},[o(d,{color:`color-${a.code}`,tileClass:"w-10 h-10 border border-fore rounded square"},null,8,["color"]),s("div",$,[s("div",null,[s("strong",null,n(a.code.toUpperCase()),1),l(),z,l(),s("span",null,n(a.name),1)]),s("div",H,[s("div",{class:"muted",innerHTML:a.meaning},null,8,M)])])])),64))]),_:1}),O,o(r,null,{default:p(()=>[j]),_:1}),G,o(r,null,{default:p(()=>[J]),_:1}),Q,o(S,null,{default:p(()=>[s("button",{type:"button",class:"rounded btn primary",onClick:h[0]||(h[0]=(...a)=>g(u)&&g(u)(...a))},"切换使用上面的调色板定义")]),_:1}),K])}}});export{ss as __pageData,as as default};