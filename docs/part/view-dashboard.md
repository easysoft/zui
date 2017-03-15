section: view
id: dashboard
description: 支持拖放调整位置的面板网格
icon: icon-th-large
filter: yibiaopan ybp panel mianban mb
---

# 仪表盘

仪表盘提供了一种灵活的方式来通过多个面板组（`.panel`）并配合栅格来展现内容的方式。

<div class="alert alert-warning">
  <h4>兼容性提示</h4>
  <p>仪表盘视图在触摸屏上无法完成拖拽排序功能。</p>
</div>

## 使用示例

<example style="padding-bottom: 0">
  <div id="dashboard" class="dashboard dashboard-draggable" data-height="300">
    <section class="row">
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="1">
          <div class="panel-heading">
            <i class="icon icon-list"></i>
            <span class="title">面板标题</span>
          </div>
          <div class="panel-body">
            <p>面板内容。</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="2">
          <div class="panel-heading">
            <i class="icon icon-list"></i>
            <span class="title">包含列表组</span>
          </div>
          <div class="panel-body no-padding">
            <div class="list-group">
              <a href="" class="list-group-item">列表组项目1</a>
              <a href="" class="list-group-item">列表组项目2</a>
              <a href="" class="list-group-item">列表组项目3</a>
              <a href="" class="list-group-item">列表组项目4</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="3">
          <div class="panel-heading">
            <i class="icon icon-table"></i>
            <span class="title">包含表格</span>
          </div>
          <div class="panel-body no-padding">
           <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>名称</th>
                <th>积分</th>
                <th>排名</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1526</td>
                <td>小马虎</td>
                <td>1056</td>
                <td class="text-red"><i class="icon icon-double-angle-up"></i> 1 </td>
              </tr>
              <tr>
                <td>1001</td>
                <td>勇敢的小鸭</td>
                <td>999</td>
                <td class="text-red"><i class="icon icon-double-angle-up"></i> 12 </td>
              </tr>
              <tr>
                <td>1045</td>
                <td>鸡大爷</td>
                <td>998</td>
                <td class="text-green"><i class="icon icon-double-angle-up"></i> 23 </td>
              </tr>
              <tr>
                <td>1025</td>
                <td>猪无畏</td>
                <td>860</td>
                <td class="text-green"><i class="icon icon-double-angle-down"></i> 25 </td>
              </tr>
              <tr>
                <td>1102</td>
                <td>糊涂虫</td>
                <td>749</td>
                <td class="text-red"><i class="icon icon-double-angle-up"></i> 30 </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel" data-id="4">
          <div class="panel-heading">
            <i class="icon icon-bolt"></i>
            <span class="title">包含操作按钮</span>
            <div class="panel-actions">
              <a href="###" data-toggle="tooltip" title="编辑"><i class="icon-pencil"></i></a>
              <button type="button" class="btn" data-toggle="tooltip" title="收藏"><i class="icon-heart-empty"></i></button>
              <div class="dropdown" data-toggle="tooltip" title="更多操作">
                <button class="btn" data-toggle="dropdown" type="button"><i class="icon icon-ellipsis-v"></i></button>
                <ul class="dropdown-menu pull-right">
                  <li><a href="###"><i class="icon icon-ok"></i> 确认</a></li>
                  <li><a href="###"><i class="icon icon-thumbs-o-up"></i> 自定义操作</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel-body">
            <p>在面板头部（<code>.panel-heading</code>）包含链接和按钮来自定义操作。</p>
          </div>
        </div>
      </div>
      <div class="col-md-6" >
        <div class="panel" data-id="5" data-url="docs/partial/remote-panel.html">
          <div class="panel-heading">
            <i class="icon icon-globe"></i>
            <span class="title">加载远程内容</span>
            <div class="panel-actions">
              <button type="button" class="btn refresh-panel" data-toggle="tooltip" title="重新从远程获取内容"><i class="icon-refresh"></i></button>
            </div>
          </div>
          <div class="panel-body">等待加载远程内容。</div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="6">
          <div class="panel-heading">
            <div class="title">可移除的面板</div>
            <div class="panel-actions">
              <button type="button" class="btn remove-panel" data-toggle="tooltip" title="移除面板"><i class="icon-remove"></i></button>
            </div>
          </div>
          <div class="panel-body">
            <p>点击顶部右侧的 <i class="icon icon-remove"></i> 按钮来移除该面板。</p>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-sm-6">
        <div class="panel panel-loading" data-id="7">
          <div class="panel-heading"><code>.panel-loading</code></div>
          <div class="panel-body">
            <p>为 <code>.panel</code> 添加 <code>.panel-loading</code> 类即可实现正在加载的外观。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</example>

