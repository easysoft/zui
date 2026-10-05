<template>
  <button type="button" :aria-label="`复制 ${code}`" :aria-disabled="copying" :aria-busy="copying" class="docs-copy-control copy-code-span relative cursor-pointer" :class="{'has-copy-status': message}" @click="copy(code, copyTip)">
    <slot />
    <span role="status" aria-live="polite" aria-atomic="true" class="text-center copy-code-span-tip px-2" :class="copied ? 'success' : 'bg-canvas'">{{message}}</span>
    <span v-if="!message" class="pr-1 copy-code-span-tip bg-canvas" aria-hidden="true">{{tip ?? code}}</span>
  </button>
</template>

<script setup lang="ts">
import {useCopyFeedback} from '../copy-feedback';

defineProps<{
  code: string;
  tip?: string;
  copyTip?: string;
}>();

const {copied, copying, message, copy} = useCopyFeedback();
</script>

<style>
.copy-code-span-tip {
  @apply -absolute -shadow-md -left-0 -mt-0.5 -top-full -opacity-0 -font-mono -text-xs -bg-opacity-50 -backdrop-blur -whitespace-nowrap -rounded -scale-75 -transition-all -z-10 -p-0.5;
}
.copy-code-span:is(:hover, :focus-visible, .has-copy-status) > .copy-code-span-tip {
  @apply -scale-100 -opacity-100 -delay-300;
}
</style>
