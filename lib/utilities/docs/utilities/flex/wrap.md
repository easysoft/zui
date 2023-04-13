# wrap

添加`flex-*`应用CSS`flex-wrap`相关属性设置Flex容器中换行方式

<script setup>
  const arrayWrap = [
    'flex-wrap',
    'flex-wrap-reverse',
    'flex-nowrap'
  ];
</script>

<Example v-for="item in arrayWrap">
  <h3>{{item}}</h3>
  <div :class="item" class="flex gap-3 mt-3 -bg-stripes-blue">
    <div v-for="index in 10" class="bg-primary w-24 h-16">
      <div class="mt-5 text-canvas text-center">{{index}}</div>
    </div>
  </div>
</Example>

```html
  <div class="flex flex-wrap ...">
    ...
  </div>
```
