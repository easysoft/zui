import{f as A,_ as D,D as b,o as m,c as _,I as h,w as n,R as l,k as s,a as e}from"./chunks/framework.GV9-6vKB.js";const d=[{name:"id",title:"ID",width:60,fixed:"left",checkbox:!0},{name:"project",title:"项目名称",width:200,fixed:"left",type:"link",sortType:!1,nestedToggle:!0},{name:"manager",title:"负责人",width:60,sortType:!1,flex:1,type:"avatar",avatarKey:"managerAvatar",avatarWithName:!0},{name:"progress",title:"进度",width:65,align:"center",sortType:!1,type:"progress"},{name:"storyPoints",title:"需求规模",width:80,align:"right",sortType:!1,html:p=>`${Number(p).toFixed(1)} <small class="text-gray">SP</small>`},{name:"executionCounts",title:"执行数",width:70,align:"center",sortType:!1,html:'{0} <small class="text-dark">迭代</small>'},{name:"investedDays",title:"已投入",width:70,align:"center",sortType:!1,html:'{0} <small class="text-dark">人天</small>'},{name:"startDate",title:"开始日期",width:90,align:"center",sortType:!1,formatDate:"yyyy年MM月dd日"},{name:"finishDate",title:"完成日期",width:90,align:"center",sortType:!1,formatDate:"yyyy年MM月dd日"},{name:"actions",title:"操作",width:120,sortType:!1,fixed:"right",onRenderCell(p,{col:t,row:i}){return[{html:i.data[t.name].map(k=>`<a href="#action=${k}">${{start:"开始",close:"关闭",edit:"编辑"}[k]||k}</a>`).join(" ")}]}}],r=["禅道开源版","禅道企业版","禅道旗舰版","禅道移动端","禅道自动化测试社区","ZUI3","ZenDAS","渠成云原生应用交付平台","ZTF","ZenData","ZentaoPHP","喧喧","ZSite","ZDOO","ZenTools","ZenShot","ZenPanel","ZBox","MZUI"],F=["李强","张天明","孙小微","王萌","刘大辉","周红","李兰","金星","魏小娟","张亮","马广春","丁玉涛"],o=Date.now();function f(p){const t=Math.floor(Math.random()*F.length),i=p+1;return{id:`${i}`,project:`${r[p%r.length]}${Math.floor(p/r.length)||""}`,manager:F[t],managerAvatar:A(`/assets/avatar/avatar-${1+t%10}.png`),storyPoints:Math.floor(Math.random()*1e3),executionCounts:Math.floor(Math.random()*50),investedDays:Math.floor(Math.random()*60),startDate:new Date(o-Math.floor(Math.random()*100*(3600*1e3*24))).toLocaleDateString(),finishDate:new Date(o+Math.floor(Math.random()*100*(3600*1e3*24))).toLocaleDateString(),progress:Math.floor(Math.random()*100),actions:["start","edit","close"],parent:`${["","","",i-1,i-2,i-3,i-3,i-4,"",""][i%10]}`}}const c=Array(100).fill(0).map((p,t)=>f(t)),C={"dtable-advanced":{checkOnClickRow:!0,plugins:["checkable","nested","rich"],striped:!0,colHover:"header",bordered:!0,cols:{id:{sortType:"down",width:70},manager:{width:90,sortType:!0},executionCounts:{align:"right",sortType:!0},investedDays:{align:"right"},startDate:{width:120,sortType:!0},finishDate:{width:120,sortType:!0},actions:{type:"actionButtons",width:100,onRenderCell:null,actionBtnData:{start:{title:"开始",icon:"play"},close:{title:"关闭",icon:"off"},edit:{title:"编辑",icon:"pencil"}},style:{justifyContent:"center"}}}},"dtable-layout-size":{width:"auto",height:{min:200,max:300},data:5,cols:{manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-responsive":{height:"auto",data:5,responsive:!0,cols:{project:{fixed:!1,flex:1},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-flex":{height:"auto",data:5,cols:{project:{fixed:!1,flex:3},investedDays:{flex:2},progress:{flex:1},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-cols-fixed":{height:"auto",data:5,cols:{project:{fixed:!1,flex:3,minWidth:300},investedDays:{flex:2,minWidth:100},progress:{flex:1,minWidth:100},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1}},"dtable-header-height":{height:"auto",data:5,headerHeight:50},"dtable-header-hidden":{height:"auto",data:5,header:!1},"dtable-header-custom":{height:"auto",data:5},"dtable-row-height":{height:"auto",data:5,rowHeight:50},"dtable-sort-type":{height:"auto",data:5,cols:{id:{sortType:"up"},project:{fixed:!1,flex:3,sortType:!1},investedDays:{flex:2,sortType:!0},progress:{flex:1,sortType:!0},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:!1}},"dtable-hover-effection":{height:"auto",data:5,rowHover:!0,colHover:!0,cellHover:!0},"dtable-hover-effection-custom":{height:"auto",data:5,rowHover:!0,colHover:!0,cellHover:!0},"dtable-striped":{height:"auto",data:5,striped:!0},"dtable-striped-custom":"dtable-striped","dtable-bordered":{height:"auto",data:5,bordered:!0},"dtable-bordered-custom":"dtable-bordered","dtable-scrollbar":{scrollbarHover:!0,scrollbarSize:15,horzScrollbarPos:"inside",data:6,height:200},"dtable-scrollbar-custom":"dtable-scrollbar","dtable-cell-style":{height:"auto",data:5,cols:{id:{style:{color:"var(--color-danger-500)"}},project:{fixed:!1,flex:3,minWidth:300,cellStyle:{fontWeight:"bold",color:"var(--color-primary-500)"}},investedDays:!1,progress:{flex:1,minWidth:100},manager:!1,storyPoints:!1,executionCounts:!1,startDate:!1,finishDate:!1,actions:{align:"center",cellStyle:{justifyContent:"end"}}}},"dtable-checkable":{height:"auto",data:5,checkOnClickRow:!0,plugins:["checkable"]},"dtable-nested":{plugins:["nested"]},"dtable-render-cell":{cols:{actions:{onRenderCell(p,{col:t,row:i}){return[{html:i.data[t.name].map(k=>k==="start"?`<a href="#action=${k}" title="开始" class="btn square primary-pale size-sm"><i class="icon icon-play"></i></a>`:k==="edit"?`<a href="#action=${k}" title="编辑" class="btn square primary-pale size-sm"><i class="icon icon-pencil"></i></a>`:k==="close"?`<a href="#action=${k}" title="编辑" class="btn square primary-pale size-sm"><i class="icon icon-off"></i></a>`:`<a href="#action=${k}">${k}</a>`).join(" ")}]}}}}};function v(p){let t=C[p]||{};return typeof t=="string"&&(t=C[t]||{}),{height:400,striped:!1,...t,data:typeof t.data=="number"?c.slice(0,t.data):c,cols:Array.isArray(t.cols)?t.cols.map(i=>typeof i=="string"?d.find(k=>k.name===i):{...d.find(k=>k.name===i.name),...i}):d.map(i=>{if(t.cols){const k=t.cols[i.name];if(k)return{...i,...k};if(k===!1)return{...i,hidden:!0}}return i})}}let g=0;function B(){g&&cancelAnimationFrame(g),g=requestAnimationFrame(u)}function u(){const p=document.querySelectorAll('[id^="dtable-"]:not(.dtable)');let t=0;p.forEach(i=>{if(i.classList.contains("dtable-inited")){t++;return}if(!window.zui||!window.zui.dom.isVisible(i))return;const k=i.id,E=v(k),y=new window.zui.DTable(i,E);i.classList.add("dtable-inited"),console.log("> dtable inited",y),t++}),t===p.length&&document.removeEventListener("scroll",B)}const T={mounted(){onZUIReady(u),document.addEventListener("scroll",B)}},w=T,Ss=JSON.parse('{"title":"数据表格","description":"","frontmatter":{},"headers":[],"relativePath":"lib/dtable/dtable/index.md","filePath":"lib/dtable/dtable/index.md","lastUpdated":null}'),P=l("",6),x=s("div",{id:"dtable-basic"},null,-1),S=s("h3",{id:"增强功能",tabindex:"-1"},[e("增强功能 "),s("a",{class:"header-anchor",href:"#增强功能","aria-label":'Permalink to "增强功能"'},"​")],-1),R=s("p",null,"下面的示例中展示了通过内置插件以及定制化选项实现的增强功能，包括：",-1),q=s("ul",null,[s("li",null,"在表头显示排序标记；"),s("li",null,"行选中交互；"),s("li",null,"多层级数据结构，支持展开折叠；"),s("li",null,"特殊交互和外观，包括：鼠标悬停效果、隔行变色、完整边框等；"),s("li",null,"丰富的单元格渲染格式，包括链接、头像、环形进度条，格式化文本和操作按钮等。")],-1),I=s("div",{id:"dtable-advanced"},null,-1),j=l("",34),V=s("div",{id:"dtable-layout-size"},null,-1),H=s("h3",{id:"响应式",tabindex:"-1"},[e("响应式 "),s("a",{class:"header-anchor",href:"#响应式","aria-label":'Permalink to "响应式"'},"​")],-1),L=s("p",null,[e("通过选项 "),s("code",null,"responsive"),e(" 来让数据表格获得响应式特性：当数据表格所属的父级容器尺寸发生变化时，自动根据尺寸定义重新渲染。")],-1),N=s("div",{id:"dtable-responsive"},null,-1),z=l("",7),M=s("div",{id:"dtable-flex"},null,-1),$=l("",4),W=s("div",{id:"dtable-cols-fixed"},null,-1),O=l("",5),Z=s("div",{id:"dtable-header-height"},null,-1),G=l("",3),U=s("div",{id:"dtable-header-hidden"},null,-1),K=l("",3),J=s("p",null,[s("strong",null,"定制表头背景色")],-1),X=s("p",null,[e("通过 CSS 变量 "),s("code",null,"--dtable-header-bg"),e(" 来设置表头背景色。")],-1),Q=s("div",{id:"dtable-header-custom"},null,-1),Y=l("",3),ss=s("h3",{id:"行高",tabindex:"-1"},[e("行高 "),s("a",{class:"header-anchor",href:"#行高","aria-label":'Permalink to "行高"'},"​")],-1),is=s("p",null,[e("通过选项 "),s("code",null,"rowHeight"),e(" 来设置行高，默认高度为 "),s("code",null,"35"),e("。")],-1),as=s("div",{id:"dtable-row-height"},null,-1),hs=l("",6),ns=s("div",{id:"dtable-sort-type"},null,-1),ts=l("",4),ks=s("div",{id:"dtable-hover-effection"},null,-1),ls=l("",4),ps=s("div",{id:"dtable-hover-effection-custom"},null,-1),es=l("",3),Es=s("div",{id:"dtable-striped"},null,-1),ds=l("",3),rs=s("div",{id:"dtable-striped-custom"},null,-1),gs=l("",3),ys=s("div",{id:"dtable-bordered"},null,-1),Fs=l("",3),os=s("div",{id:"dtable-bordered-custom"},null,-1),cs=l("",4),Cs=s("div",{id:"dtable-scrollbar"},null,-1),Bs=l("",3),us=s("div",{id:"dtable-scrollbar-custom"},null,-1),As=l("",4),Ds=s("div",{id:"dtable-cell-style"},null,-1),bs=l("",7),ms=s("div",{id:"dtable-checkable"},null,-1),_s=l("",7),fs=s("div",{id:"dtable-nested"},null,-1),vs=l("",8),Ts=s("div",{id:"dtable-render-cell"},null,-1),ws=l("",34);function Ps(p,t,i,k,E,y){const a=b("Example");return m(),_("div",null,[P,h(a,null,{default:n(()=>[x]),_:1}),S,R,q,h(a,null,{default:n(()=>[I]),_:1}),j,h(a,null,{default:n(()=>[V]),_:1}),H,L,h(a,null,{default:n(()=>[N]),_:1}),z,h(a,null,{default:n(()=>[M]),_:1}),$,h(a,null,{default:n(()=>[W]),_:1}),O,h(a,null,{default:n(()=>[Z]),_:1}),G,h(a,null,{default:n(()=>[U]),_:1}),K,h(a,null,{default:n(()=>[e(" [例子待定] ")]),_:1}),J,X,h(a,null,{default:n(()=>[Q]),_:1}),Y,h(a,null,{default:n(()=>[e(" [例子待定] ")]),_:1}),ss,is,h(a,null,{default:n(()=>[as]),_:1}),hs,h(a,null,{default:n(()=>[ns]),_:1}),ts,h(a,null,{default:n(()=>[ks]),_:1}),ls,h(a,null,{default:n(()=>[ps]),_:1}),es,h(a,null,{default:n(()=>[Es]),_:1}),ds,h(a,null,{default:n(()=>[rs]),_:1}),gs,h(a,null,{default:n(()=>[ys]),_:1}),Fs,h(a,null,{default:n(()=>[os]),_:1}),cs,h(a,null,{default:n(()=>[Cs]),_:1}),Bs,h(a,null,{default:n(()=>[us]),_:1}),As,h(a,null,{default:n(()=>[Ds]),_:1}),bs,h(a,null,{default:n(()=>[ms]),_:1}),_s,h(a,null,{default:n(()=>[fs]),_:1}),vs,h(a,null,{default:n(()=>[Ts]),_:1}),ws])}const Rs=D(w,[["render",Ps]]);export{Ss as __pageData,Rs as default};
