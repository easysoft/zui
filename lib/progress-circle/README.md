## 环形进度条

```html:example
<svg class="progress-circle" percent=40 circleSize=24 BorderSize=2 height=24>
    <circle cx=12 cy=12 r=10 stroke='var(--progress-circle-bg)' />
    <circle cx=12 cy=12 r=10 stroke='var(--progress-circle-bar-color)' stroke-dasharray=69.09 stroke-dashoffset=41.45 />
    <text x=12 y=13 dominant-baseline="middle">40</text>
 </svg>
```

## 引入环形进度条组件生成器


```html:example
<div id="progressCircle">
</div>
```

```js
 const options = {
     percent: 50, // 进度条表示的百分比 必填
     circleBgColor: '#F4F5F7', // 进度条环形颜色 默认为绿色
     circleColor: '#C98FE2', // 进度条环形背景色 默认为灰色
     circleSize: 50, // 进度条大小(px) 默认为24
     circleBorderSize: 10, // 进度条内边距大小(px) 默认为2
 };
 const progressCircleDom = document.getElementById('progressCircle');
 if (progressCircleDom) {
     new ProgressCircle(progressCircleDom, options);
 }
```
