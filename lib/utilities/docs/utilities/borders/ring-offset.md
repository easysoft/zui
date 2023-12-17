# 环偏移

## 效果

通过 `ring-offset-*` 来为元素环偏移大小。

<Example class="col gap-6">
  <div v-for="group in rings" :key="group.name || group.title">
    <div v-if="group.title" class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-8">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="border border ring ring-secondary rounded h-8 w-32"
          labelClass="font-mono text-sm"
          :title="false"
          :hint="false"
          :label="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

## 环位置

使用工具类 `ring-inset` 设置元素的环显示在元素内部。

<Example class="col gap-6">
  <div class="row flex-wrap gap-4">
    <StyleTile
        tileClass="border border ring ring-secondary rounded h-8 w-28"
        labelClass="font-mono text-sm"
        :title="false"
        name="ring"
        label="默认"
    />
    <StyleTile
        tileClass="border border ring ring-secondary ring-inset rounded h-8 w-28"
        labelClass="font-mono text-sm"
        :title="false"
        :hint="false"
        name="ring-inset"
        label="ring-inset"
    />
  </div>
</Example>

<script setup>
    const rings = [
        {
            name: 'default',
            title: '默认',
            items: [
                {name: 'ring-offset-0'},
                {name: 'ring-offset-1'},
                {name: 'ring-offset-2'},
                {name: 'ring-offset-4'},
                {name: 'ring-offset-8'},
            ],
        }
    ];
</script>
