# 数据表格扩展

## 按列排序 `sort-type`

设置表格支持按列进行排序，在特定列上通过 `sortType` 属性启用列排序，列头将根据排序类型显示为链接，用户点击后可以更新表格。该扩展为内置扩展，无需手动引入即可使用。

### 用法

#### 指定列的排序状态

通过 `sortType` 属性设置列排序类型，支持以下值：

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
        name: 'name',
        title: 'actions',
        sortType: false  // 该列不支持排序
    }
];
```

#### 指定列排序链接

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
    sortLink?: string | ((this: DTableSortType, col: ColInfo, sortType: ColSortType) => string);

    /* 列排序链接元素上的其他属性，可以指定为函数动态生成 */
    sortAttrs?: JSX.HTMLAttributes | ((this: DTableSortType, col: ColInfo, sortType: ColSortType) => JSX.HTMLAttributes);
}
```

#### 表格初始化选项

```ts
interface PluginDTableOptions {
    /* 列排序链接模版或生成函数 */
    sortLink?: string | ((this: DTableSortType, col: ColInfo, sortType: ColSortType) => string);
}
```
