# 仪表盘

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"dashboard","summary":"以网格模块构建可拖动仪表盘，支持可见时加载、内容缓存和布局变化通知。","keywords":["仪表盘","Dashboard","工作台","模块","拖动布局"]}
```

## overview

用于仪表盘、工作台和可拖动的模块集合。以网格单位定义模块尺寸和位置，可按可见性串行加载模块 HTML，并通知布局变化。业务布局保存由应用处理；cache 保存的是加载内容。

## setup

workspace `@zui/dashboard` 导出原生 Dashboard、类型、注册和样式；`@zui/dashboard/react` 导出 Preact Dashboard、类型，也通过组件实现加载样式；`@zui/dashboard/css` 仅样式。内部 Block 未从组件入口导出，不能独立导入；BlockProps 类型仍公开。依赖 dnd/store/contextmenu/toolbar 与主题资源。browser 用包含相应依赖的 JS/CSS。

## vanilla

### vanilla-dashboard

```json
{"name":"Dashboard","summary":"在现有容器挂载模块仪表盘。"}
```

`new Dashboard(selector, options?:Partial<DashboardOptions>)`，selector 需匹配现有且有宽度的容器。render(options?,reset?) 更新配置；$ 为 Preact Dashboard；destroy 卸载，Dashboard.get(selector) 查实例。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

workspace：

```ts
import {Dashboard} from '@zui/dashboard';
const container = document.createElement('div');
container.style.width = '900px';
document.body.append(container);
const dashboard = new Dashboard(container, {cache: false, blocks: [
    {id: 'overview', title: '概览', size: [1, 3], content: '今日概况'},
    {id: 'tasks', title: '任务', size: [2, 3], content: '任务列表'},
]});
// 页面卸载时：dashboard.destroy(); container.remove();
```

## preact

### preact-dashboard

```json
{"name":"Dashboard","summary":"管理模块集合、异步加载和拖动布局的 Preact 类组件。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {Dashboard} from '@zui/dashboard/react';
const container = document.createElement('div');
document.body.append(container);
render(<Dashboard cache={false} blocks={[{id: 'overview', title: '概览', content: '正文'}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```
ref 为 Dashboard 实例。它直接继承 Preact Component，不继承 HElementProps；没有任意 className/attrs/children 的公开透传契约。布局变化在内部状态完成后通知。新的 blocks 数组引用会重置块集合与加载版本；原地修改数组不能当作更新协议。

| 实例方法 | 参数与返回 | 行为 |
| --- | --- | --- |
| getBlock(id) | string；BlockInfo或undefined | 查找块 |
| update(info,callback?) | Partial<BlockInfo>&{id:string}、()=>void；void | 合并已存在块；fetch 变化时重新标记加载 |
| delete(id) | string；void | 删除块并使该块旧请求失效 |
| add(blocks) | BlockSetting或数组；void | 追加初始化后的块 |
| reset(blockSettings) | BlockSetting[]；void | 重建全部块 |
| load(id,fetcher?) | string、BlockFetcher；void | 发起加载；不存在/正在加载/无来源时不执行 |
| loadNext() / tryLoadNext() | 无；void | 加载下一个可见待加载块 / 延后50ms尝试 |

load 不返回完成 Promise；通过 onLoad/onLoadFail 收到结果。卸载取消定时器、滚动监听和 Draggable，旧请求完成后按版本丢弃，不承诺取消实际网络传输。

## web-components

无。

## css

### css-dashboard

```json
{"name":"仪表盘模块与拖动状态类","summary":"配合计算布局定位块和绘制模块内容。","role":"js-component"}
```

`.dashboard` 根内写间距；`.dashboard-blocks` 为 relative；`.dashboard-block-cell` 是绝对定位单元；`.dashboard-block` 在格内缩进半个间距并纵向 flex；header/title/body/actions 为模块结构。body 内 panel 可填满块，panel-heading 是拖动把手区域。`.dashboard-drop-shadow` 表示放置预览，`.is-dragging` 隐藏原块，`.has-more-menu` 为菜单留出标题空间。这些位置和状态由组件维护，不适合只靠静态类模拟布局。

## css-variables

### css-dashboard-vars

```json
{"name":"--dashboard-gap","summary":"控制格子内部的模块间距。"}
```

`--dashboard-gap` 由 Dashboard 根内联设置为 gap 的像素值，默认16px，CSS inset 也有16px回退。推荐使用 gap 选项；`:root` 的 vars.css 无专有默认变量。

## javascript

无。

## types

### types-dashboard-options

```json
{"name":"DashboardOptions","summary":"仪表盘配置与事件的完整契约。"}
```

全部选项可省略：

| 参数 | 类型 | 默认值 / 说明 |
| --- | --- | --- |
| blocks | BlockSetting[] | []；模块定义 |
| grid | number | 3；列数规范为至少1的整数 |
| gap | number | 16px；非负有限值 |
| cellHeight | number | 64px；一行网格高度，至少1 |
| responsive | boolean | false；当前组件没有独立消费此字段的响应式分支，不作为断点自动重排承诺 |
| cache | boolean或string | true；true 使用 session store，字符串使用带分组前缀的持久 store，false 关闭 |
| blockFetch | BlockFetcher | 无；块默认加载来源 |
| blockDefaultSize | [number,number]或{width:number;height:number} | [1,3]；网格单位 |
| blockSizeMap | Record<string,BlockSizeSetting> | xs/sm/md/lg/xl 分别[1,3/4/5/6/8]；Wide 宽2、Long宽3，同高度 |
| blockMenu | ContextMenuOptions | 默认一个 Refresh 项，其 data.type='refresh' |
| blockClass | ClassNameLike | 无；各块追加类 |
| blockProps | Partial<BlockProps>或(block:BlockInfo)=>Partial<BlockProps> | 无；覆盖计算后的块属性 |
| emptyBlockContent | ComponentChildren或{html:string} | 无；空/加载占位 |
| onlyLoadVisible | boolean | true；只加载可见待加载块 |
| onClickMenu | (info:{item:MenuItemOptions;event:MouseEvent},block:BlockInfo)=>void | 无；菜单动作通知 |
| onLayoutChange | (layout:Record<string,{top:number;left:number;width:number;height:number}>)=>void | 无；网格位置变化通知，应用自行保存 |
| onLoad | (info:BlockInfo)=>void | 无；加载成功 |
| onLoadFail | (error:Error,info:BlockInfo)=>void | 无；加载失败 |

BlockFetcher=`FetcherSetting<string,[id:string,block:BlockSetting]>`；加载目标按 HTML 处理，并以 `{html}` 内容渲染。来源须是应用信任的内容；不把通用 JSON API 直接作为 HTML 源。
### types-dashboard-blocks

```json
{"name":"BlockSetting / BlockInfo / BlockProps / DashboardLayout","summary":"输入块、规范化状态、渲染属性与布局数据。"}
```

BlockSetting 必需 id:string|number；可选 rootClass/headerClass/bodyClass（ClassNameLike）、width/height/left/top（number，网格单位）、size（映射名、{width,height}或[width,height]）、fetch（BlockFetcher）、title（string）、toolbar（ToolbarOptions）、placeholder（ComponentChildren）、content（CustomContentType）、menu（ContextMenuOptions）。width/height 与 size 按初始化逻辑规范为有效格数。

BlockInfo 的 id 转成 string；width/height/left/top 为必需 number；needLoad/loading 为必需 boolean，visible 可选；其余 fetch/title/toolbar/rootClass/headerClass/bodyClass/placeholder/content/menu 保留。BlockContentSetting=CustomContentType。

BlockProps 必需 id:string、index:number、left/top/width/height（number|string）；可选 className/rootClass/headerClass/bodyClass、loading、content、title、toolbar、draggable，以及 onDragStart/onDragEnd（DragEvent=>void）、onMenuBtnClick（MouseEvent=>void）。它用于 blockProps 回调，不表示 Block 组件独立公开。

DashboardLayout={height:number;blocks:BlockInfo[]}。仅 `/react` 还导出 BlockLocation=[left,top,width,height]、BlocksMap=Map<string,BlockLocation>、BlockSizeSetting=[width,height]|{width,height}、DashboardState={dragging?:string;dropping?:BlockLocation;blocks:BlockInfo[]}。状态由组件拥有，不直接改写。

## recipes

### recipe-dashboard-refresh

```json
{"name":"刷新一个模块","summary":"通过视图实例发起指定块加载。"}
```

workspace，复用 dashboard：`dashboard.$?.load('overview')`。该块须配置 fetch 或默认 blockFetch；等待完成用 onLoad，不使用 await load() 作为完成信号。

## constraints

- 模块 id 应唯一稳定；数字 id 会转成字符串。
- cache 是内容缓存而非布局保存；onLayoutChange 的返回数据由应用持久化。
- 响应式布局不能仅依靠当前未消费的 responsive 字段；明确设置 grid/blocks。
- 外部 blockProps 最后合并，可覆盖计算尺寸和事件，覆盖时保持布局契约。

## references

- [入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dashboard/package.json>)、[Dashboard](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dashboard/src/components/dashboard.tsx>)、[模块实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dashboard/src/components/block.tsx>)、[类型](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dashboard/src/types/index.ts>)、[样式](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dashboard/src/style/dashboard.css>)
