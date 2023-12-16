# CSS 滤镜

## 高斯模糊

通过 `blur-*` 给图片添加高斯模糊样式。

<Example class="flex flex-wrap gap-6 p-6">
  <div v-for="item in blurList" :key="item">
    <StyleTile
      :tileClass="['w-16 h-16', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
    >
      <img src="/favicon.svg">
    </StyleTile>
  </div>
</Example>

## 灰度和反色

通过 `grayscale` 将图像转为灰度图像；通过 `invert` 将图像设置为反色。

<Example class="flex flex-wrap gap-6 p-6">
  <div v-for="item in grayList" :key="item">
    <StyleTile
      :tileClass="['w-16 h-16', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
    >
      <img src="/favicon.svg">
    </StyleTile>
  </div>
</Example>

## 形状阴影

通过 `drop-shadow-*` 给元素设置形状阴影效果，通常用在图片上。

<Example class="flex flex-wrap gap-6 p-6">
  <div v-for="item in dropShadowList" :key="item">
    <StyleTile
      :tileClass="['w-32 h-16', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
    >
      <img :class="['w-16', item]" src="/favicon.svg">
    </StyleTile>
  </div>
</Example>

## 背景模糊

通过 `backdrop-blur-*` 添加覆盖区域模糊样式。

<Example class="flex flex-wrap gap-6 p-6">
  <div v-for="item in bgBlurList" :key="item">
    <StyleTile
      :tileClass="['w-32 h-32 bg-contain', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
      :tileStyle="{backgroundImage: 'url(/favicon.svg)'}"
    >
      <div :class="['w-16 h-16 bg-white bg-opacity-30', item]"></div>
    </StyleTile>
  </div>
</Example>

## 禁用滤镜

通过 `filter-none` 来禁用之前添加的滤镜效果。

<Example class="flex flex-wrap gap-6 p-6">
  <StyleTile
    :tileClass="['w-16 h-16', 'filter-none']"
    :name="'filter-none'"
    :labelClass="['text-center', 'filter-none' ? 'font-mono text-sm' : '']"
    :label="'filter-none' || '原始'"
  >
    <img src="/favicon.svg">
  </StyleTile>
</Example>

<script setup>
    const blurList = [
        '',
        'blur-none',
        'blur-sm',
        'blur',
        'blur-md',
        'blur-lg',
        'blur-xl',
    ];
    const grayList = [
        '',
        'grayscale',
        'invert'
    ];
    const dropShadowList = [
        '',
        'drop-shadow-none',
        'drop-shadow-sm',
        'drop-shadow',
        'drop-shadow-md',
        'drop-shadow-lg',
        'drop-shadow-xl',
        'drop-shadow-2xl',
    ];
    const bgBlurList = [
        '',
        'backdrop-blur-none',
        'backdrop-blur-sm',
        'backdrop-blur',
        'backdrop-blur-md',
        'backdrop-blur-lg',
        'backdrop-blur-xl',
        'backdrop-blur-2xl',
        'backdrop-blur-3xl',
    ];
</script>
