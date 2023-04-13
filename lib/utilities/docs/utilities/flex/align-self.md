# align-self

使用 self-* 应用 CSS align-self 属性设置当前元素在 Grid 或 Flex 容器中的交叉轴方向上的对齐方式。

 <script setup>
  const alignSelfJson = [
    'self-auto',
    'self-start',
    'self-end',
    'self-center',
    'self-stretch',
    'self-baseline',
  ];
 </script>

 <template v-for="item in alignSelfJson">
  <h3>{{item}}</h3>
  <Example class="p-0">
    <div class="flex items-center h-48 gap-2 -bg-slate-200">
      <template v-for="index in 5">
        <div :class="index === 1 ? item : ''" class="bg-primary -flex-grow -flex -items-center -justify-center" :style="{'min-height': index * 20 + 'px'}">
          <div class="text-canvas">{{index === 1 ? item : 'default'}}</div>
        </div>
      </template>
    </div>
  </Example>
</template>

```html
  <div class="flex flex-wrap ...">
    <div class="align-auto ...">
    ...
  </div>
```
