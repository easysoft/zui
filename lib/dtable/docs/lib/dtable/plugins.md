# 数据表格插件

## 富格式插件 `rich`

<Badge text="内置插件"/>

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

<Badge text="内置插件"/>

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

<Badge text="内置插件"/>

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

## 列鼠标悬停效果 `col-hover`

<Badge text="内置插件"/>

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