```html
<div id="dashboard" class="dashboard dashboard-draggable" data-height="300">
  <section class="row">
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="1">
        <div class="panel-heading">
          <i class="icon icon-list"></i>
          <span class="title">面板标题</span>
        </div>
        <div class="panel-body">
          <p>面板内容。</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="2">
        <div class="panel-heading">
          <i class="icon icon-list"></i>
          <span class="title">包含列表组</span>
        </div>
        <div class="panel-body no-padding">
          <div class="list-group">
            ...
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="3">
        <div class="panel-heading">
          <i class="icon icon-table"></i>
          <span class="title">包含表格</span>
        </div>
        <div class="panel-body no-padding">
          <table class="table">
            ...
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel" data-id="4">
        <div class="panel-heading">
          <i class="icon icon-bolt"></i>
          <span class="title">包含操作按钮</span>
          <div class="panel-actions">
            <a href="###" data-toggle="tooltip" title="编辑"><i class="icon-pencil"></i></a>
            <button type="button" class="btn" data-toggle="tooltip" title="收藏"><i class="icon-heart-empty"></i></button>
            <div class="dropdown" data-toggle="tooltip" title="更多操作">
              <button class="btn" data-toggle="dropdown" type="button"><i class="icon icon-ellipsis-v"></i></button>
              <ul class="dropdown-menu pull-right">
                <li><a href="###"><i class="icon icon-ok"></i> 确认</a></li>
                <li><a href="###"><i class="icon icon-thumbs-o-up"></i> 自定义操作</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <p>在面板头部（<code>.panel-heading</code>）包含链接和按钮来自定义操作。</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel" data-id="5" data-url="docs/partial/remote-panel.html">
        <div class="panel-heading">
          <i class="icon icon-globe"></i>
          <span class="title">加载远程内容</span>
          <div class="panel-actions">
            <button type="button" class="btn refresh-panel" data-toggle="tooltip" title="重新从远程获取内容"><i class="icon-refresh"></i></button>
          </div>
        </div>
        <div class="panel-body">等待加载远程内容。</div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="6">
        <div class="panel-heading">
          <div class="title">可移除的面板</div>
          <div class="panel-actions">
            <button type="button" class="btn remove-panel" data-toggle="tooltip" title="移除面板"><i class="icon-remove"></i></button>
          </div>
        </div>
        <div class="panel-body">
          <p>点击顶部右侧的 <i class="icon icon-remove"></i> 按钮来移除该面板。</p>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-sm-6">
      <div class="panel panel-loading" data-id="6">
        <div class="panel-heading"><code>.panel-loading</code></div>
        <div class="panel-body">
          <p>为 <code>.panel</code> 添加 <code>.panel-loading</code> 类即可实现正在加载的外观。</p>
        </div>
      </div>
    </div>
  </section>
</div>
```

```js
$('#dashboard').dashboard({draggable: true});
```

## 选项

