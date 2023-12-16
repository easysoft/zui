# 界面

用于快速为元素或组件实现特定功能界面颜色外观。

## 效果

<Example class="col gap-6" background="light-grid">
  <div v-for="group in colors" :key="group.name || group.title">
    <div v-if="group.title" class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="rounded h-8 w-32 ring font-mono text-sm"
          :title="true"
          v-bind="{...group.tileProps, ...item}"
      />
    </div>
  </div>
</Example>

## 示例

<Example class="col items-start gap-3">
  <button class="btn inverse">Inverse Button</button>
  <div class="surface p-2">Surface Element</div>
</Example>

```html
<button class="btn inverse">Inverse Button</button>
<div class="surface p-2">Surface Element</div>
```

<script setup>
    const colors = [
        {
            name: 'ui',
            items: [
                {name: 'white', label: '纯白'},
                {name: 'black', label: '纯黑'},
                {name: 'transparent', label: '透明'},
                {name: 'canvas', label: '画布'},
                {name: 'inverse', label: '反色'},
                {name: 'surface-light', label: '加重的控件'},
                {name: 'surface', label: '控件'},
                {name: 'surface-strong', label: '轻量的控件'},
            ],
        }
    ];
</script>
