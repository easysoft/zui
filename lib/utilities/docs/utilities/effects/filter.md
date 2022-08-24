# Filter函数

## 高斯模糊

通过`blur-*`给图片添加高斯模糊样式

<Example class="flex flex-wrap gap-3">
  <div v-for="item in arrayBlur">
    <img src="/assets/avatar/avatar.png" :class="item" class="w-16 h-16">
    <div class="text-center">{{item}}</div>
  </div>
</Example>

```html
<img class="blur-sm" src="...">
```

## 灰度和反色

通过`grascale`将图像转为灰度图像;通过`invert`将图像设置为反色。

<Example class="flex flex-wrap gap-3">
  <div v-for = "item in arrayGras">
    <img src="/favicon.svg" :class="item" class="w-16 h-16">
    <div class="text-center">{{item}}</div>
  </div>
</Example>

```html
  <img class="grascale" ... >
```


## 图像阴影

通过`dsd-*`给图像设置阴影效果

<Example class="flex flex-wrap gap-3">
  <div v-for = "item in arrayDsd">
    <img src="/favicon.svg" :class="item" class="w-16 h-16">
    <div class="text-center mt-2">{{item}}</div>
  </div>
</Example>

```html
  <img class="dsd-sm" ... >
```

## 通过`bg-blur-*`添加覆盖区域模糊样式

<Example class="flex flex-wrap gap-3 w-full h-full">
  <div v-for = "item in arrayBgBlur" class="relative w-24 h-24">  
    <img src="/favicon.svg" class="w-full h-16 absolute">
    <div :class="item" class="z-10 w-full h-16 absolute bg-transparent">
      <div class="text-center -text-2xl text-canvas mt-4">ZUI3</div> 
    </div>
    <div class="text-center z-10 w-full h-6 absolute bottom-0">{{item}}</div>
  </div>
</Example>

```html
  <div class="relative w-24 h-16">
    <img class="absolute w-full h-full  src=..." >
    <div class="absolute w-full h-full bg-blur-sm">
      ZUI3
    </div> 
  </div>
```

<script setup>
  const arrayBlur = [
    'blur-sm',
    'blur',
    'blur-md',
    'blur-lg',
    'blur-xl',
  ];
  const arrayGras = [
    'grayscale',
    'invert'
  ];
  const arrayDsd = [
    'dsd-sm',
    'dsd',
    'dsd-md',
    'dsd-lg',
    'dsd-xl',
    'dsd-2xl',
  ];
  const arrayBgBlur = [
    'bg-blur-sm',
    'bg-blur',
    'bg-blur-md',
    'bg-blur-lg',
    'bg-blur-xl',
    'bg-blur-2xl',
    'bg-blur-3xl',
    'bg-blur-none',
  ]
</script>
