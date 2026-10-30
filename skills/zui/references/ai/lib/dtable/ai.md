# 数据表格

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "dtable",
  "summary": "固定列、虚拟滚动、定制单元格与可组合插件的数据表格。",
  "keywords": [
    "DTable",
    "数据表格",
    "固定列",
    "勾选",
    "分页",
    "表格插件"
  ]
}
```

## overview

支持固定列、虚拟滚动、单元格渲染、排序、勾选、嵌套行、分页的数据表格。适合大量结构化数据；简单 HTML 表格外观使用 [Table](../table/ai.md)。此组件使用绝对定位的 div 布局，行高统一，不是原生 table 自动排版。

## setup

workspace：原生 `import {DTable} from '@zui/dtable';`；Preact `import {DTable} from '@zui/dtable/react';`；纯 CSS 为 `@zui/dtable/css`；插件从 `@zui/dtable/plugins` 导入。主入口导入样式并注册原生与 Preact 组件；只用 /react 时额外导入 /css，并按需导入 /plugins（插件注册具有副作用）。browser 的 zui.DTable 需要对应库构建资源，不能把工作区插件路径推断为发布 npm 导出。

给父节点明确可测量宽度；height='100%' 还要求父节点明确高度。源码 package.json 的 `./plugins/` 前缀声明不等于每个深层文件都在所有解析器可用；下面仅推荐聚合入口实际导出的插件。

## vanilla

### vanilla-dtable

```json
{"name": "DTable", "summary": "原生方式创建数据表格并通过 .$ 操作视图。"}
```

继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)：`new DTable(element,options)`，options 至少 cols 和 data。setOptions 自动把 parent 设为宿主；render(partialOptions?) 更新数据与视图；destroy() 卸载并清理插件、监听与观察器。`.$` 是 Preact DTable 实例，下面的 getRowInfo/scroll 等方法在 .$ 上调用。

commandScope 默认 dtable；`executeCommand(context:CommandContext|string,params:unknown[]=[]):unknown` 先查 commands 的 scoped 名称或名称，有匹配直接返回；否则当前 scope 的命令用 deepCall 调用 .$ 成员，再由 onCommand 覆盖返回值。commands/onCommand 仅在初始化时绑定 DOM 命令。

静态 definePlugin/removePlugin/getPlugin/plugins 见 [插件注册](#javascript-plugin-registry)。

workspace：

```ts
import {DTable} from '@zui/dtable';
const host = document.createElement('div');
host.style.width = '640px';
document.body.append(host);
const table = new DTable(host, {
    height: 280,
    cols: [{name: 'id', title: '编号', width: 80, fixed: 'left'}, {name: 'title', title: '标题', flex: 1}],
    data: [{id: '1', title: '示例任务'}],
});
table.render();
console.log(table.$?.getCellValue('1', 'title'));
// 页面卸载：table.destroy(); host.remove();
```

来源：[原生入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/vanilla/index.ts>)。

## preact

### preact-dtable

```json
{"name": "DTable (Preact)", "summary": "渲染行列和插件并提供布局查询与滚动 API。"}
```

从 @zui/dtable/react 导入，属性为 [DTableOptions](#types-options)。数据为对象数组、行 ID 数组或数量；后两者可用 rowDataGetter(ids:string[]):RowData[] 同步补数据。rowConverter(row,index) 可转换对象，cellValueGetter(row,col,originValue) 修改最终值；rowKey 默认 id，提供稳定唯一 ID。

| 参数 | 默认值 | 行为 |
| --- | --- | --- |
| cols / data | [] / [] | 类型必填；列 name 必填，其他见 ColSetting |
| width / height | 100% / auto | 像素、容器比例或动态计算；height 另支持 min/max |
| rowHeight | 35 | 所有行统一像素高 |
| defaultColWidth / minColWidth / maxColWidth | 80 / 24 / 9999 | 列像素宽约束 |
| header / footer | true / undefined | 表头/页脚或自定义内容 |
| headerHeight / footerHeight | 0 / 0 | 由布局回退计算，不代表隐藏 |
| striped / rowHover | true / true | 斑马纹、行悬停 |
| colHover / cellHover / bordered | false / false / false | 列/单元格悬停及完整边框 |
| responsive | false | true 或 CSS selector 相关的响应尺寸观察 |
| scrollbarHover | true | 滚动条 hover 呈现 |
| horzScrollbarPos | outside | 横滚动条 inside/outside |
| plugins | 无显式列表 | 加入默认内置插件，扩展列表在构造时固定 |

列设置：title 默认可由 name 回退；width 数值或百分比，flex boolean/number 分配剩余空间，fixed 为 left/right/false；hidden、align、type、border、cellClass/cellStyle 等见完整类型。onRenderCell(result,cell,props,h) 必须返回 CustomRenderResultList，cell={value,row,col}；表头使用 onRenderHeaderCell。onCellClick(event,{rowID,colName,rowInfo?,element}) 返回 true 会影响后续处理，详细见源码；onLayout/beforeRender 可返回布局替换，afterRender(firstRender?) 通知提交。

视图成员（先完成 mount/layout）：

| 成员 | 参数 / 返回 |
| --- | --- |
| options/plugins/layout/id/data/element/parent/hoverInfo | 已合并选项、活动插件、布局、ID、插件数据、DOM、父节点及悬停信息 |
| getColInfo(name或index或ColInfo) | ColInfo或undefined |
| getRowInfo(id或index或RowInfo) | RowInfo或undefined；HEADER/-1 返回表头信息 |
| getRowInfoByIndex(index) | 当前 layout.rows 对应行 |
| getCellValue(row,col) | unknown；row/col 接受对象、名称、下标 |
| scroll({scrollLeft?,scrollTop?,offsetLeft?,offsetTop?,to?},callback?) | boolean 表示是否实际滚动；to=up/down/top/bottom/left/right/begin/end |
| update({dirtyType?:options或layout,state?}或callback,callback?) | void；重算指定缓存/局部状态，不是替换 props 的 API |
| resetState(props?) | 重新初始化基础与插件状态 |
| on/off(event,callback,target?) | 监听/移除视图事件；target 空串/window/document |
| emitCustomEvent(event,detail?) | 调用内部事件分发，不保证 DOM 冒泡 |
| getPointerInfo(event) | DTablePointerInfo或undefined；no-cell-event 内忽略 |
| disableAnimation(delay=200) | 临时添加 no-animation，单位ms |
| i18n(key,args?,defaultValue?) | 插件/表格语言映射文本 |
| getPlugin(name) | 活动插件或undefined |

通过 Preact ref 取得实例。mount/unmount 管理监听与插件清理；不要直接调用生命周期方法。

workspace/TSX：

```tsx
import {h, render} from 'preact';
import {DTable} from '@zui/dtable/react';
import '@zui/dtable/css';
const host = document.createElement('div');
host.style.width = '640px';
document.body.append(host);
render(<DTable height={240} cols={[{name: 'title', title: '标题', flex: 1}]} data={[{id: '1', title: '任务'}]} />, host);
// 页面卸载：render(null, host); host.remove();
```

来源：[视图](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/components/dtable.tsx>)、[默认配置](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/helpers/default-options.ts>)。


### preact-table-parts

```json
{"name": "Cell / Cells / Block", "summary": "复用 DTable 的单元格和块渲染函数。"}
```

从 @zui/dtable/react 导出。Cell(props:CellProps) 渲染一个已计算 row/col/height 的单元格；Cells(props:CellsProps) 把指定 rows/cols 按已计算坐标渲染；Block(props:BlockProps) 按侧区列布局渲染表头/主体区域。均返回 Preact VNode，依赖 DTable 的 ColInfo/RowInfo 和样式，不自行计算完整表格布局。使用同库类型条目中的必填字段；一般消费者直接使用 DTable，定制 CellComponent 时可复用 Cell。

workspace/TSX：`import {Cell} from '@zui/dtable/react';`，在提供 CellsProps.CellComponent 的渲染器内 `return <Cell {...props} />;`，props 必须来自布局，不能传业务 RowData 代替 RowInfo。

## web-components

无。

## css

### css-dtable

```json
{"name": "dtable 及布局部件", "summary": "数据表格的根节点和虚拟布局结构。", "role": "js-component"}
```

JS 生成根 .dtable，布局部件 .dtable-table/.dtable-block/.dtable-header/.dtable-body/.dtable-footer/.dtable-cells/.dtable-cells-container/.dtable-cell/.dtable-cell-content/.dtable-header-cell/.dtable-empty-tip；固定区 .dtable-fixed-left/.dtable-fixed-right；滚动阴影 .dtable-scroll-shadow。几何来自内联布局，不适合独立写 div 模拟。根示例见 DTable 构造器。来源：[布局样式](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/style/layout.css>)。


### css-dtable-helpers

```json
{"name": "表格样式、交互状态及插件部件", "summary": "配合生成结构控制边框、条纹、悬停和插件外观。", "role": "helper"}
```

根辅助类 dtable-bordered/dtable-striped/dtable-hover-row/dtable-hover-col/dtable-hover-cell；单元格 has-border-left/has-border-right/is-odd-row/is-last-row/is-hover-row/is-hover-col；no-animation 临时禁用过渡。推荐通过选项设置，不手工维护状态。

滚动状态 dtable-scrolled-down/dtable-scrolled-bottom/dtable-has-scroll-y/dtable-scrolled-end/dtable-scrolled-right，阴影 is-left/is-right；scrollbar-hover 依赖 Scrollbar。

排序 dtable-sort/dtable-sort-asc/dtable-sort-desc/dtable-sort-link；勾选 dtable-checkbox/dtable-check-info、单元格 is-checked；嵌套 dtable-nested-indent/dtable-nested-toggle/dtable-child-label、按钮 is-no-child；表头组 dtable-header-group/dtable-header-as-group；拖动 dtable-sorting/is-sorting-from/is-sorting-before/is-sorting-after。这些仅服务对应插件。dtable-custom-cell 是自定义渲染部件标记；no-cell-event 是事件过滤钩子，无独立外观。

## css-variables

### css-variables-dtable

```json
{"name": "--dtable-*", "summary": "表格主题、勾选和嵌套图标变量。"}
```

| 变量 | 默认表达式 | 用途/声明位置 | 覆盖节点 |
| --- | --- | --- | --- |
| --dtable-bg | var(--color-canvas) | .dtable 单元格背景 | 实际 .dtable |
| --dtable-striped-bg | var(--color-gray-50) | .dtable 奇数行背景 | .dtable |
| --dtable-hover-bg | rgba(var(--color-primary-500-rgb), .05) | .dtable 悬停背景 | .dtable |
| --dtable-header-bg / --dtable-footer-bg | var(--color-surface) | .dtable 表头/页脚 | .dtable |
| --dtable-border-color | var(--color-border) | .dtable 边框；is-checked 覆盖成 checked-border | .dtable 或对应单元格 |
| --dtable-sorter-size | .3125rem | .dtable 排序三角尺寸 | .dtable |
| --dtable-checked-bg | var(--color-warning-50) | :root 勾选底色 | .dtable 或 :root |
| --dtable-checked-bg-hover | var(--color-warning-100) | :root 勾选悬停 | .dtable 或 :root |
| --dtable-checked-border | var(--color-border-strong) | :root 勾选边框 | .dtable 或 :root |
| --dtable-nt-size | calc((var(--font-size-root) * 3 / 4) + 1px) | nested 的 :root 声明；当前样式未消费 | 不作为有效缩进设置，使用 nestedIndent |

例如 `.dtable {--dtable-header-bg:var(--color-canvas);--dtable-checked-bg:#fff7df}`。本地 .dtable 声明覆盖祖先值，不能统一只在 :root 改全部变量。来源：[基础变量](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/style/vars.css>)、[勾选](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/checkable/style.css>)、[嵌套](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/nested/style.css>)。

## javascript

### javascript-plugin-registry

```json
{"name": "DTable.definePlugin / removePlugin / getPlugin / plugins", "summary": "注册、选择和配置 DTable 插件。"}
```

`DTable.definePlugin(plugin, {override?:boolean,buildIn?:boolean}?)` 注册名称并返回可调用 consumer；同名默认抛错，override=true 替换。buildIn=true 自动加入之后创建的表格；consumer(options?) 返回插件或覆盖 defaultOptions 的副本（不修改原插件）。`removePlugin(name):boolean` 删除全局注册；`getPlugin(nameOrPlugin):DTablePlugin|undefined` 解析字符串、对象或 consumer。`DTable.plugins` 是聚合入口导出的命名空间，不等于所有源码目录。

plugins 数组接受名称/插件对象/consumer，依赖 plugins 先展开、按 name 去重，再按 requireAfter 排序；插件先合并 defaultOptions，再合并表格 props，然后由 when 判断激活。注册、加入列表、when 激活是不同步骤。构造后更换 plugins 需重建表格；现有表格不因全局注册/移除而重建列表。

默认内置 rich/avatar/sort/sortType，其中 sort 默认关闭，sortType 在未启用 sort 时生效。其余聚合导出的插件需加入 plugins。Preact DTable 只暴露 addPlugin/removePlugin 静态方法；常用带类型 consumer 从 /plugins 导入。

workspace：

```ts
import {DTable} from '@zui/dtable';
import {checkable, pager} from '@zui/dtable/plugins';
const host = document.createElement('div');
host.style.width = '640px';
document.body.append(host);
const table = new DTable(host, {plugins: [checkable, pager], cols: [{name: 'id', title: '编号', checkbox: true}], data: [{id: 'a'}, {id: 'b'}], checkable: true, localPager: true, footPager: {}, footer: ['pager']});
// 页面卸载：table.destroy(); host.remove();
```

来源：[共享注册器](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/helpers/shared-plugins.ts>)、[聚合入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/index.ts>)。


### javascript-plugin-rich

```json
{"name": "rich", "summary": "日期、映射、HTML、链接和进度单元格。"}
```

默认内置、始终可用。列 type=html/progress/datetime/date/time；默认日期分别 [yyyy-]MM-dd hh:mm、yyyy-MM-dd、hh:mm。progress 默认圆形24px、边1px、success-500，progressType=bar 时默认64×6px。列 html/link/map/format/formatDate/digits/hint/styleMap 修改内容；回调参数见类型。示例列 `{name:"progress",type:"progress",progressType:"bar"}`。HTML 内容需由应用保证可信。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type ColLinkSetting = string | false | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((info: {row: RowInfo; col: ColInfo}) => string | false | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));
```

```ts
export type ColDateFormatSetting = boolean | string | ((value: unknown, info: {row: RowInfo; col: ColInfo}) => string);
```

```ts
export type ColFormatSetting = string | ((value: unknown, info: {row: RowInfo; col: ColInfo}) => string);
```

```ts
export type ColHTMLSetting = boolean | string | ((value: unknown, info: {row: RowInfo; col: ColInfo}) => string);
```

```ts
export type ColMapSetting = Record<string, string> | ((value: unknown, info: {row: RowInfo; col: ColInfo}) => string);
```

```ts
export type DTableRichTypes = {
    col: Partial<{
        circleSize: number;
        circleBgColor: string;
        circleColor: string;
        circleBorderSize: number;
        progressType: 'circle' | 'bar';
        barColor: string;
        barBgColor: string;
        barWidth: number;
        barHeight: number;
        link: ColLinkSetting;
        digits: number;
        format: ColFormatSetting;
        formatDate: ColDateFormatSetting;
        invalidDate: string;
        html: ColHTMLSetting;
        map: ColMapSetting;
        mapSplitter: string;
        mapJoiner: string;
        hint: boolean | string | ((info: {row: RowInfo; col: ColInfo}) => string);
        styleMap: Record<string, string> | ((info: {row: RowInfo; col: ColInfo}) => Record<string, string>);
    }>;
};
```

```ts
export type DTableRich = DTableWithPlugin<DTableRichTypes>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/rich/index.tsx>)。


