# 圆角

## 预设圆角

圆角能让界面元素更加具有亲和力，在 ZUI 中预设了一系列的圆角，具体如下：

<Example class="justify-around gap-4 row">
  <div v-for="rounded in roundedList" :key="rounded.code" class="text-center">
    <CopyCode
      :class="`bg-secondary hover-scale mx-auto w-14 h-14 ${rounded.class || `rounded-${rounded.code}`}`"
      :code="rounded.class || `rounded-${rounded.code}`"
      :tip="`.${rounded.class || `rounded-${rounded.code}`}`"
      :id="`example-rounded-${rounded.code}`"
      copyTip="已复制类名"
    />
    <div class="mt-2">{{rounded.name}}</div>
    <CssPropValue class="font-mono text-sm muted" :target="`#example-rounded-${rounded.code}`" prop="border-radius" />
  </div>
</Example>

在 ZUI 中可以通过 CSS 工具类来设置圆角，详细用法参加 [CSS 工具类 / 边框 / 边框圆角](/utilities/borders/utilities/border-radius) 文档。

::: tip 修改圆角配置

可以通过定制主题实现，具体参见 [主题](/guide/theme/) 文档。

:::

<script setup>
const roundedList = [
    {code: 'sm', name: '小圆角'},
    {code: 'default', name: '默认圆角', class: 'rounded'},
    {code: 'md', name: '中等圆角'},
    {code: 'lg', name: '大圆角'},
    {code: 'xl', name: '超大圆角'},
    {code: '2xl', name: '2x 超大圆角'},
    {code: '3xl', name: '3x 超大圆角'},
];
</script>
