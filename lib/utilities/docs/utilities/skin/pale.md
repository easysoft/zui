# 浅色

用于快速为元素或组件实现特定颜色的浅色填充外观，包含语义化和灰度工具类。

## 效果

<Example>
  <div class="mb-3"><strong>语义化</strong></div>
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="color in colors.semantic"
        :key="color.name"
        tileClass="rounded h-8 w-28 font-mono text-sm"
        :title="true"
        v-bind="{...color}"
    />
  </div>
  <div class="mt-6 mb-3"><strong>灰度</strong></div>
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="color in colors.gray"
        :key="color.name"
        tileClass="rounded h-8 w-28 font-mono text-sm"
        :title="true"
        v-bind="color"
    />
  </div>
</Example>

## 示例

<Example class="col items-start gap-2">
  <button class="btn primary-pale">Primary Button</button>
  <span class="label success-pale">Success Label</span>
  <div class="gray-pale p-2">Gray Element</div>
</Example>

```html
<button class="btn primary-pale">Primary Button</button>
<span class="label success-pale">Success Label</span>
<div class="gray-pale p-2">Gray Element</div>
```

<script setup>
    const colors = {
        semantic: [
            {name: 'primary-pale'},
            {name: 'secondary-pale'},
            {name: 'success-pale'},
            {name: 'warning-pale'},
            {name: 'danger-pale'},
            {name: 'important-pale'},
            {name: 'special-pale'},
        ],
        gray: [
            {name: 'gray-50-pale'},
            {name: 'gray-100-pale'},
            {name: 'gray-200-pale'},
            {name: 'gray-300-pale'},
            {name: 'gray-400-pale'},
            {name: 'gray-500-pale', hint: true, alias: 'gray-pale', title: 'gray-pale'},
            {name: 'gray-600-pale'},
            {name: 'gray-700-pale'},
            {name: 'gray-800-pale'},
            {name: 'gray-900-pale'},
            {name: 'gray-950-pale'},
        ],
    };
</script>
