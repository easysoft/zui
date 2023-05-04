# 间距

## 间距配置

为了方便实现风格一致的交互界面，ZUI 预置了间距设置。下面为默认的间距配置：

<Example background="light-circle" class="space-y-1">
  <div class="gap-4 mb-2 row">
    <div class="w-12 font-bold muted">名称</div>
    <div class="w-12 font-bold muted">实际值</div>
    <div class="w-12 font-bold muted">预览</div>
  </div>
  <div v-for="scale in spacingScales" :key="scale" class="gap-4 row">
    <div class="w-12 font-mono font-bold">{{scale}}</div>
    <CssPropValue class="w-12 text-sm text-center muted" prop="width" :target="`#example-spacing-${scale}`" />
    <div :class="`bg-secondary h-4 w-${scale}`" :id="`example-spacing-${scale}`"></div>
  </div>
</Example>

间距会影响所有相关 CSS 属性配置，包括 `padding`、`margin`、`width`、`height`、`maxHeight`、`gap`、`inset` 等。

## 使用间距

在 ZUI 中提供了大量 CSS 工具类，可以非常方便的来应用间距配置，包括：

- [布局 / 上/右/下/左](/utilities/layout/utilities/top-right-bottom-left)
- [间距 / 外边距](/utilities/spacing/utilities/margin)
- [间距 / 内边距](/utilities/spacing/utilities/padding)
- [间距 / 子元素间距](/utilities/spacing/utilities/space)
- [尺寸 / 宽](/utilities/sizing/utilities/width)
- [尺寸 / 高](/utilities/sizing/utilities/height)

如需了解，请参考对应的文档。

## 自定义间距

可以通过定制主题来修改间距设置，具体参见 [主题](/guide/theme/) 文档。

<script setup>
const spacingScales = ['0', 'px', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96'];
</script>
