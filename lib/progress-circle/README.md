## 环形进度条

```html:example
<svg width=24 height=24>
    <circle cx=12 cy=12 r=10 stroke-width=2 stroke="gray" fill="transparent" />
    <circle cx=12 cy=12 r=10 stroke-width=2 stroke="green" fill="transparent" stroke-linecap="round" stroke-dasharray=69.09 stroke-dashoffset=41.45 style={{transformOrigin: 'center', transform: 'rotate(-90deg)'}} />
    <text x=12 y=14 dominant-baseline="middle" text-anchor="middle" style={{fontSize: `11px`}}>40</text>
 </svg>
```