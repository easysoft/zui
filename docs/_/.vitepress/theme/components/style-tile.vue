<template>
  <component :is="name ? 'button' : 'div'" :type="name ? 'button' : undefined" :aria-label="name ? `复制类名 ${name}` : undefined" :class="['style-tile-item', name ? 'docs-copy-control' : '', (name && !noHover) ? 'cursor-pointer' : '', noHover ? 'no-hover' : '', copied ? 'is-copied' : '']" @click="onClick">
    <span class="style-tile" :class="[tileClass, noNameClass ? '' : name,  copied ? (copiedClass ?? 'ring-4 ring-opacity-50') : '']" :style="tileStyle">
      {{ titleText }}
      <slot />
    </span>
    <span v-if="labelText" class="style-tile-label" :class="labelClass">{{ labelText }}</span>
    <span role="status" aria-live="polite" aria-atomic="true" class="right-0 text-center style-tile-name success">{{copied ? '已复制' : ''}}</span>
    <span v-if="!copied && hintText" class="pr-1 style-tile-name bg-canvas" aria-hidden="true">{{hintText}}</span>
  </component>
</template>

<script setup lang="ts">
import {ref, computed, onUnmounted, StyleValue} from 'vue';

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
.style-tile-item:is(:hover, :focus-visible, .is-copied) > .style-tile-name {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
