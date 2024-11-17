# 菜单

## 搜索菜单

```html:example
<menu id="searchMenu1"></menu>
```

```html:example
<menu id="searchMenu2"></menu>
```

## 组件模式

```html:example
<menu id="menu"></menu>
```

```js
const menu = new Menu('#menu', {
    popup: true,
    compact: true,
    items: [
        {title: '复制', icon: 'icon-copy'},
        {title: '粘贴', icon: 'icon-paste'},
        {title: '剪切'},
        {type: 'heading', title: '更多操作'},
        {title: '导入', icon: 'icon-upload-alt'},
        {title: '导出', icon: 'icon-download-alt'},
        {type: 'divider'},
        {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
    ],
    onClickItem: (info) => {
        console.log('> menu.onClickItem', info);
    },
});
console.log('> menu', menu);
```

## 选择框

```html:example
<menu id="checkableMenu"></menu>
```

## 多层级组件模式

```html:example
<menu id="nestedMenu"></menu>
```

## 通用

```html:example
<menu class="menu -w-32">
  <li class="menu-item"><a>复制</a></li>
  <li class="menu-item"><a>粘贴</a></li>
  <li class="menu-item"><a>剪切</a></li>
  <li class="menu-divider divider"></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a>导入</a></li>
  <li class="menu-item"><a>导出</a></li>
  <li class="menu-item"><a>保存</a></li>
</menu>
```

## 样式

去掉边框、阴影和圆角。

```html:example
<menu class="menu shadow-none border-none rounded-none -w-40">
  <li class="menu-item"><a>复制</a></li>
  <li class="menu-item"><a>粘贴</a></li>
  <li class="menu-item"><a>剪切</a></li>
  <li class="menu-divider divider"></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a>导入</a></li>
  <li class="menu-item"><a>导出</a></li>
  <li class="menu-item"><a>保存</a></li>
</menu>
```

## 包含图标

```html:example
<menu class="menu has-icons -w-32">
  <li class="menu-item"><a><i class="icon icon-copy"></i> 复制</a></li>
  <li class="menu-item"><a><i class="icon icon-paste"></i> 粘贴</a></li>
  <li class="menu-item"><a>剪切</a></li>
  <li class="menu-divider divider"></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a><i class="icon icon-upload-alt"></i> 导入</a></li>
  <li class="menu-item"><a><i class="icon icon-download-alt"></i> 导出</a></li>
  <li class="menu-item"><a><i class="icon icon-save"></i> 保存</a></li>
</menu>
```

## 紧凑模式

```html:example
<menu class="menu compact popup has-icons -w-32">
  <li class="menu-item"><a><i class="icon icon-copy"></i> 复制</a></li>
  <li class="menu-item"><a><i class="icon icon-paste"></i> 粘贴</a></li>
  <li class="menu-item"><a>剪切</a></li>
  <li class="menu-divider divider"></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a><i class="icon icon-upload-alt"></i> 导入</a></li>
  <li class="menu-item"><a><i class="icon icon-download-alt"></i> 导出</a></li>
  <li class="menu-item"><a><i class="icon icon-save"></i> 保存</a></li>
</menu>
```

## 禁用的菜单项

```html:example
<menu class="menu has-icons -w-32">
  <li class="menu-item item"><a class="disabled"><i class="icon icon-upload-alt"></i> 导入（被禁用）</a></li>
  <li class="menu-item item"><a><i class="icon icon-download-alt"></i> 导出</a></li>
  <li class="menu-item item"><a><i class="icon icon-save"></i> 保存</a></li>
</menu>
```

## 激活与选中

```html:example
<menu class="menu -w-32">
  <li class="menu-item item"><a>周一</a></li>
  <li class="menu-item item"><a class="selected">周二</a></li>
  <li class="menu-item item"><a class="selected">周三</a></li>
  <li class="menu-item item"><a>周四</a></li>
  <li class="menu-item item"><a class="active">周五</a></li>
  <li class="menu-item item"><a class="disabled">周六</a></li>
  <li class="menu-item item"><a>周日</a></li>
</menu>
```

## 菜单项尾部图标

```html:example
<menu class="menu -w-32">
  <li class="menu-item"><a>周一</a></li>
  <li class="menu-item"><a class="active">周二 <i class="icon icon-check"></i></a></li>
  <li class="menu-item"><a>周三</a></li>
  <li class="menu-item"><a>周四</a></li>
  <li class="menu-item"><a>周五</a></li>
  <li class="menu-item"><a>周六</a></li>
  <li class="menu-item"><a>周日</a></li>
</menu>
```

## 自定义菜单项

```html:example
<menu class="menu -w-36">
  <li class="row items-center gap-2 py-1 px-2">
    <div class="avatar circle flex-none"><img src="/lib/avatar/assets/avatar.png"></div>
    <div class="flex-auto">
      <div>张三</div>
      <div class="text-gray text-sm">zhangsan</div>
    </div>
  </li>
  <li class="menu-divider divider"></li>
  <li class="menu-item"><a>个人资料</a></li>
  <li class="menu-item"><a>修改密码</a></li>
  <li class="menu-item"><a>主题</a></li>
  <li class="menu-divider divider"></li>
  <li class="menu-item text-danger"><a>退出</a></li>
</menu>
```
