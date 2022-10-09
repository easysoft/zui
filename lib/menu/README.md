# 菜单

## 通用

```html:example
<menu class="menu -w-32">
  <li><a href="#">复制</a></li>
  <li><a href="#">粘贴</a></li>
  <li><a href="#">剪切</a></li>
  <li class="menu-divider"></li>
  <li class="menu-heading">更多操作</li>
  <li><a href="#">导入</a></li>
  <li><a href="#">导出</a></li>
  <li><a href="#">保存</a></li>
</menu>
```

## 样式

添加边框、阴影和圆角。

```html:example
<menu class="menu bd shadow-lg rounded -w-40">
  <li><a href="#">复制</a></li>
  <li><a href="#">粘贴</a></li>
  <li><a href="#">剪切</a></li>
  <li class="menu-divider"></li>
  <li class="menu-heading">更多操作</li>
  <li><a href="#">导入</a></li>
  <li><a href="#">导出</a></li>
  <li><a href="#">保存</a></li>
</menu>
```

## 包含图标

```html:example
<menu class="menu menu-has-icons bd shadow-lg rounded -w-32">
  <li><a href="#"><i class="icon icon-copy"></i> 复制</a></li>
  <li><a href="#"><i class="icon icon-paste"></i> 粘贴</a></li>
  <li><a href="#">剪切</a></li>
  <li class="menu-divider"></li>
  <li class="menu-heading">更多操作</li>
  <li><a href="#"><i class="icon icon-upload-alt"></i> 导入</a></li>
  <li><a href="#"><i class="icon icon-download-alt"></i> 导出</a></li>
  <li><a href="#"><i class="icon icon-save"></i> 保存</a></li>
</menu>
```

## 禁用的菜单项


```html:example
<menu class="menu menu-has-icons bd shadow-lg rounded -w-32">
  <li class="disabled"><a href="#"><i class="icon icon-upload-alt"></i> 导入（被禁用）</a></li>
  <li><a href="#"><i class="icon icon-download-alt"></i> 导出</a></li>
  <li><a href="#"><i class="icon icon-save"></i> 保存</a></li>
</menu>
```

## 选中

```html:example
<menu class="menu bd shadow-lg rounded -w-32">
  <li><a href="#">周一</a></li>
  <li class="active"><a href="#">周二</a></li>
  <li class="active"><a href="#">周三</a></li>
  <li><a href="#">周四</a></li>
  <li class="active"><a href="#">周五</a></li>
  <li><a href="#">周六</a></li>
  <li><a href="#">周日</a></li>
</menu>
```

## 菜单项尾部图标

```html:example
<menu class="menu bd shadow-lg rounded -w-32">
  <li><a href="#">周一</a></li>
  <li class="active"><a href="#">周二 <i class="icon icon-check"></i></a></li>
  <li><a href="#">周三</a></li>
  <li><a href="#">周四</a></li>
  <li><a href="#">周五</a></li>
  <li><a href="#">周六</a></li>
  <li><a href="#">周日</a></li>
</menu>
```

## 自定义菜单项

```html:example
<menu class="menu bd shadow-lg rounded -w-36">
  <li class="row items-center gap-2">
    <div class="avatar circle flex-none"><img src="/lib/avatar/assets/avatar.png"></div>
    <div class="flex-auto">
      <div>张三</div>
      <div class="text-gray text-sm">zhangsan</div>
    </div>
  </li>
  <li class="menu-divider"></li>
  <li><a href="#">个人资料</a></li>
  <li><a href="#">修改密码</a></li>
  <li><a href="#">主题</a></li>
  <li class="menu-divider"></li>
  <li class="text-danger"><a href="#">退出</a></li>
</menu>
```
