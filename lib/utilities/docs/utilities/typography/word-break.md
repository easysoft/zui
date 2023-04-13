# 文本换行

用于控制元素中的换行符的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in wordBreakJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 字内换行

使用 `break-normal` 只在正常的换行点添加换行符。

<Example>
  <div class="p-2 break-words bg-surface">禅道高级版为您提供高级功能，简化您的项目管理并提高您的工作效率。
    ZenTao premium versions offer you advanced features which streamline your project management and improve your work efficiency.
  </div>
</Example>

```html
<div class="p-2 break-words bg-surface">禅道高级版为您提供高级功能，简化您的项目管理并提高您的工作效率。
  ZenTao premium versions offer you advanced features which streamline your project management and improve your work efficiency.
</div>
```

### 单词内换行

使用 `break-words` 在词中间添加换行符。

<Example>
  <div class="p-2 break-words bg-surface">ZenTao premium versions offer you advanced features which streamline your project management and improve your work efficiency.
  </div>
</Example>

```html
<div class="p-2 break-words bg-surface">ZenTao premium versions offer you advanced features which streamline your project management and improve your work efficiency.
</div>
```

### 任意字内断开

使用 `break-all` 在必要的时候添加换行符，而不是试图保留整个单词。

<Example>
  <div class="p-2 break-all bg-surface">ZenTao premium versions offer you advanced features which streamline your project management and improve your work efficiency.
  </div>
</Example>

```html
<div class="p-2 break-all bg-surface">ZenTao premium versions offer you advanced features which streamline your project management and improve your work efficiency.
</div>
```

<script setup>
  const wordBreakJson = [
    {name: 'break-normal', desc: 'overflow-wrap: normal;word-break: normal;'},
    {name: 'break-words', desc: 'overflow-wrap: break-word;'},
    {name: 'break-all', desc: 'word-break: break-all;'},
  ]
</script>
