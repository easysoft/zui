# 边框大小

使用'border-*' 设置元素边框圆角大小。

## 效果展示

### 无边框

<Example background="light-circle">
	<div class="-grid -grid-cols-7 -gap-4">
		<div v-for="item in borderWidthJson.slice(0, 1)">
      <div :class="item" class="-h-8 border-primary"></div>
      <div class="text-center">
        <div>{{item}}</div>
      </div>
    </div>
	</div>
</Example>

### 边框宽度

<Example background="light-circle">
	<div class="-grid -grid-cols-7 -gap-4">
		<div v-for="item in borderWidthJson.slice(1, 4)">
      <div :class="item" class="-h-8 border-primary"></div>
      <div class="text-center">
        <div>{{item}}</div>
      </div>
    </div>
	</div>
</Example>

### 单边有边框

<Example background="light-circle">
	<div class="-grid -grid-cols-7 -gap-4">
		<div v-for="item in borderWidthJson.slice(4, 8)">
      <div :class="item" class="-h-8 border-primary"></div>
      <div class="text-center">
        <div>{{item}}</div>
      </div>
    </div>
	</div>
</Example>

### 单边无边框

<Example background="light-circle">
	<div class="-grid -grid-cols-7 -gap-4">
		<div v-for="item in borderWidthJson.slice(8)">
      <div :class="item" class="-h-8 border-primary border"></div>
      <div class="text-center">
        <div>{{item}}</div>
      </div>
    </div>
	</div>
</Example>

```html
<div class="broder border-l-0 -h-8 border-primary"></div>
<div class="broder border-t-0 -h-8 border-primary"></div>
<div class="broder border-b-0 -h-8 border-primary"></div>
<div class="broder border-r-0 -h-8 border-primary"></div>
```

<script setup>
 const borderWidthJson = [
   'border-0',
   'border',
   'border-2',
   'border-4',
   'border-l',
   'border-t',
   'border-b-2',
   'border-r-4',
   'border-l-0',
   'border-t-0',
   'border-b-0',
   'border-r-0',
 ]
</script>
