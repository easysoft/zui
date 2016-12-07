section: view
id: tree
description: 体现层级关系的树形菜单
icon: icon-th-list
filter: shuxingcaidan sxcd shuxcd
---

# 树形菜单

<style>
.nav-examples > li > a > code {display: none}
.nav-examples > li.active > a > code {display: inline;}
</style>

树形菜单提供一种展示层级关系（例如文件系统目录）菜单的视图。

## 综合示例

下方展示了一个树形菜单，当一个链接包含一个子菜单时，通过点击链接左侧的图标可以展开内部子菜单。子菜单中的链接也可以包含另一个子菜单。

要构建一个树形菜单，只需要按层级嵌套 `<ul>`，并为顶层节点添加 `[data-ride="tree"]` 属性。

<div class="example">
  <ul id="treeExample" class="tree" data-ride="tree" data-initial-state="preserve">
    <li>
      <a href="#">水果</a>
      <ul>
        <li><a href="#">苹果</a></li>
        <li>
          <a href="#">热带水果</a>
          <ul>
            <li><a href="#">香蕉</a></li>
            <li><a href="#">芒果</a></li>
            <li><a href="#">椰子</a></li>
            <li><a href="#">菠萝</a></li>
          </ul>
        </li>
        <li><a href="#">梨子</a></li>
        <li><a href="#">草莓</a></li>
        <li><a href="#">杏</a></li>
        <li><a href="#">桃子</a></li>
        <li><a href="#">梅子</a></li>
      </ul>
    </li>
    <li>
      <a href="#">蔬菜</a>
      <ul>
        <li>
          <a href="#">我的菜</a>
          <ul>
            <li><a href="#">青菜</a></li>
            <li><a href="#">娃娃菜</a></li>
            <li><a href="#">菠菜</a></li>
            <li><a href="#">甘蓝</a></li>
          </ul>
        </li>
        <li>
          <a href="#">你的瓜</a>
          <ul>
            <li><a href="#">黄瓜</a></li>
            <li><a href="#">南瓜</a></li>
            <li><a href="#">丝瓜</a></li>
            <li><a href="#">苦瓜</a></li>
            <li><a href="#">木瓜</a></li>
          </ul>
        </li>
        <li><a href="#">白蓝</a></li>
        <li><a href="#">土豆</a></li>
        <li><a href="#">茄子</a></li>
      </ul>
    </li>
    <li>
      <a href="#">甜点</a>
      <ul>
        <li><a href="#">蛋糕</a></li>
        <li><a href="#">冰淇淋</a></li>
        <li><a href="#">果冻</a></li>
      </ul>
    </li>
    <li class="open">
      <a href="#">坚果</a>
      <ul>
        <li><a href="#">瓜子</a></li>
      </ul>
    </li>
    <li>
      <a href="#">饮料</a>
      <ul>
        <li><a href="#">咖啡</a></li>
        <li><a href="#">茶</a></li>
      </ul>
    </li>
    <li><a href="#">酒水</a></li>
    <li><a href="#">粥饭</a></li>
  </ul>
</div>

```
<ul class="tree" data-ride="tree">
  <li>
    <a href="#">水果</a>
    <ul>
      <li><a href="#">苹果</a></li>
      <li>
        <a href="#">热带水果</a>
        <ul>
          ...
        </ul>
      </li>
      <li><a href="#">梨子</a></li>
      ...
    </ul>
  </li>
  <li><a href="#">粥饭</a></li>
  ...
</ul>
```

## 外观选项

### 在层级菜单之间显示连接线

`.tree-lines`

