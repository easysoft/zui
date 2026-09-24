# 定位

## 定义

用于控制元素在DOM中的位置的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in positionList">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 使用方法

### `static` 与 `absolute`

使用 `static` 根据常规的文档流来定位元素，浏览器默认 `position` 取值就是 `static`。任何偏移都将被忽略，而且该元素不会作为绝对定位的子元素的位置参考。

::: tabs
== 示例

<Example>
  <div class="static bg-surface h-20 mb-3">
    <p>Static 父元素</p>
    <div class="absolute w-32 h-8 secondarytext-white text-center leading-8">
      <p>Absolute 子元素</p>
    </div>
  </div>
</Example>

== HTML

```html
<div class="static h-20 ...">
  <p>Static 父元素</p>
  <div class="absolute ...">
    <p>Absolute 子元素</p>
  </div>
</div>
```

:::

### `relative` 与 `absolute`

使用 `relative` 根据常规的文档流来定位元素。偏移量是相对于元素的正常位置计算的，并且该元素将作为绝对定位的子元素的位置参考。

使用 `absolute` 将一个元素定位在文档常规流之外，使相邻元素的行为就像该元素不存在一样。偏移量是相对于最近的位置不是 `static` 的父元素计算的，而且该元素将作为其他绝对定位的子元素的位置参考。

::: tabs
== 示例

<Example>
  <div class="relative bg-surface h-20">
    <p>Relative 父元素</p>
    <div class="absolute bottom-0 left-0 w-32 h-8 secondarytext-white text-center leading-8">
      <p>Absolute 子元素</p>
    </div>
  </div>
</Example>

== HTML

```html
<div class="relative h-20 ...">
  <p>Relative 父元素</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute 子元素</p>
  </div>
</div>
```
:::

### `sticky`

`sticky` 元素根据正常文档流进行定位，然后相对它的最近滚动祖先和 containing block，包括 table-related 元素，基于 top、right、bottom 和 left 的值进行偏移。偏移值不会影响任何其他元素的位置。

::: tabs
== 示例

<Example>
  <div class="h-48 overflow-auto">
    <div class="sticky top-0 secondary">周三 · 确认范围</div>
    <div class="py-4">
      <p>09:00 汇总客户反馈</p>
      <p>10:00 确认交付范围</p>
      <p>14:00 分配研发任务</p>
      <p>16:00 评审验收用例</p>
    </div>
    <div class="sticky top-0 secondary">周四 · 完成验收</div>
    <div class="py-4">
      <p>09:00 验证工单查询</p>
      <p>10:30 验证附件预览</p>
      <p>14:00 检查移动端上传</p>
      <p>16:00 汇总验收结果</p>
    </div>
    <div class="sticky top-0 secondary">周五 · 准备发布</div>
    <div class="py-4">
      <p>09:00 整理发布说明</p>
      <p>10:00 检查数据库备份</p>
      <p>11:00 确认回退步骤</p>
      <p>15:00 召开发布评审</p>
      <p>17:30 通知项目成员</p>
      <p>18:00 更新客户门户</p>
      <p>18:20 完成发布后检查</p>
    </div>
  </div>
</Example>

== HTML

```html
<div class="h-48 overflow-auto">
  <div class="sticky top-0 secondary">周三 · 确认范围</div>
  <div class="py-4">
    <p>09:00 汇总客户反馈</p>
    <p>10:00 确认交付范围</p>
    <p>14:00 分配研发任务</p>
    <p>16:00 评审验收用例</p>
  </div>
  <div class="sticky top-0 secondary">周四 · 完成验收</div>
  <div class="py-4">
    <p>09:00 验证工单查询</p>
    <p>10:30 验证附件预览</p>
    <p>14:00 检查移动端上传</p>
    <p>16:00 汇总验收结果</p>
  </div>
  <div class="sticky top-0 secondary">周五 · 准备发布</div>
  <div class="py-4">
    <p>09:00 整理发布说明</p>
    <p>10:00 检查数据库备份</p>
    <p>11:00 确认回退步骤</p>
    <p>15:00 召开发布评审</p>
    <p>17:30 通知项目成员</p>
    <p>18:00 更新客户门户</p>
    <p>18:20 完成发布后检查</p>
  </div>
</div>
```
:::

### `fixed`

使用 `fixed` 来定位一个元素相对于浏览器窗视口的位置。偏移量是相对于视口计算的，且该元素将作为绝对定位的子元素的位置参考。

<script setup>
const positionList = [
    {name: 'static', desc: 'position: static;'},
    {name: 'fixed', desc: 'position: fixed;'},
    {name: 'absolute', desc: 'position: absolute;'},
    {name: 'relative', desc: 'position: relative;'},
    {name: 'sticky', desc: 'position: sticky;'},
];
</script>
