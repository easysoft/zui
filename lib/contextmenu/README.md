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
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {
            text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event),
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
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {text: '保存', icon: 'icon-save', onClick: (e) => console.log('> menuItem.clicked', e)},
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
