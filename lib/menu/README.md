# 菜单

## 组件模式

```html:example
<div id="menu"></div>
```

```js
const menu = new Menu('#menu', {
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


## 通用

```html:example
<menu class="menu -w-32">
  <li class="menu-item"><a href="#">复制</a></li>
  <li class="menu-item"><a href="#">粘贴</a></li>
  <li class="menu-item"><a href="#">剪切</a></li>
  <li class="menu-divider"></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a href="#">导入</a></li>
  <li class="menu-item"><a href="#">导出</a></li>
  <li class="menu-item"><a href="#">保存</a></li>
</menu>
```

## 样式

去掉边框、阴影和圆角。

```html:example
<menu class="menu shadow-none border-none rounded-none -w-40">
  <li class="menu-item"><a href="#">复制</a></li>
  <li class="menu-item"><a href="#">粘贴</a></li>
  <li class="menu-item"><a href="#">剪切</a></li>
  <li class="menu-divider"></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a href="#">导入</a></li>
  <li class="menu-item"><a href="#">导出</a></li>
  <li class="menu-item"><a href="#">保存</a></li>
</menu>
```

## 包含图标

```html:example
<menu class="menu has-icons -w-32">
  <li class="menu-item"><a href="#"><i class="icon icon-copy"></i> 复制</a></li>
  <li class="menu-item"><a href="#"><i class="icon icon-paste"></i> 粘贴</a></li>
  <li class="menu-item"><a href="#">剪切</a></li>
  <li><hr class="menu-divider" /></li>
  <li class="menu-heading">更多操作</li>
  <li class="menu-item"><a href="#"><i class="icon icon-upload-alt"></i> 导入</a></li>
  <li class="menu-item"><a href="#"><i class="icon icon-download-alt"></i> 导出</a></li>
  <li class="menu-item"><a href="#"><i class="icon icon-save"></i> 保存</a></li>
</menu>
```

## 禁用的菜单项


```html:example
<menu class="menu has-icons -w-32">
  <li><a class="menu-item disabled" href="#"><i class="icon icon-upload-alt"></i> 导入（被禁用）</a></li>
  <li class="menu-item"><a href="#"><i class="icon icon-download-alt"></i> 导出</a></li>
  <li class="menu-item"><a href="#"><i class="icon icon-save"></i> 保存</a></li>
</menu>
```

## 选中

```html:example
<menu class="menu -w-32">
  <li class="menu-item"><a href="#">周一</a></li>
  <li><a class="menu-item active" href="#">周二</a></li>
  <li><a class="menu-item active" href="#">周三</a></li>
  <li class="menu-item"><a href="#">周四</a></li>
  <li><a class="menu-item active" href="#">周五</a></li>
  <li class="menu-item"><a href="#">周六</a></li>
  <li class="menu-item"><a href="#">周日</a></li>
</menu>
```

## 菜单项尾部图标

```html:example
<menu class="menu -w-32">
  <li class="menu-item"><a href="#">周一</a></li>
  <li><a class="menu-item active" href="#">周二 <i class="icon icon-check"></i></a></li>
  <li class="menu-item"><a href="#">周三</a></li>
  <li class="menu-item"><a href="#">周四</a></li>
  <li class="menu-item"><a href="#">周五</a></li>
  <li class="menu-item"><a href="#">周六</a></li>
  <li class="menu-item"><a href="#">周日</a></li>
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
  <li class="menu-divider"></li>
  <li class="menu-item"><a href="#">个人资料</a></li>
  <li class="menu-item"><a href="#">修改密码</a></li>
  <li class="menu-item"><a href="#">主题</a></li>
  <li class="menu-divider"></li>
  <li class="menu-item text-danger"><a href="#">退出</a></li>
</menu>
```
