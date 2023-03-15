# 右键菜单

## 静态

```html:example
<div class="items-center justify-center h-32 primary-pale row" data-toggle="contextmenu">
    在此区域使用右键菜单
</div>
<menu class="contextmenu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
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
