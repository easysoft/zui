# 颜色

ZUI 的颜色体系基于 [TailwindCSS 调色板](https://tailwindcss.com/docs/customizing-colors) 实现，主要包含语义化调色板、界面公共颜色和特殊颜色。下面分别进行介绍。

## 语义化调色板

ZUI 内置了 {{semanticColors.length}} 种语义化调色板，每种类型都来自 TailwindCSS 内置的调色板，你可以根据产品中的需要来更换现有调色板。

<Example background="light-circle" class="space-y-4">
  <div v-for="color in semanticColors" :key="color.id">
    <div :class="`row gap-4 mb-2 items-center`">
      <div data-toggle="tooltip" :data-title="`TailwindCSS 调色板名称：${color.tailwind}`"><strong :class="`text-${color.id}`">{{color.id.toUpperCase()}}</strong> <span class="muted">—</span> <span>{{color.name}}</span></div>
      <small class="text-sm muted">{{color.meaning}}</small>
    </div>
    <div class="justify-between gap-2 row">
      <div v-for="level in semanticLevels" :key="level" class="flex-auto">
        <ColorTile :color="`color-${color.id}-${level}`" />
        <div class="text-xs px-0.5 text-fore">{{level}}</div>
      </div>
    </div>
  </div>
</Example>

:::tip 提示
点击调色板中的颜色，可以复制颜色变量名称方便在代码中使用。
:::

## 界面公共颜色

在 ZUI 中，界面上公共的颜色已被精心梳理和定义，尽可能使用更少的颜色来定义大部分界面元素上可能用到的颜色。界面公共颜色都应该来自语义化调色板，你可以根据产品中的需要来更换其他调色板。下面是这些颜色的定义：

<Example background="light-circle" class="space-y-4">
  <div class="items-center gap-4 row" v-for="color in uiColors" :key="color.code">
    <ColorTile :color="`color-${color.code}`" tileClass="w-10 h-10 border border-fore rounded square" />
    <div class="flex-auto">
      <div><strong>{{color.code.toUpperCase()}}</strong> <span class="muted">—</span> <span>{{color.name}}</span></div>
      <div class="gap-4 row">
        <div class="muted">{{color.meaning}}</div>
      </div>
    </div>
  </div>
</Example>

## 特殊颜色

在 ZUI 中会用到一些特殊颜色，这些颜色的定义是固定的，不会因为更换主题或调色板而改变。下面是这些颜色的定义：

<Example background="light-circle" class="space-y-4">
  <div class="items-center gap-4 row" v-for="color in specialColors" :key="color.code">
    <ColorTile :color="`color-${color.code}`" tileClass="w-10 h-10 border border-fore rounded square" />
    <div class="flex-auto">
      <div><strong>{{color.code.toUpperCase()}}</strong> <span class="muted">—</span> <span>{{color.name}}</span></div>
      <div class="gap-4 row">
        <div class="muted" v-html="color.meaning" />
      </div>
    </div>
  </div>
</Example>

## 使用颜色

你拥有多种方式来使用颜色，下面分别进行介绍。

### 通过 CSS 变量

每种语义化颜色都被定义为 CSS 变量，变量名称拥有相同的格式，都以 `--color-` 开头，然后通过 `-` 连接颜色名称得到。例如 CSS 变量 `--color-primary-500` 可以引用 Primary 调色板上的第 500 号颜色。下面为一个在 HTML 代码中使用的例子：

<Example>
  <h4 style="color: var(--color-primary-500)">
    这是一段使用 Primary 调色板上的第 500 号颜色的文本
  </h4>
</Example>

```html
<h4 style="color: var(--color-primary-500)">
  这是一段使用 Primary 调色板上的第 500 号颜色的文本
</h4>
```

### 使用 CSS 工具类

在 ZUI 中提供了大量 [CSS 工具类](/utilities/)，大部分定义与 TailwindCSS 的工具类一致。在这些工具类中为你提供了大量的颜色相关的工具类，你可以通过这些工具类来使用颜色。下面为使用 CSS 工具类的例子：

<Example>
  <h4 class="text-primary">
    这是一段使用 Primary 调色板上的第 500 号颜色的文本
  </h4>
</Example>

```html
<h4 class="text-primary">
  这是一段使用 Primary 调色板上的第 500 号颜色的文本
</h4>
```

更多用法和例子参考 [CSS 工具类](/utilities/) 文档。

### 在设计中使用

为了实现统一流程的交互体验，应该在设计时使用 ZUI 的颜色体系，下面为一些具体的建议：

* 在设计中使用 ZUI 的颜色体系，而不是使用设计工具自带的颜色体系；
* 在设计工具中为颜色进行命名，命名方式与 ZUI 中的颜色名称一致，例如 `color-primary-500`；
* 如果需要实现不同风格，推荐定义新的调色板实现，而不是只修改调色板中的某一个颜色；
* 因为界面公共颜色来自调色版，不建议手动进行修改，除非主题需要实现对比度更明显的风格；
* 任何时候都不建议修改特殊颜色的定义。

### 自定义配色

通过自定义配色可以实现不通的主题风格。你可以在页面中通过定义新的颜色变量来覆盖默认的颜色定义，从而实现自定义配色。下面为一个例子：

```css
/* 覆盖主要调色板的定义 */
:root {
  --color-primary-50: #faf5ff;
  --color-primary-100: #f3e8ff;
  --color-primary-200: #e9d5ff;
  --color-primary-300: #d8b4fe;
  --color-primary-400: #c084fc;
  --color-primary-500: #a855f7;
  --color-primary-600: #9333ea;
  --color-primary-700: #7e22ce;
  --color-primary-800: #6b21a8;
  --color-primary-900: #581c87;
  --color-primary-950: #3b0764;
  --color-primary-50-rgb: 250, 245, 255;
  --color-primary-100-rgb: 243, 233, 255;
  --color-primary-200-rgb: 233, 214, 254;
  --color-primary-300-rgb: 216, 182, 252;
  --color-primary-400-rgb: 191, 136, 249;
  --color-primary-500-rgb: 167, 92, 244;
  --color-primary-600-rgb: 146, 62, 231;
  --color-primary-700-rgb: 125, 46, 203;
  --color-primary-800-rgb: 106, 41, 166;
  --color-primary-900-rgb: 88, 34, 133;
  --color-primary-950-rgb: 59, 14, 99;
}
```

<ClientOnly>
  <button type="button" class="btn rounded primary" @click="toggleCssVars">切换使用上面的调色板定义</button>
</ClientOnly>

::: tip 提示
在定义 CSS 变量覆盖调色板时，除了定义 50~950 的十六进制颜色外，还需要定义对应的 RGB 颜色，这是为了在一些特殊场景下通过改变透明度来实现颜色的变化。
:::

::: warning 注意
如果你需要自定义配色，建议只通过修改调色板来实现，不建议修改界面公共颜色，除非主题需要实现对比度更明显的风格，任何时候都不应该修改特殊颜色的定义。
:::

更多关于主题的内容参考 [主题](/theme/) 文档。

<script setup>
import ColorTile from './components/color-tile.vue';

const semanticColors = [
    {id: 'primary', tailwind: 'blue', name: '主要', meaning: '品牌、主题、可交互、正常'},
    {id: 'secondary', tailwind: 'sky', name: '次要', meaning: '品牌、主题、次级、常态的'},
    {id: 'success', tailwind: 'green', name: '成功', meaning: '完成、积极'},
    {id: 'warning', tailwind: 'amber', name: '关注', meaning: '提示、重点'},
    {id: 'danger', tailwind: 'red', name: '警告', meaning: '提示、异常、警醒'},
    {id: 'important', tailwind: 'pink', name: '重要', meaning: '优先'},
    {id: 'special', tailwind: 'purple', name: '特殊', meaning: '触动、激情'},
    {id: 'gray', tailwind: 'slate', name: '灰色', meaning: '中立、背景、边界'},
];
const semanticLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const uiColors = [
  {code: 'canvas', name: '画布颜色', meaning: '通常用于页面背景、组件背景等，在浅色主题中为白色，在深色主题中为深黑色。'},
  {code: 'inverse', name: '画布反色', meaning: '通常用于界面突出部分的背景或文字颜色，例如工具提示背景等，在浅色主题中为黑色，在深色主题中为白色。'},
  {code: 'surface', name: '控件背景', meaning: '用于控件的背景颜色，例如按钮背景、可交互面板背景等，在浅色主题中为浅灰色，在深色主题中为深黑色。'},
  {code: 'fore', name: '文本颜色', meaning: '默认的文本颜色，在浅色主题中为深黑色，在深色主题中为浅灰色。'},
  {code: 'focus', name: '焦点颜色', meaning: '可聚焦控件的焦点状态指示颜色，例如按钮获得焦点的轮廓颜色。'},
  {code: 'link', name: '链接颜色', meaning: '链接的颜色，例如超链接、按钮链接等，通常与主题色保持一致。'},
  {code: 'link-hover', name: '链接悬停颜色', meaning: '链接的在鼠标悬停状态时的颜色'},
  {code: 'link-visited', name: '链接访问后的颜色', meaning: '链接的在点击访问后的颜色'},
  {code: 'border', name: '边框颜色', meaning: '控件的边框颜色'},
  {code: 'border-strong', name: '加重的边框颜色', meaning: '加重的控件的边框颜色'},
  {code: 'border-light', name: '轻量的边框颜色', meaning: '轻量的控件的边框颜色'},
];
const specialColors = [
  {code: 'white', name: '白色', meaning: '永远为纯白色 <code>#FFFFFF</code>，不会受主题影响'},
  {code: 'black', name: '黑色', meaning: '永远为纯黑色 <code>#000000</code>，不会受主题影响'},
  {code: 'transparent', name: '透明色', meaning: 'Alpha 通道永远为 <code>0</code>，不会受主题影响'},
  {code: 'inherit', name: '继承色', meaning: '继承父元素同属性的颜色值，由 CSS color 属性值 <code>inherit</code> 提供。'},
  {code: 'current', name: '当前色', meaning: '继承父元素文本颜色属性的值，由 CSS color 属性值 <code>currentColor</code> 提供。'},
];

const toggleCssVars = import.meta.env.SSR ? null : () => {
  let style = document.getElementById('doc-css-vars');
  if (style) {
    style.remove();
  } else {
    style = document.createElement('style');
    style.id = 'doc-css-vars';
    style.innerHTML = [
      ':root {',
      '  --color-primary-50: #faf5ff;',
      '  --color-primary-100: #f3e8ff;',
      '  --color-primary-200: #e9d5ff;',
      '  --color-primary-300: #d8b4fe;',
      '  --color-primary-400: #c084fc;',
      '  --color-primary-500: #a855f7;',
      '  --color-primary-600: #9333ea;',
      '  --color-primary-700: #7e22ce;',
      '  --color-primary-800: #6b21a8;',
      '  --color-primary-900: #581c87;',
      '  --color-primary-950: #3b0764;',
      '  --color-primary-50-rgb: 250, 245, 255;',
      '  --color-primary-100-rgb: 243, 233, 255;',
      '  --color-primary-200-rgb: 233, 214, 254;',
      '  --color-primary-300-rgb: 216, 182, 252;',
      '  --color-primary-400-rgb: 191, 136, 249;',
      '  --color-primary-500-rgb: 167, 92, 244;',
      '  --color-primary-600-rgb: 146, 62, 231;',
      '  --color-primary-700-rgb: 125, 46, 203;',
      '  --color-primary-800-rgb: 106, 41, 166;',
      '  --color-primary-900-rgb: 88, 34, 133;',
      '  --color-primary-950-rgb: 59, 14, 99;',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }
};
</script>
