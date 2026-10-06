<script setup lang="ts">
import {ref, watch} from 'vue';

const props = defineProps<{name: string; label: string; variable: string; value: string}>();
const emit = defineEmits<{change: [value: string]}>();
const draft = ref(props.value);
const invalid = ref(false);
watch(() => props.value, (value) => { draft.value = value; invalid.value = false; });

function input(value: string, commit = false) {
    draft.value = value;
    const hex = value.trim();
    invalid.value = !/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(hex);
    // A three-digit prefix may still be the start of a six-digit color.
    if (!invalid.value && (hex.length === 7 || commit)) {
        emit('change', (hex.length === 4 ? `#${[...hex.slice(1)].map(c => c + c).join('')}` : hex).toLowerCase());
    }
}
</script>

<template>
    <div class="theme-color-field">
        <label :for="`theme-${name}`">{{label}}</label>
        <div class="theme-color-input">
            <input type="color" :value="value" :aria-label="`${label}拾色器`" @input="input(($event.target as HTMLInputElement).value)">
            <input :id="`theme-${name}`" :data-testid="`theme-color-${name}`" :value="draft" type="text" spellcheck="false" autocomplete="off" :aria-invalid="invalid" :aria-describedby="`theme-${name}-help`" @input="input(($event.target as HTMLInputElement).value)" @change="input(($event.target as HTMLInputElement).value, true)">
        </div>
        <span :id="`theme-${name}-help`" class="theme-field-help" :class="{'theme-field-error': invalid}">{{invalid ? '请输入 #RGB 或 #RRGGBB 颜色' : variable}}</span>
    </div>
</template>
