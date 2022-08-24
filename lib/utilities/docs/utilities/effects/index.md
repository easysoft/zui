# 效果 

## 不透明度

使用`fade-{account}`功能控制元素的不透明度

<Example class="flex flex-wrap gap-3 bg-canvas">
  <div class="fade-100 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-100
    </div>
  </div>
  <div class="fade-95 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-95
    </div>
  </div>
  <div class="fade-90 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-90
    </div>
  </div>
  <div class="fade-75 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-75
    </div>
  </div>
  <div class="fade-50 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-50
    </div>
  </div>
  <div class="fade-25 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-25
    </div>
  </div>
  <div class="fade-0 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-0
    </div>
  </div>
</Example>

```html
  <div class="fade-100 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-100
    </div>
  </div>
  <div class="fade-95 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-95
    </div>
  </div>
  <div class="fade-90 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-90
    </div>
  </div>
  <div class="fade-75 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-75
    </div>
  </div>
  <div class="fade-50 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-50
    </div>
  </div>
  <div class="fade-25 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-25
    </div>
  </div>
  <div class="fade-0 bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      fade-0
    </div>
  </div>
```

## 动画

使用`spin`, `ping`等给元素添加动画

<Example class="flex flex-wrap gap-3">
  <div class="spin bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
       spin 
    </div>
  </div>
  <div class="ping bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
       ping 
    </div>
  </div>
  <div class="pulse bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      pulse 
    </div>
  </div>
  <div class="bounce bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      bounce 
    </div>
  </div>
</Example>

```html
  <div class="spin bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
       spin 
    </div>
  </div>
  <div class="ping bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
       ping 
    </div>
  </div>
  <div class="pulse bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      pulse 
    </div>
  </div>
  <div class="bounce bg-primary w-24 h-16 flex justify-center">
    <div class="text-center text-canvas h-6 mt-6">
      bounce 
    </div>
  </div>
```

## Filter 函数

详细配置可参考详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/filter)。

### blur

通过`blur-{size}`给图像设置高斯模糊

<Example class="flex flex-wrap gap-3">
  <img src="/assets/avatar/avatar.png" class="blur-sm w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur-md w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur-lg w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur-xl w-16 h-16">
</Example>

```html
  <img src="/assets/avatar/avatar.png" class="blur-sm w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur-md w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur-lg w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="blur-xl w-16 h-16">
```

### grayscale 与 invert

通过`grayscale` 将图像转换为灰度图像 `invert`给图像设置为反色

<Example class="flex flex-wrap gap-3">
  <img src="/assets/avatar/avatar.png" class="grayscale w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="invert w-16 h-16">
</Example>

```html
  <img src="/assets/avatar/avatar.png" class="grayscale w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="invert w-16 h-16">
```

### drop-shadow

通过`dsd-{size}`给图像设置一个阴影效果

`没起到作用`

<Example class="flex flex-wrap gap-3">
  <img src="/assets/avatar/avatar.png" class="dsd-sm w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-md w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-lg w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-xl w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-2xl w-16 h-16">
</Example>

```html
  <img src="/assets/avatar/avatar.png" class="dsd-sm w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-md w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-lg w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-xl w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="dsd-2xl w-16 h-16">
```

### bg-blur

通过`bg-blur-{size}`给图像设置一

<Example class="flex flex-wrap gap-3">
  <img src="/assets/avatar/avatar.png" class="bg-blur-sm w-16 h-16">
</Example>


## 缩放 

通过`scale{百分比}`给图片添加缩放比例

详细配置可参考详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/scale)。

<Example class="flex flex-wrap gap-3">
  <img src="/assets/avatar/avatar.png" class="scale-0 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-50 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-100 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-105 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-110 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-125 w-16 h-16 ml-4">
  <img src="/assets/avatar/avatar.png" class="scale-150 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="flip-x scale-150 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="flip-y scale-150 w-16 h-16 ml-5">
</Example>

```html
  <img src="/assets/avatar/avatar.png" class="scale-0 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-50 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-100 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-105 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-110 w-16 h-16">
  <img src="/assets/avatar/avatar.png" class="scale-125 w-16 h-16 ml-4">
  <img src="/assets/avatar/avatar.png" class="scale-150 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="flip-x scale-150 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="flip-y scale-150 w-16 h-16 ml-5">
```

## 旋转

通过`rotate-{旋转角度}`给图片增加一个顺时针旋转的样式

详细配置可参考详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/rotate)

<Example class="flex flex-wrap gap-3">
  <img src="/assets/avatar/avatar.png" class="rotate-0 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-12 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-45 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-90 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-180 w-16 h-16 ml-5">
</Example>

```html
  <img src="/assets/avatar/avatar.png" class="rotate-0 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-12 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-45 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-90 w-16 h-16 ml-5">
  <img src="/assets/avatar/avatar.png" class="rotate-180 w-16 h-16 ml-5">
```  
