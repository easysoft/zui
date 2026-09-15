# 下拉选择器

用于方便用户从多个选项列表中进行选择。

## 特殊选项

### 禁用搜索

```html:example
<div id="noSearchPicker"></div>
```

```html:example
<div id="noSearchMultiPicker"></div>
```

## 搜索创建选项

仅多选 Picker 支持创建选项。搜索无匹配结果时，可点击创建提示或按 <kbd>Enter</kbd> 创建并选中新选项。

### 使用搜索文本创建

```html:example
<div id="creatablePicker"></div>
```

### 转换创建项

```html:example
<div id="customCreatablePicker"></div>
```

转换示例中可输入 `return-false`、`throw-error`、`before-change-false` 和 `Apple!`，分别验证取消创建、回调异常、`beforeChange` 回滚和已有值去重。

## 远程数据

### 单选

```html:example
<div id="singlePickerRemote"></div>
```

### 多选

```html:example
<div id="multiPickerRemote"></div>
```

## 多层级

### 单选

```html:example
<div id="singlePickerNested"></div>
```

### 多选

```html:example
<div id="multiPickerNested"></div>
```

```js
const nestedItems = [
    {
        text: '水果',
        value: 'fruit',
        items: [
            {text: '西红柿', value: 'tomato', keys: 'fruit food xihongshi', subtitle: '绿色蔬菜'},
            {text: '西瓜', value: 'watermelon', keys: 'fruit food xigua'},
            {text: '苹果', value: 'apple', keys: 'fruit food pingguo'},
            {text: '香蕉', value: 'banana', keys: 'fruit food xiangjiao'},
        ],
    },
    {
        text: '蔬菜',
        value: 'vegetable',
        items: [
            {text: '西红柿', value: 'tomato', keys: 'fruit food xihongshi'},
            {text: '西瓜2', value: 'watermelon2', keys: 'fruit food xigua'},
            {text: '苹果2', value: 'apple2', keys: 'fruit food pingguo'},
            {text: '香蕉2', value: 'banana2', keys: 'fruit food xiangjiao'},
        ],
    },
];

const multiPicker = new Picker('#multiPicker', {
    name: 'selectSome',
    multiple: true,
    items: nestedItems,
    menu: {
        itemProps: {
            avatarClass: 'size-sm',
        },
        checkbox: true,
        getItem: (item) => {
            if (item.type === 'item') {
                if (item.items) {
                    item.titleClass = 'font-bold';
                } else {
                    item.avatar = {
                        text: item.text[0], // 或者通过 src 指定图片
                        size: 'xs',
                        circle: true,
                    };
                }
            }
            return item;
        },
    },
    defaultValue: 'banana,orange',
    placeholder: '请选择你的最爱',
});
console.log('> multiPicker', multiPicker);
```

## 简单示例

### 单选

```html:example
<div id="singlePicker"></div>
```

### 多选

```html:example
<div id="multiPicker"></div>
```

## 复杂交互例子

下面的例子默认点击提供额外的自定义操作，下拉面板需要点击右侧的图标按钮来打开。

```html:example
<div id="customPicker" class="w-40"></div>
```

```js
const customPicker = new Picker('#customPicker', {
    items,
    placeholder: '请选择你的最爱',
    required: true,
    search: false,
    className: 'picker-btn state',

    // 在下拉菜单内显示搜索框
    menu: {
        searchBox: true,
        search: undefined,
    },

    // 自定义下拉菜单控件显示
    display: (value, selections) => {
        return {html: `<div>你选择了：${selections.map(x => x.text).join(',')}</div><style>.picker-btn {box-shadow: none!important;outline:none}.picker-btn .caret{display:none}</style><button type="button" class="picker-btn-trigger btn size-xs square"><i class="icon icon-exchange">↓</i></button>`, className: 'flex justify-between gap-2 p-px'};
    },

    // 自定义点击事件
    onClick: (event) => {
        if ($(event.target).closest('.picker-btn-trigger').length) {
            return;
        }

        event.preventDefault();
        // 执行自定义操作
        console.log('> customPicker.onClick', event);
    },
});
```

## Web Component 与原生表单

本页通过 `definePicker()`、`defineButton()` 注册示例使用的自定义元素。

可以通过标签、Tab、方向键、Enter 和 Escape 操作选择器。试试必填校验、重置、fieldset 禁用，以及取消选中事件。

```html:example: col gap-3
<form id="webcForm" class="col gap-3">
  <fieldset id="webcFields" class="col gap-3">
    <label id="webcOwnerLabel" for="webcOwner">负责人（必填）</label>
    <zui-picker id="webcOwner" name="owner" value="hao" required placeholder="请选择负责人" lang="zh-CN"></zui-picker>
    <label id="webcReviewersLabel" for="webcReviewers">评审人（最多 3 人）</label>
    <zui-picker id="webcReviewers" name="reviewers" value="tom,amy" multiple="3" placeholder="请选择评审人" lang="zh-CN"></zui-picker>
  </fieldset>
  <div class="flex flex-wrap gap-3">
    <zui-button text="提交表单" type="primary" btn-type="submit"></zui-button>
    <zui-button text="重置" btn-type="reset"></zui-button>
    <zui-button id="webcSetOwner" text="通过 property 设为 Tom"></zui-button>
    <zui-button id="webcClearOwner" text="清空负责人"></zui-button>
  </div>
  <label><input id="webcDisableFields" type="checkbox"> 禁用整个 fieldset</label>
  <label><input id="webcReadonlyOwner" type="checkbox"> 负责人只读</label>
  <label><input id="webcCancelChange" type="checkbox"> 取消负责人下一次修改</label>
  <output id="webcFormState" aria-live="polite"></output>
</form>
```
