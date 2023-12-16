# 边框大小

## 效果

使用 `'rounded-*` 设置元素边框大小。

<Example class="col gap-6">
  <div v-for="group in radiusList" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="h-8 w-32"
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
            {name: 'border-0'},
            {name: 'border'},
            {name: 'border-2'},
            {name: 'border-4'},
        ],
    },{
        name: 'top',
        title: '上边框',
        items: [
            {name: 'border-t-0'},
            {name: 'border-t'},
            {name: 'border-t-2'},
            {name: 'border-t-4'},
        ],
    },{
        name: 'right',
        title: '右边框',
        items: [
            {name: 'border-r-0'},
            {name: 'border-r'},
            {name: 'border-r-2'},
            {name: 'border-r-4'},
        ],
    },{
        name: 'bottom',
        title: '下边框',
        items: [
            {name: 'border-b-0'},
            {name: 'border-b'},
            {name: 'border-b-2'},
            {name: 'border-b-4'},
        ],
    },{
        name: 'left',
        title: '左边框',
        items: [
            {name: 'border-l-0'},
            {name: 'border-l'},
            {name: 'border-l-2'},
            {name: 'border-l-4'},
        ],
    }
];
</script>
