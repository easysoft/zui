# 进度条

进度条提供了工作或动作的实时反馈。

## 基本用法

```htnl:example
  <div class="progress">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
```

## 颜色主题

给`.progress-bar`元素添加`.*`样式工具类，设置滑动条颜色。

```htnl:example
  <div class="progress mb-5">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
  <div class="progress mb-5">
    <div class="progress-bar secondary" style="width: 40%">
    </div>
  </div>
  <div class="progress mb-5">
    <div class="progress-bar success" style="width: 40%">
    </div>
  </div>
  <div class="progress mb-5">
    <div class="progress-bar warning" style="width: 40%">
    </div>
  </div>
  <div class="progress mb-5">
    <div class="progress-bar danger" style="width: 40%">
    </div>
  </div>
```
## 圆角大小

给 `.progress` 元素添加 `.rounded-*` 工具类， 设置滑动条圆角大小

```htnl:example
  <div class="progress mb-5 rounded-sm">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
```
```html:example
  <div class="progress mb-5 rounded">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
```
```html:example
  <div class="progress mb-5 rounded-md">
    <div class="progress-bar"  style="width: 40%">
    </div>
  </div>
```
```html:example
  <div class="progress mb-5 rounded-lg">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
```
```html:example
  <div class="progress mb-5 rounded-xl">
    <div class="progress-bar " style="width: 40%">
    </div>
  </div>
```
```html:example
  <div class="progress mb-5 rounded-full">
    <div class="progress-bar " style="width: 40%">
    </div>
  </div>
```
```html:example
  <div class="progress mb-5 circle">
    <div class="progress-bar " style="width: 40%">
    </div>
  </div>
```
```html:example
  <div class="progress mb-5 rounded-none">
    <div class="progress-bar " style="width: 40%">
    </div>
  </div>
```

## 特殊效果

### 条纹效果

给`.progress`元素添加`.progress-striped`修饰类，给滑动条添加条纹效果

```html:example
  <div class="progress progress-striped">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
```

###  动画效果

给使用了`progress-striped`修饰类的元素添加`.active`修饰类,给条纹滑动条添加向左滑动的动画

```html:example
  <div class="progress progress-striped active">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
```

### 堆叠效果

给`.progress`元素添加多个`progress-bar`元素，使多个进度条堆叠展示。

```html:example
  <div class="progress progress-striped active">
    <div class="progress-bar success" style="width: 40%">
    </div>
    <div class="progress-bar warning rounded-none" style="width: 20%">
    </div>
    <div class="progress-bar danger" style="width: 10%">
    </div>
  </div>
```