### javascript-plugin-sort

```json
{"name": "sort", "summary": "客户端按一列或多列排序。"}
```

默认内置但 sort=false；设 sort=true 并为列配置 sort。sortBy 为 {name,order} 或数组，order asc/desc/none；multiSort 未设为关闭。可指定列比较函数或在 options.sort 的函数映射注册名称；比较函数返回数值。示例 `{sort:true,cols:[{name:"name",sort:true}]}`（仍需 data）。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type ColSortOrder = 'asc' | 'desc' | 'none';
```

```ts
export type ColSortBy = {name: ColName; order: ColSortOrder};
```

```ts
export type ColSortFn = (this: DTableSort, row1: RowInfo, row2: RowInfo, col: ColInfo) => number;
```

```ts
export type ColSortFnName = string;
```

```ts
export type DTableSortTypes = {
    col: {
        sort: boolean | ColSortFn | ColSortFnName;
    };
    options: {
        sort?: boolean | ColSortFn | Record<ColSortFnName, ColSortFn>;
        sortBy?: ColSortBy | ColSortBy[];
        multiSort?: boolean;
    };
    state: {
        sortBy?: ColSortBy[];
    };
};
```

```ts
export type DTableSort = DTableWithPlugin<DTableSortTypes>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/sort/index.tsx>)。


