# 右键菜单

## 弹出面板中的右键菜单

```html:example
<button type="button" class="btn" data-toggle="popover" data-target="$next">显示 Popover</button>
<div class="popover popup">
  <div class="arrow"></div>
  <div class="popover-heading">
    <div class="popover-title">标题</div>
    <button class="btn ghost square size-sm" data-dismiss="popover"><span class="close"></span></button>
  </div>
  <div class="popover-content">
    <div class="p-10 primary-pale" zui-create="contextMenu" data-target="#commonMenu">在此区域使用右键菜单</div>
  </div>
</div>
<menu class="contextmenu menu popup" id="commonMenu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```


## 被动打开目标菜单

```html:example
<div class="items-center justify-center h-32 primary-pale row" zui-create="contextMenu" data-target="$next">
    在此区域使用右键菜单
</div>
<menu class="contextmenu menu popup">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

```js
const contextMenu = new ContextMenu('#contextMenuToggle1');
```

## 动态

```html:example
<div class="items-center justify-center h-32 primary-pale row" id="menuToggle1">
    在此区域使用右键菜单
</div>
```

```js
const contextMenu = new ContextMenu('#menuToggle1', {
    items: [
        {text: '复制', icon: {"className": "i-copy", "aria-hidden": true}},
        {text: '粘贴', icon: {"className": "i-paste", "aria-hidden": true}},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: {"className": "i-upload", "aria-hidden": true}},
        {text: '导出', icon: {"className": "i-download", "aria-hidden": true}},
        {
            text: '保存', icon: {"className": "example-icon example-icon-save", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}, onClick: (event) => console.log('> menuItem.clicked', event),
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
    ],
    menu: {
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    },
});
```

## 主动式

```html:example
<div class="items-center justify-center p-6 row">
  <button type="button" class="rounded btn primary" id="menuToggle2">点击打开菜单</button>
</div>
```

```js
document.getElementById('menuToggle2')?.addEventListener('click', (event) => {
    const contextmenu = ContextMenu.show({
        event,
        items: [
            {text: '复制', icon: {"className": "i-copy", "aria-hidden": true}},
            {text: '粘贴', icon: {"className": "i-paste", "aria-hidden": true}},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: {"className": "i-upload", "aria-hidden": true}},
            {text: '导出', icon: {"className": "i-download", "aria-hidden": true}},
            {text: '保存', icon: {"className": "example-icon example-icon-save", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%203h13l4%204v14H3V3zM7%203v6h9V3M7%2021v-8h10v8%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}, onClick: (e) => console.log('> menuItem.clicked', e)},
        ],
        menu: {
            onClickItem: (info) => {
                console.log('> menu.onClickItem', info);
            },
        },
    });
    console.log('> contextmenu', contextmenu);
});
```
