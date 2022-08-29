# 进度条

进度条提供了工作或动作的实时反馈。

## 基本用法

```htnl:example
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Complete</span>
    </div>
  </div>
```

## 颜色主题

给`.progress-bar`元素添加`.bg-*`工具类，设置滑动条颜色。

```htnl:example
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Primary</span>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Secondary</span>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Success</span>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Warning</span>
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Danger</span>
    </div>
  </div>
```

## 特殊效果

### 条纹效果

给`.progress`元素添加`.progress-striped`修饰类，给滑动条添加条纹效果

```html:example
  <div class="progress progress-striped">
    <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Progress</span>
    </div>
  </div>
```

###  动画效果

给使用了`progress-striped`修饰类的元素添加`.active`修饰类,给条纹滑动条添加向左滑动的动画

```html:example
  <div class="progress progress-striped active">
    <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Progress</span>
    </div>
  </div>
```

### 堆叠效果

给`.progress`元素添加多个`progress-bar`元素，使多个进度条堆叠展示。

```html:example
  <div class="progress progress-striped active">
    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Success</span>
    </div>
    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
      <span class="sr-only">20% Warning</span>
    </div>
    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
      <span class="sr-only">10% danger</span>
    </div>
  </div>
```