### javascript-plugin-custom

```json
{"name": "custom", "summary": "按列提供自定义 Preact 或 HTML 内容。"}
```

加入 plugins:[custom]；列 custom 接受组件标签、HTML 字符串、{component,props}、数组或(cell)=>配置；props 函数接收 CellInfo。customMap 定义可复用映射。以 `<` 起始字符串按 HTML 模板处理。示例列 `{name:"title",custom:{component:"strong",props:({value})=>({children:String(value)})}}`，需要 TS 标注 CellInfo 时从主入口 import type。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type DTableCustomHTMLCode = string;
```

```ts
export type DTableCustomHTMLElementType = keyof JSX.IntrinsicElements;
```

```ts
export type DTableCustomInfo = {
    component: DTableCustomHTMLCode | DTableCustomHTMLElementType | ComponentType;
    props?: Record<string, unknown> | ((this: DTableCustom, info: CellInfo) => Record<string, unknown>);
};
```

```ts
export type DTableCustomSetting = DTableCustomHTMLCode | DTableCustomHTMLElementType | DTableCustomInfo | DTableCustomInfo[] | ((this: DTableCustom, cell: CellInfo) => (DTableCustomInfo | DTableCustomInfo[] | undefined));
```

```ts
export type DTableCustomTypes = {
    col: Partial<{
        custom: DTableCustomSetting;
    }>;
    options: {
        customMap: Record<string, DTableCustomInfo>;
    };
};
```

```ts
export type DTableCustom = DTableWithPlugin<DTableCustomTypes>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/custom/index.tsx>)。


### javascript-plugin-checkable

```json
{"name": "checkable", "summary": "勾选行、全选和勾选汇总。"}
```

