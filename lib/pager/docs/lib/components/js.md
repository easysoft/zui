# 分页生成器

当数据量过多时，使用分页生成器动态分解数据。

## 基本用法

<Example>
  <div id="pagerExample1"></div>
</Example>

```html
<div id="pagerExample1"></div>

<script>
    new zui.Pager('#pagerExample1', {
        items: [
            {type: 'info', text: '共 {recTotal} 项'},
            {type: 'size-menu', text: '每页 {recPerPage} 项', dropdown: {placement: 'top'}},
            {type: 'link', page: 'first', icon: 'icon-double-angle-left', hint: '第一页'},
            {type: 'link', page: 'prev', icon: 'icon-angle-left', hint: '上一页'},
            {type: 'info', text: '{page}/{pageTotal}'},
            {type: 'link', page: 'next', icon: 'icon-angle-right', hint: '下一页'},
            {type: 'link', page: 'last', icon: 'icon-double-angle-right', hint: '最后一页'},
        ],
        page: 2,
        recTotal: 101,
        recPerPage: 10,
        linkCreator: '#?page={page}&recPerPage={recPerPage}',
        onClickItem: (info) => {
            console.log('> pagerExample1.onClickItem', info);
        },
    });
</script>
```

## 引入

### 通过npm

```js
import {Pager} from 'zui/pager';
const contextMenu = new Pager(element, options);
```

### 通过全局对象

```js
const pager = new zui.Pager(element, options);
```

### 使用React 组件

```js
import {render} from 'react';
import {Pager} from 'zui/pager/react';

render(element, <Pager {...options} />);
```

### 使用Jquery 扩展

```js
$(element).pager(options);

const pager = $(element).data('zui.pager');
```

## 选项

### `linkCreator`

导航链接生成器，点击页码时进行页面地址更换。

* 类型：<code>string | ((info: [PagerInfo](#pagerinfo)) => string)</code>
* 必选：否

### `page`

初始状态的当前页码。

* 类型：`number`。

### `recTotal`

总记录数目。

* 类型：`number`。

### `recPerPage`

每页记录数。

* 类型：`number`。

### `pageTotal`

总页数。

* 类型：`number`。

### `items`

定义分页项的列表，可以通过一个函数动态返回分页组件。

基于 [工具栏](/lib/components/toolbar/js.html#选项) 选项 和 自定义 [PagerItemOptions](#pageritemoptions) 选项。


## API

### `PagerInfo`

**参数：**

#### `page`

* 含义：初始状态的当前页码；
* 类型：`number`。

#### `recTotal`

* 含义：总记录数目；
* 类型：`number`。

#### `recPerPage`

* 含义：每页记录数；
* 类型：`number`。

#### `pageTotal`

* 含义：总页数；
* 类型：`number`。

### `PagerItemOptions`

**参数：**

#### `type`

* 含义：子项类型；
* 类型：`string`；
* 可选项：`info | link | nav | size-menu`。

#### `page`

* 含义：页码名称；
* 类型：`'first' | 'last' | 'prev' | 'next' | 'current' | number`。

#### `text`

* 含义：指定类型为 **info | size-menu** 的显示文案；
* 类型：<code>string | ((info: [PagerInfo](#pagerinfo)) => string)</code>。

#### `count`

* 含义：指定类型为 **nav** 的数量；
* 类型：`number`。

    
#### `format`

* 含义：指定类型为 **link | nav** 的显示格式；
* 类型：<code>string | ((info: [PagerInfo](#pagerinfo)) => string)</code>。

#### `dropdown`

* 含义：指定下拉菜单的属性；
* 类型：`object`。

#### `items`

* 含义：指定类型为 **size-menu** 下拉菜单里的选项；
* 类型：`number[]`。




<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Pager('#pagerExample1', {
                items: [
                    {type: 'info', text: '共 {recTotal} 项'},
                    {type: 'size-menu', text: '每页 {recPerPage} 项', dropdown: {placement: 'top'}},
                    {type: 'link', page: 'first', icon: 'icon-double-angle-left', hint: '第一页'},
                    {type: 'link', page: 'prev', icon: 'icon-angle-left', hint: '上一页'},
                    {type: 'info', text: '{page}/{pageTotal}'},
                    {type: 'link', page: 'next', icon: 'icon-angle-right', hint: '下一页'},
                    {type: 'link', page: 'last', icon: 'icon-double-angle-right', hint: '最后一页'},
                ],
                page: 2,
                recTotal: 101,
                recPerPage: 10,
                linkCreator: '#?page={page}&recPerPage={recPerPage}',
                onClickItem: (info) => {
                    console.log('> pagerExample1.onClickItem', info);
                },
            });
        })
    },
}
</script>