# 数据表格插件

插件用于扩展单元格展示、选择、排序和编辑能力。先在 `plugins` 中声明需要的插件，再设置插件的启用选项；仅设置 `checkable`、`headerGroup` 等选项不会自动加载对应插件。

## 基础用法

本页“完整代码”可独立放入已接入 ZUI 的页面。示例随容器宽度重新布局；容器不足 600px 时取消固定列，通过横向滚动查看完整内容。头像资源及键盘操作说明见[主页面示例说明](/lib/components/dtable/#示例)。

下面组合本地排序和行选中：点击“预计工时”表头排序，使用复选框选中行，表尾显示选中数量，表格下方显示全部已选行 ID。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-plugin-basic" use="dtable" :options="getExampleOptions('dtable-plugin-basic')" />
  <div id="dtable-plugin-basic-status" class="mt-3" role="status">已选行：无</div>
</Example>

== 完整代码

```html
<div id="dtable-plugin-basic"></div>
<div id="dtable-plugin-basic-status" class="mt-3" role="status">已选行：无</div>

<script>
const cols = [
    {name: 'id', title: 'ID', width: 80, fixed: 'left', checkbox: true},
    {name: 'name', title: '任务', width: 200},
    {name: 'estimate', title: '预计工时', width: 120, sort: 'number'},
];

const data = [
    {id: '1', name: '需求确认', estimate: 8},
    {id: '2', name: '功能开发', estimate: 24},
    {id: '3', name: '验收测试', estimate: 12},
    {id: '4', name: '接口联调', estimate: 16},
    {id: '5', name: '缺陷修复', estimate: 6},
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

const table = new zui.DTable('#dtable-plugin-basic', {
    width: '100%',
    height: 220,
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    checkable: true,
    sort: true,
    cols,
    data,
    plugins: ['checkable', responsiveExample],
    footer: ['checkbox', 'checkedInfo'],
    onCheckChange() {
        document.getElementById('dtable-plugin-basic-status').textContent = `已选行：${this.getChecks().join('、') || '无'}`;
    },
});
</script>
```

:::

### 注册与启用

| 接入方式 | 插件 | 使用方式 |
| --- | --- | --- |
| 内置插件 | `rich`、`sort-type`、`sort`、`avatar` | 自动加入实例；仍需配置对应列或启用选项，例如本地排序默认关闭。 |
| 随 DTable 注册的可选插件 | `custom`、`checkable`、`nested`、`group`、`header-group`、`cellspan`、`sortable`、`pager` | 在 `plugins` 中指定注册名或插件对象。 |
| 随依赖注册的辅助插件 | `store`、`mousemove`、`autoscroll` | 分别由 `nested`、`sortable` 的模块依赖注册；使用上层插件时会自动加入实例，也可以单独声明。 |
| 需单独导入模块 | `actions`、`toolbar`、`resize`、`contextmenu`、`hotkey`、`selectable`、`filterable`、`moveable`、`datagrid`、`draft`、`editable`、`history`、`sort-col`、`custom-col` | 按对应章节导入模块，再将导出的插件传入 `plugins`。 |

以上注册情况适用于本站构建及对应源码工作区的原生入口；npm/CDN 发布版的插件集合以所用版本为准。源码工作区的 `@zui/dtable/react` 只导出组件和类型，使用时需要显式导入所用插件。浏览器、npm 和工作区的接入方式见[数据表格](/lib/components/dtable/#模块化入口)。

`plugins` 接受注册名、插件对象或插件工厂，声明列表在创建实例时确定。已加入实例的插件可以通过其选项切换行为；要换一组插件，应销毁并重新创建表格。

### 单独模块接入

本页所有 `@zui/dtable/*` 导入示例均适用于 ZUI 源码工作区，需要先配置工作区包解析，并使用能处理 TypeScript、TSX 和 CSS 的构建工具（例如 Vite）。普通项目安装 `zui` 后不能直接使用这些路径；浏览器和 npm 用法可通过注册名启用所用版本中已注册的插件。插件模块会同时引入它需要的样式与依赖插件。例如：

```ts
import {DTable} from '@zui/dtable';
import '@zui/dtable/css';
import {resize} from '@zui/dtable/plugins/resize/index.tsx';

const table = new DTable('#myDtable', {
    plugins: [resize],
    colResize: true,
    cols: [{name: 'name', title: '任务', width: 200}],
    data: [{id: '1', name: '需求确认'}],
});
```

这里使用 Vite 支持的插件目录映射，保留实际模块的 `index.ts` 或 `index.tsx` 文件名；当前包的目录导出不能通过 Node 原生模块解析直接使用。只加载 `zui.js` 时，这些未注册的插件不能直接用 `plugins: ['resize']` 等名称启用；需要先将插件模块纳入应用构建。

### 调用插件方法

本文的插件方法属于表格内部组件。在插件回调中可以通过 `this` 调用；使用 `new zui.DTable()` 返回的原生实例时，在渲染完成后通过 `table.$` 访问，例如 `table.$.getChecks()`。需要表格实例作为 `this` 的回调应使用普通函数或方法简写。

## 单元格格式插件 `rich`

<Badge text="内置插件" />

让单元格支持展示丰富格式内容，包括链接、格式化字符串、HTML、迷你进度条以及时间日期等。

### 链接

在列定义上通过 `link` 属性设置单元格内容作为链接显示，支持以下值：

* `string`：使用模版字符串来生成链接；
* `{url: string} & JSX.HTMLAttributes<HTMLAnchorElement>`：使用对象来生成链接，对象中的其他属性将作为链接的属性；
* `((info: {row: RowInfo, col: ColInfo}) => string | false | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>))`：使用函数来动态生成链接，如果在函数内返回 `false` 则不生成链接。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'name',
        title: '项目名称',

        /* 链接模板中的占位符来自当前行数据。 */
        link: 'https://example.com/{name}',
    }, {
        name: 'url',
        title: '链接',

        /* 使用对象来生成链接，对象中的其他属性将作为链接的属性。 */
        link: {
            url: 'https://example.com',
            target: '_blank',
        },
    }, {
        name: 'actions',
        title: '操作',

        /* 使用函数动态生成链接。 */
        link: (info) => {
            const {row, col} = info;
            return {
                url: `https://example.com/${row.id}`,
                target: '_blank',
            };
        },
    }
];
```

### 格式化字符串

在列定义上通过 `format` 属性设置单元格格式化字符串，支持以下值：

* `string`：通过字符串模版来格式化单元格内容；
* `(value: any, info: {row: any, col: ColInfo}) => string`：通过函数来动态生成单元格内容。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'name',
        title: '项目名称',

        /* 使用字符串进行格式化，{0} 表示单元格的原始值。 */
        format: 'project：{0}',
    }, {
        name: 'category',
        title: '分类',

        /* 使用函数动态生成文本。 */
        format: (value, info) => (value === '' ? '无分类' : value),
    }, {
        name: 'product',
        title: '产品',

        /* {id} 和 {name} 来自当前行数据，{0} 表示当前单元格值。 */
        format: '#{id} {name}',
    }
];
```

### 从对象映射

在列定义上通过 `map` 属性设置一个对象或函数来从单元格实际值映射要显示的文本，支持如下值：

* `Record<string, string>`：使用对象来进行映射，对象的键为单元格实际值，值为要显示的文本；
* `(value: any, info: {row: any, col: ColInfo}) => string`：使用函数来动态生成要显示的文本。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'status',
        title: '状态',

        /* 使用对象进行映射。 */
        map: {
            wait: '未开始',
            doing: '进行中',
            done: '已完成',
        },
    }, {
        name: 'category',
        title: '分类',

        /* 使用函数动态生成文本。 */
        mapSplitter: '',
        map: (value, info) => (value === '' ? '无分类' : value),
    }, {
        name: 'product',
        title: '产品'
    }
];
```

### 以 HTML 进行渲染

在列定义上通过 `html` 属性设置单元格内容作为 HTML 显示，支持以下值：

* `true`：将单元格原始值直接作为 HTML 展示；
* `string`：使用字符串模版来生成最终的 HTML；
* `(value: any, info: {row: any, col: ColInfo}) => string`：使用函数来动态生成最终的 HTML。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'name',
        title: '项目名称',

        /* 使用字符串进行格式化，{0} 表示单元格的原始值。 */
        html: '<strong class="text-primary">{0}</strong>',
    }, {
        name: 'status',
        title: '状态',

        /* 使用函数动态生成 HTML。 */
        html: (value, info) => `<span class="label">${value}</span>`,
    }, {
        name: 'actions',
        title: '操作',

        /* 将单元格原始值直接作为 HTML 展示。 */
        html: true,
    }
];
```

### 格式化日期时间

在列定义上通过 `formatDate` 属性设置单元格内容作为日期时间显示，支持以下值：

* `true`：使用默认的 `'[yyyy-]MM-dd hh:mm'` 进行格式化；
* `string`：使用字符串模版来格式化日期时间；
* `(value: any, info: {row: RowInfo, col: ColInfo}) => string`：返回日期格式字符串，再使用原始值进行格式化。

当由行数据提供的日期不合法时，可以通过 `invalidDate` 属性提供一个默认的字符串用于替代显示。

::: tip 提示
要让格式化日期时间生效，确保对应单元格的原始值为日期时间类型或者可以转换为日期时间的字符串或时间戳。
:::

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'createdAt',
        title: '创建时间',

        /* 使用字符串进行格式化，{0} 表示单元格的原始值。 */
        formatDate: 'yyyy-MM-dd',

        /* 日期不合法时显示的字符串。 */
        invalidDate: '无效日期',
    }, {
        name: 'updatedAt',
        title: '更新时间',

        /* 使用函数动态选择日期格式。 */
        formatDate: (value, info) => info.row.data.showTime ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd',
    }, {
        name: 'actionsTime',
        title: '操作时间',

        /* 使用默认的格式化方式。 */
        formatDate: true,
    }
];
```

### 环形进度条

在列定义上设置 `type: 'progress'` 来将单元格渲染为一个迷你的环形进度条。另外支持通过如下列定义上配置的属性来自定义进度条：

* `circleSize: number`：环形直径，默认为 `24`；
* `circleBgColor: string`：环形背景颜色，默认为 `'var(--color-border)'`；
* `circleColor: string`：设置环形进度颜色，默认为 `'var(--color-success-500)'`；
* `circleBorderSize: number`：设置环形边框大小，默认为 `1`。


::: tip 提示
要使用环形进度条确保对应单元格的原始值为数值类型或者可以转换为数值的字符串。
:::

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'progress',
        title: '进度',

        /* 将单元格渲染为环形进度条。 */
        type: 'progress',

        /* 自定义环形进度条的样式。 */
        circleSize: 32,
        circleColor: 'var(--color-primary-500)',
        circleBorderSize: 2,
    }
];
```

### 悬停提示

在列定义上通过 `hint` 属性来启用悬停提示，支持以下值：

