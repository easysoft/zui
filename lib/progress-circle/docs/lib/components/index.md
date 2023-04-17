# 环形进度条

## 使用方法

添加`.progress-circle`类到svg元素上，可获得环形进度条的基本样式。

<Example>
  <svg class="progress-circle" percent="40" circleSize="24" BorderSize="2" height="24">
    <circle cx="12" cy="12" r="11" stroke="var(--progress-circle-bg)" />
    <circle cx="12" cy="12" r="11" stroke="var(--progress-circle-bar-color)" stroke-dasharray="69.09" stroke-dashoffset="41.45" />
    <text x="12" y="13" dominant-baseline="middle">40</text>
  </svg>
</Example>

```js
  const percent = 40, circleSize = 24, BorderSize = 2;
  const radius = (circleSize - borderSize) / 2; // 11
  const dashoffset = (percent / 100) * 2 * Math.PI * radius; // 41.45
  const dasharray = ((100 - percent) / 100) * 2 * Math.PI * radius; // 69.09
```

```html
<svg class="progress-circle" percent="40" circleSize="24" BorderSize="2" height="24">
  <circle cx="12" cy="12" r="11" stroke="var(--progress-circle-bg)" />
  <circle cx="12" cy="12" r="11" stroke="var(--progress-circle-bar-color)" stroke-dasharray="69.09" stroke-dashoffset="41.45" />
  <text x="12" y="13" dominant-baseline="middle">40</text>
</svg>
```


 ## CSS 类

 进度条提供了如下 CSS 类
  | 类        | 类型           | 作用  |
  | ------------- |:-------------:| ----- |
  | `progress-circle`          | 实体类 | 元素作为进度条组件 |

 ## CSS变量
 | 变量名称 | 变量含义 |
 | -------- | -------- |
 | --progress-circle-bg           | 环形进度条组件背景颜色 |
 | --progress-circle-bar-color    | 环形进度条组件颜色     |
