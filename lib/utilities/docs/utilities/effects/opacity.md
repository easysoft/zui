# 透明度

使用 `opacity-*` 设置元素的透明度。

<Example class="flex flex-wrap gap-8 p-8">
  <div v-for="item in opacityList" :key="item">
    <StyleTile
      :tileClass="['w-16 h-16', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
    >
      <img src="/favicon.svg">
    </StyleTile>
  </div>
</Example>


<script setup>
  const opacityList = [
    'opacity-0',
    'opacity-5',
    'opacity-10',
    'opacity-20',
    'opacity-25',
    'opacity-30',
    'opacity-40',
    'opacity-50',
    'opacity-60',
    'opacity-70',
    'opacity-75',
    'opacity-80',
    'opacity-90',
    'opacity-95',
    'opacity-100'
  ]
</script>
