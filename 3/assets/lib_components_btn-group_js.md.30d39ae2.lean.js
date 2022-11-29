import{_ as r,r as t,o as i,c as D,a as l,w as e,b as s,d,g as p}from"./app.a28fd127.js";const y={mounted(){onZUIReady(()=>{const o=new zui.BtnGroup("#btnGroup",{items:[{text:"\u590D\u5236",icon:"icon-copy"},{text:"\u7C98\u8D34",icon:"icon-paste"},{text:"\u526A\u5207"},{type:"heading",text:"\u66F4\u591A\u64CD\u4F5C",caret:!0,children:[{text:"\u590D\u5236",icon:"icon-copy"}]},{text:"\u5BFC\u5165",icon:"icon-upload-alt"},{text:"\u5BFC\u51FA",icon:"icon-download-alt"},{text:"\u4FDD\u5B58",icon:"icon-save",onClick:n=>console.log("> btnGroupItem.clicked",n)}],onClickItem:n=>{console.log("> btnGroup.onClickItem",n)}});console.log("> btnGroup",o),new zui.BtnGroup("#iconBtnGroup",{items:[{icon:"icon-search",type:"primary"},{icon:"icon-refresh",type:"secondary"},{icon:"icon-check",type:"success"},{icon:"icon-exclamation-sign",type:"warning"},{icon:"icon-times",type:"danger",onClick:n=>console.log("> btnGroupItem.clicked",n)}]}),["xs","sm","lg","xl"].forEach(n=>{new zui.BtnGroup(`#${n}BtnGroup`,{size:n,items:[{icon:"icon-search"},{icon:"icon-refresh"},{icon:"icon-check"},{icon:"icon-exclamation-sign"}]})}),new zui.BtnGroup("#disabledBtnGroup",{items:[{icon:"icon-search"},{icon:"icon-refresh",disabled:!0},{icon:"icon-check"}]})})}},T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u6309\u94AE\u5916\u89C2","slug":"\u6309\u94AE\u5916\u89C2","link":"#\u6309\u94AE\u5916\u89C2","children":[]},{"level":2,"title":"\u7981\u7528","slug":"\u7981\u7528","link":"#\u7981\u7528","children":[]},{"level":2,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8","link":"#\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u5F15\u5165","slug":"\u5F15\u5165","link":"#\u5F15\u5165","children":[{"level":3,"title":"\u901A\u8FC7 npm","slug":"\u901A\u8FC7-npm","link":"#\u901A\u8FC7-npm","children":[]},{"level":3,"title":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61 zui","slug":"\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui","link":"#\u901A\u8FC7\u5168\u5C40\u5BF9\u8C61-zui","children":[]},{"level":3,"title":"\u4F7F\u7528 React \u7EC4\u4EF6","slug":"\u4F7F\u7528-react-\u7EC4\u4EF6","link":"#\u4F7F\u7528-react-\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u4F7F\u7528 jQuery \u6269\u5C55","slug":"\u4F7F\u7528-jquery-\u6269\u5C55","link":"#\u4F7F\u7528-jquery-\u6269\u5C55","children":[]}]},{"level":2,"title":"\u6784\u9020\u65B9\u6CD5","slug":"\u6784\u9020\u65B9\u6CD5","link":"#\u6784\u9020\u65B9\u6CD5","children":[]},{"level":2,"title":"\u9009\u9879","slug":"\u9009\u9879","link":"#\u9009\u9879","children":[{"level":3,"title":"className","slug":"classname","link":"#classname","children":[]},{"level":3,"title":"items","slug":"items","link":"#items","children":[]},{"level":3,"title":"size","slug":"size","link":"#size","children":[]},{"level":3,"title":"type","slug":"type","link":"#type","children":[]},{"level":3,"title":"itemRender","slug":"itemrender","link":"#itemrender","children":[]},{"level":3,"title":"beforeRender","slug":"beforerender","link":"#beforerender","children":[]},{"level":3,"title":"afterRender","slug":"afterrender","link":"#afterrender","children":[]},{"level":3,"title":"afterDestroy","slug":"afterdestroy","link":"#afterdestroy","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"ButtonProps","slug":"buttonprops","link":"#buttonprops","children":[]}]}],"relativePath":"lib/components/btn-group/js.md","lastUpdated":null}'),u=s("p",null,"script# \u6309\u94AE\u7EC4\u751F\u6210\u5668",-1),b=s("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[d("\u57FA\u672C\u7528\u6CD5 "),s("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),C=s("div",{id:"btnGroup"},null,-1),h=p("",2),F=s("div",{id:"iconBtnGroup"},null,-1),m=p("",2),g=s("div",{id:"disabledBtnGroup"},null,-1),A=p("",2),v=s("div",{id:"xsBtnGroup"},null,-1),_=s("div",{id:"smBtnGroup"},null,-1),B=s("div",{id:"lgBtnGroup"},null,-1),f=s("div",{id:"xlBtnGroup"},null,-1),x=p("",96);function G(o,c,n,E,k,w){const a=t("Example");return i(),D("div",null,[u,b,l(a,null,{default:e(()=>[C]),_:1}),h,l(a,null,{default:e(()=>[F]),_:1}),m,l(a,null,{default:e(()=>[g]),_:1}),A,l(a,{class:"col gap-3"},{default:e(()=>[v,_,B,f]),_:1}),x])}const q=r(y,[["render",G]]);export{T as __pageData,q as default};
