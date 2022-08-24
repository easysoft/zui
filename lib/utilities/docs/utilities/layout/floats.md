# 浮动

## 向右浮动

使用 `pull-right` 将一个元素浮动到其容器的右边。

<Example class="clearfix">
  <div class="clearfix">
    <img class="pull-right mr-0 ml-10 h-28" src="/assets/avatar/avatar.png">
    <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。</p>
  </div>
</Example>

```html
<div class="clearfix">
  <img class="pull-right ..." src="/assets/avatar/avatar.png">
  <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。</p>
</div>
```

## 向左浮动

使用 `pull-left` 将一个元素浮动到其容器的左边。

<Example >
  <div class="clearfix">
    <img class="pull-left mr-4 ml-0 h-28" src="/assets/avatar/avatar.png">
    <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。</p>
  </div>
</Example>

```html
<div class="clearfix">
  <img class="pull-left mr-4 ml-0 h-28" src="/assets/avatar/avatar.png">
  <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。</p>
</div>
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
      <tr v-for="item in floatJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const floatJson = [
    {name: 'pull-right', desc: 'float: right;'},
    {name: 'pull-left', desc: 'float: left;'},
    {name: 'clearfix', desc: '清除浮动'},
  ]
</script>
