# 圆角

## 圆角配置

圆角能让界面元素更加具有亲和力，在 ZUI 中预设了一系列的圆角，具体如下：

<Example class="flex-wrap gap-4 row">
  <div v-for="rounded in roundedList" :key="rounded.code" class="text-center w-28">
    <CopyCode
      :class="`bg-secondary hover-scale-shadow mx-auto w-14 h-14 ${rounded.code === 'DEFAULT' ? 'rounded' : `rounded-${rounded.code}`}`"
      :code="rounded.code === 'DEFAULT' ? 'rounded' : `rounded-${rounded.code}`"
      :tip="`.${rounded.code === 'DEFAULT' ? 'rounded' : `rounded-${rounded.code}`}`"
      :id="`example-rounded-${rounded.code}`"
      copyTip="已复制类名"
    />
    <div class="mt-2 font-bold">{{rounded.name}}</div>
    <CopyCode class="mt-1 font-mono text-sm" :code="rounded.code === 'DEFAULT' ? '--radius' : `--radius-${rounded.code}`" copyTip="已复制变量名">{{rounded.code === 'DEFAULT' ? '--radius' : `--radius-${rounded.code}`}}</CopyCode>
    <CssPropValue
      class="font-mono text-sm muted"
      :target="`#example-rounded-${rounded.code}`"
      prop="border-radius" data-toggle="tooltip"
      data-title="实际值"
      data-placement="left"
    />
  </div>
</Example>

## 使用圆角

### 通过 CSS 工具类

在 ZUI 中可以通过 CSS 工具类来设置圆角，详细用法参加 [CSS 工具类 / 边框 / 边框圆角](/utilities/borders/utilities/border-radius) 文档。下面为一个简单的例子：

<Example class="gap-4 row">
  <div class="p-4 rounded-sm secondary">小圆角</div>
  <div class="p-4 rounded-lg secondary">大圆角</div>
</Example>

```html
<div class="p-4 rounded-sm secondary">小圆角</div>
<div class="p-4 rounded-lg secondary">大圆角</div>
```

### 通过 CSS 变量

你可以直接在 CSS 中引用圆角相关的 CSS 变量来使用圆角，例如：

<Example class="gap-4 row">
  <div class="p-4 secondary" style="border-radius: var(--radius-sm)">小圆角</div>
  <div class="p-4 secondary" style="border-radius: var(--radius-lg)">大圆角</div>
</Example>

```html
<div class="p-4 secondary" style="border-radius: var(--radius-sm)">小圆角</div>
<div class="p-4 secondary" style="border-radius: var(--radius-lg)">大圆角</div>
```

## 自定义圆角

通过修改圆角配置可以快速改变界面风格，例如在一个简单清晰的风格下，你可能需要移除所有圆角设置。在 ZUI 中提供了多种方式来自定义圆角配置。

### 覆盖 CSS 变量

最方便自定义圆角的方式是覆盖 CSS 变量。下面为一个例子：

```css
:root {
  --radius-none:    0px;
  --radius-sm:      0.125rem;
  --radius-DEFAULT: 0.25rem;
  --radius-md:      0.375rem;
  --radius-lg:      0.5rem;
  --radius-xl:      0.75rem;
  --radius-2xl:     1rem;
  --radius-3xl:     1.5rem;
  --radius-full:    9999px;
}
```

### 自定义主题

可以通过定制主题来修改圆角设置，具体参见 [主题](/guide/theme/) 文档。

<script setup>
const roundedList = [
    {code: 'none', name: '无圆角'},
    {code: 'sm', name: '小圆角'},
    {code: 'DEFAULT', name: '默认圆角'},
    {code: 'md', name: '中等圆角'},
    {code: 'lg', name: '大圆角'},
    {code: 'xl', name: '超大圆角'},
    {code: '2xl', name: '2x 超大圆角'},
    {code: '3xl', name: '3x 超大圆角'},
    {code: 'full', name: '完整圆角'},
];
</script>
