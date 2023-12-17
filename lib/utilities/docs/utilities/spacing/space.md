# 子元素间距

## 定义

通过工具类 `space-x-*` 来为元素内的所有子元素之间设置水平间距；通过工具类 `space-y-*` 来为元素内的所有子元素之间设置水平间距，所有可用的工具类定义如下：

<Example padding="p-0" class="overflow-auto" style="max-height: 400px">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="x in spaceList" :key="x">
        <tr>
          <td class="font-mono">space-x-{{x}} > * + *</td>
          <td><code>margin-left: {{x === 'px' ? 1 : (x * 4)}}px;</code></td>
        </tr>
        <tr>
          <td class="font-mono">space-y-{{x}} > * + *</td>
          <td><code>margin-top: {{x === 'px' ? 1 : (x * 4)}}px;</code></td>
        </tr>
      </template>
    </tbody>
  </table>
</Example>

## 示例

### 水平间距

::: tabs

== 示例

<Example>
  <div class="row items-center space-x-3 surface">
    <div class="secondary w-16 h-16 rounded center">1</div>
    <div class="secondary w-16 h-16 rounded center">2</div>
    <div class="secondary w-16 h-16 rounded center">3</div>
  </div>
</Example>

== HTML

```html
<div class="row space-x-3">
  <div class="...">1</div>
  <div class="...">2</div>
  <div class="...">3</div>
</div>
```

:::

### 垂直间距

::: tabs

== 示例

<Example>
  <div class="col items-center space-y-3 surface">
    <div class="secondary w-16 h-16 rounded center">1</div>
    <div class="secondary w-16 h-16 rounded center">2</div>
    <div class="secondary w-16 h-16 rounded center">3</div>
  </div>
</Example>

== HTML

```html
<div class="row space-y-3">
  <div class="...">1</div>
  <div class="...">2</div>
  <div class="...">3</div>
</div>
```

:::

<script setup>
const spaceList = '0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,px'.split(',');
</script>
