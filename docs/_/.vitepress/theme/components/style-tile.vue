<template>
  <div class="style-tile-item" @click="onColorClick">
    <div class="style-tile" :class="[name, tileClass, copied ? ' ring-4 ring-opacity-50' : '']">
      {{ title === true ? name : (title ?? '') }}
      <slot />
    </div>
    <div v-if="copied" class="right-0 text-center style-tile-name is-copied success">已复制</div>
    <div v-else class="pr-1 style-tile-name bg-canvas">{{hint ?? `${name}${alias ? ` 别名: ${alias}` : ''}`}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref, onUnmounted} from 'vue';

const props = defineProps<{
  name: string;
  title?: string | boolean;
  tileClass?: string;
  alias?: string;
  hint?: string;
}>();

const copied = ref(false);
const tipTimer = ref(0);

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
.style-tile-name {
  @apply -absolute -left-0 -mt-0.5 -top-full -opacity-0 -font-mono -text-xs -bg-opacity-50 -backdrop-blur -whitespace-nowrap -rounded -scale-75 -transition-all -z-10 -p-0.5;
}
.style-tile-item:hover > .style-tile-name {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
