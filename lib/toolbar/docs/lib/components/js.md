# 工具栏生成器

基于操作菜单 [操作菜单](/lib/components/action-menu/index) 实现的组件，与特定的功能关联起来使用，跟导航类似，但比导航更轻量更灵活。

## 使用方法

<Example class="gap-2 col">
  <div id="toolbarExp"></div>
  <div id="toolbarExp2"></div>
</Example>

```html
<div id="toolbarExp"></div>
<div id="toolbarExp2"></div>

<script>
new zui.Toolbar('#toolbarExp', {
    items: [
        {
            type: 'dropdown',
            icon: 'icon-ellipsis-h',
            caret: false,
            hint: '更多',
            dropdown: {
                items: [
                    {text: '取消置顶'},
                    {text: '开启免打扰'},
                    {text: '取消订阅'},
                ],
            },
        },
        {icon: 'icon-phone', hint: '发起会议', className: 'text-secondary'},
        {icon: 'icon-chat-dot', hint: '消息记录', className: 'text-warning'},
        {icon: 'icon-step-forward', hint: '打开侧边栏', className: 'text-important'},
    ],
    onClickItem: (info) => {
        console.log('> toolbar.onClickItem', info);
    },
});
new zui.Toolbar('#toolbarExp2', {
    items: [
        {text: '全部'},
        {text: '未关闭', active: true, className: 'primary-pale font-bold'},
        {text: '未开始'},
        {text: '进行中'},
        {text: '已挂起'},
        {text: '已关闭'},
        {text: '搜索', icon: 'icon-search'},
    ],
});
</script>
```

## 结合编辑器使用

<Example>
  <div id="editToolbar"></div>
</Example>

```html
<div id="editToolbar"></div>

<script>
new zui.Toolbar('#editToolbar', {
    items: [
        {
            type: 'dropdown',
            icon: 'icon-header',
            caret: true,
            hint: '段落',
            dropdown: {
                items: [
                    {text: '标题1'},
                    {text: '标题2'},
                    {text: '标题3'},
                    {text: '正文'},
                ],
            },
        },
        {
            type: 'dropdown',
            icon: 'icon-font',
            caret: true,
            hint: '字体',
            dropdown: {
                items: [
                    {text: '宋体'},
                    {text: '新宋体'},
                    {text: '仿宋体'},
                    {text: '黑体'},
                ],
            },
        },
        {icon: 'icon-bold', hint: '粗体'},
        {icon: 'icon-italic', hint: '斜体'},
        {icon: 'icon-underline', hint: '下划线'},
        {icon: 'icon-strikethrough', hint: '消除线'},
        {icon: 'icon-eraser', hint: '清楚格式'},
        {icon: 'icon-align-justify', hint: '全屏'},
        {icon: 'icon-align-left', hint: '左对齐'},
        {icon: 'icon-list', hint: '项目符号'},
        {icon: 'icon-smile', hint: '插入表情'},
        {icon: 'icon-picture', hint: '图片'},
        {icon: 'icon-link', hint: '超级链接'},
        {icon: 'icon-reply', hint: '后退'},
        {icon: 'icon-share-alt', hint: '前进'},
        {icon: 'icon-resize', hint: '全屏'},


    ],
});
</script>
```

## 展示分割线

工具栏展示分割线。

<Example>
  <div id="dividerToolbar"></div>
</Example>

```html
<div id="dividerToolbar"></div>

<script>
new zui.Toolbar('#dividerToolbar', {
    items: [
        {icon: 'icon-smile', hint: '表情'},
        {icon: 'icon-picture', hint: '图片'},
        {icon: 'icon-cut', hint: '截取屏幕'},
        {type: 'divider'},
        {icon: 'icon-folder-close-alt', hint: '文件'},
        {icon: 'icon-code', hint: '代码'},
        {icon: 'icon-question-sign', hint: '技巧'},
    ],
});
</script>
```

## 展示间距

工具栏添加间距展示想要的布局。

<Example>
  <div id="spaceToolbar1"></div>
</Example>

```html
<div id="spaceToolbar1"></div>

<script>
 new zui.Toolbar('#spaceToolbar1', {
    items: [
        {icon: 'icon-ellipsis-v', hint: '菜单'},
        {type: 'space', space: 10},
        {icon: 'icon-check-plus', hint: '添加'},
    ],
});
</script>
```

