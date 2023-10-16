import{_ as e,C as t,o as c,c as E,H as o,w as l,Q as s,k as n}from"./chunks/framework.723e1065.js";const r={mounted(){onZUIReady(()=>{new zui.Toolbar("#toolbarExp",{items:[{type:"dropdown",icon:"icon-ellipsis-h",caret:!1,hint:"更多",dropdown:{items:[{text:"取消置顶"},{text:"开启免打扰"},{text:"取消订阅"}]}},{icon:"icon-phone",hint:"发起会议",className:"text-secondary"},{icon:"icon-chat-dot",hint:"消息记录",className:"text-warning"},{icon:"icon-step-forward",hint:"打开侧边栏",className:"text-important"}],onClickItem:p=>{console.log("> toolbar.onClickItem",p)}}),new zui.Toolbar("#toolbarExp2",{items:[{text:"全部"},{text:"未关闭",active:!0,className:"primary-pale font-bold"},{text:"未开始"},{text:"进行中"},{text:"已挂起"},{text:"已关闭"},{text:"搜索",icon:"icon-search"}]}),new zui.Toolbar("#editToolbar",{items:[{type:"dropdown",icon:"icon-header",caret:!0,hint:"段落",dropdown:{items:[{text:"标题1"},{text:"标题2"},{text:"标题3"},{text:"正文"}]}},{type:"dropdown",icon:"icon-font",caret:!0,hint:"字体",dropdown:{items:[{text:"宋体"},{text:"新宋体"},{text:"仿宋体"},{text:"黑体"}]}},{icon:"icon-bold",hint:"粗体"},{icon:"icon-italic",hint:"斜体"},{icon:"icon-underline",hint:"下划线"},{icon:"icon-strikethrough",hint:"消除线"},{icon:"icon-eraser",hint:"清楚格式"},{icon:"icon-align-justify",hint:"全屏"},{icon:"icon-align-left",hint:"左对齐"},{icon:"icon-list",hint:"项目符号"},{icon:"icon-smile",hint:"插入表情"},{icon:"icon-picture",hint:"图片"},{icon:"icon-link",hint:"超级链接"},{icon:"icon-reply",hint:"后退"},{icon:"icon-share-alt",hint:"前进"},{icon:"icon-resize",hint:"全屏"}]}),new zui.Toolbar("#dividerToolbar",{items:[{icon:"icon-smile",hint:"表情"},{icon:"icon-picture",hint:"图片"},{icon:"icon-cut",hint:"截取屏幕"},{type:"divider"},{icon:"icon-folder-close-alt",hint:"文件"},{icon:"icon-code",hint:"代码"},{icon:"icon-question-sign",hint:"技巧"}]}),new zui.Toolbar("#spaceToolbar1",{items:[{icon:"icon-ellipsis-v",hint:"菜单"},{type:"space",space:10},{icon:"icon-check-plus",hint:"添加"}]}),new zui.Toolbar("#disabledToolbar",{btnProps:{className:"text-primary"},items:[{icon:"icon-smile",hint:"表情"},{icon:"icon-picture",hint:"图片"},{icon:"icon-code",hint:"代码",disabled:!0},{icon:"icon-question-sign",hint:"技巧"}],onClickItem:p=>{console.log("> disabledToolbar.onClickItem",p)}})})}},w=JSON.parse('{"title":"工具栏生成器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/toolbar/js.md","filePath":"lib/components/toolbar/js.md","lastUpdated":null}'),i=s('<h1 id="工具栏生成器" tabindex="-1">工具栏生成器 <a class="header-anchor" href="#工具栏生成器" aria-label="Permalink to &quot;工具栏生成器&quot;">​</a></h1><p>基于操作菜单 <a href="/zui/3/lib/components/action-menu/index.html">操作菜单</a> 实现的组件，与特定的功能关联起来使用，跟导航类似，但比导航更轻量更灵活。</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2>',3),y=n("div",{id:"toolbarExp"},null,-1),d=n("div",{id:"toolbarExp2"},null,-1),h=s(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toolbarExp&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toolbarExp2&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#toolbarExp&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;dropdown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;icon-ellipsis-h&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            caret: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            hint: </span><span style="color:#9ECBFF;">&#39;更多&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dropdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;取消置顶&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;开启免打扰&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;取消订阅&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-phone&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;发起会议&#39;</span><span style="color:#E1E4E8;">, className: </span><span style="color:#9ECBFF;">&#39;text-secondary&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-chat-dot&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;消息记录&#39;</span><span style="color:#E1E4E8;">, className: </span><span style="color:#9ECBFF;">&#39;text-warning&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-step-forward&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;打开侧边栏&#39;</span><span style="color:#E1E4E8;">, className: </span><span style="color:#9ECBFF;">&#39;text-important&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onClickItem</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&gt; toolbar.onClickItem&#39;</span><span style="color:#E1E4E8;">, info);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#toolbarExp2&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;全部&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;未关闭&#39;</span><span style="color:#E1E4E8;">, active: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, className: </span><span style="color:#9ECBFF;">&#39;primary-pale font-bold&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;未开始&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;进行中&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;已挂起&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;已关闭&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;搜索&#39;</span><span style="color:#E1E4E8;">, icon: </span><span style="color:#9ECBFF;">&#39;icon-search&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="结合编辑器使用" tabindex="-1">结合编辑器使用 <a class="header-anchor" href="#结合编辑器使用" aria-label="Permalink to &quot;结合编辑器使用&quot;">​</a></h2>`,2),F=n("div",{id:"editToolbar"},null,-1),u=s(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editToolbar&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#editToolbar&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;dropdown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;icon-header&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            caret: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            hint: </span><span style="color:#9ECBFF;">&#39;段落&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dropdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;标题1&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;标题2&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;标题3&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;正文&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;dropdown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            icon: </span><span style="color:#9ECBFF;">&#39;icon-font&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            caret: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            hint: </span><span style="color:#9ECBFF;">&#39;字体&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            dropdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;宋体&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;新宋体&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;仿宋体&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {text: </span><span style="color:#9ECBFF;">&#39;黑体&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-bold&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;粗体&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-italic&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;斜体&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-underline&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;下划线&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-strikethrough&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;消除线&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-eraser&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;清楚格式&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-align-justify&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;全屏&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-align-left&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;左对齐&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-list&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;项目符号&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-smile&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;插入表情&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-picture&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;图片&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-link&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;超级链接&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-reply&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;后退&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-share-alt&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;前进&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-resize&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;全屏&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="展示分割线" tabindex="-1">展示分割线 <a class="header-anchor" href="#展示分割线" aria-label="Permalink to &quot;展示分割线&quot;">​</a></h2><p>工具栏展示分割线。</p>`,3),b=n("div",{id:"dividerToolbar"},null,-1),m=s(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dividerToolbar&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#dividerToolbar&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-smile&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;表情&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-picture&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;图片&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-cut&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;截取屏幕&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {type: </span><span style="color:#9ECBFF;">&#39;divider&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-folder-close-alt&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;文件&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-code&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;代码&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-question-sign&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;技巧&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="展示间距" tabindex="-1">展示间距 <a class="header-anchor" href="#展示间距" aria-label="Permalink to &quot;展示间距&quot;">​</a></h2><p>工具栏添加间距展示想要的布局。</p>`,3),B=n("div",{id:"spaceToolbar1"},null,-1),C=s(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;spaceToolbar1&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#spaceToolbar1&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-ellipsis-v&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;菜单&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {type: </span><span style="color:#9ECBFF;">&#39;space&#39;</span><span style="color:#E1E4E8;">, space: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-check-plus&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;添加&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="禁用" tabindex="-1">禁用 <a class="header-anchor" href="#禁用" aria-label="Permalink to &quot;禁用&quot;">​</a></h2>`,2),g=n("div",{id:"disabledToolbar"},null,-1),_=s('<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#disabledToolbar&#39;</span><span style="color:#E1E4E8;">, {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    btnProps: {btnType: </span><span style="color:#9ECBFF;">&#39;primary&#39;</span><span style="color:#E1E4E8;">},</span></span>\n<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>\n<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-smile&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;表情&#39;</span><span style="color:#E1E4E8;">},</span></span>\n<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-picture&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;图片&#39;</span><span style="color:#E1E4E8;">},</span></span>\n<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-code&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;代码&#39;</span><span style="color:#E1E4E8;">, disabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">},</span></span>\n<span class="line"><span style="color:#E1E4E8;">        {icon: </span><span style="color:#9ECBFF;">&#39;icon-question-sign&#39;</span><span style="color:#E1E4E8;">, hint: </span><span style="color:#9ECBFF;">&#39;技巧&#39;</span><span style="color:#E1E4E8;">},</span></span>\n<span class="line"><span style="color:#E1E4E8;">    ],</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onClickItem</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">info</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&gt; disabledToolbar.onClickItem&#39;</span><span style="color:#E1E4E8;">, info);</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><h3 id="通过-npm" tabindex="-1">通过 npm <a class="header-anchor" href="#通过-npm" aria-label="Permalink to &quot;通过 npm&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {Toolbar} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;zui/toolbar&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">toolbar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(element, options);</span></span></code></pre></div><h3 id="通过全局对象-zui" tabindex="-1">通过全局对象 <code>zui</code> <a class="header-anchor" href="#通过全局对象-zui" aria-label="Permalink to &quot;通过全局对象 `zui`&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">toolbar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Toolbar</span><span style="color:#E1E4E8;">(element, options);</span></span></code></pre></div><h3 id="使用-react-组件" tabindex="-1">使用 React 组件 <a class="header-anchor" href="#使用-react-组件" aria-label="Permalink to &quot;使用 React 组件&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {render} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;react&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {Toolbar} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;zui/toolbar/main-react&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(element, &lt;</span><span style="color:#79B8FF;">Toolbar</span><span style="color:#E1E4E8;"> {</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">options} /&gt;);</span></span></code></pre></div><h3 id="使用-jquery-扩展" tabindex="-1">使用 jQuery 扩展 <a class="header-anchor" href="#使用-jquery-扩展" aria-label="Permalink to &quot;使用 jQuery 扩展&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(element).</span><span style="color:#B392F0;">toolbar</span><span style="color:#E1E4E8;">(options);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">toolbar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(element).</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;zui.toolbar&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><p>在 <a href="/zui/3/lib/components/action-menu/index.html#选项">操作菜单</a> 选项基础上添加新的参数选项。</p><h3 id="wrap" tabindex="-1"><code>wrap</code> <a class="header-anchor" href="#wrap" aria-label="Permalink to &quot;`wrap`&quot;">​</a></h3><p>限制工具栏按钮过多超出时是否换行。</p><ul><li>类型：<code>boolean</code>；</li><li>必选：否；</li><li>默认值：<code>false</code>。</li></ul><h3 id="gap" tabindex="-1"><code>gap</code> <a class="header-anchor" href="#gap" aria-label="Permalink to &quot;`gap`&quot;">​</a></h3><p>自定义工具栏按钮的间距，与 <code>.toolbar</code> 同级生成 <a href="/zui/3/utilities/flex/utilities/gap.html"><code>.gap-*</code></a> 的工具类控制按钮间距。</p><ul><li>类型：<code>number | string</code></li><li>必选：否</li></ul><h3 id="items" tabindex="-1"><code>items</code> <a class="header-anchor" href="#items" aria-label="Permalink to &quot;`items`&quot;">​</a></h3><p>继承了 <a href="/zui/3/lib/components/action-menu/index.html#选项">操作菜单</a> 选项和按钮选项，同时添加了其他选项。</p><ul><li>类型：<code><a href="#toolbaritemoptions">ToolbarItemOptions</a>[] </code>；</li><li>必选：是。</li></ul><h3 id="btnprops" tabindex="-1"><code>btnProps</code> <a class="header-anchor" href="#btnprops" aria-label="Permalink to &quot;`btnProps`&quot;">​</a></h3><p>继承按钮组件的属性， 统一处理工具栏按钮属性外观等。</p><ul><li>类型：<code><a href="/zui/3/lib/components/button/js.html#选项">ButtonProps</a></code>；</li><li>必选：否。</li></ul><h3 id="itemrender" tabindex="-1"><code>itemRender</code> <a class="header-anchor" href="#itemrender" aria-label="Permalink to &quot;`itemRender`&quot;">​</a></h3><p>指定一个回调函数用于对组件渲染进行自定义。</p><p><strong>参数</strong>：<code>items</code> 选项的单个配置；</p><p><strong>返回值</strong>：<code>items</code> 选项的单个配置。</p><h3 id="beforerender" tabindex="-1"><code>beforeRender</code> <a class="header-anchor" href="#beforerender" aria-label="Permalink to &quot;`beforeRender`&quot;">​</a></h3><p>指定一个回调函数在渲染之前调用，可重新配置组件选项。</p><p><strong>参数</strong>：用户为按钮组组件件设置的 <code>options</code>；</p><p><strong>返回值</strong>：组件选项数据。</p><h3 id="afterrender" tabindex="-1"><code>afterRender</code> <a class="header-anchor" href="#afterrender" aria-label="Permalink to &quot;`afterRender`&quot;">​</a></h3><p>指定一个回调函数在渲染之后调用。</p><p><strong>参数：</strong></p><ul><li><code>firstRender</code>：判断是否第一次渲染；</li><li><code>menu</code>：组件信息。</li></ul><h3 id="beforedestroy" tabindex="-1"><code>beforeDestroy</code> <a class="header-anchor" href="#beforedestroy" aria-label="Permalink to &quot;`beforeDestroy`&quot;">​</a></h3><p>指定一个回调函数在组件销毁之前调用，无参数。</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="toolbaritemoptions" tabindex="-1"><code>ToolbarItemOptions</code> <a class="header-anchor" href="#toolbaritemoptions" aria-label="Permalink to &quot;`ToolbarItemOptions`&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ToolbarItemOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ToolbarItemProps</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ToolbarDropdownProps</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ToolbarBtnGroupProps</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ToolbarDividerProps</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ToolbarSpaceProps</span><span style="color:#E1E4E8;">;</span></span></code></pre></div><h4 id="toolbaritemprops" tabindex="-1"><code>ToolbarItemProps</code> <a class="header-anchor" href="#toolbaritemprops" aria-label="Permalink to &quot;`ToolbarItemProps`&quot;">​</a></h4><p><strong>选项：</strong></p><p>继承了操作菜单的 <a href="/zui/3/lib/components/action-menu/index.html#选项">ActionItemProps</a> 选项和按钮的 <a href="/zui/3/lib/components/button/js.html#选项">ButtonProps</a> ，同时添加了其他选项 <code>btnType</code>，用来设置按钮外观类型。</p><h5 id="btntype" tabindex="-1"><code>btnType</code> <a class="header-anchor" href="#btntype" aria-label="Permalink to &quot;`btnType`&quot;">​</a></h5><p>设置工具栏单个按钮的外观类型。</p><ul><li>类型：<code>string</code>；</li><li>必选：否。</li></ul><h4 id="toolbardropdownprops" tabindex="-1"><code>ToolbarDropdownProps</code> <a class="header-anchor" href="#toolbardropdownprops" aria-label="Permalink to &quot;`ToolbarDropdownProps`&quot;">​</a></h4><p><strong>选项：</strong></p><p>在原有属性基础上固定 <code>type</code> 属性，并继承了下拉菜单的 <a href="/zui/3/lib/components/dropdown/index.html">DropdownButtonOptions</a> 选项，同时添加了其他选项。</p><h5 id="type" tabindex="-1"><code>type</code> <a class="header-anchor" href="#type" aria-label="Permalink to &quot;`type`&quot;">​</a></h5><ul><li>类型：<code>string</code>；</li><li>属性值：<code>dropdown</code>；</li><li>必选：是。</li></ul><h5 id="children" tabindex="-1"><code>children</code> <a class="header-anchor" href="#children" aria-label="Permalink to &quot;`children`&quot;">​</a></h5><ul><li>类型：<code><a href="/zui/3/lib/components/dropdown/index.html">DropdownButtonOptions</a></code>；</li><li>必选：是。</li></ul><h4 id="toolbarbtngroupprops" tabindex="-1"><code>ToolbarBtnGroupProps</code> <a class="header-anchor" href="#toolbarbtngroupprops" aria-label="Permalink to &quot;`ToolbarBtnGroupProps`&quot;">​</a></h4><p><strong>选项：</strong></p><p>在原有属性基础上固定 <code>type</code> 属性，并继承了操作菜单的 <a href="/zui/3/lib/components/action-menu/index.html#选项">ActionBasicProps</a> 选项和按钮组的 <a href="/zui/3/lib/components/btn-group/js.html#选项">BtnGroupOptions</a>选项，同时添加了其他选项。</p><h5 id="type-1" tabindex="-1"><code>type</code> <a class="header-anchor" href="#type-1" aria-label="Permalink to &quot;`type`&quot;">​</a></h5><ul><li>类型：<code>string</code>；</li><li>属性值：<code>btn-group</code>；</li><li>必选：是。</li></ul><h4 id="toolbardividerprops" tabindex="-1"><code>ToolbarDividerProps</code> <a class="header-anchor" href="#toolbardividerprops" aria-label="Permalink to &quot;`ToolbarDividerProps`&quot;">​</a></h4><p><strong>选项：</strong></p><p>继承了工具栏的 <a href="/zui/3/lib/components/action-menu/index.html#选项">ActionDividerProps</a> 选项。</p><h4 id="toolbarspaceprops" tabindex="-1"><code>ToolbarSpaceProps</code> <a class="header-anchor" href="#toolbarspaceprops" aria-label="Permalink to &quot;`ToolbarSpaceProps`&quot;">​</a></h4><p><strong>选项：</strong></p><p>继承了工具栏的 <a href="/zui/3/lib/components/action-menu/index.html#选项">ActionSpaceProps</a> 选项。</p><h5 id="type-2" tabindex="-1"><code>type</code> <a class="header-anchor" href="#type-2" aria-label="Permalink to &quot;`type`&quot;">​</a></h5><ul><li>类型：<code>string</code>；</li><li>属性值：<code>space</code>；</li><li>必选：是。</li></ul><h5 id="space" tabindex="-1"><code>space</code> <a class="header-anchor" href="#space" aria-label="Permalink to &quot;`space`&quot;">​</a></h5><ul><li>类型：<code>number | [leading: number, trailing: number]</code>；</li><li>必选：否。</li></ul><h5 id="flex" tabindex="-1"><code>flex</code> <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;`flex`&quot;">​</a></h5><ul><li>类型：<code>number | &#39;auto&#39; | &#39;none&#39;</code>；</li><li>必选：否。</li></ul>',71);function x(p,f,T,q,P,k){const a=t("Example");return c(),E("div",null,[i,o(a,{class:"gap-2 col"},{default:l(()=>[y,d]),_:1}),h,o(a,null,{default:l(()=>[F]),_:1}),u,o(a,null,{default:l(()=>[b]),_:1}),m,o(a,null,{default:l(()=>[B]),_:1}),C,o(a,{class:"gap-2 col"},{default:l(()=>[g]),_:1}),_])}const D=e(r,[["render",x]]);export{w as __pageData,D as default};