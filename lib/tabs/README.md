# 标签页

## 使用方法

给链接添加 `href` 或 `data-target` 属性，属性值指向所切换的标签页内容元素的 `id` 。并添加 `data-toggle="tab"` 属性。

```html:example: gap-3
<ul class="nav nav-tabs" id="tabs">
  <li class="nav-item"><a id="tab1" class="active" data-toggle="tab" href="#tabContent1">标签1</a></li>
  <li class="nav-item"><a id="tab2" data-toggle="tab" href="#tabContent2">标签2</a></li>
  <li class="nav-item"><a id="tab3" data-toggle="tab" href="#tabContent3">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="tabContent1">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane" id="tabContent2">
    <p>我是标签2。</p>
  </div>
  <div class="tab-pane" id="tabContent3">
    <p>我是标签3。</p>
  </div>
</div>
```

给链接设置 `data-target=*` 属性，属性值指向所切换的标签页内容元素的 `id`  。

```html:example: gap-3
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="active" data-toggle="tab"  data-target="#tab2Content1">标签1</a></li>
  <li class="nav-item"><a  data-toggle="tab" data-target="#tab2Content2">标签2</a></li>
  <li class="nav-item"><a  data-toggle="tab" data-target="#tab2Content3">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="tab2Content1">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane" id="tab2Content2">
    <p>我是标签2。</p>
  </div>
  <div class="tab-pane" id="tab2Content3">
    <p>我是标签3。</p>
  </div>
</div>
```

通过 `zui-toggle="tab"` 来设置标签页的切换。

```html:example: gap-3
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="active" zui-toggle="tab"  zui-toggle-tab="{target: '#tab5Content1'}">标签1</a></li>
  <li class="nav-item"><a  zui-toggle="tab" zui-toggle-tab="{target: '#tab5Content2'}">标签2</a></li>
  <li class="nav-item"><a  zui-toggle="tab" zui-toggle-tab="{target: '#tab5Content3'}">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="tab5Content1">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane" id="tab5Content2">
    <p>我是标签2。</p>
  </div>
  <div class="tab-pane" id="tab5Content3">
    <p>我是标签3。</p>
  </div>
</div>
```

## 动画效果

```html:example: gap-3
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="active" data-toggle="tab" href="#tab3Content1">标签1</a></li>
  <li class="nav-item"><a data-toggle="tab" href="#tab3Content2">标签2</a></li>
  <li class="nav-item"><a data-toggle="tab" href="#tab3Content3">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane duration-500 fade active in" id="tab3Content1">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane duration-500 fade" id="tab3Content2">
    <p>我是标签2。</p>
  </div>
  <div class="tab-pane duration-500 fade" id="tab3Content3">
    <p>我是标签3。</p>
  </div>
</div>
```

## 垂直标签页

```html:example: gap-3
<div class="flex">
  <ul class="nav nav-tabs nav-stacked">
    <li class="nav-item"><a class="active" data-toggle="tab" href="#tab4Content1">标签1</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tab4Content2">标签2</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tab4Content3">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane fade duration-1000 active in" id="tab4Content1">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane fade duration-1000" id="tab4Content2">
      <p>我是标签2。</p>
    </div>
    <div class="tab-pane fade duration-1000" id="tab4Content3">
      <p>我是标签3。</p>
    </div>
  </div>
</div>
```
## 方法

通过 `Tabs.ensure()` 获取或创建导航元素上的实例，再调用 `active()` 显示指定标签页。使用构建工具时，可导入 `@zui/tabs`。下面的代码使用“使用方法”中的第一个示例，在示例 DOM 加载后运行：

```js
import {Tabs} from '@zui/tabs';

const tabs = Tabs.ensure('#tabs');
tabs.active('#tab2');
```

`active(selector)` 接收标签链接的选择器或元素，例如 `#tab2`，内容区域由该链接的 `href`、`data-target` 或 `zui-toggle-tab` 中的 `target` 决定。调用 `active()` 时会使用当前激活的标签；没有激活标签时使用第一个标签。目标内容不存在时保留当前状态。

使用 `<script>` 引入 ZUI 时，可将 `Tabs.ensure('#tabs')` 替换为 `zui.Tabs.ensure('#tabs')`，无需 `import`。

## 事件

成功激活标签页时，依次触发以下事件。使用实例的 `on()` 方法监听时，直接使用事件名：

* `show`：标签及内容区域已添加 `active` 类时触发。
* `shown`：约 10 毫秒后，内容区域添加 `in` 类时触发。设置了淡入效果时，此时开始 CSS 过渡，并不表示动画已经结束。

实例事件由导航元素触发，回调的第二个参数是 `[instance, name]`：`instance` 为当前 `Tabs` 实例，`name` 优先取标签链接的 `data-name`，未设置时使用解析出的内容选择器，如 `#tabContent2`。内容元素也会触发同名事件；用 Cash 直接监听内容元素时，回调的第二个参数是 `[name]`。

以下代码同样使用第一个示例，先绑定事件，再切换到标签 2。随后点击标签时也会输出事件名和标签标识：

```js
import {Tabs} from '@zui/tabs';

const tabs = Tabs.ensure('#tabs');
tabs.on('show shown', (event, [, name]) => {
    console.log(event.type, name);
});
tabs.active('#tab2');
```

快速连续切换时，上一次尚未触发的 `shown` 会被取消。需要移除这两个事件的实例监听时，可调用 `tabs.off('show shown')`。