<div class="example">
  <ul class="tree tree-lines" data-ride="tree">
    <li class="open">
      <a href="#">水果</a>
      <ul>
        <li><a href="#">苹果</a></li>
        <li>
          <a href="#">热带水果</a>
          <ul>
            <li><a href="#">香蕉</a></li>
            <li><a href="#">芒果</a></li>
            <li><a href="#">椰子</a></li>
            <li><a href="#">菠萝</a></li>
          </ul>
        </li>
        <li><a href="#">梨子</a></li>
        <li><a href="#">草莓</a></li>
        <li><a href="#">杏</a></li>
        <li><a href="#">桃子</a></li>
        <li>
          <a href="#">莓</a>
          <ul>
            <li><a href="">黑莓</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">蔬菜</a>
      <ul>
        <li>
          <a href="#">我的菜</a>
          <ul>
            <li><a href="#">青菜</a></li>
            <li><a href="#">娃娃菜</a></li>
            <li><a href="#">菠菜</a></li>
            <li><a href="#">甘蓝</a></li>
          </ul>
        </li>
        <li>
          <a href="#">你的瓜</a>
          <ul>
            <li><a href="#">黄瓜</a></li>
            <li><a href="#">南瓜</a></li>
            <li><a href="#">丝瓜</a></li>
            <li><a href="#">苦瓜</a></li>
            <li><a href="#">木瓜</a></li>
          </ul>
        </li>
        <li><a href="#">白蓝</a></li>
        <li><a href="#">土豆</a></li>
        <li><a href="#">茄子</a></li>
      </ul>
    </li>
  </ul>
</div>

```
<ul class="tree tree-lines" data-ride="tree">
  ...
</ul>
```

### 使用不同的图标

#### 内置图标类型


<div class="example">
  <ul class="nav nav-tabs" id="treeIconsExampleNav" style="margin: -21px -21px 10px -21px; background-color: #fafafa">
    <li class="active"><a href="###">默认</a></li>
    <li><a href="folders">文件夹`.tree-folders`</a></li>
    <li><a href="chevrons">V形`.tree-chevrons`</a></li>
    <li><a href="angles">直角`.tree-angles`</a></li>
  </ul>
  <ul class="tree tree-lines" id="treeIconsExample" data-ride="tree">
    <li class="open">
      <a href="#">水果</a>
      <ul>
        <li><a href="#">苹果</a></li>
        <li>
          <a href="#">热带水果</a>
          <ul>
            <li><a href="#">香蕉</a></li>
            <li><a href="#">芒果</a></li>
            <li><a href="#">椰子</a></li>
            <li><a href="#">菠萝</a></li>
          </ul>
        </li>
        <li><a href="#">梨子</a></li>
        <li><a href="#">草莓</a></li>
        <li><a href="#">杏</a></li>
        <li><a href="#">桃子</a></li>
        <li><a href="#">梅子</a></li>
      </ul>
    </li>
    <li>
      <a href="#">蔬菜</a>
      <ul>
        <li>
          <a href="#">我的菜</a>
          <ul>
            <li><a href="#">青菜</a></li>
            <li><a href="#">娃娃菜</a></li>
            <li><a href="#">菠菜</a></li>
            <li><a href="#">甘蓝</a></li>
          </ul>
        </li>
        <li>
          <a href="#">你的瓜</a>
          <ul>
            <li><a href="#">黄瓜</a></li>
            <li><a href="#">南瓜</a></li>
            <li><a href="#">丝瓜</a></li>
            <li><a href="#">苦瓜</a></li>
            <li><a href="#">木瓜</a></li>
          </ul>
        </li>
        <li><a href="#">白蓝</a></li>
        <li><a href="#">土豆</a></li>
        <li><a href="#">茄子</a></li>
      </ul>
    </li>
  </ul>
</div>

```
<ul class="tree tree-lines" data-ride="tree">
  ...
</ul>
```

#### 使用CSS来自定义图标

```
.tree-custom-icons > li > .list-toggle:before {content: '\e6dd'}
.tree-custom-icons > li.open > .list-toggle:before {content: '\e6df'}
```

### 启用动画效果

`data-animate="true"`