加入 plugins:[checkable]，checkable 默认 auto，列 checkbox 决定显示。checkedRows 初始 ID 数组，checkOnClickRow 未设关闭，canRowCheckable(rowID) 返回 false/disabled 禁止，allowCheckDisabled 可允许禁用行批量操作。onCheckChange(changes) 仅回传变化映射。视图方法 toggleCheckRows(ids?:string|string[]|boolean,checked?):Record<string,boolean>；省略 ids 为全选/取消，省略 checked 为反转；isRowChecked(id):boolean、isAllRowChecked():boolean、getChecks():string[]、toggleCheckable(toggle?):void。beforeCheckRows 回传额外勾选映射，不是 false 取消钩子。示例见注册条目。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export interface DTableCheckableTypes {
    options: Partial<{
        checkable: boolean | 'auto';
        checkOnClickRow: boolean;
        checkedRows: string[];
        checkboxLabel?: string;
        allowCheckDisabled: boolean;
        checkInfo: (this: DTableCheckable, checks: string[]) => ComponentChildren;
        canRowCheckable: (this: DTableCheckable, rowID: string) => boolean | 'disabled';
        beforeCheckRows: (this: DTableCheckable, ids: string[] | undefined, changes: Record<string, boolean>, checkedRows: Record<string, boolean>) => Record<string, boolean> | undefined;
        onCheckChange: (this: DTableCheckable, changes: Record<string, boolean>) => void;
        checkboxRender: (this: DTableCheckable, checked: boolean, rowID: string, disabled?: boolean) => CustomRenderResult;
    }>;
    col: {
        checkbox?: boolean | ((this: DTableCheckable, rowID: string) => boolean);
    };
    methods: {
        toggleCheckRows: typeof toggleCheckRows;
        isRowChecked: typeof isRowChecked;
        isAllRowChecked: typeof isAllRowChecked;
        getChecks: typeof getChecks;
        toggleCheckable: typeof toggleCheckable;
    };
    state: {
        checkedRows: Record<string, true>;
        forceCheckable?: boolean;
    };
    data: {
        disableCheckable?: boolean;
    };
}
```

```ts
export type DTableCheckable = DTableWithPlugin<DTableCheckableTypes>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/checkable/index.tsx>)。


### javascript-plugin-nested

```json
{"name": "nested / NestedRowState", "summary": "通过 parent ID 组织嵌套行并折叠。"}
```

加入 plugins:[nested]，nested 默认 auto，nestedParentKey=parent、asParentKey=asParent、nestedIndent=20；数据仍是扁平数组，通过 parent 建立关系。列 nestedToggle=true 显示按钮；defaultNestedState 中 true 表示折叠。toggleRow(rowID或数组,collapsed?):void；HEADER 操作全部，省略 collapsed 反转；getNestedInfo(id?) 返回单项或 Map；getNestedRowInfo(id):NestedRowInfo；isAllCollapsed():boolean。preserveNested 通过内部 store 保存状态，noNestedCheck 禁用联动。NestedRowState 为 const enum：unknown=""、collapsed、expanded、hidden、normal，不当作必然存在的 browser 对象。示例 `{plugins:[nested],cols:[{name:"title",nestedToggle:true}],data:[{id:"1",title:"父"},{id:"2",parent:"1",title:"子"}]}`。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type NestedRowInfo = {
    state: NestedRowState;
    level: number;
    children?: string[];
    parent?: string;
    order?: number;
};
```

```ts
export type DTableNestedTypes = {
    options: Partial<{
        nested: boolean | 'auto';
        nestedParentKey: string;
        asParentKey: string;
        nestedIndent: number;
        preserveNested: boolean;
        noNestedCheck: boolean;
        defaultNestedState: Record<RowID, boolean> | boolean;
        onNestedChange: () => void;
        onRenderNestedToggle: (this: DTableNested, info: NestedRowInfo | undefined, rowID: string, col: ColInfo, rowData: RowData | undefined) => CustomRenderResult;
    }>;
    state: {
        nestedState: Record<RowID, boolean>;
    };
    col: Partial<{
        nestedToggle: boolean;
        nestedIndent: number | boolean;
        childLabel?: CustomContentType;
    }>;
    data: {
        nestedMap: Map<RowID, NestedRowInfo>;
        nestedRowMap: Map<RowID, RowInfo>;
    };
    methods: {
        getNestedInfo: typeof getNestedInfo;
        toggleRow: typeof toggleRow;
        isAllCollapsed: typeof isAllCollapsed;
        getNestedRowInfo: typeof getNestedRowInfo;
    };
};
```

```ts
export type DTableNestedDependencies = [DTableSortableTypes, DTableCheckableTypes, DTableStoreTypes];
```

```ts
export type DTableNested = DTableWithPlugin<DTableNestedTypes, DTableNestedDependencies>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/nested/index.tsx>)。


### javascript-plugin-avatar

```json
{"name": "avatar", "summary": "头像、头像按钮和头像名称单元格。"}
```

默认内置。列 type=avatar/avatarBtn/avatarName；默认 avatarClass=rounded-full、avatarKey=`${name}Avatar`、avatarNameKey=`${name}Name`，Avatar size=xs；avatarCodeKey 可指定编码字段；avatarProps、avatarBtnProps 对象或(col,row)=>对象。示例列 `{name:"owner",type:"avatarName"}`，行 `{id:"1",owner:"ada",ownerName:"Ada",ownerAvatar:"/avatar.png"}`。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type DTableAvatarTypes = {
    col: Partial<{
        avatarClass?: string;
        avatarKey?: string;
        avatarCodeKey?: string;
        avatarProps?: AvatarOptions | ((col: ColInfo, row: RowInfo) => AvatarOptions);
        avatarBtnProps?: JSX.HTMLAttributes<HTMLButtonElement> | ((col: ColInfo, row: RowInfo) => JSX.HTMLAttributes<HTMLButtonElement>);
        avatarNameKey?: string;
    }>;
};
```

```ts
export type DTableAvatar = DTableWithPlugin<DTableAvatarTypes>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/avatar/index.tsx>)。


### javascript-plugin-sort-type

```json
{"name": "sortType", "summary": "表头排序状态和远端排序链接。"}
```

默认内置、sortType=true，仅 options.sort 未开启时生效。列 sortType=true/asc/desc 控制标记，orderBy 映射当前状态；sortLink 可为 URL、{url,...aProps} 或(col,newSortType,currentSortType)=>链接。它生成排序链接和状态，不执行客户端比较；启用 sort 会禁用此插件。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type ColSortType = 'asc' | 'desc' | boolean;
```

```ts
export type DTableSortTypeTypes = {
    col: {
        sortType: ColSortType;
        sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => (string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>)));
    };
    options: {
        sortType?: boolean;
        sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => (string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>)));
        orderBy?: Record<string, ColSortType>;
    };
};
```

```ts
export type DTableSortType = DTableWithPlugin<DTableSortTypeTypes, [DTableSortTypes]>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/sort-type/index.tsx>)。


