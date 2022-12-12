# 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基本用法

点击按钮，展开更多操作。如需默认展开，可在 `.dropdown` 类上添加 `.open` 类

<script setup>
  const arrayPlacement = [
    {placement: 'top-start', name: '上方左侧对齐'},
    {placement: 'top', name: '上方居中对齐'},
    {placement: 'top-end', name: '上方右侧对齐'},
    {placement: 'bottom-start', name: '下方左侧对齐'},
    {placement: 'bottom', name: '下方居中对齐'},
    {placement: 'bottom-end', name: '下方右侧对齐'},
    {placement: 'left-start', name: '左侧上方对齐'},
    {placement: 'left', name: '左侧居中对齐'},
    {placement: 'left-end', name: '左侧下方对齐'},
    {placement: 'right-start', name: '右侧上方对齐'},
    {placement: 'right', name: '右侧居中对齐'},
    {placement: 'right-end', name: '右侧下方对齐'},
    {placement: 'auto', name: '自动方向'},
  ]
</script>

<Example class="flex gap-4">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <menu class="dropdown-menu menu">
      <li class="menu-item"><a>操作</a></li>
      <li class="menu-item"><a>另一个操作</a></li>
      <li class="menu-item"><a>更多操作</a></li>
  </menu>
</Example>

```html
<button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
    <li class="menu-item"><a>操作</a></li>
    <li class="menu-item"><a>另一个操作</a></li>
    <li class="menu-item"><a>更多操作</a></li>
</menu>
```

## 显示箭头

通过给下拉菜单菜单按钮添加 `data-arrow="true"` 来使下拉菜单展示箭头

<Example>
  <button class="btn" type="button" data-toggle="dropdown" data-arrow="true">菜单按钮 <span class="caret"></span></button>
  <menu class="dropdown-menu menu">
    <li class="menu-item"><a>操作</a></li>
    <li class="menu-item"><a>另一个操作</a></li>
    <li class="menu-item"><a>更多操作</a></li>
  </menu>
</Example>

```html
  <button data-arrow="true" ... > 
    ... 
  </button>
  ...
```

### 改变箭头大小

通过给下拉菜单按钮添加 `data-arrow={size}` 来控制下拉菜单的箭头的大小

<Example class="flex">
  <div v-for="item in 4" class="flex-1">
    <div class="font-bold pb-4">
      {{'data-arrow = ' + 4*item }}
    </div>
    <button class="btn" type="button" data-toggle="dropdown" :data-arrow="4 * item">菜单按钮 <span class="caret"></span></button>
    <menu class="dropdown-menu menu">
      <li class="menu-item"><a>操作</a></li>
      <li class="menu-item"><a>另一个操作</a></li>
      <li class="menu-item"><a>更多操作</a></li>
    </menu>
  </div>
</Example>

```html
<button data-arrow = 4 ...>
</button>
...
```

## 鼠标悬停展开菜单

添加类名 `.dropdown-trigger="hover"` 实现鼠标悬停展开菜单

<Example>
  <button class="btn" type="button" data-toggle="dropdown" data-trigger="hover">菜单按钮 <span class="caret"></span></button>
  <menu class="dropdown-menu menu">
    <li class="menu-item"><a>操作</a></li>
    <li class="menu-item"><a>另一个操作</a></li>
    <li class="menu-item"><a>更多操作</a></li>
  </menu>
</Example>

```html
<button class="btn" type="button" data-toggle="dropdown">鼠标悬停展开菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu">
    <li><a>操作</a></li>
    <li><a>另一个操作</a></li>
    <li><a>更多操作</a></li>
</menu>
```

## 浮动方向

 通过 `data-placement=*` 控制弹出方向。

<Example class="flex flex-wrap gap-4">
  <div v-for = "item in arrayPlacement">
    <button class="btn" type="button" data-toggle="dropdown" :data-placement="item.placement" data-arrow="true">{{item.name}}<span class="caret"></span></button>
    <menu class="dropdown-menu menu">
      <li class="menu-item"><a>操作</a></li>
      <li class="menu-item"><a>另一个操作</a></li>
      <li class="menu-item"><a>更多操作</a></li>
    </menu>
    <div class="w-48 py-2 font-bold text-sm">
    {{ 'data-placement = ' + item.placement}}
    </div>
  </div>
</Example>

```html
<button data-placement="*"> ... </button>
...
```

## 多级子菜单

在 `.dropdown-menu` 内的 `<li>` 内包含另一个 `.dropdown-menu` 从而实现多级子菜单。包含子菜单的 `<li>` 需要添加额外的类 `.dropdown-submenu` 。
一般情况下子菜单会在菜单项的右侧显示，但也可以为作为子菜单的 `.dropdown-menu` 类添加 `.expand-left` 类来使得子菜单在左侧显示

