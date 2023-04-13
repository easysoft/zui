# 标签页

标签页允许通过点击一个导航或列表项目来切换显示的内容。<br />
标签页内容使用 `.tab-pane` 作为容器元素，所有供切换显示的 `.tab-pane` 放置在 `.tab-content` 容器元素内。<br />
为确保在页面显示的时候标签页能够指示正确的标签和显示正确的内容，在初始状态需要为当前选中的导航项目 `<li class="nav-item">` 元素添加 `.active` 类，并且为当前显示的标签页内容元素 `.tab-pane` 添加 `.active` 类。

## 使用方法

为导航上每个用于切换标签内容的链接添加 `href` 或 `data-target` 属性指向当前标签页内容的 `id` ，并添加 `data-toggle="tab"` 属性。

<style>
.nav-tabs > .active > a {
  color: #2b80ff;
}
</style>
<Example>
  <ul class="nav nav-tabs">
    <li class="nav-item active"><a data-toggle="tab" href="#tabContent1">标签1</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tabContent2">标签2</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tabContent3">标签3</a></li>
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
</Example>

```html
  <ul class="nav nav-tabs">
    <li class="nav-item active"><a data-toggle="tab" href="#tabContent1">标签1</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tabContent2">标签2</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tabContent3">标签3</a></li>
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

标签页一般配合导航使用。

<Example>
  <ul class="nav nav-tabs">
    <li class="nav-item active"><a data-toggle="tab" href="#tabContent4">标签1</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tabContent5">标签2</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tabContent6">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tabContent4">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane" id="tabContent5">
      <p>我是标签2。</p>
    </div>
    <div class="tab-pane" id="tabContent6">
      <p>我是标签3。</p>
    </div>
  </div>
</Example>

```html
<ul class="nav nav-tabs">
  <li class="nav-item active"><a data-toggle="tab" href="#tabContent1">标签1</a></li>
  <li class="nav-item"><a data-toggle="tab" href="#tabContent2">标签2</a></li>
  <li class="nav-item"><a data-toggle="tab" href="#tabContent3">标签3</a></li>
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

另一种快捷方法是为用于切换标签页的链接使用 `data-tab` 属性，属性值指向所切换的 `.tab-pane` 元素。这种方法不需要 `data-target` 和 `data-toggle="tab"` 属性。

<Example>
  <ul class="nav nav-tabs">
    <li class="nav-item active"><a data-tab="#tab2Content1">标签1</a></li>
    <li class="nav-item"><a data-tab="#tab2Content2">标签2</a></li>
    <li class="nav-item"><a data-tab="#tab2Content3">标签3</a></li>
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
</Example>

```html
<ul class="nav nav-tabs">
  <li class="nav-item active"><a data-tab="#tab2Content1">标签1</a></li>
  <li class="nav-item"><a data-tab="#tab2Content2">标签2</a></li>
  <li class="nav-item"><a data-tab="#tab2Content3">标签3</a></li>
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

为每个 `.tab-pane` 添加 `.fade` 类，可以使得标签内容在显示时获得渐变动画效果。在初始状态要显示的标签页内容 `.tab-pane` 不仅需要添加 `.active` 类，还需要添加 `.in` 类。

<Example>
  <ul class="nav nav-tabs">
    <li class="nav-item active"><a data-tab="#tab3Content1">标签1</a></li>
    <li class="nav-item"><a data-tab="#tab3Content2">标签2</a></li>
    <li class="nav-item"><a data-tab="#tab3Content3">标签3</a></li>
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
</Example>

```html
<ul class="nav nav-tabs">
  <li class="nav-item active"><a data-tab="#tab3Content1">标签1</a></li>
  <li class="nav-item"><a data-tab="#tab3Content2">标签2</a></li>
  <li class="nav-item"><a data-tab="#tab3Content3">标签3</a></li>
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

使用 `.nav-tabs.nav-stacked` 获得垂直排列的标签导航，使用 `flex` 布局来使得导航和标签页内容水平排列。

<Example>
  <div class="flex">
    <ul class="nav nav-tabs nav-stacked">
      <li class="nav-item active"><a data-tab="#tab4Content1">标签1</a></li>
      <li class="nav-item"><a data-tab="#tab4Content2">标签2</a></li>
      <li class="nav-item"><a data-tab="#tab4Content3">标签3</a></li>
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
</Example>

```html
<div class="flex">
  <ul class="nav nav-tabs nav-stacked">
    <li class="nav-item active"><a data-tab="#tab4Content1">标签1</a></li>
    <li class="nav-item"><a data-tab="#tab4Content2">标签2</a></li>
    <li class="nav-item"><a data-tab="#tab4Content3">标签3</a></li>
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

* `show.zui.tab`: 当前标签页在显示时触发；
* `shown.zui.tab`: 当前标签页在显示后（动画执行完毕）触发。

[调用方法待定]

## CSS类

标签页提供了如下 CSS 类：

| 类            | 类型   | 作用  |
| ------------- |:------:| ----- |
| `tab-content` | 实体类 | 元素作为所有标签页容器 |
| `tab-pane`    | 实体类 | 元素作为单独的标签页容器 |
| `fade`        | 工具类 | 标签页使用渐变动画效果 |
| `in`          | 工具类 | 标签页使用渐变动画效果，和 `fade` 同时使用 |

