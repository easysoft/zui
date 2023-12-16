# 轮廓

用于快速为元素或组件实现特定颜色的轮廓描边外观。

## 效果

<Example class="col gap-6">
  <div v-for="group in colors" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="rounded h-8 w-32 font-mono text-sm"
          :title="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

::: tip 提示
轮廓的描边效果使用 `box-shadow` 实现。
:::

## 示例

<Example class="col items-start gap-3">
  <button class="btn primary-outline">Primary Button</button>
  <span class="label success-outline">Success Label</span>
  <div class="gray-outline p-2">Gray Element</div>
</Example>

```html
<button class="btn primary-outline">Primary Button</button>
<span class="label success-outline">Success Label</span>
<div class="gray-outline p-2">Gray Element</div>
```

<script setup>
    const colors = [
        {
            name: 'default',
            title: '默认',
            items: [
                {name: 'outline'}
            ],
        }, {
            name: 'semantic',
            title: '语义化',
            items: [
                {name: 'primary-outline'},
                {name: 'secondary-outline'},
                {name: 'success-outline'},
                {name: 'warning-outline'},
                {name: 'danger-outline'},
                {name: 'important-outline'},
                {name: 'special-outline'},
            ],
        }, {
            name: 'gray',
            title: '灰度',
            items: [
                {name: 'gray-outline'},
            ],
        }
    ];
</script>
