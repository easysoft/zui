# 环颜色

## 效果

通过 `ring-*` 来为元素添加通过 `box-shadow` 实现的环边框颜色。

<Example class="col gap-6">
  <div v-for="group in rings" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="ring rounded h-8 w-32"
          labelClass="font-mono text-sm"
          :title="false"
          :hint="false"
          :label="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

## 环颜色透明度

使用工具类 `ring-opacity-*` 给元素添加背景色透明度。

<Example class="col gap-6" background="light-grid">
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="item in opacityList"
        :key="item.name"
        tileClass="ring ring-inverse rounded h-8 w-28"
        labelClass="font-mono text-sm"
        :title="false"
        :hint="false"
        :label="true"
        v-bind="{...item}"
    />
  </div>
</Example>

<script setup>
    const rings = [
        {
            name: 'border',
            title: '作为边框',
            items: [
                {name: 'ring-border-light'},
                {name: 'ring-border'},
                {name: 'ring-border-strong'},
            ],
        }, {
            name: 'inverse',
            title: '透明度反色',
            items: [
                {name: 'ring-light'},
                {name: 'ring-gray'},
                {name: 'ring-dark'},
                {name: 'ring-darker'},
                {name: 'ring-darkest'},
            ],
        }, {
            name: 'semantic',
            title: '语义化',
            items: [
                {name: 'ring-primary'},
                {name: 'ring-secondary'},
                {name: 'ring-success'},
                {name: 'ring-warning'},
                {name: 'ring-danger'},
                {name: 'ring-important'},
                {name: 'ring-special'},
            ],
        }, {
            name: 'gray',
            title: '灰度',
            items: [
                {name: 'ring-gray-50'},
                {name: 'ring-gray-100'},
                {name: 'ring-gray-200'},
                {name: 'ring-gray-300'},
                {name: 'ring-gray-400'},
                {name: 'ring-gray-500'},
                {name: 'ring-gray-600'},
                {name: 'ring-gray-700'},
                {name: 'ring-gray-800'},
                {name: 'ring-gray-900'},
                {name: 'ring-gray-950'},
            ],
        }, {
            name: 'ui',
            title: '界面',
            items: [
                {name: 'ring-white', hint: '纯白'},
                {name: 'ring-black', hint: '纯黑'},
                {name: 'ring-canvas', hint: '画布'},
                {name: 'ring-inverse', hint: '反色'},
                {name: 'ring-surface', hint: '控件'},
                {name: 'ring-fore', hint: '前景色'},
                {name: 'ring-focus', hint: '焦点色'},
            ],
        }, {
            name: 'special',
            title: '特殊',
            items: [
                {name: 'ring-current', hint: 'CSS 值 currentColor'},
                {name: 'ring-inherit', hint: 'CSS 值 inherit'},
            ],
        }
    ];

    const opacityList = [
        {name: 'ring-opacity-0', hint: '透明度：0%'},
        {name: 'ring-opacity-5', hint: '透明度：5%'},
        {name: 'ring-opacity-10', hint: '透明度：10%'},
        {name: 'ring-opacity-20', hint: '透明度：20%'},
        {name: 'ring-opacity-25', hint: '透明度：25%'},
        {name: 'ring-opacity-30', hint: '透明度：30%'},
        {name: 'ring-opacity-40', hint: '透明度：40%'},
        {name: 'ring-opacity-50', hint: '透明度：60%'},
        {name: 'ring-opacity-60', hint: '透明度：60%'},
        {name: 'ring-opacity-70', hint: '透明度：70%'},
        {name: 'ring-opacity-75', hint: '透明度：75%'},
        {name: 'ring-opacity-80', hint: '透明度：80%'},
        {name: 'ring-opacity-90', hint: '透明度：90%'},
        {name: 'ring-opacity-95', hint: '透明度：95%'},
        {name: 'ring-opacity-100', hint: '透明度：0%'},
    ];
</script>
