# 交互

## 禁用

| 修饰类                  | 定义  |
|:----------------------- |:----- |
| `disabled / [disabled]` | `cursor: not-allowed;--tw-grayscale: grayscale(1);pointer-events: none;opacity: .5;` |

### 使用方法

<Example>
  <a class="disabled">disabled</a>
</Example>

```html
<a class="disabled">disabled</a>
```

## 指向事件

| 修饰类        | 定义  |
|:------------- |:----- |
| `events-none;`        | `pointer-events: none;` |
| `events-auto;`        | `pointer-events: auto;` |

## scroll

| 修饰类        | 定义  |
|:------------- |:----- |
| `scroll-auto`        | `scroll-behavior:auto;` |
| `scroll-smooth`        | `scroll-behavior:smooth` |

使用 `scroll-auto` 使得滚动条立即滚动。

<Example>
  <div class="w-56 h-28 rounded leading-8 scroll-auto of-hidden m-auto">
    <div class="relative h-full text-center -bg-gray-200"><input readonly id="one" class="absolute t-0 h-full p-0 m-0 w-12" />1</div>
    <div class="relative h-full text-center -bg-secondary-200"><input readonly id="two" class="absolute t-0 h-full p-0 m-0 w-12"/>2</div>
    <div class="relative h-full text-center -bg-success-200"><input readonly id="three" class="absolute t-0 h-full p-0 m-0 w-12"/>3</div>
    <div class="relative h-full text-center -bg-warning-200"><input readonly id="four" class="absolute t-0 h-full p-0 m-0 w-12"/>4</div>
  </div>
  <div>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="one">1</label>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="two">2</label>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="three">3</label>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="four">4</label>
  </div>
</Example>

```html
<div class="w-56 h-28 rounded leading-8 scroll-auto of-hidden m-auto">
  <div class="relative h-full text-center -bg-gray-200"><input readonly id="one" class="absolute t-0 h-full p-0 m-0 w-12" />1</div>
  <div class="relative h-full text-center -bg-secondary-200"><input readonly id="two" class="absolute t-0 h-full p-0 m-0 w-12"/>2</div>
  <div class="relative h-full text-center -bg-success-200"><input readonly id="three" class="absolute t-0 h-full p-0 m-0 w-12"/>3</div>
  <div class="relative h-full text-center -bg-warning-200"><input readonly id="four" class="absolute t-0 h-full p-0 m-0 w-12"/>4</div>
</div>
<div>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="one">1</label>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="two">2</label>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="three">3</label>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="four">4</label>
</div>
```
 
使用 `scroll-smooth` 使得窗口平稳滚动。

<Example>
  <div class="w-56 h-28 rounded leading-8 scroll-smooth of-hidden m-auto">
    <div class="relative h-full text-center -bg-gray-200"><input readonly id="smoothOne" class="absolute t-0 h-full p-0 m-0 w-12" />1</div>
    <div class="relative h-full text-center -bg-secondary-200"><input readonly id="smoothTwo" class="absolute t-0 h-full p-0 m-0 w-12"/>2</div>
    <div class="relative h-full text-center -bg-success-200"><input readonly id="smoothThree" class="absolute t-0 h-full p-0 m-0 w-12"/>3</div>
    <div class="relative h-full text-center -bg-warning-200"><input readonly id="smoothFour" class="absolute t-0 h-full p-0 m-0 w-12"/>4</div>
  </div>
  <div>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothOne">1</label>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothTwo">2</label>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothThree">3</label>
    <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothFour">4</label>
  </div>
</Example>

```html
<div class="w-56 h-28 rounded leading-8 scroll-smooth of-hidden m-auto">
  <div class="relative h-full text-center -bg-gray-200"><input readonly id="smoothOne" class="absolute t-0 h-full p-0 m-0 w-12" />1</div>
  <div class="relative h-full text-center -bg-secondary-200"><input readonly id="smoothTwo" class="absolute t-0 h-full p-0 m-0 w-12"/>2</div>
  <div class="relative h-full text-center -bg-success-200"><input readonly id="smoothThree" class="absolute t-0 h-full p-0 m-0 w-12"/>3</div>
  <div class="relative h-full text-center -bg-warning-200"><input readonly id="smoothFour" class="absolute t-0 h-full p-0 m-0 w-12"/>4</div>
</div>
<div>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothOne">1</label>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothTwo">2</label>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothThree">3</label>
  <label class="w-12 bd primary rounded text-center m-2 inline-block -cursor-pointer" for="smoothFour">4</label>
</div>
```


## 状态 (TODO)   

| 修饰类        | 定义  |
|:------------- |:----- |
| `-state`        | `position: relative;cursor: pointer;` |
| `-state::before`        | `display: block;position: absolute;top: 0px; right: 0px; bottom: 0px; left: 0px;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 200ms;opacity: 0;background: rgba(0,0,0,.075);content: ' ';border-radius: inherit;transform: scale(.9);transition-property: opacity, transform, box-shadow;` |
| `-state:hover::before / -state:active::before`  | `opacity: 1;--tw-scale-x: 1;--tw-scale-y: 1;` |
| `-state:focus-visible` | `outline: 2px solid transparent;outline-offset: 2px;` |
| `-state:focus-visible::before` | ``opacity: 1;--tw-scale-x: 1;--tw-scale-y: 1;background: var(--state-focus-color);box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);` |
| `-state:active::before` | ` background: var(--state-active-color);box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color: currentColor;transition-duration: 700ms;` |
| `-state[disabled]::before / -state.disabled::before ` | `overflow: hidden;` |



## 用户选择

| 修饰类        | 定义  |
|:------------- |:----- |
| `select-none;`        | `user-select: none;` |
| `select-text;`        | `user-select: text;` |
| `select-all;`        | `user-select: all;` |
| `select-auto;`        | `user-select: auto;` |

### 禁用文本选择

使用 `select-none` 来防止选择元素及其子元素中的文本。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-none">此文本不可选择</div>
</Example>

```html
<div class="px-6 py-2 -bg-secondary-100 select-none">此文本不可选择</div>
```

### 允许选择文本

使用 `select-text` 允许选择元素及其子元素中的文本。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-text">此文本可选择</div>
</Example>

```html
<div class="px-6 py-2 -bg-secondary-100 select-text">此文本可选择</div>
```

### 一键选择所有文本

使用 `select-all` 在用户点击时自动选择元素中的所有文本。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-all">单击此文本中的任意位置以全选</div>
</Example>

```html
<div class="px-6 py-2 -bg-secondary-100 select-all">单击此文本中的任意位置以全选</div>
```

### 自动

使用 `select-auto` 来使用默认的浏览器行为来选择文本。对于撤销其他功能类（如 .select-none）在不同断点的行为时很有用。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-auto">此文本可选择</div>
</Example>

```html
<div class="px-6 py-2 -bg-secondary-100 select-auto">此文本可选择</div>
```