# 背景色

详细配置可参考详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/container)。

## 主题背景色

 | 修饰类        | 定义  |
 |:------------- |:----- |
 | `bg-primary`     | `background-color: rgb(43,128,255)`|
 | `bg-secondary`   | `background-color: rgb(55,178,254)`|
 | `bg-success`     | `background-color: rgb(23,206,151)`|
 | `bg-warning`     | `background-color: rgb(255,163,77)`|
 | `bg-danger`      | `background-color: rgb(255,88,88)`|
 | `bg-important`   | `background-color: rgb(255,79,158)`|
 | `bg-special`     | `background-color: rgb(157,94,255)`|

<Example class="flex gap-3">
  <div class="bg-primary mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> primary </div>
      <div> #2B80FF </div>
    </div>
  </div>
  <div class="bg-secondary mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> secondary </div>
      <div> #37B2FE </div>
    </div>
  </div>
  <div class="bg-primary mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> primary </div>
      <div> #2B80FF </div>
    </div>
  </div>
  <div class="bg-primary mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> primary </div>
      <div> #2B80FF </div>
    </div>
  </div>
  <div class="bg-primary mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> primary </div>
      <div> #2B80FF </div>
    </div>
  </div>
  <div class="bg-primary mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> primary </div>
      <div> #2B80FF </div>
    </div>
  </div>
</Example>

```html
<div class="bg-primary inline-block mr-3 w-16 h-12"></div>
<div class="bg-secondary inline-block mr-3 w-16 h-12"></div>
<div class="bg-success inline-block mr-3 w-16 h-12"></div>
<div class="bg-warning inline-block mr-3 w-16 h-12"></div>
<div class="bg-danger inline-block mr-3 w-16 h-12"></div>
<div class="bg-important inline-block mr-3 w-16 h-12"></div>
<div class="bg-special inline-block mr-3 w-16 h-12"></div>
```

## 常用背景色
  | 修饰类        | 定义  |
  |:------------- |:----- |
  | `bg-white`       | `background-color: rgb(255,255,255)`|
  | `bg-lighter`     | `background-color: rgb(245,245,245)`|
  | `bg-light`       | `background-color: rgb(227,228,233)`|
  | `bg-gray`     | `background-color: rgb(255,163,77)`|
  | `bg-dark`      | `background-color: rgb(255,88,88)`|
  | `bg-darker`   | `background-color: rgb(255,79,158)`|
  | `bg-black`     | `background-color: rgb(157,94,255)`|

<Example>
  <div class="w-full h-16 bg-dark flex gap-3 justify-center items-center">
    <div class="bg-white inline-block mr-3 w-16 h-12"></div>
    <div class="bg-lighter inline-block mr-3 w-16 h-12"></div>
    <div class="bg-light inline-block mr-3 w-16 h-12"></div>
    <div class="bg-gray inline-block mr-3 w-16 h-12"></div>
    <div class="bg-dark inline-block mr-3 w-16 h-12"></div>
    <div class="bg-darker inline-block mr-3 w-16 h-12"></div>
    <div class="bg-black inline-block mr-3 w-16 h-12"></div>
  </div>
</Example>

```html
<div class="bg-white inline-block mr-3 w-16 h-12"></div>
<div class="bg-lighter inline-block mr-3 w-16 h-12"></div>
<div class="bg-light inline-block mr-3 w-16 h-12"></div>
<div class="bg-gray inline-block mr-3 w-16 h-12"></div>
<div class="bg-dark inline-block mr-3 w-16 h-12"></div>
<div class="bg-darker inline-block mr-3 w-16 h-12"></div>
<div class="bg-black inline-block mr-3 w-16 h-12"></div>
```
