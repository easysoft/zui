# 工具栏

## 静态实现

```html:example
<nav class="toolbar">
  <button class="btn ghost toolbar-item active" type="button"><i class="icon icon-home"></i><span class="text">首页</span></button>
  <button class="btn ghost toolbar-item" type="button"><span class="text">动态</span></button>
  <button class="btn ghost toolbar-item" type="button"><span class="text">论坛</span></button><div class="toolbar-divider"></div>
  <button class="btn ghost toolbar-item" type="button"><i class="icon icon-rss"></i><span class="text">博客</span></button>
  <button class="btn ghost toolbar-item" type="button"><i class="icon icon-group"></i><span class="text">关注我们</span></button><div class="toolbar-space" style="flex: 1 1 0%;"></div><div class="btn-group toolbar-btn-group">
  <button class="btn" type="button"><i class="icon icon-user"></i><span class="text">登录</span></button>
  <button class="btn" type="button"><i class="icon icon-lock"></i><span class="text">注册</span></button></div>
</nav>
```

## 动态创建

```html:example
<div id="toolbar"></div>
```

```js
const toolbar = new Toolbar('#toolbar', {
    items: [
        {text: '首页', icon: 'icon-home', active: true},
        {text: '动态'},
        {text: '论坛'},
        {type: 'divider'},
        {text: '博客', icon: 'icon-rss'},
        {text: '关注我们', icon: 'icon-group'},
        {type: 'space', flex: 1},
        {
            type: 'btn-group',
            items: [
                {text: '登录', icon: 'icon-user'},
                {text: '注册', icon: 'icon-lock'},
            ],
        },
    ],
    onClickItem: (info) => {
        console.log('> toolbar.onClickItem', info);
    },
});
console.log('> toolbar', toolbar);
```

## 下拉菜单


```html:example
<div id="dropdownToolbar"></div>
```

```js
const dropdownToolbar = new Toolbar('#dropdownToolbar', {
    items: [
        {text: '首页', icon: 'icon-home', active: true},
        {
            type: 'dropdown',
            icon: 'icon-rss',
            dropdown: {
                items: [
                    {text: '查看'},
                    {text: '订阅'},
                    {text: '取消订阅'},
                ],
            },
        },
        {type: 'divider'},
        {
            type: 'dropdown',
            text: '关于我们',
            icon: 'icon-group',
            dropdown: {
                items: [
                    {text: '关于'},
                    {text: '我们是谁'},
                ],
            },
        },
    ],
    onClickItem: (info) => {
        console.log('> dropdownToolbar.onClickItem', info);
    },
});
console.log('> dropdownToolbar', dropdownToolbar);
```


## 仅图标

```html:example
<div id="iconToolbar"></div>
```

```js
const iconToolbar = new Toolbar('#iconToolbar', {
    items: [
        {icon: 'icon-home', active: true},
        {type: 'divider'},
        {icon: 'icon-rss'},
        {icon: 'icon-group'},
    ],
    onClickItem: (info) => {
        console.log('> iconToolbar.onClickItem', info);
    },
});
console.log('> iconToolbar', iconToolbar);
```