* `true`：优先使用已格式化的字符串，否则使用单元格原始值；
* `string`：使用字符串模版来生成提示内容；
* `(info: {row: any, col: ColInfo}) => string`：使用函数来动态生成提示内容。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'name',
        title: '项目名称',

        /* 提示模板中的占位符来自当前行数据。 */
        hint: '项目名称：{name}',
    }, {
        name: 'status',
        title: '状态',

        /* 使用函数动态生成提示内容。 */
        hint: (info) => `项目状态：${info.row.data.status}`,
    }, {
        name: 'actions',
        title: '操作',

        /* 将单元格原始值直接作为提示内容。 */
        hint: true,
    }
];
```

### 从对象映射样式

在列定义上通过 `styleMap` 属性设置一个对象来从单元格实际值映射要显示的样式或者通过函数来返回样式，定义如下：

```ts
type StyleMap = Record<string, string> | ((info: {row: RowInfo, col: ColInfo}) => Record<string, string>);
```

下面为一个实际的例子：

```js
const options = {
    cols: [
        {
            name: 'status',
            title: '状态',

            /* 使用对象进行映射。 */
            styleMap: {
                color: 'statusColor',
                background: 'statusBg',
            },
        }, {
            name: 'category',
            title: '分类',

            /* 使用函数动态生成样式。 */
            styleMap: (info) => ({color: info.row.data.category ? '#166534' : '#64748b'}),
        }, {
            name: 'product',
            title: '产品'
        }
    ],
    data: [
        {id: '1', product: '团队知识库', status: '待开始', statusColor: '#64748b', statusBg: '#f1f5f9', category: ''},
        {id: '2', product: '移动端工单', status: '进行中', statusColor: '#1d4ed8', statusBg: '#dbeafe', category: '客户服务'},
        {id: '3', product: '客户服务门户', status: '已完成', statusColor: '#166534', statusBg: '#dcfce7', category: '客户服务'},
    ]
};
```

### 数值与多值格式

使用 `digits` 保留小数位；通过 `mapSplitter` 将字符串拆分后映射，`mapJoiner` 控制显示时的连接符。`mapSplitter` 默认为 `','`；希望 `map` 函数直接接收字符串时，设置 `mapSplitter: ''`。

```js
const cols = [
    {name: 'estimate', title: '预计工时', digits: 1, format: '{0} 小时'},
    {
        name: 'tags', title: '标签',
        map: {ui: '界面', api: '接口'},
        mapSplitter: ',',
        mapJoiner: '、',
    },
];
// 行数据示例：{id: '1', estimate: 12, tags: 'ui,api'}。
```

### 条形进度条

`type: 'progress'` 默认显示环形进度。设置 `progressType: 'bar'` 可切换为条形进度，单元格值为百分比数值。

```js
const cols = [{
    name: 'progress', title: '进度', type: 'progress',
    progressType: 'bar',
    barWidth: 80,
    barHeight: 8,
    barColor: 'var(--color-primary-500)',
    barBgColor: 'var(--color-border)',
}];
```

`barWidth` 和 `barHeight` 默认分别为 `64` 和 `6` 像素；未设置 `barColor` 时使用 `circleColor`。日期列也可直接使用 `type: 'date'`、`'datetime'`、`'time'`，对应格式分别为 `'yyyy-MM-dd'`、`'[yyyy-]MM-dd hh:mm'`、`'hh:mm'`。

## 自定义单元格 `custom`

使用 HTML 模板、原生元素或 Preact 组件替换单元格内容。通过 `plugins: ['custom']` 启用，在列定义的 `custom` 中指定渲染方式。

### 定义自定义内容

下面通过 HTML 模板加粗名称，并用原生 `span` 分别展示“进行中”和“已完成”状态。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-plugin-custom" use="dtable" :options="getExampleOptions('dtable-plugin-custom')" />
</Example>

== 完整代码

```html
<div id="dtable-plugin-custom"></div>

<script>
const cols = [
    {name: 'name', title: '名称', width: 180, custom: '<strong>{$value}</strong>'},
    {name: 'status', title: '状态', width: 120, custom: {component: 'span', props: ({value, row}) => ({
        children: value === 'done' ? '已完成' : '进行中',
        title: row.data.name,
    })}},
];

const data = [
    {id: '1', name: '接口联调', status: 'doing'},
    {id: '2', name: '需求确认', status: 'done'},
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

const table = new zui.DTable('#dtable-plugin-custom', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: ['custom', responsiveExample],
});
</script>
```

:::

以 `<` 开头的字符串按 HTML 模板渲染，`{$value}` 始终指向当前单元格值，`{name}` 等字段来自 `row.data`。`{value}` 也可访问单元格值，但行数据中同名的 `value` 字段会覆盖它。HTML 模板不会将数据自动转义为纯文本；显示文本时可以使用上例的 `props.children`。

对象配置中的 `component` 可以是原生元素名称或 Preact 组件。`props` 支持对象和函数；函数接收 `{value, row, col}`，普通函数的 `this` 为表格组件实例。也可以将 `custom` 整体设为函数，按单元格返回配置对象，返回 `undefined` 时保留原内容。

### 复用元素属性

初始化选项 `customMap` 可以按元素名称复用属性，列内的 `props` 会覆盖映射中的同名属性：

```js
const options = {
    plugins: ['custom'],
    customMap: {
        span: {
            component: 'span',
            props: {title: '项目状态'},
        },
    },
    cols: [
        {
            name: 'status',
            title: '状态',
            width: 120,
            custom: {
                component: 'span',
                props: ({value}) => ({children: value}),
            },
        },
    ],
    data: [{id: '1', status: '进行中'}],
};
```

当前实现最终使用列配置中的 `component`，不要用 `customMap` 将名称映射为另一个组件。虽然类型允许配置数组，但当前只保留最后一项的渲染结果；组合多个元素时，请在一个组件或 HTML 模板中完成。

## 按列排序 `sort-type`

<Badge text="内置插件" />

在列上设置 `sortType` 显示排序状态，配置 `sortLink` 后表头显示为可跳转的排序链接。该插件不直接重排行数据，适合由链接目标处理排序；只设置 `sortType` 时显示排序图标。表格启用本地 `sort` 后，此插件停止工作。

### 指定列的排序状态

在列定义上通过 `sortType` 属性设置列排序类型，支持以下值：

* `'asc'`：该列当前以按升序排序，点击后将按降序排序；
* `'desc'`：该列当前以按降序排序，点击后将按升序排序；
* `true`：该列支持排序，但没有进行排序，点击后将按升序排序；
* `false` 或 `undefined`：该列不支持排序。

```js
const cols = [
    {
        name: 'id',
        title: 'ID',
        sortType: 'asc'  // 该列当前以按升序排序
    }, {
        name: 'name',
        title: '产品名称',
        sortType: true   // 该列支持排序，但没有进行排序
    }, {
        name: 'actions',
        title: 'actions',
        sortType: false  // 该列不支持排序
    }
];
```

### 指定列排序链接

通过 `sortLink` 属性设置列排序链接，支持以下值：

* `string`：通过字符串模版来设置排序链接；
* `{url: string} & JSX.HTMLAttributes<HTMLAnchorElement>`：链接地址及锚点属性；
* `(col: ColInfo, nextSortType: string, currentSortType: string) => string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>)`：动态生成链接。

当通过字符串模版来设置排序链接时，可以在字符串模版中使用如下动态字段：

* `"{sortType}"`：点击后将使用的排序方向；
* `"{name}"`：当前列名称。

下面为一个例子：

```js
const cols = [
    {
        name: 'id',
        title: 'ID',
        sortType: 'asc',

        /* 通过字符串模版来设置排序链接 */
        sortLink: '/?sortBy=id&type={sortType}'
    }, {
        name: 'name',
        title: '产品名称',
        sortType: true,

        /* 通过函数来动态生成排序链接 */
        sortLink: (col, sortType) => `/?sortBy=${col.name}&type=${sortType}`
    }
];
```

### API

#### 列排序类型

```ts
/* 列排序类型 */
type ColSortType = 'asc' | 'desc' | boolean;
```

#### 列定义配置

```ts
interface PluginColSetting {
    /* 列排序类型 */
    sortType?: ColSortType;

    /* 列排序链接模版或生成函数 */
    sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, nextSortType: string, currentSortType: string) => string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));

}
```

#### 表格初始化选项

```ts
interface PluginDTableOptions {
    /* 是否显示排序状态，默认 true；仅在本地 sort 未启用时生效。 */
    sortType?: boolean;

    /* 按列名覆盖当前排序状态。 */
    orderBy?: Record<string, ColSortType>;

    /* 列排序链接模版或生成函数 */
    sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, nextSortType: string, currentSortType: string) => string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>));
}
```

## 本地排序 `sort`

<Badge text="内置插件" />

先在表格初始化选项中设置 `sort: true`，再通过列的 `sort` 属性指定排序规则。仅配置列不会启用本地排序。点击列头依次切换升序、降序和取消排序；`multiSort: true` 时保留其他列的排序，并优先使用最近点击的列。

### 指定列的排序规则

在列定义上通过 `sort` 属性设置列排序本地规则，支持以下值：

* `true` 或 `'default'`：该列使用默认排序规则进行排序，通常为比较字符串；
* `'date'`：该列按日期进行排序；
* `'number'`：该列按数值进行排序；
* `(row1: RowInfo, row2: RowInfo, col: ColInfo) => number`：指定一个函数来比较进行排序。
* `false` 或 `undefined`：该列不支持排序。

```js
const cols = [
    {
        name: 'id',
        title: 'ID',
        sort: true  // 该列使用默认排序规则进行排序
    }, {
        name: 'name',
        title: '产品名称',
        sort: false   // 该列不支持排序
    }, {
        name: 'date',
        title: '日期',
        sort: 'date'  // 该列按日期进行排序
    }, {
        name: 'number',
        title: '需求数',
        sort: 'number'  // 该列按数值进行排序
    }, {
        name: 'status',
        title: '状态',
        sort: function(row1, row2) { // 指定一个函数来比较进行排序
            const statusMap = {
                wait: 0,
                doing: 1,
                done: 2,
            };
            return statusMap[row1.data.status] - statusMap[row2.data.status];
        }
    }
];
```

### 指定通用排序规则

通过初始化选项 `sort` 属性设置通用排序规则，支持以下值：

* `(row1: RowInfo, row2: RowInfo, col: ColInfo) => number`：指定默认排序规则比较行数；
* `Record<string, (row1: RowInfo, row2: RowInfo, col: ColInfo) => number>`：指定排序规则名称到比较函数的映射；
* `true`：启用内置排序规则；
* `false`：禁用本地排序（默认）。

下面为一个例子：

```js
const statusMap = {
    wait: 0,
    doing: 1,
    done: 2,
};

const options = {
    cols: [
    {
        name: 'status',
        title: '状态',
        sort: 'status' // 该列按 status 规则进行排序。
    }
    ],
    sort: {
        status:  function(row1, row2, col) { // 定义 status 排序规则。
            return statusMap[row1.data[col.name]] - statusMap[row2.data[col.name]];
        }
    }
};
```

### API

#### 列定义配置

```ts
interface PluginColSetting {
    /* 列是否启用排序，或者指定排序函数或排序规则名称 */
    sort: boolean | ColSortFn | ColSortFnName,
}
```

#### 表格初始化选项

```ts
/* 排序状态。 */
type ColSortBy = {name: ColName, order: ColSortOrder};

