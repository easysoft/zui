# 按钮组

## btn-group

```html:example: -flex -gap-3
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```

## multiple btn-group

```html:example: -flex -gap-3
<div class="btn-toolbar">
  <div class="btn-group">
    <button type="button" class="btn">剪切</button>
    <button type="button" class="btn">复制</button>
    <button type="button" class="btn">粘贴</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">( $ _ $ )</button>
    <button type="button" class="btn">O(∩_∩)O</button>
    <button type="button" class="btn">（*＾-＾*）</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">登录</button>
  </div>
</div>
```

## btn-group sizes
```html:example: -flex -gap-3
<div class="btn-group xl">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group lg">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group sm">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group xs">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```

## btn-group styles

```html:example: -flex -gap-3
<div class="btn-group">
  <button type="button" class="btn">Normal</button>
  <button type="button" class="btn primary">Primary</button>
  <button type="button" class="btn primary-outline">Primary</button>
  <button type="button" class="btn primary-pale">Primary</button>
  <button type="button" class="btn text-primary">Primary</button>
</div>
```

## btn-group radius

```html:example: -flex -gap-3
<div class="btn-group group-rounded-none">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group group-rounded-sm">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group group-rounded">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group group-rounded-md">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group group-rounded-lg">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group group-rounded-xl">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group group-circle">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```
## with dropdown

```html:example: -flex -gap-3
<div class="btn-group">
  <button type="button" class="btn">春天</button>
  <button type="button" class="btn">夏天</button>
  <div class="dropdown">
    <button type="button" class="btn" data-toggle="dropdown">未来 <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">秋天</a></li>
      <li><a href="###">冬天</a></li>
    </ul>
  </div>
</div>

<div class="btn-group">
  <button type="button" class="btn">操作</button>
  <div class="dropdown dropup">
    <button type="button" class="btn" data-toggle="dropdown"><span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">编辑</a></li>
      <li><a href="###">删除</a></li>
      <li class="divider"></li>
      <li><a href="###">撤销</a></li>
    </ul>
  </div>
</div>
```
