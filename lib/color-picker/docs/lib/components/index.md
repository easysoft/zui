# 颜色选择器

基于下拉选择器实现的颜色选择器。

## 基本使用

在选定元素上调用初始化函数即可使用颜色选择器。

<Example>
    <div id="color-picker-1"></div>
</Example>

```html
<div id="color-picker-1"></div>
```

```JavaScript
const colorPicker = new ColorPicker('#color-picker-1', {
    heading: '选择颜色',
})
```

## 自定义颜色

通过设置 `colors` 属性自定义颜色列表。

<Example>
    <div id="color-picker-2"></div>
</Example>

```html
<div id="color-picker-2"></div>
```

```JavaScript
const colorPicker = new ColorPicker('#color-picker-2', {
    heading: '选择颜色',
    colors: ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060', '#F2D8D8', '#5C8984', '#545B77', '#374259'],
    defaultValue: '#374259',
});
```

## 自定义图标

通过设置 `icon` 属性自定义颜色显示图标。

<Example>
    <div id="color-picker-3"></div>
</Example>

```html
<div id="color-picker-3"></div>
```

```JavaScript
const colorPicker = new ColorPicker('#color-picker-3', {
    heading: '选择颜色',
    icon: 'zentao',
});
```

## 同步颜色

通过为 `syncText`、`syncColor`、`syncBackground`、`syncBorder` 设置选择器可实现将当前选中的颜色信息同步到相应元素。

<Example>
    <div id="color-picker-4"></div>
    <div class="flex h-8 items-center">颜色值：<span id="sync-text" ></span></div>
    <div class="row gap-2">
        <div id="sync-color" class="center h-8 w-16">文字颜色</div>
        <div id="sync-background" class="center h-8 w-16">背景色</div>
        <div id="sync-border" class="center h-8 w-16 border">边框色</div>
    </div>
</Example>

```html
<div id="color-picker-4"></div>
<div class="flex h-8 items-center">颜色值：<span id="sync-text" ></span></div>
<div class="row gap-2">
    <div id="sync-color" class="center h-8 w-16">文字颜色</div>
    <div id="sync-background" class="center h-8 w-16">背景色</div>
    <div id="sync-border" class="center h-8 w-16 border">边框色</div>
</div>
```

```JavaScript
const colorPicker = new ColorPicker('#color-picker-4', {
    heading: '选择颜色',
    syncText: '#sync-text',
    syncColor: '#sync-color',
    syncBackground: '#sync-background',
    syncBorder: '#sync-border',
});
```

## 选项

### `heading 属性`

颜色面板标题。

+ 类型：`string`
+ 必选：否

### `icon`

图标。

+ 类型：`string`
+ 必选：否

### `closeBtn`

颜色面板是否使用关闭按钮。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

### `syncText`

颜色值容器选择器。

+ 类型：`string`
+ 必选：否

### `syncColor`

文本色同步容器选择器。

+ 类型：`string`
+ 必选：否

### `syncBackground`

背景色同步容器选择器。

+ 类型：`string`
+ 必选：否

### `syncBorder`

边框色同步容器选择器。

+ 类型：`string`
+ 必选：否

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.ColorPicker('#color-picker-1', {
                heading: '选择颜色',
            });

            new zui.ColorPicker('#color-picker-2', {
                heading: '选择颜色',
                colors: ['#0079FF', '#00DFA2', '#F6FA70', '#FF0060', '#F2D8D8', '#5C8984', '#545B77', '#374259'],
                defaultValue: '#374259',
            });

            new zui.ColorPicker('#color-picker-3', {
                heading: '选择颜色',
                icon: 'zentao',
                hint: '这是一个提示'
            });

            new zui.ColorPicker('#color-picker-4', {
                heading: '选择颜色',
                syncText: '#sync-text',
                syncColor: '#sync-color',
                syncBackground: '#sync-background',
                syncBorder: '#sync-border',
            });
        });
    }
}
</script>