### javascript-plugin-group

```json
{"name": "group", "summary": "相邻列分组边界。"}
```

加入 plugins:[group]，groupDivider 默认 true；列 group:string 相邻值不同时设置左边界，不覆盖已有 border。示例 `{plugins:[group],cols:[{name:"a",group:"基本"},{name:"b",group:"进度"}],data:[]}`。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type DTableGroupTypes = {
    options: Partial<{
        groupDivider: boolean;
    }>;
    col: Partial<{
        group: string;
    }>;
};
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/group/index.tsx>)。


### javascript-plugin-header-group

```json
{"name": "headerGroup", "summary": "两层分组表头。"}
```

加入 plugins:[headerGroup]，headerGroup 默认 true；列 headerGroup:string 归组，默认表头高为 rowHeight*2。会重排 cols 使组列相邻，显式高度需应用验证。示例两列同设 headerGroup:"联系信息"；避免跨固定侧区的组。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type DTableHeaderGroupInfo = {
    cols: string[];
    index: number;
};
```

```ts
export type DTableHeaderGroupTypes = {
    options: Partial<{
        headerGroup: boolean;
    }>;
    col: Partial<{
        headerGroup: string;
    }>;
    data: {
        headerGroups: Map<string, DTableHeaderGroupInfo>;
    };
};
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/header-group/index.tsx>)。


### javascript-plugin-cellspan

```json
{"name": "cellspan", "summary": "按回调合并单元格。"}
```

加入 plugins:[cellspan]，getCellSpan({row,col}) 返回 {colSpan?,rowSpan?}，未返回不合并；内部计算覆盖格与像素范围。回调 this 为视图；示例 `{getCellSpan:({row,col})=>row.index===0&&col.name==="a"?{colSpan:2}:undefined}`。边界不得超出实际行列，固定侧区合并需业务验证。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type DTableColIndex = number;
```

```ts
export type DTableRowIndex = number;
```

```ts
export type DTableColID = `C${DTableColIndex}`;
```

```ts
export type DTableRowID = `R${DTableRowIndex}`;
```

```ts
export type DTableCellID = `${DTableColID}${DTableRowID}`;
```

```ts
export type DTableCellSpanSetting = {colSpan: number; rowSpan: number};
```

```ts
export type DTableCellSpanInfo = DTableCellSpanSetting & {width: number; height: number};
```

```ts
export type DTableCellSpanTypes = {
    data: {
        overlayCellSet: Set<DTableCellID>;
        cellSpanMap: Map<DTableCellID, DTableCellSpanInfo>;
    };
    options: {
        getCellSpan?: (this: DTableCellSpan, cell: {row: RowInfo; col: ColInfo}) => Partial<DTableCellSpanSetting> | undefined;
    };
};
```

```ts
export type DTableCellSpan = DTableWithPlugin<DTableCellSpanTypes>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/cellspan/index.ts>)。


### javascript-plugin-sortable

```json
{"name": "sortable", "summary": "鼠标拖动表格行顺序。"}
```

加入 plugins:[sortable]，sortable 默认 true；依赖内部 mousemove/autoscroll。sortHandler 可限定 CSS 选择器；onSortStart(row,event) 返回 false 取消；canSortTo(from,to,side) 返回 boolean；onSort(from,to,side,orders) 可返回 false 拒绝；onSortEnd(from,to?,side?,orders?) 收尾；side=before/after。视图 getSortingState(event):SortingState|undefined。应用在 onSort 持久化 ID 顺序；这不是 @zui/sortable 的 SortableJS 包装。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export type SortingSide = 'before' | 'after';
```

```ts
export type SortingState = {
    sortingFrom: RowInfo;
    sortingPos: number;
    sortingTo?: RowInfo;
    sortingSide?: SortingSide;
};
```

```ts
export type DTableSortableTypes = {
    options: Partial<{
        sortable: boolean;
        sortHandler: string;
        canSortTo: (this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: SortingSide) => boolean;
        onSortStart: (this: DTableSortable, row: RowInfo, event: MouseEvent) => false | void;
        onSortEnd: (this: DTableSortable, from: RowInfo, to: RowInfo | undefined, sortingSide: SortingSide | undefined, orders: string[] | undefined) => void;
        onSort: (this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: SortingSide, orders: string[]) => void | false;
    }>;
    state: Partial<{
        rowOrders: Record<string, number>;
        sortingFrom: RowInfo;
        sortingPos: number;
        sortingTo: RowInfo;
        sortingSide: SortingSide;
    }>;
    data: {
        disableCheckable?: boolean;
        disableSortable?: boolean;
        sortableInfo?: {from: RowInfo; offset: number; state?: SortingState; startMouseY: number; lastMouseY: number};
    };
    methods: {
        getSortingState(this: DTableSortable, event: MouseEvent): SortingState | undefined;
    };
};
```

```ts
export type DTableSortable = DTableWithPlugin<DTableSortableTypes, [DTableMousemoveTypes, DTableAutoscrollTypes]>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/sortable/index.tsx>)。


### javascript-plugin-pager

```json
{"name": "pager", "summary": "表格底部分页与本地切片。"}
```

