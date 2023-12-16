# 变换

使用 CSS `transform` 对元素应用变换效果。

## 缩放

通过 `scale-*` 为元素应用缩放效果。

<Example class="flex flex-wrap gap-8 p-8">
  <div v-for="item in scaleList" :key="item">
    <StyleTile
      :tileClass="['w-16 h-16', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
    >
      <img src="/favicon.svg">
    </StyleTile>
  </div>
</Example>

## 旋转

通过 `rotate-*` 为元素应用旋转效果。

<Example class="flex flex-wrap gap-8 p-8">
  <div v-for="item in rotateList" :key="item">
    <StyleTile
      :tileClass="['w-16 h-16', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
    >
      <img src="/favicon.svg">
    </StyleTile>
  </div>
</Example>

## 翻转

添加 `flip-*` 给元素添加翻转效果。

<Example class="flex flex-wrap gap-8 p-8">
  <div v-for="item in flipList" :key="item">
    <StyleTile
      :tileClass="['w-16 h-16', item]"
      :name="item"
      :labelClass="['text-center', item ? 'font-mono text-sm' : '']"
      :label="item || '原始'"
    >
      <img src="/favicon.svg">
    </StyleTile>
  </div>
</Example>

<script setup>
  const scaleList = [
    '',
    'scale-0',
    'scale-50',
    'scale-75',
    'scale-90',
    'scale-95',
    'scale-100',
    'scale-105',
    'scale-110',
    'scale-125',
    'scale-150',
  ];

  const rotateList = [
    '',
    'rotate-0',
    'rotate-1',
    'rotate-2',
    'rotate-3',
    'rotate-6',
    'rotate-12',
    'rotate-45',
    'rotate-90',
    'rotate-135',
    'rotate-180',
    'rotate-270',
  ];
  const flipList = [
    '',
    'flip-x',
    'flip-y',
  ];
</script>
