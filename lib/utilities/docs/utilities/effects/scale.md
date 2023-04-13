
# 缩放

添加`scale-*`设置元素的缩放

<Example class="pt-8">
  <div class="-grid -grid-cols-4 -gap-5">
    <div v-for = "item in scaleJson" class="flex -flex-col -items-center">
      <img src="/favicon.svg" :class="item" class="w-16 h-16">
      <div class="text-center mt-4">{{item}}</div>
    </div>
  </div>
</Example>

<script setup>
  const scaleJson = [
    'scale-150',
    'scale-125',
    'scale-110',
    'scale-105',
    'scale-100',
    'scale-50',
    'scale-0',
  ]
</script>
