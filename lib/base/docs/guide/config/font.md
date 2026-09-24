# 字体

字体配置包含字体、字号、字重和行高多个部分，下面分别进行介绍。

## 字体风格

字体用于设置文本呈现的风格，在 ZUI 中预设了三种字体风格，包括无衬线字体、衬线字体和等宽字体。下面为三种字体的直观展示：

<Example background="light-circle" class="space-y-8">
  <div v-for="font in fontFamilies" :key="font.code">
    <div class="items-center gap-2 row">
      <CopyCode :code="font.code" :tip="`.${font.code}`" copyTip="已复制类名"><strong class="font-mono uppercase text-primary">
      {{font.code}}</strong></CopyCode>
      <span class="muted">—</span>
      <strong>{{font.name}}</strong> <span class="ml-4 muted">{{font.desc}}</span>
    </div>
    <pre :class="`${font.code} text-xl mt-2`" :id="`example-${font.code}`">The quick brown fox jumps over the lazy dog.
白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</pre>
  </div>
</Example>

在 ZUI 中，以上三种字体风格所使用的 CSS font-family 属性值如下：

**无衬线字体 `font-sans`**

<div class="px-2 py-1 rounded surface">
  <CssPropValue class="font-mono text-sm pre-line" prop="font-family" target="#example-font-sans" />
</div>

**衬线字体 `font-serif`**

<div class="px-2 py-1 rounded surface">
  <CssPropValue class="font-mono text-sm pre-line" prop="font-family" target="#example-font-serif" />
</div>

**等宽字体 `font-mono`**

<div class="px-2 py-1 rounded surface">
  <CssPropValue class="font-mono text-sm pre-line" prop="font-family" target="#example-font-mono" />
</div>

::: tip 修改字体

通常不建议修改字体，如需修改可以通过定制主题实现，具体参见 [主题](/themes/) 文档。

:::

在 ZUI 中可以通过 CSS 工具类来设置字体，详细用法参加 [CSS 工具类 / 排版 / 字体](/utilities/typography/utilities/font-family) 文档。

## 字号

字号用于设置文本呈现的大小，在 ZUI 中预设了多种字号。详情参见下表：

<Example class="space-y-6">
  <div v-for="font in fontSizes" :key="font.code">
    <div class="items-center gap-2 row">
      <CopyCode :code="font.code" :tip="`.${font.code}`" copyTip="已复制类名"><strong class="font-mono uppercase text-primary">{{font.code}}</strong></CopyCode>
      <span class="muted">—</span>
      <strong>{{font.name}}</strong>
      <span v-if="font.desc" class="ml-2 muted" v-html="font.desc" />
      <div class="flex-auto font-mono text-sm text-right text-gray">font-size: <CssPropValue prop="font-size" :target="`#example-${font.code}`" /></div>
    </div>
    <pre :class="`mt-2 font-sans pre clip ${font.code}`" :id="`example-${font.code}`">The quick brown fox jumps over the lazy dog.
白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</pre>
  </div>
</Example>

::: tip 修改字号

通常不建议修改字号，如需修改可以通过定制主题实现，具体参见 [主题](/themes/) 文档。

:::

在 ZUI 中可以通过 CSS 工具类来设置字号，详细用法参加 [CSS 工具类 / 排版 / 字号](/utilities/typography/utilities/font-size) 文档。

## 字重

在 ZUI 中预设了 6 种常见字重，详情参见下表：

<Example class="space-y-6">
  <div v-for="font in fontWeights" :key="font.code">
    <div class="items-center gap-2 row">
      <CopyCode :code="font.code" :tip="`.${font.code}`" copyTip="已复制类名"><strong class="font-mono uppercase text-primary">{{font.code}}</strong></CopyCode>
      <span class="muted">—</span>
      <strong>{{font.name}}</strong>
      <span v-if="font.desc" class="ml-2 muted" v-html="font.desc" />
      <div class="flex-auto font-mono text-sm text-right text-gray">font-weight: <CssPropValue prop="font-weight" :target="`#example-${font.code}`" /></div>
    </div>
    <pre :class="`mt-2 font-sans pre clip text-lg ${font.code}`" :id="`example-${font.code}`">The quick brown fox jumps over the lazy dog.
