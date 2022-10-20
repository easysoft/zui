# 右键菜单

## 静态

```html:example
<div class="h-32 primary-pale row items-center justify-center" data-toggle="contextmenu">
    在此区域使用右键菜单
</div>
<menu class="contextmenu menu">
  <li><a class="menu-item" href="###">操作</a></li>
  <li><a class="menu-item" href="###">另一个操作</a></li>
  <li><a class="menu-item" href="###">更多操作</a></li>
</menu>
```

## 动态

```html:example
<div class="h-32 primary-pale row items-center justify-center" id="menuToggle1">
    在此区域使用右键菜单
</div>
```

```js
const contextMenu = new ContextMenu('#menuToggle1', {
    items: [
        {title: '复制', icon: 'icon-copy'},
        {title: '粘贴', icon: 'icon-paste'},
        {title: '剪切'},
        {type: 'heading', title: '更多操作'},
        {title: '导入', icon: 'icon-upload-alt'},
        {title: '导出', icon: 'icon-download-alt'},
        {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
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
<div class="p-6 row items-center justify-center">
  <button type="button" class="btn primary rounded" id="menuToggle2">点击打开菜单</button>
</div>
```

```js
document.getElementById('menuToggle2')?.addEventListener('click', (event) => {
    const contextmenu = ContextMenu.show({
        event,
        items: [
            {title: '复制', icon: 'icon-copy'},
            {title: '粘贴', icon: 'icon-paste'},
            {title: '剪切'},
            {type: 'heading', title: '更多操作'},
            {title: '导入', icon: 'icon-upload-alt'},
            {title: '导出', icon: 'icon-download-alt'},
            {title: '保存', icon: 'icon-save', onClick: (e) => console.log('> menuItem.clicked', e)},
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
