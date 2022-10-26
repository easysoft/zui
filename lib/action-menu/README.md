# 操作菜单

操作菜单是一个不包含具体外观的通用组件，需要通过 JS 动态调用，通常用于构建更复杂的组件，例如菜单、工具栏、列表等。

## 组件模式

```html:example
<div id="actionMenu"></div>
```

```js
const menu = new Menu('#actionMenu', {
    items: [
        {title: '复制', icon: 'icon-copy'},
        {title: '粘贴', icon: 'icon-paste'},
        {title: '剪切'},
        {type: 'heading', title: '更多操作'},
        {title: '导入', icon: 'icon-upload-alt'},
        {title: '导出', icon: 'icon-download-alt'},
        {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
    ],
    onClickItem: (info) => {
        console.log('> menu.onClickItem', info);
    },
});
console.log('> menu', menu);
```
