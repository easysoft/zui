# 指向事件

用于控制元素是否响应指向事件的工具类。

## 隐蔽事件

使用 `events-none` 使元素忽略指向事件。指向事件仍然会在子元素上触发，并传递到目标元素的下方。

<Example>
  <button class="btn events-none">隐蔽事件</button>
</Example>

```html
<button class="btn events-none">隐蔽事件</button>
```

## 开启事件

使用 `events-auto` 来恢复浏览器对指向事件（如 `:hover` 和 `click` ）的默认行为。

<Example>
  <button class="btn events-auto">开启事件</button>
</Example>

```html
<button class="btn events-auto">开启事件</button>
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
      <tr v-for="item in pointerEventsJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const pointerEventsJson = [
    {name: 'events-none', desc: 'pointer-events: none;'},
    {name: 'events-auto', desc: 'pointer-events: auto;'},
  ]
</script>