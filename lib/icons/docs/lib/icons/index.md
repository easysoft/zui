# 图标

## 所有图标

<ul id="iconsExample" class="flex flex-wrap gap-y-3 justify-start h-96 -overflow-y-auto "></ul>

## 基本用法
<Example>
  <i class="icon icon-resize"></i>
</Example>

```html
<i class="icon icon-resize"></i>
```

## 尺寸

<Example class="space-x-4">
  <i class="icon icon-5x icon-resize"></i>
  <i class="icon icon-4x icon-resize"></i>
  <i class="icon icon-3x icon-resize"></i>
  <i class="icon icon-2x icon-resize"></i>
  <i class="icon icon icon-resize"></i>
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
  <i class="icon icon-caret-down rotate-45"></i>
  <i class="icon icon-caret-down rotate-90"></i>
  <i class="icon icon-caret-down rotate-180"></i>
</Example>

```html
  <i class="icon icon-caret-down"></i>
  <i class="icon icon-caret-down rotate-45"></i>
  <i class="icon icon-caret-down rotate-90"></i>
  <i class="icon icon-caret-down rotate-180"></i>
```

## 缩放

搭配CSS 工具类 `.scale-*` 实现缩放效果

<Example class="space-x-4">
  <i class="icon icon-caret-down scale-50"></i>
  <i class="icon icon-caret-down"></i>
  <i class="icon icon-caret-down scale-150"></i>
</Example>

```html
  <i class="icon icon-caret-down scale-50"></i>
  <i class="icon icon-caret-down"></i>
  <i class="icon icon-caret-down scale-150"></i>
```

## 动画

搭配 CSS 动画工具类  实现动画效果

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

const text = 'hello';

onMounted(() => {
    fetch('/fonts/icons.json').then(res => {
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
                ulChildrenStr += `<li class="w-1/5 p-2 flex items-center"><i class="icon icon-${icon} mr-1"></i> ${icon}</li>`;
            }
            $ul.innerHTML = ulChildrenStr;
        } else {
            console.log('iconsExample is not find!');
        }
    });
});
</script>
