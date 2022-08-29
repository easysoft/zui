# 进度条

## 基本用法

使用实体类`progress`和`progress-bar`应用进度条CSS组件。

<Example>
   <div class="progress">
     <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
       <span class="sr-only">40% Primary</span>
     </div>
   </div>
</Example>

```html
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% Primary</span>
    </div>
  </div>
```

## 颜色主题

给`.progress-bar`应用元素添加`bg-*`工具类，得到各种颜色的进度条。

 <Example>
   <div
   v-for = "index in 2"
   :class="index===2 ? 'bd' : '' , 'bd-l-0', 'bd-r-0', 'bd-b-0' "
   class="mt-1">
     <template v-for="item in index ===1 ? arrayTheme : arrayNormal" >
       <div  class="progress">
         <div :class="'bg-' + item.name"  class="progress-bar"  role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
         <span class="sr-only">40% progress</span>
         </div>
       </div>
       <div class="text-center mb-4">
         {{item.name}}
       </div>
     </template>
   </div>
 </Example>

```html
  <div class="progress">
    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
      <span class="sr-only">40% progress</span>
    </div>
  </div>
  ... 
```

 ## 特殊效果

 ### 条纹效果

 给`.progress`元素添加`.progress-striped`修饰类，给滑动条添加条纹效果

<Example>
   <div class="progress progress-striped">
     <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
       <span class="sr-only">40% Progress</span>
     </div>
   </div>
</Example>


 ```html
   <div class="progress progress-striped">
     <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
       <span class="sr-only">40% Progress</span>
     </div>
   </div>
 ```

 ###  动画效果

 给使用了`progress-striped`修饰类的元素添加`.active`修饰类,给条纹滑动条添加向左滑动的动画

<Example>
   <div class="progress progress-striped active">
     <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
       <span class="sr-only">40% Progress</span>
     </div>
   </div>
</Example>

 ```html
   <div class="progress progress-striped active">
     <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
       <span class="sr-only">40% Progress</span>
     </div>
   </div>
 ```

 ### 堆叠效果

 给`.progress`元素添加多个`progress-bar`元素，使多个进度条堆叠展示。

<Example>
 <div class="progress progress-striped active">
   <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
     <span class="sr-only">40% Success</span>
   </div>
   <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
     <span class="sr-only">20% Warning</span>
   </div>
   <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
     <span class="sr-only">10% danger</span>
   </div>
 </div>
</Example>

```html
 <div class="progress progress-striped active">
   <div class="progress-bar bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
     <span class="sr-only">40% Success</span>
   </div>
   <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
     <span class="sr-only">20% Warning</span>
   </div>
   <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
     <span class="sr-only">10% danger</span>
   </div>
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
   ]
 </script>


