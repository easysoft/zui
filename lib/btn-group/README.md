# 按钮组

## 组件模式

```html:example
<div id="btnGroup"></div>
```

```js
const btnGroup = new BtnGroup('#btnGroup', {
    items: [
        {text: '复制', icon: {"className": "i-copy", "aria-hidden": true}},
        {text: '粘贴', disabled: true},
        {text: '剪切'},
        {type: 'heading', text: '更多操作', caret: true},
        {text: '导入', icon: {"className": "i-upload", "aria-hidden": true}},
        {text: '导出', icon: {"className": "i-download", "aria-hidden": true}},
        {text: '保存', icon: {"className": "example-icon example-icon-save", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}, onClick: (event) => console.log('> btnGroupItem.clicked', event)},
    ],
    onClickItem: (info) => {
        console.log('> btnGroup.onClickItem', info);
    },
});
console.log('> btnGroup', btnGroup);
```

## btn-group

```html:example:flex gap-3
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```

分段单选使用独立的 [Segmented](../segmented/README.md)。

## 组件表单单选

`BtnGroup` 设置 `radio: true` 后生成原生 radio。`name` 是表单字段名，`items[].value` 是提交值；未指定 value 的项目使用列表 key。`defaultValue` 设置初值，重置按钮恢复初值。

```html:example
<form id="btnGroupRadioForm" class="space-y-3">
  <fieldset><legend>相连按钮</legend><div id="btnGroupRadio"></div></fieldset>
  <div class="flex gap-3">
    <button class="btn" type="submit">读取表单</button>
    <button class="btn" type="reset">重置</button>
  </div>
  <output aria-live="polite"></output>
</form>
```

### 受控单选

传入 `value` 后，由调用方在 `onChange(value, event)` 中更新值；未更新时保持原选项，表单重置也保持当前 `value`。

```html:example
<div id="btnGroupControlled"></div>
<output id="btnGroupControlledValue" aria-live="polite"></output>
```

### FormBuilder

加载按钮组主入口后，使用 `widget: 'BtnGroup'`，并在 `props` 中设置 `radio: true`。`FormControl` 使用相同配置。完整源码工作区示例见 [表单单选接入](ai.md#preact-radio-form)。

```html:example
<div id="btnGroupFormBuilder"></div>
<output id="btnGroupFormBuilderValue" aria-live="polite"></output>
```

## button groups with form radios

```html:example:flex gap-3
<div id="btnGroupNative" class="btn-group" role="group" aria-label="选择视图">
  <input type="radio" id="listItem" name="view" value="list">
  <label class="btn" for="listItem">列表</label>
  <input type="radio" id="cardItem" name="view" value="card" checked>
  <label class="btn" for="cardItem">卡片</label>
  <input type="radio" id="boardItem" name="view" value="board">
  <label class="btn" for="boardItem">看板</label>
</div>
```

同组 radio 共用 `name`，每个 `input` 与紧邻的 `label` 通过唯一的 `id`/`for` 关联。浏览器维护选中状态、方向键切换和表单取值/重置；`disabled` 同步显示为标签的禁用状态。详见 [原生 radio 用法](ai.md#css-btn-group)。

## btn-group sizes

```html:example:flex gap-3
<div class="btn-group size-xl">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group size-lg">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group size-sm">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group size-xs">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```

## btn-group styles

```html:example:flex gap-3
<div class="btn-group">
  <button type="button" class="btn primary">Primary</button>
  <button type="button" class="btn primary">左</button>
  <button type="button" class="btn disabled primary">中</button>
  <button type="button" class="btn primary">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-outline">Outline</button>
  <button type="button" class="btn primary-outline">左</button>
  <button type="button" class="btn primary-outline">中</button>
  <button type="button" class="btn disabled primary-outline">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-pale disabled">Pale</button>
  <button type="button" class="btn primary-pale">左</button>
  <button type="button" class="btn primary-pale">中</button>
  <button type="button" class="btn primary-pale">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn text-primary disabled">Text Primary</button>
  <button type="button" class="btn text-primary">左</button>
  <button type="button" class="btn text-primary">中</button>
  <button type="button" class="btn text-primary">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn bd-primary">Border Primary</button>
  <button type="button" class="btn bd-primary">左</button>
  <button type="button" class="btn bd-primary">中</button>
  <button type="button" class="btn bd-primary disabled">右</button>
</div>
```

## with dropdown

```html:example:flex gap-3
<div class="btn-group">
  <button type="button" class="btn">春天</button>
  <button type="button" class="btn" data-toggle="dropdown"  data-target="#dropdownMenu">未来 <span class="caret"></span></button>
  <button type="button" class="btn">夏天</button>
</div>

<div class="btn-group">
  <button type="button" class="btn">操作</button>
  <button type="button" class="btn" data-toggle="dropdown" data-target="#dropdownMenu"><span class="caret"></span></button>
</div>

<div class="btn-group">
  <button type="button" class="btn">操作</button>
  <button type="button" class="btn" data-toggle="dropdown" data-target="#dropdownMenu"><span class="caret"></span></button>
  <button type="button" class="btn" data-toggle="dropdown" data-target="#dropdownMenu"><span class="caret"></span></button>
  <button type="button" class="btn">操作</button>
</div>

<ul class="dropdown-menu" id="dropdownMenu">
  <li><a href="###">编辑</a></li>
  <li><a href="###">删除</a></li>
  <li class="divider"></li>
  <li><a href="###">撤销</a></li>
</ul>
```
