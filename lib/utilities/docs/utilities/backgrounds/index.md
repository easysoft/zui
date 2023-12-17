# 背景色

## 效果

使用工具类 `bg-*` 给元素添加背景色。

<Example class="col gap-6" background="light-circle">
  <div v-for="group in colors" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="rounded h-8 w-28"
          labelClass="font-mono text-sm"
          :title="false"
          :hint="false"
          :label="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

## 背景色透明度

使用工具类 `bg-opacity-*` 给元素设置背景色透明度。

<Example class="col gap-6" background="light-grid">
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="item in opacityList"
        :key="item.name"
        tileClass="inverse rounded h-8 w-28"
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
            name: 'semantic',
            title: '语义化',
            items: [
                {name: 'bg-primary'},
                {name: 'bg-secondary'},
                {name: 'bg-success'},
                {name: 'bg-warning'},
                {name: 'bg-danger'},
                {name: 'bg-important'},
                {name: 'bg-special'},
            ],
        }, {
            name: 'primary',
            title: '主色系列',
            items: [
                {name: 'bg-primary-50'},
                {name: 'bg-primary-100'},
                {name: 'bg-primary-200'},
                {name: 'bg-primary-300'},
                {name: 'bg-primary-400'},
                {name: 'bg-primary-500'},
                {name: 'bg-primary-600'},
                {name: 'bg-primary-700'},
                {name: 'bg-primary-800'},
                {name: 'bg-primary-900'},
                {name: 'bg-primary-950'},
            ],
        }, {
            name: 'secondary',
            title: '次要系列',
            items: [
                {name: 'bg-secondary-50'},
                {name: 'bg-secondary-100'},
                {name: 'bg-secondary-200'},
                {name: 'bg-secondary-300'},
                {name: 'bg-secondary-400'},
                {name: 'bg-secondary-500'},
                {name: 'bg-secondary-600'},
                {name: 'bg-secondary-700'},
                {name: 'bg-secondary-800'},
                {name: 'bg-secondary-900'},
                {name: 'bg-secondary-950'},
            ],
        }, {
            name: 'gray',
            title: '灰度',
            items: [
                {name: 'bg-gray-50'},
                {name: 'bg-gray-100'},
                {name: 'bg-gray-200'},
                {name: 'bg-gray-300'},
                {name: 'bg-gray-400'},
                {name: 'bg-gray-500', label: 'gray', alias: 'bg-gray', hint: true},
                {name: 'bg-gray-600'},
                {name: 'bg-gray-700'},
                {name: 'bg-gray-800'},
                {name: 'bg-gray-900'},
                {name: 'bg-gray-950'},
            ],
        }, {
            name: 'ui',
            title: '界面',
            items: [
                {name: 'bg-white', hint: '纯白'},
                {name: 'bg-black', hint: '纯黑'},
                {name: 'bg-transparent', hint: '透明'},
                {name: 'bg-canvas', hint: '画布'},
                {name: 'bg-inverse', hint: '反色'},
                {name: 'bg-surface-light', hint: '加重的控件'},
                {name: 'bg-surface', hint: '控件'},
                {name: 'bg-surface-strong', hint: '轻量的控件'},
                {name: 'bg-fore', hint: '前景色作为背景'},
                {name: 'bg-focus', hint: '焦点色作为背景'},
            ],
        },{
            name: 'special',
            title: '特殊',
            items: [
                {name: 'bg-current', hint: 'CSS 值 currentColor'},
                {name: 'bg-inherit', hint: 'CSS 值 inherit'},
                {name: 'bg-none', hint: '无背景'},
            ],
        },
    ];
    const opacityList = [
        {name: 'bg-opacity-0', hint: '透明度：0%'},
        {name: 'bg-opacity-5', hint: '透明度：5%'},
        {name: 'bg-opacity-10', hint: '透明度：10%'},
        {name: 'bg-opacity-20', hint: '透明度：20%'},
        {name: 'bg-opacity-25', hint: '透明度：25%'},
        {name: 'bg-opacity-30', hint: '透明度：30%'},
        {name: 'bg-opacity-40', hint: '透明度：40%'},
        {name: 'bg-opacity-50', hint: '透明度：60%'},
        {name: 'bg-opacity-60', hint: '透明度：60%'},
        {name: 'bg-opacity-70', hint: '透明度：70%'},
        {name: 'bg-opacity-75', hint: '透明度：75%'},
        {name: 'bg-opacity-80', hint: '透明度：80%'},
        {name: 'bg-opacity-90', hint: '透明度：90%'},
        {name: 'bg-opacity-95', hint: '透明度：95%'},
        {name: 'bg-opacity-100', hint: '透明度：0%'},
    ];
</script>