在进行初始化时允许传入一个对象参数或者使用 `[data-*]` 属性作为初始化选项。可以使用的选项如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>选项</th>
      <th>名称</th>
      <th>可选值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`height`</td>
      <td>面板高度</td>
      <td>默认 `360`</td>
      <td></td>
    </tr>
    <tr>
      <td>`sensitive`</td>
      <td>是否启用灵敏判断</td>
      <td>`false`，`true`（默认）</td>
      <td>当设置为 `true` 时，在拖动面板时，即使鼠标没有移动可供放置的另一个面板区域内，如果此时被移动的面板影子元素已经与可供放置的一个面板有重合区域也会判断为可以放置在此面板区域内（执行重新排序操作）。</td>
    </tr>
    <tr>
      <td>`draggable`</td>
      <td>是否可以拖拽排序</td>
      <td>`false`，`true`（默认）</td>
      <td>如果设定为 `true`，则用户可以拖拽面板头部（`.panel-heading`）来重新排列面板。</td>
    </tr>
    <tr>
      <td>`resizable`</td>
      <td>是否可以更改栅格大小</td>
      <td>`false`，`true`（默认）</td>
      <td>如果设定为 `true`，则用户可以拖拽面板右侧边缘来动态更改栅格大小（决定面板宽度）。</td>
    </tr>
    <tr>
      <td>`resizeMessage`</td>
      <td>显示大小变更消息</td>
      <td>`false`，`true`（默认）</td>
      <td>如果设定为 `true`，则在用户拖拽更改栅格大小时显示一个漂浮消息来指示当前栅格大小。</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>初始化面板</td>
      <td>对象数组</td>
      <td>指定一个对象数组用来在初始化时生成栅格和面板。</td>
    </tr>
    <tr>
      <td>`onlyRefreshBody`</td>
      <td>远程更新方式</td>
      <td>`true`（默认）、`false`</td>
      <td>如果设置为 `true`，则远程内容仅仅用于更新 `.panel-body` 元素，否则会更新 `.panel`。</td>
    </tr>
    <tr>
      <td>`afterPanelRemoved`</td>
      <td>面板被移除时的回调函数</td>
      <td>函数</td>
      <td>当用户点击 `.panel-actions` 内的 `.remove-panel` 元素时会移除面板并调用此回调函数。</td>
    </tr>
    <tr>
      <td>`panelRemovingTip`</td>
      <td>移除面板前的确认消息</td>
      <td>`false`（默认）或用于格式化文本的字符串</td>
      <td>如果设置为一个字符串，则会在移除面板前弹出以此字符串作为消息的确认对话框，在字符串内包含格式化参数 `'{0}'` 来显示当前被移除的面板标题。</td>
    </tr>
    <tr>
      <td>`afterOrdered`</td>
      <td>重新排序面板后的回调函数</td>
      <td>函数</td>
      <td></td>
    </tr>
    <tr>
      <td>`onResize`</td>
      <td>更改栅格大小时的回调函数</td>
      <td>函数</td>
      <td></td>
    </tr>
    <tr>
      <td>`afterRefresh`</td>
      <td>远程加载完成后的回调函数</td>
      <td>函数</td>
      <td></td>
    </tr>
  </tbody>
</table>

使用选项：

```js
// 定义选项对象
var options = {
    height: 400,
    afterOrdered: function(e) {
        console.log('排序完成：', e);
    },
    // 设置更多选项...
};

// 初始化时传入选项参数
$('#dashboard').dashboard(options)
```

## 结构

### 使用面板

面板（`.panel`）是仪表盘内用来展示内容的基本容器元素。

面板中的 `.panel-heading` 和 `.panel-body` 都是必须的。

默认情况下 `.panel-body` 包含内边距，如果需要移除外边距可以为 `.panel-body` 添加 `.no-padding` 类，这对于在 `.panel-body` 内直接包含 `<table>`、 `<ul>` 或 `.list-group` 等是必要的。

应该为每个面板定义 `[data-id]` 属性，其值为一个全局唯一的字符串，用来跟踪区块位置及其他操作。如果没有定义此属性则会在仪表盘初始化时生成随机的字符串作为标识。

### 使用栅格

表盘使用栅格系统来决定面板大小和排列方式。

在 `.dashboard` 内直接包含 `.row`，在 `.row` 内使用栅格修饰类 `.col-*` 作为面板容器。

所有栅格修饰类都是有效的，并且完全实现响应式设计。

### HTML 结构

通过使用面板和栅格，你还需要配合特定类和结构来组织内容，一般形式如下：