<div class="example">
  <ul class="tree tree-lines" data-ride="tree" data-animate="true">
    <li class="open in">
      <a href="#">水果</a>
      <ul>
        <li><a href="#">苹果</a></li>
        <li>
          <a href="#">热带水果</a>
          <ul>
            <li><a href="#">香蕉</a></li>
            <li><a href="#">芒果</a></li>
            <li><a href="#">椰子</a></li>
            <li><a href="#">菠萝</a></li>
          </ul>
        </li>
        <li><a href="#">梨子</a></li>
        <li><a href="#">草莓</a></li>
        <li><a href="#">杏</a></li>
        <li><a href="#">桃子</a></li>
        <li><a href="#">梅子</a></li>
      </ul>
    </li>
    <li>
      <a href="#">蔬菜</a>
      <ul>
        <li>
          <a href="#">我的菜</a>
          <ul>
            <li><a href="#">青菜</a></li>
            <li><a href="#">娃娃菜</a></li>
            <li><a href="#">菠菜</a></li>
            <li><a href="#">甘蓝</a></li>
          </ul>
        </li>
        <li>
          <a href="#">你的瓜</a>
          <ul>
            <li><a href="#">黄瓜</a></li>
            <li><a href="#">南瓜</a></li>
            <li><a href="#">丝瓜</a></li>
            <li><a href="#">苦瓜</a></li>
            <li><a href="#">木瓜</a></li>
          </ul>
        </li>
        <li><a href="#">白蓝</a></li>
        <li><a href="#">土豆</a></li>
        <li><a href="#">茄子</a></li>
      </ul>
    </li>
  </ul>
</div>

```
<ul class="tree tree-lines" data-animate="true" data-ride="tree">
  ...
</ul>
```

## 用法

### 调用方式

提供两种方式来使用树形菜单。

*   为`ul.tree`结构添加`data-ride="tree"`属性，则会在文档加载完毕之后自动初始化树形菜单;
*   使用jQuery方法手动初始化树形菜单。

```
$('#tree').tree(options);
```

### 参数

可用参数如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th style="width: 80px">名称</th>
      <th style="width: 300px">可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`animate`</td>
      <td>动画效果</td>
      <td>*   `true` 启用动画
*   `false`（默认） 禁用动画</td>
      <td></td>
    </tr>
    <tr>
      <td>`initialState`</td>
      <td>初始状态</td>
      <td>*   `'normal'`（默认) 自动根据dom结构决定
*   `'expand'` 全部展开
*   `'collapse'` 全部折叠
*   `'preserve'` 从本地存储还原用户上次操作状态</td>
      <td>当使用`'normal'`选项时，如果一个`<li>`标签包含class`.open`且包含内部子菜单则子菜单（不包括子菜单的子菜单）在初始化之后会展开显示，其他情况下则折叠显示。</li></td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>树节点数据</td>
      <td>数组，包含所有节点对象，可选</td>
      <td>格式参见本页面 **数据加载与更新** 章节。</td>
    </tr>
    <tr>
      <td>`itemCreator`</td>
      <td>节点创建函数</td>
      <td>函数</td>
      <td>节点创建函数用法参见本页面 **数据加载与更新** 章节。</td>
    </tr>
    <tr>
      <td>`itemWrapper`</td>
      <td>节点包装器</td>
      <td>*   `false`（默认) 不启用节点包装器
*   `true` 启用默认节点包装器
*   例如 `'<div class="my-tree-node/">'`：用来创建节点包装器的 HTML 文本</div></td>
      <td>用法参见本页面 **数据加载与更新** 章节。</td>
    </tr>
  </tbody>
</table>

参数可以在手动调用`$().tree(options)`方法时传入，或者以`data-*=""`形式指定。

### 方法

#### 展开节点

方法可用形式如下：

*   **expand()**
*   **expand(params)**
*   **expand(params, disabledAnimate)**

参数定义如下：

*   `params`：一个jQuery`<li>`对象，指定需要展开的节点，当不使用此参数时则展开所有节点；
*   `disabledAnimate`：是否禁用动画，默认 `false`；

```
// 使用 tree 实例
var myTree = $('#tree').data('zui.tree');
myTree.expand(params);

// 使用 tree() 方式
$('#tree').tree('expand', params);
```

#### 折叠节点

方法可用形式如下：

*   **collapse()**
*   **collapse(params)**
*   **collapse(params, disabledAnimate)**

参数定义如下：

*   `params`：一个jQuery`<li>`对象，指定需要折叠的节点，当不使用此参数时则折叠所有节点；
*   `disabledAnimate`：是否禁用动画，默认 `false`；

```
// 使用 tree 实例
var myTree = $('#tree').data('zui.tree');
myTree.collapse(params);

// 使用 tree() 方式
$('#tree').tree('collapse', params);
```

