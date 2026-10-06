# 数据表格

本页使用固定的项目计划数据，涵盖已完成、进行中和未开始的项目及其阶段；日期为示例计划日期，刷新页面不会改变排序与进度。

数据表格是一种展示二维数据的强大方式，相比较普通的[表格（`<table>`）组件](/lib/components/table/)，提供了更多的交互形式，并且拥有插件机制方便定制复杂交互的界面。

## 基础用法

查配置时可直接查看 [API 速查](#api)，其中列出常用选项、默认值及对应场景。

按[快速上手](/guide/start/)接入 ZUI 后，浏览器脚本通过 `zui.DTable` 创建表格。将容器放在初始化脚本之前：

```html
<div id="myDtable"></div>

<script>
const table = new zui.DTable('#myDtable', {
    responsive: true,
    'aria-label': '项目计划',
    cols: [
        {name: 'id', title: 'ID', width: 60},
        {name: 'project', title: '项目名称', flex: 1},
    ],
    data: [
        {id: '1', project: '客户服务门户'},
        {id: '2', project: '移动端工单'},
    ],
});
</script>
```

## 模块化入口

### npm（普通项目）

使用支持 ESM 和 CSS 导入的构建工具时，按[快速上手的 npm 说明](/guide/start/#使用-npm)安装 `zui`，从发布包导入组件和样式。在页面准备好 `<div id="myDtable"></div>` 后执行：

```js
import {DTable} from 'zui';
import 'zui/css';

const table = new DTable('#myDtable', {
    responsive: true,
    'aria-label': '项目计划',
    cols: [
        {name: 'id', title: 'ID', width: 60},
        {name: 'project', title: '项目名称', flex: 1},
    ],
    data: [
        {id: '1', project: '客户服务门户'},
        {id: '2', project: '移动端工单'},
    ],
});
```

组件依赖浏览器 DOM；SSR 项目应在客户端加载并初始化。

### 源码工作区与 Preact（进阶）

以下 `@zui/*` 写法仅适用于已配置 ZUI 源码工作区包解析、支持 TypeScript、TSX 和 CSS 的构建环境。它们是源码工作区入口，不是普通项目安装 `zui` 后可用的子路径，也不作为独立发布包安装。

工作区内可通过公开入口导入原生组件和样式，不要依赖 `src/` 下的内部文件：

```ts
import {DTable} from '@zui/dtable';
import '@zui/dtable/css';

new DTable('#myDtable', {cols: [], data: []});
```

直接使用 Preact 组件时，还需将 JSX 编译配置为 Preact，并导入样式：

```tsx
import {DTable} from '@zui/dtable/react';
import '@zui/dtable/css';

<DTable cols={[]} data={[]} />
```

源码工作区中的内置插件可从 `@zui/dtable/plugins` 导入；Preact 入口需要显式导入所用插件。其他插件模块及构建要求见[插件的单独模块接入](/lib/components/dtable/plugins.html#单独模块接入)。普通浏览器和 npm 用法通过 `plugins` 配置已注册的插件，参见[注册与启用](/lib/components/dtable/plugins.html#注册与启用)。

## 示例

基本功能和增强功能的“完整代码”可直接放入已接入 ZUI 的页面；两个示例可以独立运行。负责人头像使用 `/assets/avatar/avatar-1.png` 至 `avatar-4.png`，可下载[头像 1](/assets/avatar/avatar-1.png)、[头像 2](/assets/avatar/avatar-2.png)、[头像 3](/assets/avatar/avatar-3.png)、[头像 4](/assets/avatar/avatar-4.png) 放到对应路径，或将 `managerAvatar` 换成项目中的图片地址。

本页示例随容器宽度重新布局；容器不足 600px 时取消固定列，使用表格下方的横向滚动条查看完整内容。键盘操作方式见[无障碍与键盘操作](#无障碍与键盘操作)。

### 基本功能

下面的示例中展示了数据表格的基本功能，包括：

* 在固定区域内展示数据，超出部分可以滚动查看；
* 滚动时固定两侧的列和表头；
* 根据设定的列宽显示列；
* 虚拟渲染（仅渲染可见范围内的单元格）；
* 根据列设置调整单元格对齐方式。

拖动表格底部的滚动条查看完整列；操作列链接仅演示入口，`#action=...` 需替换为项目中的实际地址。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-basic" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-basic')" />
</Example>

== 完整代码

```html
<div id="dtable-basic"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close']},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit']},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit']},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit']},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit']},
    {id: '6', parent: '5', project: '工单 · 交互设计', manager: '周敏', storyPoints: 8, executionCounts: 1, investedDays: 8, startDate: '2026-09-14', finishDate: '2026-09-18', progress: 100, actions: ['edit']},
    {id: '7', parent: '5', project: '工单 · 拍照上传开发', manager: '陈晨', storyPoints: 16, executionCounts: 1, investedDays: 10, startDate: '2026-09-21', finishDate: '2026-09-30', progress: 50, actions: ['edit']},
    {id: '8', parent: '5', project: '工单 · 弱网验收', manager: '王宁', storyPoints: 10, executionCounts: 1, investedDays: 0, startDate: '2026-10-01', finishDate: '2026-10-09', progress: 0, actions: ['start', 'edit']},
    {id: '9', project: '团队知识库', manager: '林悦', storyPoints: 40, executionCounts: 3, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit']},
    {id: '10', parent: '9', project: '知识库 · 内容分类', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-14', progress: 0, actions: ['start', 'edit']},
    {id: '11', parent: '9', project: '知识库 · 全文检索', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 0, startDate: '2026-10-15', finishDate: '2026-10-26', progress: 0, actions: ['start', 'edit']},
    {id: '12', parent: '9', project: '知识库 · 权限验收', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 0, startDate: '2026-10-27', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit']},
].map(row => ({
    ...row,
    managerAvatar: `/assets/avatar/avatar-${['林悦', '陈晨', '王宁', '周敏'].indexOf(row.manager) + 1}.png`,
}));

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 两侧固定列共占约 400px，窄容器将所有列放入同一滚动区域。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-basic', {
    height: 400,
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    cols,
    data,
    nested: false,
    footer: false,
    checkable: false,
    striped: false,
    plugins: [responsiveExample],
});
</script>
```

:::

### 增强功能

下面的示例中展示了通过内置插件以及定制化选项实现的增强功能，包括：

* 在表头显示排序标记；
* 行选中交互；
* 多层级数据结构，支持展开折叠；
* 特殊交互和外观，包括：鼠标悬停效果、隔行变色、完整边框等；
* 丰富的单元格渲染格式，包括头像、环形进度条、格式化文本和操作链接等。

点击行或复选框选中项目，点击项目名前的箭头展开或折叠阶段。这里的排序标记用于展示状态，不会自动重排数据；需要点击表头排序时，使用[本地排序插件](/lib/components/dtable/plugins.html#本地排序-sort)。操作列的 `#action=...` 链接需替换为实际业务地址。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-advanced" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-advanced')" />
</Example>

== 完整代码

```html
<div id="dtable-advanced"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 70, fixed: 'left', checkbox: true, sortType: 'down'},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 90, sortType: true, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'right', sortType: true, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'right', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 120, align: 'center', sortType: true, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 120, align: 'center', sortType: true, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close']},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit']},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit']},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit']},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit']},
    {id: '6', parent: '5', project: '工单 · 交互设计', manager: '周敏', storyPoints: 8, executionCounts: 1, investedDays: 8, startDate: '2026-09-14', finishDate: '2026-09-18', progress: 100, actions: ['edit']},
    {id: '7', parent: '5', project: '工单 · 拍照上传开发', manager: '陈晨', storyPoints: 16, executionCounts: 1, investedDays: 10, startDate: '2026-09-21', finishDate: '2026-09-30', progress: 50, actions: ['edit']},
    {id: '8', parent: '5', project: '工单 · 弱网验收', manager: '王宁', storyPoints: 10, executionCounts: 1, investedDays: 0, startDate: '2026-10-01', finishDate: '2026-10-09', progress: 0, actions: ['start', 'edit']},
    {id: '9', project: '团队知识库', manager: '林悦', storyPoints: 40, executionCounts: 3, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit']},
    {id: '10', parent: '9', project: '知识库 · 内容分类', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-14', progress: 0, actions: ['start', 'edit']},
    {id: '11', parent: '9', project: '知识库 · 全文检索', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 0, startDate: '2026-10-15', finishDate: '2026-10-26', progress: 0, actions: ['start', 'edit']},
    {id: '12', parent: '9', project: '知识库 · 权限验收', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 0, startDate: '2026-10-27', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit']},
].map(row => ({
    ...row,
    managerAvatar: `/assets/avatar/avatar-${['林悦', '陈晨', '王宁', '周敏'].indexOf(row.manager) + 1}.png`,
}));

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 两侧固定列共占约 400px，窄容器将所有列放入同一滚动区域。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-advanced', {
    height: 400,
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    cols,
    data,
    checkOnClickRow: true,
    striped: true,
    colHover: 'header',
    bordered: true,
    plugins: ['checkable', 'nested', 'rich', responsiveExample],
});
</script>
```

:::

## 使用

**1. 定义表格的列**

通过一个对象数组依次序定义数据表格中的所有列，每个对象定义一个列，通过对象上的 `name` 属性来区分不同的列。例如：

```js
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', sortType: 'down'},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left'},
    {name: 'manager', title: '负责人', width: 60, flex: 1},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'center'},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center'},
    {name: 'progress', title: '进度', width: 65, align: 'center'},
    {name: 'actions', title: '操作', width: 100, sortType: false, fixed: 'right', onRenderCell: renderActions}, // renderActions 为单元格自定义渲染方法
]
```

列的定义所有可用属性参见 [章节“列定义”](#列定义)。

**2. 定义行数据**

通过一个对象数组定义表格的每行要进行展示的数据。每个对象应包含唯一的行标识，默认读取 `id`，也可通过 `rowKey` 指定其他字段；其余属性通常与列定义中的 `name` 对应。例如：

```js
const data = [
    {id: 1, project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit']},
    // 可继续添加项目记录。
]
```

**3. 定义用于展示数据表格的元素**

在页面上预先使用一个元素来展示数据表格，通常使用一个 `<div>`：

```html
<div id="myDtable"></div>
```

**4. 初始化数据表格组件**

创建一个 `zui.DTable` 实例来对数据表格组件进行初始化，初始化时需要依次指定用于展示数据表格的元素和初始化选项：

```js
const dtable = new zui.DTable(element, options);
// dtable 为数据表格组件实例，后续可以调用相关方法
```

上面的[基本功能](#基本功能)和[增强功能](#增强功能)均提供对应的“完整代码”标签，包含容器、全部数据、列配置与初始化代码。下面的选项说明只展示相关配置片段，可在完整示例中调整。

## 布局

下面 8 个示例的“完整代码”均包含容器、列定义和 5 条固定项目数据，可独立运行。

### 宽和高

通过选项 `width` 和 `height` 指定表格的总体宽和高，除了指定数字来使用固定尺寸还可以使用如下几个特殊值：

| 宽或高的特殊值      | 定义  |
| ------------- | ----- |
| `'auto'`      | 只能作为高度值，最终高度为表头、表尾和所有行的高度相加，此时数据表格不会出现垂直滚动条 |
| `'100%'`      | 设置宽度或高度与父级容器的宽高一致 |
| 函数 | 宽度函数返回数字或 `'100%'`；高度函数返回数字、`'auto'` 或 `{min, max}`。签名见[初始化选项类型](#初始化选项类型)。 |
| `{min: number, max: number}`      | 仅高度可用，指定数据表格的最小和最大高度 |

默认情况下宽度为 `'100%'`，高度为 `'auto'`。

数值 `width` 会按像素宽度处理，`rowHeight` 必须为正数。

下面的示例中，表格的宽度为 `'100%'`，高度为 `{min: 200, max: 300}`。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-layout-size" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-layout-size')" />
</Example>

== 完整代码

```html
<div id="dtable-layout-size"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-layout-size', {
    width: '100%',
    height: {min: 200, max: 300},
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

### 响应式

通过选项 `responsive` 来让数据表格获得响应式特性：当数据表格所属的父级容器尺寸发生变化时，自动根据尺寸定义重新渲染。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-responsive" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-responsive')" />
</Example>

== 完整代码

```html
<div id="dtable-responsive"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: false, type: 'link', sortType: false, nestedToggle: true, flex: 1},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-responsive', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

::: tip 提示
当启用响应式特性时，确保宽度或高度使用了响应式的特殊值，例如 `'100%'` 或通过函数动态确定。
:::

`responsive` 负责重新计算尺寸，不会自动取消固定列。上方完整代码中的 `responsiveExample` 插件通过 `beforeLayout` 在容器不足 600px 时取消固定列；恢复宽屏后沿用原来的配置，横向滚动条会在需要时显示。

600px 是本页示例根据固定列宽度选择的阈值，实际项目应按自己的列宽调整。已有插件继续放在同一个 `plugins` 数组中。

### 无障碍与键盘操作

DTable 使用 `table`、`rowgroup`、`row`、`columnheader` 和 `cell` 语义，把同一行在固定区域与滚动区域中的单元格关联起来。通过 `aria-label` 为表格命名，或用 `aria-labelledby` 引用已有标题；补充说明可通过 `aria-describedby` 关联。

* 使用 Tab 进入表格滚动区域，方向键滚动，Home / End 到达水平方向的起点 / 终点，PageUp / PageDown 上下翻页。
* 继续按 Tab 访问表格中的链接、按钮和复选框；这些控件保留自身的键盘行为。聚焦被横向裁剪的单元格内控件时，会滚动到对应列。
* 单元格采用表格浏览语义，不实现电子表格式的方向键选中。屏幕阅读器可使用其表格导航命令查看已渲染的行列。
* 虚拟渲染时会提供总行列数和当前行列位置；未渲染的行需要滚动后才能浏览。小数据集需要一次呈现全部行时，可设置 `partialRender: false`；自定义表头和单元格内容仍需提供相应说明与可操作控件。

### 列宽

列宽通常在每一列的定义对象上进行定义，可以通过如下几个属性控制：

| 列定义      | 定义  |
| ------------- | ----- |
| `width` | 通过数值精确指定列的宽度 |
| `minWidth` | 指定列的最小宽度 |
| `maxWidth` | 指定列的最大宽度 |
| `flex` | 指定列的宽度弹性系数，当有列宽需要动态确定时，弹性系数用于决定当前列可以分得的宽度比例，弹性系数值为 `2` 的列宽度通常为弹性系数值为 `1` 列的两倍，当需要平分宽度时，可以将值全部设置为 `1` |

除了单独指定每一列的宽度，还可以通过初始化选项全局指定默认的列宽属性：

| 选项名称      | 定义  |
| ------------- | ----- |
| `defaultColWidth` | 默认的列宽，当列定义没有指定时，使用此列宽 |
| `minColWidth` | 默认情况下列的最小宽度 |
| `maxColWidth` | 默认情况下列的最大宽度 |

::: tabs

== 示例

<Example>
  <ZUI id="dtable-flex" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-flex')" />
</Example>

== 完整代码

```html
<div id="dtable-flex"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: false, type: 'link', sortType: false, nestedToggle: true, flex: 3},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress', flex: 1},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>', flex: 2},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-flex', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

::: tip 提示
当为数据表格启用响应式特性时或自适应的宽度值（例如 `'100%'`）时，确保所有没有固定在两侧的列中至少有一列启用了弹性宽度（指定了列定义上的 `flex` 属性），否则可能在所有指定的列宽度总和少于数据表格整体宽度的情况下右侧会出现空白区域。
:::

### 固定两侧的列

通过为列定义设置 `fixed` 属性来将列固定显示，可选值包括 `'left'`（固定在左侧）和 `'right'` 固定在右侧。所有未被固定的列会在中间展示，当中间可用宽度不足时允许横向滚动查看。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-cols-fixed" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-cols-fixed')" />
</Example>

== 完整代码

```html
<div id="dtable-cols-fixed"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: false, type: 'link', sortType: false, nestedToggle: true, flex: 3, minWidth: 300},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress', flex: 1, minWidth: 100},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>', flex: 2, minWidth: 100},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-cols-fixed', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

::: tip 提示
应该避免将所有列都被设置为固定在两侧，否则当数据表格总体宽度大于所有固定的列时，中间部分会出现空白。
:::

### 表头

**表头高度**

通过选项 `headerHeight` 来自定义表头高度，默认高度与行高 `rowHeight` 设置一致（行高默认值为 `35`）。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-header-height" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-header-height')" />
</Example>

== 完整代码

```html
<div id="dtable-header-height"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-header-height', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    headerHeight: 50,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

**隐藏表头**

通过设置选项 `header` 为 `false` 来隐藏表头展示。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-header-hidden" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-header-hidden')" />
</Example>

== 完整代码

```html
<div id="dtable-header-hidden"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-header-hidden', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    header: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

**定制表头背景色**

在容器内的 `.dtable` 元素上设置 CSS 变量 `--dtable-header-bg`，即可改变表头背景色。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-header-custom" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-header-custom')" />
</Example>

== 完整代码

```html
<div id="dtable-header-custom"></div>

<style>
#dtable-header-custom .dtable {
  --dtable-header-bg: #ddeeff;
}
</style>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-header-custom', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

<style>
#dtable-header-custom .dtable {
  --dtable-header-bg: #ddeeff;
}
</style>

### 行高

通过选项 `rowHeight` 来设置行高，默认高度为 `35`。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-row-height" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-row-height')" />
</Example>

== 完整代码

```html
<div id="dtable-row-height"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，恢复宽屏后沿用原配置。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-row-height', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    rowHeight: 50,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

::: tip 提示
为了提升在虚拟渲染时的效率，目前所有行高必须一致。可以通过插件机制实现动态行高。
:::

## 外观

下面 10 个示例的“完整代码”均包含容器、列定义和固定项目数据，可独立运行。

自定义外观时，将 `--dtable-*` 变量设置在组件生成的 `.dtable` 元素上；滚动条的 `--scrollbar-*` 变量则设置在 `.scrollbar` 元素上，避免被组件的默认值覆盖。

### 排序标记

在不启用插件的情况下，数据表格不支持对数据进行排序等交互，但支持根据列的设定在表头上显示排序标记。要启用排序标记可以通过列定义对象上的 `sortType` 属性来实现，可以使用如下值：

| `sortType` 值      | 定义  |
| ------------- | ----- |
| `false`      | 不显示排序标记 |
| `true`      | 显示排序标记，但此列尚未启用排序 |
| `asc`      | 显示按升序排序标记 |
| `desc`      | 显示按降序排序标记 |

::: tabs

== 示例

<Example>
  <ZUI id="dtable-sort-type" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-sort-type')" />
</Example>

== 完整代码

```html
<div id="dtable-sort-type"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true, sortType: 'asc'},
    {name: 'project', title: '项目名称', width: 200, fixed: false, type: 'link', sortType: false, nestedToggle: true, flex: 3},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: true, type: 'progress', flex: 1},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: true, html: '{0} <small>人天</small>', flex: 2},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-sort-type', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

### 鼠标悬停效果

数据表格支持通过选项分别对行、列和单元格启用鼠标悬停效果。相关选项如下：

| 选项      | 定义  |
| ------------- | ----- |
| `rowHover`      | 如果设置为 `true`，则对鼠标下的整行启用鼠标悬停效果，默认为 `true` |
| `colHover`      | 如果设置为 `true`，则对鼠标下的整列启用鼠标悬停效果，使用特殊值 `'header'` 可以让整列悬停效果仅在表头上触发，默认为 `false` |
| `cellHover`      | 如果设置为 `true`，则对鼠标下的单元格启用鼠标悬停效果，默认为 `false` |

当前版本中，`cellHover` 的单元格高亮尚未生效，以下示例中的可见悬停背景来自 `rowHover` 和 `colHover`。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-hover-effect" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-hover-effect')" />
</Example>

== 完整代码

```html
<div id="dtable-hover-effect"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-hover-effect', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    rowHover: true,
    colHover: true,
    cellHover: true,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

::: tip 提示
在启用列鼠标悬停效果时，如果希望单独去掉某一列的鼠标悬停效果，可以在此列定义对象上设置 `colHover` 属性为 `false`。
:::

**定制鼠标悬停背景色**

通过 CSS 变量 `--dtable-hover-bg` 来设置鼠标悬停背景色。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-hover-effect-custom" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-hover-effect-custom')" />
</Example>

== 完整代码

```html
<div id="dtable-hover-effect-custom"></div>

<style>
#dtable-hover-effect-custom .dtable {
  --dtable-hover-bg: rgba(255, 0, 255, .1);
}
</style>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-hover-effect-custom', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    rowHover: true,
    colHover: true,
    cellHover: true,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

<style>
#dtable-hover-effect-custom .dtable {
  --dtable-hover-bg: rgba(255, 0, 255, .1);
}
</style>

### 隔行变色

通过设置选项 `striped` 为 `true` 来启用表格隔行变色效果。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-striped" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-striped')" />
</Example>

== 完整代码

```html
<div id="dtable-striped"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-striped', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: true,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

**定制隔行背景色**

通过 CSS 变量 `--dtable-striped-bg` 来设置隔行背景色。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-striped-custom" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-striped-custom')" />
</Example>

== 完整代码

```html
<div id="dtable-striped-custom"></div>

<style>
#dtable-striped-custom .dtable {
  --dtable-striped-bg: #ddeeff;
}
</style>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-striped-custom', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: true,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

<style>
#dtable-striped-custom .dtable {
  --dtable-striped-bg: #ddeeff;
}
</style>

### 完整边框

通过设置选项 `bordered` 为 `true` 来启用完整边框外观。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-bordered" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-bordered')" />
</Example>

== 完整代码

```html
<div id="dtable-bordered"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-bordered', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    bordered: true,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

**定制边框颜色**

通过 CSS 变量 `--dtable-border-color` 来设置边框颜色。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-bordered-custom" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-bordered-custom')" />
</Example>

== 完整代码

```html
<div id="dtable-bordered-custom"></div>

<style>
#dtable-bordered-custom .dtable {
  --dtable-border-color: #333;
}
</style>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-bordered-custom', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    bordered: true,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

<style>
#dtable-bordered-custom .dtable {
  --dtable-border-color: #333;
}
</style>

### 滚动条

数据表格在可用区域内无法显示完整内容时允许通过滚动条滚动查看。滚动条由[自定义滚动条](/lib/components/scrollbar/)组件实现。可以通过如下选项来设置滚动条外观：

| 选项      | 定义  |
| ------------- | ----- |
| `scrollbarHover`      | 如果设置为 `true`，则只在鼠标悬停到表格区域时显示滚动条，否则只要有滚动条会固定显示，默认为 `true` |
| `scrollbarSize`      | 设置滚动条的大小，决定水平滚动条的高度和垂直滚动条的宽度，默认为 `12` |
| `horzScrollbarPos`      | 设置水平滚动条显示位置，可以为 `outside`（显示在表格底部外侧）和 `inside`（显示在表格底部内侧），默认为 `outside` |

::: tabs

== 示例

<Example>
  <ZUI id="dtable-scrollbar" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-scrollbar')" />
</Example>

== 完整代码

```html
<div id="dtable-scrollbar"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
    {id: '6', parent: '5', project: '工单 · 交互设计', manager: '周敏', storyPoints: 8, executionCounts: 1, investedDays: 8, startDate: '2026-09-14', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-scrollbar', {
    width: '100%',
    height: 200,
    responsive: true,
    scrollbarHover: true,
    'aria-label': '项目计划示例',
    striped: false,
    scrollbarSize: 15,
    horzScrollbarPos: 'inside',
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

**设置滚动条样式**

可以通过设置 CSS 变量来个性化设置滚动条的外观，详情参见[自定义滚动条](/lib/components/scrollbar/)组件文档。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-scrollbar-custom" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-scrollbar-custom')" />
</Example>

== 完整代码

```html
<div id="dtable-scrollbar-custom"></div>

<style>
#dtable-scrollbar-custom .scrollbar {
  --scrollbar-opacity:   1;
  --scrollbar-bg:        var(--color-primary-400);
  --scrollbar-shadow:    inset 0 0 0 1px rgba(var(--color-inverse-rgb), .05);
  --scrollbar-bar-bg:    var(--color-primary-900);
  --scrollbar-hover-bg:  var(--color-primary-800);
  --scrollbar-drag-bg:   var(--color-secondary-800);
  --scrollbar-radius:    9999px;
  --scrollbar-duration:  1s;
}
</style>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
    {id: '6', parent: '5', project: '工单 · 交互设计', manager: '周敏', storyPoints: 8, executionCounts: 1, investedDays: 8, startDate: '2026-09-14', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-scrollbar-custom', {
    width: '100%',
    height: 200,
    responsive: true,
    scrollbarHover: true,
    'aria-label': '项目计划示例',
    striped: false,
    scrollbarSize: 15,
    horzScrollbarPos: 'inside',
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

<style>
#dtable-scrollbar-custom .scrollbar {
  --scrollbar-opacity:   1;
  --scrollbar-bg:        var(--color-primary-400);
  --scrollbar-shadow:    inset 0 0 0 1px rgba(var(--color-inverse-rgb), .05);
  --scrollbar-bar-bg:    var(--color-primary-900);
  --scrollbar-hover-bg:  var(--color-primary-800);
  --scrollbar-drag-bg:   var(--color-secondary-800);
  --scrollbar-radius:    9999px;
  --scrollbar-duration:  1s;
}
</style>

### 单元格样式

在列定义对象上允许通过如下属性设置单元格样式：

| 属性      | 定义  |
| ------------- | ----- |
| `align`      | 设置该列上所有单元格的内容对齐方式，允许的值包括：`'left'`（左侧对齐）、 `'center'`（居中对齐） 和 `'right'`（右侧对齐） |
| `onRenderHeaderCell` | 自定义表头单元格，返回包含 `style` 的渲染结果可设置表头样式 |
| `cellStyle`  | 通过一个 CSS 样式属性对象设置该列的表头和数据单元格样式 |

::: tabs

== 示例

<Example>
  <ZUI id="dtable-cell-style" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-cell-style')" />
</Example>

== 完整代码

```html
<div id="dtable-cell-style"></div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true, onRenderHeaderCell(result) {
        return [...result, {style: {color: 'var(--color-danger-500)'}}];
    }},
    {name: 'project', title: '项目名称', width: 200, fixed: false, type: 'link', sortType: false, nestedToggle: true, flex: 3, minWidth: 300, cellStyle: {fontWeight: 'bold', color: 'var(--color-primary-500)'}},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress', flex: 1, minWidth: 100},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }, align: 'center', cellStyle: {justifyContent: 'end'}},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-cell-style', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
});
</script>
```

:::

## 行选中交互

数据表格的行选中交互由内置插件 `checkable` 提供，通过初始化选项 `plugins` 声明启用，完整写法见下方示例。

启用 `checkable` 插件之后，可以额外使用如下初始化选项：

| 选项      | 定义  |
| ------------- | ----- |
| `checkable`      | 如果为 `true` 则启用行选中交互，默认为 `'auto'`，根据列上的 `checkbox` 配置自动启用 |
| `checkOnClickRow` | 如果为 `true` 则点击行时切换该行的选中状态，否则只能通过点击复选框实现切换 |
| `onCheckChange`  | 行选中状态变更时执行，参数为本次变化的行 ID 与选中状态映射 |

要为列添加切换选中复选框，可以在此列定义对象上设置 `checkbox` 属性为 `true`。下面的示例支持点击行、单行复选框和表头全选，并在 `onCheckChange` 中通过 `this.getChecks()` 读取全部已选行。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-checkable" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-checkable')" />
  <div id="dtable-checkable-status" class="mt-3" role="status">已选行：无</div>
</Example>

== 完整代码

```html
<div id="dtable-checkable"></div>
<div id="dtable-checkable-status" class="mt-3" role="status">已选行：无</div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-checkable', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    checkOnClickRow: true,
    cols,
    data,
    plugins: ['checkable', responsiveExample],
    onCheckChange() {
        document.getElementById('dtable-checkable-status').textContent = `已选行：${this.getChecks().join('、') || '无'}`;
    },
});
</script>
```

:::

## 多层级数据结构

多层级数据结构支持和交互实现由内置插件 `nested` 提供，通过初始化选项 `plugins` 声明启用，完整写法见下方示例。

启用 `nested` 插件之后，可以额外使用如下初始化选项：

| 选项      | 定义  |
| ------------- | ----- |
| `nested`      | 如果为 `true` 则启用多层级数据结构支持，默认为 `'auto'`，根据列上的 `nestedToggle` 配置自动启用 |
| `nestedParentKey` | 设置行数据对象上用于标记当前行所属父级行 ID 的属性名，默认为 `'parent'` |
| `asParentKey` | 设置行数据对象上用于标记当前行为父级行的属性名，默认为 `'asParent'` |
| `nestedIndent` | 设置层级之间的缩进大小，默认为 `20` |
| `onRenderNestedToggle` | 设置渲染层级展开折叠切换按钮时的回调函数，可以通过此回调函数自定义渲染切换按钮 |
| `onNestedChange`  | 层级展开折叠状态变更时执行，不传入参数；可通过 `this.getNestedInfo()` 读取当前层级状态 |

要为列添加折叠展开操作按钮和应用层级缩进，可以在此列定义对象上设置 `nestedToggle` 属性为 `true`。下面使用 3 个项目及其阶段组成固定父子数据，点击项目名称旁的按钮折叠或展开子行，表头按钮控制全部父行。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-nested" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-nested')" />
  <div id="dtable-nested-status" class="mt-3" role="status">所有父行已展开</div>
</Example>

== 完整代码

```html
<div id="dtable-nested"></div>
<div id="dtable-nested-status" class="mt-3" role="status">所有父行已展开</div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        return [{
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
    {id: '6', parent: '5', project: '工单 · 交互设计', manager: '周敏', storyPoints: 8, executionCounts: 1, investedDays: 8, startDate: '2026-09-14', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
    {id: '7', parent: '5', project: '工单 · 拍照上传开发', manager: '陈晨', storyPoints: 16, executionCounts: 1, investedDays: 10, startDate: '2026-09-21', finishDate: '2026-09-30', progress: 50, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '8', parent: '5', project: '工单 · 弱网验收', manager: '王宁', storyPoints: 10, executionCounts: 1, investedDays: 0, startDate: '2026-10-01', finishDate: '2026-10-09', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '9', project: '团队知识库', manager: '林悦', storyPoints: 40, executionCounts: 3, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '10', parent: '9', project: '知识库 · 内容分类', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-14', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '11', parent: '9', project: '知识库 · 全文检索', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 0, startDate: '2026-10-15', finishDate: '2026-10-26', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '12', parent: '9', project: '知识库 · 权限验收', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 0, startDate: '2026-10-27', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-nested', {
    width: '100%',
    height: 400,
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: ['nested', responsiveExample],
    onNestedChange() {
        const collapsed = [...this.getNestedInfo()].filter(([, info]) => info.state === 'collapsed').map(([id]) => id);
        document.getElementById('dtable-nested-status').textContent = collapsed.length ? `已折叠父行：${collapsed.join('、')}` : '所有父行已展开';
    },
});
</script>
```

:::

## 自定义渲染

数据表格支持如下选项来对行和单元格的渲染进行定制：

| 选项      | 定义  |
| ------------- | ----- |
| `onRenderCell`      | 渲染每行上的单元格时的回调函数 |
| `onRenderHeaderCell` | 渲染表头上的单元格时的回调函数 |

以上选项的详细用法参见[初始化选项](#初始化选项)章节。

针对每个特定的列，可以在列定义对象上通过如下属性自定义渲染：

| 属性      | 定义  |
| ------------- | ----- |
| `onRenderCell`      | 渲染此列上的单元格时的回调函数 |

下面通过列上的 `onRenderCell` 将“操作”列渲染为图标按钮。回调的第二个参数是包含 `col`、`row` 和 `value` 的单元格信息对象。按钮具有可访问名称，可点击或通过 Enter、空格键触发，操作反馈显示在表格下方。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-render-cell" use="dtable" data-dtable-managed :options="getExampleOptions('dtable-render-cell')" />
  <div id="dtable-render-cell-status" class="mt-3" role="status">请点击操作按钮</div>
</Example>

== 完整代码

```html
<div id="dtable-render-cell"></div>
<div id="dtable-render-cell-status" class="mt-3" role="status">请点击操作按钮</div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 60, fixed: 'left', checkbox: true},
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'manager', title: '负责人', width: 60, sortType: false, flex: 1, type: 'avatar', avatarKey: 'managerAvatar', avatarWithName: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'center', sortType: false, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'center', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 90, align: 'center', sortType: false, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(_result, {col, row}) {
        const actions = {
            start: {text: '开始', icon: 'play'},
            edit: {text: '编辑', icon: 'pencil'},
            close: {text: '关闭', icon: 'off'},
        };
        return [{
            html: row.data[col.name].map((action) => {
                const {text, icon} = actions[action];
                return `<button type="button" data-action="${action}" title="${text}" aria-label="${text}" class="btn square primary-pale size-sm"><i class="icon icon-${icon}" aria-hidden="true"></i></button>`;
            }).join(' '),
        }];
    }},
];

const data = [
    {id: '1', project: '客户服务门户', manager: '陈晨', storyPoints: 40, executionCounts: 3, investedDays: 30, startDate: '2026-09-01', finishDate: '2026-09-18', progress: 100, actions: ['edit', 'close'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '2', parent: '1', project: '门户 · 需求确认', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 6, startDate: '2026-09-01', finishDate: '2026-09-03', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '3', parent: '1', project: '门户 · 自助查询开发', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 16, startDate: '2026-09-04', finishDate: '2026-09-14', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '4', parent: '1', project: '门户 · 验收与上线', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 8, startDate: '2026-09-15', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '5', project: '移动端工单', manager: '周敏', storyPoints: 34, executionCounts: 3, investedDays: 18, startDate: '2026-09-14', finishDate: '2026-10-09', progress: 47, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
    {id: '6', parent: '5', project: '工单 · 交互设计', manager: '周敏', storyPoints: 8, executionCounts: 1, investedDays: 8, startDate: '2026-09-14', finishDate: '2026-09-18', progress: 100, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-4.png'},
    {id: '7', parent: '5', project: '工单 · 拍照上传开发', manager: '陈晨', storyPoints: 16, executionCounts: 1, investedDays: 10, startDate: '2026-09-21', finishDate: '2026-09-30', progress: 50, actions: ['edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '8', parent: '5', project: '工单 · 弱网验收', manager: '王宁', storyPoints: 10, executionCounts: 1, investedDays: 0, startDate: '2026-10-01', finishDate: '2026-10-09', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
    {id: '9', project: '团队知识库', manager: '林悦', storyPoints: 40, executionCounts: 3, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '10', parent: '9', project: '知识库 · 内容分类', manager: '林悦', storyPoints: 8, executionCounts: 1, investedDays: 0, startDate: '2026-10-12', finishDate: '2026-10-14', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-1.png'},
    {id: '11', parent: '9', project: '知识库 · 全文检索', manager: '陈晨', storyPoints: 20, executionCounts: 1, investedDays: 0, startDate: '2026-10-15', finishDate: '2026-10-26', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-2.png'},
    {id: '12', parent: '9', project: '知识库 · 权限验收', manager: '王宁', storyPoints: 12, executionCounts: 1, investedDays: 0, startDate: '2026-10-27', finishDate: '2026-10-30', progress: 0, actions: ['start', 'edit'], managerAvatar: '/assets/avatar/avatar-3.png'},
];

const responsiveExample = {
    name: 'docs-responsive',
    beforeLayout(options) {
        // 窄容器将所有列放入同一滚动区域，阈值可按实际列宽调整。
        if (this.parent.clientWidth < 600) {
            return {cols: options.cols.map(col => ({...col, fixed: false}))};
        }
    },
};

const table = new zui.DTable('#dtable-render-cell', {
    width: '100%',
    height: 400,
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: [responsiveExample],
    onCellClick(event, {rowID}) {
        const button = event.target.closest('button[data-action]');
        if (button) {
            document.getElementById('dtable-render-cell-status').textContent = `第 ${rowID} 行：${button.title}`;
        }
    },
});
</script>
```

:::

## 单元格类型

单元格类型需要在列定义对象通过 `type` 属性指定，不同的列可以设置为相同的类型，可以通过自定义渲染方式以及插件机制对特定类型的单元进行自定义。

**预置的单元格类型**

内置插件 `rich` 预置了一些单元格类型，通过指定类型可以为单元格应用丰富的格式，目前支持如下类型：

| 单元格类型      | 定义  |
| ------------- | ----- |
| `html`      | 将单元格内容作为 HTML 渲染 |
| `format`      | 将单元格内容通过预设格式化方式输出 |
| `link` | 将单元格内容渲染为可点击的链接 |
| `avatar` | 在单元格内显示用户头像 |
| `progress` | 在单元格内显示为环形进度条 |
| `actionButtons` | 在单元格内显示操作按钮 |
| `label` | 将单元格内容显示为标签 |

## 插件机制

数据表格支持插件机制，通过插件可以对数据表格的功能进行增强，目前内置了如下插件：

| 插件名称      | 定义  |
| ------------- | ----- |
| `checkable`      | 支持行选中 |
| `nested` | 支持层级数据结构 |
| `rich` | 支持预设单元格类型 |

通过选项 `plugins` 来指定要启用的插件，例如：

```js
new zui.DTable({
    plugins: ['checkable', 'nested', 'rich']
    ...,
});
```

可以通过 `zui.DTable.definePlugin(pluginSetting)` 方法来定义新的插件，参数 `pluginSetting` 为插件定义对象，详细定义参考[插件定义](#插件定义)。

## CSS 变量

| 变量      | 定义  | 默认值 |
| ------------- | ----- | ----- |
| `--dtable-striped-bg` | 隔行背景色 | `var(--color-gray-100)` |
| `--dtable-hover-bg` | 鼠标悬停背景色 | `rgba(var(--color-gray-500-rgb), .1)` |
| `--dtable-header-bg` | 表头背景色 | `var(--color-surface)` |
| `--dtable-border-color` | 边框颜色 | `var(--color-border)` |
| `--dtable-sorter-size` | 排序标记大小 | `0.3125rem` |

## API

按任务查阅：[初始化选项与默认值](#初始化选项)、[列配置](#列定义)、[行数据](#行数据定义)、[插件扩展](#插件定义)、[常用方法](#方法)。各节先给出摘要，再保留详细类型。

### 初始化选项

下面是未被插件或调用方覆盖时的默认值；示例中的显式配置不代表默认值。尺寸数值以像素为单位。完整字段及回调签名见[初始化选项类型](#初始化选项类型)。

**数据与扩展**

| 选项 | 默认值 | 用途与典型场景 |
| --- | --- | --- |
| `cols` | `[]` | 定义展示哪些字段及顺序；每项配置见[列定义](#列定义)。 |
| `data` | `[]` | 通常传入行对象数组；结构见[行数据定义](#行数据定义)。 |
| `rowKey` | `'id'` | 行的唯一标识字段；业务数据使用其他主键时修改此项。 |
| `plugins` | 未指定 | 声明额外启用的插件；名称须已注册，见[注册与启用](/lib/components/dtable/plugins.html#注册与启用)。 |
| `onRenderCell` | 未指定 | 定制数据单元格内容，例如操作按钮；见[自定义渲染](#自定义渲染)。 |

`cols` 与 `data` 在 TypeScript 选项类型中为必填字段，创建表格时应显式传入。需要批量选择或父子行时，分别查看[行选中交互](#行选中交互)和[多层级数据结构](#多层级数据结构)，先声明所需插件再配置其选项。

**尺寸与布局**

| 选项 | 默认值 | 用途与典型场景 |
| --- | --- | --- |
| `width` | `'100%'` | 跟随父容器宽度；传入数字可固定宽度，见[宽和高](#宽和高)。 |
| `height` | `'auto'` | 按全部行及表头、表尾计算高度；限制可视高度可用数字或 `{min, max}`，超出部分滚动查看。 |
| `responsive` | `false` | 设为 `true` 后随窗口及父容器尺寸变化重新布局；见[响应式](#响应式)。 |
| `rowHeight` | `35` | 每行高度，须为正数；见[行高](#行高)。 |
| `defaultColWidth` | `80` | 列未设置 `width` 时采用的宽度；见[列宽](#列宽)。 |
| `minColWidth` / `maxColWidth` | `24` / `9999` | 列宽默认上下限，可在单列上覆盖。 |
| `header` / `footer` | `true` / `undefined` | 默认显示表头、不显示表尾；表头可隐藏或[自定义](#表头)，表尾可放置[分页器](/lib/components/dtable/plugins.html#底部分页器-pager)。 |
| `headerHeight` / `footerHeight` | `0` / `0` | `0` 表示在对应区域显示时使用 `rowHeight`，不是把该区域隐藏。 |

**外观与交互**

| 选项 | 默认值 | 用途与典型场景 |
| --- | --- | --- |
| `striped` | `true` | [隔行变色](#隔行变色)，帮助对齐阅读长行。 |
| `bordered` | `false` | 设为 `true` 显示[完整边框](#完整边框)。 |
| `rowHover` / `colHover` / `cellHover` | `true` / `false` / `false` | 分别控制行、列、单元格的[鼠标悬停效果](#鼠标悬停效果)。 |
| `scrollbarHover` | `true` | 悬停时显示滚动条；设为 `false` 可让滚动入口持续可见，见[滚动条](#滚动条)。 |

#### 初始化选项类型

```ts
interface DTableOptions<C = ColSetting> {
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

    cols: C[];
    data: (RowData | string)[] | number;
    rowDataGetter?: (ids: string[]) => RowData[];
    cellValueGetter?: CellValueGetter;
    rowConverter?: (row: RowData, index: number) => RowData;
    rowKey?: string;

    rowHover?: boolean;
    colHover?: boolean | 'header';
    cellHover?: boolean;
    bordered?: boolean;
    striped?: boolean;

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
    [prop: string]: unknown;
}
```

### 列定义

每个 `cols` 项描述一列；以下默认行为未考虑插件对列的额外配置。完整属性见[列定义类型](#列定义类型)。

| 属性 | 默认值或行为 | 用途与典型场景 |
| --- | --- | --- |
| `name` | 必填 | 列名，通常对应行数据上的字段名。 |
| `title` | 未指定 | 表头显示的文字；为业务字段提供易读名称。 |
| `width` | `defaultColWidth`（默认 `80`） | 指定像素值或百分比列宽，如 `120` 或 `'25%'`。 |
| `minWidth` / `maxWidth` | 继承 `minColWidth` / `maxColWidth` | 为单列限制宽度。 |
| `flex` | `false` | 设为 `true` 或正数，按权重分配所在区域的剩余宽度；见[列宽](#列宽)。 |
| `fixed` | `false` | 用 `'left'` 或 `'right'` 保持关键列可见；见[固定两侧的列](#固定两侧的列)。 |
| `onRenderCell` | 未指定 | 仅为此列定制渲染，例如[操作按钮](#自定义渲染)。 |

#### 列定义类型

```ts
type ColSetting<S = object> = S & {
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

type ColName = string;

type ColFlexGrow = number;

type ColFlex = ColFlexGrow | boolean;

type ColFixedSide = 'left' | 'right' | false;

type ColBorderType = 'left' | 'right' | boolean;
```

### 行数据定义

常规用法是将行对象数组传给 `data`：`rowKey` 指定的字段提供唯一行标识，其余字段按列名取值。传入行 ID 数组或行数时，可配合 `rowDataGetter` 按需获取行对象。

```ts
type RowID = string;

type RowPropName = string;

type RowPropValue = unknown;

type RowData = Record<RowPropName, RowPropValue>;
```

### 插件定义

使用现成插件时先查[插件用法](/lib/components/dtable/plugins.html)，无需实现下面的类型。编写自己的插件时，常用扩展点如下；未配置的可选项不会提供对应扩展行为。

| 扩展点 | 用途与典型场景 |
| --- | --- |
| `name` | 必填，唯一标识插件。 |
| `defaultOptions` | 提供插件选项默认值，调用方可覆盖。 |
| `colTypes` | 为特定 `type` 的列配置样式或渲染方式。 |
| `beforeLayout` | 布局前调整选项，例如[窄屏时取消固定列](#响应式)。 |
| `methods` | 增加可从表格内部实例调用的方法。 |
| `onMounted` / `onUnmounted` | 挂载时设置监听器等资源，并在卸载时清理。 |

完整泛型和生命周期签名见[插件定义类型](#插件定义类型)。

#### 插件定义类型

```ts
type DTablePlugin<T extends DTablePluginTypes = object, D extends DTablePluginTypes[] = [], PluginTable = DTableWithPlugin<T, D>, Options = DTableWithPluginOptions<T, D>, PluginColSetting = DTableWithPluginColSetting<T, D>, PluginColInfo = DTableWithPluginColInfo<T, D>> = {
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
```
### 方法

下面的方法属于内部表格组件。使用 `new zui.DTable(...)` 创建的原生实例时，在渲染完成后通过 `table.$` 调用，例如 `table.$.getRowInfo('1')`；`onLayout`、`afterRender` 等表格回调中的 `this` 指向内部组件。完整签名见[方法类型](#方法类型)。

| 方法 | 用途与典型场景 |
| --- | --- |
| `getRowInfo(id)` / `getColInfo(name)` | 按行 ID、列名查找信息；不存在时返回 `undefined`。 |
| `getCellValue(row, col)` | 按行和列获取单元格数据值。 |
| `scroll(info)` | 滚动到指定位置或方向，例如 `{to: 'top'}` 回到顶部。 |
| `updateLayout()` | 容器尺寸变化后手动重算布局；自动处理可设置 `responsive: true`。 |

#### 方法类型

```ts
interface DTable {
  options: DTableOptions<ColSetting>;

  plugins: DTablePlugin[];

  layout: DTableLayout;

  id: string;

  data: Record<string, unknown>;

  parent: HTMLElement | null | undefined;

  scroll(info: {scrollLeft?: number; scrollTop?: number; offsetLeft?: number; offsetTop?: number; to?: 'up' | 'down' | 'bottom' | 'top' | 'left' | 'right' | 'begin' | 'end'}, callback?: (this: DTable, result: boolean) => void): boolean;

  getColInfo(colNameOrIndex?: ColInfoLike): ColInfo | undefined;

  getRowInfo(idOrIndex?: RowInfoLike): RowInfo | undefined;

  getCellValue(row: RowInfo | string | number, col: ColInfo | string | number): unknown;

  getRowInfoByIndex(index: number): RowInfo | undefined;

  getPointerInfo(event: Event): DTablePointerInfo | undefined;

  update(options?: {dirtyType?: 'options' | 'layout'; state?: Partial<DTableState> | ((prevState: Readonly<DTableState>) => void)} | (() => void), callback?: () => void): void;

  updateLayout(): void;

  render(): preact.JSX.Element;
}
```

<script>
import index from './index.js';
export default index;
</script>
