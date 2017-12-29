# 分页器

分页器是一个使用 JavaScript 增强的分页组件，不同于传统的 [组件->分页条](#component/pager)，分页器只需要给定一些参数即可创建丰富外观的分页指示组件。

## 综合示例

为一个空的 `<ul class="pager">` 元素添加 `[data-ride="pager"]` 属性来启用分页器，通过 `data-page`、`data-rec-total`、`data-rec-per-page` 来分别指定初始状态时当前页数、总记录数和每页记录数。

<div class="example">
  <ul class="pager" data-ride="pager" data-page="2" data-rec-total="89"></ul>
</div>

```html
<ul class="pager" data-ride="pager" data-page="2" data-rec-total="89"></ul>
```

## 界面元素

分页器内置了多种类型的界面元素，只需要使用初始化选项 `elements` 指定所需的元素名称和顺序即可。

所有可用的界面元素包括：

<table class="table table-bordered" id="pagerPreviewTable">
  <thead>
    <tr>
      <th style="width: 120px">元素名称</th>
      <th style="width: 180px">说明</th>
      <th>预览和源码</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>prev</code></td>
      <td>显示上一页文字按钮</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="prev" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="prev" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>显示下一页文字按钮</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="next" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="next" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>prev_icon</code></td>
      <td>显示上一页图标按钮，可以通过 `prevIcon` 选项自定义按钮图标</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="prev_icon" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="prev_icon" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>next_icon</code></td>
      <td>显示下一页图标按钮，可以通过 `nextIcon` 选项自定义按钮图标</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="next_icon" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="next_icon" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>first</code></td>
      <td>显示第一页文字按钮</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="first" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="first" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>last</code></td>
      <td>显示最后一页文字按钮</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="last" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="last" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>first_icon</code></td>
      <td>显示上一页图标按钮，可以通过 `firstIcon` 选项自定义按钮图标</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="first_icon" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="first_icon" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>last_icon</code></td>
      <td>显示下一页图标按钮，可以通过 `lastIcon` 选项自定义按钮图标</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="last_icon" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="last_icon" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>nav</code> 或 <code>pages</code></td>
      <td>显示页码导航，可以通过 `maxNavCount` 选项自定义导航上的最多按钮数目</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="nav" data-rec-total="1000" data-max-nav-count="6"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="nav" data-rec-total="1000" data-max-nav-count="6"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>goto</code></td>
      <td>显示页面转向输入组</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="goto" data-rec-total="1000" data-max-nav-count="6"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="goto" data-rec-total="1000" data-max-nav-count="6"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>size_menu</code></td>
      <td>显示每页数目下拉菜单，下拉菜单选项可以通过 `pageSizeOptions` 选项自定义，通过 `menuDirection` 来自定义菜单弹出方向</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="size_menu" data-rec-total="1000" data-max-nav-count="6"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="size_menu" data-rec-total="1000" data-max-nav-count="6"&gt;&lt;/ul&gt;</code></td>
    </tr>
    <tr>
      <td><code>total_text</code></td>
      <td>显示总记录数目文本</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="total_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="total_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>page_text</code></td>
      <td>显示当前页码文本</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="page_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="page_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>total_page_text</code></td>
      <td>显示总页数文本</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="total_page_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="total_page_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>page_of_total_text</code></td>
      <td>显示页码和总页码文本</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="page_of_total_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="page_of_total_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>items_range_text</code></td>
      <td>显示记录序号范围文本</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="items_range_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="items_range_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>page_size_text</code></td>
      <td>显示每页记录数目文本</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="page_size_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="page_size_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>space</code> 或 <code>|</code></td>
      <td>显示一个空白间隙作为元素间的分隔</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="space" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="space" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
  </tbody>
</table>

以上所有界面元素可以自由组合使用。

### 简单按钮组合示例

<div class="example">
  <ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,nav,next_icon"></ul>
</div>

```html
<ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,nav,next_icon"></ul>
```

### 简单翻页和页码信息组合示例

<div class="example">
  <ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,page_of_total_text,next_icon"></ul>
</div>

```html
<ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,page_of_total_text,next_icon"></ul>
```

## 选项

选项用于初始化分页器。为一个空的 `<ul class="pager">` 元素添加 `[data-ride="pager"]` 属性来自动进行初始化，通过 `[data-*]` 属性的形式来指定初始化选项。

同时也可以随时进行手动初始化。

```js
// 手动进行初始化
$('#myPager').pager({
    page: 1,
    recTotal: 100
});
```

所有可用的初始化选项包括：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 140px">选项</th>
      <th style="width: 150px">名称</th>
      <th style="width: 150px">可用值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>初始状态的当前页码</td>
      <td>默认为 `1`</td>
      <td>大于等于 `1` 小于等于总页数的整数，输入其他内容将自动转换为符合范围的整数。</td>
    </tr>
    <tr>
      <td><code>recTotal</code></td>
      <td>总记录数目</td>
      <td>默认为 `0`</td>
      <td>大于等于 `0` 的整数。</td>
    </tr>
    <tr>
      <td><code>recPerPage</code></td>
      <td>每页记录数</td>
      <td>默认为 `10`</td>
      <td>大于等于 `1` 的整数。</td>
    </tr>
    <tr>
      <td><code>elements</code></td>
      <td>界面元素排列定义</td>
      <td>默认为 ` ['first_icon', 'prev_icon', 'pages', 'next_icon', 'last_icon', 'goto', 'size_menu', '|', 'items_range_text', 'total_text', 'page_of_total_text']`</td>
      <td>允许使用字符串数组或者逗号分割的字符串来指定元素名称排列定义，元素名称及对应外观参见上文“界面元素”内容。</td>
    </tr>
    <tr>
      <td><code>elementCreator</code></td>
      <td>元素创建器</td>
      <td>默认为 `null`</td>
      <td>可以设置一个函数或者一个对象，具体用法参见下文“自定义”内容。</td>
    </tr>
    <tr>
      <td><code>maxNavCount</code></td>
      <td>页码导航最大条目数目</td>
      <td>默认为 `10`</td>
      <td>大于等于 `1` 的整数。</td>
    </tr>
    <tr>
      <td><code>prevIcon</code></td>
      <td>上一页图标按钮使用的图标</td>
      <td>默认为 `icon-double-angle-left`</td>
      <td>可以使用 [控件->图标](#control/icon) 中的图标。</td>
    </tr>
    <tr>
      <td><code>nextIcon</code></td>
      <td>上一页图标按钮使用的图标</td>
      <td>默认为 `icon-double-angle-right`</td>
      <td>可以使用 [控件->图标](#control/icon) 中的图标。</td>
    </tr>
    <tr>
      <td><code>firstIcon</code></td>
      <td>第一页图标按钮使用的图标</td>
      <td>默认为 `icon-step-backward`</td>
      <td>可以使用 [控件->图标](#control/icon) 中的图标。</td>
    </tr>
    <tr>
      <td><code>lastIcon</code></td>
      <td>最后一页图标按钮使用的图标</td>
      <td>默认为 `icon-step-forward`</td>
      <td>可以使用 [控件->图标](#control/icon) 中的图标。</td>
    </tr>
    <tr>
      <td><code>menuDirection</code></td>
      <td>每页数目选择菜单方向</td>
      <td>默认为 `'dropdown'`</td>
      <td>
        <ul>
          <li>`dropdown`：菜单向下弹出；</li>
          <li>`dropup`：菜单向上弹出；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>pageSizeOptions</code></td>
      <td>每页数目菜单选项</td>
      <td>默认为 `[10, 20, 30, 50, 100]`</td>
      <td>使用一个整数数组来指定允许用户可以选择的每页数目。</td>
    </tr>
    <tr>
      <td><code>lang</code></td>
      <td>当前界面语言</td>
      <td>默认为 `'zh_cn'`</td>
      <td>
        <p>所以可用的选项包括：</p>
        <ul>
          <li>`zh_cn`：使用中文简体界面；</li>
          <li>`zh_tw`：使用中文繁体界面；</li>
          <li>`en`：使用英文界面；</li>
          <li>
            <p>或者指定一个对象来自定义语言文本，例如：</p>
            <pre><code>{
    prev: '上一页',
    next: '下一页',
    first: '第一页',
    last: '最后一页',
    goto: '跳转',
    pageOf: '第 <strong>{page}</strong> 页',
    totalPage: '共 <strong>{totalPage}</strong> 页',
    totalCount: '共 <strong>{recTotal}</strong> 项',
    pageSize: '每页 <strong>{recPerPage}</strong> 项',
    itemsRange: '第 <strong>{start}</strong> ~ <strong>{end}</strong> 项',
    pageOfTotal: '第 <strong>{page}</strong>/<strong>{totalPage}</strong> 页'
}</code></pre>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>onPageChange</code></td>
      <td>当页码变更时的回调函数</td>
      <td>默认为 `null`</td>
      <td>具体用法参见下文“监听页码变更”内容。</td>
    </tr>
    <tr>
      <td><code>onRender</code></td>
      <td>当分页器界面更新并渲染完毕时调用</td>
      <td>默认为 `null`</td>
      <td>该事件回调函数包含一个参数 `staet`，为当前最新的页码状态信息对象。</td>
    </tr>
  </tbody>
</table>

## 获取页码状态信息

直接访问分页器对象实例的 `state` 属性对象即可。该对象包含如下属性：

* `page`：当前页码；
* `recPerPage`：每页记录数目；
* `recTotal`：记录总数；
* `totalPage`：总页数；
* `pageRecCount`：当前页记录数；
* `skip`：已略过的记录数目；
* `start`：当前页第一条记录序号；
* `end`：当前页最后一条记录序号；
* `prev`：上一页页码，如果没有上一页则此属性值为 `0`；
* `next`：下一页页码，如果没有下一页则此属性值为 `0`。

下面以获取当前页记录数目为例：

```js
// 获取分页器实例对象
var myPager = $('#myPager').data('zui.pager');

// 获取页码状态信息对象
var pageState = myPager.state;

// 打印当前页记录数目
console.log('当前页记录数目为', pageState.pageRecCount);
```

## 监听页码变更

使用 `onPageChange` 事件可以监听页码状态变更事件。该事件回调函数参数定义如下：

* `state`: 新的页码状态对象；
* `oldState`: 变更之前的页码状态对象。

通过初始化选项监听：

```
$('#myPager').pager({
    onPageChange: function(state, oldState) {
        if (state.page !== oldState.page) {
            console.log('页码从', oldState.page, '变更为', state.page);
        }
    }
});
```

通过 jQuery 事件绑定监听：

```
$('#myPager').on('onPageChange', function(e, state, oldState) {
    if (state.page !== oldState.page) {
        console.log('页码从', oldState.page, '变更为', state.page);
    }
});
```

## 自定义

通过使用 `elementCreator` 选项指定一个元素构造器用于创建自定义分页器界面组件元素。

`elementCreator` 可以指定一个回调函数用于动态创建界面元素。此回调函数 `this` 指向分页器实例对象本身，参数定义如下：

* `element`: 当前要创建的界面元素名称，例如 `'page_text'`；
* `$pager`: 分页器根节点元素，可以通过调用  `$pager.append(elementContent)` 来插入内容；
* `state`: 当前分页器页码信息对象。

在元素构造函数内返回 `false` 可以继续使用默认的构造方式。

<div class="example">
  <ul id="myCustomPagerExample" class="pager" data-page="2" data-rec-total="89" data-elements="red_page_button,total_page_text"></ul>
</div>

```html
<ul id="myCustomPagerExample" class="pager" data-page="2" data-rec-total="89" data-elements="red_page_button,total_page_text"></ul>
```

```js
$('#myCustomPagerExample').pager({
    elementCreator: function(element, $pager, state) {
        if (element === 'red_page_button') {
            return $('<button class="btn btn-danger" type="button">' + state.page + '</button>');
        }
        return false;
    }
});
```

`elementCreator` 还可以指定为一个对象，对象的每个键名对应一个需要自定义的界面元素名称，键值为对应的元素构造器函数。

例如以上的形式使用对象格式则可以使用如下的代码实现：

```js
$('#myPageExample').page({
    elementCreator: {
        red_page_button: function(element, $pager, state) {
            return $('<button class="btn btn-danger" type="button">' + state.page + '</button>');
        }
    }
})
```

## 动态更新

除了用户点击或操作界面元素可以更改页码状态，还可以通过分页器的实例方法 `set(page, recTotal, recPerPage)` 在程序中手动更新界面元素。

该方法各参数定义如下：

* `page`: 设置新的页码，如果不更改当前页码，可以传递 `null` 作为参数的值；
* `recTotal`: 设置新记录总数，如果不更改记录总数，可以传递 `null` 作为参数的值；
* `recPerPage`: 设置新的每页记录数目，如果不更改每页记录数目，可以传递 `null` 作为参数的值；

```js
// 获取分页器实例对象
var myPager = $('#myPager').data('zui.pager');

// 设置当前页码为 2
myPager.set(2);

// 设置当前页码为 3，并设置每页记录数目为 20
myPager.set(3, null, 20);

// 设置当前页码为 4，并同时设置记录总数为 100， 每页记录数目为 30
myPager.set(4, 100, 30);
```

改方法还有一种简便形式为 `set(newState)`，参数 `newState` 为一个对象，可以在对象中指定需要设置的属性值。

```js
// 获取分页器实例对象
var myPager = $('#myPager').data('zui.pager');

// 设置当前页码为 4，并同时设置记录总数为 100， 每页记录数目为 30
myPager.set({
    page: 4,
    recTotal: 100,
    recPerPage: 30
});
```

<style>
.table .pager {margin: 0;}
#pagerPreviewTable td {vertical-align: middle;}
</style>
<script>
function afterPageLoad() {
    $('#pageBody [data-ride="pager"]').pager().on('onPageChange', function(e, state, oldState) {
    if (state.page !== oldState.page) {
        console.log('页码从', oldState.page, '变更为', state.page);
    }
});;

    $('#myCustomPagerExample').pager({
        elementCreator: function(element, $pager, state) {
            if (element === 'red_page_button') {
                return $('<button class="btn btn-danger" type="button">' + state.page + '</button>');
            }
            return false;
        }
    });
}
</script>