interface PluginDTableOptions {
    /* 列是否启用排序，或者指定默认排序函数或排序规则映射。 */
    sort?: boolean | ColSortFn | Record<ColSortFnName, ColSortFn>;

    /* 默认的排序状态。 */
    sortBy?: ColSortBy | ColSortBy[];

    /* 是否启用多列排序。 */
    multiSort?: boolean;
}
```

## 头像 `avatar`

<Badge text="内置插件" />

设置表格支持在单元格内显示头像，通过列类型 `type: 'avatar'`、`'avatarName'` 或 `'avatarBtn'` 选择展示形式。

### 显示为头像

在列定义上设置 `type: 'avatar'` 来将单元格渲染为一个头像。另外支持通过如下属性来自定义头像：

* `avatarClass: string`：头像元素上的 CSS 类名；
* `avatarKey: string`：用于从行数据对象上获取头像图片地址的属性名；
* `avatarCodeKey: string`：用于从行数据对象上获取头像 Code 的属性名；
* `avatarNameKey: string`：用于从行数据对象上获取头像名称的属性名。
* `avatarProps: AvatarOptions | ((col: ColInfo, row: RowInfo) => AvatarOptions)`：用于指定头像其他属性，或者通过函数动态返回；第一个参数为列信息，第二个参数为行信息，可通过 `row.data` 读取行数据。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'manager',
        title: '产品经理',

        /* 将单元格渲染为头像。 */
        type: 'avatar',

        /* 从 managerAvatar 属性上获取当前头像的图片路径。 */
        avatarKey: 'managerAvatar',

        /* 从 managerAvatar 属性上获取当前头像的图片路径。 */
        avatarNameKey: 'managerName',
    }
];
```

### 显示为头像和名称

在列定义上设置 `type: 'avatarName'` 来将单元格渲染为一个头像和名称形式。支持列类型 `type: 'avatar'` 上支持的所有属性。下面为一个实际的例子：

```js
const cols = [
    {
        name: 'manager',
        title: '产品经理',

        /* 将单元格渲染为头像和名称。 */
        type: 'avatarName',

        /* 从 managerAvatar 属性上获取当前头像的图片路径。 */
        avatarKey: 'managerAvatar',

        /* 从 managerAvatar 属性上获取当前头像的图片路径。 */
        avatarNameKey: 'managerName',
    }
];
```

### 显示为头像按钮

在列定义上设置 `type: 'avatarBtn'` 来将单元格渲染为一个头像。除了支持列类型 `type: 'avatar'` 上支持的所有属性外，还支持通过 `btnProps` 属性来设置按钮元素上的其他属性，下面为一个实际的例子：

```js
const cols = [
    {
        name: 'manager',
        title: '产品经理',

        /* 将单元格渲染为头像按钮。 */
        type: 'avatarBtn',

        /* 从 managerAvatar 属性上获取当前头像的图片路径。 */
        avatarKey: 'managerAvatar',

        /* 从 managerAvatar 属性上获取当前头像的图片路径。 */
        avatarNameKey: 'managerName',

        /* 设置按钮元素上的 CSS 类。 */
        avatarBtnProps: {className: 'primary'}
    }
];
```

## 列分组 `group`

先声明 `plugins: ['group']`，再通过列的 `group` 属性分组。插件只在相邻分组间添加分隔线，不重新排列列；固定左列、中间列、固定右列分别处理。

### 分组间分割线

通过设置初始化选项 `groupDivider` 为 `true`，可以为相邻但不同属于不同分组的列添加分割线。下面为一个实际的例子：

```js
const options = {
    plugins: ['group'],

    /* 为相邻但不同属于不同分组的列添加分割线，默认 true。 */
    groupDivider: true,

    /* 定义列。 */
    cols: [
        {
            name: 'id',
            title: 'ID',
            group: 'main'  // 设置分组为 main。
        },
        {
            name: 'title',
            title: '标题',
            group: 'main'  // 设置分组为 main。
        },
        {
            name: 'startDate',
            title: '开始日期',
            group: 'date'  // 设置分组为 date
        },
        {
            name: 'endDate',
            title: '结束日期',
            group: 'date'  // 设置分组为 date
        }
    ]
};
```

上例中标题列和开始日期列相邻但属于不同的分组，会在它们之间添加一个分割线。

## 列鼠标悬停效果 `colHover`

<Badge text="核心功能" />

`colHover` 是表格核心选项，用于高亮鼠标所在列，不需要声明插件；不存在名为 `col-hover` 的插件。

### 启用列鼠标悬停效果

通过在数据表格初始化选项 `colHover` 来启用列鼠标悬停效果，支持如下值：

* `true`：启用鼠标悬停效果；
* `'header'`：仅当鼠标悬停在列头上时才高亮该列；
* `false`：禁用鼠标悬停效果。

```js
const options = {
    /* 启用列鼠标悬停效果 */
    colHover: true
};
```

## 多层级 `nested`

支持将行按层级关系通过缩进进行展示，并支持通过点击展开或收起子行。

### 启用多层级

先声明 `plugins: ['nested']`，再设置 `nested: true`。`nested` 默认为 `'auto'`，此时根据列上是否配置 `nestedToggle` 自动启用。默认情况下会检查行数据上的 `parent` 属性来查找该行是否属于某个父级行，并会检查 `asParent` 属性来判断当前行是否应该视为父级行，可以通过初始化选项 `nestedParentKey` 和 `asParentKey` 分别来修改这两个属性名。

下面为一个初始化选项的例子：

```js
const options = {
    plugins: ['nested'],

    /* 启用多层级功能。 */
    nested: true,

    /* 指定父级行 ID 属性名为 parentID。 */
    nestedParentKey: 'parentID',

    /* 指定是否视为父级行的属性名为 isParent。 */
    asParentKey: 'isParent',

    data: [
        {id: '1', name: '研发部', isParent: true},
        {id: '2', name: '客户端开发部', parentID: '1'},
        {id: '3', name: '移动开发部', parentID: '1', isParent: true},
        {id: '4', name: 'iOS 开发小组', parentID: '3'},
        {id: '5', name: 'Android 开发小组', parentID: '3'},
    ]
};
```

上面的例子中实现的层级关系如下：

```txt
研发部
├── 客户端开发部
└── 移动开发部
    ├── iOS 开发小组
    └── Android 开发小组
```

### 显示层级切换按钮和设置缩进

为了更好的体现行之间的层级关系，可以在特定列上显示层级切换按钮和缩进。要显示层级切换按钮，需要在列定义上设置 `nestedToggle` 为 `true`。这样在该列内的所有父级行对应的单元格内会显示一个层级切换按钮，点击该按钮可以展开或收起该行的子行。

默认情况下也会为子行根据所属的层级关系显示不同的缩进，默认每级缩进间距为 `20`，可以通过初始化选项 `nestedIndent` 来修改缩进间距。如果要修改特定列的缩进，也可以在列定义上通过 `nestedIndent` 来修改。

下面为一个显示层级切换按钮和设置缩进的列定义示例：

```js
const cols = [
    {
        name: 'name',
        title: '部门名称',

        /* 显示层级切换按钮。 */
        nestedToggle: true,

        /* 设置缩进间距为 30。 */
        nestedIndent: 30
    }
];
```

### 手动展开或收起子行

通过实例方法 `toggleRow` 来展开或折叠指定行的子行，该方法定义如下：

```ts
function toggleRow(this: DTableNested, rowID: RowID | RowID[], collapsed?: boolean): void;
```

其中参数定义如下：

* `rowID`：要折叠或展开的行 ID，可以使用数组指定多个操作的行；
* `collapsed`：是否设置为折叠，如果不指定，则自动切换折叠和展开。

### 判断是否收起所有子行

通过实例方法 `isAllCollapsed` 来判断是否所有子行都已经收起，该方法定义如下：

```ts
function isAllCollapsed(this: DTableNested): boolean;
```

### 获取层级和折叠信息

通过实例方法 `getNestedInfo` 来获取层级和折叠信息，该方法可以通过参数 `rowID` 来指定要获取的行信息，如果不指定，则返回所有行的信息。该方法定义如下：

```ts
function getNestedInfo(this: DTableNested, rowID?: string): NestedRowInfo | Map<string, NestedRowInfo>;
```

### API

#### 表格初始化选项

```ts
interface PluginDTableOptions {
    /* 是否启用多层级。 */
    nested?: boolean | 'auto';

    /* 父级行 ID 属性名。 */
    nestedParentKey?: string;

    /* 是否视为父级行的属性名。 */
    asParentKey?: string;

    /* 缩进间距，默认 20。 */
    nestedIndent?: number;

    /* 初始折叠状态，true 表示全部折叠，也可按行 ID 指定。 */
    defaultNestedState?: Record<RowID, boolean> | boolean;

    /* 是否保存折叠状态，默认 false；启用时应设置稳定的表格 id。 */
    preserveNested?: boolean;

    /* 是否关闭父子行勾选联动，默认 false；联动需要另行启用 checkable。 */
    noNestedCheck?: boolean;

    /* 当层级折叠展开状态变更时的回调函数。 */
    onNestedChange?: () => void;

    /* 当渲染层级折叠按钮回调函数，可以自定义渲染层级折叠展开按钮。 */
    onRenderNestedToggle?: (this: DTableNested, info: NestedRowInfo | undefined, rowID: string, col: ColInfo, rowData: RowData | undefined) => CustomRenderResult;
}
```

#### 列定义配置

```ts
interface PluginColSetting {
    /* 是否显示层级切换按钮。 */
    nestedToggle?: boolean;

    /* 缩进间距。 */
    nestedIndent?: number | boolean;
}
```

#### 折叠和展开状态

```ts
enum NestedRowState {
    unknown = '',             // 当前行的状态未知（尚未被渲染）。
    collapsed = 'collapsed',  // 当前行作为被折叠的父级行且会显示。
    expanded = 'expanded',    // 当前行作为被展开的父级行且会显示。
    hidden = 'hidden',        // 当前行所为被折叠的父级行或子级行且不会显示。
    normal = 'normal',        // 当前行作为被展开的子级行且会显示。
}
```

#### 行层级和折叠信息对象

```ts
type NestedRowInfo = {
    /* 状态。 */
    state: NestedRowState;

    /* 层级。 */
    level: number;

    /* 子级行 ID 列表。 */
    children?: string[];

    /* 父级行 ID。 */
    parent?: string;

    /* 排序值。 */
    order?: number;
};
```

#### 实例方法

```ts
interface PluginDTableMethods {
    /* 展开或折叠指定行的子行。 */
    toggleRow(this: DTableNested, rowID: string | (RowID)[], collapsed?: boolean): void;

    /* 判断是否所有子行都已经收起。 */
    isAllCollapsed(this: DTableNested): boolean;

    /* 获取层级和折叠信息。 */
    getNestedRowInfo(this: DTableNested, rowID: string): NestedRowInfo;

    /* 获取所有行的层级和折叠信息。 */
    getNestedInfo(this: DTableNested, rowID?: string): NestedRowInfo | Map<string, NestedRowInfo>;
}
```

## 行选中 `checkable`

该插件让表格内的行支持选中状态，可以通过点击行来选中或取消选中行。

