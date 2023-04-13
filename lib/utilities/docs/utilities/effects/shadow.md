# 盒阴影

## 阴影大小

使用`shadow-*`设置阴影大小。

<Example background="light-grid">
  <div class="-grid -grid-cols-3 -gap-8">
    <div v-for = "item in sizeJson" class="flex -flex-col -items-center">
      <div :class="item" class="-w-24 -h-24"></div>
      <div class="text-center mt-2">{{item}}</div>
    </div>
  </div>
</Example>

<script setup>
  const sizeJson = [
    'shadow-none',
    'shadow-sm',
    'shadow',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-inner',
  ];
</script>
