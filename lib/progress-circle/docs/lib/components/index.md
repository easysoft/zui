# 环形进度条

环形进度条生成器允许通过 JS 动态创建一个环形进度条。

## 使用方法

### 简单使用

<Example>
  <div data-zui="ProgressCircle"></div>
</Example>


```html
<div id="progressCircleExample"></div>

<script>
const progressCircle = new zui.ProgressCircle('#progressCircleExample');
</script>
```

### 指定参数

<Example>
  <div data-zui="ProgressCircle" data-percent="75" data-size="128" data-circle-color="var(--color-success-500)"></div>
</Example>


```html
<div id="progressCircleExample"></div>

<script>
const progressCircle = new zui.ProgressCircle('#progressCircleExample', {
    percent: 75,
    size: 128,
    circleColor: 'var(--color-success-500)',
});
</script>
```

### 通过 `[data-zui]` 初始化

<Example>
  <div data-zui="ProgressCircle" data-percent="80" data-size="64"></div>
</Example>

```html
<div data-zui="ProgressCircle" data-percent="80" data-size="64"></div>
```

## 选项

```ts
type ProgressCircleOptions = {
    /** 百分比。 */
    percent?: number;

    /** 环形进度条的尺寸（长和宽相等）。 */
    size?: number;

    /** 环形部分的宽度，如果指定为小于 1 的数，则按 size 的比例取值。 */
    circleWidth?: number;

    /** 环形部分的背景色。 */
    circleBg: string;

    /** 环形部分的前景色。 */
    circleColor: string;

    /** 是否在中间区域显示百分比文本，或者直接指定要显示的文本。 */
    text?: string | boolean;
};
```
