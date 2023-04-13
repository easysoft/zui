# 旋转

添加`rotate-*`设置元素翻转角度

<Example>
  <div class="-grid -grid-cols-3 -gap-8">
    <div v-for = "item in rotateJson" class="flex -flex-col -items-center">
      <img src="/favicon.svg" :class="item" class="w-16 h-16">
      <div class="text-center mt-2">{{item}}</div>
    </div>
  </div>
</Example>

<script setup>
  const rotateJson = [
    'rotate-0',
    'rotate-1',
    'rotate-2',
    'rotate-3',
    'rotate-6',
    'rotate-12',
    'rotate-45',
    'rotate-90',
    'rotate-180',
  ];
</script>
