# 按钮生成器

按钮生成器是通过 JS 动态生成的按钮组件，用来触发一些动作。通常用在表单、对话框、菜单上面。好的按钮设计能够引导用户高效的达到目的。

## 基本用法

基础的按钮用法。

<Example class="col gap-2">
  <div class="flex gap-1">
    <div id="btnExp"></div>
    <div id="roundedBtnExp"></div>
  </div>
  <div class="flex gap-1">
    <div id="primaryBtnExp"></div>
    <div id="secondaryBtnExp"></div>
    <div id="successBtnExp"></div>
    <div id="warningBtnExp"></div>
    <div id="dangerBtnExp"></div>
    <div id="importantBtnExp"></div>
    <div id="specialBtnExp"></div>
  </div>
  <div class="flex gap-1">
    <div id="iconBtnExp"></div>
    <div id="closeBtnExp"></div>
    <div id="moreBtnExp"></div>
  </div>
</Example>

```html
<div id="btnExp"></div>
<div id="roundedBtnExp"></div>

<div id="primaryBtnExp"></div>
<div id="secondaryBtnExp"></div>
<div id="successBtnExp"></div>
<div id="warningBtnExp"></div>
<div id="dangerBtnExp"></div>
<div id="importantBtnExp"></div>
<div id="specialBtnExp"></div>

<div id="iconBtnExp"></div>
<div id="closeBtnExp"></div>
<div id="moreBtnExp"></div>


<script>
    new zui.Button('#btnExp', {text: '默认按钮'});
    new zui.Button('#roundedBtnExp', {text: '圆角按钮', className: 'circle'});
            
    new zui.Button('#primaryBtnExp', {text: '主要按钮', type: 'primary'});
    new zui.Button('#secondaryBtnExp', {text: '次要按钮', type: 'secondary'});
    new zui.Button('#successBtnExp', {text: '成功按钮', type: 'success'});
    new zui.Button('#warningBtnExp', {text: '提示按钮', type: 'warning'});
    new zui.Button('#dangerBtnExp', {text: '警告按钮', type: 'danger'});
    new zui.Button('#importantBtnExp', {text: '重要按钮', type: 'important'});
    new zui.Button('#specialBtnExp', {text: '特殊按钮', type: 'special'});
    
    new zui.Button('#iconBtnExp', {icon: 'icon-search', text: '查询'});
    new zui.Button('#closeBtnExp', {icon: 'icon-off', hint: '关闭'});
    new zui.Button('#closeGhostBtnExp', {icon: 'icon-off', hint: '关闭', className: 'ghost'});
    new zui.Button('#moreBtnExp', {trailingIcon: 'icon-ellipsis-v', text: '更多'});
</script>
```

## 链接按钮

组件提供 `url` 属性，设置后可直接点击跳转。

<Example class="flex gap-1">
  <div id="linkBtn1"></div>
</Example>

```html
<div id="linkBtn1"></div>

<script>
    new zui.Button('#linkBtn1', {text: '链接按钮', url: 'https://www.openzui.com/'});
</script>
```

## 禁用状态

按钮不可用状态。

<Example class="flex gap-1">
  <div id="disabledBtn1"></div>
  <div id="disabledBtn2"></div>
</Example>

```html
<div id="disabledBtn1"></div>
<div id="disabledBtn2"></div>

<script>
    new zui.Button('#disabledBtn1', {text: '默认按钮', disabled: true});
    new zui.Button('#disabledBtn2', {text: '主要按钮', type: 'primary', disabled: true});
</script>
```

## 加载中

提供 `loading` 属性，设置后在按钮上显示加载状态。

<Example class="flex gap-1">
  <div id="loadingBtn1"></div>
  <div id="loadingBtn2"></div>
  <div id="loadingBtn3"></div>
</Example>

```html
<div id="loadingBtn1"></div>
<div id="loadingBtn2"></div>
<div id="loadingBtn3"></div>

<script>
    new zui.Button('#loadingBtn1', {text: '按钮', loading: true});
    new zui.Button('#loadingBtn2', {text: '按钮', loading: true, loadingText: '加载中'});
    new zui.Button('#loadingBtn3', {text: '按钮', loading: true, loadingText: '加载中', loadingIcon: 'icon-spinner-indicator'});
</script>
```

## 尺寸

`Button` 组件提供除了默认值以外的四种尺寸，可以通过设置 `size` 属性在不同场景下选择合适的按钮尺寸。

<Example class="flex gap-1">
  <div id="sizeBtn1"></div>
  <div id="sizeBtn2"></div>
  <div id="sizeBtn3"></div>
  <div id="sizeBtn4"></div>
  <div id="sizeBtn5"></div>
</Example>

```html
<div id="sizeBtn1"></div>
<div id="sizeBtn2"></div>
<div id="sizeBtn3"></div>
<div id="sizeBtn4"></div>
<div id="sizeBtn5"></div>

<script>
    new zui.Button('#sizeBtn1', {text: '超小按钮', size: 'xs'});
    new zui.Button('#sizeBtn2', {text: '小按钮', size: 'sm'});
    new zui.Button('#sizeBtn3', {text: '默认按钮'});
    new zui.Button('#sizeBtn4', {text: '大按钮', size: 'lg'});
    new zui.Button('#sizeBtn5', {text: '超大按钮', size: 'xl'});
</script>
```

## 外观

配合使用[CSS 工具类](/utilities/)来实现不同按钮的外观。下面展示各种工具类的外观效果。

<Example class="flex gap-1">
  <div id="showBtn1"></div>
  <div id="showBtn2"></div>
  <div id="showBtn3"></div>
  <div id="showBtn4"></div>
  <div id="showBtn5"></div>
