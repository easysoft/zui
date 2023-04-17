# 表格

表格用于展示二维数据。

## 使用方法

为 `<table>` 元素添加 CSS 类 `.table` 来使用表格。

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>组成部分</th>
        <th>元素标签</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>表头</td>
        <td><code>&lt;thead&gt;</code></td>
        <td>表头通常作为表格第一行，用于展示所有数据的各个属性名称。</td>
      </tr>
      <tr>
        <td>主体</td>
        <td><code>&lt;tbody&gt;</code></td>
        <td>一个或多个行组成表格的主体，每行用于展示一个数据。</td>
      </tr>
      <tr>
        <td>表尾</td>
        <td><code>&lt;tfoot&gt;</code></td>
        <td>表尾通常用于展示一些数据的汇总信息。</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>总计</th>
        <th colspan="2">3 个部分</th>
      </tr>
    </tfoot>
  </table>
</Example>

```html
<table class="table">
  <thead>
    <tr>
      <th>组成部分</th>
      <th>元素标签</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>表头</td>
      <td><code>&lt;thead&gt;</code></td>
      <td>表头通常作为表格第一行，用于展示所有数据的各个属性名称。</td>
    </tr>
    <tr>
      <td>主体</td>
      <td><code>&lt;tbody&gt;</code></td>
      <td>一个或多个行组成表格的主体，每行用于展示一个数据。</td>
    </tr>
    <tr>
      <td>表尾</td>
      <td><code>&lt;tfoot&gt;</code></td>
      <td>表尾通常用于展示一些数据的汇总信息。</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>总计</th>
      <th colspan="2">3 个部分</th>
    </tr>
  </tfoot>
</table>
```

## 斑马纹表格

在 `<table class="table">` 上使用工具类 `.table-striped` 斑马纹表格外观（隔行变色）效果。

<Example>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>版本</th>
        <th>发布时间</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr>
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td>2021-06-05</td>
        <td>这次版本带来全新的界面外观</td>
      </tr>
      <tr>
        <th>2.1</th>
        <td>2021-07-31</td>
        <td>新的预览功能，更方便的提前查看最终效果！</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table table-striped">
  ...
</table>
```

## 鼠标悬停变色

在 `<table class="table">` 上使用工具类 `.table-hover`，当鼠标悬停在行上时显示不一样的背景。

<Example>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>版本</th>
        <th>发布时间</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr>
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td>2021-06-05</td>
        <td>这次版本带来全新的界面外观</td>
      </tr>
      <tr>
        <th>2.1</th>
        <td>2021-07-31</td>
        <td>新的预览功能，更方便的提前查看最终效果！</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table table-hover">
  ...
</table>
 ```

## 完整边框

在 `<table class="table">` 上使用工具类 `.bordered`，为表格添加所有边框。

<Example>
  <table class="table bordered">
    <thead>
      <tr>
        <th>版本</th>
        <th>发布时间</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr>
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td>2021-06-05</td>
        <td>这次版本带来全新的界面外观</td>
      </tr>
      <tr>
        <th>2.1</th>
        <td>2021-07-31</td>
        <td>新的预览功能，更方便的提前查看最终效果！</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table bordered">
  ...
</table>
 ```

## 无边框

在 `<table class="table">` 上使用工具类 `.borderless`，为表格移除所有边框。

<Example>
  <table class="table borderless">
    <thead>
      <tr>
        <th>版本</th>
        <th>发布时间</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr>
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td>2021-06-05</td>
        <td>这次版本带来全新的界面外观</td>
      </tr>
      <tr>
        <th>2.1</th>
        <td>2021-07-31</td>
        <td>新的预览功能，更方便的提前查看最终效果！</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table borderless">
  ...
</table>
 ```

## 紧凑的表格

在 `<table class="table">` 上使用工具类 `.condensed` 来获得更紧凑的表格。表格中的单元格拥有更小的间距，整体行高减少。

<Example>
  <table class="table condensed">
    <thead>
      <tr>
        <th>版本</th>
        <th>发布时间</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr>
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td>2021-06-05</td>
        <td>这次版本带来全新的界面外观</td>
      </tr>
      <tr>
        <th>2.1</th>
        <td>2021-07-31</td>
        <td>新的预览功能，更方便的提前查看最终效果！</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table condensed">
  ...
</table>
 ```

## 固定布局的表格

在 `<table class="table">` 上使用工具类 `.table-fixed` 来将表格布局方式设置为 `fixed`。

<Example>
  <table class="table table-fixed">
    <thead>
      <tr>
        <th>版本</th>
        <th>发布时间</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr>
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td>2021-06-05</td>
        <td>这次版本带来全新的界面外观。</td>
      </tr>
      <tr>
        <th>3.0</th>
        <td>2021-07-31</td>
        <td>这一次说说关于表格的固定布局，当启用固定布局时，后续行中的单元格内容将不会对表格布局产生影响，当单元格内的文本过长时会被截断隐藏。</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table table-fixed">
  ...
</table>
 ```

