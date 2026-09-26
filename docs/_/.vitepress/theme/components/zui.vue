<template>
  <div ref="ele" :class="className" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';

const props = defineProps<{
  className?: string,
  style?: Record<string, string | number>,
  /**
   * @deprecated 请使用 use 代替
   */
  create?: string,
  options?: Record<string, unknown>,
  use?: string,
  ready?: (instance: unknown) => void,
  beforeCreate?: (instance: unknown) => void,
}>();

const ele = ref();
let disposed = false;
let instance: {destroy?: () => void} | undefined;

onMounted(() => {
  onZUIReady(() => {
    if (disposed || !ele.value) {
      return;
    }
    props.beforeCreate?.call(this);
    if (disposed) {
      return;
    }
    instance = zui.create(props.use || props.create, ele.value, props.options);
    props.ready?.call(this, instance);
  });
});

onBeforeUnmount(() => {
  disposed = true;
  instance?.destroy?.();
  instance = undefined;
});
</script>
