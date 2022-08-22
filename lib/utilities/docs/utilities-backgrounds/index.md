# 背景色

详细配置可参考详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/container)。


<Example v-for = "index in 2" class="flex flex-wrap gap-3">
  <div :key="item"
  v-for = "item in index===1 ? arrayTheme : arrayNormal" 
  :class ="item.fontBlack ? '' : 'text-canvas', 'bg-' + item.name" 
  class="w-24 h-20 flex justify-center bd-current" > 
    <div class="text-center justify-center h-12 mt-4">
      <div>{{item.name}}</div>
      <div>{{item.colorCode}}</div>
    </div>
  </div>
</Example>

```html
<div class="bg-primary w-24 h-20 ...">
  ...
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
  {name:'white',colorCode:'#FFFFFF',fontBlack:true},
  {name:'lighter',colorCode:'#F5F5F5',fontBlack:true},
  {name:'light',colorCode:'#E3E4E9',fontBlack:true},
  {name:'gray',colorCode:'#9EA3B0'},
  {name:'dark',colorCode:'#5E626D'},
  {name:'darker',colorCode:'#1B1F28'},
  {name:'black',colorCode:'#000000'},
  {name:'surface',colorCode:'#F5F5F5',fontBlack:true},
  {name:'inverse',colorCode:'#3C4353'},
  {name:'transparent',colorCode:'#FFFFFF',fontBlack:true},
  {name:'inherite',colorCode:'#FFFFFF',fontBlack:true},
  ]
</script>
