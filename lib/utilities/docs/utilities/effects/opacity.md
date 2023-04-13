# 不透明度

使用`opacity-*`设置元素的不透明度

<Example background="light-grid">
  <div class="-grid -grid-cols-4 -gap-3">
    <div :key="item" v-for ="item in opacityJson">
      <div :class="item"  class="bg-primary h-10" ></div>
      <div class="text-center">{{item}}</div>
    </div>
  </div>
</Example>


<script setup>
  const opacityJson = [
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
