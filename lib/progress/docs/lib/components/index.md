# 进度条

## 基本用法

使用实体类`progress`和`progress-bar`应用进度条CSS组件。

<Example>
   <div class="progress">
     <div class="progress-bar" role="progressbar" style="width: 40%">
     </div>
   </div>
</Example>

```html
  <div class="progress">
    <div class="progress-bar" role="progressbar"  style="width: 40%">
    </div>
  </div>
```

## 颜色主题

给`.progress-bar`元素添加`.primary`等颜色工具类，得到各种颜色的进度条。

 <Example>
     <template v-for=" item in array" >
       <div  class="progress">
         <div :class="item" class="progress-bar" style="width: 40%">
         </div>
       </div>
     </template>
 </Example>

```html
  <div class="progress">
    <div class="progress-bar primary" style="width: 40%">
    </div>
  </div>
  ... 
```
## 圆角大小


## 特殊效果

### 条纹效果

 给`.progress`元素添加`.progress-striped`修饰类，给滑动条添加条纹效果

<Example>
   <div class="progress progress-striped">
     <div class="progress-bar" style="width: 40%">
     </div>
   </div>
</Example>


 ```html
   <div class="progress progress-striped">
     <div class="progress-bar"  style="width: 40%">
     </div>
   </div>
 ```

 ###  动画效果

 给使用了`progress-striped`修饰类的元素添加`.active`修饰类,给条纹滑动条添加向左滑动的动画

<Example>
   <div class="progress progress-striped active">
     <div class="progress-bar" style="width: 40%">
     </div>
   </div>
</Example>

 ```html
   <div class="progress progress-striped active">
     <div class="progress-bar" style="width: 40%">
     </div>
   </div>
 ```

 ### 堆叠效果

 给`.progress`元素添加多个`progress-bar`元素，使多个进度条堆叠展示。

<Example class="flex gap-3">
 <div class="progress progress-striped active">
   <div class="progress-bar success" style="width: 40%">
   </div>
   <div class="progress-bar warning" style="width: 20%">
   </div>
   <div class="progress-bar danger" style="width: 10%">
   </div>
 </div>
</Example>

```html
 <div class="progress progress-striped active">
   <div class="progress-bar success" style="width: 40%">
   </div>
   <div class="progress-bar warning" style="width: 20%">
   </div>
   <div class="progress-bar danger" style="width: 10%">
   </div>
 </div>
```

 <script setup>
   const array = [
     "primary",
     "secondary",
     "success",
     "warning",
     "danger",
   ]
</script>


