import{_ as t,C as i,o as c,c as p,H as l,w as s,k as e,a as n,Q as o}from"./chunks/framework.723e1065.js";const d={mounted(){onZUIReady(()=>{new zui.UploadImgs("#example1",{name:"files1",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png"}),new zui.UploadImgs("#example2",{name:"files2",multiple:!0,limitCount:5,exceededCountHint:"超出上传文件数量限制",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png"}),new zui.UploadImgs("#example3",{name:"files3",multiple:!0,limitSize:"50MB",exceededSizeHint:"超出上传文件大小限制",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png"}),new zui.UploadImgs("#example4",{name:"files4",tip:"可点击添加或拖拽上传，图片格式支持jpg、jpeg",accept:"image/jpg,.png"})})}},z=JSON.parse('{"title":"上传图片","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/upload-imgs/index.md","filePath":"lib/components/upload-imgs/index.md","lastUpdated":null}'),r=e("h1",{id:"上传图片",tabindex:"-1"},[n("上传图片 "),e("a",{class:"header-anchor",href:"#上传图片","aria-label":'Permalink to "上传图片"'},"​")],-1),u=e("p",null,"用于表单上传图片。",-1),E=e("h2",{id:"使用方法",tabindex:"-1"},[n("使用方法 "),e("a",{class:"header-anchor",href:"#使用方法","aria-label":'Permalink to "使用方法"'},"​")],-1),h=e("p",null,"手动在 Html 元素上调用初始化函数并通过配置指定表单字段名即可使用上传文件组件。",-1),m=e("div",{id:"example1"},null,-1),y=o(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;example1&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">upload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UploadImgs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#example1&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;files1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tip: </span><span style="color:#9ECBFF;">&#39;可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="限制上传文件数量" tabindex="-1">限制上传文件数量 <a class="header-anchor" href="#限制上传文件数量" aria-label="Permalink to &quot;限制上传文件数量&quot;">​</a></h2><p>开启多文件上传时可通过设置 <code>limitCount</code> 属性限制上传文件的数量。</p>`,4),b=e("div",{id:"example2"},null,-1),g=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">upload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UploadImgs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#example2&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;files2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    multiple: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    limitCount: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    exceededCountHint: </span><span style="color:#9ECBFF;">&#39;超出上传文件数量限制&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tip: </span><span style="color:#9ECBFF;">&#39;可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="限制上传文件大小" tabindex="-1">限制上传文件大小 <a class="header-anchor" href="#限制上传文件大小" aria-label="Permalink to &quot;限制上传文件大小&quot;">​</a></h2><p>通过设置 <code>limitSize</code> 属性可限制上传文件的大小。</p>`,3),_=e("div",{id:"example3"},null,-1),x=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">upload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UploadImgs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#example3&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;files3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    multiple: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    limitSize: </span><span style="color:#9ECBFF;">&#39;50MB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    exceededSizeHint: </span><span style="color:#9ECBFF;">&#39;超出上传文件大小限制&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    tip: </span><span style="color:#9ECBFF;">&#39;可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="限制图片类型" tabindex="-1">限制图片类型 <a class="header-anchor" href="#限制图片类型" aria-label="Permalink to &quot;限制图片类型&quot;">​</a></h2><p>通过设置 <code>accept</code> 属性限制上传图片的类型。</p>`,3),F=e("div",{id:"example4"},null,-1),f=o('<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">upload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UploadImgs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#example4&#39;</span><span style="color:#E1E4E8;">, {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;files4&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    tip: </span><span style="color:#9ECBFF;">&#39;可点击添加或拖拽上传，图片格式支持jpg、jpeg&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    accept: </span><span style="color:#9ECBFF;">&#39;image/jpg, image/jpeg&#39;</span></span>\n<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><h3 id="name" tabindex="-1"><code>name</code> <a class="header-anchor" href="#name" aria-label="Permalink to &quot;`name`&quot;">​</a></h3><p>表单字段名。</p><ul><li>类型：<code>string</code></li><li>必选：是</li></ul><h3 id="showsize" tabindex="-1"><code>showSize</code> <a class="header-anchor" href="#showsize" aria-label="Permalink to &quot;`showSize`&quot;">​</a></h3><p>是否显示文件大小。</p><ul><li>类型：<code>boolean</code></li><li>必选：否</li><li>默认值：<code>true</code></li></ul><h3 id="multiple" tabindex="-1"><code>multiple</code> <a class="header-anchor" href="#multiple" aria-label="Permalink to &quot;`multiple`&quot;">​</a></h3><p>是否开启多文件上传。</p><ul><li>类型：<code>boolean</code></li><li>必选：否</li><li>默认值：<code>true</code></li></ul><h3 id="uploadtext" tabindex="-1"><code>uploadText</code> <a class="header-anchor" href="#uploadtext" aria-label="Permalink to &quot;`uploadText`&quot;">​</a></h3><p>上传按钮文本。</p><ul><li>类型：<code>string</code></li><li>必选：否</li><li>默认值：<code>&#39;添加文件&#39;</code></li></ul><h3 id="uploadicon" tabindex="-1"><code>uploadIcon</code> <a class="header-anchor" href="#uploadicon" aria-label="Permalink to &quot;`uploadIcon`&quot;">​</a></h3><p>上传按钮图标。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="renamebtn" tabindex="-1"><code>renameBtn</code> <a class="header-anchor" href="#renamebtn" aria-label="Permalink to &quot;`renameBtn`&quot;">​</a></h3><p>是否启用重命名按钮。</p><ul><li>类型：<code>boolean</code></li><li>必选：否</li><li>默认值：<code>true</code></li></ul><h3 id="renameicon" tabindex="-1"><code>renameIcon</code> <a class="header-anchor" href="#renameicon" aria-label="Permalink to &quot;`renameIcon`&quot;">​</a></h3><p>重命名按钮图标。</p><ul><li>类型：<code>string</code></li><li>必选：否</li><li>默认值：<code>&#39;edit&#39;</code></li></ul><h3 id="renametext" tabindex="-1"><code>renameText</code> <a class="header-anchor" href="#renametext" aria-label="Permalink to &quot;`renameText`&quot;">​</a></h3><p>重命名按钮文本。</p><ul><li>类型：<code>string</code></li><li>必选：否</li><li>默认值：<code>&#39;重命名&#39;</code></li></ul><h3 id="renameclass" tabindex="-1"><code>renameClass</code> <a class="header-anchor" href="#renameclass" aria-label="Permalink to &quot;`renameClass`&quot;">​</a></h3><p>重命名按钮类。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="deletebtn" tabindex="-1"><code>deleteBtn</code> <a class="header-anchor" href="#deletebtn" aria-label="Permalink to &quot;`deleteBtn`&quot;">​</a></h3><p>是否启用删除按钮。</p><ul><li>类型：<code>boolean</code></li><li>必选：否</li><li>默认值：<code>true</code></li></ul><h3 id="deleteicon" tabindex="-1"><code>deleteIcon</code> <a class="header-anchor" href="#deleteicon" aria-label="Permalink to &quot;`deleteIcon`&quot;">​</a></h3><p>删除按钮图标。</p><ul><li>类型：<code>string</code></li><li>必选：否</li><li>默认值：<code>&#39;trash&#39;</code></li></ul><h3 id="deletetext" tabindex="-1"><code>deleteText</code> <a class="header-anchor" href="#deletetext" aria-label="Permalink to &quot;`deleteText`&quot;">​</a></h3><p>删除按钮文本。</p><ul><li>类型：<code>string</code></li><li>必选：否</li><li>默认值：<code>&#39;删除&#39;</code></li></ul><h3 id="deleteclass" tabindex="-1"><code>deleteClass</code> <a class="header-anchor" href="#deleteclass" aria-label="Permalink to &quot;`deleteClass`&quot;">​</a></h3><p>删除按钮类。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="tip" tabindex="-1"><code>tip</code> <a class="header-anchor" href="#tip" aria-label="Permalink to &quot;`tip`&quot;">​</a></h3><p>文件上传提示。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="btnclass" tabindex="-1"><code>btnClass</code> <a class="header-anchor" href="#btnclass" aria-label="Permalink to &quot;`btnClass`&quot;">​</a></h3><p>上传按钮类。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="onadd" tabindex="-1"><code>onAdd</code> <a class="header-anchor" href="#onadd" aria-label="Permalink to &quot;`onAdd`&quot;">​</a></h3><p>文件变更回调。</p><ul><li>类型：<code>(files: File[] | File) =&gt; void</code></li><li>必选：否</li></ul><h3 id="ondelete" tabindex="-1"><code>onDelete</code> <a class="header-anchor" href="#ondelete" aria-label="Permalink to &quot;`onDelete`&quot;">​</a></h3><p>删除文件回调。</p><ul><li>类型：<code>(file: File) =&gt; void</code></li><li>必选：否</li></ul><h3 id="onrename" tabindex="-1"><code>onRename</code> <a class="header-anchor" href="#onrename" aria-label="Permalink to &quot;`onRename`&quot;">​</a></h3><p>重命名文件回调。</p><ul><li>类型：<code>(newName: string, oldName: string) =&gt; void</code></li><li>必选：否</li></ul><h3 id="onsizechange" tabindex="-1"><code>onSizeChange</code> <a class="header-anchor" href="#onsizechange" aria-label="Permalink to &quot;`onSizeChange`&quot;">​</a></h3><p>文件大小变更回调。</p><ul><li>类型：<code>(size: number) =&gt; void</code></li><li>必选：否</li></ul><h3 id="limitcount" tabindex="-1"><code>limitCount</code> <a class="header-anchor" href="#limitcount" aria-label="Permalink to &quot;`limitCount`&quot;">​</a></h3><p>上传文件最大数量限制。</p><ul><li>类型：<code>number</code></li><li>必选：否</li></ul><h3 id="accept" tabindex="-1"><code>accept</code> <a class="header-anchor" href="#accept" aria-label="Permalink to &quot;`accept`&quot;">​</a></h3><p>上传文件类型。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="defaultfilelist" tabindex="-1"><code>defaultFileList</code> <a class="header-anchor" href="#defaultfilelist" aria-label="Permalink to &quot;`defaultFileList`&quot;">​</a></h3><p>默认文件列表。</p><ul><li>类型：<code>File[]</code></li><li>必选：否</li></ul><h3 id="limitsize" tabindex="-1"><code>limitSize</code> <a class="header-anchor" href="#limitsize" aria-label="Permalink to &quot;`limitSize`&quot;">​</a></h3><p>上传文件最大大小限制。</p><ul><li>类型：<code>${number}${&#39;B&#39; | &#39;KB&#39; | &#39;MB&#39; | &#39;GB&#39;}</code> | <code>false</code></li><li>必选：否</li></ul><h3 id="duplicatedhint" tabindex="-1"><code>duplicatedHint</code> <a class="header-anchor" href="#duplicatedhint" aria-label="Permalink to &quot;`duplicatedHint`&quot;">​</a></h3><p>重复文件提示。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="exceededsizehint" tabindex="-1"><code>exceededSizeHint</code> <a class="header-anchor" href="#exceededsizehint" aria-label="Permalink to &quot;`exceededSizeHint`&quot;">​</a></h3><p>超出大小限制提示。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="exceededcounthint" tabindex="-1"><code>exceededCountHint</code> <a class="header-anchor" href="#exceededcounthint" aria-label="Permalink to &quot;`exceededCountHint`&quot;">​</a></h3><p>超过数量限制提示。</p><ul><li>类型：<code>string</code></li><li>必选：否</li></ul><h3 id="totalcounttext" tabindex="-1"><code>totalCountText</code> <a class="header-anchor" href="#totalcounttext" aria-label="Permalink to &quot;`totalCountText`&quot;">​</a></h3><p>文件数量提示。</p><ul><li>类型：<code>string</code></li><li>必选：否</li><li>默认值：<code>&#39;共 &lt;span class=&quot;font-bold text-black&quot;&gt;%s&lt;/span&gt; 个文件 &lt;span class=&quot;font-bold text-black&quot;&gt;%s&lt;/span&gt; 个文件等待上传。&#39;</code></li></ul>',83);function q(C,k,P,B,T,j){const a=i("Example");return c(),p("div",null,[r,u,E,h,l(a,null,{default:s(()=>[m]),_:1}),y,l(a,null,{default:s(()=>[b]),_:1}),g,l(a,null,{default:s(()=>[_]),_:1}),x,l(a,null,{default:s(()=>[F]),_:1}),f])}const v=t(d,[["render",q]]);export{z as __pageData,v as default};