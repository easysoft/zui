import{p,y as E,H as i,o as r,c as y,J as l,E as t,V as o,C as s}from"./chunks/framework.a3326316.js";const _=o("",4),d=s("i",{class:"icon icon-resize"},null,-1),u=o("",3),h=s("i",{class:"icon icon-5x icon-resize"},null,-1),g=s("i",{class:"icon icon-4x icon-resize"},null,-1),F=s("i",{class:"icon icon-3x icon-resize"},null,-1),q=s("i",{class:"icon icon-2x icon-resize"},null,-1),C=s("i",{class:"icon icon-resize"},null,-1),D=o("",3),B=s("i",{class:"icon icon-caret-down"},null,-1),m=s("i",{class:"rotate-45 icon icon-caret-down"},null,-1),T=s("i",{class:"rotate-90 icon icon-caret-down"},null,-1),b=s("i",{class:"rotate-180 icon icon-caret-down"},null,-1),x=o("",3),f=s("i",{class:"scale-50 icon icon-caret-down"},null,-1),S=s("i",{class:"icon icon-caret-down"},null,-1),w=s("i",{class:"scale-150 icon icon-caret-down"},null,-1),P=o("",3),k=s("i",{class:"icon icon-star spin"},null,-1),A=s("i",{class:"icon icon-star ping"},null,-1),V=s("i",{class:"icon icon-star pulse"},null,-1),v=s("i",{class:"icon icon-star bounce"},null,-1),I=o("",1),j=JSON.parse('{"title":"图标","description":"","frontmatter":{},"headers":[],"relativePath":"lib/icons/icons/index.md","filePath":"lib/icons/icons/index.md","lastUpdated":null}'),z={name:"lib/icons/icons/index.md"},$=Object.assign(z,{setup(N){return p(()=>{fetch(E("/icons/icons.json")).then(a=>{if(a.ok)return a.json();console.log("Cant't find this json file!")}).then(a=>{const c=window.document.getElementById("iconsExample");if(c){let n="";for(const e in a)n+=`<li class="flex items-center w-1/5 p-2"><i class="icon icon-${e} mr-1"></i> ${e}</li>`;c.innerHTML=n}else console.log("iconsExample is not find!")})}),(a,c)=>{const n=i("Example");return r(),y("div",null,[_,l(n,null,{default:t(()=>[d]),_:1}),u,l(n,{class:"space-x-4"},{default:t(()=>[h,g,F,q,C]),_:1}),D,l(n,{class:"space-x-4"},{default:t(()=>[B,m,T,b]),_:1}),x,l(n,{class:"space-x-4"},{default:t(()=>[f,S,w]),_:1}),P,l(n,{class:"space-x-4"},{default:t(()=>[k,A,V,v]),_:1}),I])}}});export{j as __pageData,$ as default};