加入 plugins:[pager]。footPager 为 PagerOptions，footer:["pager"] 渲染；localPager=true/完整 PagerInfo 启用本地切片。初始 page=1、recPerPage=20；运行时把页大小归一为正整数，把页码限制在当前总数范围。localPager=false/未设时只渲染 Pager，不替应用加载服务器数据。完整 PagerOptions 见 [Pager](../pager/ai.md#types)。

参数与扩展类型（从 @zui/dtable/plugins 导出；methods 指视图实例成员，不是模块函数）：

```ts
export interface DTablePagerTypes {
    options: Partial<{
        footPager: PagerOptions;
        localPager: PagerInfo | boolean;
    }>;
    state: {
        pager?: PagerInfo;
    };
}
```

```ts
export type DTablePager = DTableWithPlugin<DTablePagerTypes>;
```

来源：[插件实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/plugins/pager/index.tsx>)。

## types

### types-options

```json
{"name": "DTableOptions / DTableDataOptions / DTableLayoutOptions / DTableStyleOptions / DTableCallbackOptions", "summary": "表格全部基础配置。"}
```

从 @zui/dtable 或 /react 使用 import type。插件专属类型在 /plugins，对应字段见上方各插件条目。

```ts
export interface DTableDataOptions<C = ColSetting> {
    cols: C[];
    data: (RowData | string)[] | number;
    rowDataGetter?: (ids: string[]) => RowData[];
    cellValueGetter?: CellValueGetter;
    rowConverter?: (row: RowData, index: number) => RowData;
    rowKey?: string;
}
export interface DTableLayoutOptions {
    width?: number | '100%' | ((this: DTable) => number | '100%');
    height?: number | '100%' | 'auto' | {min: number; max: number} | ((this: DTable, actualHeight: number) => number | 'auto' | {min: number; max: number});
    fixedLeftWidth?: number | 'auto' | `${number}%` | ((this: DTable) => number);
    fixedRightWidth?: number | 'auto' | `${number}%` | ((this: DTable) => number);
    rowHeight?: number;
    defaultColWidth?: number;
    minColWidth?: number;
    maxColWidth?: number;
    header?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | CustomRenderResultGenerator<[layout: DTableLayout], DTable> | CustomRenderResultItem;
    footer?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | ((this: DTable, layout: DTableLayout) => CustomRenderResultList<[layout: DTableLayout], DTable>);
    partialRender?: boolean;
    headerHeight?: number;
    footerHeight?: number;
    responsive?: boolean | string;
    scrollbarHover?: boolean;
    scrollbarSize?: number;
    horzScrollbarPos?: 'inside' | 'outside';
    vertScrollbarPos?: 'inside' | 'outside';
    emptyTip?: CustomContentType;
}
export interface DTableStyleOptions {
    rowHover?: boolean;
    colHover?: boolean | 'header';
    cellHover?: boolean;
    bordered?: boolean;
    striped?: boolean;
}
export interface DTableCallbackOptions {
    onLayout?: (this: DTable, layout: DTableLayout) => (DTableLayout | void);
    onScroll?: (this: DTable, scrollInfo: {scrollTop?: number; scrollLeft?: number}) => void;
    onRenderCell?: CellRenderCallback;
    onRenderHeaderCell?: CellRenderCallback;
    beforeRender?: (this: DTable, layout: DTableLayout) => (DTableLayout | void);
    afterRender?: (this: DTable, firstRender?: boolean) => void;
    onCellClick?: (this: DTable, event: MouseEvent, data: {rowID: string; colName: string; rowInfo?: RowInfo; element: HTMLElement}) => void | true;
    onHeaderCellClick?: (this: DTable, event: MouseEvent, data: {colName: string; element: HTMLElement}) => void;
    onAddRow?: (this: DTable, row: RowInfo, index: number) => void | false;
    onAddRows?: (this: DTable, rows: RowInfo[], colsLayout: DTableColsLayout) => RowInfo[] | void;
}
export interface DTableOptions<C = ColSetting> extends DTableDataOptions<C>, DTableLayoutOptions, DTableStyleOptions, DTableCallbackOptions {
    id?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    lang?: string;
    i18n?: Record<string, Record<string, string | object>>;
    className?: ClassNameLike;
    style?: Record<string, string | number>;
    parent?: HTMLElement;
    plugins?: DTablePluginLike[];
    commandScope?: string;
    onCommand?: CommandCallback;
    commands?: Record<string, CommandCallback>;
    [prop: string]: unknown;
}
```

来源：[src/types/options.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/options.ts>)。


### types-rows-columns

```json
{"name": "RowInfo / RowData / ColInfo / ColSetting 及关联别名", "summary": "业务数据、布局行和布局列的区别。"}
```

从 @zui/dtable 或 /react 使用 import type。插件专属类型在 /plugins，对应字段见上方各插件条目。

```ts
export type RowID = string;
export type RowPropName = string;
export type RowPropValue = unknown;
export type RowData = Record<RowPropName, RowPropValue>;
export type RowInfoLike = string | number | RowInfo;
export type RowInfo = {
    id: string;
    index: number;
    top: number;
    data?: RowData;
    lazy?: boolean | 'resolved';
};
```

来源：[src/types/row.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/row.ts>)。

```ts
export type ColName = string;
export type ColFlexGrow = number;
export type ColFlex = ColFlexGrow | boolean;
export type ColFixedSide = 'left' | 'right' | false;
export type ColSide = 'left' | 'right' | 'center';
export type ColInfoLike = string | number | ColInfo;
export type ColBorderType = 'left' | 'right' | boolean;
export type ColInfo<S = ColSetting> = {
    name: ColName;
    type: string;
    flex: ColFlexGrow; // 0 will disable flex
    width: number;
    realWidth: number;
    left: number;
    setting: S & {onRenderCell?: CellRenderCallback<S>};
    visible: boolean;
    index: number;
    side: ColSide;
    sideIndex: number;
    order?: number;
    border?: ColBorderType;
};
export type ColSetting<S = object> = S & {
    name: ColName;
} & Partial<{
    title: string;
    width: number | `${number}%`;
    minWidth: number;
    maxWidth: number;
    order: number;
    flex: ColFlex;
    fixed: ColFixedSide;
    border: ColBorderType;
    align: 'left' | 'center' | 'right';
    data: Record<string, unknown>;
    style: preact.JSX.CSSProperties;
    cellStyle: preact.JSX.CSSProperties;
    cellClass: ClassNameLike;
    className: ClassNameLike;
    type: string;
    hidden: boolean;
    colHover: boolean;
    onRenderCell: CellRenderCallback<ColSetting & S>;
    [prop: `data-${string}`]: string;
    [prop: string]: unknown;
}>;
```

来源：[src/types/col.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/col.ts>)。


### types-rendering

```json
{"name": "CellInfo / CellProps / CellsProps / BlockProps / CustomRenderResult", "summary": "单元格渲染与子部件配置。"}
```

从 @zui/dtable 或 /react 使用 import type。插件专属类型在 /plugins，对应字段见上方各插件条目。

```ts
export type CellInfo<C = ColSetting> = {value: unknown; row: RowInfo; col: ColInfo<C>};
export type CellRenderCallback<C = ColSetting> = (
    result: CustomRenderResultList,
    cell: CellInfo<C>,
    props: CellProps,
    h: typeof _h,
) => CustomRenderResultList;
export type CellValueGetter = (row: RowInfo, col: ColInfo, originValue: unknown) => unknown;
export type CellProps = {
    col: ColInfo;
    row: RowInfo;
    left?: number;
    top?: number;
    width?: number;
    height: number;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    outerClass?: ClassNameLike;
    outerStyle?: JSX.CSSProperties;
    children?: ComponentChildren;
    onRenderCell?: CellRenderCallback;
};
export type CellsProps = {
    rows: RowInfo | RowInfo[];
    cols: ColInfo[];
    rowHeight: number;
    scrollLeft?: number;
    scrollTop?: number;
    left?: number;
    top?: number;
    width?: number;
    height?: number | '100%';
    className?: ClassNameLike;
    cellClass?: ClassNameLike;
    CellComponent?: preact.ComponentType<CellProps>;
    onRenderCell?: CellRenderCallback;
};
```

来源：[src/types/cell.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/cell.ts>)。

```ts
export type BlockProps = {
    top: number;
    height: number;
    rowHeight: number;
    rows: RowInfo | RowInfo[];
    cols: DTableColsLayout;
    scrollLeft: number;
    scrollTop: number;
    className?: ClassNameLike;
    cellClass?: ClassNameLike;
    style?: JSX.CSSProperties;
    onRenderCell?: CellRenderCallback;
    children?: ComponentChildren;
};
```

来源：[src/types/block-props.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/block-props.ts>)。

```ts
export type ClassNameLike = import('@zui/core').ClassNameLike;
export type CustomRenderResultItem = import('@zui/core').CustomRenderResultItem;
export type CustomRenderResult<T extends unknown[] = unknown[], THIS = DTable> = import('@zui/core').CustomRenderResult<T, THIS>;
export type CustomRenderResultGenerator<T extends unknown[] = unknown[], THIS = DTable> = import('@zui/core').CustomRenderResultGenerator<T, THIS>;
export type CustomRenderResultList<T extends unknown[] = unknown[], THIS = DTable> = import('@zui/core').CustomRenderResultList<T, THIS>;
```

来源：[src/types/common.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/common.ts>)。


### types-layout

```json
{"name": "DTableLayout / DTableColsLayout 及布局类型", "summary": "计算后的表格几何结构。"}
```

从 @zui/dtable 或 /react 使用 import type。插件专属类型在 /plugins，对应字段见上方各插件条目。

```ts
export type DTableColsSectionLayout = {
    list: ColInfo[];
    flexList: ColInfo[];
    width: number;
    widthSetting: number;
    totalWidth: number;
};
export type DTableColsLayout = {
    map: Record<string, ColInfo>;
    list: ColInfo[];
    left: DTableColsSectionLayout;
    center: DTableColsSectionLayout;
    right: DTableColsSectionLayout;
};
export type DTableLayout = {
    options: DTableOptions;
    width: number;
    height: number;
    rowHeight: number;
    rowsHeight: number;
    rowsHeightTotal: number;
    allRows: RowInfo[];
    rows: RowInfo[];
    rowsMap: Record<RowID, RowInfo>;
    header?: boolean | CustomRenderResultList<[table: DTable, layout: DTableLayout]>;
    footer?: boolean | CustomRenderResultList<[layout: DTableLayout], DTable> | ((this: DTable, layout: DTableLayout) => CustomRenderResultList<[layout: DTableLayout], DTable>);
    footerGenerators: Record<string, CustomRenderResult<[table: DTable, layout: DTableLayout]>>;
    headerHeight: number;
    footerHeight: number;
    cols: DTableColsLayout;
    className?: string;
    headerChildren?: ComponentChild[];
    bodyChildren?: ComponentChild[];
    footerChildren?: ComponentChild[];
    children?: ComponentChild[];
    scrollable?: boolean;
    visibleRows: RowInfo[];
    scrollTop: number;
    scrollLeft: number;
};
```

来源：[src/types/layout.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/layout.ts>)。


### types-state-events

```json
{"name": "DTableState / DTablePointerInfo / DTableEventListener", "summary": "滚动状态与事件参数。"}
```

从 @zui/dtable 或 /react 使用 import type。插件专属类型在 /plugins，对应字段见上方各插件条目。

```ts
export type DTableState = {
    scrollTop: number;
    scrollLeft: number;
    renderCount: number;
    [prop: string]: unknown;
};
export type DTableHTMLEvent = keyof HTMLElementEventMap;
export type DTableEventListener<T = DTable, E extends Event = Event> = (this: T, event: E) => void | false;
export type DTableEventTarget = '' | 'window' | 'document';
export type DTablePointerInfo = {
    cellElement: HTMLElement;
    colName: string;
    rowID: string;
    target: HTMLElement;
};
```

来源：[src/types/dtable.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/dtable.ts>)。


### types-plugins

```json
{"name": "DTablePlugin / DTablePluginTypes / DTableWithPlugin 及泛型辅助类型", "summary": "插件选项、方法、生命周期和依赖的类型组合。"}
```

从 @zui/dtable 或 /react 使用 import type。插件专属类型在 /plugins，对应字段见上方各插件条目。

```ts
export type DTablePluginName = string;
export type DTablePluginLike = DTablePluginName | DTablePlugin | DTablePluginComsumer;
export interface DTablePluginTypes {
    state?: object;
    options?: object;
    data?: object;
    methods?: object;
    col?: object;
    events?: object;
}
export type DTableWithPluginColSetting<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = []> = ColSetting<PluginPropsDependency<T, D, 'col'>>;
export type DTableWithPluginState<S = object> = DTableState & S;
export type DTableWithPluginOptions<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = []> = DTableOptions<DTableWithPluginColSetting<T, D>> & PluginPropsDependency<T, D, 'options'>;
export type DTableWithPluginColInfo<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = []> = ColInfo<DTableWithPluginColSetting<T, D>>;
export type PluginColSettingModifier<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = []> = (col: DTableWithPluginColSetting<T, D>) => Partial<DTableWithPluginColSetting<T, D>> | undefined;
export type PluginPropsDependency<T extends DTablePluginTypes, D extends DTablePluginTypes[], P extends keyof DTablePluginTypes> = MergeUnionTypes<(P extends keyof T ? T[P] : never) | PickPropType<D[0], P> | PickPropType<D[1], P> | PickPropType<D[2], P> | PickPropType<D[3], P> | PickPropType<D[4], P> | PickPropType<D[5], P> | PickPropType<D[6], P> | PickPropType<D[7], P> | PickPropType<D[8], P> | PickPropType<D[9], P>>;
export type PluginCustomEvents<T extends DTablePluginTypes, D extends DTablePluginTypes[]> = PluginPropsDependency<T, D, 'events'>;
export type DTableWithPlugin<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = []> = DTable & {
    state: DTableWithPluginState<PluginPropsDependency<T, D, 'state'>>;
    options: DTableWithPluginOptions<T, D>;
    data: PluginPropsDependency<T, D, 'data'>;
    emitCustomEvent(event: keyof PluginCustomEvents<T, D>, detail?: PluginCustomEvents<T, D>[keyof PluginCustomEvents<T, D>], target?: DTableEventTarget): void;
    getColInfo: (name: string) => DTableWithPluginColInfo<T, D> | undefined;
    update(options: {dirtyType?: 'options' | 'layout'; state?: Partial<DTableWithPluginState<PluginPropsDependency<T, D, 'state'>>>}, callback?: () => void): void;
} & PluginPropsDependency<T, D, 'methods'>;
export type DTablePluginEvents<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = [], PluginTable = DTableWithPlugin<T, D>> = Partial<MergeIntersectionTypes<{
    [event in DTableHTMLEvent]: DTableEventListener<PluginTable, HTMLElementEventMap[event]>;
} & {
    [event in `window_${DTableHTMLEvent}`]: DTableEventListener<PluginTable, event extends `window_${infer htmlEvent}` ? htmlEvent extends DTableHTMLEvent ? HTMLElementEventMap[htmlEvent] : Event : Event>;
} & {
    [event in `document_${DTableHTMLEvent}`]: DTableEventListener<PluginTable, event extends `document_${infer htmlEvent}` ? htmlEvent extends DTableHTMLEvent ? HTMLElementEventMap[htmlEvent] : Event : Event>;
} & {
    [event in keyof PluginCustomEvents<T, D>]: DTableEventListener<PluginTable, PluginCustomEvents<T, D>[event] extends Event ? PluginCustomEvents<T, D>[event] : Event>;
}>>;
export type DTablePlugin<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = [], PluginTable = DTableWithPlugin<T, D>, Options = DTableWithPluginOptions<T, D>, PluginColSetting = DTableWithPluginColSetting<T, D>, PluginColInfo = DTableWithPluginColInfo<T, D>> = {
    name: DTablePluginName;
} & Partial<{
    when: (options: Options) => boolean;
    requireAfter: DTablePluginName[];
    defaultOptions: Partial<Options>;
    colTypes: Record<string, Partial<PluginColSetting> | PluginColSettingModifier<T, D>>;
    events: DTablePluginEvents<T, D> | ((this: PluginTable) => DTablePluginEvents<T, D>);
    methods: Readonly<T['methods']>;
    i18n?: Record<string, Record<string, string | object>>;
    data: (this: PluginTable) => {} & T['data'];
    state: (this: PluginTable) => {} & T['state'];
    resetState: boolean | ((this: PluginTable, options: Options) => {} & T['state']);
    options: (this: PluginTable, options: Options) => Partial<Options>;
    footer: Record<string, CustomRenderResultGenerator<[layout: DTableLayout], PluginTable> | CustomRenderResultItem>;
    onCreate: (this: PluginTable, plugin: DTablePlugin<T, D>) => void;
    onMounted: (this: PluginTable) => void;
    onUpdated: (this: PluginTable) => void;
    onUnmounted: (this: PluginTable) => void;
    onDestroy: (this: PluginTable) => void;
    onAddCol: (this: PluginTable, col: PluginColInfo) => void;
    beforeLayout: (this: PluginTable, options: Options) => (Partial<Options> | void);
    onLayout: (this: PluginTable, layout: DTableLayout) => (DTableLayout | void);
    onRenderHeaderCell: (this: PluginTable, result: CustomRenderResultList, data: CellInfo<PluginColSetting>, props: CellProps, h: typeof preact.h) => CustomRenderResultList;
    onRenderCell: (this: PluginTable, result: CustomRenderResultList, data: CellInfo<PluginColSetting>, props: CellProps, h: typeof preact.h) => CustomRenderResultList;
    onRender: (this: PluginTable, layout: DTableLayout) => CustomRenderResultItem | void;
    beforeRender?: (this: PluginTable, layout: DTableLayout) => (DTableLayout | void);
    afterRender: (this: PluginTable, firstRender?: boolean) => void;
    onCellClick: (this: PluginTable, event: MouseEvent, data: {rowID: string; colName: string; rowInfo?: RowInfo; element: HTMLElement}) => void | true;
    onHeaderCellClick: (this: PluginTable, event: MouseEvent, data: {colName: string; element: HTMLElement}) => void;
    onAddRow: (this: PluginTable, row: RowInfo, index: number) => void | false;
    onAddRows: (this: PluginTable, rows: RowInfo[], colsLayout: DTableColsLayout) => RowInfo[] | void;
    plugins: (DTablePluginLike | DTablePlugin<T, D>)[];
}>;
export interface DTablePluginComsumer<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = []> {
    plugin: DTablePlugin<T, D>;
    (options?: DTableWithPluginOptions<T, D>): DTablePlugin<T, D>;
}
export interface DTablePluginDefineOptions {
    override?: boolean;
    buildIn?: boolean;
}
```

来源：[src/types/plugin.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/plugin.ts>)。

```ts
export type UnionToIntersection<U>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
export type MergeIntersectionTypes<T> = {
    [key in keyof T]: T[key]
};
export type MergeUnionTypes<U> = MergeIntersectionTypes<UnionToIntersection<U>>;
export type PickPropType<T, P> = P extends keyof T ? T[P] : object;
```

来源：[src/types/helper.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/types/helper.ts>)。

## recipes

本地分页：plugins 加 pager，localPager=true，footPager={}，footer=["pager"]；data 给完整数组。服务端分页：localPager 关闭，在 footPager.onChangePageInfo 获取分页参数并请求数据，render({data,footPager}) 更新。勾选插件 getChecks 返回仍存在于 allRows 的 ID；本地分页时全选默认只作用当前页。

## constraints

插件实例列表在构造时冻结；更换插件集合需重建。表格按固定行高计算虚拟布局，换行内容不自动撑高各行。header-group 会对 cols 数组排序，传可独立修改的列数组。html/custom 富内容按对应渲染器处理，不视为任意不可信 HTML 的净化层。未从 /plugins 导出的源码插件（actions/autoscroll/contextmenu/custom-col/datagrid/draft/editable/filter/history/hotkey/mousemove/moveable/resize/selectable/sort-col/store/toolbar）不能仅据目录名生成包导入；其中某些作为已公开插件的内部依赖自动加载。

## references

- [元数据与入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/src/main.ts>)
- [官网文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/docs/lib/components/index.md>)
- [插件文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/dtable/docs/lib/components/plugins.md>)
