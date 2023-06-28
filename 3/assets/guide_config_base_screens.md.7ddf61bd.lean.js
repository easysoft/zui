import{_ as o,H as e,o as p,c,C as s,a as n,J as a,E as r,V as E}from"./chunks/framework.d553856c.js";const Y=JSON.parse('{"title":"屏幕","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/base/screens.md","filePath":"guide/config/base/screens.md","lastUpdated":null}'),i={name:"guide/config/base/screens.md"},d=s("h1",{id:"屏幕",tabindex:"-1"},[n("屏幕 "),s("a",{class:"header-anchor",href:"#屏幕","aria-label":'Permalink to "屏幕"'},"​")],-1),y=s("h2",{id:"屏幕断点",tabindex:"-1"},[n("屏幕断点 "),s("a",{class:"header-anchor",href:"#屏幕断点","aria-label":'Permalink to "屏幕断点"'},"​")],-1),h=s("p",null,"在 ZUI 中定义了一系列屏幕断点，你可以通过这些断点来实现响应式布局。下面为断点配置信息：",-1),_=s("thead",null,[s("tr",null,[s("th",null,"屏幕断点"),s("th",{style:{"text-align":"center"}},"内部名称"),s("th",{style:{"text-align":"center"}},"CSS 变量"),s("th",{style:{"text-align":"center"}},"尺寸范围")])],-1),F=s("td",null,"超小尺寸",-1),u=s("td",{style:{"text-align":"center"}},[s("code",null,"xs")],-1),x=s("td",{style:{"text-align":"center"}},"无",-1),g={style:{"text-align":"center"}},m=s("td",null,"小尺寸",-1),B=s("td",{style:{"text-align":"center"}},[s("code",null,"sm")],-1),b=s("td",{style:{"text-align":"center"}},[s("code",null,"--screen-sm")],-1),S={style:{"text-align":"center"}},C=s("td",null,"中等尺寸",-1),f=s("td",{style:{"text-align":"center"}},[s("code",null,"md")],-1),v=s("td",{style:{"text-align":"center"}},[s("code",null,"--screen-md")],-1),k={style:{"text-align":"center"}},P=s("td",null,"大尺寸",-1),A=s("td",{style:{"text-align":"center"}},[s("code",null,"lg")],-1),w=s("td",{style:{"text-align":"center"}},[s("code",null,"--screen-lg")],-1),q={style:{"text-align":"center"}},V=s("td",null,"超大尺寸",-1),T=s("td",{style:{"text-align":"center"}},[s("code",null,"xl")],-1),N=s("td",{style:{"text-align":"center"}},[s("code",null,"--screen-xl")],-1),D={style:{"text-align":"center"}},$=s("td",null,"2x 超大尺寸",-1),I=s("td",{style:{"text-align":"center"}},[s("code",null,"2xl")],-1),z=s("td",{style:{"text-align":"center"}},[s("code",null,"--screen-2xl")],-1),J={style:{"text-align":"center"}},U=s("h2",{id:"使用断点",tabindex:"-1"},[n("使用断点 "),s("a",{class:"header-anchor",href:"#使用断点","aria-label":'Permalink to "使用断点"'},"​")],-1),H=s("h3",{id:"通过-container-工具类",tabindex:"-1"},[n("通过 "),s("code",null,".container"),n(" 工具类 "),s("a",{class:"header-anchor",href:"#通过-container-工具类","aria-label":'Permalink to "通过 `.container` 工具类"'},"​")],-1),O=s("p",null,[n("使用屏幕断点最简单的方式为使用 CSS 工具类 "),s("code",null,".container"),n("，此工具类会让所属元素成为一个随屏幕宽度自动响应的容器。下面为一个示例：")],-1),R=s("div",{class:"container p-4 secondary"},"自适应容器",-1),Z=E("",11);function j(G,K,L,M,Q,W){const l=e("CssPropValue"),t=e("Example");return p(),c("div",null,[d,y,h,s("table",null,[_,s("tbody",null,[s("tr",null,[F,u,x,s("td",g,[n("< "),a(l,{prop:"--screen-sm",target:"body"})])]),s("tr",null,[m,B,b,s("td",S,[n("≥ "),a(l,{prop:"--screen-sm",target:"body"})])]),s("tr",null,[C,f,v,s("td",k,[n("≥ "),a(l,{prop:"--screen-md",target:"body"})])]),s("tr",null,[P,A,w,s("td",q,[n("≥ "),a(l,{prop:"--screen-lg",target:"body"})])]),s("tr",null,[V,T,N,s("td",D,[n("≥ "),a(l,{prop:"--screen-xl",target:"body"})])]),s("tr",null,[$,I,z,s("td",J,[n("≥ "),a(l,{prop:"--screen-2xl",target:"body"})])])])]),U,H,O,a(t,null,{default:r(()=>[R]),_:1}),Z])}const ss=o(i,[["render",j]]);export{Y as __pageData,ss as default};