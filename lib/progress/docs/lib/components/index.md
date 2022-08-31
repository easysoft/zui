# 进度条

## 基本用法

使用实体类 `progress` 和 `progress-bar` 应用进度条CSS组件。

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

给 `.progress-bar` 元素添加 `.*` 等颜色工具类，得到各种颜色的进度条。

 <Example>
     <template v-for="item in array" >
       <div class="progress mb-5">
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

给 `.progress` 元素添加 `.rounded-*` 工具类，给进度条添加不同大小的圆角。

<Example>
   <div v-for="item in arrayRounded" :class="item" class="progress mb-5">
     <div class="progress-bar" style="width: 40%">
     </div>
   </div>
</Example>

```html
  <div class="progress rounded-sm">
    <div class="progress-bar" style="width: 40%">
    </div>
  </div>
  ...
```
## 特殊效果

### 条纹效果

给 `.progress` 元素添加 `.progress-striped` 修饰类，给进度条添加条纹效果。

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

给使用了 `progress-striped` 修饰类的元素添加 `.active` 修饰类,给条纹进度条添加向左滑动的动画

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

给 `.progress` 元素添加多个 `progress-bar` 元素，使多个进度条堆叠展示。

<Example> 
 <div class="progress">
   <div class="progress-bar success" style="width: 40%">
   </div>
   <div class="progress-bar warning" style="width: 20%">
   </div>
   <div class="progress-bar danger" style="width: 10%">
   </div>
 </div>
</Example>

```html
 <div class="progress">
   <div class="progress-bar success" style="width: 40%">
   </div>
   <div class="progress-bar warning" style="width: 20%">
   </div>
   <div class="progress-bar danger" style="width: 10%">
   </div>
 </div>
```

### 添加标签

通常使用标签时用 CSS 工具类 `bg-canvas` 去掉背景色。

<Example> 
 <div class="progress bg-canvas">
   <div class="progress-bar success" style="width: 40%">
   </div>
   <label class="ml-4">40%</label>
 </div>
</Example>

```html
 <div class="progress bg-canvas">
   <div class="progress-bar success" style="width: 40%">
   </div>
   <label class="ml-4">40%</label>
 </div>
```

## CSS 类

进度条提供了如下 CSS 类
 | 类        | 类型           | 作用  |
 | ------------- |:-------------:| ----- |
 | `progress`          | 实体类 | 元素作为进度条组件 |
 | `progress-bar`      | 实体类 | 元素作为进度条组件 |
 | `progress-striped`  | 修饰类 | 为进度条组件启用条纹样式 |
 | `active`            | 修饰类 | 为条纹样式进度条组件启用动画效果 |

## CSS变量
| 变量名称 | 变量含义 |
| -------- | -------- |
| --progress-bg           | 进度条组件背景颜色 |
| --progress-bar-color    | 进度条组件颜色     |
| --progress-radius       | 进度条组件圆角大小 |
| --progress-striped-size | 进度条组件条纹大小 |

 <script setup>
   const array = [
     "primary",
     "secondary",
     "success",
     "warning",
     "danger",
   ];
   const arrayRounded = [
     'rounded-sm',
     'rounded',
     'rounded-md',
     'rounded-lg',
     'rounded-xl',
     'rounded-full',
     'rounded-none',
     'circle',
   ]
</script>
