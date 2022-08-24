# 盒阴影

## 阴影颜色

使用`shadow-*`设置元素阴影颜色

<Example>
  <div
  v-for = "index in 2"
  :class="index===2 ? 'bd' : '' , 'bd-l-0', 'bd-r-0', 'bd-b-0' "
  class="flex flex-wrap gap-3 mt-1 ">
    <div :key="item"
    v-for = "item in index===1 ? arrayTheme : arrayNormal"
    class="w-16 h-20 mt-4" >
      <div :class="'shadow-' + item.name"  class="shadow w-16 h-8" ></div>
      <div class="text-center h-12">
        <div>{{item.name}}</div>
        <div>{{item.colorCode}}</div>
      </div>
    </div>
  </div>
</Example>

```html
<div class="shadow shadow-primary ...">
</div>
```

## 阴影大小

使用`shadow-*`设置阴影大小

 <Example>
  <div class="flex flex-wrap gap-3 mt-1">
    <div :key="item" v-for ="item in arraySize" class="w-24 h-32 mt-4" >
      <div :class="item"  class="shadow-primary w-24 h-24" ></div>
      <div class="text-center h-4 mt-4">
        <div>{{item}}</div>
      </div>
    </div>
  </div>
</Example>

```html
<div class="shadow-sm shadow-primary ...">
</div>
```

<script setup>
  const arrayTheme =  [
    {name:'primary',colorCode:'#2B80FF'},
    {name:'secondary',colorCode:'#37B2FE'},
    {name:'success',colorCode:'#17CE97'},
    {name:'warning',colorCode:'#FFA34D'},
    {name:'danger',colorCode:'#FF5858'},
    {name:'important',colorCode:'#FF4F9E'},
    {name:'special',colorCode:'#9D5EFF'},
  ];
  const arrayNormal = [
    {name:'white',colorCode:'#FFFFFF'},
    {name:'lighter',colorCode:'#F5F5F5'},
    {name:'light',colorCode:'#E3E4E9'},
    {name:'gray',colorCode:'#9EA3B0'},
    {name:'dark',colorCode:'#5E626D'},
    {name:'darker',colorCode:'#1B1F28'},
    {name:'black',colorCode:'#000000'},
    {name:'surface',colorCode:'#F5F5F5'},
    {name:'inverse',colorCode:'#3C4353'},
    {name:'transparent',colorCode:''},
    {name:'inherit',colorCode:''},
    {name:'current',colorCode:''},
  ];
  const arraySize = [
    'shadow-sm',
    'shadow',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-inner',
    'shadow-none',
  ];
</script>
