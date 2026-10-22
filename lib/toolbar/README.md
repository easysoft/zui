# 工具栏

## 静态实现

```html:example
<nav class="toolbar">
  <button class="btn ghost toolbar-item active" type="button"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></button>
  <button class="btn ghost toolbar-item" type="button"><span class="text">动态</span></button>
  <button class="btn ghost toolbar-item" type="button"><span class="text">论坛</span></button><div class="toolbar-divider"></div>
  <button class="btn ghost toolbar-item" type="button"><i class="example-icon example-icon-rss" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%204a16%2016%200%200%201%2016%2016M4%2010a10%2010%200%200%201%2010%2010M4%2018h2v2H4z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">博客</span></button>
  <button class="btn ghost toolbar-item" type="button"><i class="example-icon example-icon-group" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%207a3%203%200%201%200%206%200%203%203%200%201%200-6%200M3%2021v-3c0-6%2014-6%2014%200v3zM17%204a3%203%200%200%201%200%206m2%204c3%201%203%204%203%207%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">关注我们</span></button><div class="toolbar-space" style="flex: 1 1 0%;"></div><div class="btn-group toolbar-btn-group">
  <button class="btn" type="button"><i class="example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">登录</span></button>
  <button class="btn" type="button"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">注册</span></button></div>
</nav>
```

## 动态创建

```html:example
<div id="toolbar"></div>
```

```js
const toolbar = new Toolbar('#toolbar', {
    items: [
        {text: '首页', icon: {"className": "example-icon example-icon-home", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}, active: true},
        {text: '动态'},
        {text: '论坛'},
        {type: 'divider'},
        {text: '博客', icon: {"className": "example-icon example-icon-rss", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%204a16%2016%200%200%201%2016%2016M4%2010a10%2010%200%200%201%2010%2010M4%2018h2v2H4z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
        {text: '关注我们', icon: {"className": "example-icon example-icon-group", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%207a3%203%200%201%200%206%200%203%203%200%201%200-6%200M3%2021v-3c0-6%2014-6%2014%200v3zM17%204a3%203%200%200%201%200%206m2%204c3%201%203%204%203%207%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
        {type: 'space', flex: 1},
        {
            type: 'btn-group',
            items: [
                {text: '登录', icon: {"className": "example-icon example-icon-user", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
                {text: '注册', icon: {"className": "example-icon example-icon-lock", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
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
        {text: '首页', icon: {"className": "example-icon example-icon-home", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}, active: true},
        {
            type: 'dropdown',
            icon: {"className": "example-icon example-icon-rss", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%204a16%2016%200%200%201%2016%2016M4%2010a10%2010%200%200%201%2010%2010M4%2018h2v2H4z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}},
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
            icon: {"className": "example-icon example-icon-group", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%207a3%203%200%201%200%206%200%203%203%200%201%200-6%200M3%2021v-3c0-6%2014-6%2014%200v3zM17%204a3%203%200%200%201%200%206m2%204c3%201%203%204%203%207%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}},
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
        {icon: {"className": "example-icon example-icon-home", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}, active: true},
        {type: 'divider'},
        {icon: {"className": "example-icon example-icon-rss", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%204a16%2016%200%200%201%2016%2016M4%2010a10%2010%200%200%201%2010%2010M4%2018h2v2H4z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
        {icon: {"className": "example-icon example-icon-group", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%207a3%203%200%201%200%206%200%203%203%200%201%200-6%200M3%2021v-3c0-6%2014-6%2014%200v3zM17%204a3%203%200%200%201%200%206m2%204c3%201%203%204%203%207%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
    ],
    onClickItem: (info) => {
        console.log('> iconToolbar.onClickItem', info);
    },
});
console.log('> iconToolbar', iconToolbar);
```
