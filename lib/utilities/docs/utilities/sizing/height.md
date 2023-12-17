# 高度

## 固定值

通过工具类 `h-*` 设置高度为固定值，包含如下工具类：

<Example padding="p-0" class="overflow-auto" style="max-height: 300px">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="h in fixedHeights" :key="h">
        <td class="font-mono">h-{{h}}</td>
        <td><code>height: {{h === 'px' ? '1' : h * 16}}px;</code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 百分比

通过工具类 `h-*` 设置高度为百分比，包含如下工具类：

<Example padding="p-0" class="overflow-auto" style="max-height: 300px">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="h in percentHeights" :key="h">
        <td class="font-mono">h-{{h}}</td>
        <td><code>height: {{h === 'full' ? '100' : Math.round(1000000000 * h.split('/')[0]/h.split('/')[1])/10000000}}%;</code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 特殊值

通过工具类 `h-*` 设置高度为特殊值，包含如下工具类：

<Example padding="p-0" class="overflow-auto" style="max-height: 300px">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[name, value] in specialHeights" :key="name">
        <td class="font-mono">h-{{name}}</td>
        <td><code>height: {{value ?? name}};</code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 限制最大高度

通过工具类 `max-h-*` 设置限制元素最大高度，包含如下工具类：

<Example padding="p-0" class="overflow-auto" style="max-height: 300px">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[name, value] in maxHeights" :key="name">
        <td class="font-mono">max-h-{{name}}</td>
        <td><code>max-height: {{value ?? name}};</code></td>
      </tr>
    </tbody>
  </table>
</Example>

<script setup>
const fixedHeights = '0,px,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96'.split(',');
const percentHeights = '1/2,1/3,2/3,1/4,2/4,3/4,1/5,2/5,3/5,4/5,1/6,2/6,3/6,4/6,5/6,full'.split(',');
const specialHeights = 'auto,screen:100vh,fit:fit-content,min:min-content,max:max-content'.split(',').map(v => v.split(':'));
const maxHeights = '0:0px,full:100%,screen:100vh,none,min:min-content,max:max-content,fit:fit-content'.split(',').map(v => v.split(':'));
</script>