#### 切换节点

使得节点在展开或折叠的状态间切换。

方法可用形式如下：

*   **toggle()**
*   **toggle(params)**
*   **toggle(params, disabledAnimate)**

参数定义如下：

*   `params`：一个jQuery`<li>`对象，指定需要切换的节点，当不使用此参数时则切换所有节点；
*   `disabledAnimate`：是否禁用动画，默认 `false`；

```
// 使用 tree 实例
var myTree = $('#tree').data('zui.tree');
myTree.toggle(params);

// 使用 tree() 方式
$('#tree').tree('toggle', params);
```

#### 展示节点

展开当前节点及所有子节点。

方法可用形式如下：

*   **show()**
*   **show(params)**
*   **show(params, disabledAnimate)**

参数定义如下：

*   `params`：一个jQuery`<li>`对象，指定需要展示的节点，当不使用此参数时则展示所有节点；
*   `disabledAnimate`：是否禁用动画，默认 `false`；

```
// 使用 tree 实例
var myTree = $('#tree').data('zui.tree');
myTree.show(params);

// 使用 tree() 方式
$('#tree').tree('show', params);
```

#### 添加节点

向树添加节点有两种方式：一种是通过 jQuery 方式向树中插入符合树所要求的 DOM 节点即可；另一种方式使用树实例方法 `add($element, items)` 添加节点数据，该方法的可选形式为：

*   **add($element, items)**
*   **add($element, items, expand)**
*   **add($element, items, expand, disabledAnimate)**

最后三个参数可以依次省略，参数定义如下：

*   `$element`：要插入的父节点（jQuery 实例），可以为 `<ul>` 或 `<li>`；
*   `items`：数组，要插入的节点数据；
*   `expand`，插入后是否立即展开；
*   `disabledAnimate`：插入后如果需要立即展开是否禁用动画效果。

```
// 获取 tree 实例
var myTree = $('#myTree').data('zui.tree');

// 准备插入的数据
var newItems = [{title: '新的节点'}, ...];

// 插入数据到根节点
myTree.add('#myTree', newItems);
```

#### 导出树数据

当添加了新的节点或者移除了节点之后，如果此时需要获取当前树更新后的数据，可以使用 `toData([$ul], [filter])` 方法。该方法拥有如下形式：

*   **toData()**
*   **toData($ul)**
*   **toData(filter)**
*   **toData($ul, filter)**

参数定义如下：

*   **$ul**：指定树种需要导出数据的 `<ul>` 节点。默认为树的根节点，及导出整个树的所有节点数据。
*   **filter**：指定一个回调函数用于转换数据为合适的格式。该回调函数包括两个参数：`item`，正在导出的节点数据；`$li`，正在导出的 `<li>` 节点对象；必须在此回调函数中返回一个 JavaScript 对象。

```
// 获取 tree 实例
var myTree = $('#myTree').data('zui.tree');

// 此处可以更新数结构

// 获取更新后的树数据
var myTreeData = myTree.toData(function(item, $li) {
    item._id = $li.data('id');
    return item;
});
```

### 事件

<table class="table table-bordered">
  <thead>
    <tr>
      <th>事件</th>
      <th>jquery事件名称</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`expand`</td>
      <td>`expand.zui.tree`</td>
      <td>当菜单展开之后会触发此事件</td>
    </tr>
    <tr>
      <td>`collapse`</td>
      <td>`collapse.zui.tree`</td>
      <td>当菜单被折叠之后会触发此事件</td>
    </tr>
  </tbody>
</table>

#### 监听事件

```
// 通过jQuery方法绑定事件
$('#tree').on('expand.zui.tree', function(){...});

// 通过参数指定事件回调方法
$('#tree').tree({expand: function(){...}});
```

