# 阴影

## 阴影大小

使用 `shadow-*` 设置不同大小的阴影。

<Example class="flex flex-wrap gap-8 p-8" background="light-grid">
  <div v-for="item in shadowList" :key="item">
    <StyleTile
      :tileClass="['w-16 h-16 canvas', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="true"
    />
  </div>
</Example>

<script setup>
  const shadowList = [
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
