# 面板

可以将某些DOM内容放在面板组件中。

## 基本使用

一个面板通常包含标题，内容，脚注三部分。标题，脚注可按需选择使用。

<Example>
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
</Example>

```html
<div class="panel">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
```

## 不同主题

除默认主体外，另外提供6种主体样式。

<Example class="space-y-4" >
  <div class="panel primary">
    <div class="panel-heading">panel-primary</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel secondary">
    <div class="panel-heading">panel-secondary</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel warning">
    <div class="panel-heading">panel-warning</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel danger">
    <div class="panel-heading">panel-danger</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel important">
    <div class="panel-heading">panel-important</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel special">
    <div class="panel-heading">panel-special</div>
    <div class="panel-body">面板内容</div>
  </div>
</Example>

```html
<div class="panel primary">
  <div class="panel-heading">panel-primary</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel secondary">
  <div class="panel-heading">panel-secondary</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel warning">
  <div class="panel-heading">panel-warning</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel danger">
  <div class="panel-heading">panel-danger</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel important">
  <div class="panel-heading">panel-important</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel special">
  <div class="panel-heading">panel-special</div>
  <div class="panel-body">面板内容</div>
</div>
```

## 圆角

搭配CSS工具类 `rounded-*` 为面板应用不同的圆角样式。

<Example>
  <div class="panel rounded-none mb-2">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel rounded-sm mb-2">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel rounded mb-2">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel rounded-md mb-2">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel rounded-lg mb-2">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel rounded-xl mb-2">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
</Example>

```html
<div class="panel rounded-none">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
<div class="panel rounded-sm">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
<div class="panel rounded">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
<div class="panel rounded-md">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
<div class="panel rounded-lg">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
<div class="panel rounded-xl">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
```
## 面板组

搭配CSS工具类 `space-*` 可实现面板组效果。

<Example>
  <div class="space-y-2">
    <div class="panel">
      <div class="panel-heading">面板标题</div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板脚注</div>
    </div>
    <div class="panel">
      <div class="panel-heading">面板标题</div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板脚注</div>
    </div>
    <div class="panel">
      <div class="panel-heading">面板标题</div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板脚注</div>
    </div>
  </div>
</Example>

```html
<div class="space-y-2">
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
</div>
```

## 与表格组合使用

<Example>
  <div class="panel">
    <div class="panel-heading">包含表格</div>
    <table class="table">
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
	  <th>计划开始</th>
	  <th>计划完成</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>禅道开源版</td>
          <td>禅道研发</td>
          <td>今天</td>
          <td>今天</td>
        </tr>
        <tr>
          <td>禅道旗舰版</td>
          <td>禅道研发</td>
          <td>明天</td>
          <td>明天</td>
        </tr>
        <tr>
          <td>禅道开源版</td>
          <td>禅道研发</td>
          <td>后天</td>
          <td>后天</td>
        </tr>
      </tbody>
    </table>
  </div>
</Example>


```html
<div class="panel">
  <div class="panel-heading">包含表格</div>
  <table class="table">
    <thead>
      <tr>
        <th>项目名称</th>
	<th>负责人</th>
	<th>计划开始</th>
	<th>计划完成</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>后天</td>
        <td>后天</td>
      </tr>
    </tbody>
  </table>
</div>
```

## 高级用法

<Example>
  <div class="panel mb-2">
    <div class="panel-heading">
      <strong>标题加粗</strong>
    </div>
    <div class="panel-body">内容</div>
  </div>
  <div class="panel">
    <div class="panel-heading flex justify-between items-center">
      <label>标题</label>
      <button type="button" class="btn">按钮</button>
    </div>
    <div class="panel-body">内容</div>
  </div>
</Example>

```html
<div class="panel">
  <div class="panel-heading">
    <strong>标题加粗</strong>
  </div>
  <div class="panel-body">内容</div>
</div>
<div class="panel">
    <div class="panel-heading flex justify-between items-center">
      <label>标题</label>
      <button type="button" class="btn">按钮</button>
    </div>
    <div class="panel-body">内容</div>
  </div>
```
## CSS 类

面板提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `panel`      | 实体类 | 元素作为面板组件 |


## CSS 变量

面板提供了如下 CSS 变量：

| 变量名称                | 变量含义     |
| ------------------------|--------------|
| `--panel-heading-bg`    | 标题背景色   |
| `--panel-heading-color` | 标题文字颜色 |
| `--panel-footer-bg`     | 脚注背景色   |
| `--panel-border-color`  | 面板边框颜色 |


