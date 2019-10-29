# 输入框

输入框允许在普通输入框左侧和右侧放置小图标，或者提供预设的标签。

## 带图标

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-icon-left">
        <input id="inputAccountExample1" type="text" class="form-control" placeholder="用户名">
        <label for="inputAccountExample1" class="input-control-icon-left"><i class="icon icon-user "></i></label>
      </div>
      <br />
      <div class="input-control has-icon-left has-icon-right">
        <input id="inputEmailExample1" type="email" class="form-control" placeholder="Email">
        <label for="inputEmailExample1" class="input-control-icon-left"><i class="icon icon-envelope "></i></label>
        <label for="inputEmailExample1" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-icon-right">
        <input id="inputPasswordExample1" type="password" class="form-control" placeholder="密码">
        <label for="inputPasswordExample1" class="input-control-icon-right"><i class="icon icon-key"></i></label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-icon-left">
  <input id="inputAccountExample1" type="text" class="form-control" placeholder="用户名">
  <label for="inputAccountExample1" class="input-control-icon-left"><i class="icon icon-user "></i></label>
</div>
```

```html
<div class="input-control has-icon-left has-icon-right">
  <input id="inputEmailExample1" type="email" class="form-control" placeholder="Email">
  <label for="inputEmailExample1" class="input-control-icon-left"><i class="icon icon-envelope "></i></label>
  <label for="inputEmailExample1" class="input-control-icon-right"><i class="icon icon-check"></i></label>
</div>
```

```html
<div class="input-control has-icon-right">
  <input id="inputPasswordExample1" type="password" class="form-control" placeholder="密码">
  <label for="inputPasswordExample1" class="input-control-icon-right"><i class="icon icon-key"></i></label>
</div>
```

## 带标签

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-label-left">
        <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample2" class="input-control-label-left">用户名:</label>
      </div>
      <br />
      <div class="input-control has-label-left has-icon-right">
        <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample2" class="input-control-label-left">邮箱:</label>
        <label for="inputEmailExample2" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left has-label-right">
        <input id="inputPasswordExample2" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample2" class="input-control-label-left">密码:</label>
        <label for="inputPasswordExample2" class="input-control-label-right text-right text-success">安全!!!</label>
      </div>
      <br />
      <div class="input-control has-icon-left has-icon-right">
        <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
        <label for="inputGiftExample2" class="input-control-icon-left"><i class="icon icon-gift"></i></label>
        <label for="inputPasswordExample2" class="input-control-label-right text-right text-red">享 8 折</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left">
  <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample2" class="input-control-label-left">用户名:</label>
</div>
```

```html
<div class="input-control has-label-left has-icon-right">
  <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample2" class="input-control-label-left">邮箱:</label>
  <label for="inputEmailExample2" class="input-control-icon-right"><i class="icon icon-check"></i></label>
</div>
```

```html
<div class="input-control has-icon-left has-icon-right">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-icon-left"><i class="icon icon-gift"></i></label>
  <label for="inputPasswordExample2" class="input-control-label-right text-right text-red">享 8 折</label>
</div>
```

```html
<div class="input-control has-label-left has-label-right">
  <input id="inputPasswordExample2" type="password" class="form-control" placeholder="">
  <label for="inputPasswordExample2" class="input-control-label-left">密码:</label>
  <label for="inputPasswordExample2" class="input-control-label-right text-right text-success">安全!!!</label>
</div>
```

### 左侧标签靠右对齐

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-label-left">
        <input id="inputAccountExample3" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample3" class="input-control-label-left text-right">用户名:</label>
      </div>
      <br />
      <div class="input-control has-label-left has-icon-right">
        <input id="inputEmailExample3" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample3" class="input-control-label-left text-right">邮箱:</label>
        <label for="inputEmailExample3" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left has-label-right">
        <input id="inputPasswordExample3" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample3" class="input-control-label-left text-right">密码:</label>
        <label for="inputPasswordExample3" class="input-control-label-right text-right text-success">安全!!!</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left">
  <input id="inputAccountExample3" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample3" class="input-control-label-left text-right">用户名:</label>