## 禁用

<Example class="gap-2 col">
  <div id="disabledToolbar"></div>
</Example>

```js
new zui.Toolbar('#disabledToolbar', {
    btnProps: {btnType: 'primary'},
    items: [
        {icon: 'icon-smile', hint: '表情'},
        {icon: 'icon-picture', hint: '图片'},
        {icon: 'icon-code', hint: '代码', disabled: true},
        {icon: 'icon-question-sign', hint: '技巧'},
    ],
    onClickItem: (info) => {
        console.log('> disabledToolbar.onClickItem', info);
    },
});
```

## 引入

### 通过 npm

```js
import {Toolbar} from 'zui/toolbar';

const toolbar = new Toolbar(element, options);
```

### 通过全局对象 `zui`

```js
const toolbar = new zui.Toolbar(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {Toolbar} from 'zui/toolbar/main-react';

render(element, <Toolbar {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).toolbar(options);

const toolbar = $(element).data('zui.toolbar');
```

## 选项

在 [操作菜单](/lib/components/action-menu/index.html#选项) 选项基础上添加新的参数选项。

### `wrap`

限制工具栏按钮过多超出时是否换行。

* 类型：`boolean`；
* 必选：否；
* 默认值：`false`。

### `gap`

自定义工具栏按钮的间距，与 `.toolbar` 同级生成 [`.gap-*`](/utilities/flex/utilities/gap.html) 的工具类控制按钮间距。

* 类型：`number | string`
* 必选：否

### `items`

继承了 [操作菜单](/lib/components/action-menu/index.html#选项) 选项和按钮选项，同时添加了其他选项。

* 类型：<code>[ToolbarItemOptions](#toolbaritemoptions)[] </code>；
* 必选：是。

### `btnProps`

继承按钮组件的属性， 统一处理工具栏按钮属性外观等。

* 类型：<code>[ButtonProps](/lib/components/button/js.html#选项) </code>；
* 必选：否。

### `itemRender`

指定一个回调函数用于对组件渲染进行自定义。

**参数**：`items` 选项的单个配置；

**返回值**：`items` 选项的单个配置。

### `beforeRender`

指定一个回调函数在渲染之前调用，可重新配置组件选项。

**参数**：用户为按钮组组件件设置的 `options`；

**返回值**：组件选项数据。


### `afterRender`

指定一个回调函数在渲染之后调用。

**参数：**

* `firstRender`：判断是否第一次渲染；
* `menu`：组件信息。

### `beforeDestroy`

指定一个回调函数在组件销毁之前调用，无参数。

## API

### `ToolbarItemOptions`

```ts
type ToolbarItemOptions = ToolbarItemProps | ToolbarDropdownProps | ToolbarBtnGroupProps | ToolbarDividerProps | ToolbarSpaceProps;
```

#### `ToolbarItemProps`

**选项：**

继承了操作菜单的 [ActionItemProps](/lib/components/action-menu/index.html#选项) 选项和按钮的  [ButtonProps](/lib/components/button/js.html#选项) ，同时添加了其他选项 `btnType`，用来设置按钮外观类型。

##### `btnType`

设置工具栏单个按钮的外观类型。

* 类型：`string`；
* 必选：否。

#### `ToolbarDropdownProps`

**选项：**

在原有属性基础上固定 `type` 属性，并继承了下拉菜单的 [DropdownButtonOptions](/lib/components/dropdown/index) 选项，同时添加了其他选项。

##### `type`

* 类型：`string`；
* 属性值：`dropdown`；
* 必选：是。

##### `children`

* 类型：<code>[DropdownButtonOptions](/lib/components/dropdown/index) </code>；
* 必选：是。

#### `ToolbarBtnGroupProps`

**选项：**

在原有属性基础上固定 `type` 属性，并继承了操作菜单的 [ActionBasicProps](/lib/components/action-menu/index.html#选项)  选项和按钮组的 [BtnGroupOptions](/lib/components/btn-group/js.html#选项)选项，同时添加了其他选项。

##### `type`

* 类型：`string`；
* 属性值：`btn-group`；
* 必选：是。

#### `ToolbarDividerProps`

**选项：**

继承了工具栏的 [ActionDividerProps](/lib/components/action-menu/index.html#选项) 选项。

#### `ToolbarSpaceProps`

**选项：**

继承了工具栏的 [ActionSpaceProps](/lib/components/action-menu/index.html#选项) 选项。

##### `type`

* 类型：`string`；
* 属性值：`space`；
* 必选：是。

##### `space`

* 类型：`number | [leading: number, trailing: number]`；
* 必选：否。

##### `flex`

* 类型：`number | 'auto' | 'none'`；
* 必选：否。

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Toolbar('#toolbarExp', {
                items: [
                    {
                        type: 'dropdown',
                        icon: 'icon-ellipsis-h',
                        caret: false,
                        hint: '更多',
                        dropdown: {
                            items: [
                                {text: '取消置顶'},
                                {text: '开启免打扰'},
                                {text: '取消订阅'},
                            ],
                        },
                    },
                    {icon: 'icon-phone', hint: '发起会议', className: 'text-secondary'},
                    {icon: 'icon-chat-dot', hint: '消息记录', className: 'text-warning'},
                    {icon: 'icon-step-forward', hint: '打开侧边栏', className: 'text-important'},
                ],
                onClickItem: (info) => {
                    console.log('> toolbar.onClickItem', info);
                },
            });
            new zui.Toolbar('#toolbarExp2', {
                items: [
                    {text: '全部'},
                    {text: '未关闭', active: true, className: 'primary-pale font-bold'},
                    {text: '未开始'},
                    {text: '进行中'},
                    {text: '已挂起'},
                    {text: '已关闭'},
                    {text: '搜索', icon: 'icon-search'},
                ],
            });
            new zui.Toolbar('#editToolbar', {
                items: [
                    {
                        type: 'dropdown',
                        icon: 'icon-header',
                        caret: true,
                        hint: '段落',
                        dropdown: {
                            items: [
                                {text: '标题1'},
                                {text: '标题2'},
                                {text: '标题3'},
                                {text: '正文'},
                            ],
                        },
                    },
                    {
                        type: 'dropdown',
                        icon: 'icon-font',
                        caret: true,
                        hint: '字体',
                        dropdown: {
                            items: [
                                {text: '宋体'},
                                {text: '新宋体'},
                                {text: '仿宋体'},
                                {text: '黑体'},
                            ],
                        },
                    },
                    {icon: 'icon-bold', hint: '粗体'},
                    {icon: 'icon-italic', hint: '斜体'},
                    {icon: 'icon-underline', hint: '下划线'},
                    {icon: 'icon-strikethrough', hint: '消除线'},
                    {icon: 'icon-eraser', hint: '清楚格式'},
                    {icon: 'icon-align-justify', hint: '全屏'},
                    {icon: 'icon-align-left', hint: '左对齐'},
                    {icon: 'icon-list', hint: '项目符号'},
                    {icon: 'icon-smile', hint: '插入表情'},
                    {icon: 'icon-picture', hint: '图片'},
                    {icon: 'icon-link', hint: '超级链接'},
                    {icon: 'icon-reply', hint: '后退'},
                    {icon: 'icon-share-alt', hint: '前进'},
                    {icon: 'icon-resize', hint: '全屏'},


                ],
            });
            new zui.Toolbar('#dividerToolbar', {
                items: [
                    {icon: 'icon-smile', hint: '表情'},
                    {icon: 'icon-picture', hint: '图片'},
                    {icon: 'icon-cut', hint: '截取屏幕'},
                    {type: 'divider'},
                    {icon: 'icon-folder-close-alt', hint: '文件'},
                    {icon: 'icon-code', hint: '代码'},
                    {icon: 'icon-question-sign', hint: '技巧'},
                ],
            });
            new zui.Toolbar('#spaceToolbar1', {
                items: [
                    {icon: 'icon-ellipsis-v', hint: '菜单'},
                    {type: 'space', space: 10},
                    {icon: 'icon-check-plus', hint: '添加'},
                ],
            });

            new zui.Toolbar('#disabledToolbar', {
                btnProps: {className: 'text-primary'},
                items: [
                    {icon: 'icon-smile', hint: '表情'},
                    {icon: 'icon-picture', hint: '图片'},
                    {icon: 'icon-code', hint: '代码', disabled: true},
                    {icon: 'icon-question-sign', hint: '技巧'},
                ],
                onClickItem: (info) => {
                    console.log('> disabledToolbar.onClickItem', info);
                },
            });
        });
    },
};
</script>
