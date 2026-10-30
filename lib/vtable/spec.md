# VTable 实现规格：DTable 功能与接口兼容清单

本文用于实现新的 `@zui/vtable`，不是已经实现的 VTable API 文档。目标是提高大数据表格的效率和交互体验，同时兼容 DTable 的消费方式、选项、类型、实例方法、回调、插件和样式扩展。所有“现状”均来自当前仓库源码；“要求”是替代组件的验收约束；“建议”尚未成为新接口。

分析日期：2026-09-27。源码基线：`3534a90e2f744cb5b4b341abaec2653111444a15`。范围包括 `lib/dtable` 的全部源码、29 个插件目录、样式、开发示例、官网文档，以及仓库内消费与测试。忽略未纳入版本管理的外部 `exts/` 应用；它们的业务使用情况仍需迁移时补充。本文进行了静态源码核对，没有宣称完成 DTable 全功能浏览器验收或性能测量。

导航：[兼容目标](#1-兼容目标与实施边界) · [包入口](#2-包入口与消费契约) · [数据和布局](#3-基础数据选项与布局) · [渲染与方法](#4-渲染扩展回调和核心方法) · [DOM 与样式](#5-dom样式与资源生命周期) · [插件协议](#6-插件机制兼容旧插件的核心协议) · [展示与数据插件](#7-展示数据组织和行勾选插件) · [拖动与列定制](#8-拖动列定制和交互基础插件) · [编辑与电子表格](#9-编辑草稿选区历史与数据网格) · [现有集成](#10-已有集成文档差异与验收覆盖) · [设计改进](#11-新组件应特别评估的设计调整) · [性能与验收](#12-性能实施顺序与最终验收)

## 1. 兼容目标与实施边界

1. **行为兼容**：相同合法输入得到相同数据、布局、交互结果；保持默认值、调用时机、回调 `this`、返回值与拦截语义。不能用“方法同名”代替行为兼容。
2. **接入兼容**：新包提供 VTable 命名；替换旧包时还需保留旧导入、`DTable` 名称、组件注册、Cash 方法、命令作用域、类型别名和插件子路径的适配入口。仅把 `@zui/dtable` 改成 `@zui/vtable`，并不足以让原业务无修改运行。
3. **插件兼容**：旧插件对象、工厂及依赖可以接入；`this.options/state/data/layout`、方法注入、渲染结果和生命周期都属于兼容面。内部可更换渲染与状态机制，但要提供可用的兼容视图。
4. **样式和 DOM 兼容**：业务 CSS、事件代理、插件直接查询的 `.dtable-*`、`data-row`、`data-col` 等需要兼容模式支持；不能只保留 TS 接口。
5. **改进不等于复制缺陷**：下文区分稳定功能、源码存在但未完整交付的能力、错误或不一致。后两类先确定合理语义，用适配、弃用提示和回归用例迁移，不把崩溃、数据丢失或泄漏保留为功能。
6. **实现范围不能缩水**：基础表格、展示插件、交互插件和电子表格组合均纳入清单；分阶段实施可以，但在全部必要验收通过前不能称为完整替代。

阅读顺序：第 2—6 节定义核心及插件协议，第 7 节起逐一列插件；末尾给出问题清单、性能方向、迁移和验收要求。插件章节中的 `this` 默认是内部 Preact 表格或其兼容实例，而不是原生外层包装实例。

## 2. 包入口与消费契约

依据：[package.json](../dtable/package.json)、[主入口](../dtable/src/main.ts)、[原生包装](../dtable/src/vanilla/index.ts)、[Preact 入口](../dtable/src/main-react.ts)、[插件聚合](../dtable/src/plugins/index.ts)。

| 入口或形态 | DTable 现状与兼容要求 |
| --- | --- |
| `@zui/dtable` | 导出原生 `DTable` 及 `types/index.ts` 全部类型；导入组件注册和基础样式。原生包装导入插件聚合，产生插件注册副作用。 |
| `@zui/dtable/react` | 导出 Preact `DTable`、`Cell`、`Cells`、`Block` 及全部核心类型；同名 `DTable` 与主入口的类不同。此入口本身没有导入插件聚合，插件可用性受显式导入和全局注册状态影响。 |
| `@zui/dtable/css` | 基础样式入口；单独插件样式随插件模块导入，不应假定 CSS 入口包含所有插件样式。 |
| `@zui/dtable/plugins` | 导出 `rich / sort / custom / checkable / nested / avatar / sortType / group / headerGroup / cellspan / sortable / pager` 以及相应类型和辅助函数。导出名与注册名见插件章节。 |
| `@zui/dtable/plugins/<name>` | 包声明 `./plugins/` 目录映射，源码提供全部 29 个目录；不是现代 `./plugins/*` 通配映射。新包需对真实打包产物与解析器验证子路径可用性，不照抄旧映射便宣称兼容。 |
| `new DTable(selector, options)` | 选择器、DOM/Cash 等 `Selector` 输入由 ZUI Component 处理；无元素、同元素重复单实例初始化会报错。`DTable.ensure` 用于复用。 |
| `<DTable {...options} ref={ref} />` | Preact 组件，不能改成依赖 React。原生包装的 `instance.$` 暴露该实例；初始化在基类动画帧内完成，`$` 初期可能为 `null`。 |
| ZUI 全局与声明式创建 | UMD/聚合构建里的 `zui.DTable`、`DTable.register()`、`zui-create="dtable"`、旧 `data-zui` 创建链；`z-use-dtable` 是实例关联属性。当前 DTable 没有专属 `WebComponent` 配置，不把真正的 `<z-dtable>` 视为既有能力。 |
| Cash | 类型声明 `$(el).dtable(options): Cash` 与 `.dtable<T>(method, ...args): T`；运行时由 `DTable.defineFn()` 或核心 `defineFn` 安装，`register()` 本身不等于安装 Cash 方法。优先调用包装实例方法，否则访问 `instance.$`；无返回值时返回 Cash，有返回值时返回最后一个结果。 |
| 预设及构建 | 现有角色 `zui.type='js-ui'`、贡献 `css.class/css.var/js.component`。保留 ESM、UMD、CSS、声明文件、按库组合构建和 Cash 外置消费；新包实现后按实际产出设置元数据。 |

### 2.1 原生实例、基类与命令

原生包装不是内部表格的透明代理。调用方式例如 `table.render({data})` 更新外层选项，`table.$?.scroll({to: 'bottom'})` 操作表格。`table.on` 是 ZUI 包装事件，`table.$.on` 是插件/DOM 事件系统，二者不可混淆。

继承契约依据：[ComponentFromReact](../core/src/react/component-from-react.ts)、[Component](../core/src/component/component.ts)、[ComponentOptions](../core/src/component/types/component-options.ts)、[创建器](../core/src/component/creator.ts)。

- 实例：`$`、`element`、`$element`、`options`、`inited`、`destroyed`、`gid`、`key`、`namespace`、`$emitter`、`i18nData`；`render(options?, reset?)`、`setOptions(options?, reset?)`、`resetOptions(options?)`、`destroy()`、`autoDestroy(delay=100)`、`on/one/off/emit`、`i18n`。`render(..., true)` 调用内部 `resetState`；只 `setOptions` 不负责触发渲染。
- 静态：`NAME='DTable'`、`Component`、`DEFAULT`、`KEY='zui.DTable'`、`NAMESPACE='.zui.dtable'`、`DATA_KEY='data-zui-DTable'`、`ATTR_KEY='z-use-DTable'`、`SELECTOR`、`get/ensure/getAll/query/isValid/register/defineFn/renderHTML` 及继承注册机制；HTML DOM 中属性名会被规范为小写，但 Cash data 的 KEY 保留大小写。具体参数保持对应基类契约，不另造不兼容版本。
- 通用选项：`key/lang/i18n/$optionsFromDataset/$reset/$notDestroyOnDetach/$options/$fetcher/$onCreate/$onInited/$onDestroy/$class/$style/$replace`。保留 dataset 合并、远端选项获取、初始化/销毁回调；不能把 `$fetcher` 误认为 DTable 的异步行数据接口。
- `setOptions` 自动将未指定的 `parent` 设为容器元素。
- `commandScope` 默认 `'dtable'`。`executeCommand(context: CommandContext | string, params: unknown[] = [])`：先找 `commands['scope~name']` 或 `commands[name]`，命中直接返回；否则在无 scope 或 scope 匹配时 `deepCall(this.$, name, params)`；最后若有 `onCommand`，其返回值覆盖此前结果。`commands/onCommand` 的 `this` 是包装实例。
- `afterInit` 仅当有 `commands` 或 `onCommand` 时调用 `bindCommands`；保留通过按钮等命令触发表格/插件方法的链路。
- `DTable.definePlugin`、`removePlugin`、静态 `getPlugin`、`plugins` 模块对象属于原生类；Preact 类静态是 `addPlugin/removePlugin`。内部实例 `getPlugin(name)` 仅查当前激活插件。
- 核心 Cash `.zui('dtable')` 查询包装实例；`.zuiCall('DTable.render', [options])` 只调用包装方法并返回 Cash，不像 `.dtable('method')` 自动回退到内部 `$`。保留查询、命令、专属 Cash 方法各自的分工。

### 2.2 核心公开类型清单

以下类型由主入口和 `/react` 导出，迁移时保留名称或提供旧名称别名；精确定义以链接为准，不只保留 `DTableOptions`：

| 来源 | 导出 |
| --- | --- |
| [options.ts](../dtable/src/types/options.ts) | `DTableDataOptions`、`DTableLayoutOptions`、`DTableStyleOptions`、`DTableCallbackOptions`、`DTableOptions<C>` |
| [col.ts](../dtable/src/types/col.ts) | `ColName`、`ColFlexGrow`、`ColFlex`、`ColFixedSide`、`ColSide`、`ColInfoLike`、`ColBorderType`、`ColInfo<S>`、`ColSetting<S>` |
| [row.ts](../dtable/src/types/row.ts) | `RowID`、`RowPropName`、`RowPropValue`、`RowData`、`RowInfoLike`、`RowInfo` |
| [cell.ts](../dtable/src/types/cell.ts) | `CellInfo<C>`、`CellRenderCallback<C>`、`CellValueGetter`、`CellProps`、`CellsProps` |
| [layout.ts](../dtable/src/types/layout.ts) | `DTableColsSectionLayout`、`DTableColsLayout`、`DTableLayout` |
| [dtable.ts](../dtable/src/types/dtable.ts) | `DTableState`、`DTableHTMLEvent`、`DTableEventListener`、`DTableEventTarget`、`DTablePointerInfo` |
| [common.ts](../dtable/src/types/common.ts)、[block-props.ts](../dtable/src/types/block-props.ts) | `ClassNameLike`、`CustomRenderResultItem`、`CustomRenderResult`、`CustomRenderResultGenerator`、`CustomRenderResultList`、`BlockProps` |
| [helper.ts](../dtable/src/types/helper.ts) | `UnionToIntersection`、`MergeIntersectionTypes`、`MergeUnionTypes`、`PickPropType` |
| [plugin.ts](../dtable/src/types/plugin.ts) | `DTablePluginName`、`DTablePluginLike`、`DTablePluginTypes`、`DTablePluginDefineOptions`、`DTablePlugin`、`DTablePluginComsumer`（历史拼写）、`DTablePluginEvents`、`DTableWithPlugin`、`DTableWithPluginColSetting`、`DTableWithPluginState`、`DTableWithPluginOptions`、`DTableWithPluginColInfo`、`PluginColSettingModifier`、`PluginPropsDependency`、`PluginCustomEvents` |
| [cash.ts](../dtable/src/types/cash.ts) | 对 `cash-dom.Cash` 的 `dtable` 重载扩展 |

聚合发布另外有 `DTableBlockProps`、`DTableCustomRenderResult`、`DTableCustomRenderResultGenerator`、`DTableCustomRenderResultList` 别名，见 [npm-types.ts](../../scripts/build/npm-types.ts)。替换时不能破坏聚合包中解决同名冲突的类型映射。

## 3. 基础数据、选项与布局

依据：[选项类型](../dtable/src/types/options.ts)、[默认值](../dtable/src/helpers/default-options.ts)、[布局计算](../dtable/src/helpers/layout.ts)、[组件实现](../dtable/src/components/dtable.tsx)。本节默认值是基础默认值；插件可在用户 props 之前叠加默认值或在之后修改选项。

### 3.1 数据和基础选项

| 选项 | 类型 / 默认值 / 行为 |
| --- | --- |
| `cols` | `ColSetting[]`，默认 `[]`；类型上必填。 |
| `data` | `(RowData \| string)[] \| number`，默认 `[]`；对象数组、行 ID 数组或行数。数字 N 产生字符串 ID `0..N-1` 的占位行。 |
| `rowKey` | `string`，默认 `'id'`；对象的主键经字符串化，缺失变成空字符串，不自动生成唯一业务 ID。 |
| `rowConverter` | `(row: RowData, index: number) => RowData`；转换每条原始/占位数据，`this` 为表格。ID 在转换前已确定。 |
| `rowDataGetter` | `(ids: string[]) => RowData[]`；可见 lazy 行同步取数，现状实际每行传 `[id]` 并用 `[0]`，完成后清除 lazy 标记；没有 Promise、取消、错误或 loading 协议。 |
| `cellValueGetter` | `(row: RowInfo, col: ColInfo, originValue: unknown) => unknown`；`this` 为表格，表头同样调用；插件草稿可覆盖此函数。 |
| `id` | 默认 `dtable-${nextGid()}`；构造时确定，后续 props 更新不会重设。 |
| `parent` | `HTMLElement`；用于百分比尺寸、响应式观察，内部回退根元素父级。 |
| `lang/i18n` | `string` 与语言字典；用户字典与激活插件字典交给核心 `i18n`，缺失时回退默认值或 `{i18n:key}`。 |
| `className/style` | `ClassNameLike` / `Record<string, string \| number>`，作用于内部根节点；布局计算最终覆盖根宽高和行/表头高度变量。 |
| `plugins` | `DTablePluginLike[]`；构造时解析并冻结列表，之后 `render({plugins})` 不会重新安装插件集合。 |
| `commandScope/onCommand/commands` | 由原生包装处理，见 2.1；不是内部组件自动支持的命令绑定。 |
| 扩展属性 | `DTableOptions` 有 `[prop: string]: unknown`；不能因未知选项将旧插件参数丢弃。 |

### 3.2 布局与外观选项

| 选项 | 类型与默认值 | 行为 |
| --- | --- | --- |
| `width` | `number \| '100%' \| (this => number \| '100%')`；`'100%'` | 数字是像素，非负有限值；百分比取 `parent.clientWidth`。不是任意 CSS 长度。 |
| `height` | `number \| '100%' \| 'auto' \| {min:number;max:number} \| (actualHeight => number \| 'auto' \| {min;max})`；`'auto'` | `actualHeight=行总高度+表头+表尾`；auto 展示全部行，`100%` 取父高，min/max 约束整体高度。 |
| `rowHeight` | `number=35` | 统一行高；非有限值或非正数回退 35。没有内置可变行高。 |
| `defaultColWidth/minColWidth/maxColWidth` | `80 / 24 / 9999` | 列宽缺省及初次计算的边界。 |
| `fixedLeftWidth/fixedRightWidth` | `number \| 'auto' \| 百分数字符串 \| (()=>number)`；未设 | 固定区总宽；auto/缺省按内容宽度，百分数按表格总宽。 |
| `header` | `boolean \| 自定义渲染对象/数组/生成器`；`true` | true 产生普通表头，false 隐藏；自定义沿用 CustomRender。 |
| `footer` | `boolean \| 自定义结果数组 \| (layout=>结果数组)`；`undefined` | 可用插件 footer 命名生成器；`true` 本身不代表自动分页或汇总。 |
| `headerHeight/footerHeight` | `number=0` | 对应区域开启时，非正数或非法值回退 rowHeight；关闭区域为 0。 |
| `partialRender` | `boolean`，使用处默认 `true` | 行窗口化；false 渲染全部行。auto 高度无滚动窗口，也会渲染全部行。 |
| `responsive` | `boolean \| string=false` | true 等价 `'window,parent'`；逗号分隔 window、parent、CSS selector 或 `~事件名`。通过 ResizeObserver 和 resize 触发布局更新。 |
| `scrollbarHover` | `boolean=true` | 滚动条悬停显示。 |
| `scrollbarSize` | `number`，使用处默认 **12** | 旧官网写 10，与实现不符。 |
| `horzScrollbarPos` | `'inside' \| 'outside'='outside'` | 相对于表体底部/表尾上方放置水平条，不增加计算后的总高度。 |
| `vertScrollbarPos` | `'inside' \| 'outside'`，未设等价 inside | 垂直条仅覆盖表体高度。 |
| `emptyTip` | `CustomContentType`；未设 | rows 为空且值为真时显示 CustomContent，移除根固定高度，替代表头/表体/表尾/滚动条，插件 onRender 仍可追加内容。 |
| `rowHover/colHover/cellHover` | `true / false / false` | `colHover` 还可为 `'header'`，仅表头触发整列高亮。 |
| `bordered/striped` | `false / true` | 完整边框 / 按展示行索引奇偶绘制背景。 |

### 3.3 列定义与布局语义

`ColSetting<S>` = 插件扩展 S + 必填 `name: string` + 下列可选字段；允许任意扩展字段与 `data-*` 字段。来源：[col.ts](../dtable/src/types/col.ts)。

| 字段 | 类型 / 语义 |
| --- | --- |
| `title/type` | `string`；表头值 / 插件列类型，type 缺省 `''`。 |
| `width/minWidth/maxWidth` | width 为数字或百分数字符串；百分比基于整个表格宽度；边界继承表格默认值。 |
| `flex` | `boolean \| number`，true 转为权重 1，false 转 0。中心区有剩余宽度时分配额外宽度；没有 flex 列时现实现平分给所有中心列。 |
| `fixed` | `'left' \| 'right' \| false`；默认 false，分别进入左/中/右区。 |
| `order` | `number`；各区及总列表按 `order ?? 输入索引` 排序。 |
| `hidden` | `boolean`；排除列，不进入列 map/list。 |
| `border` | `'left' \| 'right' \| boolean`；true 两侧边框。 |
| `align` | `'left' \| 'center' \| 'right'`；内容 flex 对齐。 |
| `cellStyle/cellClass` | 内容容器样式/类，现实现同时用于表头和表体。 |
| `className` | 外层单元格类。 |
| `style/data/colHover/data-*` | 类型中存在；核心 Cell 不直接消费列 style、data、colHover 或自动展开 data-*。插件可能消费；不能依据文档把这些全当成已实现的列能力。 |
| `onRenderCell` | `CellRenderCallback`；列级渲染优先于插件和全局。列 `onRenderHeaderCell` 运行时支持，但没有专属强类型字段，仅受索引签名容纳。 |

布局细节必须加入边界验收：先列默认值，再依插件顺序应用 `colTypes[type]`，用户列设置在每次合并中重新覆盖；之后执行各插件 `onAddCol`。`ColInfo.index` 保留原始输入索引，`sideIndex` 是该区排序后的索引；二者与 `cols.list` 的当前位置不一定一致。

固定区可按显式总宽缩小，显式宽度超过内容总宽时会被限制回内容宽度；右区先计算，左区尝试给中心保留 `max(40,minColWidth)`。中心只对正剩余空间扩展，内容溢出时横向滚动。旧 README 的“非固定列必须至少一个 flex”不是代码强制条件。分配 `realWidth` 后没有再次执行每列 min/max 约束；超窄容器、全部固定列和舍入溢出须作为改进场景。

### 3.4 行、单元格与布局对象

这些对象被插件直接读取和修改，属于实质扩展协议：

- `RowInfo = {id: string; index: number; top: number; data?: RowData; lazy?: boolean | 'resolved'}`。`allRows` 保存输入行；`rows` 是 `onAddRows` 等变换后的展示行；展示行重新赋 `index/top`。隐藏/过滤后的字符串 ID 查询会回退 `allRows`；数字查询只访问当前 rows。两数组可共享 RowInfo 引用。
- `RowInfoLike = string | number | RowInfo`。**数字表示展示索引，字符串表示业务 ID**；`-1` 或 `'HEADER'` 是合成表头行。`HEADER` 是保留值，业务 ID 不应冲突。
- `ColInfo = {name,type,flex,width,realWidth,left,setting,visible,index,side,sideIndex,order?,border?}`；`side` 为 left/center/right。`ColInfoLike = string | number | ColInfo`；数字为 cols.list 位置，字符串为列名。
- `CellInfo = {value: unknown; row: RowInfo; col: ColInfo}`。`getCellValue` 表头读取 title，表体读取 row.data[col.name]，再执行 cellValueGetter。
- `DTableState` 基础为 `{scrollTop:0, scrollLeft:0, renderCount:0}`，允许插件扩展；`data` 是可变插件数据容器，不等于行数据。
- `DTableColsSectionLayout = {list, flexList, width, widthSetting, totalWidth}`；`DTableColsLayout = {map,list,left,center,right}`。
- `DTableLayout` 包括 `options,width,height,rowHeight,rowsHeight,rowsHeightTotal,allRows,rows,rowsMap,cols,header,footer,footerGenerators,headerHeight,footerHeight,visibleRows,scrollTop,scrollLeft`，以及 `className/headerChildren/bodyChildren/footerChildren/children/scrollable` 渲染扩展槽。后六项每次取布局时重置；插件须在正确阶段写入，不能依赖跨帧残留。
- 视窗行区间为 `[floor(scrollTop/rowHeight), ceil((scrollTop+rowsHeight)/rowHeight))`，无 overscan。中心列计算 `visible`，但 Block/Cells 当前未据此过滤列；固定区与中心区所有列都参与可见行渲染。
- 占位 lazy 行进入可见范围才同步取数；排序、nested 等前置阶段可能已读取占位数据。因此数据加载与排序/树/编辑组合必须额外验证。

## 4. 渲染扩展、回调和核心方法

### 4.1 回调及执行顺序

除命令回调外，下表 `this` 均为内部表格。类型来源：[options.ts](../dtable/src/types/options.ts)、[cell.ts](../dtable/src/types/cell.ts)；行为来源：[dtable.tsx](../dtable/src/components/dtable.tsx)。

| 回调 | 签名 / 时机 / 返回语义 |
| --- | --- |
| `onAddRow` | `(row: RowInfo, inputIndex: number) => void \| false`；先用户、后插件；false 停止该行后续回调，**不移除已经加入 allRows 的行**。 |
| `onAddRows` | `(rows: RowInfo[], colsLayout: DTableColsLayout) => RowInfo[] \| void`；先用户再各插件串联，返回数组替换展示集合；用于排序、层级等。 |
| `onLayout` | `(layout: DTableLayout) => DTableLayout \| void`；先用户再插件，返回对象通过 Object.assign 合并到已有 layout。 |
| `beforeRender` | `(layout) => DTableLayout \| void`；先用户再插件；返回值替换本次渲染变量，不等同于自动替换所有 `this.layout` 引用。 |
| `onRenderCell/onRenderHeaderCell` | `(result: CustomRenderResultList, cell: CellInfo, props: CellProps, h: typeof preact.h) => CustomRenderResultList`；初始 result[0] 为 getCellValue；列 → 插件 → 全局顺序传递返回值。每个回调异常被记录后继续。 |
| `afterRender` | `(firstRender?: boolean) => void`；插件先于用户，首次 true，后续 false。 |
| `onScroll` | `(info: {scrollTop?:number;scrollLeft?:number}) => void`；只给实际变化轴，在 state 更新完成后调用；随后执行 scroll 的完成回调。 |
| `onCellClick` | `(event: MouseEvent, {rowID,colName,rowInfo?,element}) => void \| true`；用户先于插件，true 停止后续单元格点击回调；不等于 DOM preventDefault。 |
| `onHeaderCellClick` | `(event: MouseEvent, {colName,element}) => void`；用户先于所有插件，无 true 拦截逻辑。 |

没有独立实现 `onRowClick`。旧官网列出它不构成源码支持证据；行级业务通常通过 `onCellClick` 或插件事件实现。

### 4.2 自定义内容协议

来源：[Cell](../dtable/src/components/cell.tsx)、[CustomRender](../core/src/react/components/custom-render.tsx)。保留不同场景的协议差异：

- 单元格回调返回数组，可含 Preact VNode、文本、数字或 `{html,className,style,attrs,children,tagName,outer}`。不含 truthy html 时，`outer` 将 class/style/attrs/children 施加于外层单元格，否则施加于内容容器；`tagName` 可更换内容标签。含 truthy html 时另建 `.dtable-cell-html` 包装，class/style/attrs 施加于该包装，outer 只决定包装放在外层还是内容层。`html` 使用原始 HTML 渲染，不进行自动净化。
- 单元格的对象内容与普通 VNode 必须正确区分，支持多次回调累积样式/属性/子节点。仅返回 void 不等于保持原结果，旧回调协议要求返回数组。
- 表头/表尾使用通用 CustomRender，支持 `(result, layout)` 生成器、对象、节点以及 footer 命名生成器；`footer` 顶层函数先以 `(layout)` 调用，再交给 CustomRender，不能与列表项生成器混淆。
- 基础 footer 命名项 `flex`、`divider`；插件可加入/覆盖命名项。其实际生成参数是 layout，旧部分类型写成 `[table,layout]`，应修正类型并保留真实调用行为。
- 通用 CustomRender 还接受 `__html`，用于根节点的 dangerouslySetInnerHTML；列表项生成器可修改传入 result 并返回 void；未知 footer 字符串作为普通文本。Cell 不具有同样的 `__html` 或生成器执行分支，不能把两种协议直接混为一体。
- `emptyTip` 使用较新的 `CustomContent`。核心 `CustomRender*` 已标记 deprecated，但旧插件依赖它；可内部复用 CustomContent，必须适配旧对象和回调协议。
- `/react` 导出的 `Cell/Cells/Block` 本身也可被外部使用。保留 [CellProps/CellsProps](../dtable/src/types/cell.ts) 的位置尺寸、class/style、outerClass/outerStyle、children、渲染回调、`CellComponent` 替换，以及 [BlockProps](../dtable/src/types/block-props.ts) 的三区布局、滚动、子节点槽。

### 4.3 内部表格实例公开方法

以下方法由 Preact ref 或原生 `instance.$` 使用：

| 方法/属性 | 契约 |
| --- | --- |
| `options/plugins/layout/id/data/element/parent/hoverInfo/ref/state/props` | options 优先返回布局阶段 options；plugins 为激活列表；layout 挂载前可能尚未建立；element 可为 null；hoverInfo 为 `{in,row?,col?}`。 |
| `scroll(info, callback?) => boolean` | info：`scrollLeft?/scrollTop?/offsetLeft?/offsetTop?` 或 `to: 'up'\|'down'\|'bottom'\|'top'\|'left'\|'right'\|'begin'\|'end'`；返回是否实际滚动，callback 绑定 this 并收到同一 boolean。clamp 到合法范围，忽略非有限值。up/down 按可见整行页高，left/right 按中心视口宽；top/bottom 垂直到边，begin/end 水平到边。offset 覆盖同轴绝对值。 |
| `getColInfo(col?: ColInfoLike) => ColInfo \| undefined` | 对象原样返回、数字按 cols.list、字符串按 cols.map。 |
| `getRowInfo(row?: RowInfoLike) => RowInfo \| undefined` | 对象原样返回；-1/HEADER 表头；数字按 rows；字符串 rowsMap 后回退 allRows。 |
| `getRowInfoByIndex(index) => RowInfo \| undefined` | 直接 rows[index]，没有 HEADER 特判。 |
| `getCellValue(row, col) => unknown` | 两个参数各接受对象/ID或名/索引，无效时 undefined。 |
| `getPointerInfo(event) => DTablePointerInfo \| undefined` | `{cellElement,colName,rowID,target}`；通过最近 `.dtable-cell` 和 data 属性定位，`.no-cell-event` 排除。 |
| `update(options?, callback?) => void` | options 为 `{dirtyType?:'options'\|'layout';state?:Partial<DTableState>\|stateUpdater}` 或直接 callback；不传 state 则增 renderCount。layout dirty 清布局；options dirty 同时清选项和布局。不是传入业务选项的 render 替代品。 |
| `updateLayout() => void` | RAF 合并请求；元素存在且未脱离文档时执行 layout dirty 更新。 |
| `resetState(props?, _init?) => void` | 清选项与布局缓存，只重置声明 resetState 的激活插件状态；不自动把基础滚动归零。 |
| `getPlugin(name) => DTablePlugin \| undefined` | 当前激活列表查询；与原生静态全局注册表查询不同。 |
| `on(event, callback, target?) / off(event, callback, target?)` | target 为 `''/'window'/'document'`，也支持事件名 `window_.../document_...`。callback 返回 false 时 stopPropagation、preventDefault 并终止内部回调链。 |
| `emitCustomEvent(event, detail?) => void` | 直接调用内部事件分发；detail 已是 Event 时复用，否则包装 CustomEvent。不 dispatchEvent 到 DOM；类型扩展声明的第三个 target 参数没有实际实现。 |
| `disableAnimation(delay=200)` | 添加 `no-animation`，重设计时器，结束后移除。 |
| `i18n(key, defaultValue?)` / `i18n(key, args?, defaultValue?) => string` | args 为数组或命名参数对象；字典组合见 3.1。 |
| `setState/forceUpdate` | 旧插件大量直接调用 Preact 实例方法；新架构必须提供适配的更新和 callback 时机，不能只暴露新的 signals。 |

还有可被 JS 访问但以 `_` 表达内部用途的 `_id/_rafId/_needRender/_options/_allPlugins/_plugins/_lastUsedPlugins/_layout/_events/_data/_rob/_i18nMaps/_hover/_noAnimation/_firstRender`、`_checkPluginsState()`，以及 Preact 生命周期方法。它们不是建议新增的 VTable 公开 API。第三方插件若直接使用这些字段，迁移盘点必须记录并提供必要适配或明确替代方式；本文对外兼容承诺不等于要求新内核照搬所有私有存储结构。

键盘基础处理 PageUp/PageDown/Home/End；源码将 Home 映射成 `home`，但 scroll 没有此值，End 则对应水平 end。这是现有缺陷，应建立明确键盘契约，不照抄失效行为。根节点 `tabIndex=-1`，现有通用 grid 语义和完整焦点导航不足，见改进清单。

## 5. DOM、样式与资源生命周期

来源：[基础样式](../dtable/src/style/index.ts)、[vars.css](../dtable/src/style/vars.css)、[渲染组件](../dtable/src/components/index.ts)。

- 基础结构：`.dtable > .dtable-header/.dtable-body/.dtable-footer`；各 Block 下 `.dtable-cells.dtable-fixed-left/.dtable-scroll-center/.dtable-fixed-right` → `.dtable-cells-container` → `.dtable-cell` → `.dtable-cell-content`，原始 HTML 使用 `.dtable-cell-html`。没有原生 `<table>/<tr>` 行节点。
- 单元格属性：`data-col`、`data-row`、`data-type`；表头 `data-row='HEADER'`。插件通过这些标记做事件命中、框选、编辑器定位和拖拽，迁移不能无提示删除。
- 状态类：`dtable-hover-row/col/cell`、`dtable-hover`、`dtable-bordered`、`dtable-striped`、`scrollbar-hover`、`no-animation`、`dtable-is-empty`、`dtable-has-scroll-y`、`dtable-scrolled-down/bottom/right/end`；单元格 `is-odd-row/is-even-row/is-first-in-row/is-last-in-row/is-first-row/is-last-row/is-hover-row/is-hover-col/has-border-left/has-border-right`。首末行是当前渲染窗口中的首末行，不一定是全数据首末行。
- 基础变量：`--dtable-bg`（canvas）、`--dtable-striped-bg`（gray-50）、`--dtable-hover-bg`（primary 5%）、`--dtable-header-bg`（surface）、`--dtable-footer-bg`（surface）、`--dtable-border-color`（border）、`--dtable-sorter-size`（0.3125rem），动态 `--dtable-row-height/--dtable-header-height`；还受 Scrollbar 的 `--scrollbar-*` 变量控制。插件额外类与变量见各自 CSS。
- 保留固定两侧遮挡层级、边界分割线、滚动阴影、排序图标、内容截断、完整边框和空态行为；新外观可增量升级，默认视觉差异须明确验收。
- 卸载：断开 ResizeObserver，移除根/window/document 原生事件，激活插件 onUnmounted、全部已解析插件 onDestory，清理 data/events/动画 timeout/布局 RAF；包装销毁要卸载完整 Preact 树并清除 Component 注册。
- 响应式和 hover 监听目前主要在首次挂载时设置；动态变更对应选项不会完整重建监听。VTable 应正确支持动态选项变化，不要求继承这一限制。

## 6. 插件机制：兼容旧插件的核心协议

来源：[插件类型](../dtable/src/types/plugin.ts)、[注册与解析](../dtable/src/helpers/shared-plugins.ts)、[生命周期与执行管线](../dtable/src/components/dtable.tsx)。

### 6.1 注册、工厂和依赖

- `addPlugin(plugin, {override?, buildIn?}?)`：按 name 全局注册，同名且未 override 抛错；buildIn 将名称加入默认列表。`removePlugin(name): boolean` 删除注册 map，但未从 buildIn 名单移除，也不会卸载既有实例。
- `definePlugin<T,D>(plugin, defineOptions?) => DTablePluginComsumer<T,D>`：立即注册；返回带 `.plugin` 属性的可调用工厂。`consumer()` 返回原定义；`consumer(options)` 返回复制的插件定义，仅把 options 合并进 defaultOptions。必须保留历史 `Comsumer` 与 `buildIn` 拼写；新正确别名可并存。
- `DTablePluginLike = string | DTablePlugin | DTablePluginComsumer`。字符串查全局注册，未知名称警告并跳过；工厂参数本身读取 `.plugin`，不是任意懒函数。
- 先插入 buildIn 名单，再用户声明；递归安装 `plugin.plugins` 依赖，按 name 去重，先遇到的定义获胜。`requireAfter` 只调整已存在插件的相对顺序，不负责安装依赖；当前是一次数值排序，不是完整拓扑排序。
- 解析集合 `_allPlugins` 在构造时固定；激活列表 `_plugins` 由 `when(options)` 决定。后续 options 更新可切换 when，但不能替换插件集合。
- 默认选项合并：基础默认 → 全部已解析插件的 defaultOptions（后者覆盖前者）→ 用户 props → 全部插件 options 修饰器 → when 过滤。**未激活插件也可能修改 options、注入 methods/data/state**，适配时不可简单跳过。
- 核心类型把插件 `state/options/data/methods/col/events` 合并到实例；`PluginPropsDependency` 仅展开前 10 个直接依赖类型，不代表运行时依赖链只有十个。

### 6.2 插件定义字段全集

`name: string` 必填，其余可选：

| 字段 | 协议 |
| --- | --- |
| `when(options)` | 决定激活，运行时 this 绑定表格。 |
| `plugins / requireAfter` | 递归依赖 / 现有插件排序约束。 |
| `defaultOptions / options(options)` | 初始缺省 / 返回 Partial<Options> 合并修改；不是不可变管线。 |
| `methods` | 方法注入并 bind(this)，同名后者覆盖前者及已有成员，无碰撞保护。 |
| `data() / state()` | 每实例初始化对象，顺序 Object.assign，共享顶层命名空间；即使 when=false 也初始化。 |
| `resetState` | true 时复用 state()；函数时以新 props 为参数计算该插件重置状态；不自动清 data。 |
| `i18n` | 激活插件的语言字典。 |
| `colTypes` | 类型名 → 默认列设置或 `(colSetting)=>Partial<ColSetting> \| undefined`；可叠加多个插件处理同类。 |
| `events` | 事件映射或 `()=>映射`；DOM、window_、document_ 和插件自定义事件，共享 on/off 系统。 |
| `footer` | 命名 footer 生成器或渲染对象，可覆盖基础 flex/divider。 |
| `onCreate(plugin)` | 仅构造时对当时激活插件调用。 |
| `onMounted/onUpdated/onUnmounted/onDestory` | 挂载/更新/停用或卸载/最终销毁；`onDestory` 拼写必须兼容。 |
| `beforeLayout(options)` | 返回 Partial<Options>，仅布局阶段形成派生 options；激活判断此前已完成。 |
| `onAddCol(col)` | 列已规格化后，可修改 ColInfo；类型 default modifier 已处理。 |
| `onAddRow/onAddRows/onLayout` | 与核心回调签名相同；用户回调通常先于插件。 |
| `beforeRender(layout)` | 可返回替代 layout；也可向 layout 子节点槽写入。 |
| `onRenderCell/onRenderHeaderCell` | `(result, cell, props, h)=>结果数组`，串联执行。 |
| `onRender(layout)` | 返回 `CustomRenderResultItem \| void`；核心这里只消费 style/className/children，不处理任意 attrs/html。 |
| `afterRender(firstRender?)` | DOM 提交后，先插件后用户。 |
| `onCellClick/onHeaderCellClick` | 同核心回调；表体 true 可拦截，表头没有同样逻辑。 |

### 6.3 必须保留的生命周期顺序

1. 构造：基础 state → 依赖解析 → **所有**插件 methods/data/state → options 修饰与 when → 激活插件 onCreate。
2. 布局：激活插件 beforeLayout 与 footer 汇总 → 列创建（colTypes/onAddCol）→ 原始行转换、用户/插件 onAddRow → 用户/插件 onAddRows → 展示索引和尺寸 → 用户/插件 onLayout。
3. 每次渲染：滚动范围收敛、可见行加载、清渲染槽 → 用户/插件 beforeRender → 创建头/体/尾 VNode（footer 顶层函数此时调用）→ 插件 onRender → Preact 渲染子组件时调用 Cell/CustomRender 回调 → DOM 提交 → 插件/用户 afterRender。创建区域 VNode 不等于已经执行单元格回调。
4. 首次挂载通常在 afterRender 后注册基础监听、检查激活插件并安装 events、调用 onMounted；若首轮缺少父元素尺寸、`_needRender=true`，会先请求 forceUpdate，实际 afterRender 延后，监听安装与 onMounted 仍继续。后续更新：afterRender → 激活变化检查 → 激活插件 onUpdated。
5. 停用：调用 onUnmounted；当前实现没有自动解绑该插件 events，重新启用可能重复绑定。新实现应修复，兼容的是生命周期意图而不是泄漏。
6. 整体卸载：激活插件 onUnmounted → 所有解析插件 onDestory → 清理资源。

### 6.4 29 个插件的覆盖索引

“聚合”表示由 `/plugins` 汇出；“默认”只表示模块加载后注册为 buildIn，不表示全功能无条件开启。依赖插件可能被间接导入注册，但没有聚合导出名。

| 源目录 | 导出工厂 / 注册名 | 聚合 / 默认 | 功能 |
| --- | --- | --- | --- |
| rich | `rich / rich` | 是 / 是 | 富文本、链接、格式、进度 |
| sort-type | `sortType / sort-type` | 是 / 是 | 排序标记和链接 |
| avatar | `avatar / avatar` | 是 / 是 | 头像列 |
| custom | `custom / custom` | 是 / 否 | 自定义组件列 |
| checkable | `checkable / checkable` | 是 / 否 | 行复选 |
| nested | `nested / nested` | 是 / 否 | 树层级、折叠与联动 |
| group | `group / group` | 是 / 否 | 列分组边界 |
| header-group | `headerGroup / header-group` | 是 / 否 | 两层分组表头 |
| cellspan | `cellspan / cellspan` | 是 / 否 | 合并单元格 |
| sort | `sort / sort` | 是 / 是 | 本地按列排序 |
| sortable | `sortable / sortable` | 是 / 否 | 行拖拽排序 |
| pager | `pager / pager` | 是 / 否 | 分页条与统计 |
| actions | `actions / actions` | 否 / 否 | 操作按钮列 |
| filter | `filterable / filterable` | 否 / 否 | 筛选界面，尚未完整实现过滤 |
| toolbar | `toolbar / toolbar` | 否 / 否 | 底部工具栏 |
| resize | `resize / resize` | 否 / 否 | 列宽拖拽 |
| sort-col | `sortCol / sort-col` | 否 / 否 | 列重排 |
| custom-col | `customCol / custom-col` | 否 / 否 | 列自定义状态 |
| mousemove | `mousemove / mousemove` | 否 / 否 | RAF 合并鼠标事件 |
| autoscroll | `autoscroll / autoscroll` | 否 / 否 | 拖拽边缘自动滚动 |
| moveable | `moveable / moveable` | 否 / 否 | 鼠标拖动平移表格 |
| selectable | `selectable / selectable` | 否 / 否 | 单元格框选、范围与网格取数 |
| editable | `editable / editable` | 否 / 否 | 单元格输入编辑 |
| draft | `draft / draft` | 否 / 否 | 草稿与提交 |
| history | `history / history` | 否 / 否 | 撤销、重做和持久化 |
| store | `store / store` | 否 / 否 | 实例存储 |
| hotkey | `hotkey / hotkey` | 否 / 否 | 快捷键绑定 |
| contextmenu | `contextmenu / contextmenu` | 否 / 否 | 上下文菜单 |
| datagrid | `datagrid / datagrid` | 否 / 否 | 电子表格组合 |


## 7. 展示、数据组织和行勾选插件

本节以当前源码行为为基线。`内置`表示 `definePlugin(..., {buildIn: true})`，不等同于插件已导入注册：非内置插件需出现在 `plugins` 中；字符串引用还要求相应模块已加载。以下插件没有自行声明 DOM 自定义事件，列出的变更通知均是选项回调或子组件回调。未写默认值的选项均为 `undefined`，不要补成未经实现的默认值。

| 模块／导出变量 | 注册名 | 内置 | 激活条件／依赖 |
| --- | --- | --- | --- |
| `checkable` | `checkable` | 否 | `checkable` 默认为 `'auto'`，自动检查是否存在 truthy `col.checkbox`；显式布尔值或 `state.forceCheckable` 覆盖 |
| `nested` | `nested` | 否 | `nested` 默认为 `'auto'`，自动检查 `col.nestedToggle`；运行时依赖 `store`，`requireAfter: ['sortable']`；类型还组合 sortable/checkable |
| `group` | `group` | 否 | `groupDivider: true` |
| `sort` | `sort` | 是 | `sort: false`，需主动启用 |
| `sort-type`／`sortType` | `sort-type` | 是 | `sortType: true` 且 `!options.sort` |
| `filter`／`filterable` | `filterable` | 否 | `filterable: true`；仅有实验性过滤菜单，没有完成过滤链路 |
| `pager` | `pager` | 否 | 没有 `when`，加载后激活；显示分页器需 `footPager` 以及 footer 中的 `'pager'` |
| `header-group`／`headerGroup` | `header-group` | 否 | `headerGroup: true` |
| `cellspan` | `cellspan` | 否 | 存在 `getCellSpan` |
| `rich` | `rich` | 是 | 无 `when` |
| `avatar` | `avatar` | 是 | 无 `when` |
| `actions` | `actions` | 否 | 无 `when` |
| `custom` | `custom` | 否 | 无 `when` |

`rich`、`sort`、`custom`、`checkable`、`nested`、`avatar`、`sortType`、`group`、`headerGroup`、`cellspan`、`pager` 从 [plugins/index.ts](../dtable/src/plugins/index.ts) 聚合导出，也进入 Vanilla `DTable.plugins`；`actions`、`filterable` 未在该聚合入口导出，当前需要子路径导入后注册。不要把文件夹名 `filter` 当成已注册名。

### checkable：行勾选

来源：[源码](../dtable/src/plugins/checkable/index.tsx)、[样式](../dtable/src/plugins/checkable/style.css)。导出类型：`DTableCheckableTypes`、`DTableCheckable`。

```ts
// 所有选项可选。
checkable: boolean | 'auto';                       // 默认 'auto'
checkOnClickRow: boolean;
checkedRows: string[];                            // 创建时的默认勾选
checkboxLabel: string;                            // 表尾复选框文字
allowCheckDisabled: boolean;
checkInfo(this: DTableCheckable, checks: string[]): ComponentChildren;
canRowCheckable(this: DTableCheckable, rowID: string): boolean | 'disabled';
beforeCheckRows(this: DTableCheckable, ids: string[] | undefined,
    changes: Record<string, boolean>, checkedRows: Record<string, boolean>):
    Record<string, boolean> | undefined;
onCheckChange(this: DTableCheckable, changes: Record<string, boolean>): void;
checkboxRender(this: DTableCheckable, checked: boolean,
    rowID: string, disabled?: boolean): CustomRenderResult;
// 列配置
checkbox?: boolean | ((this: DTableCheckable, rowID: string) => boolean);
// 实例方法
toggleCheckRows(ids?: string | string[] | boolean, checked?: boolean): Record<string, boolean>;
isRowChecked(rowID: string): boolean;
isAllRowChecked(): boolean;
getChecks(): string[];
toggleCheckable(toggle?: boolean): void;
```

- `checkboxRender` 默认生成 `Checkbox`，类名 `.dtable-checkbox`。`checkbox` 控制该列是否显示复选框，与是否允许选中该行的 `canRowCheckable` 分离；表头调用时 `rowID === 'HEADER'`。同一行可在多个列显示复选框。
- `canRowCheckable` 返回 `false` 时没有复选框且方法跳过该行；返回 `'disabled'` 时显示禁用复选框，方法默认也跳过，仅 `allowCheckDisabled: true` 允许方法改变它。默认勾选 `checkedRows` 创建时直接合并，不经过该校验。
- `toggleCheckRows()` 对 `layout.allRows` 全选／全不选；布尔值第一个参数是目标状态；指定 ID 或 ID 数组时可定向设置，否则逐行反转。返回值只包含本次直接发生变化的 ID。`allRows` 是输入行集合，尚未经 `onAddRows` 排序／分页／折叠流水线裁剪；`onAddRow` 返回 false 只中止回调，不移除该行，因此跨本地页和折叠行勾选是当前语义。
- `state.checkedRows: Record<string, true>` 保存原始勾选，`getChecks()` 只返回仍在 `layout.allRows` 中的 ID，`isRowChecked()` 直接读状态；移除数据后状态可能保留，但 `getChecks()` 不返回它。`isAllRowChecked()` 空表返回 `false`，非空表用选中数与可选行数比较。
- `beforeCheckRows` 在原始状态已改变后执行。返回对象是附加状态修正，允许级联选中等；每项仍经 `canRowCheckable` 检查。随后复制状态，并在 `setState` 完成后调用 `onCheckChange`。当前回调和方法返回的 `changes` 不包含 `beforeCheckRows` 新增的修正。
- `data.disableCheckable?: boolean` 抑制表头和表体点击处理；`state.forceCheckable?: boolean` 用于强制启停。已注册插件的方法和状态即使暂未激活也存在。
- 点击复选框或开启 `checkOnClickRow` 后点击行可勾选；忽略 `btn,a,button.not-checkable,.form-control,.btn` 中的点击。禁用复选框所在 `.disabled` 元素阻止点击。必须保留原生 label→input 转发去重，避免一次 label 点击切换两次；原生 input 的 Space 键仍能触发。
- footer 名称是 **`'checkbox'`、`'checkedInfo'`**。前者有独立包装点击处理，使用默认 Checkbox（不走 `checkboxRender`），支持 `checkboxLabel`；后者调用 `checkInfo(checks)` 或生成已选数与总数。默认语言键 `checkedCountInfo`、`totalCountInfo` 提供 `zh_cn`、`zh_tw`、`en`。
- 勾选单元格增加 `.is-checked`，复选框列增加 `.has-checkbox`，统计 `.dtable-check-info`。CSS 变量 `--dtable-checked-bg`、`--dtable-checked-bg-hover`、`--dtable-checked-border`，分别默认 warning-50、warning-100、border-strong。

兼容边界与可改进项：当前只有二态，没有半选态；`beforeCheckRows` 不是可撤销的 before hook；统计使用数量而非逐个检查资格，一旦动态资格变化可能失真；`data.disableCheckable` 没有覆盖表尾点击。`toggleCheckable()` 只调用 `setState`，而 options modifier 依赖核心 `_options` 缓存失效，存在动态切换未立即生效的问题（[核心 options 初始化和 update](../dtable/src/components/dtable.tsx)）；VTable 应保证该公开方法即时生效。历史文档的 `isAllChecked`、footer `'checkInfo'` 和“`'disabled'` 总可通过方法选中”不符合当前实现，真实名称分别是 `isAllRowChecked`、`'checkedInfo'`，后者还受 `allowCheckDisabled` 控制。

现有回归入口：[dtable-checkable.spec.ts](../../tests/e2e/dtable-checkable.spec.ts) 包括表头／表尾／单行 label、表尾包装区域、逐行全选同步、原生 input Space；文档整理期间仅审阅测试，没有据此声称已重新运行验收。

### nested：层级、折叠、级联勾选

来源：[源码](../dtable/src/plugins/nested/index.tsx)、[样式](../dtable/src/plugins/nested/style.css)、[store](../dtable/src/plugins/store/index.ts)。导出 `NestedRowState`、`NestedRowInfo`、`DTableNestedTypes`、`DTableNestedDependencies`、`DTableNested`。

```ts
// 选项均可选。
nested: boolean | 'auto';                         // 默认 'auto'
nestedParentKey: string;                          // 默认 'parent'
asParentKey: string;                              // 默认 'asParent'
nestedIndent: number;                            // 默认 20
preserveNested: boolean;
noNestedCheck: boolean;
defaultNestedState: Record<RowID, boolean> | boolean;
onNestedChange(): void;                          // 实际以表格为 this 调用
onRenderNestedToggle(this: DTableNested, info: NestedRowInfo | undefined,
    rowID: string, col: ColInfo, rowData: RowData | undefined): CustomRenderResult;
// 列配置
nestedToggle?: boolean;
nestedIndent?: number | boolean;
childLabel?: CustomContentType;
// 方法
getNestedInfo(rowID?: string): NestedRowInfo | Map<string, NestedRowInfo>;
getNestedRowInfo(rowID: RowID): NestedRowInfo;
toggleRow(rowID: RowID | RowID[], collapsed?: boolean): void;
isAllCollapsed(): boolean;
// 状态和数据
state.nestedState: Record<RowID, boolean>;         // true 表示折叠
data.nestedMap: Map<RowID, NestedRowInfo>;
data.nestedRowMap: Map<RowID, RowInfo>;
type NestedRowInfo = {
    state: NestedRowState; level: number; children?: string[]; parent?: string; order?: number;
};
// const enum NestedRowState
// unknown = '', collapsed = 'collapsed', expanded = 'expanded',
// hidden = 'hidden', normal = 'normal'
```

- 在 `beforeLayout` 清空映射，`onAddRow` 记录行，`onAddRows` 解析树。父字段可为字符串、数字或祖先 ID 数组，从数组末尾向前选择实际存在的父行；`'0'` 被当作无父级。`asParent` truthy 可把没有子行的行声明为父级（`children: []`）。行按父子深度次序排列，祖先折叠时后代从最终 `rows` 隐藏，但原始 `allRows` 保留。
- 可见根层级 `0`，子级递增；缺失 ID 的 `getNestedRowInfo` 返回 `{state: 'normal', level: -1}`。`getNestedInfo()` 返回内部 Map 本身。
- `toggleRow('HEADER', collapsed?)` 是全部折叠／展开命令。全部折叠仅记录当前 expanded 的父行；全部展开清空状态。数组未指定目标状态时使用数组首个 ID 的旧状态确定统一目标。执行后 layout dirty，回调无参数，开启持久化时再保存 `nestedState`。
- `isAllCollapsed()` 的定义是映射里没有 `expanded` 行，空树也为 `true`。`defaultNestedState: true` 意为默认全部折叠；对象提供具体 ID，`false` 无默认折叠。`preserveNested` 从 `Store('DTable:' + table.id)` 的 `nestedState` 读取，并优先于默认状态。
- 列 `nestedToggle: true` 显示 `.dtable-nested-toggle`；叶子占位符 `.is-no-child` 隐藏并禁点，保持对齐；表头按钮全部切换。自定义 toggle 回调在表头接收 `info`/`rowData` 为 `undefined`，在数据行接收层级信息。行点击 toggle 返回 `true`，会终止后续表体插件点击处理。
- 列 `nestedIndent` 默认跟随 `nestedToggle`，`true` 使用全局间距，数字使用列间距，按 `level * indent` 渲染 `.dtable-nested-indent`；false 关闭。`childLabel` 字符串按行数据格式化成圆角标签，其他内容走 `CustomContent`，generator this 为 cellInfo；当前仅在 `Number(parentField) > 0` 的行显示，数组父路径或非数字 ID 不一定显示。
- 默认给 sortable 提供 `canSortTo`：仅允许相同父 ID 之间拖放；默认给 checkable 提供 `beforeCheckRows`：指定 ID 的勾选向所有后代级联；当父亲的全部直接孩子都与目标状态相同时更新父亲并向上检查。全选（`ids === undefined`）和 `noNestedCheck` 时不执行这条级联逻辑。这两项是普通 defaultOptions，用户自定义同名函数会替代它们。
- 样式标识 `.is-collapsed`、`.is-expanded`、`.is-hidden`、`.is-normal`、`.dtable-child-label`；变量 `--dtable-nt-size` 默认 `calc((var(--font-size-root) * 3 / 4) + 1px)`。

待改进：没有父链循环／自引用检测，递归求状态与递归排序可能死循环或深栈溢出；树与全局排序／本地分页的先后顺序依赖插件数组，只有 sortable 的 `requireAfter`，须明确稳定的数据处理阶段。级联取消一个孩子时父亲可能仍保持选中（只有全部孩子等于目标值才更新），应设计可选的半选态和完整变更集；兼容模式需明确旧语义。父 `'0'`、懒取数据的父字段、`defaultNestedState: true` 与非数组 data 组合、跨页父子关系均需要专项测试。该插件没有异步加载子行接口，不能把旧 README 的“支持异步获取数据”当作已实现的 nested 能力。

### group：列分隔线

来源：[源码](../dtable/src/plugins/group/index.tsx)。导出 `DTableGroupTypes`。

- 全局 `groupDivider?: boolean = true`；列 `group?: string`。没有方法、状态、数据或专门回调。
- layout 完成后分别遍历 left／center／right 区域相邻列：不是该区域第一列、`col.border` 未指定且当前与前列 `setting.group` 不同时，将 `col.border = 'left'`。
- 不重排列，不渲染组标题，不是行分组。显式 `border: false` 也会保留；固定分区之间不额外生成分隔线。undefined 组名与有名组之间也形成边界。

### sort：本地排序

来源：[源码](../dtable/src/plugins/sort/index.tsx)、[排序图标样式](../dtable/src/style/sorter.css)。导出 `ColSortOrder`、`ColSortBy`、`ColSortFn`、`ColSortFnName`、`DTableSortTypes`、`DTableSort`。

```ts
type ColSortOrder = 'asc' | 'desc' | 'none';
type ColSortBy = {name: ColName; order: ColSortOrder};
type ColSortFn = (this: DTableSort, row1: RowInfo, row2: RowInfo, col: ColInfo) => number;
type ColSortFnName = string;
// 全局选项
sort?: boolean | ColSortFn | Record<ColSortFnName, ColSortFn>;  // 默认 false
sortBy?: ColSortBy | ColSortBy[];
multiSort?: boolean;
// 列配置
sort: boolean | ColSortFn | ColSortFnName;
// 状态
state.sortBy?: ColSortBy[];
```

- 初始化 `sortBy` 归一化成数组保存到 state。没有公开排序方法和专用变更回调；点击后通过 `update({dirtyType: 'layout', state: {sortBy}})` 更新。
- 全局 `sort` 函数覆盖默认比较器；对象按**比较器名称**扩充映射，列通过 `sort: '名称'` 选择，并非自动按列名匹配。列 `true` 用 default；函数直接调用；`false`／缺省跳过。
- 内置比较器 default 取 `row.data[col.name]` 字符串 `localeCompare`，相等返回 0，第一个值 null／undefined 返回 1；date 使用 `createDate(value ?? 0).getTime()` 相减；number 使用 `parseFloat` 相减。都直接读 row.data，不走 `cellValueGetter`。
- `onAddRows` 复制数组排序，按 state.sortBy 顺序依次比较，首个非零结果决定次序。多列排序时最新点击列优先：asc → desc → none（移出数组）；单列模式清空旧规则。只有命中 `.dtable-sort-link` 才触发。
- 表头把第一项内容包装为排序链接，附 `.dtable-sort-{asc|desc|none}`，外层 `data-sort` 保存状态。没有单独键盘排序命令或 `aria-sort` 设置。

待改进：`sortBy` 只在 onCreate 读取，后续 options 变更没有受控同步；手工初始 `order:'none'` 没有被比较器过滤，会当成降序；default 对空值处理不对称，number/date 非法值无稳定策略。VTable 应保留接口并明确空值／非法值、稳定排序、受控状态和变更回调；排序原始值与 getter 值的选择建议新增可配置语义，避免静默更改旧结果。

### sort-type：排序状态与外部排序链接

来源：[源码](../dtable/src/plugins/sort-type/index.tsx)。导出 `ColSortType`、`DTableSortTypeTypes`、`DTableSortType`。

```ts
type ColSortType = 'asc' | 'desc' | boolean;
type SortLink = string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>)
    | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) =>
        string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));
// 全局选项
sortType?: boolean;                  // 默认 true，且 sort 为 falsy 才激活
sortLink?: SortLink;
orderBy?: Record<string, ColSortType>;
// 列配置
sortType: ColSortType;
sortLink?: SortLink;
```

- 无方法、状态或数据；只负责表头图标和链接，不重排数据、不自动更新排序状态。
- 列 `sort` 有任何显式值（包括 false），或列 `sortType === false` 时跳过。否则 `orderBy[col.name]` 可覆盖列状态；`true` 表示 none，asc／desc 表示当前方向。
- 有链接时下个状态为 asc↔desc，当前 none 的下个是 asc；生成器接收 `(col, next, current)`，`this` 为表格。字符串按 `{...col.setting, sortType: next}` 格式化，支持 `{name}` 和 `{sortType}`；对象其他属性透传 `<a>`。没有链接时只显示图标。
- 输出同 sort 的 `.dtable-sort-link`、`.dtable-sort-*`、`data-sort`。

文档中旧 `sortAttrs` 字段没有实现，应使用 `sortLink` 对象属性。当前全局 `sort` 与 `sort-type` 互斥，无法直接在同表按列混用本地和远程排序；允许按列选择模式是可单列讨论的收益较大改进。

### filterable：实验性列过滤菜单，未完成过滤

来源：[源码](../dtable/src/plugins/filter/index.tsx)、[样式](../dtable/src/plugins/filter/style.css)。导出 `DTableFilterTypes`、`FilterDataOptions`、`DTableFilterable`；另导出一个与过滤无关、疑似遗留的 `DTableSortableOptions`。

```ts
// 全局声明的可选字段
filterable: boolean;                              // 默认 true
filterClassName: ClassNameLike;
filterHandler: string;
reset(event: Event): void;
submit(event: Event): void;
onRemove(this: DTableFilterable, from: RowInfo, to: RowInfo, orders: string[]): void;
filter: {icon: string; className: string};
// 额外运行时默认值 filterHref: ''，未在上面接口声明
// 列可选字段
filterable: boolean;
filter: {icon: string; className: string};
reset(event: Event): void;
submit(event: Event): void;
// 声明状态（没有 state() 初始化，在渲染时直接写入）
state.id: string;
state.filterOptions: FilterDataOptions[];
interface FilterDataOptions {text: string; key: string;}
```

- 只有列 `filterable` truthy 时添加 `.dtable-filter`，默认图标 `icon-filter`，使用 `data-toggle="dropdown"` 和 `#${col.name}FilterContent` 指向菜单。需要外部 dropdown 支持，但插件没有声明运行时依赖。
- status 类型通过 `statusMap` 构建选项；avatarBtn 类型硬编码 `manager`／`managerAccount`；其他类型取 `{text: row[col.name], key: row.id}`，按 text 去重。只按 options.data 数组生成，无通用 getter 适配。
- 菜单包含文字搜索、checkbox 列表、重置、确定。搜索仅对子项文字做区分大小写的 `indexOf`，重置清空搜索输入和 checkbox；确定没有绑定处理函数。**没有筛选数据、持久筛选状态、触发 submit/reset/onRemove、将选中值交给调用者的实现**。
- `filterClassName`、`filterHandler`、全局 `filter`、全局／列 `reset`／`submit`、`onRemove`、`filterHref` 未被消费。真正生效的是列 `filter` 的 icon/className，但 className 被 `...className` 拆成字符传入 `classes`，不符合期望。
- 临时列表使用模块级 `filterOptions` 和全局 `document.querySelector`，菜单 ID 不含表格 ID；直接 `render(menu, document.body)`，无卸载清理，搜索重绘会丢 checkbox 选择。多列、多实例、特殊字符 ID、非字符串 text 都有明显风险。

VTable 应保存模块／注册名称迁移说明，把“完整本地／远程过滤”作为新能力单独设计；不需要复刻这些未生效选项造成的副作用，也不能将其作为已有成熟兼容能力承诺。建议沿用明确可用的列启用和图标选项，新增隔离的筛选模型、受控状态、提交／重置回调和弹层生命周期。

### pager：表尾分页与本地切片

来源：[源码](../dtable/src/plugins/pager/index.tsx)。导出 `DTablePagerTypes`、`DTablePager`。

```ts
footPager?: PagerOptions;
localPager?: PagerInfo | boolean;
state.pager?: PagerInfo;
// 没有附加公开方法、数据、独立变更回调。
```

- footer `'pager'` 在存在 footPager 时生成 `@zui/pager/react` 的 Pager。未提供 items 数组时用 first／prev／`{page}/{pageTotal}`／next／last；`type: 'size-menu'` 未设置 caret 的项目自动使用 `'up'`，每个 item 复制后传入。
- 未启用 localPager 时只透传 PagerOptions，不对表格数据分页，可用 linkCreator 或 Pager 回调实现服务端分页。
- localPager truthy 时在构造 state 阶段从 **props** 初始化：`page=1, recTotal=0, recPerPage=20, pageTotal=1`，先使用 footPager 同名值，再合并 localPager 对象。
- `onAddRows` 按当前流水线输入 rows 切片；localPager 对象先合并 state.pager，state 优先。recPerPage 非有限数回退 20，否则向下取整且至少 1；page 非有限数回退 1，否则向下取整并约束至 `[1, max(1, ceil(rows.length / recPerPage))]`。
- 渲染本地 Pager 时合并 footPager → localPager 对象 → state.pager，最终强制 `recTotal = layout.allRows.length`、`useState=true`；包装 `onChangePageInfo(newPager, event)`，先调用原 footPager 回调，再合并新分页信息入 state 并 layout dirty。Pager 的所有配置／事件本身仍遵循 `PagerOptions`。

待改进：分页输入是插件流水线处理后的 rows，但显示 total 用原始 allRows；与 nested／未来过滤组合会造成总数和可分页集合不一致。内部切片修正后的页码没有回写 state；外部 props 更新默认分页设置也不自动同步已有 state。应明确“过滤／排序／展开／分页”的顺序、总数来源和受控分页方式；保留 `footPager` 接口及回调调用次序。

### header-group：两层表头分组

来源：[源码](../dtable/src/plugins/header-group/index.tsx)、[样式](../dtable/src/plugins/header-group/style.css)。导出 `DTableHeaderGroupInfo`、`DTableHeaderGroupTypes`。

```ts
headerGroup?: boolean;             // 全局默认 true
// 列配置
headerGroup?: string;
// 插件数据
data.headerGroups: Map<string, DTableHeaderGroupInfo>;
type DTableHeaderGroupInfo = {cols: string[]; index: number};
```

- 无公开方法、状态或专门回调。布局前以名称收集所有列，将同名分组列聚到该组首次出现的位置，原地排序 `options.cols`；未分组列按原序保留。
- 分组首列渲染 `.dtable-header-group`，内容即分组字符串。高度为 headerHeight/2 - 1，宽度为组内所有 `getColInfo(name)?.realWidth` 之和 - 1；每列内容 `.dtable-header-as-group` 增加半表头高度的 paddingTop，形成两行表头。
- 只实现一层分组标题＋列标题，不是任意深度树形表头；不支持分组点击 API 或自定义标题回调。样式依赖 `--dtable-header-bg`、`--dtable-border-color`。

应修复的问题：`beforeLayout` 即使没有任何分组也可能把高度变成 `2 * rowHeight`；当传了非零 headerHeight 时仍返回 `{headerHeight: undefined}`，核心合并后反而丢掉用户高度。分组跨固定分区、首列隐藏、组内列 order 再重排时标题锚点／宽度／位置可能错误；原地排序 props.cols 还有可观察副作用。VTable 应保留字符串配置，稳定处理分区与隐藏，并以新配置扩展多级表头，避免为兼容而保留错误高度。

### cellspan：跨行、跨列

来源：[源码](../dtable/src/plugins/cellspan/index.ts)、[列布局](../dtable/src/helpers/layout.ts)、[可见行与渲染](../dtable/src/components/dtable.tsx)。导出 `DTableColIndex`、`DTableRowIndex`、`DTableColID`、`DTableRowID`、`DTableCellID`、`DTableCellSpanSetting`、`DTableCellSpanInfo`、`DTableCellSpanTypes`、`DTableCellSpan`。

```ts
getCellSpan?: (this: DTableCellSpan, cell: {row: RowInfo; col: ColInfo}) =>
    Partial<DTableCellSpanSetting> | undefined;
type DTableCellSpanSetting = {colSpan: number; rowSpan: number};
type DTableCellSpanInfo = DTableCellSpanSetting & {width: number; height: number};
type DTableCellID = `C${number}R${number}`;
data.overlayCellSet: Set<DTableCellID>;
data.cellSpanMap: Map<DTableCellID, DTableCellSpanInfo>;
```

- 没有 `cellspan: boolean` 开关；加载插件并给定 `getCellSpan` 才启用。没有方法、状态或变更事件。
- `onLayout` 重新扫描布局 rows 的 left／center／right 三个列区，跳过已被覆盖的格子，对锚点调用 getCellSpan。缺省或 falsy 跨度使用 1，跨度上限限制到当前固定分区的剩余列数及剩余行数；因此不跨固定分区。
- 锚点宽度为跨列 realWidth 之和，高度为 `rowHeight * rowSpan`。锚点外层使用宽高；被覆盖单元格外层 `display: none`。表头不合并，只有表体。
- 坐标以列 index／行 index 生成，不是业务 ID；回调看到的是排序／分页／折叠处理后的行 index。VTable 必须明确索引对应最终视图，不能假定它是源数据索引。

应修复的问题：覆盖列 ID 用 `col.index + i`，但真实列 index 保留输入下标，经过隐藏、固定分区或 order 重排不一定连续，应按真实列对象取索引；对负值／小数跨度没有规范化。覆盖 CSS 类误写在 style 对象的 `className` 字段，实际上不会得到预期类。最重要的是跨行锚点滚出可见行后，核心只渲染 visibleRows，而被覆盖格仍隐藏，可能出现合并区域空洞；新的虚拟化需要扩展可见锚点查询和命中测试。当前每次 layout 是所有行×列扫描，性能目标应区分 metadata 计算和 DOM 虚拟化，不必保留全量重算。

### rich：格式化、链接、HTML、进度、提示与样式

来源：[源码](../dtable/src/plugins/rich/index.tsx)。导出 `ColLinkSetting`、`ColDateFormatSetting`、`ColFormatSetting`、`ColHTMLSetting`、`ColMapSetting`、`DTableRichTypes`、`DTableRich`，以及下面 9 个工具函数。

```ts
type Info = {row: RowInfo; col: ColInfo};
type ColLinkSetting = string | false | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>)
    | ((info: Info) => string | false | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));
type ColDateFormatSetting = boolean | string | ((value: unknown, info: Info) => string);
type ColFormatSetting = string | ((value: unknown, info: Info) => string);
type ColHTMLSetting = boolean | string | ((value: unknown, info: Info) => string);
type ColMapSetting = Record<string, string> | ((value: unknown, info: Info) => string);
// 列字段，全部可选
link: ColLinkSetting;
digits: number;
format: ColFormatSetting;
formatDate: ColDateFormatSetting;
invalidDate: string;
html: ColHTMLSetting;
map: ColMapSetting;
mapSplitter: string;                              // 消费时默认 ','
mapJoiner: string;                                // 消费时默认 mapSplitter
hint: boolean | string | ((info: Info) => string);
styleMap: Record<string, string> | ((info: Info) => Record<string, string>);
progressType: 'circle' | 'bar';                    // 非 bar 均走 circle
circleSize: number;                               // 24
circleBorderSize: number;                         // 1
circleBgColor: string;                            // 'var(--color-border)'
circleColor: string;                              // 'var(--color-success-500)'
barColor: string;                                 // fallback circleColor
barBgColor: string;
barWidth: number;                                 // 64
barHeight: number;                                // 6
```

无全局选项、方法、state、data 或独立事件；主要扩展列配置和列类型。

- 列类型 `html` 默认把原内容当 HTML；`progress` 默认居中，转为 ProgressCircle（带 text）或 ProgressBar（rounded-full），percent 原样传给子组件；`datetime` 预设 `formatDate: '[yyyy-]MM-dd hh:mm'`，`date` 为 `'yyyy-MM-dd'`，`time` 为 `'hh:mm'`。列自己的配置覆盖类型默认值。
- 核心先执行列的 onRenderCell，再执行各插件 onRenderCell；rich 自身流水线：日期格式化 → map → digits／format → html 或 link → hint → styleMap。插件相对次序也是兼容内容的一部分。
- format 字符串按 `{...row.data, 0: value}` 模板化；函数以表格为 this 调用。digits 对可转数值的结果先 Number，再在 digits≥0 时 toFixed，digits<0 则保留数字。
- map 默认先按 `','` 拆字符串。函数得到的是可能已拆成数组的 value；对象逐项映射，找不到时保留原项，再按 mapJoiner/mapSplitter 合并。配置空 mapSplitter 可关闭拆分。
- 日期：空值用 invalidDate 或原值；`0000-00-00`、`0000-00-00 00:00:00` 用 invalidDate 或空串；false 返回原值；true 使用默认格式。**函数返回值仍作为 formatDate 的格式串传入 helper**，不是直接作为最终展示文本。
- html:true 使用内容本身，字符串或函数经 renderFormat；产生 `{html: htmlCode}` 原始 HTML 渲染片段。html 生效时跳过 link 包装。HTML 不做清理，调用者需对该显式 HTML 接口负责。
- link 函数以表格为 this，false 不链接；URL 模板仅用 row.data 替换。链接对象属性透传，列中所有 `data-*` 也转发至链接；这些 data 属性最后合并。内容为数组且不链接时返回 Fragment。
- hint:true 默认使用格式化后字符串（若结果非字符串则原始 value）；hint 字符串按 row.data 模板化，函数以表格为 this。结果设置内容层 `title`。styleMap 对象是“CSS 属性→行数据字段名”，函数返回 CSS 属性映射；样式加在内容层。

这些工具函数是真实导出接口，VTable 替换时需保留等价功能或明确提供桥接导出（所有 this 为 `DTableWithPlugin`）：

```ts
renderLink(link: ColLinkSetting | undefined, info: Info,
    content?: ComponentChildren, props?: Record<string, unknown>): ComponentChildren;
renderFormat(format: ColFormatSetting | undefined, info: Info, value?: unknown): string | undefined;
renderDatetime(format: ColDateFormatSetting, info: Info, value?: unknown, invalidDate?: string): string;
renderLinkCell(result: CustomRenderResultList, info: Info): CustomRenderResultList;
renderFormatCell(result: CustomRenderResultList, info: Info & {value: unknown}): CustomRenderResultList;
renderMapCell(result: CustomRenderResultList, info: Info): CustomRenderResultList;
renderStyleMapCell(styleMap: Record<string, string> | ((info: Info) => Record<string, string>),
    result: CustomRenderResultList, info: Info): CustomRenderResultList;
renderDatetimeCell(result: CustomRenderResultList, info: Info,
    defaultFormat: ColDateFormatSetting = '[yyyy-]MM-dd hh:mm'): CustomRenderResultList;
renderHtmlCell(result: CustomRenderResultList, info: Info,
    defaultHtml: ColHTMLSetting = false): CustomRenderResultList;
```

签名中的返回 string 是 TS 断言后的表面类型，空值分支运行时仍可能返回 null／undefined，应以兼容值语义测试为准。

文档差异／改进：旧文档称 link/hint 模板支持 `{0}`，源码只为 format 注入 `0`；不要直接照抄错误示例。日期回调语义应区分“返回格式串”与“返回最终文本”；rich 的类型渲染器与全局转换叠加时可能对 VNode／HTML 描述对象再次 format/map，应明确转换阶段和输入类型。新增安全文本／HTML 边界或统一 formatter 管线可以保留旧选项适配器，不必强迫迁移所有列。

### avatar：头像列

来源：[源码](../dtable/src/plugins/avatar/index.tsx)。导出 `DTableAvatarTypes`、`DTableAvatar`。

```ts
// 列字段，全部可选
avatarClass: string;                              // 'rounded-full'
avatarKey: string;                                // `${col.name}Avatar`
avatarCodeKey: string;
avatarNameKey: string;                            // `${col.name}Name`
avatarProps: AvatarOptions | ((col: ColInfo, row: RowInfo) => AvatarOptions);
avatarBtnProps: JSX.HTMLAttributes<HTMLButtonElement>
    | ((col: ColInfo, row: RowInfo) => JSX.HTMLAttributes<HTMLButtonElement>);
```

- 没有全局选项、methods、state、data 或独立事件；提供 `type: 'avatar' | 'avatarName' | 'avatarBtn'`。
- 先取 `row.data[col.name]`；没有 truthy length 时原样返回，即仅有 avatar URL、主字段为空或是数字时不会自动渲染。
- 名称取 row[avatarNameKey]，falsy 时退回 result[0]；src 取 row[avatarKey]；code 有 avatarCodeKey 时按该键取，否则主字段；Avatar 默认 size `'xs'`，其余 avatarProps 覆盖。className 合并 avatarClass、avatarProps.className 和 `'flex-none'`。
- avatarName 使用 flex 排列头像和名称；avatarBtn 使用 `<button type="button" className="btn btn-avatar">` 包含头像／名称，再展开 avatarBtnProps，因此用户可覆盖 className。回调参数是 `(col, row)`，没有显式绑定 this。
- 旧文档中的 avatarProps 单一 row 参数、avatarBtn 的 `btnProps`、示例 `avatarWithName` 均不是当前真实接口；应按上述配置兼容。

### actions：操作列与下拉操作

来源：[源码](../dtable/src/plugins/actions/index.tsx)。导出 `DTableActionsTypes`；`ActionItemInfo` 当前是模块内部类型，没有导出。

```ts
type ActionItemInfo = Partial<ToolbarItemOptions & {name: string; items?: ListitemProps[]}>;
// 全局可选
actionsCreator(info: {row: RowInfo; col: ColInfo}): ToolbarItemOptions[];
actionItemCreator(item: Partial<ToolbarItemOptions>,
    info: {row: RowInfo; col: ColInfo}): ToolbarItemOptions;
// 列可选
actions: string | (string | ActionItemInfo)[];
actionsCreator: 同全局签名;
actionItemCreator: 同全局签名;
actionsSetting: Partial<ToolbarOptions>;
actionsMap: Record<string, Partial<ToolbarItemOptions>>;
```

- 仅处理 `type: 'actions'`。没有 methods、state、data 或独立事件；最终操作事件通过 Toolbar／按钮配置传递。列级 creators 优先于全局，默认 item creator 会替换 URL 模板并给按钮及下拉项补 `data: {row: row.id, col: col.name}`。
- 操作来源优先 `row.data[col.name] || col.actions`。字符串用 `|` 拆操作，`-name` 表示禁用，`name:item1,-item2` 表示下拉列表；也允许对象数组／字符串与对象混合。
- 先解析操作再生成 Toolbar；没有任何原始 action 时直接返回，**仅提供 actionsCreator 而没有 actions 数据不会调用 creator**。
- actionsMap 按 name 补属性，单项显式属性优先；运行时还支持 map 项的 `buildProps(result, info)`，返回对象再次合并，该字段没有在 DTableActionsTypes 单独声明。name 从传入 item creator 的顶层对象中移除。
- 禁用动作删除 url 和 `data-toggle`；下拉项也处理禁用和 URL 模板。下拉默认 placement `'bottom-end'`，menu.className 设为 `'menu-dtable-actions'`；一层命名子项可从 actionsMap 合并定义。
- 默认 Toolbar 的 btnProps 是 `{btnType:'ghost', size:'sm', className:'text-primary'}`；最后展开 actionsSetting，因此它可以覆盖 items、btnProps 等生成结果。creators 普通函数调用，没有绑定表格 this。
- 未指定 truthy width 的 actions 列在 beforeLayout 根据**第一条数据记录**的 action 数推断宽度：基础 24，每项加 24，匹配 actionsMap 中 type dropdown 且 caret truthy 无 text 的项加 16。只读第一行字段，不使用 col.actions、actionsCreator 或其他行，也不会准确测量文本宽度。

可改进：保持字符串 DSL 和 ToolbarOptions 透传，补足可独立使用 actionsCreator、可靠的列宽策略；自动宽度属于近似旧行为，新的测量／上限逻辑应明确可配置。历史文档说 actionsSetting 是初始化选项，实际只消费列配置。

### custom：自定义单元格组件

来源：[源码](../dtable/src/plugins/custom/index.tsx)。导出 `DTableCustomHTMLCode`、`DTableCustomHTMLElementType`、`DTableCustomInfo`、`DTableCustomSetting`、`DTableCustomTypes`、`DTableCustom`。

```ts
type DTableCustomHTMLCode = string;
type DTableCustomHTMLElementType = keyof JSX.IntrinsicElements;
type DTableCustomInfo = {
    component: DTableCustomHTMLCode | DTableCustomHTMLElementType | ComponentType;
    props?: Record<string, unknown>
        | ((this: DTableCustom, info: CellInfo) => Record<string, unknown>);
};
type DTableCustomSetting = DTableCustomHTMLCode | DTableCustomHTMLElementType
    | DTableCustomInfo | DTableCustomInfo[]
    | ((this: DTableCustom, cell: CellInfo) => DTableCustomInfo | DTableCustomInfo[] | undefined);
// 列字段
custom?: DTableCustomSetting;
// 全局字段（类型写成必填，运行时可省略）
customMap: Record<string, DTableCustomInfo>;
```

- 没有 methods、state、data 或专用事件；所有单元格类型均可用 custom。函数以表格为 this，接收完整 CellInfo；返回 falsy 时保留原输出。
- 顶层字符串以 `<` 开头时按 `{value: cell.value, ...row.data, $value: cell.value}` 格式化，交给 HtmlContent；`value` 可被 row.data.value 覆盖，`$value` 保证为原始单元格值。其他字符串当组件／HTML tag 名；对象可以提供 Preact ComponentType 和 props。
- 原设计把内置 `html → HtmlContent`、options.customMap[name] 与直接 info 依次合并，props 函数均以表格为 this 调用，使用 `$.extend` 浅合并。输出为外层 `.dtable-custom-cell` 的 children，可绕过常规内容层。

必须明确的实现缺陷：数组逐项赋值 `result[0]`，实际只保留最后一项；字符串别名虽先查 customMap，但最后又执行 `component = info.component`，会把解析出的组件重新覆盖成原字符串，映射的 props 生效而组件不可靠。对象的 component 直接写 HTML 字符串没有与顶层 `<...>` 相同的特殊分支。VTable 可保留配置类型并修复这些行为，但应单列为有意变化，不把“多组件数组全部渲染／别名正确解析”宣称为已被 DTable 完整支持的能力。

### 本组组合验收要求

| 场景 | 必须覆盖的兼容点 |
| --- | --- |
| 勾选＋分页＋折叠 | 全选针对 allRows，getChecks 过滤掉已移除 ID；禁用资格、父子级联、跨页状态、完整变更通知；表头／表尾同步 |
| 排序＋树＋分页 | 输入顺序、排序优先级、父子连续、同父拖放限制、最终 index 语义；分页总数、页码修正与实际 rows 一致 |
| 表头分组＋固定列＋隐藏／重排 | 组首列不在视口／隐藏／跨区时标题仍正确；显式 headerHeight 保留；不修改外部 cols 数组 |
| 合并单元格＋虚拟滚动 | 锚点滚出视口时跨行内容持续可见；列重排／隐藏后覆盖集合正确；跨度边界、固定分区、点击／选择／编辑映射到锚点 |
| rich＋自定义渲染 | 列回调→插件→全局回调的顺序；字符串／VNode／HTML 描述对象输入；formatter this、模板变量、data-*、标题和样式落点 |
| 操作列＋勾选 | 操作按钮／链接不会误触行勾选；禁用动作无导航；下拉中的 row/col data 正确；creator 和列／行覆盖优先级 |
| 多实例＋过滤／持久化 | 表格 ID 隔离、DOM 弹层归属、卸载清理、store 键命名；过滤不能沿用模块全局可变数据 |
| 动态更新 | 修改 data、cols、勾选启停、默认／受控排序与分页、插件 when 激活／停用后不遗留缓存或监听器 |

这些是新 VTable 的验收要求或明确建议；以上源码审阅没有执行浏览器测试，也没有将静态推断的问题表述为已复现的浏览器故障。

## 8. 拖动、列定制和交互基础插件

本节以当前源码为依据。下列 `this` 均为加载相应插件后的 **Preact DTable 实例**；Vanilla 用户通过组件引用/命令桥调用。可选字段省略时未必等于显式 `false`，默认值以各插件说明为准。插件的 `name` 用于字符串注册，导出变量用于模块导入，二者不能混用。

### `sortable`：行拖放排序

来源：[源码](../dtable/src/plugins/sortable/index.tsx)、[样式](../dtable/src/plugins/sortable/style.css)。导出 `sortable`、`SortingSide`、`SortingState`、`DTableSortableTypes`、`DTableSortable`；它在 `@zui/dtable/plugins` 聚合入口中。注册名 `sortable`，依赖 `mousemove`、`autoscroll`，需要在 `plugins` 中加载；默认 `sortable: true`，`when: !!options.sortable`，`resetState: true`。

| 选项 | 类型与默认 | 行为 |
| --- | --- | --- |
| `sortable` | `boolean`，默认 `true` | 插件启用开关 |
| `sortHandler` | `string`，默认 `.dtable-cell` | 从事件目标向上 `closest()` 匹配拖动手柄 |
| `canSortTo` | `(this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: 'before' \| 'after') => boolean` | 返回 `false` 拒绝目标 |
| `onSortStart` | `(this: DTableSortable, row: RowInfo, event: MouseEvent) => false \| void` | 按下有效行时调用，`false` 阻止开始；不是超过拖动阈值才调用 |
| `onSort` | `(this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: SortingSide, orders: string[]) => void \| false` | **鼠标释放时**、确有新排序时调用，`false` 撤销此次排序 |
| `onSortEnd` | `(this: DTableSortable, from: RowInfo, to: RowInfo \| undefined, sortingSide: SortingSide \| undefined, orders: string[] \| undefined) => void` | 清理拖动状态并刷新布局后调用；取消或未变更时 `orders` 为 `undefined` |

- 方法：`getSortingState(event: MouseEvent): SortingState | undefined`。`SortingState = {sortingFrom: RowInfo; sortingPos: number; sortingTo?: RowInfo; sortingSide?: SortingSide}`。
- `state`：`rowOrders?: Record<string, number>`、`sortingFrom?: RowInfo`、`sortingPos?: number`、`sortingTo?: RowInfo`、`sortingSide?: SortingSide`，初始均 `undefined`。
- `data`：`disableSortable?: boolean`、`disableCheckable?: boolean`、`sortableInfo?: {from: RowInfo; offset: number; state?: SortingState; startMouseY: number; lastMouseY: number}`。
- 事件：`click`、`mousedown`、`document_mouseup`、`document_mousemovesmooth`。不允许从 `HEADER` 行开始；`.no-cell-event` 按核心规则排除。点击 `.dtable-sort-link` 清掉 `state.rowOrders`。拖动期间自动纵向滚动并暂停复选；释放后通过 `ignoreNextClick()` 避免后续误点，更新完成后延迟 50ms 恢复复选。
- 目标根据固定 `rowHeight`、`visibleRows`、`scrollTop` 命中；出界后沿用最后一次拖动状态。拖动行即使离开可视区，也被追加到 `layout.visibleRows` 保持渲染。`onAddRows` 用 `rowOrders` 重排行，新行排在已排序行之后。操作只改变显示顺序映射，不重写原始 `data` 数组。
- DOM/CSS 契约：`.dtable-sorting`、`.is-sorting-from`、`.is-sorting-to`、`.is-sorting-to-before/after`、`.is-sorting-before/after`，含拖动行高亮与邻行平移动画。
- VTable 验收：上/下方向 × before/after、首尾边界、相邻无变化、回调拒绝、嵌套/过滤后索引、拖到视口外、与复选/普通列排序组合、释放后单击抑制、卸载时清理。

### `sort-col`：列拖放排序

来源：[源码](../dtable/src/plugins/sort-col/index.tsx)、[样式](../dtable/src/plugins/sort-col/style.css)。深层导出变量为 **`sortCol`**；类型导出 `SortingColSide`、`SortingColState`、`DTableSortColTypes`、`DTableSortCol`、**`DTableSorColPlugin`**（现有拼写缺少 `t`，兼容入口不能悄悄删除）。注册名 `sort-col`，依赖 `mousemove`、`autoscroll`；没有默认启用值，`when: !!options.sortCol`，`resetState: true`。未出现在当前插件聚合入口。

| 选项 | 类型 | 行为 |
| --- | --- | --- |
| `sortCol` | `boolean \| ColName[] \| ((this: DTableSortCol, col: ColInfo) => boolean)` | 开关及可拖动列声明；当前源码的实际限制缺陷见后文 |
| `canSortColTo` | `(this: DTableSortCol, from: ColInfo, to: ColInfo, sortingSide: SortingColSide) => boolean` | 返回 `false` 拒绝目标 |
| `onSortColStart` | `(this: DTableSortCol, col: ColInfo, event: MouseEvent) => false \| void` | 按下表头时调用；`false` 阻止开始 |
| `onSortCol` | `(this: DTableSortCol, from: ColInfo, to: ColInfo, sortingSide: SortingColSide, orders: string[]) => void \| false` | 释放时提供该固定分区内的列名顺序；`false` 不提交顺序映射 |
| `onSortColEnd` | `(this: DTableSortCol, from: ColInfo, to: ColInfo \| undefined, sortingSide: SortingColSide \| undefined, orders: string[] \| undefined) => void` | 刷新后通知完成 |

- 方法：`getSortingColState(event: MouseEvent): SortingColState | undefined`；`SortingColState = {from: ColInfo; pos: number; to?: ColInfo; side?: 'before' | 'after'}`。
- `state`：`colOrders?: Record<string, number>`（初始 `{}`）、`sortColFrom?: ColInfo`、`sortingColPos?: number`、`sortingColTo?: ColInfo`、`sortingColSide?: SortingColSide`（初始均 `undefined`）。`onAddCol` 把映射值写入 `col.order`，映射从 1 起。
- `data`：`sortColInfo?: {from: ColInfo; element: HTMLElement; offset: number; state?: SortingColState; startMouseX: number; lastMouseX: number; colOffsetMap?: Record<string, number>}`。源码还读取 `data.disableSortCol`，但本插件的公开 `data` 类型没有声明它；VTable 应补齐类型而保持旧字段可用。
- 事件：`mousedown`、`document_mouseup`、`document_mousemovesmooth`。只从 `HEADER` 开始；隐藏当前 `ContextMenu`；自动横向滚动；只在 `left`、`center`、`right` 同一分区内移动。根据分区 `sideIndex`、可见列及鼠标在列宽中的前/后半部判断目标。
- 预览用 `colOffsetMap` 改写各列 `left`，渲染头部和主体；不会用拖动位置生成独立拖拽层。DOM/CSS：`.is-sortable-col`、`.has-sorting-col`、`.is-sorting-from-col`、`.is-sorting-col-move`；变量 `--dtable-sorting-col-color`（拖动时设为 `var(--color-primary-300)`）；拖动时隐藏列宽手柄、显示水平滚动条和阴影。
- VTable 验收：同分区前后排序、跨分区拒绝、白名单/函数限制、固定列且中央已滚动、宽度 `realWidth !== width`、拒绝回调无副作用、与 resize/排序链接/移动组合。

### `custom-col`：列分隔线和显隐

来源：[源码](../dtable/src/plugins/custom-col/index.tsx)。深层导出 `customCol`、`DTableCustomColTypes`、`DTableCustomCol`，注册名 `custom-col`，依赖 `contextmenu`；`when: !!options.customCol`，无默认启用值，`resetState: true`。未出现在当前插件聚合入口。

- 选项：`customCol?: boolean`；`canSetColVisibility?: (this: DTableCustomCol, colName: ColName, visible: boolean) => boolean`；`onSetColBorder?: (this: DTableCustomCol, colName: ColName, border: ColBorderType, colBorders: Record<ColName, ColBorderType>) => void`；`onSetColVisibility?: (this: DTableCustomCol, colName: ColName, visible: boolean) => void`。回调都没有默认实现。
- 列扩展：`required?: boolean`，用于隐藏菜单的禁用判断。
- 方法：`getColBorder(colName: ColName, checkNeighbor?: boolean): ColBorderType`（`checkNeighbor` 默认 `true`）；`setColBorder(colName: ColName, border: ColBorderType): void`；`setColVisibility(colName: ColName, visible: boolean): void`。
- `state`：`colBorders: Record<ColName, ColBorderType>`、`colVisibility: Record<ColName, boolean>`，初始 `{}`。没有额外 `data` 或直接事件监听。
- `ColBorderType` 是 `boolean | 'left' | 'right'`。`getColBorder` 可把同分区相邻列右/左边框合并为当前视觉边框；没有该列时返回 `false`。`setColBorder` 原值不变时直接返回；改变时更新 layout 并回调完整映射。移除当前某侧边框时也可能修改相邻列的映射。
- `setColVisibility` 更新 `colVisibility` 并把 options 标脏；`beforeLayout` 将该映射转换为列 `hidden`，因此可隐藏并重新显示原有列。方法本身不执行 `required` 或 `canSetColVisibility` 检查。
- 当 `customCol` 为真且 `contextmenu` 为假值时，注入默认表头菜单：设置分割线（左侧、右侧、两侧、无）、隐藏此列；用户已有真值 `contextmenu` 则不会合并这些菜单。菜单含中文简体、繁体、英文文案及内联边框图标。插件没有独立 CSS。
- VTable 验收：菜单与直接方法一致的权限、required 列保护、显隐往返、同分区相邻边框合并、移除共享边框后邻列另一侧保留、已有自定义菜单的组合策略、列被删除后的旧映射处理。

### `resize`：拖动列宽

来源：[源码](../dtable/src/plugins/resize/index.tsx)、[样式](../dtable/src/plugins/resize/style.css)。深层导出 `resize`、`DTableResizeTypes`、`DTableResize`，注册名 `resize`，依赖 `mousemove`；`when: !!options.colResize`，没有默认启用值。未出现在当前插件聚合入口。

- 选项：`colResize?: boolean | ((this: DTableResize, colName: ColName) => boolean)`；`onColResize?: (this: DTableResize, colName: ColName, sizeChange: number, col: ColInfo) => void`。回调发生于释放后或双击还原后，`sizeChange` 是相对基础列宽的最终差值，**不是相对前一次拖动的差值**。
- 列扩展：同签名 `colResize?` 覆盖表级设置；`extraWidth?: number` 指定相对基础宽度的偏移。
- 方法：`isColResizable(col: ColName | ColInfo): boolean | void`（实现也接受省略参数并返回 `undefined`）。不存在列、`center/right` 分区最后一列返回 `undefined`，`left` 分区最后一列允许调整；再按列级/全局 `colResize` 判断。
- `state`：`colResizing?: {colName: ColName; startX: number; startSize: number}`、`colsSizes: Record<ColName, number>`。构造和 reset 时从 `props.cols[].extraWidth` 填充 `colsSizes`，不保存绝对宽度。
- `data`：`colOriginSize: Map<ColName, number>`，初始化空 Map，`onAddCol` 在应用偏移前记录原宽度。
- 事件：`mousedown`、`dblclick`、`document_mouseup`、`document_mousemovesmooth`。仅 `.dtable-col-splitter` 触发；手柄带 `.no-cell-event`；开始时隐藏 `ContextMenu`。按移动距离四舍五入为整数偏移，更新 layout；`onAddCol` 执行 `clamp(baseWidth + extraWidth, minWidth, maxWidth)`。鼠标事件返回 `false` 或主动阻止默认事件/冒泡。
- 双击手柄删除该列 `colsSizes` 偏移，刷新并回调 `(colName, 0, col)`；源 `col.setting.extraWidth` 仍可能作为后备值，见改进项。
- CSS/DOM：`.dtable-col-splitter`、`.has-col-splitter`、`.has-col-resizing`、`.is-col-resizing`；变量 `--dtable-col-splitter-width: 7px`、`--dtable-col-splitter-color: var(--color-primary-500)`；调整中统一光标、关闭悬停背景、显示水平滚动条。
- VTable 验收：固定/弹性列、最小/最大宽、反复拖动、`extraWidth` 初始化/复位、双击恢复、末列规则、修改列定义后保留或重置偏移的明确策略。

### `moveable`：拖动平移表格

来源：[源码](../dtable/src/plugins/moveable/index.ts)、[样式](../dtable/src/plugins/moveable/style.css)。深层导出 `moveable`、`DTableMoveableTypes`、`DTableMoveable`，注册名 `moveable`，依赖 `mousemove`；默认 `moveable: true`，`when: !!options.moveable`。未出现在当前插件聚合入口。

- 唯一选项：`moveable?: boolean | 'header'`。`true` 可从中央滚动区拖动横向/纵向滚动；`'header'` 只允许从中央表头拖动且只改变 `scrollLeft`。
- `data`：`disableMoveable?: boolean`、`moveableStartInfo?: {x: number; y: number; scrollLeft: number; scrollTop: number}`。无额外 state、方法、回调。
- 事件：`mousedown`、`document_mouseup`、`document_mousemovesmooth`。只响应 `.dtable-scroll-center` 内部；排除 `.dtable-col-splitter`；按鼠标位移与起始滚动位置计算反向滚动。释放清理 data 和 `.dtable-moving`；拖动中该类提供 `cursor: grabbing`。
- VTable 验收：中央区/固定区边界、header 模式、与行/列排序和编辑输入控件的手势竞争、拖动后点击抑制、指针移出窗口后的结束及卸载。

### `autoscroll`：滚动到目标及边缘自动滚动

来源：[源码](../dtable/src/plugins/autoscroll/index.ts)。深层导出 `autoscroll`、`ScrollSide`、`ScrollToMouseOption`、`ScrollToMouseInfo`、`DTableAutoscrollTypes`、`DTableAutoscroll`，注册名 `autoscroll`，依赖 `mousemove`；无 `when`、无表级选项、无额外 state。未出现在当前插件聚合入口。

```ts
type ScrollSide = 'left' | 'right' | 'top' | 'bottom' | 'x' | 'y';
interface ScrollToMouseOption {
    interval: number;
    onlyInside: boolean;
    speed: number;
    maxStep: number;
    delay: number;
    detectPadding: number;
    side?: ScrollSide | ScrollSide[];
}
type ScrollToMouseInfo = ScrollToMouseOption & {
    startTime: number;
    position?: {x: number; y: number};
};
scrollTo(info: {col?: ColInfoLike; row?: RowInfoLike; extra?: number}): boolean;
startScrollToMouse(options?: Partial<ScrollToMouseOption>): void;
stopScrollToMouse(): void;
```

- `scrollTo` 的 `extra` 默认 2 像素；目标不存在返回 `false`，任意目标存在则返回 `true`，即使已经可见而没有实际滚动。列按 `left + realWidth` 对中央区宽度计算，行按固定 `rowHeight` 对主体视口计算；最终通过核心 `scroll` 限制边界。
- `startScrollToMouse` 默认值：`interval: 60`（ms）、`speed: 0.5`、`delay: 200`（ms）、`maxStep: this.options.rowHeight`、`onlyInside: false`、`detectPadding: 30`，`side` 未设置表示全方向。每次调用重建 interval 和起始时间。
- `data`：`scrollToTimer?: number`、`scrollToMouse?: ScrollToMouseInfo`。`document_mousemovesmooth` 记录 `clientX/clientY`；定时任务读取 `.dtable-body` 和首个 `.dtable-scroll-center` 的边界并调用 `scroll`。`stopScrollToMouse` 清 interval 和鼠标状态；`onUnmounted` 清 interval。
- 当前实现中 `onlyInside` 未参与计算；`maxStep` 被 `Math.max` 当成最小步长；`detectPadding` 的左/上阈值在视口外、右/下阈值在视口内。这些是现状缺陷，不应把参数名描述的意图直接当成已实现的语义。
- VTable 验收：目标已经可见/不存在/固定列、四边对称检测、onlyInside、步长上限、方向白名单、启动延迟、反复启停、卸载无残留计时器。

### `mousemove`：按帧鼠标事件与点击抑制

来源：[源码](../dtable/src/plugins/mousemove/index.ts)。深层导出 `mousemove`、`DTableMousemoveTypes`、`DTableMousemove`，注册名 `mousemove`，无依赖、无 `when`、无选项或 state。未出现在当前插件聚合入口。

- 方法：`ignoreNextClick(timeout?: number): void`，默认 10ms。在 timeout 存续期间，下一次本表 click 会 `preventDefault()` 并清标记；它**不会**直接 `stopPropagation()` 或返回 `false`，因此后续插件 click 处理器仍可能执行。
- `data`：`mmRafID?: number`、`dmmRafID?: number`、`ignoreNextClick?: number`。
- 监听本表 `mousemove` 与 `document_mousemove`，分别取消上一次同类 rAF 并调度新任务，派发内部 **`mousemovesmooth`、`document_mousemovesmooth`**。回调参数是原始 `MouseEvent`，不是把原事件塞入 `detail` 的 DOM CustomEvent。表内原生 `mousemove` 还会 `preventDefault()`。
- 另监听 `click`、`mousedown` 管理点击抑制标记。现有 document rAF 结束时误把 `mmRafID` 置零，未重置 `dmmRafID`；插件没有 `onUnmounted` 来清理两组 rAF 和 timeout。
- VTable 应保留旧事件名和原始事件参数；内部可以用统一 pointer/rAF 调度，但须明确事件频次、顺序、取消及销毁语义。

### `toolbar`：表尾批量操作区

来源：[源码](../dtable/src/plugins/toolbar/index.tsx)。深层导出 `toolbar`、`DTableToolbarTypes`、`DTableWithToolbar`，注册名 `toolbar`，无 `when`、默认选项、state、data、方法或直接事件。未出现在当前插件聚合入口；不能仅因文档有该插件就假定它在默认包内注册。

- 选项：`footToolbar?: ToolbarSetting<[DTableWithToolbar]>`，`showToolbarOnChecked?: boolean`（无显式默认值，省略视为不限制）。`ToolbarSetting` 能支持工具栏配置、列表和生成函数等，其契约应跟随 `@zui/toolbar`，不能缩窄为 `Partial<ToolbarOptions>`。
- 注入名为 `toolbar` 的 footer 生成器，需要 `footer: ['toolbar']` 或在自定义 footer 顺序中包含它。传递 `[this]` 作为生成参数，调用 `Toolbar.render(footToolbar, [this], {gap: 2})`。
- `showToolbarOnChecked` 为真且 `getChecks().length === 0` 时返回 `[]`；否则渲染工具栏（配置不存在返回 `[null]`）。该插件泛型声明了 `DTableCheckableTypes`，但运行时**没有** `plugins: [checkable]`，因此该模式必须显式加载 checkable，否则可能调用不存在的 `getChecks`。
- VTable 验收：任意 footer 顺序/自定义内容、无配置、无勾选、有勾选、表尾可见性切换、动态配置生成和参数 `this`、工具栏控件焦点/事件、缺少复选插件时的稳定行为。


## 9. 编辑、草稿、选区、历史与数据网格

### 共同前提及模块导出边界

- 本组八个插件都有源码、调用工厂 `definePlugin()` 注册的插件名和实际功能，**但没有由 `src/plugins/index.ts` 汇出**，因此不能把它们写成现有 `@zui/dtable` 顶层公开导出或默认内置插件。消费方当前要显式导入相应深层模块，并将工厂/插件配置加入 `plugins`；导入的模块会注册名称，之后可按名称引用。`dev.ts:24,33,132` 演示导入 `datagrid`、`contextmenu` 并显式使用。
- 官方 `docs/lib/components/plugins.md:1483-1497` 将大多数本组插件列在“更多插件开发中”；应兼容已存在的源码接口和有效行为，不把文档“开发中”误判为完全没有功能，也不把源码缺陷写成完成的产品能力。
- 每个深层模块都导出同名插件工厂：`editable`、`draft`、`history`、`datagrid`、`selectable`、`hotkey`、`contextmenu`、`store`；额外公开原始插件对象仅为 `datagridPlugin` 与 `hotkeyPlugin`。
- 插件工厂支持 `factory()`/直接放入 `plugins`，或 `factory(options)` 覆盖该插件默认选项；`.plugin` 为原始定义。插件默认值最终仍会被用户 props 覆盖。
- `when` 控制有效插件的事件、渲染和生命周期，但 DTable 构造时先为 **全部解析出来的插件** 注入 methods/data/state；默认选项及 `options` 转换也在 `when` 过滤之前执行。因此停用不是删除方法/状态，也不阻止初始化数据分配；例如 `store:false` 仍构造 Store，history 的方法仍可调用。
- `number` 行/列参数是当前布局数组下标；字符串行参数是稳定 ID，字符串列参数是 name；`getRowInfo(-1)` 与 `getRowInfo('HEADER')` 返回特殊表头行 `{id:'HEADER',index:-1,top:0}`。Datagrid 有另一套约定：业务数据行 ID 是 `"0"`,`"1"`……，数据列名从 `C1` 开始，而选择串 `C0R0` 使用 0 基布局下标，两者不能混淆。
- 本组不存在服务器提交、保存接口、公式计算引擎、富类型单元格编辑器、通用行列实体增删事务；`applyDraft` 只是内部 applied 草稿层更新，不写回原始 `data`/`datasource`。

### `draft`：两层草稿

来源：[draft/index.ts](../dtable/src/plugins/draft/index.ts)。无运行时依赖；启用 `!!options.draft`。导出 `draft`、`DTableDraftRows`、`DTableDraftTypes`、`mergeDraft`、`cloneDraft`；源码中的 `DTableDraft` 类型别名未导出。

#### 选项与状态

`DTableDraftRows = Record<RowID, Partial<RowData>>`。

| 选项 | 类型 | 默认值 / 语义 |
| --- | --- | --- |
| `draft` | `boolean` | `true` |
| `skipRenderDraftCell` | `boolean` | 未设置；true 跳过插件自身对正文/表头值的替换 |
| `onStageDraft` | `(this: DTableDraft, draftRows:DTableDraftRows, stagingDraft:DTableDraftRows) => false \| void` | 暂存前调用，false 取消本次暂存及后续回调 |
| `afterStageDraft` | `(this: DTableDraft, draftRows:DTableDraftRows, stagingDraft:DTableDraftRows, oldStageDraft:DTableDraftRows, options: {skipUpdate:boolean}) => void` | 暂存及可选更新完成后调用 |
| `afterApplyDraft` | `(this: DTableDraft, draftRows:DTableDraftRows, appliedDraft:DTableDraftRows, oldAppliedDraft:DTableDraftRows) => void` | 应用及可选更新完成后调用 |

插件另外设置跨插件默认项 `selectAllOnFocus:true`、`history:20`，但**不加载 editable/history 插件**。初始 `state.stagingDraft = {}`、`state.appliedDraft = {}`；无独立 data。

#### 全部方法与导出辅助函数

```ts
getCellDraftValue(row: RowInfo | string | number, col: ColInfo | string | number): unknown;
getRowDraftData(row: RowInfo | string | number,
    options?: {includeIndexCol?: boolean; emptyCellValue?: unknown}): Partial<RowData>;
getColDraftData(col: ColInfo | string | number,
    options?: {includeHeaderRow?: boolean; emptyCellValue?: unknown}): Record<string, unknown>;
stageDraft(draftRows: DTableDraftRows,
    options?: {skipUpdate?: boolean; callback?: (stagingDraft: DTableDraftRows) => void}): void;
applyDraft(draftRows: DTableDraftRows,
    options?: {skipUpdate?: boolean; callback?: (appliedDraft: DTableDraftRows) => void}): void;
renderDraftCell: NonNullable<typeof draftPlugin['onRenderCell']>;
// 深层模块导出，原地修改 sourceDraft，返回同一对象：
mergeDraft(sourceDraft: DTableDraftRows, newDraft: DTableDraftRows): DTableDraftRows;
// 仅复制行对象，不深拷贝单元格对象：
cloneDraft(sourceDraft: DTableDraftRows): DTableDraftRows;
```

- 值读取优先级 `stagingDraft[rowID][colName]` → `appliedDraft` → 核心 `getCellValue`；通过 `in` 检查键存在，保留显式 undefined/null 差别。
- `getRowDraftData` 遍历当前布局列，默认排除名为 `INDEX` 的列；undefined 换成 options.emptyCellValue。`getColDraftData` 遍历当前布局行，可追加 `HEADER`，表头值不做 emptyCellValue 归一化。
- `mergeDraft` 对已经存在的草稿行：整行值 undefined 删除该草稿行；单元格 undefined 删除该草稿键；其他值覆盖。对不存在的行，非 undefined 行对象直接赋给 source（保留传入对象引用）。空对象不会清空已有行。
- `stageDraft` 原地修改 staging，对旧草稿做行级浅复制；默认调用 `update` 后执行 callbacks，`skipUpdate:true` 则同步执行 callbacks。**callback 实际参数是传入增量 draftRows，不是参数名称暗示的完整 stagingDraft。**
- `applyDraft` 删除 staging 中与本次应用值严格相等的键，保留不同值（允许服务器回包与本地后续编辑并存）；合并到 applied。运行时以整行 null 删除 staging/applied 的该行，但类型未表达 null。默认 `forceUpdate`，skipUpdate 可跳过；callback 实际仍收到传入增量。
- 草稿渲染改写结果数组第一项为 `{children: cellValue, attrs: {title:cellValue}}`；nullish 显示空串；表头空串则回退到列名。这可能覆盖前序 rich/custom 格式化第一项，渲染顺序必须记录。

### `editable`：单一文本输入编辑器

来源：[editable/index.tsx](../dtable/src/plugins/editable/index.tsx)。依赖 `[draft]`；启用 `!!options.editable`。导出 `editable`、`DTableEditableTypes`、`DTableEditable`。

| 选项 | 类型 | 默认值 / 语义 |
| --- | --- | --- |
| `editable` | `boolean \| ((rowID:RowID,colName:ColName)=>boolean)` | `true`；函数控制是否进入该单元格编辑 |
| `headerEditable` | `boolean` | 未设置，表头默认不可编辑 |
| `onEditCell` | `(this:DTableEditable, changeInfo:{rowID:RowID;colName:ColName;value:unknown;oldValue:unknown})=>false\|void` | 文本 change 后、暂存前调用；false 取消暂存 |
| `selectAllOnFocus` | `boolean` | `true` |
| `onPasteToCell` | `(this:DTableEditable,event:ClipboardEvent)=>void` | 直接作为 input 的 onPaste 处理器；普通 editable 不解析多单元格内容 |
| `emptyCellValue` | `unknown` | `''` |

跨插件默认 `history:20`、`skipRenderDraftCell:true`。仍未自动依赖 history。

状态 `editingCell?: {rowID:RowID;colName:ColName}`；数据 `editingInputRef: RefObject<HTMLInputElement>`（初始 createRef）、`needAutoFocus?:boolean`。

```ts
editCell(cell?: {rowID: RowID; colName: ColName}): void;
deleteCells(cells: {rowID: RowID; colName: ColName}[], emptyCellValue?: unknown): boolean;
isCellEditing(rowID: RowID, colName: ColName): boolean;
handleEditingInputChange(event: Event): void;
handleEditingInputBlur(event: Event): void;
handleEditingKeyDown(event: KeyboardEvent): void;
renderEditableCell: NonNullable<typeof editablePlugin['onRenderCell']>;
deleteRows(rows: number | RowID | RowInfo | (RowInfo | RowID | number)[],
    options?: {skipUpdate?: boolean}): void;
deleteCols(cols: number | ColName | ColInfo | (ColInfo | ColName | number)[],
    options?: {skipUpdate?: boolean}): void;
```

- 双击单元格开始编辑；点击已有 `is-selected` CSS 类的单元格开始编辑。`editCell()` 退出编辑；无效的权限/表头也退出，清空 input ref，标记下次 updated 自动聚焦。
- 编辑只渲染 `<input type="text" class="dtable-editing-input">`，`defaultValue` 将草稿值转成字符串，文本对齐继承列 align。无自定义编辑器、复杂类型转换、异步校验或提交协议。
- `onChange` 取 `target.value` 与旧草稿值严格比较，调用 onEditCell，再 stageDraft；不是 `onInput` 每按键提交。blur 结束编辑；Enter 主动 blur；代码只认 `event.key === 'Esc'`，未识别现代常见 `'Escape'`；未实现“撤销本轮编辑”的独立回滚缓冲。普通 editable 将用户 onPasteToCell 原函数直接交给 Preact，没有像 onEditCell 那样显式 `.call(this)`，不要假定其 this 已绑定为表格。
- updated 时 `focus({preventScroll:true})`，可 select 全文。正文/表头共用同一渲染方法；未编辑时委托 renderDraftCell。
- `deleteCells` 批量写 `options.emptyCellValue`，无 cells 返回 false，否则返回 true；**声明的第二个 emptyCellValue 参数实现不读取**。它也不逐格执行 editable 权限函数或 onEditCell。
- `deleteRows`/`deleteCols` 的语义是把后续当前布局数据向前移、尾部留空，写草稿；不是删除原始行/列实体，行 ID/列名和网格容量不改变。删除行跳过 HEADER，删除列跳过 INDEX。删除列也移动 HEADER 标题。`skipUpdate` 透传给 stageDraft。
- 源码缺陷：deleteRows 尾部写 `{}`，而 mergeDraft 合并 `{}` 不清除既有值，原数据回退也仍存在，因此删除行会保留/重复尾行；列删除逐单元格填空没有这个空对象问题。deleteRows 构造列名过滤的是 `'HEADER'` 而非 `'INDEX'`，也与 getRowDraftData 默认排除 INDEX 不一致。
- CSS 公开标记：根 `.dtable-editable`、`.dtable-editing`；外层格 `.is-editing`；输入 `.dtable-editing-input`；变量 `--dtable-editing-color:var(--color-success-600)`，编辑边框宽 2、层级 20。

### `history`：草稿撤销重做

来源：[history/index.ts](../dtable/src/plugins/history/index.ts)。依赖 `[store,draft]`；启用 `!!options.history`。导出 `history`、`diffDraft`、`DTableHistoryItem`、`DTableHistoryTypes`、`DTableHistoryDependencies`、`DTableHistory`。

```ts
interface DTableHistoryItem {before: DTableDraftRows; after: DTableDraftRows}
// 源类型：
history?: boolean;                       // default true
historyTarget?: 'staging' | 'applied';   // default 'staging'
historyThreshold?: 10;                  // default 10，错误写成数值字面量类型
onHistoryApplied?: (this:DTableHistory, changes:DTableDraftRows,
    newDraft:DTableDraftRows, oldDraft:DTableDraftRows)=>void;
```

状态 `historyItems:(DTableHistoryItem|number)[]` 初始 `[]`，`historyCursor:number` 初始 0；数据 `historyIdx:number` 初始 1。

```ts
undoHistory(callback?:()=>void): boolean;
redoHistory(callback?:()=>void): boolean;
applyHistory(cursor:number, changes:DTableDraftRows, callback?:()=>void): void;
canUndoHistory(): boolean;
canRedoHistory(): boolean;
addHistory(item:DTableHistoryItem): void;
getHistory(cursor?:number|DTableHistoryItem): DTableHistoryItem|undefined;
// 深层模块导出，严格不等比较单元格，删除以 undefined 表示：
diffDraft(newDraft:DTableDraftRows, oldDraft:DTableDraftRows): DTableDraftRows;
```

- options 转换包装 afterStageDraft 或 afterApplyDraft：先运行原回调，再由新旧草稿 diff 增加 before/after 条目。没有非空差异过滤；一次 stage/apply 一条记录，无自动批次合并/去重/事务 API。
- historyItems 最新项在头部，cursor 0 表示最新状态；undo 读当前 cursor 的 before 后 cursor+1，redo 读 cursor-1 的 after 后 cursor-1。布尔返回值只代表是否找到了可执行历史并发起 setState，不代表异步渲染完成；callback 在 setState 后执行。
- undo 后新编辑会移除更近的历史分支，对其中数字引用的存储项调用 remove。
- 超出 historyThreshold 的条目移入 `data.store.session`；数组仅留下自增 number 引用；存储键 `HISTORY:${this.id}:${itemIdx}`，Store profile `DTable:${this.id}`。threshold 是内存保留条数，**不是总历史上限**；未实现销毁清除历史文件、清空历史 API 或重建历史索引后恢复整份历史。0 会关闭溢出存储。
- applyHistory 使用 mergeDraft 更新当前目标层，不调用 stageDraft/applyDraft，不再次产生历史；最后调用 callback，再计算 actualChanges，把删除标记 undefined 解析成当前可见回退值，再调用 onHistoryApplied。
- 深拷贝/序列化限制：cloneDraft 只复制行对象，复杂单元格对象继续共享；Store 以 JSON.stringify 存储对象，历史 `undefined` 删除标记落盘后丢失，导致溢出后的某些撤销无法移除新增草稿键，函数/复杂对象等也不能完整往返。必须列为可靠性改进项。
- 类型冲突：draft/editable 默认 `history:20`，history 自己声明 boolean；数字 20 不表示最大 20 步，只作为 truthy。在 datagrid 依赖顺序里 history 的 default true 覆盖 earlier 20。

### `selectable`：按布局下标选择单元格

来源：[selectable/index.tsx](../dtable/src/plugins/selectable/index.tsx)。运行时依赖只有 `[mousemove,hotkey]`，但类型还宣称 `DTableAutoscrollTypes`、`DTableDraftTypes`；事件直接调用 `startScrollToMouse/stopScrollToMouse/scrollTo`，因此 **单独加载 selectable 缺少 autoscroll 会报缺方法**。datagrid 包含 autoscroll 可满足此依赖。启用 `!!options.selectable`。

导出 `selectable`、`DTableSelectableTypes`、`DTableColIndex`、`DTableRowIndex`、`DTableColSelection`、`DTableRowSelection`、`DTableCellSelection`、`DTableSelection`、`DTableRangeSelection`、`DTableSelections`、`DTableCellPos`、`DTableCellPosMap`；`DTableSelectable` 别名自身未 export。

```ts
type DTableColIndex = number;
type DTableRowIndex = number;
type DTableColSelection = `C${number}`;
type DTableRowSelection = `R${number}`;
type DTableCellSelection = `C${number}R${number}`;
type DTableSelection = DTableColSelection | DTableRowSelection | DTableCellSelection;
type DTableRangeSelection = `${DTableSelection}:${DTableSelection}`;
type DTableSelections = (DTableSelection | DTableRangeSelection)[];
type DTableCellPos = {col:number;row:number;event?:MouseEvent};
type DTableCellPosMap = Map<number,Set<number>>;
```

| 选项 | 类型 | 默认值 / 语义 |
| --- | --- | --- |
| `selectable` | `boolean\|((cellPos:DTableCellPos)=>boolean)` | true；每格过滤 |
| `onSelectCells` | `(this:DTableSelectable,cells:DTableCellPos[])=>void` | selectCells 的 update 后调用 |
| `beforeSelectCells` | `(this:DTableSelectable,cells:DTableCellPos[])=>void\|DTableCellPos[]` | 可以返回新候选集；不支持 false 取消 |
| `ignoreDeselectOn` | `string` | 未设；额外 CSS selector，点击匹配元素不清空 |
| `markSelectRange` | `boolean` | true；标记 INDEX 和表头 |
| `copyHeader` | `boolean` | true |
| `selectOnClickCell` | `boolean` | 未设（普通插件相当于 false）；datagrid 改为 true |
| `selectableHotkeys` | `false\|{selectAll?,copy?,selectRight?,selectLeft?,selectDown?,selectUp?}`，各项 `boolean\|string` | 未设；默认启用下面键位 |

列类型还声明 `selectable?: boolean | ((row:number)=>boolean)`，**实现未读取该列属性**。state 初始 `selectedMap:new Map()`、`selectingMap:new Map()`；data `selectingStart?:DTableCellPos`、`disableSelectable?:boolean`。

#### 全部实例方法

```ts
selectCells(selections:DTableSelection|DTableRangeSelection|DTableSelections|DTableCellPos[],
    options?:{clearBefore?:boolean;deselect?:boolean;selecting?:boolean;
        callback?:(this:DTableSelectable,cells:DTableCellPos[])=>void}):DTableCellPos[];
selectingCells(selections:DTableSelection|DTableRangeSelection|DTableSelections,
    options?:{clearBefore?:boolean;deselect?:boolean;
        callback?:(this:DTableSelectable,cells:DTableCellPos[])=>void}):DTableCellPos[];
deselectCells(selections:DTableSelection|DTableRangeSelection|DTableSelections,
    options:{clearBefore?:boolean;selecting?:boolean;
        callback?:(this:DTableSelectable,cells:DTableCellPos[])=>void}):DTableCellPos[];
selectNextCell(direction?:'right'|'down'|'left'|'up'):DTableCellPos|undefined;
isCellSelected(cell:DTableCellSelection|DTableCellPos):boolean;
isCellSelecting(cell:DTableCellSelection|DTableCellPos):boolean;
isRowSelected(row:number|string|RowInfo):boolean;
isColSelected(col:number|string|ColInfo):boolean;
hasCellSelectInRow(table:DTableSelectable,rowIndex:number):boolean;
hasCellSelectInCol(table:DTableSelectable,colIndex:number):boolean;
getSelectedCols():ColInfo[];
getSelectedRows():RowInfo[];
getSelectedCells():DTableCellPos[];
getSelectedCellsSize():number;
selectAllCells():void;
deselectAllCells():boolean;
copySelections():boolean;
copySelectedCols():boolean;
// 仅类型声明，没有对应实现或调用：
selectOutsideClick?:(event:MouseEvent)=>void;
```

`hasCellSelectInRow/Col` 原函数以显式 `table` 参数而非 `this` 编写，然后又作为实例方法统一 bind(this)，所以对外调用依然要求传 table；其内部渲染路径直接调用局部函数，不触发该签名问题。

#### 全部深层模块导出辅助函数

```ts
parseCell(cellSelection:DTableCellSelection):DTableCellPos|undefined;
parseSelectionCell(selection:DTableSelection):DTableCellPos|undefined;
parseSelection(this:DTableSelectable,selections:DTableSelection):DTableCellPos[];
parseRange(this:DTableSelectable,range:DTableRangeSelection):DTableCellPos[];
parseSelections(this:DTableSelectable,selections:(DTableSelections[number]|DTableCellPos)[]):DTableCellPos[];
stringifySelection(start:DTableCellPos,end?:DTableCellPos):DTableSelection|DTableRangeSelection|'';
getMousePos(table:DTable,event:MouseEvent,options?:{ignoreHeaderCell?:boolean}):DTableCellPos|undefined;
isEmptyCellData(data:unknown):boolean;
trimDataGrid(data:unknown[][]):unknown[][];
```

#### 选择和交互语义

- `C2` 为布局第三列的全部数据行；`R3` 为布局第四行的全部列；`C2R3:C4R7` 为闭区间矩形；反向拖动归一化 min/max。缺省 row/col 为 -1，表示整列/整行；HEADER 鼠标坐标 row=-1。正则仅接受非负十进制数字，但 TS 的 number 模版字符串没有如此约束；正则也未做首尾锚定。
- selectCells 默认 `clearBefore:true`；每次都清 selectingMap，默认还清 selectedMap，再按 selectable 过滤插入 Map；`selecting:true` 写 selectingMap。若没有任何候选被接受，返回 [] 且不 update，**此时之前的 Map 可能已经清空但界面/回调未更新**。
- 正常成功返回/回调参数是 beforeSelectCells 后的候选全集，不是 selectable 过滤后的真实结果；clearBefore=false 支持编程追加，deselect:true 支持编程删减。`deselectCells` 未显式给 clearBefore:false 时仍会先清全选区。临时 selecting 也走同一 onSelectCells 回调。
- selectAllCells 直接批量写 selectedMap 并 forceUpdate，不调用 beforeSelectCells/onSelectCells；deselectAllCells 仅清 selectedMap（不清 selectingMap），仅非空返回 true，不调用选择回调。selectAllCells 仅对函数形式 selectable 做检查，外部直接调用时即使 selectable=false 仍可填充选区。
- 选择按布局下标保存在 Map；排序/过滤/列重排后未自动按 ID/name 重映射，选择可能换到其他数据。
- isRowSelected 遍历所有布局列，名 INDEX 视为无需选中；isColSelected 要每个当前布局行都选中。对被 selectable 回调禁止的格子没有豁免，所以允许部分选择时“整行/整列”判断可能永远为 false。getSelectedRows/Cols 只返回全选行/列，排序为 index 升序；getSelectedCells 保留 Map/Set 插入顺序，未按位置排序。
- mousedown 保存起点并启动鼠标自动滚动；非左键若当前已选中，或表头对应整列/第一列对应整行已选中，会保留选区。smooth mousemove 预览选区；document mouseup 停止自动滚动，再 requestAnimationFrame 确认选区。selectOnClickCell 不为 true 时距离 <4px 不触发选择。
- 输入、textarea、contenteditable 内不启动指针选择；document click 若不在 `#id` 或 ignoreDeselectOn 匹配范围内则 deselectAllCells。没有内置 Shift 扩选/Ctrl 多段鼠标累加实现（编程接口可追加）。
- selectNextCell 从选区最小 row 和最小 col 的位置移动一格，默认 right；不可选/越界直接停止，不跳过禁用单元格，不换行；成功调用 scrollTo、selectCells 后返回位置。
- 默认热键：全选 `$mod+a`、复制 `$mod+c`、右移 `Tab,ArrowRight`、左移 `ArrowLeft`、下移 `ArrowDown`、上移 `ArrowUp`。false 禁用某名，true 恢复默认，string 改键；false 总体禁用自动映射。生成项后置覆盖同键的 options.hotkeys。全选在 state.editingCell 存在时跳过；复制未做同样判断。
- copySelections 以选区最小行列为左上角构造稀疏二维数组，缺格为空；优先取草稿值，无草稿方法时取原始值。copyHeader=true 前插所涉及列的表头；若表头等于列名则复制为空串。copySelectedCols 总是复制完整选中列且含表头，不受 copyHeader 控制。
- 复制格式固定 TAB 分列、LF 分行；trimDataGrid 删末尾全空行列，空定义为 undefined/null/空字符串，保留 0/false；全空非空矩阵仍至少保留左上角一格。没有 TSV 引号/转义或 HTML 表格格式。
- 两个复制方法同步返回 boolean，调用 `navigator.clipboard.writeText` **不 await、不捕获异常**；true 只表示发起复制，不能承诺剪贴板成功。
- CSS：根 `.dtable-selectable` 禁止 user-select；格子 `is-select is-selecting`、`is-select is-selected`；INDEX 格 `is-row-selected has-cell-selected`；表头 `is-col-selected has-cell-selected`。变量 `--dtable-selected-color` primary-300、`--dtable-selected-bg` primary-50、`--dtable-selecting-bg` primary-100、`--dtable-highlight-color` primary-600。选中背景覆盖 striped 背景。

### `datagrid`：组合式二维网格

来源：[datagrid/index.ts](../dtable/src/plugins/datagrid/index.ts)。运行时依赖 `[editable,selectable,hotkey,resize,history,autoscroll]`，递归得到 draft/store/mousemove。**无 when，加入 plugins 后总是启用；无 datagrid:boolean 开关。**导出 `datagridPlugin`、`datagrid`、`DTableDatasource`、`DTableDatagridTypes`、`DTableDatagridDependencies`、`DTableDatagrid`、`expandGridSize`。

```ts
interface DTableDatasource {cols?:ColSetting[];data?:unknown[][]}
```

| 选项 | 类型 | 默认值 / 语义 |
| --- | --- | --- |
| `datasource` | `DTableDatasource` | 必填、无默认；缺失时转换器解构失败 |
| `minRows`, `minCols` | `number` | 20 / 10 |
| `extraRows`, `extraCols` | `number` | 5 / 5 |
| `showRowIndex` | `boolean` | true，插入 INDEX 固定左列 |
| `autoExpandGrid` | `boolean\|number` | true；number 作为新内容后额外行列数 |
| `datagridHotkeys` | `false\|{delete?,paste?,focus?,cancel?,cut?,redo?,undo?}`，各项 `boolean\|string` | `{}`；类型仅声明 7 个动作 |
| `cellValueSplitter` | `string` | `'\t'`；实际粘贴/复制未读取，固定 TAB |
| `onReadClipboardFail` | `()=>void` | 未设；拒绝权限或读取抛错时 call(this) |
| `deletedKey` | `string` | 未设；本插件没有读取它 |

覆盖其他插件/核心默认：`defaultColWidth:80`、`headerEditable:true`、`rowHover:false`、`colHover:false`、`cellHover:true`、`bordered:true`、`striped:false`、`cellValueGetter` 指向二维数据读取器、`hotkeys:{}`、`copyHeader:false`、`selectOnClickCell:true`。data 为可选 `rowsCount`、`colsCount`，无独立 state，使用依赖插件状态。

#### 全部实例方法

```ts
deleteSelections():boolean;
cutSelections():boolean;
pasteToSelectedCol():Promise<boolean>;
deleteSelectedCols():boolean;
deleteSelectedRows():boolean;
clearSelectedCols():boolean;
cutSelectedCols():boolean;
pasteCells(targetCell:DTableCellPos|{colName:string;rowID:string},
    options?:{expandCells?:boolean;select?:boolean;data:string}):Promise<boolean>;
pasteToSelection():Promise<boolean>;
getGridSize():{rowsCount:number;colsCount:number};
appendRows(countOrList?:number|(RowData|unknown[])[],
    options?:{autoScroll?:boolean;skipUpdate?:boolean;select?:boolean}):boolean;
appendCols(countOrList?:number|unknown[][],
    options?:{autoScroll?:boolean;skipUpdate?:boolean;select?:boolean}):boolean;
expandGridSize(size:{rowsCount?:number;colsCount?:number},
    options?:{skipUpdate?:boolean}):boolean;
```

`pasteCells` 实现另接受 `autoscroll?:boolean`（未在公开 methods 类型声明）；options.data 类型上必填，但实现允许省略 options.data 并读取系统剪贴板。appendRows/appendCols 默认 countOrList=1。

#### 数据布局和编辑协作

- source cols 只用于匹配 name 为 INDEX/C1/C2……的配置；最终自动创建数量由 getGridSize 确定，不能任意命名数据列。showRowIndex!==false 时 INDEX 默认 `{width: String(rowsCount+1).length*8+24,name:'INDEX',fixed:'left',align:'right',title:'#'}`，允许 datasource.cols 中同名配置覆盖。
- 数据列 C1…CN 默认宽 80，匹配 datasource.cols 后合并。核心 `data` 被转换成行数 number；行 ID 来自核心数字数据源序号。cellValueGetter 对 INDEX 返回 row.index+1，对普通格从 `datasource.data[+row.id][Number(col.name.slice(1))-1]` 读取，对 HEADER 保留 title。
- getGridSize rows=max(草稿最大行 ID+1,源数据 length+extraRows,minRows,data.rowsCount)，cols=max(草稿最大 Cn,minCols,datasource.cols.length,源最长行 length+extraCols,data.colsCount)。草稿 HEADER 行完全不参与尺寸推导；datasource.cols.length 可能把 INDEX 也算作数据列数量。若这些选项被显式 undefined 覆盖，getGridSize 内部的解构回退是 minRows/minCols=1、extraRows/extraCols=0；通常使用插件默认的 20/10/5/5。
- options 组合强制 INDEX 不可编辑、不可 resize；showRowIndex 时 col=0 不可选择。用户原函数仍先执行；若原配置 false 则维持 false。beforeSelectCells 将全为 col=0 的选择改为对应整行选择，然后交给原回调。
- 输入框 onPaste 读 clipboardData；包含 TAB 或换行且正在编辑时调用 pasteCells 并 preventDefault，随后仍调用用户 onPasteToCell。普通单行单格文本留给浏览器输入框原生粘贴。
- afterStageDraft 先调用原回调（包含 history 包装），再计算非空草稿范围并按 autoExpandGrid/extraRows/extraCols 扩容；`ignoreEmptyCell` 只过滤列最大值，行最大值仍取出现过的 rowID，因此清空远端行也会扩大行数。
- appendRows(number) 增加容量；appendRows(array) 先将 row arrays 转 `{C1:...,C2:...}` 或原对象暂存，再扩容。appendCols(array) 输入按列排列二维数组，并转为按行草稿。默认选中新加入区域、滚动到末尾；skipUpdate=true 同时跳过这些选择和滚动动作。expandGridSize 只增不减，内部 append* skipUpdate，最后可统一 dirtyType:'options'。
- 删除选区写 emptyCellValue；删除整行/整列用 editable 的位移方法再清空选择，不减少网格容量；clearSelectedCols 会连同 HEADER 清空所选列，只记录非 undefined/null/emptyCellValue 的格子。
- cutSelections/cutSelectedCols 先同步启动复制，再立即清空；若异步剪贴板拒绝，原内容仍被清空，应列为数据可靠性缺陷。
- pasteToSelection 选择 `getSelectedCells()[0]`（插入顺序，未保证几何最左上）；pasteToSelectedCol 从首个完整选中列、HEADER 行开始粘贴。
- pasteCells 接受具体 rowID/colName 或布局坐标。未提供 data 则先 `navigator.permissions.query({name:'clipboard-read'})`，拒绝或任何错误调用 onReadClipboardFail 并返回 false，然后读取 text；空文本 false。未实现 permissions API 不支持时的原生事件回退。
- 文本按 `/\r?\n/` 分行、TAB 分列，跳过最后一行纯空白；默认 expandCells=true，越界生成数字行 ID 和 Cn 列名，否则截断越界内容；所有值保持字符串，不解析类型。stageDraft skipUpdate、可选选中、一次 update，只有显式 `autoscroll:true` 才滚动到最远粘贴位置。true 表示已执行这一流程，不保证 stageDraft 未被 onStageDraft 拒绝；未逐格执行 editable 权限、headerEditable 或 onEditCell。
- CSS 仅增加 `.dtable-datagrid` 和 INDEX 列背景 `var(--dtable-header-bg)`。

#### 热键契约与当前实现缺陷

- 本插件实现的动作：Delete/Backspace 清空（event.target 为 input/textarea 时跳过）、`$mod+x` 剪切、`$mod+v` 粘贴、Enter 编辑首格、Escape 清空选择、`$mod+z` 撤销、`$mod+Shift+z` 重做。默认处理器不统一 preventDefault/stopPropagation，除 delete 外没有统一编辑器焦点屏蔽。
- defaultHotkeys 还列出 selectAll/copy/方向键，但本模块 hotkeyHandlers **没有这些处理器**。options 合并时后置写入 undefined，覆盖 selectable 刚生成的同键处理器；tinykeys 收到匹配键时可调用 undefined。不能把 datagrid 的全选/复制/方向快捷键宣称为已通过现有行为验证；VTable 必须修正动作映射和合并策略。
- `datagridHotkeys:false` 只停用本插件生成项，selectable 的快捷键仍可能有效；同样，关闭一个插件的热键不等于关闭所有热键。
- showRowIndex=false 时，appendCols(array) 用 `C${colsCount+colIndex}`（应为新增第 N+1 列）、粘贴越界列用 `C${layoutColIndex}`（应在无 INDEX 时 +1），会覆盖最后已有列/错位一列。

### `hotkey`

来源：[hotkey/index.ts](../dtable/src/plugins/hotkey/index.ts)。无依赖；启用 `!!options.hotkeys`。导出 hotkey/hotkeyPlugin/DTableHotkeyTypes/DTableHotkey。选项 `hotkeys?:HotkeysBindingMap`，无默认；data `hotkeysScope:string`；没有独立 methods/state。

- mounted 时复制映射，将一个配置键按逗号分割、trim、忽略空串；非空映射绑定在 table.element，scope=`dtable_${id}`。事件会从内部输入框冒泡至根；插件自己不排除表单输入。
- unmounted 时按 scope 调用 unbindHotkeys。配置变化但插件一直有效时没有 updated 重绑逻辑，绑定仍可能保持初始 callbacks/键位。
- core 当前实现使用 tinykeys、默认 keydown，有 compositionstart/end 屏蔽组合输入的基础处理；本插件没有额外热键焦点管理。不要把“有 hotkey 插件”等价为完整键盘可访问性。

### `contextmenu`

来源：[contextmenu/index.ts](../dtable/src/plugins/contextmenu/index.ts)。无依赖；启用 `!!options.contextmenu`。导出 contextmenu/DTableContextMenuTypes/DTableContextMenu；局部 `DTableContextMenuCreator` 未 export。

```ts
type Creator = (this:DTableContextMenu,event:MouseEvent,
    info:DTablePointerInfo)=>ListitemProps[]|undefined;
contextmenu?: ListitemProps[] | Creator | {
    cell?:ListitemProps[]|Creator;
    header?:ListitemProps[]|Creator;
};
getContextMenuItems(event:MouseEvent,info:DTablePointerInfo):ListitemProps[]|undefined;
// data 类型声明，但插件没有真正设置该值：
data.contextmenu: ContextMenu;
```

- 表头/正文分支以 `info.rowID==='HEADER'` 判断，函数以 table 作为 this 调用；全局数组对两者通用。无匹配指针或空条目不阻止浏览器原生右键菜单。
- 有条目时 preventDefault，对 cell 增加 `has-contextmenu-show` 和 `active`，调用 ContextMenu.show `{items,key:'dtable-ctx-'+id,triggerEvent:event,hideOthers:true,onHide}`。
- hide 只移除 `has-contextmenu-show`，未移除 active；未将 ContextMenu 实例保存到声明的 data.contextmenu，也未在自身 unmount 主动关闭/销毁按 key 创建的菜单。应保留菜单内容接口，改进实例所有权和 CSS 状态清理。
- 没有默认复制/剪切/删除菜单项；dev 中名为 copy 的条目仅是配置示例，并未绑定复制行为。CSS `.dtable-cell.has-contextmenu-show::after` primary-500 背景 10% opacity。

### `store`

来源：[store/index.ts](../dtable/src/plugins/store/index.ts)。无依赖；导出 store/DTableStoreTypes/DTableStore；选项 `store:boolean` default true，启用 !!store；data 返回 `new Store('DTable:'+id)`，无 methods/state。

- `data.store` 是 `@zui/store` 实例，默认 localStorage profile，`.session` 得到相同 profile 的 sessionStorage 实例；供 history/其他插件使用，不等同于自动持久化所有 DTable 状态。
- 实际完整 key 形如 `ZUI_STORE:DTable:<id>:<key>`。Store 当前已处理禁用/配额失败的读写降级到内存，但对象保存使用 JSON.stringify，不能保存 undefined 删除标记及任意 unknown 类型；JSON.stringify 本身在 Store.set 的存储 try 之外，循环引用等会抛出。
- 构造时 data 初始化不受 when:false 阻止。插件无 destroy 生命周期、清理 profile、跨页恢复表格状态 API。

### 建议在 VTable 明确列为“修复缺陷”而非原样复制的项目

| 优先级 | 源码证据 | 改进 / 兼容处理 |
| --- | --- | --- |
| 高 | selectable:574 仅依赖 mousemove/hotkey；642/649/303 直接调用 autoscroll 方法 | 补真实依赖；方法名可不变；独立 selectable 必须可用 |
| 高 | datagrid:308-333 默认键含缺失 handler；117-151 handler 列表 | 不以 undefined 覆盖 selectable 动作；共享动作 registry 或只合并本插件动作 |
| 高 | editable:145/149 + draft:mergeDraft | deleteRows 尾行需显式清空，不能 merge `{}`；区分“移位删除”与实体删除 |
| 高 | selectable:516/537、datagrid cut* | 提供可等待的剪贴板结果，复制成功后才清空；旧同步 boolean 保留兼容包装/另加 async API |
| 高 | history diffDraft undefined + Store.set JSON.stringify | 历史补丁采用可序列化删除哨兵，或序列化前编码；确保内存和溢出撤销一致 |
| 高 | datagrid:236/528 | 用稳定的数据列名与布局下标映射处理 showRowIndex=false，覆盖越界粘贴与追加列 |
| 高 | selectable selectedMap 类型和 getSelected* | 内部以 rowID/colName 稳定定位并提供旧索引 API 适配；重排/过滤后不得悄悄选择其他记录 |
| 中 | editable:237 | 使用 Escape 且定义取消/提交行为；保留兼容 Esc 事件可接受 |
| 中 | selectable:47 只有类型；editable deleteCells/pasteCells | 列 selectable、editable 及校验在所有写入入口一致执行；目前这些并非权限边界 |
| 中 | selectable selectCells:clear → early return | 空选择/全被过滤也要刷新，回调提供真实生效集合；统一 selectAll/deselectAll/preview 的事件含义 |
| 中 | draft 回调传增量；null/undefined 运行时语义 | 显式补丁类型区分“不变 / 值 undefined / 删除覆盖 / 清空”并兼容旧 draftRows 输入 |
| 中 | history:19、draft/editable history:20 | 修正 historyThreshold:number、history boolean 与容量选项歧义；历史上限另设参数 |
| 中 | selectable hasCellSelectInRow/Col 显式 table；deleteCells 第二参数未用 | 修正方法签名/提供兼容重载；对仅声明未实现项单独记录，不能虚称支持 |
| 中 | datagrid cellValueSplitter/deletedKey 仅声明；paste autoscroll 类型缺失 | 对无效配置决定实现或正式弃用；补齐实际支持的 options 类型 |
| 中 | hotkey 只有 mounted/unmounted | 动态选项变更时重绑；规定表格焦点、输入框默认行为、组合输入、全局事件清理 |
| 中 | contextmenu active 未清、data 实例未赋值、缺卸载处理 | 确保菜单实例可追踪、destroy 后无残留，关闭恢复格子状态 |
| 中 | history 无 unmount 清理/索引恢复；深拷贝只有一层 | 明确容量、生命周期、序列化格式和复杂值支持边界 |
| 性能 | selectAll 逐单元格 Map、parseRange 展开全部、diffDraft 对全草稿、getGridSize 每次扫描 | 内部区间表示选择、增量补丁/尺寸索引；在旧 getSelectedCells 等方法才按需展开 |

### 推荐验收用例（新组件实现阶段）

1. 每个独立插件与 datagrid 聚合启用、停用、再次启用、更新选项、销毁，所有事件/热键/RAF/定时器/菜单资源无残留。
2. 基础值 → applied → staging 优先级；服务器应用旧值时不覆盖更新后的 staging；undefined/null/空串及空对象语义；回调拒绝及 skipUpdate 顺序。
3. 表头编辑开关、权限函数、双击/已选格点击、Enter/Escape/blur、中文组合输入、聚焦不滚动、文本多行粘贴；取消与提交结果一致。
4. 删除前/中/后行、非连续多行、全部行、删除列含 HEADER、INDEX 保护、尺寸保持；尾部没有重复值。
5. 反向矩形/整行/整列/离散选区、不可选格、空结果、selectAll/deselectAll、临时预览、点击外部、右键保留、拖动自动滚动；排序过滤后的稳定定位。
6. 复制含/不含表头、稀疏选择、全空/0/false/对象/含 TAB 换行值；成功、拒绝、API 不存在；剪切失败不得清空。
7. 在 HEADER/首格/尾格粘贴，expandCells=false 截断，showRowIndex true/false，单元格编辑输入 paste 与快捷键 paste 不重复应用；appendRows/Cols number/array 与批次 skipUpdate。
8. staging/applied 两种历史目标、undo/redo/撤销后新分支、无变化补丁、超过阈值存储、落盘 undefined 删除恢复、存储不可用/配额不足、销毁重建与 ID 冲突。
9. 用户 hotkeys 与两套插件热键开关/改键冲突，复制/全选/方向键映射不为 undefined；输入框与表格操作焦点互不抢占。

## 10. 已有集成、文档差异与验收覆盖

扫描边界为仓库受版本管理的 `lib`、`src`、`dev`、`scripts`、`config`、`tests`、文档源；忽略 `exts`、`node_modules`、`dist/build/publish` 和技能内打包 vendor 资源。外部禅道扩展消费方不在本次实证范围内，不能据本仓库使用点很少就缩窄兼容要求。

| 入口 | 实際依赖的契约 | 对 VTable 的要求 |
| --- | --- | --- |
| [DTable 调试页](../dtable/dev.ts) | 自定义列示例组合 `rich/actions/resize/sortCol/customCol`，三分区固定列、`colResize/sortCol/customCol: true`；`productTable` 为 2000 行组合 `rich/headerGroup/sortable`；普通业务表示例组合 `checkable/nested/moveable/actions/pager/sortable` 且 `moveable: 'header'`；电子表格组合 `datagrid/cellspan/custom/contextmenu` | 这些组合是复用验收场景；不能把单插件测试通过等同组合兼容 |
| [datagrid 插件](../dtable/src/plugins/datagrid/index.ts) | 仓库不存在独立 `lib/datagrid`。电子表格是 `datagrid` 插件，直接依赖 `editable/selectable/hotkey/resize/history/autoscroll`；间接依赖 draft/store/mousemove；需要原始 row/col 索引、HEADER/INDEX/Cn 标识、选区/草稿/历史/滚动方法 | 这是插件协议最重要的内部消费者，不能只替换渲染层表面 API |
| [Dashboard HTML 示例](../dashboard/public/block-6.html) 和 [调试页](../dashboard/dev.ts) | `new zui.DTable(selector, options)` 全局注册；固定列、`flex/minWidth`、sortType、复选、nestedToggle、action 列、样式/响应式、footPager、footer token | 必须提供全局/Vanilla 适配。该示例含历史 `'col-hover'` 插件名和 `null` 插件项；当前无 col-hover 实现，不能误当成新增插件需求；需维持对假值条目和未知插件的既定处理 |
| [form-builder 包](../form-builder/package.json) | 只发现 `@zui/dtable` 依赖声明，没有实际源代码导入 | 不以未使用依赖推导运行时需求 |
| [NPM 类型聚合器](../../scripts/build/npm-types.ts) | 根 `zui` 包重命名导出 `BlockProps as DTableBlockProps`、`CustomRenderResult as DTableCustomRenderResult`、`CustomRenderResultGenerator as DTableCustomRenderResultGenerator`、`CustomRenderResultList as DTableCustomRenderResultList` | 改名新组件后仍应维持旧类型别名入口；避免与 core / dashboard 同名类型冲突 |
| [官网示例脚本](../dtable/docs/lib/components/index.js)、[插件示例脚本](../dtable/docs/lib/components/plugins.js) | 浏览器全局 DTable、按名称激活插件、初始化 option、多个样式变量和示例 DOM | 可整理为手工/浏览器验收夹具，但现有源码文档不是已运行通过的证明 |

文档与源码差异需要显式处理：

- [插件文档](../dtable/docs/lib/components/plugins.md) 的 `sortable.onSortEnd` 少了第五个 `orders` 参数；把 `onSort` 说成“拖动过程中”调用，但源码实际在释放时调用。
- 同一文档把 `toolbar.footToolbar` 缩写成 `Partial<ToolbarOptions>`，源码是 `ToolbarSetting<[DTableWithToolbar]>`；文档展示 toolbar 用法却未告知该模块未被插件聚合入口导出。
- `resize/contextmenu/hotkey/mousemove/selectable/filter/moveable/datagrid/draft/editable/history/autoscroll` 被文档列为“更多插件开发中”，但都有实际源码；VTable 范围不能把它们排除。`sort-col/custom-col` 甚至未在该列表中出现。
- 复选文档部分段落使用 `isAllChecked()`，实际方法是 `isAllRowChecked()`；API 快照里 `canRowCheckable` 写成仅 boolean，源码还支持 `'disabled'`。保留实际实现名称，并对旧文档名选择显式兼容别名或纠正文档，不能误称原实现已经支持。

现有测试覆盖（本次仅阅读测试，未执行）：

1. [dtable-checkable.spec.ts](../../tests/e2e/dtable-checkable.spec.ts) 共 6 个真实浏览器用例：表头全选/全不选、表尾全选/全不选、点击表尾 wrapper 只切一次、单行勾选/取消、逐行选完联动表头/表尾、原生 input 聚焦后 Space 激活。它用 `plugins: ['checkable']` 并依赖旧 DOM 类 `.dtable-header/.dtable-footer/.dtable-block/.dtable-checkbox`。挂载前先进入 `/dtable/` 以加载样式与注册，因此也说明测试不覆盖独立入口最小加载。
2. [distribution.test.ts](../../tests/build/distribution.test.ts) 检查发布包 ESM/CJS 的 `DTable` 为函数且运行时导出键一致，UMD 与其一致；类型消费夹具导入 `DTableBlockProps` 和 `DTableCustomRenderResult`。没有实例化表格或验证插件深层导入/行为。
3. 没发现 DTable 专门的 unit/DOM 测试。当前 [docs examples](../../tests/docs/examples.spec.ts) 固定页面列表没有 dtable，[smoke](../../tests/e2e/smoke.spec.ts) 列表也没有 dtable。因此不能用通用测试或 docs 构建通过宣称所有 DTable 特性已经验收。

VTable 的兼容测试至少需要新增：插件注册/顺序/生命周期与深层导出契约、所有选项的默认/覆盖/重置矩阵、回调 this/参数/取消语义、三分区与横纵虚拟滚动、所有拖动/菜单/快捷键组合、数据网格剪贴板/草稿/历史组合、旧 DOM/CSS 适配、重复装卸资源清理、真实数据规模性能基准。保留现有 6 个复选行为用例作为最低回归门槛。

### 拖动与交互插件的缺陷及改进

下列结论来自静态源码路径，不声称已经做过浏览器复现。建议在新实现中保留名称和参数，修正明显违背其语义的行为；若外部消费者依赖旧错误行为，才通过兼容模式过渡。引入更大改动前，应给原实现补最小重现或契约夹具。

| 证据 | 现状问题 | VTable 改进与兼容策略 |
| --- | --- | --- |
| [sortable](../dtable/src/plugins/sortable/index.tsx) `document_mouseup` 中 `ids.splice(toIndex, 0, row[0])` | 插入索引未根据 before/after 和移出方向调整。例如 `[A,B,C,D]` 把 A 放到 C 之前，计算出 `[B,C,A,D]` | 保留排序回调签名，按目标语义正确重排；做上下方向、前后位置和相邻行矩阵测试 |
| [sort-col](../dtable/src/plugins/sort-col/index.tsx) 先移出再用旧 `toIndex + after` 插入，提交阶段直接 splice `layout.cols[side].list` | 向后移动的插入位置偏一；`onSortCol` 返回 false 之前已修改当前 layout 分区数组，取消不是无副作用。预览重复相同索引算法 | 在副本中计算稳定结果，再调用确认回调，接受后一次提交；保留现有 state/order 回调数据形状 |
| [sort-col](../dtable/src/plugins/sort-col/index.tsx) `mousedown` 对比 `onRenderHeaderCell` | `sortCol` 列名数组/函数仅决定 `.is-sortable-col` 样式，开始拖动时未验证，未允许的表头仍能进入拖动 | 在行为入口落实声明限制；补 `data.disableSortCol` 类型 |
| [sort-col](../dtable/src/plugins/sort-col/index.tsx) `getSortingColState` 一律 `left = scrollLeft + pos` | 固定左/右分区也加中央滚动量；命中使用 `width` 而实际布局可能是 `realWidth` | 统一分区坐标转换，用真实宽度命中；固定列/弹性列组合实测 |
| [custom-col](../dtable/src/plugins/custom-col/index.tsx) `required \|\| !canSetColVisibility?.(...)` | 未提供 canSet 回调时 optional call 返回 undefined，`!undefined` 导致默认“隐藏列”禁用；直接方法却完全不验证 required/canSet | 允许规则采用 `callback !== false`；菜单和命令共用校验；属于修正旧错误默认行为 |
| [custom-col](../dtable/src/plugins/custom-col/index.tsx) 去共享边框时把邻列整个值置 `false` | 若邻列边框是 `true`，移除与当前列共享的一侧，也会清掉邻列另一侧 | 将共享边拆成左右布尔语义计算，保留旧 `ColBorderType` 输入/输出 |
| [resize](../dtable/src/plugins/resize/index.tsx) dblclick 删除 colsSizes，`onAddCol` 又 `?? col.setting.extraWidth` | 有初始 `extraWidth` 时双击可能重新应用该偏移，回调却声明恢复到 0 | 明确“恢复原宽”与“恢复初始额外宽”的定义，存储显式 0 或专门 reset 方法；按选定语义校准回调 |
| [autoscroll](../dtable/src/plugins/autoscroll/index.ts) `Math.max(maxStep, distance)`、不读取 onlyInside、左上 threshold 为 `edge - padding` | `maxStep` 实为下限，onlyInside 无效，边缘触发不对称 | 使旧参数按名字/文档真正生效，性能上可改统一 rAF 时间步进；必要时为旧行为提供显式兼容开关，不默认照搬错误 |
| [autoscroll](../dtable/src/plugins/autoscroll/index.ts) `scrollTo` 不区分 col.side | 定位固定列也可能改变中央水平滚动量 | 固定列只做存在/可见判断，中央列才调整 scrollLeft；保留 boolean 表示“目标存在”的返回语义或另加新方法表达“确实滚动” |
| [mousemove](../dtable/src/plugins/mousemove/index.ts) document rAF 写 `mmRafID = 0` 且没有卸载钩子 | 两组 rAF 状态混淆；卸载后可能继续派发；10ms 点击抑制计时器未清理，mousedown 清 timer 却不清标记 | 两组帧任务独立正确复位并统一销毁；实现真正“下次点击”语义或明确时间窗；不要悄悄把 preventDefault 等价成停止插件传播 |
| [moveable](../dtable/src/plugins/moveable/index.ts)、[sortable](../dtable/src/plugins/sortable/index.tsx)、[sort-col](../dtable/src/plugins/sort-col/index.tsx) 各自监听鼠标、直接读写共享 data | 各插件缺少统一手势仲裁；平移与排序/编辑可竞争，鼠标离窗/取消缺少完整结束路径；只支持鼠标事件 | 可内部引入 Pointer Events 和单一手势状态，维持旧 mouse event 钩子桥；明确取消、pointer capture、touch/pen 和 teardown。新增触控属于体验增强而非原有能力 |
| [toolbar](../dtable/src/plugins/toolbar/index.tsx) 仅类型依赖 checkable | `showToolbarOnChecked` 可在 getChecks 不存在时失败 | 增补显式运行时依赖或做稳定的可选能力检查，不要求使用者猜隐式依赖 |

## 11. 新组件应特别评估的设计调整

### 11.1 可以保持现有接口的核心修复与优化

除插件章节已列的问题外，下列调整优先在内部完成，避免让性能优化变成业务迁移负担。结论来自源码静态分析；实现前用针对性用例固定旧行为与期望行为。

| 问题与证据 | VTable 要求 | 兼容处理 |
| --- | --- | --- |
| [Block](../dtable/src/components/block.tsx)/[Cells](../dtable/src/components/cells.tsx) 渲染全部中心列，未使用 col.visible；行窗口无预渲染余量 | 同时虚拟化行和中心列，固定列持续展示；预渲染余量避免快速滚动白屏 | 保留布局中完整列列表、公开查询及滚动方法；DOM 只表示视口。原插件依赖离屏 DOM 时提供几何查询/适配，不能盲删节点 |
| [核心](../dtable/src/components/dtable.tsx) shouldComponentUpdate 恒 true，layout dirty 重建全量行列 | 区分数据、列、尺寸、滚动和单格更新，只重算受影响部分；滚动不重做排序、树和全表合并分析 | 保留 update 的 dirtyType 与 setState/forceUpdate 入口，不把内部增量索引暴露为用户必填参数 |
| [列布局](../dtable/src/helpers/layout.ts) flex 后未再次限宽、固定区过宽边界弱 | 非负有效尺寸，min/max 约束和余量分配可预测；不产生负中心宽与 NaN | 普通输入维持同样结果，异常输入明确回退策略；修正超限是有意差异 |
| [核心事件](../dtable/src/components/dtable.tsx) 停用插件不 off、重新激活可重复安装；responsive/hover 首次绑定 | 事件、RAF、计时器、observer 和弹层按插件拥有并随停用/销毁释放；动态更新生效 | 保留旧 onMounted/onUnmounted/onDestory。销毁钩子支持正确拼写别名时去重，避免同一函数执行两次 |
| [插件解析](../dtable/src/helpers/shared-plugins.ts) 依赖去重标记发生在递归之后；requireAfter 一次排序 | 检测循环、输出可定位依赖错误；稳定拓扑顺序，明确缺依赖和同名策略 | 对无环、无冲突的旧插件保持顺序；循环/矛盾约束不再栈溢出。不要在兼容层突然把所有未知名字警告升级为致命错误 |
| [核心](../dtable/src/components/dtable.tsx) 字符串行查询可能扫描 allRows；row/col ID 缺失或重复未校验 | 原始与视图索引分离，按 ID/name O(1) 定位；对重复/缺失 ID 给出明确诊断 | 数字索引与字符串 ID 的旧区分保持；业务保留 HEADER/INDEX 的冲突要有迁移提示 |
| [点击命中](../dtable/src/components/dtable.tsx) closest 不检查是否属于本实例，部分插件拼接 ID selector | 命中限定在本表，支持含特殊字符的业务 ID，多实例相互隔离 | 保留 data-row/data-col 与回调 payload；避免通过禁止合理 ID 回避转义/作用域问题 |
| [渲染组件](../dtable/src/components/cell.tsx) 和 rich/custom 多条内容协议并存 | 文本、值变换、VNode、显式 HTML、内容容器属性各有明确落点 | 旧 CustomRender 描述对象继续适配；不能把普通字符串默认当 HTML，也不能静默删除明确要求的 HTML 功能 |
| [核心键盘](../dtable/src/components/dtable.tsx)、各交互插件 | 明确焦点单元格，补 grid/row/columnheader/gridcell、行列计数/索引、aria-sort/selected/expanded 等适用语义；编辑态、IME、Tab、方向键、Home/End、PageUp/Down协调 | 保留旧回调，同时修正失效键位；不能以整表 tabIndex=-1 代替可用的键盘导航。触控/笔支持列为新增体验 |

### 11.2 改接口收益较大的候选项

**下列是建议，不是本次已经批准的新 API，也不要求为了统一命名一次性改完所有接口。** 旧接口适配优先；确有不可兼容之处，应在独立版本/显式模式说明，不默认破坏旧应用。

| 候选变化 | 改变的理由与收益 | 推荐兼容路径与需要决定的问题 |
| --- | --- | --- |
| 同步 `rowDataGetter(ids)` 之外增加批量异步数据源 | 当前按可见行逐个同步读取，没有 loading/error/取消/去重；无法可靠支持远端大表和异步子树 | 保留同步 getter 原签名；新数据源独立支持 Promise、总量、批次、请求取消、缓存和失败重试。不能让旧同步查询突然返回 Promise。树异步加载另外定义父节点加载状态 |
| 使用稳定 ID/name 的选区和焦点模型 | 当前选区绑定布局索引，排序/分页/重排后可能指向别的数据；全部选择展开为每格 Map 成本高 | 内部用 ID/区间，旧 `C0R0` 和位置数组在视图边界转换；新增稳定定位 API；明确全选是当前页、过滤后集合还是全部数据，不改变 checkable 的既有 allRows 默认语义 |
| 明确受控/非受控状态及变更事件 | sortBy、pager、checkedRows 多数只初始化，动态 props 更新与内部状态冲突 | 旧选项保留初始化语义；新受控入口与 default 前缀约定单独设计，变更事件带源、前后值、实际 changes。不能默默把旧初始值当作每次覆盖状态 |
| 统一可序列化数据补丁和提交结果 | undefined/null/空对象语义不一致；历史落盘丢信息；applyDraft 易被误认为写回业务数据 | 在内部引入明确 set/unset/clear 操作，保留旧 draftRows 适配；独立定义提交、校验、服务器回包和失败回滚。默认不把旧 applyDraft 变成外部请求或改写 props |
| 可等待的复制/剪切 API | 同步 boolean 只能表示“已发起”，无法承诺成功，剪切可能丢数据 | 保留旧 boolean 方法作为兼容外壳，新增返回 Promise 的完成接口；剪切内部等待复制成功后再清空。定义未授权、API 缺失、格式转义和部分失败结果 |
| 分离值获取、值格式化和编辑器协议 | rich 的格式管线、草稿渲染、排序原始值相互覆盖；编辑器固定文本 input | 旧 cellValueGetter、onRenderCell、rich 字段继续适配；新增 formatter/editor/parse/validate 可选能力。是否排序显示值必须显式选择，默认维持原始值语义 |
| 稳定数据处理阶段代替插件偶然排序 | 树、排序、分页、合并和未来筛选互相依赖；当前只有少量 requireAfter | 内部明确输入→数据变换→视图→布局→渲染；旧 onAddRows 按旧顺序运行在兼容管线。新阶段接口需与旧插件交互测试，不能强制所有旧插件重写 |
| 插件生命周期、事件 target 和方法冲突协议 | 拼写 `onDestory/Comsumer/buildIn`；emitCustomEvent 类型多出 target；插件方法可覆盖核心方法 | 新拼写作为别名，旧拼写保留；方法冲突给诊断，新模式再要求命名空间；动态增删插件作为独立新能力，明确状态迁移。不要直接删除旧字段或把内部事件突然改为 DOM 冒泡事件 |
| 新旧 DOM/CSS 命名并存 | 使用 `.vtable-*` 有利于独立主题和与旧组件共存，但旧插件硬编码 `.dtable-*` | 提供显式兼容样式/标记；盘点所有命中选择器后逐步迁移。若固定列改成单一 DOM 结构，需适配依赖三区容器的插件，不能承诺所有私有 DOM 代码自动兼容 |
| 可变行高、多级表头、完整过滤和公式 | 这些会增加功能价值，但当前没有完整现成实现可照搬 | 作为新能力评估真实需求与性能成本；默认保持固定行高路径。完整过滤可从现有列开关延续，公式/任意编辑器不应凭旧 README 一句规划就变成首版必要范围 |

### 11.3 尚不能视为 DTable 已实现的功能

为避免扩大或漏掉需求，明确区分以下内容：

| 旧材料或接口暗示 | 实际情况 | VTable 处理 |
| --- | --- | --- |
| “异步加载”“多层级异步数据” | 核心只有同步 rowDataGetter；包装的 $fetcher 获取初始化选项；nested 无子树异步接口 | 已有同步和 $fetcher 接口保留；真正异步行/子树数据源是增强设计 |
| “加载中状态” | 没有核心 loading/error 选项或数据请求状态机；emptyTip 是空态 | 新增远端数据功能时一起定义，不能声称已兼容某个现成 loading API |
| “可计算的单元格” | cellValueGetter 可由业务计算，未见公式解析、依赖图或重算引擎 | 必须兼容 getter；公式引擎另立需求 |
| 行点击 URL、onRowClick | 无核心 onRowClick/rowLink；可通过单元格链接、actions 或 onCellClick 实现 | 保留这些实现途径；新增整行导航时规定按钮、复选、选区和键盘冲突规则 |
| 每行独立高度、多级任意表头 | 基础统一 rowHeight；header-group 仅两层 | 不以旧 README 规划项假定现成契约 |
| 通用过滤、远程排序、服务器分页 | filterable 仅 UI；sortType 是外部链接；pager 的本地切片与 Pager 回调/链接可组合服务端业务 | 保留有效接口，真实数据请求由外部或新数据源承担 |
| Shift/Ctrl 鼠标多段选择、半选 checkbox | selectable 提供编程追加及快捷键；没有完整鼠标修饰键累加；checkable 无半选态 | 新增这些体验时给出明确状态/事件兼容方案 |
| 文档中的旧名称与签名 | sortType `'up/down'` 实为 `'asc/desc'`；滚动 `'home/left-begin/right-end'` 不在实际 scroll 实现；部分 onRender 参数过时；col-hover 插件不存在 | 为业务扫描建立旧名称迁移清单；按当前源码兼容，必要时增加廉价别名，但不要宣称旧错误示例已能运行 |

## 12. 性能、实施顺序与最终验收

### 12.1 先测量，再定义性能达标

本次没有性能数据，不能把“虚拟表格”作为性能已改善的证明。实施时先用同一浏览器、机器、生产构建、固定数据和插件组合测 DTable 基线，再测 VTable。区分首次创建、首次可交互、滚动、单格编辑、全选、排序、树展开、粘贴、撤销和销毁；报告中位数及高分位耗时、长任务、DOM 数量和内存，而不只比首屏截图。

建议基准矩阵（规模是测试计划，不是当前能力承诺）：

| 场景 | 数据/配置 | 观察指标 |
| --- | --- | --- |
| 常规业务表 | 1,000 行 × 20 列；固定左右列；rich/actions/checkable | 初始渲染和交互延迟不退步，默认外观保持 |
| 大量行 | 100,000 行 × 20 列；固定高度视口 | 滚动时 DOM 与视口相关，避免按总行数重建/取数；scroll onScroll 正确 |
| 宽表 | 10,000 行 × 200 列；中央横向滚动 | 中央 DOM 数与可见列相关；固定列、表头、选区和编辑器同步 |
| 复杂布局 | 树、分页、表头分组、合并格、列隐藏/重排 | 元数据构建成本与增量更新成本分开；锚点离屏不空洞 |
| 电子表格 | 选择大矩形、粘贴 1,000 × 20、连续编辑和撤销 | 大选区不强制全量 DOM，批量写入只提交必要更新；撤销数据准确 |
| 生命周期 | 多实例，反复 mount/update/disable/enable/destroy | 全局监听、RAF、timer、observer、菜单和持久化记录符合所有权；无持续内存增长 |

建议将“滚动期间不重跑全量数据管线”“普通单格修改不扫描全表”“渲染 DOM 随视口而非总行列数增长”设为可观测验收条件。具体毫秒预算、目标设备、可接受复杂插件上限在基线测量后确定。对调用旧 `getSelectedCells()` 必须返回全量数组等不可避免的 O(n) 接口，应按需展开，不能以内部压缩存储改变返回结果。

实现约束：沿用 ZUI 包/注册/构建基础设施与已有 Preact、Scrollbar、Checkbox、Toolbar、Pager、Store 等能力。若选择信号状态，使用核心 signal/computed/batch/effect 并正确释放，不引入 Preact hooks 或 React 依赖。只在复用能力不足且测量显示收益时增加新的基础设施。

### 12.2 建议实施顺序

1. **固定兼容基线**：记录旧入口、全部类型和插件导出；将本文稳定行为变成可在 DTable/VTable 两套实现上运行的契约夹具；错误行为另立“有意变化”用例。
2. **基础内核与适配外壳**：数据/布局/渲染/双向虚拟化、固定区、原生和 Preact 入口、查询更新、事件与生命周期；同步提供旧名字、类型、DOM/CSS 适配，不等最后再补。
3. **插件协议与展示数据插件**：先让未修改的外部旧插件夹具运行，再逐项迁移 rich、排序、复选、nested、pager、表头分组、合并格、actions/custom。
4. **复杂交互与电子表格**：统一命中与手势取消，接入拖动、列定制、选择、草稿、编辑、历史、剪贴板；完成 datagrid 组合，优先修复可能丢数据的路径。
5. **发布消费和替换验收**：真实旧页面/外部扩展回归，生产构建性能测量，分发与类型检查；将仍无法自动适配的接口写成迁移条目，全部确认后再替代 DTable。

这是一份范围完整的顺序建议，不代表本次开始实现代码或授权发布。插件实现可以替换内部算法，稳定 API 不必重写；依旧依赖内部 Preact/DOM 细节的第三方插件，需要专门兼容夹具，而非仅让本仓库插件通过。

### 12.3 核心与整体验收矩阵

插件章节的验收仍然有效，以下是整体替代的最低补充条件：

| 类别 | 必须覆盖 |
| --- | --- |
| 入口与发布 | 原生、Preact、全局、CSS、插件聚合/子路径、旧类型别名、Cash 安装/调用/返回值、声明式创建、命令作用域；ESM/UMD/CJS 分发消费（按构建支持）、Cash 外置与多实例 |
| 默认与覆盖 | 所有基础默认值、插件默认值、用户 props、options modifier、beforeLayout 覆盖顺序；when=false 时方法/状态存在；factory(options) 与同名去重行为 |
| 数据 | 对象/ID数组/数字总行数、空表、单行、主键字符串化、缺失/重复/特殊字符 ID、HEADER 保留值、rowConverter、getter、lazy 可见取数、数据替换和旧状态清理 |
| 尺寸 | 像素/父级/auto/min-max/函数、0/负值/NaN/Infinity、延迟挂载和隐藏后显示、响应式 selector/事件；列百分比、flex、min/max、全部固定、超窄容器 |
| 滚动与渲染 | 横纵边界、分页键、scroll 返回值/回调只含变化轴、partialRender=false、空态、自定义头尾、命名 footer、各类 render 结果、真实 this/参数/执行顺序 |
| 插件协议 | 名称/对象/工厂、嵌套依赖、requireAfter、缺失/重复/循环、方法注入、data/state/resetState、动态启停、卸载钩子、内部事件与 DOM 事件不同取消语义 |
| 交互与可访问性 | 键盘全程操作、焦点恢复、编辑器与快捷键冲突、原生 checkbox Space/label、中文 IME、菜单关闭、拖拽取消；缩放/屏幕阅读器人工检查与自动可访问性扫描 |
| 复杂组合 | checkable+nested+pager+sortable；sort+sortType 互斥；resize+sortCol+customCol；cellspan+虚拟化+选择+编辑；datagrid 全依赖；多实例弹层与存储隔离 |
| 数据可靠性 | 取消回调、复制拒绝、剪切不丢数据、批量粘贴受权限/校验约束、undefined/null/空值、删除尾行、历史溢出与分支、存储失败、重复请求/回包竞态（新异步接口） |
| 性能与销毁 | 12.1 同机基准、无离屏全量 DOM、滚动不全量重建、更新后布局一致、destroy 后无活跃资源；不以 lint/typecheck 代替浏览器或性能验收 |

旧业务无需改动的兼容测试与新缺陷修复测试应分别标记。每个有意变化记录“旧行为、问题、最终新行为、是否默认生效、适配或迁移方式、对应测试”；没有经过实证的性能收益和第三方插件兼容性继续标为待验收。