白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</pre>
  </div>
</Example>

::: tip 修改字重

通常不建议修改字重，如需修改可以通过定制主题实现，具体参见 [主题](/themes/) 文档。

:::

在 ZUI 中可以通过 CSS 工具类来设置字重，详细用法参加 [CSS 工具类 / 排版 / 字重](/utilities/typography/utilities/font-weight) 文档。

## 行高

ZUI 中预设了多种常见行高，下面为几种常见行高的示例：

<Example class="space-y-6">
  <div v-for="font in leadings" :key="font.code">
    <div class="items-center gap-2 row">
      <CopyCode :code="font.code" :tip="`.${font.code}`" copyTip="已复制类名"><strong class="font-mono uppercase text-primary">{{font.code}}</strong></CopyCode>
      <span class="muted">—</span>
      <strong>{{font.name}}</strong>
      <span v-if="font.desc" class="ml-2 muted" v-html="font.desc" />
      <div class="flex-auto font-mono text-sm text-right text-gray">line-height: <CssPropValue prop="line-height" :target="`#example-${font.code}`" /></div>
    </div>
    <pre :class="`mt-2 font-sans pre-line text-lg ${font.code}`" :id="`example-${font.code}`">The release review is scheduled for Friday at 15:00. The team will confirm the delivery scope, review the acceptance results, and check the upgrade instructions before publishing. After the update, the on-call engineer will verify sign-in, ticket search, and file uploads. Any remaining issues will be recorded with an owner and a follow-up date.
本次迭代交付工单查询、附件预览和消息通知。发布前请核对验收结果与升级说明，确认负责人和回退步骤。发布后由值班成员检查核心操作，记录客户反馈，并安排下一轮改进。</pre>
  </div>
</Example>

在 ZUI 中可以通过 CSS 工具类来设置行高，详细用法参加 [CSS 工具类 / 排版 / 行高](/utilities/typography/utilities/leading) 文档。

<script setup>
const fontFamilies = [
  {code: 'font-sans', name: '无衬线字体', desc: '默认字体，易于阅读，通常用于正文'},
  {code: 'font-serif', name: '衬线字体', desc: '更美观，通常用于标题或装饰性文本'},
  {code: 'font-mono', name: '等宽字体', desc: '每个字符宽度一致，便于对齐，辨识度高，通常用于代码和编号等'},
];
const fontSizes = [
  {code: 'text-root', name: '根节点字号', desc: '设置在 <code>&lt;html&gt;</code> 元素上的字号'},
  {code: 'text-sm', name: '小号文本'},
  {code: 'text-base', name: '基准字号文本', desc: '通常与页面默认字号一致'},
  {code: 'text-md', name: '中号文本'},
  {code: 'text-lg', name: '大号文本'},
  {code: 'text-xl', name: '超大号文本'},
  {code: 'text-2xl', name: '2x 超大号文本'},
  {code: 'text-3xl', name: '3x 超大号文本'},
  {code: 'text-4xl', name: '4x 超大号文本'},
];
const fontWeights = [
  {code: 'font-thin', name: '超细文本'},
  {code: 'font-light', name: '细文本'},
  {code: 'font-normal', name: '正常粗细文本'},
  {code: 'font-medium', name: '中等粗细文本'},
  {code: 'font-bold', name: '加粗文本'},
  {code: 'font-black', name: '超粗文本'},
];
const leadings = [
  {code: 'leading-tight', name: '紧密'},
  {code: 'leading-snug', name: '紧凑'},
  {code: 'leading-normal', name: '正常'},
  {code: 'leading-relaxed', name: '宽松'},
  {code: 'leading-loose', name: '松散'},
];
const allLeadings = [
  {code: 'leading-3'},
  {code: 'leading-4'},
  {code: 'leading-5'},
  {code: 'leading-6'},
  {code: 'leading-7'},
  {code: 'leading-8'},
  {code: 'leading-9'},
  {code: 'leading-10'},
  {code: 'leading-none'},
  ...leadings,
];
</script>