### 启用行选中

先声明 `plugins: ['checkable']`，再设置 `checkable: true`。其默认值为 `'auto'`，会根据列的 `checkbox` 配置自动启用。所有被选中的行会默认拥有背景高亮样式。通常情况下我们需要用户点击行的任何位置来切换选中行，此行为可以通过设置初始化选项 `checkOnClickRow` 为 `true` 来实现。

### 显示 Checkbox

默认情况下，行选中状态是通过行前的 checkbox 来显示的，要在特定列内显示 Checkbox 需要在对应列定义上设置 `checkbox` 为 `true`。如果要在多个列内显示 Checkbox，可以在多个列定义上设置 `checkbox` 为 `true`。

有时只需要在部分行内显示 Checkbox，可以将列定义中的 `checkbox` 设置为一个回调函数来动态返回是否需要显示，该方法定义如下：

```ts
(this: DTableCheckable, rowID: string) => boolean;
```

这样可以根据行数据来动态决定是否显示 Checkbox。

### 获取所有选中的行

要获取所有选中的行，可以通过实例方法 `getChecks` 来获取，该方法会返回当前所有被选中的行的 ID，定义如下：

```ts
function getChecks(this: DTableCheckable): string[];
```

### 手动切换选中行

通过实例方法 `toggleCheckRows` 来切换指定行的选中状态，该方法定义如下：

```ts
function toggleCheckRows(this: DTableCheckable, ids?: string | string[] | boolean, checked?: boolean): Record<string, boolean>;
```

其中参数定义如下：

* `ids`：要切换选中状态的行 ID，可以使用数组指定多个操作的行，如果不指定，则切换所有行的选中状态；
* `checked`：要切换的选中状态，如果不指定，则自动切换选中状态。

该方法返回本次发生变化的行状态映射，键为行 ID，值为变化后的选中状态。

### 判断行是否选中

#### 判断特定行是否选中

通过实例方法 `isRowChecked` 来判断指定行是否选中，该方法定义如下：

```ts
function isRowChecked(this: DTableCheckable, rowID: string): boolean;
```

其中参数定义如下：

* `rowID`：要判断的行 ID。

#### 判断所有行是否选中

通过实例方法 `isAllRowChecked` 来判断所有行是否选中，该方法定义如下：

```ts
function isAllRowChecked(this: DTableCheckable): boolean;
```

### 在表尾显示 Checkbox 和选中信息

#### 表尾显示 Checkbox

通过在表尾引用名称 `"checkbox"`，可以在表尾对应位置显示一个 Checkbox，点击该 Checkbox 可以切换所有行的选中状态。下面为一个表尾配置示例：

```js
const options = {
    /* 加入并启用行选中插件。 */
    plugins: ['checkable'],
    checkable: true,

    /* 在表尾显示 Checkbox。 */
    footer: ['checkbox']
};
```

### 限制行是否可以被选中

有时并非所有行可以被选中，此时可以通过初始化选项 `canRowCheckable` 指定一个回调函数来动态返回是否可以选中，返回 `false` 时不可选中；返回 `'disabled'` 时禁用复选框，默认也不可通过方法选中。设置 `allowCheckDisabled: true` 后才允许通过方法选中 `'disabled'` 行。该回调函数定义如下：

```ts
type CanRowCheckable = (this: DTableCheckable, rowID: string) => boolean | 'disabled';
```

其中参数定义如下：

* `rowID`：要判断的行 ID。

### 动态启用行选中

有时需要动态启用或禁用行选中功能，可以通过实例方法 `toggleCheckable` 来实现，该方法定义如下：

```ts
function toggleCheckable(this: DTableCheckable, checkable?: boolean): void;
```

其中参数定义如下：

* `checkable`：是否启用行选中功能，如果不指定则自动切换。

如果需要在一开始不启用行选中功能，但需要后续进行启用，需要在初始化选项中明确设置 `checkable` 为 `false`。

### 监听行选中变更

通过初始化选项 `onCheckChange` 可以监听行选中状态的变更，该回调函数定义如下：

```ts
type OnCheckChange = (this: DTableCheckable, changes: Record<string, boolean>) => void;
```

其中参数定义如下：

* `changes`：选中状态变更信息，该对象的键为行 ID，值为该行的选中状态。

### 表尾显示选中信息

通过在表尾引用名称 `"checkedInfo"`，可以在表尾显示当前选中的行数，如果没有行被选中则显示所有行总数信息。下面为一个表尾配置示例：

```js
const options = {
    /* 加入并启用行选中插件。 */
    plugins: ['checkable'],
    checkable: true,

    /* 在表尾显示 Checkbox 和 选中信息 */
    footer: ['checkbox', 'checkedInfo']
};
```

未选中时显示“共 N 项”，选中后显示“已选择 M 项, 共 N 项”。如果需要自定义选中信息，可以通过初始化选项 `checkInfo` 指定回调函数动态生成，该函数定义如下：

```ts
type CheckInfo = (this: DTableCheckable, checks: string[]) => ComponentChildren;
```

其中参数定义如下：

* `checks`：当前所有选中的行 ID。

下面为一个例子：

```js
const options = {
    /* 自定义选项便于 checkInfo 回调函数使用。 */
    defaultSummary: '本页共 {total} 项，其中任务 {task} 项',

    /* 生成选中信息。 */
    checkInfo(checks) {
        /* 所有行。 */
        const rows = this.layout.rows;

        /* 选中时的信息。 */
        if (checks.length) {
            /* 以 HTML 格式返回。 */
            return {html: `本页共 ${rows.length} 项，已选中 <strong>${checks.length}</strong> 项`}
        }

        /* 未选中时的信息。 */
        return zui.formatString(this.options.defaultSummary, {
            total: rows.length,
            task: rows.filter(x => x.data.type === 'task').length,
        });
    }
};
```

### API

#### 表格初始化选项

```ts
interface PluginDTableOptions {
    /* 是否启用行选中。 */
    checkable?: boolean | 'auto';

    /* 是否在点击行时切换选中状态。 */
    checkOnClickRow?: boolean;

    /* 自定义函数用于生成在表尾显示的选中信息。 */
    checkInfo?: (this: DTableCheckable, checks: string[]) => ComponentChildren;

    /* 自定义判断行是否可以被选中。 */
    canRowCheckable?: (this: DTableCheckable, rowID: string) => boolean | 'disabled';

    /* 初始选中的行 ID。 */
    checkedRows?: string[];

    /* 是否允许通过方法选中 disabled 行，默认 false。 */
    allowCheckDisabled?: boolean;

    /* 表尾全选复选框文字。 */
    checkboxLabel?: string;

    /* 选中行之前的回调函数，可以修改最终生效的选中状态。 */
    beforeCheckRows?: (this: DTableCheckable, ids: string[] | undefined, changes: Record<string, boolean>, checkedRows: Record<string, boolean>) => Record<string, boolean> | undefined;

    /* 行选中状态变更时的回调函数。 */
    onCheckChange?: (this: DTableCheckable, changes: Record<string, boolean>) => void;

    /* 自定义 Checkbox 渲染。 */
    checkboxRender?: (this: DTableCheckable, checked: boolean, rowID: string, disabled?: boolean) => CustomRenderResult;
}
```

#### 列定义配置

```ts
interface PluginColSetting {
    /* 是否显示 Checkbox。 */
    checkbox?: boolean | ((this: DTableCheckable, rowID: string) => boolean);
}
```

#### 实例方法

```ts
interface PluginDTableMethods {
    /* 切换选中行。 */
    toggleCheckRows(this: DTableCheckable, ids?: string | string[] | boolean, checked?: boolean): Record<string, boolean>;

    /* 判断特定行是否选中。 */
    isRowChecked(this: DTableCheckable, rowID: string): boolean;

    /* 判断所有行是否选中。 */
    isAllRowChecked(this: DTableCheckable): boolean;

    /* 获取当前所有选中的行 ID。 */
    getChecks(this: DTableCheckable): string[];
}
```

## 操作列 `actions`

支持将某列显示为一组操作按钮，由 [工具栏](/lib/components/toolbar/js.html) 组件实现。该插件需要模块接入：

```ts
import {actions} from '@zui/dtable/plugins/actions/index.tsx';

const options = {
    plugins: [actions],
    cols: [{
        name: 'actions', title: '操作', type: 'actions', width: 160,
        actions: ['edit', 'delete'],
        actionsMap: {edit: {text: '编辑'}, delete: {text: '删除'}},
    }],
    data: [{id: '1'}],
};
```

行数据的同名字段优先于列上的 `actions`。

### 定义操作列

将列的 `type` 设为 `'actions'`，用 `actionsMap` 定义可用按钮，再通过行数据的同名字段或列 `actions` 指定要显示的操作。`actionsMap` 本身不会生成按钮列表。

### 定义操作按钮

通过 `actionsMap` 定义操作按钮的配置映射，该映射的键为操作按钮的名称，值为操作按钮的配置。操作按钮的配置为工具栏条目配置 `ToolbarItemOptions`。下面为 `actionsMap` 的定义示例：

```js
const colSetting = {
    name: 'actions',
    type: 'actions',
    actionsMap: {
        edit: {icon: 'icon-edit', hint: '编辑'},
        group: {icon: 'icon-group', hint: '团队'},
        split: {icon: 'icon-code-fork', hint: '添加子项目集'},
        delete: {icon: 'icon-trash', hint: '删除', text: '删除'},
        close: {icon: 'icon-off', hint: '关闭', 'data-toggle': 'modal', url: '#project?id={id}'},
        start: {icon: 'icon-play', hint: '开始'},
        pause: {icon: 'icon-pause', text: '挂起项目集'},
        active: {icon: 'icon-magic', text: '激活项目集', 'data-toggle': 'modal', url: '#project?id={id}'},
        other: {type: 'dropdown', caret: true, hint: '其他操作'},
        link: {name: 'link', icon: 'icon-link', text: '关联产品'},
        whitelist: {name: 'whitelist', icon: 'icon-shield', text: '项目白名单'},
        more: {type: 'dropdown', icon: 'icon-ellipsis-v', caret: false, hint: '更多'},
    }
}
```

### 定义行上的操作按钮

#### 操作按钮定义类型

```ts
/* 定义要展示的每个操作按钮，name 属性为操作按钮名称 */
type RowActionItem = string | {name: string; type?: 'dropdown', disabled?: boolean, items?: RowActionItem[]};

/* 定义要展示的操作按钮列表 */
type RowActionList = string | RowActionItem[];

/* *行数据对象上的值类型 */
type ActionsColDataInRow = RowActionList;
```

#### 通过列定义配置

通过列定义配置 `actions` 指定该列上显示的操作按钮，例如：


