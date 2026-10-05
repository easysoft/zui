<template>
  <button type="button" :aria-label="`复制 ${code}`" :class="`docs-copy-control copy-code-span relative cursor-pointer${copied ? ' is-copied' : ''}`" @click="onClick">
    <slot />
    <span role="status" aria-live="polite" aria-atomic="true" class="text-center copy-code-span-tip success px-2">{{copied ? (props.copyTip ?? '已复制') : ''}}</span>
    <span v-if="!copied" class="pr-1 copy-code-span-tip bg-canvas" aria-hidden="true">{{tip ?? code}}</span>
  </button>
</template>

<script setup lang="ts">
import {ref, onUnmounted} from 'vue';

const props = defineProps<{
  code: string;
  tip?: string;
  copyTip?: string;
}>();

const copied = ref(false);
const tipTimer = ref(0);

const onClick = () => {
  navigator.clipboard.writeText(props.code);
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
.copy-code-span-tip {
  @apply -absolute -shadow-md -left-0 -mt-0.5 -top-full -opacity-0 -font-mono -text-xs -bg-opacity-50 -backdrop-blur -whitespace-nowrap -rounded -scale-75 -transition-all -z-10 -p-0.5;
}
.copy-code-span:is(:hover, :focus-visible, .is-copied) > .copy-code-span-tip {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
