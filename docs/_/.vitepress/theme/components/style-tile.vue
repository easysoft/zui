<template>
  <div class="style-tile-item" @click="onColorClick">
    <div class="style-tile" :class="[name, tileClass, copied ? 'ring-4 ring-opacity-50' : '']">
      {{ titleText }}
      <slot />
    </div>
    <div v-if="labelText" class="style-tile-label" :class="labelClass">{{ labelText }}</div>
    <div v-if="copied" class="right-0 text-center style-tile-name is-copied success">已复制</div>
    <div v-else-if="hintText" class="pr-1 style-tile-name bg-canvas">{{hintText}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onUnmounted} from 'vue';

const props = defineProps<{
  name: string;
  title?: string | boolean;
  tileClass?: string;
  labelClass?: string;
  alias?: string;
  hint?: string | false;
  label?: string | boolean;
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

const onColorClick = () => {
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
  @apply -relative -cursor-pointer;
}
.style-tile {
  @apply -flex -items-center -justify-center -transition-[transform,box-shadow] -scale-100 -duration-300;
}
.style-tile-item:hover > .style-tile {
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
