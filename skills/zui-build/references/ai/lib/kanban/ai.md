# 看板

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"kanban","summary":"提供按列泳道组织的单看板、多看板和分区，支持拖放、选择、异步加载及连接线。","keywords":["看板","Kanban","泳道","拖放","连接线","任务卡片"]}
```

## overview

在列和泳道中显示业务卡片，支持拖放、选择、异步数据、连接线、多个看板及可折叠分区。业务持久化由 onDrop/onAddLink/onDeleteLink 等回调接入；组件内部更新不代表已保存服务端。

## setup

workspace `@zui/kanban` 导出原生 Kanban、KanbanList、公开类型、注册和样式；`@zui/kanban/react` 导出 Preact Kanban、KanbanList、KanbanRegion 与类型；`@zui/kanban/css` 为样式。原生 KanbanRegion 文件存在但 vanilla/index 未导出，不是主入口可用类。依赖 cards/list/dnd/toolbar/scrollbar 等和基础主题，按构建实际加载。browser 使用包含 kanban 及依赖的 JS/CSS。JSX 使用 Preact。

## vanilla

### vanilla-kanban

```json
{"name":"Kanban / KanbanList","summary":"创建单看板或多个看板容器。"}
```

`new Kanban(selector, options?:Partial<KanbanProps>)`、`new KanbanList(selector, options?:Partial<KanbanListProps>)`，selector 为已挂载容器；这两个包装默认 replace=true，会替换宿主，外部不能继续管理其渲染子树。render(options?,reset?) 更新配置；$ 为视图实例；destroy 卸载；类的 get(selector) 查实例。共有契约见 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

workspace：

```ts
import {Kanban} from '@zui/kanban';
const container = document.createElement('div');
document.body.append(container);
const kanban = new Kanban(container, {draggable: false, data: {
    lanes: [{name: 'team', title: '研发'}],
    cols: [{name: 'todo', title: '待办'}, {name: 'done', title: '完成'}],
    items: [{id: 'task-1', lane: 'team', col: 'todo', title: '完善文档'}],
}});
// 页面卸载时：kanban.destroy();
```

KanbanList 包装另有 `update(items: KanbanProps|KanbanRegionProps|对应数组, reset?:boolean):void`：默认按 key 合并，deleted 标记移除；reset=true 直接替换列表。不要与其 `$` 视图的方法混淆。

## preact

### preact-kanban

```json
{"name":"Kanban","summary":"管理单看板的数据、选择、拖放和连接线。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {Kanban} from '@zui/kanban/react';
import '@zui/kanban/css';
const container = document.createElement('div');
document.body.append(container);
render(<Kanban draggable={false} data={{lanes: [{name: 'team', title: '研发'}], cols: [{name: 'todo', title: '待办'}], items: [{id: 'one', lane: 'team', col: 'todo', title: '任务'}]}} />, container);
// 页面卸载时：render(null, container); container.remove();
```
ref 为类实例。原生包装通过 $ 使用同一方法。根参数继承 HElementProps，选择由 defaultSelected 初始化后在内部维护，更新用 select；data 与内部 changes 合并，不直接变异输入对象。

| 成员 | 参数与返回 | 行为 |
| --- | --- | --- |
| data / itemKey | 只读 KanbanDataMap / string | 当前计算数据 / 标识字段 |
| getCol(name) / getLane(name) / getItem(key) | string或unknown；对应对象或undefined | 查询列、泳道、卡片 |
| update(changes) | Partial<KanbanDataset>；Promise<State> | 按标识合并增量 |
| addItem/updateItem(item,lane?,col?) | 单项或数组、泳道名、列名；Promise<State> | 新增或合并卡片，可指定位置 |
| deleteItem(key) | string或string[]；Promise<State> | 设置 deleted 标记 |
| addLane/updateLane(lane) / addCol/updateCol(col) | 对应对象或数组；Promise<State> | 新增或更新结构 |
| deleteLane(name) / deleteCol(name) | 名称或名称数组；Promise<State> | 删除结构 |
| updateLink(link,change?) / addLink(link) / deleteLink(link) | 单连接或数组，change 为 Partial<KanbanLinkOptions>；Promise<State> | 按端点识别连接并合并/删除 |
| select(keys,toggle?) | string或string[]、boolean；Promise<State> | 默认替换选择，true 逐项切换 |
| updateBackgroundPattern(pattern) | ''或'vertical'或'horizontal'；Promise<State> | 更新背景模式，非法值回退空串 |
| createSnap() | 无；KanbanSnap | 复制当前数据，返回 restore() 恢复函数 |
| load() / tryLoad() | 无；void | 发起异步数据读取 / 必要时读取，完成用 onLoad/onLoadFail |
| updateLayout() | 无；void | 下一动画帧重测容器宽度 |

选择变化调用 onSelect，并在根触发 `kanbanItemSelected`，数据含 kanban、selected、oldSelected；悬停变化触发 `kanbanItemHover`，数据含 kanban、hover（卡片 key 或 undefined）。卸载清理拖放、ResizeObserver、计时器与全局监听；新加载或销毁后旧结果按版本丢弃。
### preact-kanban-list

```json
{"name":"KanbanList","summary":"组合看板或分区，并管理平移与跨看板连接。"}
```

从 /react 导入，props 见 KanbanListProps。workspace 最小用法沿用上方 Preact 容器：`<KanbanList items={[{key:'board', data:{lanes:[{name:'team'}],cols:[{name:'todo'}],items:[]}}]} />`，需导入 KanbanList。ref 为类实例；`getKanban(key):Kanban|KanbanRegion|null` 可查直接或分区内部实例；`updateKanban(key,data):Promise<unknown>` 更新，找不到时拒绝 Promise；`updateLayout():void` 重测；`updateBackgroundPattern(pattern):Promise<unknown[]>` 广播；updateLink/addLink/deleteLink 参数同单看板，返回状态更新 Promise。resetState 会重置子组件。
### preact-kanban-region

```json
{"name":"KanbanRegion","summary":"带标题和折叠状态的看板分区。"}
```

仅 /react 公开 Preact 形态。workspace 用法为 `<KanbanRegion heading={{text:'研发'}} items={[{key:'board',data:{lanes:[{name:'team'}],cols:[{name:'todo'}],items:[]}}]} />`，复用上方导入/容器/样式和清理步骤。collapsed 是初始状态，后续通过 ref.toggle(expanded?) 指定/反转展开（void）；update(partialState) 合并分区；getKanban(key) 查询子看板或 undefined；updateBackgroundPattern 返回 Promise<unknown[]>，折叠时保留请求待展开后应用。

## web-components

无。

## css

### css-kanban-layout

```json
{"name":"看板、泳道、列和卡片部件","summary":"配合 Kanban 计算的数据与布局。","role":"js-component"}
```

`.kanban` 根、`.kanban-header`/`.kanban-header-cols`/`.kanban-header-col` 表头，`.kanban-header-sub-cols` 子列，`.kanban-body` 内容，`.kanban-lane`/`.kanban-lane-name`/`.kanban-lane-title`/`.kanban-lane-cols` 泳道，`.kanban-lane-col` 单元格，`.kanban-items` 卡片集合，`.kanban-item` 卡片，`.kanban-col-content` 附加内容，`.kanban-lane-actions`/`.kanban-header-col-actions` 动作区域。卡片复用 cards。`.kanban-sticky` 配合头部与泳道名称固定，is-pinned/has-sub-cols/has-subs/is-first/is-auto-height 由布局维护。
### css-kanban-interaction

```json
{"name":"拖放、分区与连接线部件","summary":"配合交互控制的状态与覆盖层。","role":"js-component"}
```

`.kanban-list` 为可平移容器，`.kanban-region`/`.kanban-heading` 为分区；is-moving/has-dragging/is-dragging/is-dropping 是内部交互状态。`.kanban-links` 覆盖连接层；kanban-link/kanban-link-text/kanban-link-start-point/kanban-link-delete-btn 是线与标签、端点和删除按钮；kanban-link-editor/from/to/point 与 is-top/right/bottom/left/is-adding-link 是编辑层。通过 props/方法控制，不手动修改 DOM 状态类。

## css-variables

### css-kanban-vars

```json
{"name":"看板变量","summary":"默认在 .kanban 和 .kanban-list 节点声明，props 可覆盖为内联值。"}
```

| 变量 | CSS默认表达式 | 含义及推荐覆盖 |
| --- | --- | --- |
| --kanban-lane-name-width | 25px | 泳道名称宽，优先 laneNameWidth |
| --kanban-col-width | 280px | 列宽；JS colWidth 默认200，最终布局会覆盖 |
| --kanban-cols-gap / --kanban-lanes-gap | 10px / 10px | 列/泳道间距，优先 colsGap/lanesGap |
| --kanban-radius / --kanban-card-radius | 5px / 5px | 容器/卡片圆角，在目标根覆盖 |
| --kanban-header-gap / --kanban-header-height | 3px / 36px | 标题间距/高度，在目标根覆盖 |
| --kanban-lane-height | auto | 泳道高度，优先 laneHeight |
| --kanban-lane-color | var(--color-primary-500) | 泳道主题色 |
| --kanban-link-color | var(--color-secondary-600) | 连线颜色 |
| --kanban-col-bg | rgba(var(--color-inverse-rgb), .05) | 列背景 |

根节点声明会遮盖祖先同名值，主题覆盖针对实际 .kanban/.kanban-list；不要一律只写 :root。

## javascript

无公开独立 helper；内部 normalizeData/mergeData/link helpers 未从包入口导出。视图方法见 Preact 条目。

## types

### types-kanban-data

```json
{"name":"KanbanDataset / KanbanData / KanbanItem / KanbanDataMap","summary":"看板的数据模型与查询结构。"}
```

KanbanLaneName 和 KanbanColName 均为 string。

```ts
interface KanbanDataset {
    lanes: KanbanLaneOptions[];
    cols: KanbanColOptions[];
    items: KanbanItemsMap | KanbanItem[];
    links?: KanbanLinkOptions[];
}
type KanbanItemsMap = Record<string, Record<string, KanbanItem[]>>;
```

KanbanData 与 Dataset 相同但 items 必须为规范化 KanbanItem[]。KanbanItem 继承 [Item](../common-list/ai.md#types-item)，增加可选 lane/col:string、order:number、deleted/selected:boolean；id 默认为标识字段，显示可使用 CardProps 的 title/content/actions 等字段。KanbanItemInfo={item:KanbanItem;lane:string;col:string}。KanbanDataMap 在 Dataset 上将 items 设为嵌套映射，增加 map:Map<string,KanbanItem>、colMap:Map<string,KanbanColOptions>、links 必需数组和可选 hasSubCols。

KanbanDataFetcher=FetcherSetting<KanbanDataset>；KanbanDataSetting=KanbanDataset|KanbanDataFetcher。FetcherSetting 见 core。
### types-kanban-props

```json
{"name":"KanbanProps","summary":"单看板完整配置，继承 HElementProps。"}
```

data:KanbanDataSetting 为必填，其他字段可选；[HElementProps](../core/ai.md#types-helement-props) 保留。

| 字段 | 类型 | 默认值 / 行为 |
| --- | --- | --- |
| laneProps / colProps / itemProps | 对应 Partial<Options/Item> | 无；共享属性 |
| itemKey / sortLane | string / boolean | 'id' / 无；标识字段、泳道排序 |
| getCol / getLane | (对象)=>同类对象或false | 无；转换或过滤 |
| getLaneCol | (lane,col)=>KanbanColOptions或void | 无；单元格列配置 |
| getItem | (info:KanbanItemInfo&{laneInfo;colInfo})=>KanbanItem或false | 无；转换卡片 |
| itemRender | (info:KanbanItemInfo)=>CustomContentType | 无；自定义卡片内容 |
| laneNameWidth | number | 25px，0 隐藏名称 |
| colWidth | number或'auto'或(col)=>number或'auto' | 200px |
| minColWidth / maxColWidth | number | 150 / 600px |
| laneHeight / minLaneHeight / maxLaneHeight | SizeSetting；laneHeight 也可(lane)=>SizeSetting | 无；泳道尺寸限制 |
| itemCountPerRow | number | 无；单元格每行卡片数 |
| itemGap / lanesGap | SizeSetting | 无；由样式/条目布局处理 |
| colsGap | number | 10px |
| responsive | boolean或string选择器 | true；按容器重测宽度 |
| sticky | boolean | true；固定头部/泳道名称 |
| selectable | boolean | 无；启用卡片选择 |
| defaultSelected | string或string[] | 无；初始选择，推荐数组以保持状态类型一致 |
| onClickItem | (event:MouseEvent,item:KanbanItemInfo)=>false或void | false 可阻止默认选择路径 |
| onSelect | (newSelected:string[],oldSelected:string[])=>void | 无；选择更新后 |
| backgroundPattern | ''或'vertical'或'horizontal' | '' |
| colBgColor / rowBgColor | string | '--kanban-col-bg' / '--kanban-lane-color' |
| onLoad | (data:KanbanData)=>void或KanbanData | 无；可替换加载结果 |
| onLoadFail | CustomContentType或(error:Error)=>CustomContentType或void | 默认错误字符串 |
| linkProps / getLink | Partial<KanbanLinkOptions> / (link)=>link或false | 无；默认连接配置与过滤 |
| editLinks / showLinkOnHover / showLinkOnSelected | boolean | 无；连接编辑及按交互显示 |
| onAddLink / onDeleteLink | (link)=>void或false或Promise<void或false> | false 取消；等待回调后更新 |
| draggable | boolean或DraggableOptions | true |
| dragTypes | KanbanDnDType或数组 | ['item','newItem'] |
| dropRules | Record<列名或'泳道:列',boolean或目标名数组> | 无；限制目标 |
| canDrop | (dragInfo:KanbanElementInfo,dropInfo:KanbanElementInfo)=>boolean或void | 无；决定可放置 |
| onDragStart | (info:KanbanDragInfo)=>void或boolean | 无；传递拖动开始判断 |
| onDrop | (changes:Partial<KanbanData>,info:KanbanDropInfo,restore:()=>void)=>void或false | 提供回调时，返回 false 阻止自动提交本地变化；restore 可恢复快照 |
| onDropNewItem | (info:KanbanDropInfo)=>KanbanItem或undefined | 无；把外部拖入转换为新卡片 |
| beforeRender / afterRender / beforeDestroy | (options:KanbanProps)=>void / (firstRender:boolean)=>void / ()=>void | 生命周期通知 |

getItem 的 laneInfo 为 KanbanLaneOptions，colInfo 为 KanbanColOptions。load 只发起请求，完成由回调通知。
### types-kanban-structure

```json
{"name":"KanbanColOptions / KanbanLaneOptions","summary":"列和泳道的完整选项。"}
```

二者继承 HElementProps，name:string 必填。列可选 parentName:string、subCols:KanbanColOptions[]、deleted:boolean、width:SizeSetting、minWidth/maxWidth:number、itemCountPerRow:number、itemGap/gapLeft/gapRight:SizeSetting、color/backgroundColor:string、order:number、prefix/title/subtitle/content:CustomContentType、prefixClass/titleClass/subtitleClass/contentClass:ClassNameLike、titleAlign:'left'|'center'、icon/trailingIcon:IconType、actions:ToolbarSetting<[KanbanColOptions]>。除父级共享配置外未提供的字段无自有默认，尺寸由看板布局回退。

泳道可选 deleted:boolean、color:string、order:number、title:CustomContentType、titleClass:ClassNameLike、actions:ToolbarSetting<[KanbanLaneProps]>、height/minHeight/maxHeight/gapTop/gapBottom:SizeSetting。均可被共享 laneProps 与 getLane 调整。
### types-kanban-links

```json
{"name":"KanbanLinkOptions 与拖放类型","summary":"连接端点、外观及交互回调载荷。"}
```

KanbanLinkOptions 继承 Item，from/to:string 必填；可选 fromKanban/toKanban:string（跨看板标识）、fromSide/toSide:KanbanLinkSide、fromPoint/toPoint:KanbanLinkPointType、color/textColor:string、lineStyle:KanbanLinkStyle、weight/textSize:number、shape:KanbanLinkShape、text:string、deleted:boolean。

KanbanLinkSide=''|'top'|'right'|'left'|'bottom'；KanbanLinkPointType='none'|'arrow'|'dot'|'diamond'|'square'；KanbanLinkShape='straight'|'fold'|'curve'；KanbanLinkStyle='solid'|'dashed'|'dotted'；KanbanBackgroundPattern=''|'vertical'|'horizontal'。

KanbanDnDType='item'|'lane'|'col'|'newItem'；KanbanDropSide='before'|'after'|'inside'。KanbanElementInfo=Partial<KanbanItemInfo>&{type:KanbanDnDType;element:HTMLElement;key?:string}；KanbanDragInfo={event:DragEvent;drag:KanbanElementInfo}；KanbanDropInfo={event:Event;drag:KanbanElementInfo;drop:KanbanElementInfo;side:KanbanDropSide;data?:unknown}。
### types-kanban-containers

```json
{"name":"KanbanListProps / KanbanRegionProps","summary":"多看板容器与分区配置。"}
```

两者继承 HElementProps。KanbanListProps 全部专有字段可选：items:(KanbanProps|KanbanRegionProps)[]；kanbanProps:Partial<KanbanRegionProps>|((item,index)=>KanbanProps|KanbanRegionProps)；moveable:boolean|MoveableOptions 默认 true；responsive:Selector|boolean 默认 true；sticky 默认 true；height/width:SizeSetting或()=>SizeSetting；scrollbarHover 默认 true；links:KanbanLinkOptions[]；linkProps、linkItemKey（默认'id'）、editLinks、showLinkOnHover、showLinkOnSelected、selectable、getLink、onAddLink/onDeleteLink 与单看板对应协议一致。未列默认值为无。

KanbanRegionProps 全部可选：key:string、heading:ListitemProps或()=>ListitemProps、items:KanbanProps[]、kanbanItemKey:string（默认 key）、collapsed:boolean、toggleFromHeading:boolean、kanbanProps（与列表同类型）。collapsed 初始化内部状态，后续使用 toggle/update。
### types-kanban-view-contracts

```json
{"name":"看板渲染与状态类型","summary":"公开类型服务于扩展和回调，不代表同名内部视图全部可独立导入。"}
```

以下类型从主入口和 /react 导出；仅 Kanban、KanbanList、KanbanRegion 三个 Preact 组件可直接导入。

| 类型 | 关键完整结构 |
| --- | --- |
| KanbanColProps | 继承 ColOptions，必需 index:number；可选 backgroundPattern、colBgColor、rowBgColor、rowColor，width/subCols 同原类型 |
| KanbanHeaderProps | cols 必需；可选 backgroundPattern、colBgColor、rowBgColor、rowColor |
| KanbanBodyProps | cols、lanes、items:KanbanItemsMap 必需；可选 hideLaneName、itemRender、getLaneCol、backgroundPattern、colBgColor、rowBgColor |
| KanbanLaneProps | 继承 LaneOptions，index、cols、items:Record<列名,KanbanItem[]> 必需；可选 height、hideName、itemRender、getLaneCol、backgroundPattern、colBgColor、rowBgColor |
| KanbanLaneColProps | 继承 ColOptions，items:KanbanItem[]、lane 必需；可选 laneColClass、itemRender、watchSize、backgroundPattern、colBgColor、rowBgColor |
| KanbanLinkProps | 继承 LinkOptions，fromRect/toRect:{left,top,bottom,right:number} 必需；可选 onDelete:(link)=>void、offsetX/offsetY:number |
| KanbanLinksProps | links 必需；可选 filters:string[]、editLinks:boolean、container:string、onDeleteLink/onAddLink:(link)=>void |
| KanbanLinkEditorProps | 可选 container:string、onAddLink:(link)=>void |
| KanbanState | 全部可选 backgroundPattern、loading、data、changes:Partial<KanbanData>、loadFailed:CustomContentType、containerWidth:number、selected:string[]、hover:string |
| KanbanListState | 全部可选 width/height:number、linkChanges:KanbanLinkOptions[]、selected:Record<string,string[]>、hover:string |
| KanbanRegionState | 可选 collapsed:boolean、heading:Partial<ListitemProps>、items:(KanbanProps&{deleted?:boolean})[] |
| KanbanLinkState | hover?:boolean |
| KanbanLinksState | layout:Record<string,{left,top,bottom,right:number}>、scrollTop/scrollLeft:number 必需 |
| KanbanLinkEditorState | 全部可选 from/fromKanban/to/toKanban:string、fromRect/toRect:{left,top,width,height:number}、dragPos:{left,top:number} |

仅 /react 额外导出 KanbanSnap={date:number;kanban:Kanban;data:Partial<KanbanData>;restore():void}。尺寸和坐标数值使用 CSS 像素；业务状态不直接修改这些内部 state 对象。

## recipes

### recipe-kanban-update

```json
{"name":"保存业务变更后更新看板","summary":"调用公开方法合并数据，并保留回滚快照。"}
```

workspace，复用 kanban：`const snapshot = kanban.$?.createSnap(); await kanban.$?.updateItem({id: 'task-1', col: 'done'});`。业务保存失败时调用 `snapshot?.restore()`。快照恢复影响本地数据，不会自动撤销服务端请求。

## constraints

- 数据、列、泳道和连接标识应稳定唯一；多看板跨连接提供 fromKanban/toKanban。
- main 未导出原生 KanbanRegion；不因文件存在编写 new zui.KanbanRegion。
- 当前拖放提交逻辑仅在配置 onDrop 时计算并更新本地 changes；要启用默认本地移动，可传 `onDrop: () => {}`，并在此接入业务保存。
- onDrop 是同步取消协议；需要异步业务保存可使用 restore 回滚，不能假设返回 Promise 会被它等待。连接增删回调则明确支持 Promise。
- 组件需要实际 DOM 尺寸，隐藏容器显示后可调用 updateLayout。

## references

- [入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/package.json>)、[公开原生](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/vanilla/index.ts>)、[公开Preact](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/component/index.ts>)
- [Kanban](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/component/kanban.tsx>)、[KanbanList](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/component/kanban-list.tsx>)、[KanbanRegion](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/component/kanban-region.tsx>)
- [类型出口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/types/index.ts>)、[样式入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/style/index.ts>)、[变量](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/kanban/src/style/vars.css>)
