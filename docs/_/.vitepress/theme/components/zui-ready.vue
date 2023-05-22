<template>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';

const props = defineProps<{fn: () => void}>();

onMounted(() => {
  if (import.meta.env.SSR) {
    return;
  }
  onZUIReady(props.fn);
});
</script>

<script lang="ts">
let timer = 0;
const callbacks: (() => void)[] = [];

function onZUIReady(callback?: () => void) {
    if (import.meta.env.SSR) {
      return;
    }
    if (timer) {
        cancelAnimationFrame(timer);
        timer = 0;
    }
    if (callback) {
        callbacks.push(callback);
    }

    if (typeof window === 'object' && 'zui' in window) {
        callbacks.forEach(x => x());
        callbacks.length = 0;
        return;
    }

    timer = requestAnimationFrame(() => onZUIReady());
}

if (!import.meta.env.SSR) {
    Object.assign(window, {onZUIReady});
}
</script>
