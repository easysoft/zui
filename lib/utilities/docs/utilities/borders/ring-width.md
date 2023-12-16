# 环大小

## 效果

通过 `ring-*` 来为元素环大小。

<Example class="col gap-6">
  <div v-for="group in rings" :key="group.name || group.title">
    <div v-if="group.title" class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-8">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="border border ring ring-primary rounded h-8 w-32"
          labelClass="font-mono text-sm"
          :title="false"
          :hint="false"
          :label="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

<script setup>
    const rings = [
        {
            name: 'default',
            items: [
                {name: 'ring-0'},
                {name: 'ring', hint: "默认"},
                {name: 'ring-2'},
                {name: 'ring-3'},
                {name: 'ring-4'},
                {name: 'ring-8'},
            ],
        }
    ];
</script>
