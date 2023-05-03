<template>
  <div class="relative cursor-pointer semantic-color-item" @click="onColorClick(`--${color}`)">
    <div :class="`${tileClass || 'w-full h-8 rounded'}${copied ? ' ring-2 ring-success' : ''} semantic-color-tile`" :style="`background-color: var(--${color})`" />
    <slot />
    <div v-if="copied" class="right-0 text-center semantic-color-name is-copied success">已复制</div>
    <div v-else class="pr-1 semantic-color-name bg-canvas">--{{color}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref, onUnmounted} from 'vue';

defineProps<{
  color: string;
  tileClass?: string;
}>();

const copied = ref(false);
const tipTimer = ref(0);

const onColorClick = (color: string) => {
  navigator.clipboard.writeText(color);
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
.semantic-color-tile {
  @apply -transition-[transform,shadow];
}
.semantic-color-item:hover > .semantic-color-tile {
  @apply -scale-105 -shadow-md;
}
.semantic-color-name {
  @apply -absolute -left-0 -mt-0.5 -top-full -opacity-0 -font-mono -text-xs -bg-opacity-50 -backdrop-blur -whitespace-nowrap -rounded -scale-75 -transition-all -z-10 -p-0.5;
}
.semantic-color-item:hover > .semantic-color-name {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