<script>
function afterPageLoad() {
    var $nav = $('#treeIconsExampleNav'),
        $example = $('#treeIconsExample'),
        $nameInCode = $('#treeIconsNameForExample');
    $nav.on('click', 'a', function(e) {
        var $a = $(this);
        $nav.find('li.active').removeClass('active');
        $a.parent('li').addClass('active');
        var name = $a.attr('href').replace(/#/g, '');
        if(name) name = ' tree-' + name;
        $nameInCode.text(name);
        $example.attr('class', 'tree tree-lines' + name);
        e.preventDefault();
    });

    $('[data-ride=tree]').tree();
}
</script>

## 数据加载与更新

### 使用数据初始化

在初始化树形菜单时可以使用 `data` 选项来指定用户构建树的数据。这种方式允许你在恰当时机来展示树（例如从远处服务器获取数据再进行展示）。

用户初始化的数据为一个数组，每个数组中包含若干个对象来用于创建树中的节点（以下简称为节点对象）。

节点对象中可能包含的属性如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 90px">属性</th>
      <th style="width: 250px">可取的值示例</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`title`</td>
      <td>`'第一个节点'`</td>
      <td>在节点上展示的文本。</td>
    </tr>
    <tr>
      <td>`url`</td>
      <td>`'http://zui.sexy'`</td>
      <td>可选，以链接的形式显示节点，指定链接地址。</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>`'<strong>着重强调的节点</strong>'`</td>
      <td>可选，用于设置为节点 HTML 的内容，如果指定此选项，则 `title` 选项可以省略。</td>
    </tr>
    <tr>
      <td>`children`</td>
      <td>`[{title: '子节点1'}, {title: '子节点2'}, ...]`</td>
      <td>可选，以数组的形式设置该节点下的所有子节点，子节点的设置方式与初始化数据一致。这种递归结构与树本身的嵌套结构一致。</td>
    </tr>
    <tr>
      <td>`open`</td>
      <td>`true`，`false`（默认）</td>
      <td>可选，如果该节点包含子节点，是否展开当前节点。</td>
    </tr>
    <tr>
      <td>`id`</td>
      <td>默认不设置</td>
      <td>用于设置到树节点 `<li>` 上的 `[data-id]` 属性的值，如果设置此属性请确保每一个节点的值在整个树种唯一。</li></td>
    </tr>
  </tbody>
</table>

除了以上已经定义的命名属性，你仍然可以在节点数据中包含自定义的属性和数据。

以下代码演示了使用数据来初始化一个空的 `<ul class="tree">`：

```
<!-- 创建一个空的树，需要包含 .tree CLASS -->
<ul class="tree" id="myTree"></ul>
```

```
var myTreeData = [{
    title: '水果',
    url: 'http://zui.sexy',
    open: true,
    children: [
        {title: '橘子'},
        {
            title: '瓜',
            children: [
              {title: '西瓜'},
              {title: '黄瓜'}
            ]
        }
    ]
}, {
    title: '坚果',
    children: [
        {title: '向日葵'},
        {title: '瓜子'}
    ]
}, {
    title: '蔬菜'
}];

$('#myTree').tree({data: myTreeData});
```

### 动态更新数据

当树初始化之后，仍然可以使用 `reload(data)` 方法来动态更新数据。

```
// 获取 tree 实例
var myTree = $('#myTree').data('zui.tree');

// 准备新的数据
var myNewTreeData = [...];

// 更新数据
myTree.reload(myNewTreeData);
```

### 使用节点构造器

通过节点构造器可以方便的自定义节点的 DOM 内容。使用初始化选项 `itemCreator` 来定义节点构造器回调函数。节点构造器会在初始化节点数据或更新节点数据时被调用，其形式如下：

*   **function($li, item)**

参数定义如下：

*   `$li`：当前正在构造的节点实例；
*   `item`：当前用于构建的节点数据。

通过在节点构造器回调函数中直接操作节点实例来构造节点：

```
// 初始化选项中定义构造器回调函数
$('#myTree').tree({
    data: [...],
    itemCreator: function($li, item) {
        $li.append($('<a/>', {href: item.url}).text(item.title));

        // return false; // 如果要忽略当前节点，可以通过返回 false 来实现
    }
})
```

### 移除或清空节点

直接使用 jQuery 选择需要移除的节点，调用 jQuery 实例上的 `remove()` 或 `empty()` 方法。

```
// 移除其中一个节点
$('#myTree li[data-id="myTreeNodeId"]').remove();

// 清空整个树节点
$('#myTree').empty();
```
