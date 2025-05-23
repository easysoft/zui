<template>
  <div ref="ele" :class="className" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';

const props = defineProps<{
  className?: string,
  style?: Record<string, string | number>,
  create: string,
  options?: Record<string, unknown>,
  ready?: (instance: unknown) => void,
  beforeCreate?: (instance: unknown) => void,
}>();

const ele = ref();

onMounted(() => {
  onZUIReady(() => {
    props.beforeCreate?.call(this);
    const instance = zui.create(props.create, ele.value, props.options);
    props.ready?.call(this, instance);
  })
});
</script>
