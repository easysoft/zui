# 边框圆角

## 效果

使用 `'rounded-*` 设置元素边框圆角大小。

<Example class="col gap-6">
  <div v-for="group in radiusList" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="border h-8 w-32"
          labelClass="font-mono text-sm"
          :title="false"
          :hint="false"
          :label="true"
          v-bind="{...group.itemProps, ...item}"
      />
    </div>
  </div>
</Example>

<script setup>
const radiusList = [
    {
        name: 'all',
        title: '所有边',
        items: [
            {name: 'rounded-none'},
            {name: 'rounded-sm'},
            {name: 'rounded'},
            {name: 'rounded-lg'},
            {name: 'rounded-xl'},
            {name: 'rounded-2xl'},
            {name: 'rounded-3xl'},
            {name: 'rounded-full'},
        ],
    },{
        name: 'side',
        title: '禁用特定边',
        itemProps: {
          tileClass: 'border h-8 w-32 rounded-lg'
        },
        items: [
            {name: 'rounded-t-none'},
            {name: 'rounded-r-none'},
            {name: 'rounded-b-none'},
            {name: 'rounded-l-none'},
            {name: 'rounded-br-none'},
            {name: 'rounded-bl-none'},
            {name: 'rounded-tr-none'},
            {name: 'rounded-tl-none'},
        ],
    },
];
</script>
