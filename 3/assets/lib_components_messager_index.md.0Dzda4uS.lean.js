import{j as d,D as o,o as r,c,I as e,w as t,a,k as s,R as l}from"./chunks/framework.GV9-6vKB.js";const k=s("h1",{id:"漂浮消息生成器",tabindex:"-1"},[a("漂浮消息生成器 "),s("a",{class:"header-anchor",href:"#漂浮消息生成器","aria-label":'Permalink to "漂浮消息生成器"'},"​")],-1),g=s("p",null,"通过 JS 动态创建一个漂浮消息。",-1),E=s("h2",{id:"基本用法",tabindex:"-1"},[a("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),u=s("p",null,[a("通过构造一个 "),s("code",null,"messager"),a(" 实例，页面上创建一个漂浮消息。")],-1),m=s("button",{id:"messagerTrigger",class:"btn primary messager-toggle"},"显示漂浮消息",-1),_=l("",3),y=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"top-left"},"top-left",-1),b=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"top"},"top",-1),F=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"top-right"},"top-right",-1),f=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"bottom-left"},"bottom-left",-1),C=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"bottom"},"bottom",-1),x=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"bottom-right"},"bottom-right",-1),q=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"center"},"center",-1),v=l("",3),P=s("button",{type:"button",class:"btn primary messager-toggle","data-type":"primary"},"primary",-1),T=s("button",{type:"button",class:"btn secondary messager-toggle","data-type":"secondary"},"secondary",-1),B=s("button",{type:"button",class:"btn success messager-toggle","data-type":"success"},"success",-1),A=s("button",{type:"button",class:"btn danger messager-toggle","data-type":"danger"},"danger",-1),S=s("button",{type:"button",class:"btn special messager-toggle","data-type":"special"},"special",-1),D=s("button",{type:"button",class:"btn important messager-toggle","data-type":"important"},"important",-1),V=s("button",{type:"button",class:"btn primary circle messager-toggle","data-type":"primary circle"},"primary circle",-1),w=l("",3),I=s("button",{class:"btn primary messager-toggle","data-close":"false"}," 禁用关闭按钮 ",-1),j=l("",5),N=s("button",{type:"button",class:"btn primary messager-toggle","data-time":"0","data-content":"禁用自动隐藏的悬浮消息"},"禁用自动隐藏",-1),M=s("h2",{id:"禁用动画效果",tabindex:"-1"},[a("禁用动画效果 "),s("a",{class:"header-anchor",href:"#禁用动画效果","aria-label":'Permalink to "禁用动画效果"'},"​")],-1),R=s("p",null,[a("设置 "),s("code",null,"animation"),a(" 为 "),s("code",null,"false"),a(" 禁用动画效果。")],-1),z=s("button",{type:"button",class:"btn messager-toggle","data-animation":"false","data-content":"禁用动画效果的悬浮消息"},"禁用动画效果",-1),L=l("",36),U=JSON.parse('{"title":"漂浮消息生成器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/messager/index.md","filePath":"lib/components/messager/index.md","lastUpdated":null}'),O={name:"lib/components/messager/index.md"},$=Object.assign(O,{setup(J){return d(()=>{document.addEventListener("click",h=>{const n=h.target.closest(".messager-toggle");if(!n)return;const i=zui.Messager.show({content:"这是一个漂浮消息",...zui.$(n).data()});console.log("> messager",i)})}),(h,n)=>{const i=o("Example"),p=o("example");return r(),c("div",null,[k,g,E,u,e(i,null,{default:t(()=>[m]),_:1}),_,e(i,{class:"flex gap-2"},{default:t(()=>[y,b,F,f,C,x,q]),_:1}),v,e(p,{class:"flex gap-2"},{default:t(()=>[P,T,B,A,S,D,V]),_:1}),a(" ``` "),w,e(p,null,{default:t(()=>[I]),_:1}),j,e(i,null,{default:t(()=>[N]),_:1}),M,R,e(i,null,{default:t(()=>[z]),_:1}),L])}}});export{U as __pageData,$ as default};
