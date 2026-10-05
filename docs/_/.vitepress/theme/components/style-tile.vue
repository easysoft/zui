<template>
  <component :is="name ? 'button' : 'div'" :type="name ? 'button' : undefined" :aria-label="name ? `复制类名 ${name}` : undefined" :aria-disabled="name ? copying : undefined" :aria-busy="name ? copying : undefined" :class="['style-tile-item', name ? 'docs-copy-control' : '', (name && !noHover) ? 'cursor-pointer' : '', noHover ? 'no-hover' : '', message ? 'has-copy-status' : '']" @click="name && copy(name)">
    <span class="style-tile" :class="[tileClass, noNameClass ? '' : name,  copied ? (copiedClass ?? 'ring-4 ring-opacity-50') : '']" :style="tileStyle">
      {{ titleText }}
      <slot />
    </span>
    <span v-if="labelText" class="style-tile-label" :class="labelClass">{{ labelText }}</span>
    <span role="status" aria-live="polite" aria-atomic="true" class="right-0 text-center style-tile-name" :class="copied ? 'success' : 'bg-canvas'">{{message}}</span>
    <span v-if="!message && hintText" class="pr-1 style-tile-name bg-canvas" aria-hidden="true">{{hintText}}</span>
  </component>
</template>

<script setup lang="ts">
import {computed, StyleValue} from 'vue';
import {useCopyFeedback} from '../copy-feedback';

const props = defineProps<{
  name: string;
  title?: string | boolean;
  tileClass?: string | string[];
  noNameClass?: boolean;
  tileStyle?: StyleValue;
  labelClass?: string | string[];
  alias?: string;
  hint?: string | false;
  label?: string | boolean;
  noHover?: boolean;
  copiedClass?: string;
}>();

const {copied, copying, message, copy} = useCopyFeedback();

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

</script>

<style>
.style-tile-item {
  @apply -relative;
}
.style-tile {
  @apply -flex -items-center -justify-center -transition-[transform,box-shadow] -scale-100 -duration-300;
}
.style-tile-item.cursor-pointer:is(:hover, :focus-visible) > .style-tile {
  @apply -scale-105 -shadow-lg;
}
.style-tile-label {
  @apply -block -text-sm -mt-1 -opacity-80;
}
.style-tile-name {
  @apply -absolute -left-0 -mt-0.5 -top-full -opacity-0 -font-mono -text-xs -bg-opacity-50 -backdrop-blur -whitespace-nowrap -rounded -scale-75 -transition-all -z-10 -p-0.5;
}
.style-tile-label ~ .style-tile-name {
  @apply --mt-4;
}
.style-tile-item:is(:hover, :focus-visible, .has-copy-status) > .style-tile-name {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
