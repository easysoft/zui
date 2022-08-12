## 单选框和复选框

复选框（checkbox）允许用户选择多个选项，不同于 `<select>`，这些选项是直接展示的。
为 `<input type="checkbox">` 设置 disabled 属性来应用禁用样式，如果为 .checkbox 添加 disabled 类，则整个复选框包括文字部分都会应用禁用样式。
将多个复选框堆叠形成一个复选框组。

## 基本用法

### 基本样式复选框

<Example>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 复选框 1
      </input>
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 复选框 2
      </input>
    </label>
  </div>
  <div class="checkbox disabled">
    <label>
      <input disabled type="checkbox"> 被禁用的复选框
      </input>
    </label>
  </div>
</Example>

```html
<div class="checkbox">
  <label>
    <input type="checkbox"> 复选框 1
    </input>
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox"> 复选框 2
    </input> 
  </label>
</div>
<div class="checkbox disabled">
  <label>
    <input disabled type="checkbox"> 被禁用的复选框
    </input> 
  </label>
</div>
```

### 基本样式单选框

<Example>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample"> 单选框 1
      </input>
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample"> 单选框 2
      </input>
    </label>
  </div>
  <div class="radio disabled">
    <label>
      <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
      </input>
    </label>
  </div>
</Example>

```html
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample"> 单选框 1
    </input>
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample"> 单选框 2
    </input>
  </label>
</div>
<div class="radio disabled">
  <label>
    <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
    </input>
  </label>
</div>
```

## 不包含文字样式

### 复选框

<Example>
  <div class="checkbox">
    <label>
      <input type="checkbox">
      </input>
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox">
      </input>
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox" disabled>
      </input>
    </label>
  </div>
</Example>

```html
<div class="checkbox">
  <label>
    <input type="checkbox">
    </input>
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox">
    </input>
  </label>
</div>
<div class="checkbox">
  <label>
    <input type="checkbox" disabled>
    </input>
  </label>
</div>
```

### 单选框
<Example>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample">
      </input>
    </label>
  </div>
  <div class="radio">
    <label>
      <input type="radio" name="radioOptionsExample">
      </input>
    </label>
  </div>
  <div class="radio disabled">
    <label>
      <input type="radio" name="radioOptionsExample" disabled>
      </input>
    </label>
  </div>
</Example>

```html
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample">
    </input>
  </label>
</div>
<div class="radio">
  <label>
    <input type="radio" name="radioOptionsExample">
    </input>
  </label>
</div>
<div class="radio disabled">
  <label>
    <input type="radio" name="radioOptionsExample" disabled>
    </input>
  </label>
</div>
```

## 内联样式
为 `<label>` 添加 checkbox-inline 或 radio-inline , 获得一行显示的复选框和单选框。

### 复选框
<Example>
  <label class="checkbox-inline">
    <input type="checkbox"> 多选框 1
    </input>
  </label>
  <label class="checkbox-inline">
    <input type="checkbox"> 多选框 2
    </input>
  </label>
  <label class="checkbox-inline">
    <input disabled type="checkbox"> 被禁用的多选框
    </input>
  </label>
</Example>

```html
<label class="checkbox-inline">
  <input type="checkbox"> 多选框 1
  </input>
</label>
<label class="checkbox-inline">
  <input type="checkbox"> 多选框 2
  </input>
</label>
<label class="checkbox-inline">
  <input disabled type="checkbox"> 被禁用的多选框
  </input>
</label>
```

### 单选框
<Example>
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample"> 单选框 1
    </input>
  </label>
  <label class="radio-inline">
    <input type="radio" name="radioOptionsExample"> 单选框 2
    </input>
  </label>
  <label class="radio-inline">
    <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
    </input>
  </label>
</Example>

```html
<label class="radio-inline">
  <input type="radio" name="radioOptionsExample"> 单选框 1
  </input>
</label>
<label class="radio-inline">
  <input type="radio" name="radioOptionsExample"> 单选框 2
  </input>
</label>
<label class="radio-inline">
  <input disabled type="radio" name="radioOptionsExample"> 被禁用的单选框
  </input>
</label>
```

## 高级外观
高级外观的多选和单选框使用自定义的外观代替原生外观，在所有浏览器都具有一致的体验。

<Example>
  <div class="checkbox-primary">
  <input type="checkbox" id="primaryCheckbox1">
  <label for="primaryCheckbox1">未选中
  </label> 
  </input>
  </div>
  <div class="checkbox-primary">
  <input type="checkbox" checked="checked" id="primaryCheckbox2">
  <label for="primaryCheckbox2">选中</label>
  </input>
  </ div>
  <div class="checkbox-primary">
  <input type="checkbox" checked="checked" disabled="disabled" id="primaryCheckbox3">
  <label for="primaryCheckbox3">禁用</label>
  </input>
  </div>
</Example>
