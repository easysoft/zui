import{_ as n,D as d,o as h,c as o,I as a,w as s,k as i,a as t,R as l}from"./chunks/framework.d05VLEKR.js";const p={mounted(){onZUIReady(()=>{new zui.UploadImgs("#example1",{name:"files1",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png"}),new zui.UploadImgs("#example2",{name:"files2",multiple:!0,limitCount:5,exceededCountHint:"超出上传文件数量限制",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png"}),new zui.UploadImgs("#example3",{name:"files3",multiple:!0,limitSize:"50MB",exceededSizeHint:"超出上传文件大小限制",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png"}),new zui.UploadImgs("#example4",{name:"files4",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg",accept:"image/jpg,.png"})})}},S=JSON.parse('{"title":"上传图片","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/upload-imgs/index.md","filePath":"lib/components/upload-imgs/index.md","lastUpdated":null}'),c=i("h1",{id:"上传图片",tabindex:"-1"},[t("上传图片 "),i("a",{class:"header-anchor",href:"#上传图片","aria-label":'Permalink to "上传图片"'},"​")],-1),r=i("p",null,"用于表单上传图片。",-1),k=i("h2",{id:"使用方法",tabindex:"-1"},[t("使用方法 "),i("a",{class:"header-anchor",href:"#使用方法","aria-label":'Permalink to "使用方法"'},"​")],-1),u=i("p",null,"手动在 Html 元素上调用初始化函数并通过配置指定表单字段名即可使用上传文件组件。",-1),E=i("div",{id:"example1"},null,-1),g=l("",4),m=i("div",{id:"example2"},null,-1),b=l("",3),y=i("div",{id:"example3"},null,-1),x=l("",3),F=i("div",{id:"example4"},null,-1),_=l("",92);function C(q,f,P,B,v,T){const e=d("Example");return h(),o("div",null,[c,r,k,u,a(e,null,{default:s(()=>[E]),_:1}),g,a(e,null,{default:s(()=>[m]),_:1}),b,a(e,null,{default:s(()=>[y]),_:1}),x,a(e,null,{default:s(()=>[F]),_:1}),_])}const A=n(p,[["render",C]]);export{S as __pageData,A as default};