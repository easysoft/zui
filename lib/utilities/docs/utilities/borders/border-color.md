# 边框颜色

使用'border-*' 设置元素边框颜色。

## 效果展示

### 语义化配色

<Example background="light-circle">
	<div class="-grid -grid-cols-7 -gap-4">
		<div v-for="item in borderColorJson.slice(0, 7)">
      <div :class="`border-${item.name}`" class="-h-8 -border"></div>
      <div class="text-center">
        <div>border-{{item.name}}</div>
        <div>{{item.colorCode}}</div>
      </div>
    </div>
	</div>
</Example>

### 黑白配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-7 -gap-4">
		<div v-for="item in borderColorJson.slice(7, 14)">
      <div :class="`border-${item.name}`" class="-h-8 -border"></div>
      <div class="text-center -text-slate-100">
        <div>border-{{item.name}}</div>
        <div>{{item.colorCode}}</div>
      </div>
    </div>
	</div>
</Example>

### 特殊配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-7 -gap-4">
		<div v-for="item in borderColorJson.slice(14)">
      <div :class="`border-${item.name}`" class="-h-8 -border"></div>
      <div class="text-center -text-slate-100">
        <div>border-{{item.name}}</div>
        <div>{{item.colorCode}}</div>
      </div>
    </div>
	</div>
</Example>

<script setup>
  const borderColorJson = [
    {name:'primary',colorCode:'#2B80FF'},
    {name:'secondary',colorCode:'#37B2FE'},
    {name:'success',colorCode:'#17CE97'},
    {name:'warning',colorCode:'#FFA34D'},
    {name:'danger',colorCode:'#FF5858'},
    {name:'important',colorCode:'#FF4F9E'},
    {name:'special',colorCode:'#9D5EFF'},
    {name:'white',colorCode:'#FFFFFF'},
    {name:'lighter',colorCode:'#F5F5F5'},
    {name:'light',colorCode:'#E3E4E9'},
    {name:'gray',colorCode:'#9EA3B0'},
    {name:'dark',colorCode:'#5E626D'},
    {name:'darker',colorCode:'#1B1F28'},
    {name:'black',colorCode:'#000000'},
    {name:'surface',colorCode:'#F5F5F5'},
    {name:'inverse',colorCode:'#3C4353'},
    {name:'transparent',colorCode:''},
    {name:'inherit',colorCode:''},
    {name:'current',colorCode:''},
  ];
</script>