```js
const colSetting = {
    name: 'actions',
    type: 'actions',
    actions: ['edit', 'delete', 'close', 'start', 'pause', 'active', 'other'],
    actionsMap: {
        edit: {icon: 'icon-edit', hint: '编辑'},
        group: {icon: 'icon-group', hint: '团队'},
        split: {icon: 'icon-code-fork', hint: '添加子项目集'},
        delete: {icon: 'icon-trash', hint: '删除', text: '删除'},
        close: {icon: 'icon-off', hint: '关闭', 'data-toggle': 'modal', url: '#project?id={id}'},
        start: {icon: 'icon-play', hint: '开始'},
        pause: {icon: 'icon-pause', text: '挂起项目集'},
        active: {icon: 'icon-magic', text: '激活项目集', 'data-toggle': 'modal', url: '#project?id={id}'},
        other: {type: 'dropdown', caret: true, hint: '其他操作'},
        link: {name: 'link', icon: 'icon-link', text: '关联产品'},
        whitelist: {name: 'whitelist', icon: 'icon-shield', text: '项目白名单'},
        more: {type: 'dropdown', icon: 'icon-ellipsis-v', caret: false, hint: '更多'},
    }
}
```

#### 在行数据上配置

要定义具体的行对应列上的操作按钮，需要在该行对应列属性上定义要显示的按钮信息，可以通过如下方式进行定义：

下面为一个实际的例子：

```js
const rowData = {
    actions: [
        'close',
        {
            name: 'other',
            type: 'dropdown',
            items: [
                {name: 'pause', disabled: true},
                {name: 'active'},
            ]
        },
        'group',
        {name: 'edit', disabled: true},
        {
            name: 'more',
            type: 'dropdown',
            items: [
                {name: 'delete'},
                {name: 'link'},
            ]
        },
    ]
};
```

以上可以简化为 `|` 拼接的形式，其中 `-` 前缀表示该操作被禁用，`:` 定义该操作按钮为下拉菜单，`:` 后为下拉菜单中要展示的按钮：

```js
const rowData = {
    actions: 'close|other:-pause,active|group|-edit|more:delete,link'
};
```

### 自定义生成操作按钮

通过初始化选项 `actionItemCreator` 可以自定义生成操作按钮的函数，该函数定义如下：

```ts
type ActionItemCreator = (item: Partial<ToolbarItemOptions>, info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions;
```

其中参数定义如下：

* `item`：操作按钮的配置。
* `info`：当前行和列的信息。

`actionsCreator` 可以接管整个列表的生成，但只有行数据或列 `actions` 提供了非空操作列表后才会调用。它返回的列表不会再经过 `actionItemCreator`。

### 自定义操作工具栏配置

操作按钮通过工具栏组件实现，可以通过列选项 `actionsSetting` 来定义操作工具栏的配置，该配置为工具栏组件的初始化选项 `ToolbarOptions`。

### 自动定义操作列宽度

当列被定义操作列时，如果没有指定宽度 `width`，会根据第一行数据中同名字段的操作项估算宽度，不读取列上的 `actions`，也不测量按钮文字。使用列级操作列表、长文字或各行按钮数量不一致时，应显式指定 `width`。

### API

#### 初始化选项

```ts
interface PluginDTableOptions {
    /* 指定一个回调函数按需生成特定行上的操作按钮属性列表 */
    actionsCreator?: (info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions[];

    /* 指定一个回调函数用于修改最终生成的操作按钮属性 */
    actionItemCreator?: (item: Partial<ToolbarItemOptions>, info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions;
}
```

#### 列自定义配置

```ts
interface ColActionsSetting {
    /* 设置列类型 */
    type: 'actions';

    /* 一次性指定当前列上所有操作按钮 */
    actions?: string | (string | ActionItemInfo)[];

    /* 指定一个对象用于定义该列上所有可能出现的操作按钮，映射为按钮名称和按钮属性 */
    actionsMap: Record<string, Partial<ToolbarItemOptions>>;

    /* 指定一个用于创建操作按钮工具栏的配置 */
    actionsSetting?: Partial<ToolbarOptions>;

    /* 指定一个回调函数按需生成特定行上的操作按钮属性列表 */
    actionsCreator?: (info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions[];

    /* 指定一个回调函数用于修改最终生成的操作按钮属性 */
    actionItemCreator?: (item: Partial<ToolbarItemOptions>, info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions;
}
```

## 底部工具栏 `toolbar`

底部工具栏用于在表尾显示操作按钮，需要先导入模块：

```ts
import {toolbar} from '@zui/dtable/plugins/toolbar/index.tsx';
```

以下选项在同一模块中使用。

### 定义底部工具栏

通过 `footToolbar` 定义按钮数组、工具栏配置对象，或接收表格内部组件并返回上述配置的函数。要启用底部工具栏还需要在表尾配置 `footer` 中对应位置引入 `'toolbar'`。

下面为一个实际的例子：

```js
const options = {
    plugins: [toolbar],

    /* 在表尾显示底部工具栏。 */
    footer: ['toolbar'],

    /* 定义底部工具栏上的按钮。 */
    footToolbar: [
        {
            type: 'btn-group',
            items: [
                {text: '编辑'},
                {
                    type: 'dropdown',
                    caret: 'up',
                    items: [
                        {text: '删除'},
                        {text: '激活'},
                    ]
                },
            ]
        },
        {text: '刷新', icon: 'icon-refresh', onClick: () => console.log('刷新')},
        {text: '移动', icon: 'icon-move', disabled: true},
    ]
}
```

### 仅在行选中时显示底部工具栏

通常情况下我们仅需在表格内有行被选中时显示底部工具栏，这样方便用户对选中的行进行批量操作，可以设置 `showToolbarOnChecked: true`。此时必须同时声明 `plugins: [toolbar, 'checkable']` 并启用行选中。

### API

#### 初始化选项

```ts
interface PluginDTableOptions {
    /* 指定一个用于创建底部工具栏的配置 */
    footToolbar?: ToolbarSetting<[DTableWithToolbar]>;

    /* 仅在行选中时显示底部工具栏 */
    showToolbarOnChecked?: boolean;
}
```

## 底部分页器 `pager`

底部分页器用于在表尾部显示 [分页器](/lib/components/pager/js.html)。

### 定义分页器

可以通过初始化选项 `footPager` 来定义分页器的配置，该配置为分页器组件的初始化选项 `PagerOptions`。要启用分页器还需要在表尾配置 `footer` 中对应位置引入 `'pager'`。

下面为一个实际的例子：

```js
const options = {
    plugins: ['pager'],

    /* 在表尾显示分页器。 */
    footer: ['pager'],

    /* 定义分页器。 */
    footPager: {
        items: [
            {type: 'info', text: '共 {recTotal} 项'},
            {type: 'size-menu', text: '每页 {recPerPage} 项'},
            {type: 'link', page: 'first', icon: 'icon-double-angle-left', hint: '第一页'},
            {type: 'link', page: 'prev', icon: 'icon-angle-left', hint: '上一页'},
            {type: 'info', text: '{page}/{pageTotal}'},
            {type: 'link', page: 'next', icon: 'icon-angle-right', hint: '下一页'},
            {type: 'link', page: 'last', icon: 'icon-double-angle-right', hint: '最后一页'},
        ],
        page: 1,
        recTotal: 101,
        recPerPage: 10,
        linkCreator: '#?page={page}&recPerPage={recPerPage}',
    }
};
```

### 本地分页

设置 `localPager: true` 可以对已经加载的 `data` 分页，不发起数据请求。初始页码和每页数量可以通过 `footPager` 设置；总数由表格数据自动计算。默认从第 `1` 页开始，每页 `20` 行。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-plugin-pager" use="dtable" :options="getExampleOptions('dtable-plugin-pager')" />
</Example>

== 完整代码

```html
<div id="dtable-plugin-pager"></div>

<script>
const cols = [
    {name: 'name', title: '任务名称', width: 200},
];

const data = [
    {id: '1', name: '需求确认'},
    {id: '2', name: '功能开发'},
    {id: '3', name: '验收测试'},
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

const table = new zui.DTable('#dtable-plugin-pager', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    localPager: true,
    cols,
    data,
    plugins: ['pager', responsiveExample],
    footer: ['pager'],
    footPager: {page: 1, recPerPage: 2},
});
</script>
```

:::

`localPager` 也可以是 `PagerInfo` 对象，用于指定初始分页信息。未启用 `localPager` 时，`footPager` 只显示分页控件；链接跳转或重新加载数据需由应用处理。

### API

#### 初始化选项

```ts
interface PluginDTableOptions {
    /* 指定一个用于创建分页器的配置。 */
    footPager?: PagerOptions;

    /* 对已加载数据进行本地分页，默认关闭。 */
    localPager?: boolean | PagerInfo;
}
```

## 跨行跨列 `cellspan`

通过 `plugins: ['cellspan']` 加入插件，并提供 `getCellSpan` 回调启用。没有名为 `cellspan` 的布尔开关。跨列范围限于当前固定左区、中间区或固定右区，不能跨区域；跨行范围限于当前展示的数据行。

### 定义单元格跨行跨列

为了让单元格跨行跨列展示，需要通过选项 `getCellSpan` 定义一个回调函数来判断给定的单元格跨行跨列信息。该回调函数定义如下：

```ts
function getCellSpan(cell: {row: RowInfo, col: ColInfo}): {colSpan?: number, rowSpan?: number} | undefined;
```

从参数 `cell` 中可以获取当前要判断的单元格所属的行和列信息，在当前方法返回的对象中可以指定 `colSpan` 和 `rowSpan` 来让单元格按对应的跨行跨列数展示。示例中，第一行的“项目名称”跨 2 行；“进度”从第 2 行开始，每隔 3 行跨 3 列、2 行。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-cellspan" use="dtable" :options="getExampleOptions('dtable-cellspan')" />
</Example>

== 完整代码

```html
<div id="dtable-cellspan"></div>

<script>
const cols = [
    {name: 'project', title: '项目名称', width: 200, fixed: 'left', type: 'link', sortType: false, nestedToggle: true},
    {name: 'progress', title: '进度', width: 65, align: 'center', sortType: false, type: 'progress'},
    {name: 'storyPoints', title: '需求规模', width: 80, align: 'right', sortType: false, html: val => `${Number(val).toFixed(1)} <small class="text-gray">SP</small>`},
    {name: 'executionCounts', title: '执行数', width: 70, align: 'right', sortType: true, html: '{0} <small>迭代</small>'},
    {name: 'investedDays', title: '已投入', width: 70, align: 'right', sortType: false, html: '{0} <small>人天</small>'},
    {name: 'startDate', title: '开始日期', width: 120, align: 'center', sortType: true, formatDate: 'yyyy年MM月dd日'},
    {name: 'finishDate', title: '计划完成', width: 120, align: 'center', sortType: true, formatDate: 'yyyy年MM月dd日'},
    {name: 'actions', title: '操作', width: 100, sortType: false, fixed: 'right', onRenderCell(result, {col, row}) {
        result[0] = {
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        };
        return result;
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

const table = new zui.DTable('#dtable-cellspan', {
    width: '100%',
    height: 400,
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    nested: false,
    cols,
    data,
    plugins: ['rich', 'cellspan', responsiveExample],
    getCellSpan: (cell) => {
        if (cell.row.index === 0 && cell.col.name === 'project') {
            return {rowSpan: 2};
        }

        if (cell.col.name === 'progress' && cell.row.index % 3 === 1) {
            return {
                colSpan: 3,
                rowSpan: 2,
            };
        }
    },
});
</script>
```

:::

## 拖放排序 `sortable`