</Example>

```html
<div id="showBtn1"></div>
<div id="showBtn2"></div>
<div id="showBtn3"></div>
<div id="showBtn4"></div>
<div id="showBtn5"></div>

<script>
    new zui.Button('#showBtn1', {text: '文字按钮', className: 'ghost'});
    new zui.Button('#showBtn2', {text: '编辑', className: 'primary-outline'});
    new zui.Button('#showBtn3', {text: '删除', className: 'danger-outline'});
    new zui.Button('#showBtn4', {text: '编辑', className: 'primary-pale'});
    new zui.Button('#showBtn5', {text: '删除', className: 'danger-pale'});
</script>
```

## 选项

按钮的属性。

### `text`

标题。

* 类型：`ComponentChildren`；
* 必选：否。

### `icon`

左侧图标。

* 类型：`string | VNode`；
* 必选：否。

### `trailingIcon`

右侧图标。

* 类型：`string | VNode`；
* 必选：否。

### `hint`

按钮鼠标悬浮提示文案。

* 类型：`string`；
* 必选：否；

### `component`

标签类型

* 类型：`string | ComponentType`；
* 必选：否。

### `btnType`

工具栏项的类型。

* 类型：`string`；
* 必选：否；
* 可选项：`primary, secondary ...`。

### `size`

工具栏项的尺寸

* 类型：`string`；
* 必选：否；
* 可选项：`'xs' | 'sm' | 'lg' | 'xl'`。

### `className`

类名。

* 类型：`string`；
* 必选：否。

### `style`

样式。

* 类型：`ClassNameLike`；
* 必选：否。

### `url`

跳转链接地址。

* 类型：`string`；
* 必选：否。

### `target`

在何处打开链接地址。

* 类型：`string`；
* 必选：否；
* 可选项： `_self | _self | _black | _top | _parent` 。

### `disabled`

是否禁用。

* 类型：`boolean`；
* 必选：否；
* 默认： `false`。

### `active`

是否是激活状态。

* 类型：`boolean`；
* 必选：否；
* 默认： `false`。

### `loading`

加载中状态。

* 类型：`boolean`；
* 必选：否；
* 默认： `false`。

### `loadingIcon`

加载中状态的图标。

* 类型：`string`；
* 必选：否；

### `loadingText`

加载中状态的文案。

* 类型：`string`；
* 必选：否；

### `square`

是否展示为正方形。

* 类型：`boolean`；
* 必选：否；
* 默认： `true`。

### `caret`

工具栏项展示箭头。

* 类型：`string | boolean`；
* 必选：否；
* 可选项：`up | down | left | right | boolean`；
* 默认： `false`。

### `onClick`

鼠标点击的回调方法。

* 类型：`function`；
* 必选：否。

### `children`

子元素。

* 类型：`ComponentChildren | (() => ComponentChildren)`；
* 必选：否。

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Button('#btnExp', {text: '默认按钮'});
            new zui.Button('#roundedBtnExp', {text: '圆角按钮', className: 'circle'});
            
            new zui.Button('#primaryBtnExp', {text: '主要按钮', type: 'primary'});
            new zui.Button('#secondaryBtnExp', {text: '次要按钮', type: 'secondary'});
            new zui.Button('#successBtnExp', {text: '成功按钮', type: 'success'});
            new zui.Button('#warningBtnExp', {text: '提示按钮', type: 'warning'});
            new zui.Button('#dangerBtnExp', {text: '警告按钮', type: 'danger'});
            new zui.Button('#importantBtnExp', {text: '重要按钮', type: 'important'});
            new zui.Button('#specialBtnExp', {text: '特殊按钮', type: 'special'});
            
            new zui.Button('#iconBtnExp', {icon: 'icon-search', text: '查询'});
            new zui.Button('#closeBtnExp', {icon: 'icon-off', hint: '关闭'});
            new zui.Button('#closeGhostBtnExp', {icon: 'icon-off', hint: '关闭', className: 'ghost'});
            new zui.Button('#moreBtnExp', {trailingIcon: 'icon-ellipsis-v', text: '更多'});

            new zui.Button('#disabledBtn1', {text: '默认按钮', disabled: true});
            new zui.Button('#disabledBtn2', {text: '主要按钮', type: 'primary', disabled: true});

            new zui.Button('#loadingBtn1', {text: '按钮', loading: true});
            new zui.Button('#loadingBtn2', {text: '按钮', loading: true, loadingText: '加载中'});
            new zui.Button('#loadingBtn3', {text: '按钮', loading: true, loadingText: '加载中', loadingIcon: 'icon-spinner-indicator'});

            new zui.Button('#showBtn1', {text: '文字按钮', className: 'ghost'});
            new zui.Button('#showBtn2', {text: '编辑', className: 'primary-outline'});
            new zui.Button('#showBtn3', {text: '删除', className: 'danger-outline'});
            new zui.Button('#showBtn4', {text: '编辑', className: 'primary-pale'});
            new zui.Button('#showBtn5', {text: '删除', className: 'danger-pale'}); 

            new zui.Button('#linkBtn1', {text: '链接按钮', url: 'https://www.openzui.com/'});

            new zui.Button('#sizeBtn1', {text: '超小按钮', size: 'xs'});
            new zui.Button('#sizeBtn2', {text: '小按钮', size: 'sm'});
            new zui.Button('#sizeBtn3', {text: '默认按钮'});
            new zui.Button('#sizeBtn4', {text: '大按钮', size: 'lg'});
            new zui.Button('#sizeBtn5', {text: '超大按钮', size: 'xl'});
        });
    },
};
</script>