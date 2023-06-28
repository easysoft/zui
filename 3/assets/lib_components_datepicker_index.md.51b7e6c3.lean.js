import{_ as F,H as h,o as m,c as B,J as l,E as o,C as s,a as e,V as p}from"./chunks/framework.d553856c.js";const f={mounted(){onZUIReady(()=>{const E=document.getElementById("datePicker1");new zui.Datepicker("#datePicker1",{onChange:a=>{E.querySelector(".form-control").value=a}});const r=document.getElementById("datePicker2");new zui.Datepicker("#datePicker2",{minDate:"2022-12-02",maxDate:"2022-12-30",onChange:a=>{r.querySelector(".form-control").value=a}});const y=document.getElementById("datePicker4");new zui.Datepicker("#datePicker4",{showOtherMonth:!1,onChange:a=>{y.querySelector(".form-control").value=a}});const t=document.getElementById("datePicker5");t.querySelector(".form-control").value="2022-12-12",new zui.Datepicker("#datePicker5",{date:"2022-12-12",format:"YYYY-MM-DD",onChange:a=>{t.querySelector(".form-control").value=a}});const i=document.getElementById("datePicker6");new zui.Datepicker("#datePicker6",{tagDate:["2022-12-24","2022-12-25"],onChange:a=>{i.querySelector(".form-control").value=a}});const c=document.getElementById("datePicker7");c.querySelector(".form-control").value="2022/12/12",new zui.Datepicker("#datePicker7",{date:"2022/12/12",format:"YYYY/MM/DD",onChange:a=>{c.querySelector(".form-control").value=a}});const n=document.getElementById("datePicker8"),d=new zui.Datepicker("#datePicker8",{onChange:a=>{n.querySelector(".form-control").value=a}});new zui.BtnGroup("#btnGroupPlacement",{items:[{text:"top-start"},{text:"top-end"},{text:"bottom-start"},{text:"bottom-end"}],onClickItem:a=>{a.event.target.closest(".btn-group").querySelectorAll(".btn").forEach(u=>{u.classList.remove("primary")}),a.event.target.classList.toggle("primary"),d.render({placement:a.item.text})}})})}},$=JSON.parse('{"title":"日期选择","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/datepicker/index.md","filePath":"lib/components/datepicker/index.md","lastUpdated":null}'),g=s("h1",{id:"日期选择",tabindex:"-1"},[e("日期选择 "),s("a",{class:"header-anchor",href:"#日期选择","aria-label":'Permalink to "日期选择"'},"​")],-1),_=s("p",null,"日期选择插件可以帮助用户更方便准确的选择日期和时间。",-1),q=s("h2",{id:"使用方法",tabindex:"-1"},[e("使用方法 "),s("a",{class:"header-anchor",href:"#使用方法","aria-label":'Permalink to "使用方法"'},"​")],-1),D=s("p",null,[e("你需要手动在 "),s("code",null,"<input>"),e(" 元素上调用初始化函数，并通过配置来定制日期选择格式，然后就可以在浮层中可以选择日期。")],-1),C=s("div",{class:"input-control suffix-sm form-datetime w-40",id:"datePicker1"},[s("input",{type:"text",class:"form-control",placeholder:"请选择日期"}),s("span",{class:"input-control-suffix"},[s("i",{class:"icon icon-time"})])],-1),k=p("",3),P=s("div",null,[s("div",null,"限制天数"),s("div",{class:"input-control suffix-sm form-datetime w-40",id:"datePicker2"},[s("input",{type:"text",class:"form-control",placeholder:"请选择日期"}),s("span",{class:"input-control-suffix"},[s("i",{class:"icon icon-time"})])])],-1),x=p("",3),b=s("div",{class:"input-control suffix-sm form-datetime w-40",id:"datePicker5"},[s("input",{type:"text",class:"form-control",placeholder:"请选择日期"}),s("span",{class:"input-control-suffix"},[s("i",{class:"icon icon-time"})])],-1),v=p("",2),w=s("div",{class:"input-control suffix-sm form-datetime w-40",id:"datePicker4"},[s("input",{type:"text",class:"form-control",placeholder:"请选择日期"}),s("span",{class:"input-control-suffix"},[s("i",{class:"icon icon-time"})])],-1),T=p("",3),S=s("div",{class:"input-control suffix-sm form-datetime w-40",id:"datePicker7"},[s("input",{type:"text",class:"form-control",placeholder:"请选择日期"}),s("span",{class:"input-control-suffix"},[s("i",{class:"icon icon-time"})])],-1),Y=p("",2),A=s("div",{class:"input-control suffix-sm form-datetime w-40",id:"datePicker6"},[s("input",{type:"text",class:"form-control",placeholder:"请选择日期"}),s("span",{class:"input-control-suffix"},[s("i",{class:"icon icon-time"})])],-1),I=p("",3),M=s("div",{id:"btnGroupPlacement"},null,-1),V=s("div",{class:"input-control suffix-sm form-datetime w-40 mt-4",id:"datePicker8"},[s("input",{type:"text",class:"form-control",placeholder:"请选择日期"}),s("span",{class:"input-control-suffix"},[s("i",{class:"icon icon-time"})])],-1),z=p("",38);function N(E,r,y,t,i,c){const n=h("Example");return m(),B("div",null,[g,_,q,D,l(n,null,{default:o(()=>[C]),_:1}),k,l(n,{class:"flex gap-2"},{default:o(()=>[P]),_:1}),x,l(n,null,{default:o(()=>[b]),_:1}),v,l(n,null,{default:o(()=>[w]),_:1}),T,l(n,null,{default:o(()=>[S]),_:1}),Y,l(n,null,{default:o(()=>[A]),_:1}),I,l(n,null,{default:o(()=>[M,V]),_:1}),z])}const G=F(f,[["render",N]]);export{$ as __pageData,G as default};