该插件允许通过拖放来改变表格内行的顺序，可以通过初始化选项 `sortable` 来启用。

通过 `plugins: ['sortable']` 声明启用，完整写法见下方示例。

默认 `sortable: true`，拖动手柄为 `.dtable-cell`；依赖的 `mousemove` 和 `autoscroll` 会自动加入。插件只调整当前显示顺序，需要保存顺序时在 `onSort` 或 `onSortEnd` 中处理 `orders`。

下面拖动单元格调整行顺序，`onSortEnd` 的第四个参数 `orders` 是本次调整后的行 ID 数组；未产生排序结果时为 `undefined`。当前顺序显示在表格下方，刷新示例后恢复初始顺序。

::: tabs

== 示例

<Example>
  <ZUI id="dtable-sortable" use="dtable" :options="getExampleOptions('dtable-sortable')" />
  <div id="dtable-sortable-status" class="mt-3" role="status">当前顺序：1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12</div>
</Example>

== 完整代码

```html
<div id="dtable-sortable"></div>
<div id="dtable-sortable-status" class="mt-3" role="status">当前顺序：1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12</div>

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
    {name: 'actions', title: '操作', width: 120, sortType: false, fixed: 'right', onRenderCell(result, {col, row}) {
        result[0] = {
            html: row.data[col.name].map((action) => {
                const actionNames = {start: '开始', close: '关闭', edit: '编辑'};
                return `<a href="#action=${action}">${actionNames[action] || action}</a>`;
            }).join(' '),
        };
        return result;
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

const table = new zui.DTable('#dtable-sortable', {
    width: '100%',
    height: 400,
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    nested: false,
    sortable: true,
    cols,
    data,
    plugins: ['sortable', responsiveExample],
    onSortEnd(_from, _to, _side, orders) {
        if (orders) {
            document.getElementById('dtable-sortable-status').textContent = `当前顺序：${orders.join(' → ')}`;
        }
    },
});
</script>
```

:::

### API

#### 初始化选项

```ts
interface PluginDTableOptions {
    /* 是否启用拖放排序。 */
    sortable?: boolean;

    /* 触发拖放排序的元素选择器。 */
    sortHandler?: string;

    /**
     * 使用回调函数给定是否能拖到指定行位置。
     *
     * @param from        拖动的行信息。
     * @param to          被拖动到的行信息。
     * @param sortingSide 拖动的行所在的位置（之前还是之后）。
     * @returns 返回 false 可以禁止拖动到指定行。
     */
    canSortTo?: (this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: SortingSide) => boolean;

    /**
     * 拖动开始时的回调函数。
     *
     * @param row   拖动的行信息。
     * @param event 事件对象。
     * @returns 返回 false 可以阻止拖动。
     */
    onSortStart?: (this: DTableSortable, row: RowInfo, event: MouseEvent) => false | void;

    /**
     * 拖动结束时的回调函数。
     *
     * @param from        拖动的行信息。
     * @param to          被拖动到的行信息。
     * @param sortingSide 拖动的行所在的位置（之前还是之后）。
     */
    onSortEnd?: (this: DTableSortable, from: RowInfo, to: RowInfo | undefined, sortingSide: SortingSide | undefined, orders: string[] | undefined) => void;

    /**
     * 提交拖放顺序前的回调函数。
     *
     * @param from        拖动的行信息。
     * @param to          被拖动到的行信息。
     * @param sortingSide 拖动的行所在的位置（之前还是之后）。
     * @param orders      拖动后所有行的 ID 列表。
     * @returns 返回 false 可以取消拖动。
     */
    onSort?: (this: DTableSortable, from: RowInfo, to: RowInfo, sortingSide: SortingSide, orders: string[]) => void | false;
}
```

## 表头分组 `header-group`

先声明 `plugins: ['header-group']`，再在列上配置相同的 `headerGroup` 字符串，将多个列合并为一个表头分组。插件启用选项 `headerGroup` 默认为 `true`，会把同组列排列到一起。支持一层分组，同组列应放在同一个固定区域。表头默认使用两倍行高。当前实现会覆盖显式设置的 `headerHeight`，因此本例保留默认表头高度。

### 分组示例

::: tabs

== 示例

<Example>
  <ZUI id="dtable-plugin-header-group" use="dtable" :options="getExampleOptions('dtable-plugin-header-group')" />
</Example>

== 完整代码

```html
<div id="dtable-plugin-header-group"></div>

<script>
const cols = [
    {name: 'name', title: '任务', width: 180},
    {name: 'start', title: '开始', width: 120, headerGroup: '计划日期'},
    {name: 'end', title: '结束', width: 120, headerGroup: '计划日期'},
];

const data = [
    {id: '1', name: '需求确认', start: '2026-10-05', end: '2026-10-09'},
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

const table = new zui.DTable('#dtable-plugin-header-group', {
    width: '100%',
    height: 'auto',
    responsive: true,
    scrollbarHover: false,
    'aria-label': '项目计划示例',
    striped: false,
    cols,
    data,
    plugins: ['header-group', responsiveExample],
});
</script>
```

:::

### API

#### 初始化选项

```ts
interface PluginDTableOptions {
    /* 是否启用表头分组，默认 true。 */
    headerGroup?: boolean;
}
```

#### 列定义配置

```ts
interface PluginColSetting {
    /* 表头分组名称。 */
    headerGroup?: string;
}
```

## 拖放改变列宽 `resize`

拖动表头中的分隔线可以调整列宽，双击分隔线恢复该列的原始宽度。此插件需要单独引入，并通过 `colResize` 启用；依赖的 `mousemove` 插件会自动加载。

```js
import {resize} from '@zui/dtable/plugins/resize/index.tsx';

const options = {
    plugins: [resize],
    colResize: true,
    cols: [
        {name: 'name', title: '名称', width: 180, minWidth: 100, maxWidth: 360},
        {name: 'status', title: '状态', width: 100, colResize: false},
    ],
};
```

| 配置 | 说明 |
| --- | --- |
| `colResize` | 是否允许调整列宽，也可以设置为 `(colName) => boolean`。未设置时不启用插件。 |
| 列配置 `colResize` | 覆盖表格级别的设置，支持相同的布尔值或函数。 |
| 列配置 `extraWidth` | 在原始列宽上增加的宽度，单位为像素，也可以为负数。 |
| `onColResize(colName, sizeChange, col)` | 拖动结束或双击恢复时调用；`sizeChange` 是相对于原始列宽的增量，不是最终宽度。 |

调整后的宽度受列的 `minWidth`、`maxWidth` 限制。中间区域和右侧固定区域的最后一列不显示调整手柄。实例方法 `isColResizable(colName)` 可以检查某列是否允许调整。

## 上下文菜单 `contextmenu`

为表头或单元格提供右键菜单。此插件需要单独引入，并通过 `contextmenu` 提供菜单项；没有菜单项时保留浏览器原生右键菜单。

```js
import {contextmenu} from '@zui/dtable/plugins/contextmenu/index.ts';

const options = {
    plugins: [contextmenu],
    contextmenu: {
        header: [{text: '表头操作', onClick: () => console.log('表头操作')}],
        cell(event, info) {
            return [{
                text: '查看单元格',
                onClick: () => console.log(info.rowID, info.colName),
            }];
        },
    },
};
```

`contextmenu` 支持以下形式：

* 菜单项数组：表头和数据单元格共用此菜单。
* `(event, info) => items | undefined`：根据点击位置动态返回菜单项。
* `{header, cell}`：分别设置表头和数据单元格菜单；两个属性都支持数组或函数。

菜单项使用 `ListitemProps` 格式。回调中的 `info` 包含 `rowID`、`colName`、`cellElement` 等指针位置信息，表头的 `rowID` 为 `'HEADER'`；回调中的 `this` 为数据表格实例。实例方法 `getContextMenuItems(event, info)` 返回当前位置对应的菜单项。

## 快捷键 `hotkey`

将快捷键绑定到当前表格元素；表格销毁时自动解除绑定。此插件需要单独引入，并设置 `hotkeys`。

```js
import {hotkey} from '@zui/dtable/plugins/hotkey/index.ts';

const options = {
    plugins: [hotkey],
    hotkeys: {
        '$mod+enter': (event) => {
            event.preventDefault();
            console.log('执行表格操作');
        },
        'ArrowLeft,ArrowRight': (event) => console.log(event.key),
    },
};
```

`hotkeys` 是快捷键到 `KeyboardEvent` 回调的映射，同一回调的多个按键可以用逗号分隔。`$mod` 表示当前平台的主要修饰键。未设置 `hotkeys` 时不启用插件；它不提供全局快捷键，也不会为表格自动添加焦点入口，键盘事件需来自表格内的可聚焦元素。

## 鼠标移动事件支持 `mousemove`

将表格内和文档上的鼠标移动合并到动画帧中处理，为拖动类插件提供 `mousemovesmooth` 和 `document_mousemovesmooth` 事件。`resize`、`moveable`、`sortable`、`sort-col`、`autoscroll`、`selectable` 会按各自的依赖自动引入它，通常无需单独启用。

开发自定义拖动插件时，可以将其声明为依赖：

```js
import {mousemove} from '@zui/dtable/plugins/mousemove/index.ts';

const trackPointer = {
    name: 'track-pointer',
    plugins: [mousemove],
    events: {
        mousemovesmooth(event) {
            console.log(event.clientX, event.clientY);
        },
    },
};

const options = {plugins: [trackPointer]};
```

此插件没有启用选项。提供的 `ignoreNextClick(timeout = 10)` 方法可以在拖动结束后短暂阻止下一次点击的默认行为；`timeout` 的单位为毫秒，不会阻止点击事件继续传播。

## 拖放选择 `selectable`

支持拖动选择单元格区域、通过表头选择整列，以及复制选区内容。此插件需要单独引入；当前实现还需要显式加入 `autoscroll`，以支持拖动时滚动和方向键切换选区。

```js
import {selectable} from '@zui/dtable/plugins/selectable/index.tsx';
import {autoscroll} from '@zui/dtable/plugins/autoscroll/index.ts';

const options = {
    plugins: [autoscroll, selectable],
    selectable: true,
    selectOnClickCell: true,
    copyHeader: true,
    onSelectCells(cells) {
        console.log(cells);
    },
};
```

| 配置 | 默认值 | 说明 |
| --- | --- | --- |
| `selectable` | `true` | 是否允许选择，也可以设置为 `({col, row}) => boolean` 限制可选单元格。 |
| `selectOnClickCell` | 未设置 | 设置为 `true` 时单击即可选择；否则鼠标移动距离不足 4 像素时不产生新选区。 |
| `copyHeader` | `true` | 复制单元格选区时是否包含对应表头。 |
| `markSelectRange` | `true` | 是否在表头和名称为 `INDEX` 的列上标记选区范围。 |
| `ignoreDeselectOn` | 未设置 | CSS 选择器；点击匹配元素时，不清空选区。点击表格以外的其他位置会清空选区。 |
| `beforeSelectCells(cells)` | 未设置 | 在 `selectCells()` 更新选区前调用，可以返回调整后的坐标数组。 |
| `onSelectCells(cells)` | 未设置 | `selectCells()` 完成选择时调用，参数为本次选择的单元格坐标。 |
| `selectableHotkeys` | 默认快捷键映射 | 设置为 `false` 关闭插件添加的快捷键，或按下表覆盖单个操作；操作值可为按键字符串、`true`（使用默认键）或 `false`。 |

