# 定位

用于控制元素在DOM中的位置的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in positionJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 使用方法

### `static` 与 `absolute`

使用 `static` 根据常规的文档流来定位元素，浏览器默认 `position` 取值就是 `static`。任何偏移都将被忽略，而且该元素不会作为绝对定位的子元素的位置参考。

<Example background="light-grid">
  <div class="static bg-surface h-20 mb-3">
    <p>Static 父元素</p>
    <div class="absolute w-32 h-8 bg-secondary text-white text-center leading-8">
      <p>Absolute 子元素</p>
    </div>
  </div>
</Example>

```html
<div class="static h-20 ...">
  <p>Static 父元素</p>
  <div class="absolute ...">
    <p>Absolute 子元素</p>
  </div>
</div>
```

### `relative` 与 `absolute`

使用 `relative` 根据常规的文档流来定位元素。偏移量是相对于元素的正常位置计算的，并且该元素将作为绝对定位的子元素的位置参考。

使用 `absolute` 将一个元素定位在文档常规流之外，使相邻元素的行为就像该元素不存在一样。偏移量是相对于最近的位置不是 `static` 的父元素计算的，而且该元素将作为其他绝对定位的子元素的位置参考。

<Example>
  <div class="relative bg-surface h-20">
    <p>Relative 父元素</p>
    <div class="absolute bottom-0 left-0 w-32 h-8 bg-secondary text-white text-center leading-8">
      <p>Absolute 子元素</p>
    </div>
  </div>
</Example>

```html
<div class="relative h-20 ...">
  <p>Relative 父元素</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute 子元素</p>
  </div>
</div>
```

### `sticky`

`sticky` 元素根据正常文档流进行定位，然后相对它的最近滚动祖先和 containing block，包括 table-related 元素，基于 top、right、bottom 和 left 的值进行偏移。偏移值不会影响任何其他元素的位置。

<Example class="bg-surface">
  <div class="h-48 of-auto mt-4">
    <div class="sticky top-0 bg-secondary ">黄鹤楼送孟浩然之广陵</div>
    <div class="py-4">
      <p>故人西辞黄鹤楼，</p>
      <p>烟花三月下扬州。</p>
      <p>孤帆远影碧空尽，</p>
      <p>唯见长江天际流。</p>
    </div>
    <div class="sticky top-0 bg-secondary ">闻王昌龄左迁龙标遥有此寄</div>
    <div class="py-4">
      <p>杨花落尽子规啼，</p>
      <p>闻道龙标过五溪。</p>
      <p>我寄愁心与明月，</p>
      <p>随君直到夜郎西。</p>
    </div>
    <div class="sticky top-0 bg-secondary ">宣州谢朓楼饯别校书叔云</div>
    <div class="py-4">
      <p>弃我去者，昨日之日不可留；</p>
      <p>乱我心者，今日之日多烦忧。</p>
      <p>长风万里送秋雁，对此可以酣高楼。</p>
      <p>蓬莱文章建安骨，中间小谢又清发。</p>
      <p>俱怀逸兴壮思飞，欲上青天揽明月。</p>
      <p>抽刀断水水更流，举杯消愁愁更愁。</p>
      <p>人生在世不称意，明朝散发弄扁舟。</p>
    </div>
  </div>
</Example>

```html
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

### `fixed`

使用 `fixed` 来定位一个元素相对于浏览器窗视口的位置。偏移量是相对于视口计算的，且该元素将作为绝对定位的子元素的位置参考。

<script setup>
  const positionJson = [
    {name: 'static', desc: 'position: static;'},
    {name: 'fixed', desc: 'position: fixed;'},
    {name: 'absolute', desc: 'position: absolute;'},
    {name: 'relative', desc: 'position: relative;'},
    {name: 'sticky', desc: 'position: sticky;'},
  ]
</script>
