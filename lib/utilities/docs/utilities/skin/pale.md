# 浅色

使用 `*-pale` 来设置文字颜色和背景颜色同色系，但背景色透明度相对低一些。

<Example class="p-0">
    <table class="table">
		<thead>
			<tr>
				<th>工具类</th>
				<th>属性</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in paleJson">
				<td>{{item.name}}-pale</td>
				<td><code>background-color: {{item.bgColor}}; border-color: {{item.bgColor}}; color: {{item.color}};</code></td>
			</tr>
		</tbody>
    </table>
</Example>

## 效果展示

### 语义化配色

<Example background="light-circle">
	<div class="-grid -grid-cols-3 -gap-4">
		<div v-for="item in paleJson.slice(0, 7)" class="-h-10 flex -justify-center -items-center" :class="`${item.name}-pale`">{{`${item.name}-pale`}}</div>
	</div>
</Example>

### 黑白配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-3 -gap-4">
		<div v-for="item in paleJson.slice(7)" class="-h-10 flex -justify-center -items-center" :class="`${item.name}-pale`">{{`${item.name}-pale`}}</div>
	</div>
</Example>

<script setup>
	const paleJson = [
		{name: 'primary', bgColor: '#eff5ff',color: '#2b80ff'},
		{name: 'secondary', bgColor: '#e7f6ff',color: '#37b2fe'},
		{name: 'success', bgColor: '#e3f9f3',color: '#17ce97'},
		{name: 'warning', bgColor: '#fff4ea',color: '#ffa34d'},
		{name: 'danger', bgColor: '#ffebeb',color: '#ff5858'},
		{name: 'important', bgColor: '#feebf4',color: '#ff4f9e'},
		{name: 'special', bgColor: '#f1eafc',color: '#9d5eff'},
		{name: 'lighter', bgColor: '#f5f5f5',color: '#9ea3b0'},
		{name: 'light', bgColor: '#edeef2',color: '#838a9d'},
		{name: 'gray', bgColor: '#e3e4e9',color: '#5e626d'},
		{name: 'darken', bgColor: '#e6eaf1',color: '#5e626d'},
	];
</script>
