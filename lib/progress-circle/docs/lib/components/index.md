# 环形进度条

## 基本用法

添加`.progress-circle`类到svg元素上，可获得环形进度条的基本样式。

<Example>
 <svg class="progress-circle" percent=40 circleSize=24 BorderSize=2 height=24>
     <circle cx=12 cy=12 r=10 />
     <circle cx=12 cy=12 r=10 stroke-dasharray=69.09 stroke-dashoffset=41.45 />
     <text x=12 y=14 dominant-baseline="middle" >40</text>
  </svg>
</Example>

```html
  const percent=40 ,circleSize=24 ,BorderSize=2,
  const radius = (circleSize - borderSize)/2; // 11
  const dashoffset = (percent/100) * 2 * Math.PI * (radius); // 41.45
  const dasharray = ((100 - percent)/100) * 2 * Math.PI * (radius); // 69.09

  <svg class="progress-circle" height=24 width=24>
     <circle cx=12 cy=12 r=11/>
     <circle cx=12 cy=12 r=11 stroke-dasharray=69.09 troke-dashoffset=41.45 />
     <text x=12 y=14 dominant-baseline="middle" >40</text>
  </svg>
```
