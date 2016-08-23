section: javascript
id: tooltip
description: 为元素额外提供消息文本
icon: icon-chat
filter: tishixiaoxi tsxx
---

# 提示消息

## 一般工具提示

<div class="example tooltip-demo">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
  cupiditate, eius, modi, veniam iure perspiciatis hic vitae quisquam ullam
  animi ipsum repellat temporibus <a href="#" data-toggle="tooltip" title="This is a tooltip">have a</a> officiis voluptatibus nostrum laborum debitis
  quidem illo deleniti iste! Minima, facilis aut explicabo debitis fugit dolor
  sint at soluta nulla omnis itaque <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> illum commodi numquam enim quod architecto
  molestias qui eveniet et amet <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> laborum quisquam quam provident esse beatae quas
  impedit voluptas nostrum <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> aspernatur deleniti suscipit blanditiis
  dignissimos temporibus eligendi quae corrupti <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> pariatur quo! Enim, ipsa, odio
  quasi laboriosam provident id nihil maxime architecto dolorum quas harum
  veniam perspiciatis tempora ducimus qui! Rem, obcaecati reiciendis officia
  quam.</p>
</div>

## 不同方向的提示

<div class="example tooltip-demo">
  <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">左侧Tooltip</button> <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">上方Tooltip</button> <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">下方Tooltip</button> <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">右侧Tooltip</button>
</div>

## 使用提醒

*   选择性加入的功能：出于性能方面的考虑，工具提示和弹框组件的data属性api是选择性加入的，也就是说 **你必须自己初始化他们**。
*   工具提示与按钮组和输入框组联合使用时需要一些特殊设置：在 `.btn-group` 或 `.input-group` 内的元素上使用工具提示时，你需要指定 `container: 'body'`选项以避免不需要的副作用（例如，当工具提示显示之后，与其合作的页面元素可能变得更宽或是去圆角）。
*   在禁止使用的页面元素上使用工具提示时需要额外增加一个元素将其包裹起来：为了给 `disabled` 或 `.disabled` 元素添加工具提示，将需要增加工具提示的页面元素包裹在一个 `<div>` 中，然后对这个 `<div>` 元素应用工具提示。

## 用法

通过JavaScript激活工具提示：

<div class="example">
  鼠标悬停显示<a href="###" data-toggle="tooltip" title="这是提示消息内容">提示消息</a>
</div>

```
<a href="your/nice/url" data-toggle="tooltip" title="这是提示消息内容">鼠标悬停显示提示消息</a>
```

```
<code class="language-js">$(<span class="string">'[data-toggle="tooltip"]'</span>).tooltip(options);</code>
```

## 选项

可以将选项通过data属性或JavaScript传递。对于data属性，需要将选项名称放到 `data-` 之后，例如 `data-animation=""` 。

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 100px;">名称</th>
        <th style="width: 100px;">类型</th>
        <th style="width: 50px;">默认值</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>animation</td>
        <td>boolean</td>
        <td>true</td>
        <td>决定是否应用淡入淡出动画。</td>
      </tr>
      <tr>
        <td>html</td>
        <td>boolean</td>
        <td>false</td>
        <td>是否允许展示html标签。</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>string | function</td>
        <td>'top'</td>
        <td>top | bottom | left | right | auto.
        <br>
        显示的位置。</td>
      </tr>
      <tr>
        <td>selector</td>
        <td>string</td>
        <td>false</td>
        <td>当需要为动态DOM应用工具提示，需要手动指定选择器。</td>
      </tr>
      <tr>
        <td>title</td>
        <td>string | function</td>
        <td>''</td>
        <td>标题。</td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>string</td>
        <td>'hover focus'</td>
        <td>click | hover | focus | manual. 触发方式。</td>
      </tr>
      <tr>
        <td>delay</td>
        <td>number | object</td>
        <td>0</td>
        <td>
          <p>如果指定，则应用延迟。</p>
          <p><code>delay: { show: 500, hide: 100 }</code></p>
        </td>
      </tr>
      <tr>
        <td>container</td>
        <td>string | false</td>
        <td>false</td>
        <td>
          <p>决定相对位置的父级容器。 <code>container: 'body'</code></p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

使用data属性可以为单个工具提示指定额外选项，如下所示。

## 标记

<div class="example">
  <pre><code class="language-html">&lt;a href="#" data-toggle="tooltip" title="first tooltip"&gt;Hover over me&lt;/a&gt;</code></pre>
</div>

## 方法

### $().tooltip(options)

为一组元素应用工具提示。

### .tooltip('show')

展示工具提示。

<div class="example">
  <pre><code>$('#element').tooltip('show');</code></pre>
</div>

### .tooltip('hide')

隐藏工具提示。

<div class="example">
  <pre><code>$('#element').tooltip('hide');</code></pre>
</div>

### .tooltip('toggle')

展示或隐藏工具提示。

<div class="example">
  <pre><code>$('#element').tooltip('toggle');</code></pre>
</div>

### .tooltip('destroy')

隐藏并销毁工具提示。

<div class="example">
  <pre><code>$('#element').tooltip('destroy');</code></pre>
</div>

## 事件

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th style="width: 150px;">事件类型</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>show.zui.tooltip</td>
        <td>当 <code>show</code> 方法被调用之后，此事件将被立即触发。</td>
      </tr>
      <tr>
        <td>shown.zui.tooltip</td>
        <td>当工具提示展示到用户面前之后（同时CSS过渡效果执行完之后）此事件被触发。</td>
      </tr>
      <tr>
        <td>hide.zui.tooltip</td>
        <td>当 <code>hide</code> 方法被调用之后，此事件被触发。</td>
      </tr>
      <tr>
        <td>hidden.zui.tooltip</td>
        <td>当工具提示被隐藏之后（同时CSS过渡效果执行完之后），此事件被触发。</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example">
  <pre><code class="language-js"></code></pre>
</div>

<script>
function afterPageLoad() {
    $('#pageContent [data-toggle="tooltip"]').tooltip();
}
</script>
