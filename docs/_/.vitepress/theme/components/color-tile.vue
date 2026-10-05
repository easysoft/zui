<template>
  <button type="button" :aria-label="`复制颜色变量 --${color}`" :aria-disabled="copying" :aria-busy="copying" class="docs-copy-control relative cursor-pointer semantic-color-item" :class="{'has-copy-status': message, 'w-full': !tileClass}" @click="copy(`--${color}`)">
    <span :class="`${tileClass || 'w-full h-8 rounded'}${copied ? ' ring-2 ring-success' : ''} semantic-color-tile`" :style="`background-color: ${colorVal ?? `var(--${color})`}`" />
    <slot />
    <span role="status" aria-live="polite" aria-atomic="true" class="right-0 text-center semantic-color-name" :class="copied ? 'success' : 'bg-canvas'">{{message}}</span>
    <span v-if="!message" class="pr-1 semantic-color-name bg-canvas" aria-hidden="true">--{{color}}</span>
  </button>
</template>

<script setup lang="ts">
import {useCopyFeedback} from '../copy-feedback';

defineProps<{
  color: string;
  colorVal?: string;
  tileClass?: string;
}>();

const {copied, copying, message, copy} = useCopyFeedback();
</script>

<style>
.semantic-color-tile {
  @apply -block -transition-[transform,box-shadow];
}
.semantic-color-item:is(:hover, :focus-visible) > .semantic-color-tile {
  @apply -scale-105 -shadow-md;
}
.semantic-color-name {
  @apply -absolute -left-0 -mt-0.5 -top-full -opacity-0 -font-mono -text-xs -bg-opacity-50 -backdrop-blur -whitespace-nowrap -rounded -scale-75 -transition-all -z-10 -p-0.5;
}
.semantic-color-item:is(:hover, :focus-visible, .has-copy-status) > .semantic-color-name {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
