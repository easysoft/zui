# 实心

设置背景色实心样式。

<Example class="p-0">
    <table class="table">
		<thead>
			<tr>
				<th>工具类</th>
				<th>属性</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in solidJson">
				<td>{{item.name}}</td>
				<td><code>background-color: {{item.bgColor}}; border-color: {{item.bgColor}};{{item.color ? ` color: ${item.color};` : ''}}</code></td>
			</tr>
		</tbody>
    </table>
</Example>

## 效果展示

### 语义化配色

<Example background="light-circle">
	<div class="-grid -grid-cols-3 -gap-4">
		<div v-for="item in solidJson.slice(0, 7)" class="-h-10 flex -justify-center -items-center" :class="item.name">{{item.name}}</div>
	</div>
</Example>

### 黑白配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-3 -gap-4">
		<div v-for="item in solidJson.slice(7, 14)" class="-h-10 flex -justify-center -items-center" :class="item.name">{{item.name}}</div>
	</div>
</Example>

### 特殊配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-3 -gap-4">
		<div v-for="item in solidJson.slice(14)" class="-h-10 flex -justify-center -items-center" :class="item.name">{{item.name}}</div>
	</div>
</Example>

<script setup>
	const solidJson = [
		{name: 'primary', bgColor: '#2b80ff',color: '#fff'},
		{name: 'secondary', bgColor: '#37b2fe',color: '#fff'},
		{name: 'success', bgColor: '#17ce97',color: '#fff'},
		{name: 'warning', bgColor: '#ffa34d',color: '#fff'},
		{name: 'danger', bgColor: '#ff5858',color: '#fff'},
		{name: 'important', bgColor: '#ff4f9e',color: '#fff'},
		{name: 'special', bgColor: '#9d5eff',color: '#fff'},
		{name: 'white', bgColor: '#fff'},
		{name: 'lighter', bgColor: '#f5f5f5'},
		{name: 'light', bgColor: '#e3e4e9'},
		{name: 'gray', bgColor: '#9ea3b0', color: '#fff'},
		{name: 'darken', bgColor: '#5e626d', color: '#fff'},
		{name: 'darker', bgColor: '#1b1f28', color: '#fff'},
		{name: 'black', bgColor: '#000', color: '#fff'},
		{name: 'surface', bgColor: '#f5f5f5'},
		{name: 'canvas', bgColor: '画布颜色'},
		{name: 'ghost', bgColor: 'transparent'},
		{name: 'inverse', bgColor: '画布反色', color: '画布颜色'},

	];
</script>
