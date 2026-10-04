<template>
  <span ref="ele">{{display}}</span>
</template>

<script setup lang="ts">
import {onMounted, onBeforeUnmount, nextTick, ref, computed} from 'vue';

const props = defineProps<{
  prop: string,
  placeholder?: string,
  target?: string,
  format?: string | ((value: string) => string),
  fake?: string,
}>();

const value = ref<string>();
const ele = ref<HTMLElement>();
const display = computed(() => {
  if (value.value === undefined) {
    return props.placeholder ?? '…';
  }
  const {format} = props;
  if (typeof format === 'function') {
    return format(value.value);
  }
  if (typeof format === 'string') {
    return format.replaceAll('{0}', value.value);
  }
  return value.value;
});

let stylesheet: HTMLLinkElement | null = null;
let disposed = false;

function clearListeners() {
  stylesheet?.removeEventListener('load', updateValue);
  stylesheet?.removeEventListener('error', clearListeners);
}

async function updateValue() {
  clearListeners();
  await nextTick();
  if (disposed) {
    return;
  }
  let target: HTMLElement | null = null;
  if (props.fake) {
    target = document.createElement('div');
    target.setAttribute('class', `fixed bottom-0 right-0 opacity-0 pointer-events-none ${props.fake}`);
    document.body.appendChild(target);
  } else if (props.target) {
    target = document.querySelector(props.target);
  } else {
    target = ele.value ?? null;
  }
  if (!target) {
    return;
  }
  try {
    const computedValue = getComputedStyle(target).getPropertyValue(props.prop).trim();
    if (computedValue) {
      value.value = computedValue;
    }
  } finally {
    if (props.fake) {
      target.remove();
    }
  }
}

onMounted(() => {
  stylesheet = document.querySelector<HTMLLinkElement>('#zui-stylesheet');
  if (!stylesheet) {
    return;
  }
  if (stylesheet.sheet) {
    void updateValue();
  } else {
    stylesheet.addEventListener('load', updateValue);
    stylesheet.addEventListener('error', clearListeners);
  }
});

onBeforeUnmount(() => {
  disposed = true;
  clearListeners();
});
</script>