```html
<div class="dashboard">
  <div class="row">
    <!-- 使用栅格 -->
    <div class="col-md-6">
      <!-- 面板，并为面板定义 data-id 属性 -->
      <div class="panel" data-id="panel1">
        <!-- 面板头部 -->
        <div class="panel-heading">
          <!-- 面板图标 -->
          <i class="icon"></i>
          <!-- 面板标题 -->
          <span class="title">标题</span>
          <!-- 面板操作按钮 -->
          <div class="panel-actions">
            <!-- 移除面板按钮 -->
            <a href="" class="remove-panel"><i class="icon-remove"></i></a>
            ...
          </div>
        </div>
        <div class="panel-body">
          <!-- 此处包含面板内容 -->
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel" data-id="panel2">...</div>
    </div>
    ...
  </div>
</div>
```

### 使用初始化数据

在初始化仪表盘，指定 `data` 选项来动态生成仪表盘所需的 HTML 结构。`data` 选项为一个包含面板配置对象的数组。

```html
<div class="dashboard" id="myDashboard"></div>
```

```js
// 定义所有面板的配置对象数组
var data = [{
    id: 'panel1',   // 面板编号
    colWidth: '4',  // 栅格尺寸
    url: ''         // 设定面板远程内容更新地址
}, ...]

// 初始化
$('#myDashboard').dashboard({data: data});
```

每一个面板配置对象可用属性包括：

 - `id`：全局唯一的面板编号；
 - `colWidth`：栅格尺寸，可取值为 `1-12`；
 - `url`：设定面板远程内容更新地址；
 - `colAttrs`：设定栅格列元素的 HTML 属性，例如 `{title: ''}`；
 - `panelAttrs`：设定面板元素的 HTML 属性，例如 `{title: ''}`；
 - `content`：设定面板内 `.panel` 内所包含的 HTML 代码，也可用指定为一个函数来动态返回最终的 HTML 源码。

## 用户个性化定制

仪表盘提供了灵活的交互方式允许用户进行个性化组织面板内容，主要交互方式包括：

 - 排序：在面板头部（.panel-heading）按住鼠标不放并移动鼠标可以拖拽整个面板，将面板拖动到另一个面板所在位置可以更改面板显示的顺序；
 - 更改大小：将鼠标悬停在面板右侧边缘位置，会出现面板大小更改提示图标，此时点按住边缘区域，并在水平方向上拖动鼠标，可以更改面板显示宽度（实际上是更改的面板所占据栅格的大小）。

拖动时会在文档中插入被拖动面板元素的**影子元素**，会跟随鼠标光标位置，用于指示当前拖动的位置。

<div class="alert alert-warning">
  <h4>需要注意</h4>
  <p>这些个性化定制选项在用户操作之后并没有存储下来，你需要在用户操作完成之后，保存这些个性化设置到服务器。</p>
</div>

### 处理个性化定制过程

通过指定选项 `afterPanelRemoved`、`afterOrdered`、`onResize` 的回调函数来保存用户的个性化定制。

### <span class="code">afterPanelRemoved</span>

`afterPanelRemoved` 回调函数在面板被移除时调用，该回调函数包含一个参数 `id`，指示当前被移除的面板 ID。

```
$('#myDashboard').dashboard{
    afterPanelRemoved: function(id) {
        console.log('编号为', id, '的面板被移除。');
    }
}
```

### <span class="code">afterOrdered</span>

`afterOrdered` 回调函数在面板被重新排列时调用，该回调函数包含一个参数 `newOrders`，指示被排序的面板顺序。

`newOrders` 参数为一个对象，其属性名称为面板变化，其值为对应面板的显示顺序。

```
$('#myDashboard').dashboard{
    afterOrdered: function(newOrders) {
        console.log('当前面板被重新排序，新的顺序为', newOrders);
    }
}
```

### <span class="code">onResize</span>

`onResize` 回调函数在面板所在栅格列大小被更改时调用，该回调函数包含一个参数 `e`，该参数拥有的属性如下：

 - `e.element`：当前被更改的栅格元素；
 - `e.id`：当前栅格包含的面板的编号；
 - `e.grid`：更改后的栅格大小；
 - `e.old`：更改之前的栅格大小；
 - `e.revert`：一个回调函数，调用此回调函数可以撤销栅格变更操作。

