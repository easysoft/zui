# 标签页

## 使用方法

标签页一般配合导航使用，通过 `.nav` 来定义切换的触发器，通过 `.tab-content` 来定义切换的内容。标签页内容使用 `.tab-pane` 作为容器元素，所有供切换显示的 `.tab-pane` 放置在 `.tab-content` 容器元素内。

::: tip 提示
为确保在页面显示的时候标签页能够指示正确的标签和显示正确的内容，在初始状态需要为当前选中的导航项目 `li.nav-item > a` 元素添加 `.active` 类，并且为当前显示的标签页内容元素 `.tab-pane` 添加 `.active` 类。
:::

为导航上每个用于切换标签内容的链接添加 `href` 或 `data-target` 属性指向当前标签页内容 `.tab-pane` 的 `id` ，并添加 `data-toggle="tab"` 属性。

::: tabs

== 示例

<Example>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="active" data-toggle="tab" href="#tabContent1">标签1</a></li>
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

== HTML

```html
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="active" data-toggle="tab" href="#tabContent1">标签1</a></li>
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

:::

## 动画效果

为每个 `.tab-pane` 添加 [`.fade` 类](/utilities/effects/utilities/transition.html)，可以使得标签内容在显示时获得渐变动画效果。在初始状态要显示的标签页内容 `.tab-pane` 不仅需要添加 `.active` 类，还需要添加 `.in` 类。

::: tabs

== 示例

<Example>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="active" data-toggle="tab" href="#tab3Content10">标签1</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tab3Content11">标签2</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tab3Content12">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane fade duration-500 active in" id="tab3Content10">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane fade duration-500" id="tab3Content11">
      <p>我是标签2。</p>
    </div>
    <div class="tab-pane fade duration-500" id="tab3Content12">
      <p>我是标签3。</p>
    </div>
  </div>
</Example>

== HTML

```html
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="active" data-toggle="tab" href="#tab3Content10">标签1</a></li>
  <li class="nav-item"><a data-toggle="tab" href="#tab3Content11">标签2</a></li>
  <li class="nav-item"><a data-toggle="tab" href="#tab3Content12">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade duration-500 active in" id="tab3Content10">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane fade duration-500" id="tab3Content11">
    <p>我是标签2。</p>
  </div>
  <div class="tab-pane fade duration-500" id="tab3Content12">
    <p>我是标签3。</p>
  </div>
</div>
```

:::

## 垂直标签页

使用 `.nav-tabs.nav-stacked` 获得垂直排列的标签导航，使用 `flex` 布局来使得导航和标签页内容水平排列。

::: tabs

== 示例

<Example>
  <div class="flex">
    <ul class="nav nav-tabs nav-stacked">
      <li class="nav-item"><a class="active" data-toggle="tab" href="#tab4Content13">标签1</a></li>
      <li class="nav-item"><a data-toggle="tab" href="#tab4Content14">标签2</a></li>
      <li class="nav-item"><a data-toggle="tab" href="#tab4Content15">标签3</a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade active in" id="tab4Content13">
        <p>我是标签1。</p>
      </div>
      <div class="tab-pane fade" id="tab4Content14">
        <p>我是标签2。</p>
      </div>
      <div class="tab-pane fade" id="tab4Content15">
        <p>我是标签3。</p>
      </div>
    </div>
  </div>
</Example>

== HTML

```html
<div class="flex">
  <ul class="nav nav-tabs nav-stacked">
    <li class="nav-item"><a class="active" data-toggle="tab" href="#tab4Content13">标签1</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tab4Content14">标签2</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tab4Content15">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane fade active in" id="tab4Content1">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane fade" id="tab4Content14">
      <p>我是标签2。</p>
    </div>
    <div class="tab-pane fade" id="tab4Content15">
      <p>我是标签3。</p>
    </div>
  </div>
</div>
```

:::

## 事件

当显示一个新的标签页时，这些事件会被触发：

* `show`: 当前标签页在显示时触发；
* `shown`: 当前标签页在显示后（动画执行完毕）触发。

通过为 [data-toggle="tab"] 链接添加 `data-name` 属性，这样事件触发时会传递该属性值作为参数，如果不指定则使用 `[data-target]` 的值作为参数。

::: tabs

== 示例

<Example>
  <ul class="nav nav-tabs" id="tabsExample">
    <li class="nav-item"><a class="active" data-toggle="tab" data-name="tab1" href="#tabContent16">标签1</a></li>
    <li class="nav-item"><a data-toggle="tab" data-name="tab2" href="#tabContent17">标签2</a></li>
    <li class="nav-item"><a data-toggle="tab" href="#tabContent18">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tabContent16">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane" id="tabContent17">
      <p>我是标签2。</p>
    </div>
    <div class="tab-pane" id="tabContent18">
      <p>我是标签3。</p>
    </div>
  </div>
</Example>

== HTML

```html
<ul class="nav nav-tabs" id="tabsExample">
  <li class="nav-item"><a class="active" data-toggle="tab" data-name="tab1" href="#tabContent16">标签1</a></li>
  <li class="nav-item"><a data-toggle="tab" data-name="tab2" href="#tabContent17">标签2</a></li>
  <li class="nav-item"><a data-toggle="tab" href="#tabContent18">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="tabContent16">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane" id="tabContent17">
    <p>我是标签2。</p>
  </div>
  <div class="tab-pane" id="tabContent18">
    <p>我是标签3。</p>
  </div>
</div>

<script>
$('#tabsExample').on('show shown', function(event, info) {
  console.log('>', event.type, info);
});
</script>
```

:::
