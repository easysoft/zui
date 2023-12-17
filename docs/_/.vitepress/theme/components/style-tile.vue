<template>
  <div :class="['style-tile-item', (name && !noHover) ? 'cursor-pointer' : '', noHover ? 'no-hover' : '']" @click="onClick">
    <div class="style-tile" :class="[tileClass, noNameClass ? '' : name,  copied ? (copiedClass ?? 'ring-4 ring-opacity-50') : '']" :style="tileStyle">
      {{ titleText }}
      <slot />
    </div>
    <div v-if="labelText" class="style-tile-label" :class="labelClass">{{ labelText }}</div>
    <div v-if="copied" class="right-0 text-center style-tile-name is-copied success">已复制</div>
    <div v-else-if="hintText" class="pr-1 style-tile-name bg-canvas">{{hintText}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onUnmounted, StyleValue} from 'vue';

const props = defineProps<{
  name: string;
  title?: string | boolean;
  tileClass?: string;
  noNameClass?: boolean;
  tileStyle?: StyleValue;
  labelClass?: string;
  alias?: string;
  hint?: string | false;
  label?: string | boolean;
  noHover?: boolean;
  copiedClass?: string;
}>();

const copied = ref(false);
const tipTimer = ref(0);

const titleText = computed(() => {
  const {title} = props;
  if (!title) {
    return '';
  }
  return title === true ? props.name : title;
});

const labelText = computed(() => {
  const {label} = props;
  if (!label) {
    return '';
  }
  return label === true ? props.name : label;
});

const hintText = computed(() => {
  const {hint} = props;
  if (hint === false) {
    return '';
  }
  if (typeof hint === 'string') {
    return hint;
  }
  return `${props.name}${props.alias ? ` 别名: ${props.alias}` : ''}`;
});

const onClick = () => {
  if (!props.name.length) {
    return;
  }
  navigator.clipboard.writeText(props.name);
  copied.value = true;
  tipTimer.value = window.setTimeout(() => {
    copied.value = false;
    tipTimer.value = 0;
  }, 2000);
};

onUnmounted(() => {
  if (tipTimer.value) {
    clearTimeout(tipTimer.value);
  }
});
</script>

<style>
.style-tile-item {
  @apply -relative;
}
.style-tile {
  @apply -flex -items-center -justify-center -transition-[transform,box-shadow] -scale-100 -duration-300;
}
.style-tile-item.cursor-pointer > .style-tile:hover {
  @apply -scale-105 -shadow-lg;
}
.style-tile-label {
  @apply -text-sm -mt-1 -opacity-80;
}
.style-tile-name {
  @apply -absolute -left-0 -mt-0.5 -top-full -opacity-0 -font-mono -text-xs -bg-opacity-50 -backdrop-blur -whitespace-nowrap -rounded -scale-75 -transition-all -z-10 -p-0.5;
}
.style-tile-label + .style-tile-name {
  @apply --mt-4;
}
.style-tile-item:hover > .style-tile-name {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
