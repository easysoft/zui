## 圆形进度条

```html:example
    <svg class="progress-circle">
        <circle
            cx="500" 
            cy="500" 
            r="110" 
            fill="#efefef"
        />
        <circle
            id="progress" 
            cx="500" 
            cy="500" 
            r="100" 
            stroke="#3fd0af"
            fill="#efefef"
            stroke-width='20'
            stroke-linecap="round"
            stroke-dasharray="1,800"
        />
        <circle
            cx="500" 
            cy="500" 
            r="90"
            fill="#fff" 
        />
        <text x="490" y="505" fill="red" id="precent">0%</text>
    </svg>
```