::: info 关于表格的固定布局
表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。在当前列中，该单元格所在行之后的行并不会影响整个列宽。

使用“fixed”布局方式时，整个表格可以在其首行被下载后就被解析和渲染。这样对于“automatic”自动布局方式来说可以加速渲染，但是其后的单元格内容并不会自适应当前列宽。任何一个包含溢出内容的单元格可以使用 overflow 属性控制是否允许内容溢出。

参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout
:::


## 自动宽度

通常表格宽度为 `100%`，与表格所属的父级元素宽度保持一致，但有时希望表格的宽度能够按照实际内容宽度展示。此时可以通过配合使用 CSS 工具类 `w-auto` 来设置表格宽度为自动，同时推荐使用工具类 `max-w-full` 来限制表格最大宽度不超过父级元素宽度（`100%`）。

<Example>
  <table class="table w-auto max-w-full">
    <thead>
      <tr>
        <th>版本</th>
        <th>发布时间</th>
        <th>主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr>
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td>2021-06-05</td>
        <td>这次版本带来全新的界面外观</td>
      </tr>
      <tr>
        <th>2.1</th>
        <td>2021-07-31</td>
        <td>新的预览功能，更方便的提前查看最终效果！</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table w-auto max-w-full">
  ...
</table>
 ```

## 特殊外观

为行元素 `<tr>` 或单元格 `<td>`、`<th>` 应用 [CSS 工具类](/utilities/) 来获得特殊外观。

 <Example>
  <table class="table">
    <thead>
      <tr class="black">
        <th>版本</th>
        <th>发布时间</th>
        <th class="text-important">主要特性</th>
      </tr>
    </thead>
    <tbody>
      <tr class="primary-pale">
        <th>1.0</th>
        <td>2021-03-01</td>
        <td>第一个版本发布！</td>
      </tr>
      <tr class="danger">
        <th>1.1</th>
        <td>2021-04-12</td>
        <td>修复了大量已知问题。</td>
      </tr>
      <tr>
        <th>1.2</th>
        <td>2021-05-18</td>
        <td>新的编辑器，让创意更容易展现。</td>
      </tr>
      <tr>
        <th>2.0</th>
        <td class="text-warning">2021-06-05</td>
        <td class="success">这次版本带来全新的界面外观</td>
      </tr>
      <tr class="disabled">
        <th>2.1</th>
        <td>2021-07-31</td>
        <td>新的预览功能，更方便的提前查看最终效果！</td>
      </tr>
    </tbody>
  </table>
 </Example>

```html
<table class="table">
  <thead>
    <tr class="black">
      <th>版本</th>
      <th>发布时间</th>
      <th class="text-important">主要特性</th>
    </tr>
  </thead>
  <tbody>
    <tr class="primary-pale">
      <th>1.0</th>
      <td>2021-03-01</td>
      <td>第一个版本发布！</td>
    </tr>
    <tr class="danger">
      <th>1.1</th>
      <td>2021-04-12</td>
      <td>修复了大量已知问题。</td>
    </tr>
    <tr>
      <th>1.2</th>
      <td>2021-05-18</td>
      <td>新的编辑器，让创意更容易展现。</td>
    </tr>
    <tr>
      <th>2.0</th>
      <td class="text-warning">2021-06-05</td>
      <td class="success">这次版本带来全新的界面外观</td>
    </tr>
    <tr class="disabled">
      <th>2.1</th>
      <td>2021-07-31</td>
      <td>新的预览功能，更方便的提前查看最终效果！</td>
    </tr>
  </tbody>
</table>
```

## CSS 类

按钮提供了如下 CSS 类：

| 类              |  类型  | 作用                     |
| --------------- | :----: | ------------------------ |
| `table`         | 实体类 | 元素作为表格组件         |
| `table-striped` | 工具类 | 为表格启用斑马纹效果     |
| `table-hover`   | 工具类 | 为表格启用行悬停变色效果 |
| `table-fixed`   | 工具类 | 为表格启用固定布局       |
| `borderless`    | 工具类 | 移除表格所有边框         |
| `bordered`      | 工具类 | 为表格添加完整边框       |
| `condensed`     | 工具类 | 为表格启用紧凑布局       |

## CSS 变量

| 变量名称              | 变量含义                       |
| --------------------- | ------------------------------ |
| --table-head-bg       | 表头背景色                     |
| --table-striped-color | 表格斑马纹行背景色             |
| --table-hover-color   | 表格行响应鼠标悬停变化背景颜色 |
| --table-border-color  | 表格边框颜色                   |
