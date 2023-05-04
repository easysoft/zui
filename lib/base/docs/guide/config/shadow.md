# 阴影

## 阴影配置

阴影能让界面元素更加具有层次感，在 ZUI 中预设了一系列的阴影，具体如下：

<Example background="light-grid" class="space-y-6">
  <div v-for="shadow in shadowList" :key="shadow.code" class="items-center gap-4 row">
    <CopyCode
      :class="`flex-none bg-canvas hover-scale mx-auto w-14 h-14 ${shadow.code === 'DEFAULT' ? 'shadow' : `shadow-${shadow.code}`}`"
      :code="shadow.code === 'DEFAULT' ? 'shadow' : `shadow-${shadow.code}`"
      :tip="`.${shadow.code === 'DEFAULT' ? 'shadow' : `shadow-${shadow.code}`}`"
      :id="`example-shadow-${shadow.code}`"
      copyTip="已复制类名"
    />
    <div class="flex-none w-20 mt-2 font-bold">{{shadow.name}}</div>
    <CopyCode class="flex-none mt-1 font-mono text-sm w-28" :code="shadow.code === 'DEFAULT' ? '--shadow' : `--shadow-${shadow.code}`" copyTip="已复制变量名">{{shadow.code === 'DEFAULT' ? '--shadow' : `--shadow-${shadow.code}`}}</CopyCode>
    <div class="flex-auto" data-toggle="tooltip" data-title="实际值">
      <CssPropValue
        class="font-mono text-sm muted"
        :target="`#example-shadow-${shadow.code}`"
        prop="box-shadow"
      />
    </div>
  </div>
</Example>

## 使用阴影

### 通过 CSS 工具类

在 ZUI 中可以通过 CSS 工具类来设置阴影，详细用法参加 [CSS 工具类 / 效果 / 盒阴影](/utilities/effects/utilities/shadow) 文档。下面为一个简单的例子：

<Example class="gap-4 row">
  <div class="p-4 shadow-sm canvas">小阴影</div>
  <div class="p-4 shadow-lg canvas">大阴影</div>
</Example>

```html
<div class="p-4 shadow-sm canvas">小阴影</div>
<div class="p-4 shadow-lg canvas">大阴影</div>
```

### 通过 CSS 变量

你可以直接在 CSS 中引用阴影相关的 CSS 变量来使用阴影，例如：

<Example class="gap-4 row">
  <div class="p-4 canvas" style="box-shadow: var(--shadow-sm)">小阴影</div>
  <div class="p-4 canvas" style="box-shadow: var(--shadow-lg)">大阴影</div>
</Example>

```html
<div class="p-4 canvas" style="box-shadow: var(--shadow-sm)">小阴影</div>
<div class="p-4 canvas" style="box-shadow: var(--shadow-lg)">大阴影</div>
```

## 自定义阴影

通过修改阴影配置可以快速改变界面风格，例如在一个简单清晰的风格下，你可能需要移除所有阴影设置。在 ZUI 中提供了多种方式来自定义阴影配置。

### 覆盖 CSS 变量

最方便自定义阴影的方式是覆盖 CSS 变量。下面为一个例子：

```css
:root {
  --shadow-sm:    0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow:       0 1px 4px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md:    0 2px 8px -1px rgb(0 0 0 / 0.1), 0 1px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg:    0 4px 16px -4px rgb(0 0 0 / 0.1), 0 2px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl:    0 6px 32px -6px rgb(0 0 0 / 0.15), 0 4px 10px -6px rgb(0 0 0 / 0.15);
  --shadow-2xl:   0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --shadow-none:  none;
}
```

### 自定义主题

可以通过定制主题来修改阴影设置，具体参见 [主题](/guide/theme/) 文档。

<script setup>
const shadowList = [
    {code: 'inner', name: '内部阴影'},
    {code: 'none', name: '无阴影'},
    {code: 'sm', name: '小阴影'},
    {code: 'DEFAULT', name: '默认阴影'},
    {code: 'md', name: '中等阴影'},
    {code: 'lg', name: '大阴影'},
    {code: 'xl', name: '超大阴影'},
    {code: '2xl', name: '2x 超大阴影'},
];
</script>
