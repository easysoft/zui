section: javascript
id: popover
description: 弹出交互式面板
icon: icon-comment-line
filter: tanchumianban tcmb
---

# 弹出面板

<style>
.popover-examples .popover
{
  position: relative;
  display: block;
  float: left;
  width: 260px;
  margin: 20px;
  z-index: 0;
}
</style>

## 静态类型

<div class="example popover-examples">
  <div class="popover top">
    <div class="arrow"></div>
    <h3 class="popover-title">Popover top</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>
  <div class="popover right">
    <div class="arrow"></div>
    <h3 class="popover-title">Popover right</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>
  <div class="popover bottom">
    <div class="arrow"></div>
    <h3 class="popover-title">Popover bottom</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>
  <div class="popover left">
    <div class="arrow"></div>
    <h3 class="popover-title">Popover left</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>
  <div class="clearfix"></div>
</div>

### 不带箭头指示

<div class="example popover-examples">
  <div class="popover">
    <div class="arrow"></div>
    <h3 class="popover-title">Popover top</h3>
    <div class="popover-content">
      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam.
      Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    </div>
  </div>
  <div class="clearfix"></div>
</div>

## 动态演示

<div class="example">
  <a href="##" class="btn btn-lg btn-danger" data-toggle="popover" title="" data-content="我是内容！" data-original-title="我时标题">打开弹出框</a>
</div>

### 在不同方向弹出

<div class="example text-center">
  <button type="button" class="btn btn-default" data-toggle="popover" data-placement="left" data-content="我是内容。" data-original-title="我时标题" title="">左侧弹框</button>
  <button type="button" class="btn btn-default" data-toggle="popover" data-placement="top" data-content="我是内容。" data-original-title="我时标题" title="">上方弹框</button>
  <button type="button" class="btn btn-default" data-toggle="popover" data-placement="bottom" data-content="我是内容。" data-original-title="我时标题" title="">下方弹框</button>
  <button type="button" class="btn btn-default" data-toggle="popover" data-placement="right" data-content="我是内容。" data-original-title="我时标题" title="">右侧弹框</button>
</div>

### 指定html元素作为弹出内容

<div class="example">
  <a href="##" class="btn btn-lg btn-danger" data-toggle="popover" data-placement="right" data-target="$next">打开弹出框</a>
  <div id="popoverContent1" class="popover">
    <h3 class="popover-title">Popover top</h3>
    <table class="table">
      <tbody><tr>
        <td>Lorem ipsum dolor.</td>
        <td>Nisi, ad, quisquam!</td>
        <td>Eum, excepturi, placeat.</td>
      </tr>
      <tr>
        <td>Lorem ipsum dolor.</td>
        <td>Explicabo, nobis, nesciunt!</td>
        <td>Sequi, doloribus, natus.</td>
      </tr>
      <tr>
        <td>Lorem ipsum dolor.</td>
        <td>Ipsum, suscipit, quibusdam?</td>
        <td>Minus, tenetur, neque.</td>
      </tr>
    </tbody></table>
  </div>
</div>

## 用法

通过JavaScript启用弹出框：

```
$('#example').popover(options)</code></pre>
```

### 使用要点

*   弹出框依赖 [工具提示插件](#javascript/tooltips) ，因此需要先加载工具提示插件。
*   出于性能方面的考虑，工具提示和弹框组件的data属性api是选择性加入的，也就是说 **你必须自己初始化他们**。
*   弹出框在按钮组和输入框组中使用时，需要额外的设置：当提示框与 `.btn-group` 或 `.input-group` 联合使用时，你需要指定 `container: 'body'`选项（见下面的文档）以避免不需要的副作用（例如，当弹出框显示之后，与其合作的页面元素可能变得更宽或是去圆角）。
*   在禁止使用的页面元素上使用弹出框时需要额外增加一个元素将其包裹起来：为了给 `disabled` 或 `.disabled` 元素添加弹出框时，将需要增加弹出框的页面元素包裹在一个 `<div>` 中，然后对这个 `<div>` 元素应用弹出框。

## 选项

可以将选项通过data属性或JavaScript传递。对于data属性，需要将选项名称放到`data-`之后，例如`data-animation=""`。

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
        <td>是否应用淡入淡出动画。</td>
      </tr>
      <tr>
        <td>html</td>
        <td>boolean</td>
        <td>false</td>
        <td>
          是否允许内容中包含html。
        </td>
      </tr>
      <tr>
        <td>placement</td>
        <td>string | function</td>
        <td>'right'</td>
        <td>
          top | bottom | left | right | auto.
          <br>
          显示位置
        </td>
      </tr>
      <tr>
        <td>selector</td>
        <td>string</td>
        <td>false</td>
        <td>
          当需要给动态的DOM元素应用工具提示时，需要手动制定选择器。
        </td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>string</td>
        <td>'click'</td>
        <td>click | hover | focus | manual，决定交互方式。</td>
      </tr>
      <tr>
        <td>title</td>
        <td>string | function</td>
        <td>''</td>
        <td>
          标题
        </td>
      </tr>
      <tr>
        <td>content</td>
        <td>string | function</td>
        <td>''</td>
        <td>
          内容
        </td>
      </tr>
      <tr>
        <td>delay</td>
        <td>number | object</td>
        <td>0</td>
        <td>
          <p>
            是否延迟展示。
          </p>
          <p>
            <code>delay: { show: 500, hide: 100 }</code>
          </p>
        </td>
      </tr>
      <tr>
        <td>container</td>
        <td>string | false</td>
        <td>false</td>
        <td>
          <p>
            决定相对位置的父级容器。
          </p>
        </td>
      </tr>
      <tr>
        <td>tipClass</td>
        <td>string</td>
        <td></td>
        <td>为动态生成的<code>div.popover</code>标签添加额外的CSS CLASS。</td>
      </tr>
      <tr>
        <td>tipId</td>
        <td>string</td>
        <td></td>
        <td>为动态生成的<code>div.popover</code>标签设置一个id属性。</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <h4>为单个弹出框应用data属性</h4>
  <p>对单个弹出框可以通过data属性单独指定选项，如上所示。</p>
</div>

## 方法

```
$('#element').popover(options)
```

为一组元素初始化弹出框。

### .popover('show')

显示弹出框。

```
$('#element').popover('show');
```

### .popover('hide')

隐藏弹出框。

```
$('#element').popover('hide');
```

### .popover('toggle')

展示或隐藏弹出框。

```
$('#element').popover('toggle');
```

### .popover('destroy')

隐藏并销毁弹出框。

```
$('#element').popover('destroy');
```

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
        <td>show.zui.popover</td>
        <td>
          当
          <code>show</code>
          方法被调用之后，此事件将被立即触发。
        </td>
      </tr>
      <tr>
        <td>shown.zui.popover</td>
        <td>当弹出框展示到用户面前之后（同时CSS过渡效果执行完之后）此事件被触发。</td>
      </tr>
      <tr>
        <td>hide.zui.popover</td>
        <td>
          当
          <code>hide</code>
          方法被调用之后，此事件被触发。
        </td>
      </tr>
      <tr>
        <td>hidden.zui.popover</td>
        <td>当弹出框被隐藏之后（同时CSS过渡效果执行完之后），此事件被触发。</td>
      </tr>
    </tbody>
  </table>
</div>

<script>
function afterPageLoad() {
    $('#pageContent [data-toggle="popover"]').popover();
}
</script>
