# 数据表格插件

## 富格式插件 `rich`

<Badge text="内置插件" />

让单元格支持展示丰富格式内容，包括链接、格式化字符串、HTML、迷你进度条以及时间日期等。

### 链接

在列定义上通过 `link` 属性设置单元格内容作为链接显示，支持以下值：

* `string`：使用模版字符串来生成链接；
* `{url: string} & JSX.HTMLAttributes<HTMLAnchorElement>`：使用对象来生成链接，对象中的其他属性将作为链接的属性；
* `((info: {row: RowInfo, col: ColInfo}) => string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>))`：使用函数来动态生成链接。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'name',
        title: '项目名称',

        /* 使用字符串进行格式化，{0} 表示单元格的原始值。 */
        link: 'https://example.com/{0}',
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

        /* 使用字符串进行格式化，{name} 表示单元格的原始值对象中的 name 属性。 */
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
        format: '<strong class="text-primary">{0}</strong>',
    }, {
        name: 'status',
        title: '状态',

        /* 使用函数动态生成 HTML。 */
        format: (value, info) => `<span class="label">${value}</span>`,
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
* `(value: any, info: {row: any, col: ColInfo}) => string`：使用函数来动态生成日期时间。

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

        /* 使用函数动态生成日期时间。 */
        formatDate: (value, info) => {
            const date = new Date(value);
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        },
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

## 按列排序 `sort-type`

<Badge text="内置插件" />

设置表格支持按列进行排序，在特定列上通过 `sortType` 属性启用列排序，列头将根据排序类型显示为链接，用户点击后可以更新表格。该插件为内置插件，无需手动引入即可使用。

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
* `(col: ColInfo, sortType: string) => ColSortType`：通过函数来动态生成该列的排序链接。

当通过字符串模版来设置排序链接时，可以在字符串模版中使用如下动态字段：

* `"{sortType}"`：当前排序类型；
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
    sortLink?: string | ((this: DTableSortType, col: ColInfo, nextSortType: ColSortType, currentSortType: ColSortType) => string);

    /* 列排序链接元素上的其他属性，可以指定为函数动态生成 */
    sortAttrs?: JSX.HTMLAttributes | ((this: DTableSortType, col: ColInfo, sortType: ColSortType) => JSX.HTMLAttributes);
}
```

#### 表格初始化选项

```ts
interface PluginDTableOptions {
    /* 列排序链接模版或生成函数 */
    sortLink?: string | ((this: DTableSortType, col: ColInfo, nextSortType: ColSortType, currentSortType: ColSortType) => string);
}
```

## 头像 `avatar`

<Badge text="内置插件" />

设置表格支持在单元格内显示头像，通过在列定义上设置 `avatar` 属性或 `avatarBtn` 属性来启用该功能。该插件为内置插件，无需手动引入即可使用。

### 显示为头像

在列定义上设置 `type: 'avatar'` 来将单元格渲染为一个头像。另外支持通过如下属性来自定义头像：

* `avatarClass: string`：头像元素上的 CSS 类名；
* `avatarKey: string`：用于从行数据对象上获取头像图片地址的属性名；
* `avatarCodeKey: string`：用于从行数据对象上获取头像 Code 的属性名；
* `avatarNameKey: string`：用于从行数据对象上获取头像名称的属性名。
* `avatarProps: Partial<AvatarProps> | ((row: RowInfo) => Partial<AvatarProps>)`：用于指定头像其他属性，或者通过函数动态返回。

下面为一个实际的例子：

```js
const cols = [
    {
        name: 'manager',
        title: '产品经理',

        /* 将单元格渲染为头像。 */
        type: 'avatar'

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
        type: 'avatarName'

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
        type: 'avatarBtn'

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

在定义列时通过 `group` 属性为列分配一个组名，这样具有相同组名的列会视为一组。配合使用其他选项可以实现不同的效果。

### 分组间分割线

通过设置初始化选项 `groupDivider` 为 `true`，可以为相邻但不同属于不同分组的列添加分割线。下面为一个实际的例子：

```js
const options = {
    /* 为相邻但不同属于不同分组的列添加分割线。 */
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

## 列鼠标悬停效果 `col-hover`

<Badge text="内置插件" />

设置表格支持在鼠标悬停在列上时，高亮该列。该插件为内置插件，无需手动引入即可使用。

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

要启用多层级功能，需要在数据表格初始化选项 `nested` 上设置 `true`。默认情况下会检查行数据上的 `parent` 属性来查找该行是否属于某个父级行，并会检查 `asParent` 属性来判断当前行是否应该视为父级行，可以通过初始化选项 `nestedParentKey` 和 `asParentKey` 分别来修改这两个属性名。

下面为一个初始化选项的例子：

```js
const options = {
    /* 启用多层级功能。 */
    nested: true,

    /* 指定父级行 ID 属性名为 parentID。 */
    nestedParentKey: 'parentID',

    /* 指定是否视为父级行的属性名为 isParent。 */
    asParentKey: 'isParent',

    data: {
        {id: '1', name: '研发部', isParent: true},
        {id: '2', name: '客户端开发部', parentID: '1'},
        {id: '3', name: '移动开发部', parentID: '1', isParent: true},
        {id: '4', name: 'iOS 开发小组', parentID: '3'},
        {id: '5', name: 'Android 开发小组', parentID: '3'},
    }
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

    /* 缩进间距。 */
    nestedIndent?: number;

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

要启用该插件，需要在初始化选项中设置 `checkable` 为 `true`。所有被选中的行会默认拥有背景高亮样式。通常情况下我们需要用户点击行的任何位置来切换选中行，此行为可以通过设置初始化选项 `checkOnClickRow` 为 `true` 来实现。

### 显示 Checkbox

默认情况下，行选中状态是通过行前的 checkbox 来显示的，要在特定列内显示 Checkbox 需要在对应列定义上设置 `checkbox` 为 `true`。如果要在多个列内显示 Checkbox，可以在多个列定义上设置 `checkable` 为 `true`。

有时只需要在部分行内显示 Checkbox，可以在行数据中设置 `checkable` 为一个回调函数来动态返回是否需要显示，该方法定义如下：

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

该方法会返回一个对象，该对象的键为行 ID，值为该行的选中状态。

### 判断行是否选中

#### 判断特定行是否选中

通过实例方法 `isRowChecked` 来判断指定行是否选中，该方法定义如下：

```ts
function isRowChecked(this: DTableCheckable, rowID: string): boolean;
```

其中参数定义如下：

* `rowID`：要判断的行 ID。

#### 判断所有行是否选中

通过实例方法 `isAllChecked` 来判断所有行是否选中，该方法定义如下：

```ts
function isAllChecked(this: DTableCheckable): boolean;
```

### 在表尾显示 Checkbox 和选中信息

#### 表尾显示 Checkbox

通过在表尾引用名称 `"checkbox"`，可以在表尾对应位置显示一个 Checkbox，点击该 Checkbox 可以切换所有行的选中状态。下面为一个表尾配置示例：

```js
const options = {
    /* 启用行选中插件。 */
    checkable: true,

    /* 在表尾显示 Checkbox。 */
    footer: ['checkbox']
};
```

### 限制行是否可以被选中

有时并非所有行可以被选中，此时可以通过初始化选项 `canRowCheckable` 指定一个回调函数来动态返回是否可以选中，该回调函数定义如下：

```ts
function(this: DTableCheckable, rowID: string): boolean
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
function(this: DTableCheckable, changes: Record<string, boolean>): void;
```

其中参数定义如下：

* `changes`：选中状态变更信息，该对象的键为行 ID，值为该行的选中状态。

### 表尾显示选中信息

通过在表尾引用名称 `"checkInfo"`，可以在表尾显示当前选中的行数，如果没有行被选中则显示所有行总数信息。下面为一个表尾配置示例：

```js
const options = {
    /* 启用行选中插件。 */
    checkable: true,

    /* 在表尾显示 Checkbox 和 选中信息 */
    footer: ['checkbox', 'checkInfo']
};
```

默认生成的选中信息为 `'已选择 {selected} 项'` 或 `'共 {total} 项'`，如果需要自定义选中信息可以通过初始化选项 `checkInfo` 指定回调函数动态生成，该函数定义如下：

```ts
function (this: DTableCheckable, checks: string[]): ComponentChildren;
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
    canRowCheckable?: (this: DTableCheckable, rowID: string) => boolean;

    /* 选中行之前的回调函数，可以修改最终生效的选中状态。 */
    beforeCheckRows?: (this: DTableCheckable, ids: string[] | undefined, changes: Record<string, boolean>, checkedRows: Record<string, boolean>) => Record<string, boolean>;

    /* 行选中状态变更时的回调函数。 */
    onCheckChange?: (this: DTableCheckable, changes: Record<string, boolean>) => void;

    /* 自定义 Checkbox 渲染。 */
    checkboxRender?: (this: DTableCheckable, checked: boolean, rowID: string) => CustomRenderResult;
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

支持方便的设定某列显示为一组操作按钮。操作按钮由 [工具栏](/lib/components/toolbar/js.html) 组件实现。

### 定义操作列

要将某列作为操作列，只需要在该列定义上设置类型 `type` 为 `'actions'`，然后通过列定义配置 `actionsMap` 设定操作按钮的配置映射即可。

### 定义操作按钮

通过 `actionsMap` 定义操作按钮的配置映射，该映射的键为操作按钮的名称，值为操作按钮的配置。操作按钮的配置为工具栏条目配置 `ToolbarItemOptions`。下面为 `actionsMap` 的定义示例：

```js
const colSetting = {
    name: 'actions',
    type: 'actions',
    actionsMap: {
        edit: {icon: 'icon-edit', hint: '编辑'},
        group: {icon: 'icon-group', hint: '团队'},
        split: {icon: 'icon-split', hint: '添加子项目集'},
        delete: {icon: 'icon-trash', hint: '删除', text: '删除'},
        close: {icon: 'icon-off', hint: '关闭', 'data-toggle': 'modal', url: '#test?id={id}'},
        start: {icon: 'icon-start', hint: '开始'},
        pause: {icon: 'icon-pause', text: '挂起项目集'},
        active: {icon: 'icon-magic', text: '激活项目集', 'data-toggle': 'modal', url: '#test?id={id}'},
        other: {type: 'dropdown', caret: true, hint: '其他操作'},
        link: {name: 'link', icon: 'icon-link', text: '关联产品'},
        whitelist: {name: 'whitelist', icon: 'icon-shield-check', text: '项目白名单'},
        more: {type: 'dropdown', icon: 'icon-ellipsis-v', caret: false, hint: '更多'},
    }
}
```

### 定义行上的操作按钮

要定义具体的行对应列上的操作按钮，需要在该行对应列属性上定义要显示的按钮信息，可以通过如下方式进行定义：

```ts
/* 定义要展示的每个操作按钮，name 属性为操作按钮名称 */
type RowActionItem = string | {name: string; type?: 'dropdown', disabled?: boolean, items?: RowActionItem[]};

/* 定义要展示的操作按钮列表 */
type RowActionList = string | RowActionItem[];

/* *行数据对象上的值类型 */
type ActionsColDataInRow = RowActionList;
```

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
const rowData = 'close|other:-pause,active|group|-edit|more:delete,link';
```

### 自定义生成操作按钮

通过初始化选项 `actionItemCreator` 可以自定义生成操作按钮的函数，该函数定义如下：

```ts
function actionItemCreator: (item: Partial<ToolbarItemOptions>, info: {row: RowInfo, col: ColInfo}) => ToolbarItemOptions;
```

其中参数定义如下：

* `item`：操作按钮的配置。
* `info`：当前行和列的信息。

### 自定义操作工具栏配置

操作按钮通过工具栏组件实现，可以通过初始化选项 `actionsSetting` 来定义操作工具栏的配置，该配置为工具栏组件的初始化选项 `ToolbarOptions`。

### 自动定义操作列宽度

当列被定义操作列时，如果没有指定宽度 `width`，则会根据第一行实际按钮的个数自动计算宽度，需要注意的是确保所有行拥有相同的按钮个数，如果第一行按钮个数不是最大的，则会导致后面行的按钮显示不全，此时需要自行通过 `width` 指定宽度。

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

底部工具栏用于在表尾部显示一些操作按钮。

### 定义底部工具栏

可以通过初始化选项 `footToolbar` 来定义底部工具栏的配置，该配置为工具栏组件的初始化选项 `ToolbarOptions`。要启用底部工具栏还需要在表尾配置 `footer` 中对应位置引入 `'toolbar'`。

下面为一个实际的例子：

```js
const options = {
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
        {text: '刷新', icon: 'icon-refresh', onClick: refreshTable},
        {text: '移动', icon: 'icon-move', disabled: true},
    ]
}
```

### 仅在行选中时显示底部工具栏

通常情况下我们仅需在表格内有行被选中时显示底部工具栏，这样方便用户对选中的行进行批量操作，可以通过初始化选项 `showToolbarOnChecked` 来启用。

### API

#### 初始化选项

```ts
interface PluginDTableOptions {
    /* 指定一个用于创建底部工具栏的配置 */
    footToolbar?: Partial<ToolbarOptions>;

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

### API

#### 初始化选项

```ts
interface PluginDTableOptions {
    /* 指定一个用于创建分页器的配置。 */
    footPager?: Partial<PagerOptions>;
}
```

## 拖放排序 `sortable`

<Badge text="WIP" type="danger" />

## 表头分组 `header-group`

<Badge text="WIP" type="danger" />

## 拖放改变列宽 `resize`

<Badge text="WIP" type="danger" />


## 上下文菜单 `contextmenu`

<Badge text="WIP" type="danger" />

## 快捷键 `hotkey`

<Badge text="WIP" type="danger" />


## 鼠标移动事件支持 `mousemove`

<Badge text="WIP" type="danger" />

## 拖放选择 `selectable`

<Badge text="WIP" type="danger" />

## 过滤 `filter`

<Badge text="WIP" type="danger" />

## 拖放移动 `moveable`

<Badge text="WIP" type="danger" />

## 数据网格 `datagrid`

<Badge text="WIP" type="danger" />

## 编辑状态 `draft`

<Badge text="WIP" type="danger" />

## 可编辑 `editable`

<Badge text="WIP" type="danger" />

## 历史记录 `history`

<Badge text="WIP" type="danger" />

## 自动滚动 `autoscroll`

<Badge text="WIP" type="danger" />
