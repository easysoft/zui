# 边框颜色

## 效果

使用工具类 `border-*` 给元素添加边框颜色。

<Example class="col gap-6">
  <div v-for="group in colors" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="border rounded h-8 w-32"
          labelClass="font-mono text-sm"
          :title="false"
          :hint="false"
          :label="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

::: tip 提示
除 `border` 外，其他工具类只设置边框颜色，如果需要启用边框，需要将 `border-*` 和 `border` 类一起使用，例如 `border border-primary`。
:::

## 边框颜色透明度

使用工具类 `border-opacity-*` 给元素添加边框颜色透明度。

<Example class="col gap-6" background="light-grid">
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="item in opacityList"
        :key="item.name"
        tileClass="border rounded h-8 w-28"
        labelClass="font-mono text-sm"
        :title="false"
        :hint="false"
        :label="true"
        v-bind="{...item}"
    />
  </div>
</Example>

<script setup>
    const colors = [
        {
            name: 'default',
            title: '默认',
            items: [
                {name: 'border-light'},
                {name: 'border'},
                {name: 'border-strong'},
            ],
        }, {
            name: 'semantic',
            title: '语义化',
            items: [
                {name: 'border-primary'},
                {name: 'border-secondary'},
                {name: 'border-success'},
                {name: 'border-warning'},
                {name: 'border-danger'},
                {name: 'border-important'},
                {name: 'border-special'},
            ],
        }, {
            name: 'gray',
            title: '灰度',
            items: [
                {name: 'border-gray-50'},
                {name: 'border-gray-100'},
                {name: 'border-gray-200'},
                {name: 'border-gray-300'},
                {name: 'border-gray-400'},
                {name: 'border-gray-500', label: 'gray', alias: 'border-gray', hint: true},
                {name: 'border-gray-600'},
                {name: 'border-gray-700'},
                {name: 'border-gray-800'},
                {name: 'border-gray-900'},
                {name: 'border-gray-950'},
            ],
        }, {
            name: 'ui',
            title: '界面',
            items: [
                {name: 'border-white', hint: '纯白'},
                {name: 'border-black', hint: '纯黑'},
                {name: 'border-transparent', hint: '透明'},
                {name: 'border-canvas', hint: '画布'},
                {name: 'border-inverse', hint: '反色'},
                {name: 'border-surface-light', hint: '加重的控件'},
                {name: 'border-surface', hint: '控件'},
                {name: 'border-surface-strong', hint: '轻量的控件'},
                {name: 'border-fore', hint: '前景色作为边框颜'},
                {name: 'border-focus', hint: '焦点色作为边框颜'},
            ],
        },{
            name: 'special',
            title: '特殊',
            items: [
                {name: 'border-current', hint: 'CSS 值 currentColor'},
                {name: 'border-inherit', hint: 'CSS 值 inherit'},
            ],
        },
    ];
    const opacityList = [
        {name: 'border-opacity-0', hint: '透明度：0%'},
        {name: 'border-opacity-5', hint: '透明度：5%'},
        {name: 'border-opacity-10', hint: '透明度：10%'},
        {name: 'border-opacity-20', hint: '透明度：20%'},
        {name: 'border-opacity-25', hint: '透明度：25%'},
        {name: 'border-opacity-30', hint: '透明度：30%'},
        {name: 'border-opacity-40', hint: '透明度：40%'},
        {name: 'border-opacity-50', hint: '透明度：60%'},
        {name: 'border-opacity-60', hint: '透明度：60%'},
        {name: 'border-opacity-70', hint: '透明度：70%'},
        {name: 'border-opacity-75', hint: '透明度：75%'},
        {name: 'border-opacity-80', hint: '透明度：80%'},
        {name: 'border-opacity-90', hint: '透明度：90%'},
        {name: 'border-opacity-95', hint: '透明度：95%'},
        {name: 'border-opacity-100', hint: '透明度：0%'},
    ];
</script>
