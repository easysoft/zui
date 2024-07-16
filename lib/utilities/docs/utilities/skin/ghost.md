# 透明

用于快速为元素或组件实现特定文字颜色带透明背景外观。

## 效果

<Example class="gap-6 col" background="light-grid">
  <div v-for="group in colors" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="flex-wrap gap-4 row">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="state rounded h-8 w-28 font-mono text-sm"
          :title="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

## 示例

::: tabs

== 示例

<Example class="items-start gap-3 col">
  <button class="btn primary-ghost">Primary Button</button>
  <div class="p-2 ghost state">Ghost Element</div>
</Example>

== HTML

```html
<button class="btn primary-ghost">Primary Button</button>
<div class="p-2 ghost state">Ghost Element</div>
```

:::

<script setup>
    const colors = [
        {
            name: 'default',
            title: '默认',
            items: [
                {name: 'ghost'}
            ],
        }, {
            name: 'semantic',
            title: '语义化',
            items: [
                {name: 'primary-ghost'},
                {name: 'secondary-ghost'},
                {name: 'success-ghost'},
                {name: 'warning-ghost'},
                {name: 'danger-ghost'},
                {name: 'important-ghost'},
                {name: 'special-ghost'},
            ],
        }
    ];
</script>
