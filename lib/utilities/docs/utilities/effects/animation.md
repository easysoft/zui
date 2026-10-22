# 动画

## 旋转

使用 `animate-spin` 给元素添加旋转动画效果。

<Example>
  <button type="button" class="btn">
    <i class="animate-spin spinner"></i> 加载中
  </button>
</Example>

```html
<button type="button" class="btn">
  <i class="animate-spin spinner"></i> 加载中
</button>
```

## 水波纹

使用 `animate-ping` 给元素添加水波纹动画。

<Example>
  <button type="button" class="btn warning">
    <i class="animate-ping example-icon example-icon-thumbs-up" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2011h4v11H2zM6%2011l6-9c5%200%200%208%200%208h9l-2%2012H6%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i>
  </button>
</Example>

```html
<button type="button" class="btn warning">
  <i class="animate-ping example-icon example-icon-thumbs-up" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2011h4v11H2zM6%2011l6-9c5%200%200%208%200%208h9l-2%2012H6%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i>
</button>
```

## 脉冲

使用 `animate-pulse` 给元素添加脉冲动画。

<Example>
  <div class="animate-pulse rounded w-full flex px-4 py-4">
    <div class="w-16 h-16 gray-pale circle">
    </div>
    <div class="flex-1 h-16 px-4 ">
      <div class="h-4 w-48 gray-pale mb-2 rounded"></div>
      <div class="h-4 w-96 gray-pale mb-2 rounded"></div>
      <div class="h-4 flex-1 gray-pale rounded"></div>
    </div>
  </div>
</Example>

```html
<div class="animate-pulse rounded w-full flex px-4 py-4">
  <div class="w-16 h-16 gray-pale circle">
  </div>
  <div class="flex-1 h-16 px-4 ">
    <div class="h-4 w-48 gray-pale mb-2 rounded"></div>
    <div class="h-4 w-96 gray-pale mb-2 rounded"></div>
    <div class="h-4 flex-1 gray-pale rounded"></div>
  </div>
</div>
```

## 弹跳

使用 `animate-bounce` 给元素添加弹跳动画。

<Example>
  <button type="button" class="btn success">
    <i class="bounce chevron-down"></i> 下载
  </button>
</Example>

```html
<button type="button" class="btn success">
  <i class="bounce chevron-down"></i> 下载
</button>
```
