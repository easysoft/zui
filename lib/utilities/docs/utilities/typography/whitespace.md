# 空格

用于控制元素的空格属性的工具类。

## 不保留空格不自动换行

使用 `nowrap` 来防止文本在元素中被包裹。换行和空格将被折叠。

<Example>
  <div class="bd p-2 nowrap">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架。</div>
</Example>

```html
<div class="bd p-2 nowrap">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架。</div>
```

## 保留空格不自动换行

使用 `pre` 来保留元素中的换行和空格。文本不会被包装。

<Example>
  <div class="bd p-2 pre">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架。</div>
</Example>

```html
<div class="bd p-2 pre">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架。</div>
```

## 不保留空格自动换行

使用 `pre-line` 保留换行，但不保留元素中的空格。文本将被正常包装。

<Example>
  <div class="bd p-2 pre-line">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。</div>
</Example>

```html
<div class="bd p-2 pre-line">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。</div>
```

## 保留空格自动换行

使用 `pre-wrap` 来保留元素中的换行和空格。文本将被正常包装。

<Example>
  <div class="bd p-2 pre-wrap">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。</div>
</Example>

```html
<div class="bd p-2 pre-wrap">禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。</div>
```

## 默认类参考

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>修饰类</th>
        <th>定义</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in whitespaceJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const whitespaceJson = [
    {name: 'nowrap', desc: 'white-space: nowrap;'},
    {name: 'pre', desc: 'white-space: pre;'},
    {name: 'pre-line', desc: 'white-space: pre-line;'},
    {name: 'pre-wrap', desc: 'white-space: pre-wrap;'},
  ]
</script>