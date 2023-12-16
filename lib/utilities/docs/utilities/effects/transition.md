# 过渡动画

## 过渡属性

通过 `transition-*` 为元素应用过渡动画，并制定过渡目标属性。

<Example class="flex flex-wrap gap-8 p-8">
  <div v-for="item in transitions" :key="item">
    <StyleTile
      :tileClass="['w-40 h-16 border border-strong surface opacity-70 duration-500 transition-tile', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="true"
      :title="item.replace('transition-', '')"
    />
  </div>
</Example>

## 过渡时间

通过 `duration-*` 为元素应用过渡动画时间。

<Example class="flex flex-wrap gap-8 p-8">
  <div v-for="item in transitionTimes" :key="item">
    <StyleTile
      :tileClass="['w-40 h-16 border border-strong surface transition-tile', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="true"
      :title="item.replace('duration-', '') + 'ms'"
    />
  </div>
</Example>

## 渐隐渐显

通过 `fade-*` 来为元素设置渐隐渐显动画效果，默认元素不显示，通过控制添加 `in` 类让元素渐显。

<Example class="flex flex-wrap gap-8 p-8" background="light-circle">
  <div v-for="item in fadeList" :key="item.name">
    <StyleTile
      tileClass="w-40 h-16 text-gray"
      labelClass="text-center font-mono text-sm "
      :label="true"
      v-bind="item"
      noNameClass
    >
        <div :class="['absolute center inset-0 primary fade-tile duration-500', item.name]">
          {{item.title}}
        </div>
    </StyleTile>
  </div>
</Example>

<script setup>
  const transitions = [
    'transition',
    'transition-all',
    'transition-colors',
    'transition-opacity',
    'transition-shadow',
    'transition-transform',
  ];
  const transitionTimes = [
    'duration-75',
    'duration-100',
    'duration-200',
    'duration-300',
    'duration-500',
    'duration-1000',
  ];
  const fadeList = [
    {name: 'fade', title: '默认'},
    {name: 'fade-from-center', title: '从中心显示'},
    {name: 'fade-from-bottom', title: '从下方显示'},
    {name: 'fade-from-top', title: '从上方显示'},
    {name: 'fade-from-left', title: '从左侧显示'},
    {name: 'fade-from-right', title: '从右侧显示'},
  ];
</script>

<style>
.transition-tile:hover {
  transform: scale(1.2)!important;
  border-color: var(--color-primary-500);
  border-width: 4px;
  background-color: var(--color-primary-200);
  color: var(--color-primary-700);
  font-size: 1.5em;
  box-shadow: var(--shadow-xl);
  opacity: 1;
}
.style-tile-item:hover .fade-tile {
  transform: scale(1) translate(0, 0)!important;
  opacity: 1;
}
</style>
