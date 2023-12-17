<template>
  <span ref="ele">{{display}}</span>
</template>

<script setup lang="ts">
import {onMounted, ref, computed} from 'vue';

const props = defineProps<{
  prop: string,
  placeholder?: string,
  target?: string,
  format?: string | ((value: string) => string),
}>();

const value = ref(props.placeholder ?? props.prop);
const ele = ref();
const display = computed(() => {
  const {format} = props;
  if (typeof format === 'function') {
    return format(value.value);
  }
  if (typeof format === 'string') {
    return format.replaceAll('{0}', value.value);
  }
  return value.value;
});

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