</div>
```

```html
<div class="input-control has-label-left has-icon-right">
  <input id="inputEmailExample3" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample3" class="input-control-label-left text-right">邮箱:</label>
  <label for="inputEmailExample3" class="input-control-icon-right"><i class="icon icon-check"></i></label>
</div>
```

```html
<div class="input-control has-label-left has-label-right">
  <input id="inputPasswordExample3" type="password" class="form-control" placeholder="">
  <label for="inputPasswordExample3" class="input-control-label-left text-right">密码:</label>
  <label for="inputPasswordExample3" class="input-control-label-right text-right text-success">安全!!!</label>
</div>
```

### 标签宽度尺寸

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <p>使用 `.has-label-left-sm` 和 `.has-label-right-sm` 代替 `.has-label-left` 和 `.has-label-right` 使得标签占用较小的水平空间。</p>
      <div class="input-control has-label-left-sm">
        <input id="inputAccountExample4" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample4" class="input-control-label-left text-right">用户名:</label>
      </div>
      <br />
      <div class="input-control has-label-left-sm has-icon-right-sm">
        <input id="inputEmailExample4" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample4" class="input-control-label-left text-right">邮箱:</label>
        <label for="inputEmailExample4" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left-sm has-label-right-sm">
        <input id="inputPasswordExample4" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample4" class="input-control-label-left text-right">密码:</label>
        <label for="inputPasswordExample4" class="input-control-label-right text-right text-success">安全!!!</label>
      </div>
    </div>
    <div class="col-md-6">
      <p>使用 `.has-label-left-lg` 和 `.has-label-right-lg` 代替 `.has-label-left` 和 `.has-label-right` 使得标签占用较大的水平空间。</p>
      <div class="input-control has-label-left-lg">
        <input id="inputAccountExample5" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample5" class="input-control-label-left text-right">用户名:</label>
      </div>
      <br />
      <div class="input-control has-label-left-lg has-icon-right-lg">
        <input id="inputEmailExample5" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample5" class="input-control-label-left text-right">邮箱:</label>
        <label for="inputEmailExample5" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left-lg has-label-right-lg">
        <input id="inputPasswordExample5" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample5" class="input-control-label-left text-right">密码:</label>
        <label for="inputPasswordExample5" class="input-control-label-right text-right text-success">安全!!!</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left-sm">
  ...
</div>
```

```html
<div class="input-control has-icon-right-sm">
  ...
</div>
```

```html
<div class="input-control has-label-left-sm has-label-right-sm">
  ...
</div>
```

```html
<div class="input-control has-label-left-lg">
  ...
</div>
```

```html
<div class="input-control has-icon-right-lg">
  ...
</div>
```

```html
<div class="input-control has-label-left-lg has-label-right-lg">
  ...
</div>
```

## 搜索框

为 `.input-control` 添加 `.search-box` 类并使用如下的 HTML 结构即可创建一个搜索框组件。
同时使用 `.search-box-circle` 能使得搜索框获得圆角边框外观。

如果要使用搜索框的 JavaScript 增强功能，请参考 [JavaScript -> 搜索框](#javascript/searchbox)。

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control search-box has-icon-left has-icon-right" id="searchboxExample">
        <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="搜索">
        <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample">
        <input id="inputSearchExample2" type="search" class="form-control search-input" placeholder="搜索">
        <label for="inputSearchExample2" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control search-box has-icon-left has-icon-right" id="searchboxExample">
  <input type="search" class="form-control search-input" placeholder="搜索">
  <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
</div>
```


```html
<div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample">
  <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="搜索">
  <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
</div>
```

## 禁用

为 `.form-control` 添加 `disabled` 属性。

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-label-left">
        <input disabled="disabled" id="inputAccountExample6" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample6" class="input-control-label-left">用户名:</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left">
  <input disabled="disabled" id="inputAccountExample4" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample4" class="input-control-label-left">用户名:</label>
</div>
```
