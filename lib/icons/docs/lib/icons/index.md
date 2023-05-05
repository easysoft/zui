# 图标

## 所有图标

<ul id="iconsExample" class="flex flex-wrap justify-start gap-y-3 h-96 -overflow-y-auto "></ul>

## 使用方法

<Example>
  <i class="icon icon-resize"></i>
</Example>

```html
<i class="icon icon-resize"></i>
```

## 尺寸

使用 `icon-*x` 类实现不同大小的图标，支持五种图标大小

<Example class="space-x-4">
  <i class="icon icon-5x icon-resize"></i>
  <i class="icon icon-4x icon-resize"></i>
  <i class="icon icon-3x icon-resize"></i>
  <i class="icon icon-2x icon-resize"></i>
  <i class="icon icon-resize"></i>
</Example>

```html
  <i class="icon icon-5x icon-resize"></i>
  <i class="icon icon-4x icon-resize"></i>
  <i class="icon icon-3x icon-resize"></i>
  <i class="icon icon-2x icon-resize"></i>
  <i class="icon icon-resize"></i>
```
## 旋转

搭配CSS 工具类 `.rotate-*` 实现旋转效果

<Example class="space-x-4">
  <i class="icon icon-caret-down"></i>
  <i class="rotate-45 icon icon-caret-down"></i>
  <i class="rotate-90 icon icon-caret-down"></i>
  <i class="rotate-180 icon icon-caret-down"></i>
</Example>

```html
  <i class="icon icon-caret-down"></i>
  <i class="rotate-45 icon icon-caret-down"></i>
  <i class="rotate-90 icon icon-caret-down"></i>
  <i class="rotate-180 icon icon-caret-down"></i>
```

## 缩放

搭配CSS 工具类 `.scale-*` 实现缩放效果

<Example class="space-x-4">
  <i class="scale-50 icon icon-caret-down"></i>
  <i class="icon icon-caret-down"></i>
  <i class="scale-150 icon icon-caret-down"></i>
</Example>

```html
  <i class="scale-50 icon icon-caret-down"></i>
  <i class="icon icon-caret-down"></i>
  <i class="scale-150 icon icon-caret-down"></i>
```

## 动画

搭配 CSS 动画工具类 `spin`、`ping`、`pulse`、`bounce` 实现动画效果

<Example class="space-x-4">
  <i class="icon icon-star spin"></i>
  <i class="icon icon-star ping"></i>
  <i class="icon icon-star pulse"></i>
  <i class="icon icon-star bounce"></i>
</Example>

```html
  <i class="icon icon-star spin"></i>
  <i class="icon icon-star ping"></i>
  <i class="icon icon-star pulse"></i>
  <i class="icon icon-star bounce"></i>
```

<script setup>
import {onMounted} from 'vue';
import {withBase} from 'vitepress';

const text = 'hello';

onMounted(() => {
    fetch(withBase('/icons/icons.json')).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            console.log('Cant\'t find this json file!');
        }
    }).then (json => {
        const $ul = window.document.getElementById('iconsExample');
        if ($ul) {
            let ulChildrenStr = '';
            for (const icon in json) {
                ulChildrenStr += `<li class="flex items-center w-1/5 p-2"><i class="icon icon-${icon} mr-1"></i> ${icon}</li>`;
            }
            $ul.innerHTML = ulChildrenStr;
        } else {
            console.log('iconsExample is not find!');
        }
    });
});
</script>
