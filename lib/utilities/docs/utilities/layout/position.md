# 定位

用于控制元素在DOM中的位置的工具类。

## 使用方法

<Example class="relative">
  <div class="static bg-surface h-20 mb-3">
    <p>Static 父元素</p>
    <div class="absolute bottom-0 left-0">
      <p class="w-32 h-8 bg-secondary text-white text-center leading-8">Absolute 子元素</p>
    </div>
  </div>
</Example>
<Example>
  <div class="relative bg-surface h-20">
    <p>Relative 父元素</p>
    <div class="absolute bottom-0 left-0">
      <p class="w-32 h-8 bg-secondary text-white text-center leading-8">Absolute 子元素</p>
    </div>
  </div>

  <div class="h-48 of-auto mt-4">
    <div class="sticky top-0 bg-secondary ">Sticky 1</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
    <div class="sticky top-0 bg-secondary ">Sticky 2</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
    <div class="sticky top-0 bg-secondary ">Sticky 3</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
  </div>
</Example>

```html
<div class="static h-20">
  <p>Static 父元素</p>
  <div class="absolute bottom-0 left-0">
    <p>Absolute 子元素</p>
  </div>
</div>
<div class="relative h-20">
  <p>Relative 父元素</p>
  <div class="absolute bottom-0 left-0">
    <p>Absolute 子元素</p>
  </div>
</div>
<div class="fixed ...">
  Fixed 子元素
</div>

<div class="h-48 of-auto">
  <div class="sticky top-0">Sticky 1</div>
  <div class="py-4">
    <!-- ... -->
  </div>
  <div class="sticky top-0">Sticky 2</div>
  <div class="py-4">
    <!-- ... -->
  </div>
  <div class="sticky top-0">Sticky 3</div>
  <div class="py-4">
    <!-- ... -->
  </div>
</div>
```

使用 `static` 根据常规的文档流来定位元素，浏览器默认 `position` 取值就是 `static`。任何偏移都将被忽略，而且该元素不会作为绝对定位的子元素的位置参考。

使用 `relative` 根据常规的文档流来定位元素。偏移量是相对于元素的正常位置计算的，并且该元素将作为绝对定位的子元素的位置参考。

使用 `absolute` 将一个元素定位在文档常规流之外，使相邻元素的行为就像该元素不存在一样。偏移量是相对于最近的位置不是 `static` 的父元素计算的，而且该元素将作为其他绝对定位的子元素的位置参考。

使用 `fixed` 来定位一个元素相对于浏览器窗视口的位置。偏移量是相对于视口计算的，且该元素将作为绝对定位的子元素的位置参考。

用于 `sticky` 定位元素 `relative` 直到它超过指定的阈值，然后将其视为固定直到其父元素离开屏幕。偏移量是相对于元素的正常位置计算的，且该元素将作为其绝对定位的子元素的位置参考。

## 默认类参考

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>修饰类</th>
        <th>定义</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in positionJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const positionJson = [
    {name: 'static', desc: 'position: static;'},
    {name: 'fixed', desc: 'position: fixed;'},
    {name: 'absolute', desc: 'position: absolute;'},
    {name: 'relative', desc: 'position: relative;'},
    {name: 'sticky', desc: 'position: sticky;'},
  ]
</script>