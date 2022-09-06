# 标签页

## 基本用法

给链接添加 `href` 或 `data-target` 属性，属性值指向所切换的标签页内容元素的 `id` 。并添加 `data-toggle="tab"` 属性。

```html:example: gap-3
<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#tabContent1">标签1</a></li>
  <li><a data-toggle="tab" href="#tabContent2">标签2</a></li>
  <li><a data-toggle="tab" href="#tabContent3">标签3</a></li>
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

给链接设置 `data-tab=*` 属性，属性值指向所切换的标签页内容元素的 `id`  。

```html:example: gap-3
<ul class="nav nav-tabs">
  <li class="active"><a data-tab="#tab2Content1">标签1</a></li>
  <li><a data-tab="#tab2Content2">标签2</a></li>
  <li><a data-tab="#tab2Content3">标签3</a></li>
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

## 动画效果

```html:example: gap-3
<ul class="nav nav-tabs">
  <li class="active"><a data-tab="#tab3Content1">标签1</a></li>
  <li><a data-tab="#tab3Content2">标签2</a></li>
  <li><a data-tab="#tab3Content3">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade active in" id="tab3Content1">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane fade" id="tab3Content2">
    <p>我是标签2。</p>
  </div>
  <div class="tab-pane fade" id="tab3Content3">
    <p>我是标签3。</p>
  </div>
</div>
```

## 垂直标签页

```html:example: gap-3
<div class="flex">
  <ul class="nav nav-tabs nav-stacked">
    <li class="active"><a data-tab="#tab4Content1">标签1</a></li>
    <li><a data-tab="#tab4Content2">标签2</a></li>
    <li><a data-tab="#tab4Content3">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane fade active in" id="tab4Content1">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane fade" id="tab4Content2">
      <p>我是标签2。</p>
    </div>
    <div class="tab-pane fade" id="tab4Content3">
      <p>我是标签3。</p>
    </div>
  </div>
</div>
```
## 方法

手动显示标签页内容

[调用方法待定]

## 事件

当显示一个新的标签页时，这些事件会被触发：

* `show.zui.tab` : 当前标签页在显示时触发
* `shown.zui.tab` : 当前标签页在显示后（动画执行完毕）触发。

[调用方法待定]

