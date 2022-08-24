
# 缩放

<Example class="flex flex-wrap gap-3">
 <div v-for = "item in arrayScale" class="h-28 w-24">
   <img src="/favicon.svg" :class="'scale-' + item" class="w-16 h-16">
   <div class="text-center mt-4">{{ 'scale-' + item}}</div>
 </div>
</Example>

<script setup>
  const arrayScale = [
    0,
    50,
    100,
    105,
    110,
    125,
    150
  ]
</script>
