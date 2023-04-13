# 翻转

添加`flip-*`给元素添加翻转样式

 <Example class="flex flex-wrap gap-3 h-full">
  <div v-for = "item in flipJson" class="h-28 w-16 mt-4">
    <div :class="item.includes('原始') ? '' : item" class="bg-primary text-white flex -justify-center -items-center -w-12 -h-12">
      <span>ZUI</span>
    </div>
    <div class="text-center mt-4">{{item}}</div>
  </div>
 </Example>

<script setup>
  const flipJson = [
    '原始',
    'flip-x',
    'flip-y',
  ]
</script>