坐标中的 `col` 和 `row` 均为从 `0` 开始的当前布局索引，不是列名或数据行 ID。

| 快捷键操作 | 默认按键 |
| --- | --- |
| `selectAll` | `$mod+a` |
| `copy` | `$mod+c` |
| `selectRight` | `Tab,ArrowRight` |
| `selectLeft` | `ArrowLeft` |
| `selectDown` | `ArrowDown` |
| `selectUp` | `ArrowUp` |

### 实例方法

| 方法 | 说明 |
| --- | --- |
| `selectCells(selections, options?)` | 设置选区。支持 `'C0R0'`（单元格）、`'C0'`（整列）、`'R0'`（整行）、`'C0R0:C2R3'`（区域），以及这些字符串或坐标对象的数组。 |
| `selectNextCell(direction?)` | 向 `'right'`、`'left'`、`'down'` 或 `'up'` 选择相邻单元格，默认向右。 |
| `selectAllCells()` / `deselectAllCells()` | 全选或清空选区。 |
| `getSelectedCells()` / `getSelectedCellsSize()` | 获取选中的坐标数组或单元格数量。 |
| `getSelectedCols()` / `getSelectedRows()` | 获取完整选中的列或行信息。 |
| `isCellSelected(cell)` | 检查坐标对象或 `'C0R0'` 形式的单元格是否已选择。 |
| `copySelections()` | 将选中的单元格以制表符和换行符分隔的文本写入剪贴板。 |
| `copySelectedCols()` | 复制完整选中的列，始终包含表头。 |

`selectCells()` 的 `options.clearBefore` 默认为 `true`，设置为 `false` 可以保留原选区。剪贴板功能使用浏览器 Clipboard API，需要安全上下文和浏览器授权；插件不提供粘贴功能。

## 拖放移动 `moveable`

按住表格中间滚动区域并拖动，可以改变滚动位置；它移动的是视口，不会改变行或列的顺序。此插件需要单独引入，安装后 `moveable` 默认为 `true`，依赖的 `mousemove` 会自动加载。

```js
import {moveable} from '@zui/dtable/plugins/moveable/index.ts';

const options = {
    plugins: [moveable],
    moveable: 'header',
};
```

`moveable: true` 允许在中间滚动区域拖动并同时改变横向和纵向滚动位置；`'header'` 将操作限制在中间区域的表头，且只横向滚动；`false` 关闭此功能。左右固定区域不作为拖动起点。拖动列宽分隔线时不会触发视口拖动。

## 自动滚动 `autoscroll`

为拖动过程提供随鼠标位置自动滚动，以及将指定行或列滚动到可见区域的能力。`sortable` 和 `sort-col` 会自动加载此插件；单独使用时按下面的方式引入。它没有启用选项，安装后需要调用方法开始滚动。

```js
import {autoscroll} from '@zui/dtable/plugins/autoscroll/index.ts';

const options = {plugins: [autoscroll]};
```

| 方法 | 说明 |
| --- | --- |
| `scrollTo({col?, row?, extra?})` | 将指定列或行滚动到可见区域；`col` 支持列名、索引或列信息，`row` 支持行 ID、索引或行信息。`extra` 是附加边距，默认为 `2` 像素。找不到行和列时返回 `false`，否则返回 `true`。 |
| `startScrollToMouse(options?)` | 开始监听鼠标位置并定时滚动；重复调用会替换当前滚动设置。 |
| `stopScrollToMouse()` | 停止随鼠标自动滚动。 |

`startScrollToMouse()` 的常用选项如下：

| 选项 | 默认值 | 说明 |
| --- | --- | --- |
| `interval` | `60` | 滚动检查间隔，单位为毫秒。 |
| `delay` | `200` | 开始后的等待时间，单位为毫秒。 |
| `speed` | `0.5` | 根据鼠标与边界的距离计算滚动量时使用的倍率。 |
| `detectPadding` | `30` | 边界检测偏移，单位为像素。 |
| `side` | 未设置 | 限制方向，支持 `'left'`、`'right'`、`'top'`、`'bottom'`、`'x'`、`'y'` 或这些值的数组。 |

例如 `startScrollToMouse({side: 'x'})` 仅自动横向滚动。插件会在表格销毁时清理定时器。类型中的 `onlyInside` 当前未参与滚动判断，不应依靠它限制触发区域；`maxStep` 当前参与最小滚动距离计算，并非滚动上限。

## 拖放调整列顺序 `sort-col`

拖动表头可以调整同一固定区域内的列顺序。此插件需要单独引入，并通过 `sortCol` 启用；`mousemove` 和 `autoscroll` 依赖会自动加载。

```js
import {sortCol} from '@zui/dtable/plugins/sort-col/index.tsx';

const options = {
    plugins: [sortCol],
    sortCol: true,
    onSortColStart(col) {
        if (col.name === 'id') return false;
    },
    onSortCol(from, to, side, orders) {
        console.log(orders);
    },
};
```

| 配置 | 说明 |
| --- | --- |
| `sortCol` | 设置为 `true` 启用；未设置时不启用。 |
| `onSortColStart(col, event)` | 开始拖动前调用，返回 `false` 阻止拖动该列。 |
| `canSortColTo(from, to, side)` | 检查是否允许移动到目标列之前或之后，返回 `false` 禁止该目标位置。 |
| `onSortCol(from, to, side, orders)` | 释放鼠标并产生新顺序时调用，返回 `false` 不应用本次顺序。`orders` 为当前区域的列名数组。 |
| `onSortColEnd(from, to, side, orders)` | 拖动结束、状态更新后调用；没有有效目标或新顺序时，对应参数可能为 `undefined`。 |

`side` 为 `'before'` 或 `'after'`。此插件不能跨左侧固定、中间滚动、右侧固定区域移动列，也不会自动保存顺序。

`sortCol` 类型还允许列名数组或判断函数，但当前仅用于标记可拖动表头的样式，不能可靠阻止其他列拖动；需要限制拖动列时使用 `onSortColStart` 返回 `false`。

## 自定义列 `custom-col`

提供列分隔线和列显隐设置。此插件需要单独引入，并通过 `customCol` 启用；默认借助 `contextmenu` 在表头右键菜单中提供设置入口。

```js
import {customCol} from '@zui/dtable/plugins/custom-col/index.tsx';

const options = {
    plugins: [customCol],
    customCol: true,
    canSetColVisibility(colName, visible) {
        return visible || colName !== 'id';
    },
    cols: [
        {name: 'id', title: '编号', required: true},
        {name: 'name', title: '名称'},
    ],
};
```

| 配置 | 说明 |
| --- | --- |
| `customCol` | 是否启用插件，未设置时不启用。 |
| 列配置 `required` | 为 `true` 时禁用默认菜单中的隐藏操作。 |
| `canSetColVisibility(colName, visible)` | 控制默认菜单中的隐藏操作；当前实现需要此回调明确返回 `true` 才允许隐藏。 |
| `onSetColBorder(colName, border, colBorders)` | 修改分隔线后调用；`colBorders` 是本次设置后的列分隔线记录。 |
| `onSetColVisibility(colName, visible)` | 调整列可见性后调用。 |

### 实例方法

* `getColBorder(colName, checkNeighbor = true)`：读取列分隔线，默认考虑相邻列共享的边界。
* `setColBorder(colName, border)`：设置分隔线；`border` 可为 `'left'`、`'right'`、`true`（两侧）或 `false`（无）。
* `setColVisibility(colName, visible)`：显示或隐藏列；恢复隐藏列可以使用 `setColVisibility(colName, true)`。

已提供 `contextmenu` 时，插件不会再自动添加默认表头菜单。`required` 和 `canSetColVisibility` 只限制默认菜单入口，直接调用 `setColVisibility()` 不执行这些检查；调用方需要自行保证必需列可见。列设置保存在当前表格状态中，不会自动持久化。

## 过滤候选菜单 `filterable`（开发中）

源码位于 `plugins/filter`，导出名称和注册名称均为 `filterable`。当前实现可以根据列数据生成带搜索框和复选框的候选菜单，并重置输入与勾选状态；尚未实现确定操作、筛选条件回传和数据行过滤，不应作为完整过滤功能使用。

```js
import {filterable} from '@zui/dtable/plugins/filter/index.tsx';
```

将 `filterable` 加入 `plugins` 后，表格级别的 `filterable` 默认为 `true`，还需要在目标列设置 `filterable: true` 才渲染菜单入口。列配置 `filter.icon`、`filter.className` 分别指定图标和菜单类名。候选项搜索只影响菜单内容，不影响表格中的行；类型中声明的 `submit`、`reset` 等回调当前没有接入菜单事件。

## 编辑草稿 `draft`

将单元格修改保存在草稿中，分别管理待应用的 `stagingDraft` 和已应用的 `appliedDraft`。读取时依次使用待应用草稿、已应用草稿和原始数据；草稿不会自动写回原始 `data` 或提交到服务端。

### 源码模块用法

```js
import {DTable} from '@zui/dtable';
import {draft} from '@zui/dtable/plugins/draft/index.ts';

const table = new DTable('#dtable-draft', {
    plugins: [draft],
    cols: [{name: 'name', title: '任务名称'}],
    data: [{id: '1', name: '接口联调'}],
    afterStageDraft(changes) {
        console.log('本次草稿变化', changes);
    },
});

/* 在表格挂载后，通过插件方法暂存修改。 */
function updateName() {
    table.$.stageDraft({'1': {name: '接口联调完成'}});
}
```

草稿采用 `{[rowID]: {[colName]: value}}` 的格式，行 ID 使用字符串。表头对应特殊行 ID `'HEADER'`。

### API

| 初始化选项 | 默认值 | 说明 |
| --- | --- | --- |
| `draft` | `true` | 是否启用草稿渲染。 |
| `skipRenderDraftCell` | 未设置 | 设为 `true` 时由其他插件负责渲染，草稿方法仍可使用。 |
| `onStageDraft(changes, stagingDraft)` | 未设置 | 暂存前调用，返回 `false` 阻止此次修改。 |
| `afterStageDraft(changes, stagingDraft, oldStagingDraft, options)` | 未设置 | 暂存完成后调用，`options.skipUpdate` 表示此次是否跳过更新。 |
| `afterApplyDraft(changes, appliedDraft, oldAppliedDraft)` | 未设置 | 应用草稿后调用。 |

| 实例方法 | 说明 |
| --- | --- |
| `stageDraft(changes, options?)` | 合并待应用草稿。`options` 支持 `skipUpdate` 和 `callback`。 |
| `applyDraft(changes, options?)` | 将修改合入已应用草稿，并清除待应用草稿中的相同值；不会保存到服务器。`options` 同上。 |
| `getCellDraftValue(row, col)` | 获取包含草稿修改的单元格值；行、列可使用信息对象、名称或索引。 |
| `getRowDraftData(row, options?)` | 获取一行的草稿数据；`includeIndexCol` 控制是否包含 `INDEX` 列，`emptyCellValue` 指定 `undefined` 的替代值。 |
| `getColDraftData(col, options?)` | 按行 ID 返回一列的草稿数据；`includeHeaderRow` 控制是否包含表头，`emptyCellValue` 指定空值。 |

