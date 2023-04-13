# 边框圆角

使用'rounded-*' 设置元素边框圆角大小。

## 效果展示

<Example background="light-circle">
	<div class="-grid -grid-cols-4 -gap-16 -p-8">
		<div v-for="item in borderRadiusJson">
      <div :class="item" class="-aspect-square bg-primary"></div>
      <div class="text-center">
        <div>{{item}}</div>
      </div>
    </div>
	</div>
</Example>

<script setup>
 const borderRadiusJson = [
   'rounded-none',
   'rounded-sm',
   'rounded',
   'rounded-md',
   'rounded-lg',
   'rounded-xl',
   'rounded-full',
   'circle',
 ]
</script>
