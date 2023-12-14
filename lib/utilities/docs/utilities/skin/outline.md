# 线框

使用 `*-outline` 来设置文字颜色和边框颜色一致。

<Example class="p-0">
    <table class="table">
	<thead>
	    <tr>
		<th>工具类</th>
		<th>属性</th>
	    </tr>
	</thead>
	<tbody>
		<tr v-for="item in outlineJson">
			<td>{{item.name}}-outline</td>
			<td><code>border-color: {{item.color}}; color: {{item.color}};</code></td>
		</tr>
	</tbody>
    </table>
</Example>

## 效果展示

### 语义化配色

<Example background="light-circle">
	<div class="-grid -grid-cols-3 -gap-4">
		<div v-for="item in outlineJson.slice(0, 7)" class="-h-10 flex -justify-center -items-center" :class="`${item.name}-outline`">{{`${item.name}-outline`}}</div>
	</div>
</Example>

### 黑白配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-3 -gap-4">
		<div v-for="item in outlineJson.slice(7)" class="-h-10 flex -justify-center -items-center" :class="`${item.name}-outline`">{{`${item.name}-outline`}}</div>
	</div>
</Example>

<script setup>
	const outlineJson = [
		{name: 'primary', color: '#2b80ff'},
		{name: 'secondary', color: '#37b2fe'},
		{name: 'success', color: '#17ce97'},
		{name: 'warning', color: '#ffa34d'},
		{name: 'danger', color: '#ff5858'},
		{name: 'important', color: '#ff4f9e'},
		{name: 'special', color: '#9d5eff'},
		{name: 'lighter', color: '#f5f5f5'},
		{name: 'light', color: '#e3e4e9'},
		{name: 'gray', color: '#9ea3b0'},
		{name: 'darken', color: '#5e626d'},
		{name: 'darker', color: '#1b1f28'},
		{name: 'black', color:  '#2b80ff'},
	];
</script>
