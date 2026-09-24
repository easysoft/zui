# 表单控件

## 输入框

输入框通过为 `<input>` 元素添加类 `form-control` 实现，支持通过 `type` 属性设置输入框类型。

::: tabs

== 示例

<Example class="col gap-4">
  <input type="text" class="form-control" placeholder="请输入项目名称" />
  <input type="password" class="form-control" placeholder="密码" />
  <input type="email" class="form-control" placeholder="例如 linyue@example.com" />
  <input type="number" class="form-control" placeholder="预计工时（小时）" />
  <input type="tel" class="form-control" placeholder="请输入联系电话" />
  <input type="url" class="form-control" placeholder="URL" />
</Example>

== HTML

```html
<input type="text" class="form-control" placeholder="请输入项目名称" />
<input type="password" class="form-control" placeholder="密码" />
<input type="email" class="form-control" placeholder="例如 linyue@example.com" />
<input type="number" class="form-control" placeholder="预计工时（小时）" />
<input type="tel" class="form-control" placeholder="请输入联系电话" />
<input type="url" class="form-control" placeholder="URL" />
```

:::

## 选择框

通过为 `<select>` 元素添加 `form-control` 类来使用选择框，包括单选和多选模式。

### 单选框

::: tabs

== 示例

<Example>
  <select class="form-control" placeholder="选择负责部门..." >
    <option value=""></option>
    <option value="product">产品部</option>
    <option value="development">研发部</option>
    <option value="qa">测试部</option>
    <option value="design">设计部</option>
    <option value="support">客户支持部</option>
  </select>
</Example>

== HTML

```html
<select class="form-control" placeholder="选择负责部门..." >
  <option value=""></option>
  <option value="product">产品部</option>
  <option value="development">研发部</option>
  <option value="qa">测试部</option>
  <option value="design">设计部</option>
  <option value="support">客户支持部</option>
</select>
```

:::

### 多选框

::: tabs

== 示例

<Example>
  <select class="form-control h-24" multiple placeholder="选择协作部门..." >
    <option value=""></option>
    <option value="product">产品部</option>
    <option value="development">研发部</option>
    <option value="qa">测试部</option>
    <option value="design">设计部</option>
    <option value="support">客户支持部</option>
  </select>
</Example>

== HTML

```html
<select class="form-control h-24" multiple placeholder="选择协作部门..." >
  <option value=""></option>
  <option value="product">产品部</option>
  <option value="development">研发部</option>
  <option value="qa">测试部</option>
  <option value="design">设计部</option>
  <option value="support">客户支持部</option>
</select>
```

:::

::: tip

使用多选框时通常需要指定多选框高度。

:::

## 多行文本框

通过为 `<textarea>` 元素添加 `form-control` 类来使用多行文本框。

::: tabs

== 示例

<Example>
  <textarea class="form-control" rows="5" placeholder="说明项目目标与交付范围">让客户可以自助查询工单进展，并查看完整的处理记录。</textarea>
</Example>

== HTML

```html
<textarea rows="5" class="form-control" placeholder="说明项目目标与交付范围">
让客户可以自助查询工单进展，并查看完整的处理记录。
</textarea>
```

:::

## 特殊表单控件

在浏览器支持的情况下，还可以为 `type` 设置一些特殊类型。

### 日期

设置 `<input type="date">`。

::: tabs

== 示例

<Example>
  <input type="date" class="form-control" placeholder="选择日期" />
</Example>

== HTML

```html
<input type="date" class="form-control" placeholder="选择日期" />
```

:::

### 时间

设置 `<input type="time">`。

::: tabs

== 示例

<Example>
  <input type="time" class="form-control" placeholder="选择时间" />
</Example>

== HTML

```html
<input type="time" class="form-control" placeholder="选择时间" />
```

:::

### 日期时间

设置 `<input type="datetime-local">`。

::: tabs

== 示例

<Example>
  <input type="datetime-local" class="form-control" placeholder="选择日期时间" />
</Example>

== HTML

```html
<input type="datetime-local" class="form-control" placeholder="选择日期时间" />
```

:::

### 月份

设置 `<input type="month">`。

::: tabs

== 示例

<Example>
  <input type="month" class="form-control" placeholder="选择月份" />
</Example>

== HTML

```html
<input type="month" class="form-control" placeholder="选择月份" />
```

:::

### 周数

设置 `<input type="week">`。

::: tabs

== 示例

<Example>
  <input type="week" class="form-control" placeholder="选择周数" />
</Example>

== HTML

```html
<input type="week" class="form-control" placeholder="选择周数" />
```

:::

### 范围

设置 `<input type="range">`。

::: tabs

== 示例

<Example>
  <input type="range" class="form-control" placeholder="选择范围" />
</Example>

== HTML

```html
<input type="range" class="form-control" placeholder="选择范围" />
```

:::

### 颜色

设置 `<input type="color">`。

::: tabs

== 示例

<Example>
  <input type="color" class="form-control" placeholder="选择颜色" />
</Example>

== HTML

```html
<input type="color" class="form-control" placeholder="选择颜色" />
```

