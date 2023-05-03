<template>
  <span ref="ele">{{value}}</span>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';

const props = defineProps<{
  prop: string,
  placeholder?: string,
  target?: string,
}>();

const value = ref(props.placeholder ?? props.prop);
const ele = ref();

onMounted(() => {
  const updateValue = () => {
    let target: HTMLElement | null = null;
    if (props.target) {
      target = document.querySelector(props.target);
    } else {
      target = ele.value;
    }
    if (!target) {
      return;
    }
    const style = getComputedStyle(target);
    value.value = style.getPropertyValue(props.prop);
  };

  updateValue();
  setTimeout(updateValue, 500);
});
</script>
