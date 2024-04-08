import{_ as d,D as y,o,c,I as h,w as e,k as i,a as r,R as k}from"./chunks/framework.d05VLEKR.js";const F={mounted(){onZUIReady(()=>{new zui.Pager("#pagerExample1",{items:[{type:"info",text:"共 {recTotal} 项"},{type:"size-menu",text:"每页 {recPerPage} 项",dropdown:{placement:"top"}},{type:"link",page:"first",icon:"icon-double-angle-left",hint:"第一页"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"info",text:"{page}/{pageTotal}"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"},{type:"link",page:"last",icon:"icon-double-angle-right",hint:"最后一页"},{type:"goto",text:"跳转"}],page:2,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{console.log("> pagerExample1.onClickItem",s)}}),new zui.Pager("#pagerExample2",{items:[{type:"info",text:"共 {recTotal} 项"},{type:"size-menu",text:"每页 {recPerPage} 项",dropdown:{placement:"top"}},{type:"link",page:"first",icon:"icon-double-angle-left",hint:"第一页"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav",count:6},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"},{type:"link",page:"last",icon:"icon-double-angle-right",hint:"最后一页"},{type:"goto",text:"跳转"}],page:2,recTotal:51,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{if(s.item.type!=="nav")return;s.event.target.closest(".pager").querySelectorAll(".pager-nav").forEach(n=>{n.classList.remove("active")}),s.event.target.classList.add("active")}}),new zui.Pager("#pagerExample3",{items:[{type:"info",text:"共 {recTotal} 项"},{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"}],page:2,recTotal:51,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{if(s.item.type!=="nav")return;const t=s.event.target.closest(".pager"),l=["text-canvas","bg-primary"];t.querySelectorAll(".pager-nav").forEach(a=>{a.classList.remove(...l)}),s.event.target.classList.add(...l)}});const p={items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"}],page:2,recTotal:47,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{if(s.item.type!=="nav")return;s.event.target.closest(".pager").querySelectorAll(".pager-nav").forEach(n=>{n.classList.remove("active")}),s.event.target.classList.add("active")}};new zui.Pager("#pagerAllCount",{...p});const E=new zui.Pager("#pagerMaxCount",{items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"nav",count:6},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"}],page:1,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}",onClickItem:s=>{var a;const t=(a=s.event.target.querySelector(".text"))==null?void 0:a.innerText;if(Number(t)&&E.render({page:Number(t)}),s.item.type!=="nav")return;s.event.target.closest(".pager").querySelectorAll(".pager-nav").forEach(g=>{g.classList.remove("active")}),s.event.target.classList.add("active")}});new zui.Pager("#pagerGoto",{items:[{type:"link",page:"prev",icon:"icon-angle-left",hint:"上一页"},{type:"info",text:"{page}/{pageTotal}"},{type:"link",page:"next",icon:"icon-angle-right",hint:"下一页"},{type:"goto",text:"跳转"}],page:1,recTotal:101,recPerPage:10,linkCreator:"#?page={page}&recPerPage={recPerPage}"}),new zui.Pager("#pagerNav1",{btnProps:{btnType:"border"},...p,onClickItem:s=>{if(s.item.type!=="nav")return;const l=s.event.target.closest(".pager").querySelectorAll(".pager-nav"),n=["text-canvas","bg-primary"];l.forEach(a=>{a.classList.remove(...n)}),s.event.target.classList.add(...n)}})})}},S=JSON.parse('{"title":"分页生成器 [WIP]","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/pager/js.md","filePath":"lib/components/pager/js.md","lastUpdated":null}'),C=i("h1",{id:"分页生成器-wip",tabindex:"-1"},[r("分页生成器 [WIP] "),i("a",{class:"header-anchor",href:"#分页生成器-wip","aria-label":'Permalink to "分页生成器 [WIP]"'},"​")],-1),u=i("p",null,"当数据量过多时，使用分页生成器动态分解数据。",-1),m=i("h2",{id:"综合用法",tabindex:"-1"},[r("综合用法 "),i("a",{class:"header-anchor",href:"#综合用法","aria-label":'Permalink to "综合用法"'},"​")],-1),B=i("div",{id:"pagerExample1"},null,-1),P=i("div",{id:"pagerExample2"},null,-1),v=i("div",{id:"pagerExample3"},null,-1),b=k("",2),f=i("div",{id:"pagerAllCount"},null,-1),A=i("p",null,"大于 6 页时的效果：",-1),D=i("div",{id:"pagerMaxCount"},null,-1),x=k("",2),_=i("div",{id:"pagerGoto"},null,-1),q=k("",3),T=i("div",{id:"pagerNav1"},null,-1),I=k("",58);function w(p,E,s,t,l,n){const a=y("Example");return o(),c("div",null,[C,u,m,h(a,{class:"col gap-2"},{default:e(()=>[B,P,v]),_:1}),b,h(a,{class:"col gap-2"},{default:e(()=>[f,A,D]),_:1}),x,h(a,null,{default:e(()=>[_]),_:1}),q,h(a,{class:"col gap-2"},{default:e(()=>[T]),_:1}),I])}const L=d(F,[["render",w]]);export{S as __pageData,L as default};