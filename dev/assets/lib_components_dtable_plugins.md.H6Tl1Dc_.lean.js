import{f as b,_ as m,D as F,o as v,c as f,I as h,w as o,k as l,a as r,R as k}from"./chunks/framework.rhBm7HUy.js";const e=[{name:"id",title:"ID",width:60,fixed:"left",checkbox:!0},{name:"project",title:"项目名称",width:200,fixed:"left",type:"link",sortType:!1,nestedToggle:!0},{name:"manager",title:"负责人",width:60,sortType:!1,flex:1,type:"avatar",avatarKey:"managerAvatar",avatarWithName:!0},{name:"progress",title:"进度",width:65,align:"center",sortType:!1,type:"progress"},{name:"storyPoints",title:"需求规模",width:80,align:"right",sortType:!1,html:a=>`${Number(a).toFixed(1)} <small class="text-gray">SP</small>`},{name:"executionCounts",title:"执行数",width:70,align:"center",sortType:!1,html:'{0} <small class="text-dark">迭代</small>'},{name:"investedDays",title:"已投入",width:70,align:"center",sortType:!1,html:'{0} <small class="text-dark">人天</small>'},{name:"startDate",title:"开始日期",width:90,align:"center",sortType:!1,formatDate:"yyyy年MM月dd日"},{name:"finishDate",title:"完成日期",width:90,align:"center",sortType:!1,formatDate:"yyyy年MM月dd日"},{name:"actions",title:"操作",width:120,sortType:!1,fixed:"right",onRenderCell(a,{col:i,row:s}){return a[0]={html:s.data[i.name].map(n=>`<a href="#action=${n}">${{start:"开始",close:"关闭",edit:"编辑"}[n]||n}</a>`).join(" ")},a}}],E=["禅道开源版","禅道企业版","禅道旗舰版","禅道移动端","禅道自动化测试社区","ZUI3","ZenDAS","渠成云原生应用交付平台","ZTF","ZenData","ZentaoPHP","喧喧","ZSite","ZDOO","ZenTools","ZenShot","ZenPanel","ZBox","MZUI"],c=["李强","张天明","孙小微","王萌","刘大辉","周红","李兰","金星","魏小娟","张亮","马广春","丁玉涛"],C=Date.now();function q(a){const i=Math.floor(Math.random()*c.length),s=a+1;return{id:`${s}`,project:`${E[a%E.length]}${Math.floor(a/E.length)||""}`,manager:c[i],managerAvatar:b(`/assets/avatar/avatar-${1+i%10}.png`),storyPoints:Math.floor(Math.random()*1e3),executionCounts:Math.floor(Math.random()*50),investedDays:Math.floor(Math.random()*60),startDate:new Date(C-Math.floor(Math.random()*100*(3600*1e3*24))).toLocaleDateString(),finishDate:new Date(C+Math.floor(Math.random()*100*(3600*1e3*24))).toLocaleDateString(),progress:Math.floor(Math.random()*100),actions:["start","edit","close"],parent:`${["","","",s-1,s-2,s-3,s-3,s-4,"",""][s%10]}`}}const A=Array(100).fill(0).map((a,i)=>q(i)),B={"dtable-cellspan":{plugins:["rich","cellspan"],nested:!1,cols:{id:!1,manager:!1,executionCounts:{align:"right",sortType:!0},investedDays:{align:"right"},startDate:{width:120,sortType:!0},finishDate:{width:120,sortType:!0},actions:{type:"actionButtons",width:100,onRenderCell:null,actionBtnData:{start:{title:"开始",icon:"play"},close:{title:"关闭",icon:"off"},edit:{title:"编辑",icon:"pencil"}},style:{justifyContent:"center"}}},getCellSpan:a=>{if(a.row.index===0&&a.col.index===0)return{rowSpan:2};if(a.col.name==="progress"&&a.row.index%3===1)return{colSpan:3,rowSpan:2}}},"dtable-sortable":{nested:!1,plugins:["sortable"],sortable:!0}};function P(a){let i=B[a]||{};return typeof i=="string"&&(i=B[i]||{}),{height:400,striped:!1,...i,data:typeof i.data=="number"?A.slice(0,i.data):A,cols:Array.isArray(i.cols)?i.cols.map(s=>typeof s=="string"?e.find(n=>n.name===s):{...e.find(n=>n.name===s.name),...s}):e.map(s=>{if(i.cols){const n=i.cols[s.name];if(n)return{...s,...n};if(n===!1)return{...s,hidden:!0}}return s})}}let d=0;function D(){d&&cancelAnimationFrame(d),d=requestAnimationFrame(u)}function u(){const a=document.querySelectorAll('[id^="dtable-"]:not(.dtable)');let i=0;a.forEach(s=>{if(s.classList.contains("dtable-inited")){i++;return}if(!window.zui||!window.zui.dom.isVisible(s))return;const n=s.id,p=P(n),g=new window.zui.DTable(s,p);s.classList.add("dtable-inited"),console.log("> dtable inited",g),i++}),i===a.length&&document.removeEventListener("scroll",D)}const x={mounted(){onZUIReady(u),document.addEventListener("scroll",D)}},T=x,K=JSON.parse('{"title":"数据表格插件","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/dtable/plugins.md","filePath":"lib/components/dtable/plugins.md","lastUpdated":null}'),w=l("h1",{id:"数据表格插件",tabindex:"-1"},[r("数据表格插件 "),l("a",{class:"header-anchor",href:"#数据表格插件","aria-label":'Permalink to "数据表格插件"'},"​")],-1),I=l("h2",{id:"单元格格式插件-rich",tabindex:"-1"},[r("单元格格式插件 "),l("code",null,"rich"),r(),l("a",{class:"header-anchor",href:"#单元格格式插件-rich","aria-label":'Permalink to "单元格格式插件 `rich`"'},"​")],-1),_=k("",45),S=k("",20),R=k("",16),j=k("",19),M=k("",164),N=l("div",{id:"dtable-cellspan"},null,-1),O=k("",5),L=l("div",{id:"dtable-sortable"},null,-1),$=k("",12);function H(a,i,s,n,p,g){const t=F("Badge"),y=F("Example");return v(),f("div",null,[w,I,h(t,{text:"内置插件"}),_,h(t,{text:"内置插件"}),S,h(t,{text:"内置插件"}),R,h(t,{text:"内置插件"}),j,h(t,{text:"内置插件"}),M,h(y,null,{default:o(()=>[N]),_:1}),O,h(y,null,{default:o(()=>[L]),_:1}),$])}const Z=m(T,[["render",H]]);export{K as __pageData,Z as default};
