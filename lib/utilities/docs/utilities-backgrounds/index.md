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

<Example class="flex flex-wrap gap-3">
  <div v-for = "item in [
  {name:'primary',colorCode:'#2B80FF'},
  {name:'secondary',colorCode:'#2B80FF'},
  {name:'success',colorCode:'#2B80FF'},
  {name:'warning',colorCode:'#2B80FF'},
  {name:'danger',colorCode:'#2B80FF'},
  {name:'important',colorCode:'#2B80FF'},
  {name:'special',colorCode:'#2B80FF'},
  ]" 
  :key="item.name" 
  :class ="'bg-' + item.name" 
  class="w-24 h-20 flex justify-center text-canvas" > 
    <div class="text-center justify-center h-12 mt-4">
      <div>{{item.name}}</div>
      <div>{{item.colorCode}}</div>
    </div>
  </div>
  <div class="bg-primary bd-solid mr-3 w-24 h-20 flex justify-center text-canvas">
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
  <div class="bg-success mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> success </div>
      <div> #17CE97</div>
    </div>
  </div>
  <div class="bg-warning mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> warning </div>
      <div> #FFA34D </div>
    </div>
  </div>
  <div class="bg-danger mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> danger </div>
      <div> #FF5858 </div>
    </div>
  </div>
  <div class="bg-important mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> important </div>
      <div> #FF4F9E </div>
    </div>
  </div>
  <div class="bg-special mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> special </div>
      <div> #9D5EFF </div>
    </div>
  </div>
</Example>
<Example class="flex flex-wrap gap-3">
  <div v-for = "item in [
  {name:'white',colorCode:'#2B80FF'},
  {name:'lighter',colorCode:'#2B80FF'},
  {name:'light',colorCode:'#2B80FF'},
  {name:'gray',colorCode:'#2B80FF',fontWhite:true},
  {name:'dark',colorCode:'#2B80FF',fontWhite:true},
  {name:'darker',colorCode:'#2B80FF',fontWhite:true},
  {name:'black',colorCode:'#2B80FF',fontWhite:true},
  {name:'surface',colorCode:'#2B80FF'},
  {name:'inverse',colorCode:'#2B80FF',fontWhite:true},
  {name:'transparent',colorCode:'#2B80FF'},
  {name:'inherite',colorCode:'#2B80FF'},
  ]" 
  :key ="item.name" 
  :class ="item.fontWhite ? 'text-canvas' :'', 'bg-' + item.name" 
  class="w-24 h-20 flex justify-center bd-current" > 
    <div class="text-center justify-center h-12 mt-4">
      <div>{{item.name}}</div>
      <div>{{item.colorCode}}</div>
    </div>
  </div>
</Example>

```html
<div class="bg-primary bd-solid mr-3 w-24 h-20 flex justify-center text-canvas">
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
<div class="bg-success mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> success </div>
    <div> #17CE97</div>
  </div>
</div>
<div class="bg-warning mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> warning </div>
    <div> #FFA34D </div>
  </div>
</div>
<div class="bg-danger mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> danger </div>
    <div> #FF5858 </div>
  </div>
</div>
<div class="bg-important mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> important </div>
    <div> #FF4F9E </div>
  </div>
</div>
<div class="bg-special mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> special </div>
    <div> #9D5EFF </div>
  </div>
</div>
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

<Example class="flex flex-wrap gap-3">
  <div class="bg-white bd-solid mr-3 w-24 h-20 flex justify-center">
    <div class="text-center justify-center h-12 mt-4">
      <div> primary </div>
      <div> #FFFFFF </div>
    </div>
  </div>
  <div class="bg-lighter mr-3 w-24 h-20 flex justify-center">
    <div class="text-center justify-center h-12 mt-4">
      <div> lighter </div>
      <div> #F5F5F5 </div>
    </div>
  </div>
  <div class="bg-light mr-3 w-24 h-20 flex justify-center">
    <div class="text-center justify-center h-12 mt-4">
      <div> light </div>
      <div> #E3E4E9 </div>
    </div>
  </div>
  <div class="bg-gray mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> gray </div>
      <div> #9EA3B0 </div>
    </div>
  </div>
  <div class="bg-dark mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> dark </div>
      <div> #5E626D </div>
    </div>
  </div>
  <div class="bg-darker mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> darker </div>
      <div> #1B1F28 </div>
    </div>
  </div>
  <div class="bg-black mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> black </div>
      <div> #000000 </div>
    </div>
  </div>
  <div class="bg-canvas mr-3 w-24 h-20 flex justify-center">
    <div class="text-center justify-center h-12 mt-4">
      <div> canvas </div>
      <div> #FFFFFF </div>
    </div>
  </div>
  <div class="bg-surface mr-3 w-24 h-20 flex justify-center">
    <div class="text-center justify-center h-12 mt-4">
      <div> surface </div>
      <div> #F5F5F5 </div>
    </div>
  </div>
  <div class="bg-inverse mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> inverse </div>
      <div> #3C4353 </div>
    </div>
  </div>
</Example>

```html
<div class="bg-white bd-solid mr-3 w-24 h-20 flex justify-center">
  <div class="text-center justify-center h-12 mt-4">
    <div> primary </div>
    <div> #FFFFFF </div>
  </div>
</div>
<div class="bg-lighter mr-3 w-24 h-20 flex justify-center">
  <div class="text-center justify-center h-12 mt-4">
    <div> lighter </div>
    <div> #F5F5F5 </div>
  </div>
</div>
<div class="bg-light mr-3 w-24 h-20 flex justify-center">
  <div class="text-center justify-center h-12 mt-4">
    <div> light </div>
    <div> #E3E4E9 </div>
  </div>
</div>
<div class="bg-gray mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> gray </div>
    <div> #9EA3B0 </div>
  </div>
</div>
<div class="bg-dark mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> dark </div>
    <div> #5E626D </div>
  </div>
</div>
<div class="bg-darker mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> darker </div>
    <div> #1B1F28 </div>
  </div>
</div>
<div class="bg-black mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> black </div>
    <div> #000000 </div>
  </div>
</div>
<div class="bg-canvas mr-3 w-24 h-20 flex justify-center">
  <div class="text-center justify-center h-12 mt-4">
    <div> canvas </div>
    <div> #FFFFFF </div>
  </div>
</div>
<div class="bg-surface mr-3 w-24 h-20 flex justify-center">
  <div class="text-center justify-center h-12 mt-4">
    <div> surface </div>
    <div> #F5F5F5 </div>
  </div>
</div>
<div class="bg-inverse mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> inverse </div>
    <div> #3C4353 </div>
  </div>
</div>
```

## 默认和继承背景色

可以通过`bg-inherit`继承父类背景色 通过'bg-transparent'，得到默认透明背景色 

<Example class="flex gap-3 bg-gray">
  <div class="bg-transparent bd bd-black mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> surface </div>
      <div> #9EA3B0 </div>
    </div>
  </div>
  <div class="bg-inherit bd bd-black mr-3 w-24 h-20 flex justify-center text-canvas">
    <div class="text-center justify-center h-12 mt-4">
      <div> inverse </div>
      <div> #9EA3B0</div>
    </div>
  </div>
</Example>

```html
<div class="bg-transparent bd bd-black mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> surface </div>
    <div> #9EA3B0</div>
  </div>
</div>
<div class="bg-inherit bd bd-black mr-3 w-24 h-20 flex justify-center text-canvas">
  <div class="text-center justify-center h-12 mt-4">
    <div> inverse </div>
    <div> #9EA3B0</div>
  </div>
</div>
```

