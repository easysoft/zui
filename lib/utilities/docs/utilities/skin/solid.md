# 实心

用于快速为元素或组件实现特定颜色的实心填充外观，包含语义化和灰度工具类。

## 效果

<Example>
  <div class="mb-3"><strong>语义化</strong></div>
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="color in colors.semantic"
        :key="color.name"
        tileClass="rounded h-8 w-20 text-sm font-mono"
        :title="true"
        v-bind="{...color}"
    />
  </div>
  <div class="mt-6 mb-3"><strong>灰度</strong></div>
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="color in colors.gray"
        :key="color.name"
        tileClass="rounded h-8 w-20 text-sm font-mono"
        :title="true"
        v-bind="color"
    />
  </div>
</Example>

## 示例

<Example class="col items-start gap-2">
  <button class="btn primary">Primary Button</button>
  <span class="label success">Success Label</span>
  <div class="gray-200 p-2">Gray Element</div>
</Example>

```html
<button class="btn primary">Primary Button</button>
<span class="label success">Success Label</span>
<div class="gray-200">Gray-200 Element</div>
```

<script setup>
    const colors = {
        semantic: [
            {name: 'primary'},
            {name: 'secondary'},
            {name: 'success'},
            {name: 'warning'},
            {name: 'danger'},
            {name: 'important'},
            {name: 'special'},
        ],
        gray: [
            {name: 'gray-50'},
            {name: 'gray-100'},
            {name: 'gray-200'},
            {name: 'gray-300'},
            {name: 'gray-400'},
            {name: 'gray-500', hint: true, alias: 'gray', title: 'gray'},
            {name: 'gray-600'},
            {name: 'gray-700'},
            {name: 'gray-800'},
            {name: 'gray-900'},
            {name: 'gray-950'},
        ],
    };
</script>
