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
