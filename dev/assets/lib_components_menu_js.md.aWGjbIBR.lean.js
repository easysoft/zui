import{_ as k,D as l,o as p,c as e,I as n,w as h,R as i,k as t}from"./chunks/framework.rhBm7HUy.js";const E={mounted(){onZUIReady(()=>{new zui.Menu("#menu1",{items:[{text:"复制",icon:"icon-copy"},{text:"粘贴",icon:"icon-paste"},{text:"剪切"},{type:"divider"},{type:"heading",text:"更多操作"},{text:"导入",icon:"icon-upload-alt"},{text:"导出",icon:"icon-download-alt"},{text:"保存",icon:"icon-save",onClick:s=>console.log("> menuItem.clicked",s)}]}),new zui.Menu("#menu2",{items:[{text:"复制",icon:"icon-copy"},{text:"粘贴",icon:"icon-paste"},{text:"剪切"},{type:"divider"},{type:"heading",text:"更多操作"},{text:"导入",icon:"icon-upload-alt"},{text:"导出",icon:"icon-download-alt"},{text:"保存",icon:"icon-save",onClick:s=>console.log("> menuItem.clicked",s)}],onClickItem:s=>{console.log("> menu.onClickItem",s)}}),new zui.Menu("#menu3",{items:[{text:"复制",icon:"icon-copy"},{text:"粘贴",icon:"icon-paste"},{text:"剪切"},{type:"divider"},{text:"更多操作",items:[{text:"导入",icon:"icon-upload-alt",items:[{text:"单次导入"},{text:"批量导入"}]},{text:"导出",icon:"icon-download-alt"},{text:"保存",icon:"icon-save",onClick:s=>console.log("> menuItem.clicked",s)}]}]})})}},v=JSON.parse('{"title":"菜单生成器 [WIP]","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/menu/js.md","filePath":"lib/components/menu/js.md","lastUpdated":null}'),d=i("",4),r=t("div",{id:"menu1",class:"w-32"},null,-1),g=i("",17),y=t("div",{id:"menu2",class:"w-32"},null,-1),F=i("",3),o=t("div",{id:"menu3",class:"w-32"},null,-1),c=i("",55);function u(s,C,m,B,A,D){const a=l("Example");return p(),e("div",null,[d,n(a,null,{default:h(()=>[r]),_:1}),g,n(a,null,{default:h(()=>[y]),_:1}),F,n(a,null,{default:h(()=>[o]),_:1}),c])}const x=k(E,[["render",u]]);export{v as __pageData,x as default};