通过在回调函数内调用 `e.revert()` 可以撤销栅格变更操作，也可以在回调函数内返回 `false` 来实现撤销操作。

```
$('#myDashboard').dashboard{
    onResize: function(e) {
        console.log('当前面板栅格大小被更改为', e.grid);
    }
}
```

## 操作按钮

每个面板的 `.panel-heading` 内都可以直接包含一个 `.panel-actions`。在 `.panel-actions` 可以包含若干个链接或按钮，甚至是下拉菜单 `.dropdown`。

```html
<div class="panel-heading">
  ...
  <div class="panel-actions">
    <a href="###" data-toggle="tooltip" title="编辑"><i class="icon-pencil"></i></a>
    <button type="button" class="btn" data-toggle="tooltip" title="收藏"><i class="icon-heart-empty"></i></button>
    <div class="dropdown" data-toggle="tooltip" title="更多操作">
      <button class="btn" data-toggle="dropdown" type="button"><i class="icon icon-ellipsis-v"></i></button>
      <ul class="dropdown-menu pull-right">
        <li><a href="###"><i class="icon icon-ok"></i> 确认</a></li>
        <li><a href="###"><i class="icon icon-thumbs-o-up"></i> 自定义操作</a></li>
      </ul>
    </div>
  </div>
</div>
```

如果为 `.panel-actions` 内的链接（`<a>`）和按钮（`.btn`）设置特殊类，则用户点击这些按钮时会执行特殊操作。这些特殊类和操作定义如下：

 - `.remove-panel`：移除当前面板；
 - `.refresh-panel`：从远程重新加载内容。
 
<div class="alert alert-warning">
  <h4>需要注意</h4>
  <p>这些用户执行这些操作之后并没有进行持久化工作，你需要在用户操作完成之后，保存这些个性化设置到服务器。</p>
</div>

## 从远程加载

每个面板的内容（`.panel-body`）都可以实现自动以给定的地址从远程加载。只需要为 `.panel` 添加 `[data-url]` 属性，属性值为远程加载的地址。

```html
<div class="panel" data-url="path/to/panel/content">
  <div class="panel-heading">
    ...
  </div>
  <div class="panel-body">
    ...
  </div>
</div>
```

当添加了 `[data-url]` 属性之后，在仪表盘初始化之后会立即尝试从此地址获取内容并更新到 `.panel-body` 内。

如果 `.panel-actions` 包含 `.refresh-panel` 按钮，则点击此按钮也会进行更新操作。

### <span class="code">afterRefresh</span>

通过选项指定的 `afterRefresh` 回调函数来跟踪远程更新操作，该回调函数包含一个参数 `e`，该参数拥有的属性如下：

 - `e.result`：指示远程请求操作是否执行成功；
 - `e.data`：从远处获取到的用于更新面板的内容。

```
$('#myDashboard').dashboard{
    afterRefresh: function(e) {
        console.log('从远程更新的结果为', e.true);
    }
}
```

### 手动执行远程更新请求

用户除了可以通过点击 `.refresh-panel` 元素来执行远程更新请求，还可以手动调用仪表盘实例上的 `refresh()` 方法来执行远程更新。

该方法形式如下：

 - `refresh(panel)`
 - `refresh(panel, onlyRefreshBody)`

其中 `panel` 参数使用 CSS 选择器指定为需要进行更新的面板（`.panel`）对象；`onlyRefreshBody` 参数为布尔值，指定是否仅仅使用远程内容来更新 `.panel-body` 元素。

```js
// 获取仪表盘实例
var myDashboard = $('#myDashboard').data('zui.dashboard');

// 执行远程更新请求
myDashboard.refresh('#myPanel1');
```

<script>
function onPageLoad() {
    if($.fn.dashboard) $('#dashboard').dashboard({
        shadowType: 'normal', 
        afterOrdered: function(orders) {
            console.log(orders);
        }
    });
}
</script>
