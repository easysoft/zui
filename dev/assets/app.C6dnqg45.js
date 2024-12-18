import{t as G}from"./chunks/theme.CjMXx8fT.js";import{P as Q,ag as X,y as Y,N as D,j as V,h as b,g as y,a3 as H,$ as ee,d as m,V as ae,o as c,c as u,k as d,F as w,E as x,m as h,t as v,r as $,e as z,_ as te,n as T,O as F,A as I,a as B,b as O,J as re,M as ne,v as N,ah as se,ai as oe,aj as le,ak as ie,al as ce,am as ue,an as pe,ao as de,ap as ge,aq as fe,u as ve,z as be,ar as me,as as ye,at as he,au as _e}from"./chunks/framework.DeE3OwZJ.js";const ke=a=>{if(typeof document>"u")return{stabilizeScrollPosition:s=>async(...n)=>s(...n)};const e=document.documentElement;return{stabilizeScrollPosition:t=>async(...s)=>{const n=t(...s),o=a.value;if(!o)return n;const g=o.offsetTop-e.scrollTop;return await Q(),e.scrollTop=o.offsetTop-g,n}}},K="vitepress:tabSharedState",P=typeof localStorage<"u"?localStorage:null,M="vitepress:tabsSharedState",Se=()=>{const a=P==null?void 0:P.getItem(M);if(a)try{return JSON.parse(a)}catch{}return{}},$e=a=>{P&&P.setItem(M,JSON.stringify(a))},we=a=>{const e=X({});Y(()=>e.content,(r,t)=>{r&&t&&$e(r)},{deep:!0}),a.provide(K,e)},Te=(a,e)=>{const r=D(K);if(!r)throw new Error("[vitepress-plugin-tabs] TabsSharedState should be injected");V(()=>{r.content||(r.content=Se())});const t=b(),s=y({get(){var i;const o=e.value,g=a.value;if(o){const p=(i=r.content)==null?void 0:i[o];if(p&&g.includes(p))return p}else{const p=t.value;if(p)return p}return g[0]},set(o){const g=e.value;g?r.content&&(r.content[g]=o):t.value=o}});return{selected:s,select:o=>{s.value=o}}};let W=0;const Ce=()=>(W++,""+W);function Pe(){const a=H();return y(()=>{var t;const r=(t=a.default)==null?void 0:t.call(a);return r?r.filter(s=>typeof s.type=="object"&&"__name"in s.type&&s.type.__name==="PluginTabsTab"&&s.props).map(s=>{var n;return(n=s.props)==null?void 0:n.label}):[]})}const U="vitepress:tabSingleState",Ve=a=>{ee(U,a)},Ae=()=>{const a=D(U);if(!a)throw new Error("[vitepress-plugin-tabs] TabsSingleState should be injected");return a},xe={class:"plugin-tabs"},ze=["id","aria-selected","aria-controls","tabindex","onClick"],je=m({__name:"PluginTabs",props:{sharedStateKey:{}},setup(a){const e=a,r=Pe(),{selected:t,select:s}=Te(r,ae(e,"sharedStateKey")),n=b(),{stabilizeScrollPosition:o}=ke(n),g=o(s),i=b([]),p=l=>{var S;const k=r.value.indexOf(t.value);let f;l.key==="ArrowLeft"?f=k>=1?k-1:r.value.length-1:l.key==="ArrowRight"&&(f=k<r.value.length-1?k+1:0),f!==void 0&&(g(r.value[f]),(S=i.value[f])==null||S.focus())},_=Ce();return Ve({uid:_,selected:t}),(l,k)=>(c(),u("div",xe,[d("div",{ref_key:"tablist",ref:n,class:"plugin-tabs--tab-list",role:"tablist",onKeydown:p},[(c(!0),u(w,null,x(h(r),f=>(c(),u("button",{id:`tab-${f}-${h(_)}`,ref_for:!0,ref_key:"buttonRefs",ref:i,key:f,role:"tab",class:"plugin-tabs--tab","aria-selected":f===h(t),"aria-controls":`panel-${f}-${h(_)}`,tabindex:f===h(t)?0:-1,onClick:()=>h(g)(f)},v(f),9,ze))),128))],544),$(l.$slots,"default")]))}}),Ee=["id","aria-labelledby"],Re=m({__name:"PluginTabsTab",props:{label:{}},setup(a){const{uid:e,selected:r}=Ae();return(t,s)=>h(r)===t.label?(c(),u("div",{key:0,id:`panel-${t.label}-${h(e)}`,class:"plugin-tabs--content",role:"tabpanel",tabindex:"0","aria-labelledby":`tab-${t.label}-${h(e)}`},[$(t.$slots,"default",{},void 0,!0)],8,Ee)):z("",!0)}}),Be=te(Re,[["__scopeId","data-v-f1a361a2"]]),Ne=a=>{we(a),a.component("PluginTabs",je),a.component("PluginTabsTab",Be)},Fe=m({__name:"example",props:{className:{},background:{},padding:{},border:{},noRaw:{type:Boolean},ready:{type:Function}},setup(a){const e=a,r=b();V(()=>{var n,o;(n=e.ready)==null||n.call(this),r.value&&((o=window.$)==null||o.call(window,r.value).zuiInit())});const t=y(()=>{const{padding:n="p-4",className:o,noRaw:g}=e,i=[g?"":"vp-raw","example text-base"];return typeof o=="string"&&o.length&&i.push(o),typeof n=="number"?i.push(`p-${n}`):n&&i.push(n),i}),s=y(()=>{if(e.background==="light-grid")return{"background-image":"repeating-linear-gradient(135deg, rgba(189,189,189,0.1) 0px, rgba(189,189,189,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(var(--color-canvas-rgb)),rgb(var(--color-canvas-rgb)))"};if(e.background==="blue-circle")return{"background-image":"radial-gradient(circle at 31% 83%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 54% 21%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 68% 13%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 30% 64%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 51% 96%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 40% 16%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 75% 47%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 44% 44%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 10% 17%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 90% 72%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 0% 45%, rgba(var(--color-canvas-rgb),0.03) 0%, rgba(var(--color-canvas-rgb),0.03) 4%,transparent 4%, transparent 96%),linear-gradient(90deg, rgb(18, 30, 254),rgb(34, 191, 228))"};if(e.background==="light-circle")return{"background-image":"radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(var(--color-canvas-rgb)),rgb(var(--color-canvas-rgb)))"}});return(n,o)=>(c(),u("div",{ref_key:"ele",ref:r,class:T(t.value),style:F(s.value)},[$(n.$slots,"default")],6))}}),Ie=m({__name:"css-prop-value",props:{prop:{},placeholder:{},target:{},format:{type:[String,Function]},fake:{}},setup(a){const e=a,r=b(e.placeholder??e.prop),t=b(),s=y(()=>{const{format:n}=e;return typeof n=="function"?n(r.value):typeof n=="string"?n.replaceAll("{0}",r.value):r.value});return V(()=>{const n=()=>{let o=null;if(e.fake?(o=document.createElement("div"),o.setAttribute("class",`fixed bottom-0 right-0 opacity-0 pointer-events-none ${e.fake}`),document.body.appendChild(o)):e.target?o=document.querySelector(e.target):o=t.value,!o)return;const g=getComputedStyle(o);r.value=g.getPropertyValue(e.prop),e.fake&&o.remove()};n(),setTimeout(n,500)}),(n,o)=>(c(),u("span",{ref_key:"ele",ref:t},v(s.value),513))}}),Le={key:0,class:"text-center copy-code-span-tip success px-2"},Oe={key:1,class:"pr-1 copy-code-span-tip bg-canvas"},We=m({__name:"copy-code",props:{code:{},tip:{},copyTip:{}},setup(a){const e=a,r=b(!1),t=b(0),s=()=>{navigator.clipboard.writeText(e.code),r.value=!0,t.value=window.setTimeout(()=>{r.value=!1,t.value=0},2e3)};return I(()=>{t.value&&clearTimeout(t.value)}),(n,o)=>(c(),u("div",{class:T(`copy-code-span relative cursor-pointer${r.value?" is-copied":""}`),onClick:s},[$(n.$slots,"default"),r.value?(c(),u("div",Le,v(e.copyTip??"已复制"),1)):(c(),u("div",Oe,v(n.tip??n.code),1))],2))}}),De={key:0,class:"right-0 text-center semantic-color-name is-copied success"},He={key:1,class:"pr-1 semantic-color-name bg-canvas"},Ke=m({__name:"color-tile",props:{color:{},colorVal:{},tileClass:{}},setup(a){const e=b(!1),r=b(0),t=s=>{navigator.clipboard.writeText(s),e.value=!0,r.value=window.setTimeout(()=>{e.value=!1,r.value=0},2e3)};return I(()=>{r.value&&clearTimeout(r.value)}),(s,n)=>(c(),u("div",{class:"relative cursor-pointer semantic-color-item",onClick:n[0]||(n[0]=o=>t(`--${s.color}`))},[d("div",{class:T(`${s.tileClass||"w-full h-8 rounded"}${e.value?" ring-2 ring-success":""} semantic-color-tile`),style:F(`background-color: ${s.colorVal??`var(--${s.color})`}`)},null,6),$(s.$slots,"default"),e.value?(c(),u("div",De,"已复制")):(c(),u("div",He,"--"+v(s.color),1))]))}}),Me={key:1,class:"right-0 text-center style-tile-name is-copied success"},Ue={key:2,class:"pr-1 style-tile-name bg-canvas"},Je=m({__name:"style-tile",props:{name:{},title:{type:[String,Boolean]},tileClass:{},noNameClass:{type:Boolean},tileStyle:{},labelClass:{},alias:{},hint:{type:[String,Boolean]},label:{type:[String,Boolean]},noHover:{type:Boolean},copiedClass:{}},setup(a){const e=a,r=b(!1),t=b(0),s=y(()=>{const{title:i}=e;return i?i===!0?e.name:i:""}),n=y(()=>{const{label:i}=e;return i?i===!0?e.name:i:""}),o=y(()=>{const{hint:i}=e;return i===!1?"":typeof i=="string"?i:`${e.name}${e.alias?` 别名: ${e.alias}`:""}`}),g=()=>{e.name.length&&(navigator.clipboard.writeText(e.name),r.value=!0,t.value=window.setTimeout(()=>{r.value=!1,t.value=0},2e3))};return I(()=>{t.value&&clearTimeout(t.value)}),(i,p)=>(c(),u("div",{class:T(["style-tile-item",i.name&&!i.noHover?"cursor-pointer":"",i.noHover?"no-hover":""]),onClick:g},[d("div",{class:T(["style-tile",[i.tileClass,i.noNameClass?"":i.name,r.value?i.copiedClass??"ring-4 ring-opacity-50":""]]),style:F(i.tileStyle)},[B(v(s.value)+" ",1),$(i.$slots,"default")],6),n.value?(c(),u("div",{key:0,class:T(["style-tile-label",i.labelClass])},v(n.value),3)):z("",!0),r.value?(c(),u("div",Me,"已复制")):o.value?(c(),u("div",Ue,v(o.value),1)):z("",!0)],2))}}),qe={class:"font-bold text-md"},Ze={class:"space-x-0.5"},Ge={class:"text-center break-words"},Qe={key:0,class:"opacity-50"},Xe={key:1},Ye={key:0},ea={key:1,class:"opacity-50"},aa=["innerHTML"],ta={key:0},ra=["href"],J=m({__name:"prop-item",props:{name:{},type:{},optional:{type:Boolean},defaultValue:{},comment:{},override:{}},setup(a){const e=a,r=y(()=>{var s;const t=(s=e.comment)==null?void 0:s.replace(/`([^`]+)`/g,"<code>$1</code>");return t==null?void 0:t.replace(/\n/g,"<br/>")});return(t,s)=>(c(),u("tr",null,[d("td",null,[d("code",qe,v(t.name),1)]),d("td",Ze,[(c(!0),u(w,null,x(t.type.split("|"),n=>(c(),u("code",{key:n},v(n.trim()),1))),128))]),d("td",Ge,[t.optional?(c(),u(w,{key:0},[t.defaultValue===void 0?(c(),u("code",Qe,"null")):(c(),u("code",Xe,v(t.defaultValue),1))],64)):(c(),u(w,{key:1},[t.defaultValue!==void 0?(c(),u("code",Ye,v(t.defaultValue),1)):(c(),u("span",ea,"—"))],64))]),d("td",null,[$(t.$slots,"default",{},()=>[d("span",{innerHTML:r.value},null,8,aa)]),t.override?(c(),u("span",ta,[B(" 该属性重写了父部件 "),d("a",{href:`/wg/${t.override}/`},[d("code",null,v(t.override),1)],8,ra),B(" 定义。 ")])):z("",!0)])]))}}),na={class:"zui-component-props shadow rounded vp-raw text-base"},sa={class:"table"},oa=d("thead",null,[d("tr",null,[d("th",{class:""},"名称"),d("th",{class:"text-center"},"类型"),d("th",{class:"text-center"},"默认值"),d("th",null,"说明")])],-1),la=m({__name:"props",setup(a){const e=H(),r=y(()=>{var i;const t=[],s=[];(((i=e.default)==null?void 0:i.call(e))||[]).forEach(p=>{typeof p.children=="string"?s.push(p.children):t.push(p)});let n="";const o=(p,_)=>{const l=p.indexOf(_);return l===-1?[p]:[p.substring(0,l),p.substring(l+_.length)]};return{list:s.join(`
`).split(`
`).reduce((p,_)=>{let l=_.trim();if(!l.length)return p;if(l.startsWith("/*"))return n=l.slice(l.startsWith("/**")?3:2,-2).trim(),p;let k="",f=!1,S="",L="",E;if([l,k=n]=o(l,"//"),l=l.trim(),n="",l.endsWith(";")&&(l=l.substring(0,l.length-1)),(l.startsWith('"')||l.startsWith("'"))&&(l.endsWith(",")&&(l=l.slice(0,-1)),l=l.slice(1,-1)),[S,l=""]=o(l,":"),S.endsWith("?")&&(S=S.slice(0,-1),f=!0),[L,l=""]=o(l," = "),l=l.trim(),l.length)try{E=JSON.parse(l)}catch{E=l}const Z={comment:k.trim(),optional:f,name:S.trim(),type:L.trim(),defaultValue:E,override:""};return p.push(Z),p},[]),children:t}});return(t,s)=>(c(),u("div",na,[d("table",sa,[oa,d("tbody",null,[(c(!0),u(w,null,x(r.value.children,n=>{var o;return c(),O(re(n),{key:(o=n.ctx)==null?void 0:o.uid})}),128)),(c(!0),u(w,null,x(r.value.list,n=>(c(),O(J,ne({key:n.name},n),null,16))),128))])])]))}});let A=0;const R=[];function j(a){if(A&&(cancelAnimationFrame(A),A=0),a&&R.push(a),typeof window=="object"&&"zui"in window){R.forEach(e=>e()),R.length=0,window.zui.defineFn();return}A=requestAnimationFrame(()=>j())}Object.assign(window,{onZUIReady:j});j();const ia=m({__name:"zui-ready",props:{fn:{type:Function}},setup(a){const e=a;return V(()=>{j(e.fn)}),(r,t)=>null}}),ca={version:"3.0.0",skin:{shades:[50,100,200,300,400,500,600,700,800,900,950],accent:["primary","secondary","success","warning","danger","important","special","gray"],surface:["canvas","surface-light","surface","surface-strong","inverse","white","black","transparent"],solid:["primary","secondary","success","warning","danger","important","special","gray-50","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","gray-950"],gray:["gray-50","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","gray-950"],pale:["primary-pale","secondary-pale","success-pale","warning-pale","danger-pale","important-pale","special-pale","gray-50-pale","gray-100-pale","gray-200-pale","gray-300-pale","gray-400-pale","gray-500-pale","gray-600-pale","gray-700-pale","gray-800-pale","gray-900-pale","gray-950-pale"],ghost:["ghost","primary-ghost","secondary-ghost","success-ghost","warning-ghost","danger-ghost","important-ghost","special-ghost"],outline:["outline","primary-outline","secondary-outline","success-outline","warning-outline","danger-outline","important-outline","special-outline"],rounded:["rounded-none","rounded-sm","rounded","rounded-md","rounded-lg","rounded-xl","rounded-2xl","rounded-3xl","rounded-full"]}},ua={extends:G,enhanceApp({app:a}){Ne(a),a.component("Example",Fe),a.component("CssPropValue",Ie),a.component("CopyCode",We),a.component("StyleTile",Je),a.component("ColorTile",Ke),a.component("PropItem",J),a.component("Props",la),a.component("ZUIReady",ia),a.config.globalProperties.zui=ca}};function q(a){if(a.extends){const e=q(a.extends);return{...e,...a,async enhanceApp(r){e.enhanceApp&&await e.enhanceApp(r),a.enhanceApp&&await a.enhanceApp(r)}}}return a}const C=q(ua),pa=m({name:"VitePressApp",setup(){const{site:a}=ve();return V(()=>{be(()=>{document.documentElement.lang=a.value.lang,document.documentElement.dir=a.value.dir})}),a.value.router.prefetchLinks&&me(),ye(),he(),C.setup&&C.setup(),()=>_e(C.Layout)}});async function da(){const a=fa(),e=ga();e.provide(oe,a);const r=le(a.route);return e.provide(ie,r),e.component("Content",ce),e.component("ClientOnly",ue),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:e,router:a,siteData:pe}),{app:e,router:a,data:r}}function ga(){return de(pa)}function fa(){let a=N,e;return ge(r=>{let t=fe(r),s=null;return t&&(a&&(e=t),(a||e===t)&&(t=t.replace(/\.js$/,".lean.js")),s=import(t)),N&&(a=!1),s},C.NotFound)}N&&da().then(({app:a,router:e,data:r})=>{e.go().then(()=>{se(e.route,r.site),a.mount("#app")})});export{da as createApp};