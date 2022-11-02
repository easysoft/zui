# 操作菜单

操作菜单是一个不包含具体外观的通用组件，需要通过 JS 动态调用，通常用于构建更复杂的组件，例如菜单、工具栏、导航、列表等。

## 组件模式

使用组件类 `ActionMenu` 来动态创建一个操作菜单。默认情况下，生成的结构是没有样式的。

```html:example
<div id="actionMenu"></div>
```

```js
const menu = new ActionMenu('#actionMenu', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'divider'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
    ],
    onClickItem: (info) => {
        console.log('> menu.onClickItem', info);
    },
});
console.log('> menu', menu);
```

最终生成的静态结构如下：

```html
<div id="actionMenu">
  <menu class="action-menu">
    <li class="action-menu-item"><a><i class="icon icon-copy"></i><span class="text">复制</span></a></li>
    <li class="action-menu-item"><a><i class="icon icon-paste"></i><span class="text">粘贴</span></a></li>
    <li class="action-menu-item"><a><span class="text">剪切</span></a></li>
    <li class="divider"></li>
    <li class="action-menu-heading"><div>更多操作</div></li>
    <li class="action-menu-item"><a><i class="icon icon-upload-alt"></i><span class="text">导入</span></a></li>
    <li class="action-menu-item"><a><i class="icon icon-download-alt"></i><span class="text">导出</span></a></li>
    <li class="action-menu-item"><a><i class="icon icon-save"></i><span class="text">保存</span></a></li></menu>
</div>
```

## 多层级操作菜单

使用组件类 `ActionMenuNested` 来动态创建一个多层级操作菜单。

```html:example
<div id="nestedActionMenu"></div>
```

## 自定义类名

默认类名为 `action-menu`，即如下结构：

```html
<menu class="action-menu">
  <li><a class="action-menu-item">...</a></li>
</menu>
```

使用 `name` 选项来自定义生成的类名，例如将 `name` 设置为 `nav` 来生成导航：

```html:example
<div id="nav"></div>
```

```js
const nav = new ActionMenu('#nav', {
    name: 'nav',
    items: [
        {text: '首页', icon: 'icon-home'},
        {text: '动态'},
        {text: '论坛'},
        {type: 'divier'},
        {text: '博客', icon: 'icon-rss'},
        {text: '关注我们', icon: 'icon-user-group'},
    ],
    onClickItem: (info) => {
        console.log('> nav.onClickItem', info);
    },
});
console.log('> nav', nav);
```

最终生成的静态结构：

```html
<div id="nav">
  <menu class="nav">
    <li class="nav-item"><a><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">动态</span></a></li>
    <li class="nav-item"><a><span class="text">论坛</span></a></li>
    <li class="nav-divier"></li>
    <li class="nav-item"><a><i class="icon icon-rss"></i><span class="text">博客</span></a></li>
    <li class="nav-item"><a><i class="icon icon-user-group"></i><span class="text">关注我们</span></a></li>
  </menu>
</div>

```

## 创建新的自定义组件

通过继承 `ActionMenu` 组件类（`./src/component/action-menu.tsx`）来创建一个新的 JS 组件，例如创建一个导航：

```js
class Nav extends ActionMenu {
    // ...此处可选的对 ActionMenu 成员进行重写
}
```

```html:example
<div id="navExample"></div>
```

```js
const nav = new Nav('#nav', {
    // name: 'nav', // 不再需要，会自动根据 Nav 类名使用 `nav` 作为组件类名
    items: [
        {text: '首页', icon: 'icon-home'},
        {text: '动态'},
        {text: '论坛'},
        {type: 'divier'},
        {text: '博客', icon: 'icon-rss'},
        {text: '关注我们', icon: 'icon-user-group'},
    ],
    onClickItem: (info) => {
        console.log('> nav.onClickItem', info);
    },
});
console.log('> nav', nav);
```