:::

### 文件

设置 `<input type="file">`。

::: tabs

== 示例

<Example>
  <input type="file" class="form-control" placeholder="选择文件" />
</Example>

== HTML

```html
<input type="file" class="form-control" placeholder="选择文件" />
```

:::

## 尺寸

通过为表单控件添加 `size-*` 工具类来设置尺寸。

::: tabs

== 示例

<Example class="col gap-4">
  <input type="text" class="form-control size-sm" placeholder="小号" />
  <input type="text" class="form-control" placeholder="正常" />
  <input type="text" class="form-control size-lg" placeholder="大号" />
</Example>

== HTML

```html
<input type="text" class="form-control size-sm" placeholder="小号" />
<input type="text" class="form-control" placeholder="正常" />
<input type="text" class="form-control size-lg" placeholder="大号" />
```

:::

## 禁用

通过为表单控件添加 `disabled` 属性来禁用表单控件。

::: tabs

== 示例

<Example class="col gap-4">
  <input type="text" disabled class="form-control" placeholder="请输入项目名称" />
  <input type="file" disabled class="form-control" placeholder="文件" />
  <select class="form-control" disabled placeholder="选择负责部门..." >
    <option value=""></option>
    <option value="product">产品部</option>
    <option value="development">研发部</option>
    <option value="qa">测试部</option>
    <option value="design">设计部</option>
    <option value="support">客户支持部</option>
  </select>
  <select class="form-control h-24" multiple disabled placeholder="选择协作部门..." >
    <option value=""></option>
    <option value="product">产品部</option>
    <option value="development">研发部</option>
    <option value="qa">测试部</option>
    <option value="design">设计部</option>
    <option value="support">客户支持部</option>
  </select>
  <textarea class="form-control" disabled rows="5" placeholder="说明项目目标与交付范围">让客户可以自助查询工单进展，并查看完整的处理记录。</textarea>
</Example>

== HTML

```html
<input type="text" disabled class="form-control" placeholder="请输入项目名称" />
<input type="file" disabled class="form-control" placeholder="文件" />
<select class="form-control" disabled placeholder="选择负责部门..." >
  <option value=""></option>
  <option value="product">产品部</option>
  <option value="development">研发部</option>
  <option value="qa">测试部</option>
  <option value="design">设计部</option>
  <option value="support">客户支持部</option>
</select>
<select class="form-control h-24" multiple disabled placeholder="选择协作部门..." >
  <option value=""></option>
  <option value="product">产品部</option>
  <option value="development">研发部</option>
  <option value="qa">测试部</option>
  <option value="design">设计部</option>
  <option value="support">客户支持部</option>
</select>
<textarea class="form-control" disabled rows="5" placeholder="说明项目目标与交付范围">让客户可以自助查询工单进展，并查看完整的处理记录。</textarea>
```

:::


## 只读

通过为表单控件添加 `readonly` 属性来表单控件只读。

::: tabs

== 示例

<Example class="col gap-4">
  <input type="text" readonly class="form-control" value="客户门户升级" />
  <textarea class="form-control" readonly rows="5" placeholder="说明项目目标与交付范围">让客户可以自助查询工单进展，并查看完整的处理记录。</textarea>
</Example>

== HTML

```html
<input type="text" readonly class="form-control" value="客户门户升级" />
<textarea class="form-control" readonly rows="5" placeholder="说明项目目标与交付范围">让客户可以自助查询工单进展，并查看完整的处理记录。</textarea>
```

:::

## 特殊状态

通过为表单控件或者其直接父级元素添加工具类 `has-error`、`has-warning` 和 `has-error` 来让其拥有特殊语义的状态。

::: tabs

== 示例

<Example class="col gap-4">
  <div class="has-error">
    <input type="text" class="form-control" placeholder="说明项目目标与交付范围" />
  </div>
  <div class="has-warning">
    <input type="text" class="form-control" placeholder="说明项目目标与交付范围" />
  </div>
  <div class="has-success">
    <input type="text" class="form-control" placeholder="说明项目目标与交付范围" />
  </div>
</Example>

== HTML

```html
<div class="has-error">
  <input type="text" class="form-control" placeholder="说明项目目标与交付范围" />
</div>
<div class="has-warning">
  <input type="text" class="form-control" placeholder="说明项目目标与交付范围" />
</div>
<div class="has-success">
  <input type="text" class="form-control" placeholder="说明项目目标与交付范围" />
</div>
```

:::


## CSS 类

表单控件提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `form-control`      | 实体类 | 元素作为表单控件组件 |
| `size-sm`      | 工具类      |   表单控件使用小号尺寸 |
| `size-lg`      | 工具类      |   表单控件使用大号尺寸 |

## CSS 变量

表单控件提供了如下 CSS 变量，可进行全局修改。

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--form-control-radius` | 圆角 |
| `--form-control-border` | 边框颜色 |
| `--form-control-focus` | 激活颜色 |
| `--form-control-disabled` | 禁用颜色 |
| `--form-control-readonly` | 只读颜色 |
