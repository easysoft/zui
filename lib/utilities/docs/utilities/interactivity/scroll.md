# 滚动

用于指定滚动框滚动行为的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in scrollJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 立即滚动

使用 `scroll-auto` 使得滚动条立即滚动。点击按钮查看滚动效果：

<Example background="light-circle">
  <div class="w-56 h-28 rounded leading-8 scroll-auto of-x-hidden of-y-scroll m-auto">
    <div class="relative h-full text-center -bg-gray-200"><input readonly id="one" class="absolute t-0 h-full p-0 m-0 w-12" />1</div>
    <div class="relative h-full text-center -bg-secondary-200"><input readonly id="two" class="absolute t-0 h-full p-0 m-0 w-12"/>2</div>
    <div class="relative h-full text-center -bg-success-200"><input readonly id="three" class="absolute t-0 h-full p-0 m-0 w-12"/>3</div>
    <div class="relative h-full text-center -bg-warning-200"><input readonly id="four" class="absolute t-0 h-full p-0 m-0 w-12"/>4</div>
  </div>
  <div class="-flex -justify-center -mt-2">
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="one">1</label>
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="two">2</label>
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="three">3</label>
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="four">4</label>
  </div>
</Example>

```html
<div class="scroll-auto">
  <div class="relative"><input readonly id="one" class="absolute" />1</div>
  <div class="relative"><input readonly id="two" class="absolute"/>2</div>
  <div class="relative"><input readonly id="three" class="absolute"/>3</div>
  <div class="relative"><input readonly id="four" class="absolute"/>4</div>
</div>
<div>
  <label for="one">1</label>
  <label for="two">2</label>
  <label for="three">3</label>
  <label for="four">4</label>
</div>
```

### 平稳滚动

使用 `scroll-smooth` 使得窗口平稳滚动。点击按钮查看滚动效果：

<Example background="light-circle">
  <div class="w-56 h-28 rounded leading-8 scroll-smooth of-y-scroll m-auto">
    <div class="relative h-full text-center -bg-gray-200"><input readonly id="smoothOne" class="absolute t-0 h-full p-0 m-0 w-12" />1</div>
    <div class="relative h-full text-center -bg-secondary-200"><input readonly id="smoothTwo" class="absolute t-0 h-full p-0 m-0 w-12"/>2</div>
    <div class="relative h-full text-center -bg-success-200"><input readonly id="smoothThree" class="absolute t-0 h-full p-0 m-0 w-12"/>3</div>
    <div class="relative h-full text-center -bg-warning-200"><input readonly id="smoothFour" class="absolute t-0 h-full p-0 m-0 w-12"/>4</div>
  </div>
  <div class="-flex -justify-center -mt-2">
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="smoothOne">1</label>
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="smoothTwo">2</label>
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="smoothThree">3</label>
    <label class="w-12 bd primary rounded text-center m-1 inline-block -cursor-pointer" for="smoothFour">4</label>
  </div>
</Example>

```html
<div class="scroll-smooth">
  <div class="relative"><input readonly id="smoothOne" class="absolute" />1</div>
  <div class="relative"><input readonly id="smoothTwo" class="absolute"/>2</div>
  <div class="relative"><input readonly id="smoothThree" class="absolute"/>3</div>
  <div class="relative"><input readonly id="smoothFour" class="absolute"/>4</div>
</div>
<div>
  <label for="smoothOne">1</label>
  <label for="smoothTwo">2</label>
  <label for="smoothThree">3</label>
  <label for="smoothFour">4</label>
</div>
```

<script setup>
  const scrollJson = [
    {name: 'scroll-auto', desc: 'scroll-behavior:auto;'},
    {name: 'scroll-smooth', desc: 'scroll-behavior:smooth'},
  ]
</script>
