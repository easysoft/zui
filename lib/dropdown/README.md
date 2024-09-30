# 下拉菜单

## 静态菜单

```html:example: -flex -gap-3 overflow-visible
<button class="btn" type="button" data-toggle="dropdown" data-target="#dropdownMenu1">菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu" id="dropdownMenu1">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
  <li class="menu-item not-hide-menu"><a>点击此项不关闭菜单</a></li>
</menu>
```

## 动态下拉菜单

通过 `zui-toggle-dropdown` 初始化：

```html:example: -flex -gap-3 overflow-visible
<button class="ghost btn btn-default" data-toggle="dropdown" zui-toggle-dropdown='{
  "placement":"bottom-end",
  "menu":{
    "items":[
      {"text":"转入任务","url":"\/index.php?m=execution&f=importTask&execution=2064"},
      {"text":"导入Bug","url":"\/index.php?m=execution&f=importBug&execution=2064","className":"importBug","data-app":""}
    ]
  }
}' type="button">
  <i class="icon icon-import"></i><span class="text">导入</span><span class="caret"></span>
</button>
```

通过 JS 动态弹出下拉菜单

```html:example: -flex -gap-3 overflow-visible
<button class="btn" type="button" id="dropdownToggle">动态下拉菜单 <span class="caret"></span></button>
```

```js
const dropdown = new Dropdown('#dropdownToggle', {
    arrow: true,
    menu: {
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {
                text: '保存',
                icon: 'icon-save',
                onClick: (event) => console.log('> menuItem.clicked', event),
                items: [
                    {text: '保存到云端'},
                    {
                        text: '下载到本地',
                        items: [
                            {text: '下载为 PDF'},
                            {text: '下载为 Excel'},
                        ],
                    },
                ],
            },
            {text: '点击此项不关闭菜单', className: 'not-hide-menu'},
        ],
        onClickItem: (info) => {
            console.log('> dropdown.onClickItem', info);
        },
    },
});
console.log('> dropdown', dropdown);
```

## 显示箭头

```html:example: -flex -gap-3 overflow-visible
<button class="btn" type="button" data-toggle="dropdown" data-arrow="true">显示箭头 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

```html:example: -flex -gap-3 overflow-visible
<button class="btn" type="button" data-toggle="dropdown" data-arrow="12">自定义箭头大小 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

## 鼠标悬停展开菜单

添加属性 `[data-trigger="hover"]` 实现鼠标悬停展开菜单

```html:example: -flex -gap-3
<button class="btn" type="button" data-toggle="dropdown" data-trigger="hover">鼠标悬停展开菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

## 弹出方向

通过 `data-placement` 控制弹出方向。

```html:example: -flex -gap-3 -flex-wrap
<button class="btn" type="button" data-toggle="dropdown" data-placement="top-start" data-arrow="true">上方左侧对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个上方右侧对齐操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="top" data-arrow="true">上方居中对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="top-end" data-arrow="true">上方右侧对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="bottom-start" data-arrow="true">下方左侧对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="bottom" data-arrow="true">下方居中对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="bottom-end" data-arrow="true">下方右侧对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="left-start" data-arrow="true">左侧上方 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="left" data-arrow="true">左侧居中对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="left-end" data-arrow="true">左侧下方对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="right-start" data-arrow="true">右侧上方 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="right" data-arrow="true">右侧居中对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>

<button class="btn" type="button" data-toggle="dropdown" data-placement="right-end" data-arrow="true">右侧下方对齐 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

## 自定义菜单

通常情况下下拉菜单列表使用 `<menu>` 元素，你也可以替换为其他元素或内容

```html:example: -flex -gap-3
<button class="btn" type="button"
    data-toggle="dropdown">自定义下拉菜单 <span class="caret"></span></button>
<div class="dropdown-menu menu">
    <p class="px-3">自定义内容</p>
</div>
```

## 禁用的菜单项

为菜单项` <li> `添加` .disabled` 类即可获得禁用外观。

```html:example: -flex -gap-3
<button class="btn" type="button"
    data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a class="disabled">被禁用的操作</a></li>
</menu>
```

## 标题和分割线

在 `.dropdown-menu` 内使用 `.dropdown-header `来显示标题，使用 `.divider` 来显示分割线。

```html:example: -flex -gap-3
<button class="btn" type="button"
    data-toggle="dropdown">菜单按钮 <span class="caret"></span></button>
<menu class="dropdown-menu menu">
  <li class="menu-heading">下拉菜单标题</li>
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-divider"></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a>修改</a></li>
</menu>
```