<Example>
  <button class="btn" type="button" data-toggle="dropdown" id="dropdownToggle" > 多级菜单按钮 </button>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const dropdown = new zui.Dropdown('#dropdownToggle', {
                arrow: true,
                menu: {
                    items: [
                        {text: '复制', icon: 'icon-copy'},
                        {text: '粘贴', icon: 'icon-paste'},
                        {text: '剪切'},
                        {text: '更多操作', items:[
                            {text: '导入', icon: 'icon-upload-alt'},
                            {text: '导出', icon: 'icon-download-alt'},
                            {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
                            {text: '点击此项不关闭菜单', className: 'not-hide-menu'},
                        ]},
                    ],
                },
            });
            console.log(dropdown, 'dropdown');
        })
    }
}
</script>
```html
<Example>
  <button class="btn" type="button" data-toggle="dropdown" id="dropdownToggle" > 多级菜单按钮 </button>
</Example>

<script>
    const dropdown = new zui.Dropdown('#dropdownToggle', {
        arrow: true,
        menu: {
            items: [
                {text: '复制', icon: 'icon-copy'},
                {text: '粘贴', icon: 'icon-paste'},
                {text: '剪切'},
                {text: '更多操作', items:[
                    {text: '导入', icon: 'icon-upload-alt'},
                    {text: '导出', icon: 'icon-download-alt'},
                    {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
                    {text: '点击此项不关闭菜单', className: 'not-hide-menu'},
                ]},
            ],
        },
    });
    console.log(dropdown, 'dropdown');
</script>

```

## 自定义菜单

通常情况下下拉菜单列表使用 `<menu>` 元素，你也可以替换为其他元素或内容

<Example class="flex gap-4">
    <button class="btn" type="button" data-toggle="dropdown">自定义下拉菜单 <span class="caret"></span></button>
    <menu class="dropdown-menu custom flex-1 flex-wrap bg-canvas">
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">5</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">10</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">15</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">20</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">25</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">30</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">35</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">40</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">45</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">50</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">55</span>
        <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">60</span>
    </menu>
</Example>

```html
  <button class="btn" type="button" data-toggle="dropdown">自定义下拉菜单 <span class="caret"></span></button>
  <menu class="dropdown-menu custom flex-1 flex-wrap bg-canvas">
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">5</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">10</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">15</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">20</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">25</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">30</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">35</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">40</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">45</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">50</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">55</span>
      <span class="w-1/3 justify-center border border-r-0 border-b-0 border-dotted inline-flex">60</span>
  </menu>
```

## 禁用的菜单项

为菜单项 `<li>` 添加 `.disabled` 类即可获得禁用外观。

<Example class="flex gap-4">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <menu class="dropdown-menu menu">
      <li class="menu-item"><a>操作</a></li>
      <li class="menu-item disabled"><a>被禁用的操作</a></li>
  </menu>
</Example>

```html
<button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
    <li class="menu-item"><a>操作</a></li>
    <li class="menu-item disabled"><a>被禁用的操作</a></li>
</menu>
```

## 标题和分割线

在 `.dropdown-menu` 内 `li` 标签使用 `.dropdown-header`类 来显示标题，使用 `.menu-divider` 来显示分割线。

<Example class="flex gap-4">
  <button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
  <menu class="dropdown-menu menu">
      <li class="menu-heading">下拉菜单标题</li>
      <li class="menu-item"><a>操作</a></li>
      <li class="menu-item"><a>另一个操作</a></li>
      <li class="menu-divider"></li>
      <li class="menu-heading">更多操作</li>
      <li class="menu-item"><a>修改</a></li>
  </menu>
</Example>

```html
<button class="btn" type="button" data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
    <li class="menu-heading">下拉菜单标题</li>
    <li class="menu-item"><a>操作</a></li>
    <li class="menu-item"><a>另一个操作</a></li>
    <li class="menu-divider"></li>
    <li class="menu-heading">更多操作</li>
    <li class="menu-item"><a>修改</a></li>
</menu>
```

## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| -------------|:-------------:| ----- |
| `dropdown`         | 实体类 | 元素作为下拉菜单组件 |
| `dropdown-menu`    | 实体类 | 元素作为下拉菜单列表   |
| `dropdown-header`  | 实体类 | 元素作为下拉菜单中的标题 |
| `dropdown-submenu` | 实体类 | 元素作为下拉菜单子菜单列表 |
| `caret`            | 实体类 | 元素作为下拉菜单icon图标 |
| `dropup`           | 修饰类 | 下拉框浮动方向为上方 |
| `menu-align-right` | 修饰类 | 下拉框展开后右侧对齐 |
| `expand-left`      | 修饰类 | 子菜单左侧显示 |

## CSS 变量

| 变量名称 | 变量含义 |
| -------- | ---------|
| --dropmenu-radius       | 下拉菜单圆角 |
| --dropmenu-border-color | 下拉菜单边框颜色 |
| --dropmenu-bg           | 下拉菜单背景颜色 |
| --dropmenu-active-color | 下拉菜单条目激活状态文字颜色 |
| --dropmenu-active-bg    | 下拉菜单条目激活状态背景颜色 |


## API

### `DropdownOptions`

操作菜单定义对象。

#### `trigger`

触发方式

* 类型：`click | hover | manual`；
* 必选：否。

#### `arrow`

箭头大小 为 true 则为默认12

* 类型：`boolean | number`；
* 必选：否。

#### `offset`

偏移量

* 类型：`number`；
* 必选：否。

#### `menu`

菜单对象 
详细配置可参考 [菜单](/lib/components/menu/index.html)。