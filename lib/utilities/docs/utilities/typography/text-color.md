# 文本颜色

使用 `text-*` 工具类控制元素的文字颜色。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textColorJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

<Example background="light-circle">
	<div class="-grid -grid-cols-5 -gap-4">
		<div v-for="item in textColorJson.slice(0, 7)" class="-h-10 flex -justify-center -items-center" :class="item.name">{{item.name}}</div>
	</div>
</Example>

### 黑白配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-5 -gap-4">
		<div v-for="item in textColorJson.slice(7, 14)" class="-h-10 flex -justify-center -items-center" :class="item.name">{{item.name}}</div>
	</div>
</Example>

### 特殊配色

<Example background="blue-circle">
	<div class="-grid -grid-cols-5 -gap-4">
		<div v-for="item in textColorJson.slice(14)" class="-h-10 flex -justify-center -items-center" :class="item.name">{{item.name}}</div>
	</div>
</Example>

<script setup>
  const textColorJson = [
    {name: 'text-primary', desc: 'color: #2b80ff;'},
    {name: 'text-secondary', desc: 'color: #37b2fe;'},
    {name: 'text-success', desc: 'color: #17ce97;'},
    {name: 'text-warning', desc: 'color: #ffa34d;'},
    {name: 'text-danger', desc: 'color: #ff5858;'},
    {name: 'text-important', desc: 'color: #ff4f9e;'},
    {name: 'text-special', desc: 'color: #9d5eff;'},
    {name: 'text-white', desc: 'color: #fff;'},
    {name: 'text-lighter', desc: 'color: #e3e4e9;'},
    {name: 'text-light', desc: 'color: #e6eaf1;'},
    {name: 'text-gray', desc: 'color: #9ea3b0;'},
    {name: 'text-dark', desc: 'color: #5e626d;'},
    {name: 'text-darker', desc: 'color: #1b1f28;'},
    {name: 'text-black', desc: 'color: #000;'},
    {name: 'text-canvas', desc: 'color: #fff;'},
    {name: 'text-surface', desc: 'color: #f4f5f7;'},
    {name: 'text-inverse', desc: 'color: #3c4353;'},
  ]
</script>