## 单元格编辑 `editable`

双击单元格进入文本编辑，依赖 `draft`，会自动引入草稿插件。编辑结果以字符串暂存到草稿，失去焦点或按 Enter 结束编辑；数据转换、校验和保存由业务代码处理。

### 源码模块用法

```js
import {DTable} from '@zui/dtable';
import {editable} from '@zui/dtable/plugins/editable/index.tsx';

const table = new DTable('#dtable-editable', {
    plugins: [editable],
    cols: [
        {name: 'id', title: 'ID'},
        {name: 'name', title: '任务名称'},
    ],
    data: [{id: '1', name: '接口联调'}],
    editable: (_rowID, colName) => colName === 'name',
    onEditCell({value}) {
        if (!String(value).trim()) {
            return false;
        }
    },
    afterStageDraft(changes) {
        console.log('待保存修改', changes);
    },
});
```

### API

| 初始化选项 | 默认值 | 说明 |
| --- | --- | --- |
| `editable` | `true` | 布尔值或 `(rowID, colName) => boolean`，控制是否允许进入编辑。 |
| `headerEditable` | 未设置 | 设为 `true` 允许编辑表头。 |
| `selectAllOnFocus` | `true` | 编辑框获得焦点时选中全部文本。 |
| `emptyCellValue` | `''` | 清空单元格时写入的值。 |
| `onEditCell({rowID, colName, value, oldValue})` | 未设置 | 输入变化提交到草稿前调用，返回 `false` 阻止修改。 |
| `onPasteToCell(event)` | 未设置 | 处理编辑框内的粘贴事件。 |

| 实例方法 | 说明 |
| --- | --- |
| `editCell({rowID, colName})` | 进入指定单元格编辑；不传参数结束编辑。 |
| `isCellEditing(rowID, colName)` | 判断单元格是否正在编辑。 |
| `deleteCells(cells)` | 将 `{rowID, colName}[]` 中的单元格设为 `emptyCellValue`，返回是否产生修改。 |
| `deleteRows(rows, options?)` | 将后续行的数据向前移动并写入草稿，不缩减表格行数；`options.skipUpdate` 可跳过更新。 |
| `deleteCols(cols, options?)` | 将后续列的数据向前移动并清空尾列，不缩减表格列数；`options.skipUpdate` 可跳过更新。 |

当前编辑器使用文本输入框，不提供列类型对应的日期、数值或下拉编辑器。结束编辑不会回滚已经写入的草稿，需要撤销能力时可配合 `history`。

## 撤销与重做 `history`

记录草稿变化，提供撤销和重做。插件自动引入 `draft` 与 `store`，默认跟踪待应用草稿；单独启用它不会提供编辑框或快捷键。

### 源码模块用法

```js
import {DTable} from '@zui/dtable';
import {editable} from '@zui/dtable/plugins/editable/index.tsx';
import {history} from '@zui/dtable/plugins/history/index.ts';

const table = new DTable('#dtable-history', {
    plugins: [editable, history],
    cols: [{name: 'name', title: '任务名称'}],
    data: [{id: '1', name: '接口联调'}],
    historyTarget: 'staging',
    onHistoryApplied(changes) {
        console.log('撤销或重做产生的修改', changes);
    },
});

/* 可在撤销和重做按钮的点击事件中调用。 */
function undo() {
    table.$.undoHistory();
}

function redo() {
    table.$.redoHistory();
}
```

### API

| 初始化选项 | 默认值 | 说明 |
| --- | --- | --- |
| `history` | `true` | 是否记录草稿历史。 |
| `historyTarget` | `'staging'` | `'staging'` 跟踪 `stageDraft`；`'applied'` 跟踪 `applyDraft`。 |
| `historyThreshold` | `10` | 最近的记录保存在内存中，超过阈值的旧记录转入会话存储；不是历史记录总数上限。 |
| `onHistoryApplied(changes, newDraft, oldDraft)` | 未设置 | 撤销或重做完成后调用。 |

| 实例方法 | 说明 |
| --- | --- |
| `undoHistory(callback?)` | 撤销一次；没有可撤销记录时返回 `false`。 |
| `redoHistory(callback?)` | 重做一次；没有可重做记录时返回 `false`。 |
| `canUndoHistory()` / `canRedoHistory()` | 判断当前是否可撤销或重做。 |
| `addHistory({before, after})` | 手动加入一条草稿差异记录。 |
| `getHistory(cursor?)` | 获取指定游标处的历史记录，省略参数时读取当前游标。 |

撤销后新增修改会清除后续可重做记录。历史游标和记录列表保存在当前表格实例中，不会在刷新页面后自动恢复。

## 表格存储 `store`

为插件提供按表格 `id` 隔离的 [本地存储](/lib/helpers/store/) 实例。`nested` 和 `history` 会自动引入它，通常无须单独配置。

### 源码模块用法

```js
import {DTable} from '@zui/dtable';
import {store} from '@zui/dtable/plugins/store/index.ts';

const table = new DTable('#dtable-store', {
    id: 'task-list',
    plugins: [store],
    cols: [{name: 'name', title: '任务名称'}],
    data: [{id: '1', name: '接口联调'}],
});

/* 表格挂载后，可以保存与此表格关联的业务状态。 */
function saveView(view) {
    table.$.data.store.set('view', view);
}
```

选项 `store` 默认为 `true`。存储实例通过表格组件的 `data.store` 访问，支持 `get(key)`、`set(key, value)`、`remove(key)`；通过 `data.store.session` 使用会话存储。需要跨次创建共享状态时应指定稳定的表格 `id`，不同表格使用不同的 `id`。该插件提供存储容器，不会自动保存全部表格数据、列配置或编辑草稿。

## 数据网格 `datagrid`

组合单元格编辑、区域选择、列宽调整、撤销重做和自动滚动，将二维数组显示为可编辑的数据网格。插件自动引入 `editable`、`selectable`、`hotkey`、`resize`、`history`、`autoscroll` 及它们的依赖。

### 源码模块用法

```js
import {DTable} from '@zui/dtable';
import {datagrid} from '@zui/dtable/plugins/datagrid/index.ts';

const table = new DTable('#dtable-datagrid', {
    plugins: [datagrid],
    colResize: true,
    datasource: {
        cols: [
            {name: 'C1', title: '任务名称', width: 180},
            {name: 'C2', title: '负责人', width: 120},
        ],
        data: [
            ['接口联调', '张三'],
            ['整理文档', '李四'],
        ],
    },
    minRows: 5,
    minCols: 2,
    extraRows: 0,
    extraCols: 0,
    height: 240,
    afterStageDraft(changes) {
        console.log('网格修改', changes);
    },
});
```

数据通过 `datasource.data` 的二维数组提供，`datasource.cols` 设置列信息。数据列名依次为 `C1`、`C2` 等，行 ID 从字符串 `'0'` 开始；默认增加名称为 `INDEX` 的行号列，该列不能进入编辑或调整宽度。网格会从数据源生成普通表格的 `cols` 和 `data`，不要同时用这两个选项定义另一份数据。

### 网格尺寸与编辑

| 初始化选项 | 默认值 | 说明 |
| --- | --- | --- |
| `datasource` | 必填 | `{cols?: ColSetting[], data?: unknown[][]}`；空网格可传 `{data: []}`。 |
| `minRows` / `minCols` | `20` / `10` | 最少数据行数和数据列数。 |
| `extraRows` / `extraCols` | `5` / `5` | 在数据范围外预留的空行和空列。 |
| `showRowIndex` | `true` | 是否显示行号列。 |
| `colResize` | 未设置 | 设为 `true` 启用数据列宽度调整。 |
| `headerEditable` | `true` | 是否允许编辑表头。 |
| `autoExpandGrid` | `true` | 修改接近边缘时扩展网格；数值指定额外预留数量，`false` 关闭自动扩展。 |
| `copyHeader` | `false` | 复制选区时是否附带表头。 |
| `datagridHotkeys` | `{}` | 配置删除、粘贴、编辑、取消选区、剪切、重做和撤销快捷键；`false` 关闭网格自身的快捷键配置。 |
| `onReadClipboardFail()` | 未设置 | 读取剪贴板失败时调用。 |

`datagridHotkeys` 可配置 `delete`、`paste`、`focus`、`cancel`、`cut`、`redo`、`undo`，对应值为快捷键字符串、`true`（使用默认键）或 `false`（关闭）。默认键分别是 Delete/Backspace、`$mod+v`、Enter、Escape、`$mod+x`、`$mod+Shift+z`、`$mod+z`。Escape 取消选区，不表示撤销编辑。当前网格默认快捷键中的全选、复制及方向键处理尚未完整接入；需要这些操作时，可以调用 `selectable` 提供的实例方法。

### 常用方法

| 实例方法 | 说明 |
| --- | --- |
| `getGridSize()` | 返回 `{rowsCount, colsCount}`，不包含行号列。 |
| `appendRows(countOrList?, options?)` | 追加空行，或追加 `RowData[]` / 二维数组中的行；默认追加一行。 |
| `appendCols(countOrList?, options?)` | 追加空列，或按二维数组中的每一列追加数据；默认追加一列。 |
| `expandGridSize({rowsCount, colsCount}, options?)` | 将网格扩展到至少指定尺寸，不缩小现有网格。 |
| `deleteSelections()` / `cutSelections()` | 清空或剪切当前选区。 |
| `deleteSelectedRows()` / `deleteSelectedCols()` | 将后续数据前移，保持网格尺寸。 |
| `clearSelectedCols()` / `cutSelectedCols()` | 清空或剪切选中列，包含表头。 |
| `pasteCells(targetCell, options?)` | 从指定单元格开始粘贴，返回 `Promise<boolean>`。 |
| `pasteToSelection()` / `pasteToSelectedCol()` | 从当前选区起点或首个选中列的表头开始粘贴。 |

追加方法的 `options` 支持 `autoScroll`、`select` 和 `skipUpdate`；扩展尺寸方法支持 `skipUpdate`。单元格目标可用 `{rowID, colName}` 或从零开始的表格索引 `{row, col}`；索引包含显示出来的行号列，因此第一列数据的索引通常为 `1`。

粘贴文本按制表符和换行符拆分。可通过 `options.data` 直接提供文本；不提供时尝试读取系统剪贴板，需要浏览器支持并允许相应权限。`expandCells: false` 忽略超出网格的部分，`select: false` 不选中新粘贴的单元格：

```js
/* 在表格挂载后调用；此方式不读取系统剪贴板。 */
async function pasteText() {
    await table.$.pasteCells({rowID: '0', colName: 'C1'}, {
        data: '更新接口\t张三\n补充测试\t李四',
        expandCells: true,
        select: true,
    });
}
```

编辑、删除和粘贴的结果保存在草稿中，不会自动写回 `datasource.data`。可用 `getRowDraftData` / `getColDraftData` 读取当前结果，并由业务代码保存。

<script>
import index from './plugins.js';
export default index;
</script>
