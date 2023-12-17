# 文本颜色

## 效果

使用工具类 `text-*` 给元素添加文本颜色。

<Example class="col gap-6" background="light-circle">
  <div v-for="group in colors" :key="group.name || group.title">
    <div class="mb-3 font-bold">{{group.title}}</div>
    <div class="row flex-wrap gap-4">
      <StyleTile
          v-for="item in group.items"
          :key="item.name"
          tileClass="rounded h-8 w-32 canvas"
          labelClass="font-mono text-sm text-center"
          title="Text 文本"
          :hint="false"
          :label="true"
          v-bind="{...item}"
      />
    </div>
  </div>
</Example>

## 文本颜色透明度

使用工具类 `text-opacity-*` 给元素设置文本颜色透明度。

<Example class="col gap-6" background="light-grid">
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="item in opacityList"
        :key="item.name"
        tileClass="rounded canvas h-8 w-32"
        labelClass="font-mono text-sm"
        title="Text 文本"
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
                {name: 'text-primary'},
                {name: 'text-secondary'},
                {name: 'text-success'},
                {name: 'text-warning'},
                {name: 'text-danger'},
                {name: 'text-important'},
                {name: 'text-special'},
            ],
        }, {
            name: 'primary',
            title: '主色系列',
            items: [
                {name: 'text-primary-50'},
                {name: 'text-primary-100'},
                {name: 'text-primary-200'},
                {name: 'text-primary-300'},
                {name: 'text-primary-400'},
                {name: 'text-primary-500'},
                {name: 'text-primary-600'},
                {name: 'text-primary-700'},
                {name: 'text-primary-800'},
                {name: 'text-primary-900'},
                {name: 'text-primary-950'},
            ],
        }, {
            name: 'secondary',
            title: '次要系列',
            items: [
                {name: 'text-secondary-50'},
                {name: 'text-secondary-100'},
                {name: 'text-secondary-200'},
                {name: 'text-secondary-300'},
                {name: 'text-secondary-400'},
                {name: 'text-secondary-500'},
                {name: 'text-secondary-600'},
                {name: 'text-secondary-700'},
                {name: 'text-secondary-800'},
                {name: 'text-secondary-900'},
                {name: 'text-secondary-950'},
            ],
        }, {
            name: 'gray',
            title: '灰度',
            items: [
                {name: 'text-gray-50'},
                {name: 'text-gray-100'},
                {name: 'text-gray-200'},
                {name: 'text-gray-300'},
                {name: 'text-gray-400'},
                {name: 'text-gray-500', label: 'gray', alias: 'text-gray', hint: true},
                {name: 'text-gray-600'},
                {name: 'text-gray-700'},
                {name: 'text-gray-800'},
                {name: 'text-gray-900'},
                {name: 'text-gray-950'},
            ],
        }, {
            name: 'ui',
            title: '界面',
            items: [
                {name: 'text-white', hint: '纯白'},
                {name: 'text-black', hint: '纯黑'},
                {name: 'text-transparent', hint: '透明'},
                {name: 'text-canvas', hint: '画布'},
                {name: 'text-inverse', hint: '反色'},
                {name: 'text-surface-light', hint: '加重的控件'},
                {name: 'text-surface', hint: '控件'},
                {name: 'text-surface-strong', hint: '轻量的控件'},
                {name: 'text-fore', hint: '前景色作为背景'},
                {name: 'text-focus', hint: '焦点色作为背景'},
            ],
        },{
            name: 'special',
            title: '特殊',
            items: [
                {name: 'text-current', hint: 'CSS 值 currentColor'},
                {name: 'text-inherit', hint: 'CSS 值 inherit'},
            ],
        },
    ];
    const opacityList = [
        {name: 'text-opacity-0', hint: '透明度：0%'},
        {name: 'text-opacity-5', hint: '透明度：5%'},
        {name: 'text-opacity-10', hint: '透明度：10%'},
        {name: 'text-opacity-20', hint: '透明度：20%'},
        {name: 'text-opacity-25', hint: '透明度：25%'},
        {name: 'text-opacity-30', hint: '透明度：30%'},
        {name: 'text-opacity-40', hint: '透明度：40%'},
        {name: 'text-opacity-50', hint: '透明度：60%'},
        {name: 'text-opacity-60', hint: '透明度：60%'},
        {name: 'text-opacity-70', hint: '透明度：70%'},
        {name: 'text-opacity-75', hint: '透明度：75%'},
        {name: 'text-opacity-80', hint: '透明度：80%'},
        {name: 'text-opacity-90', hint: '透明度：90%'},
        {name: 'text-opacity-95', hint: '透明度：95%'},
        {name: 'text-opacity-100', hint: '透明度：0%'},
    ];
</script>
