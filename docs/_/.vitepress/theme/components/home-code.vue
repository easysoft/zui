<script setup lang="ts">
import {ref} from 'vue';
import {useCopyFeedback} from '../copy-feedback';

const props = defineProps<{label: string}>();
const body = ref<HTMLElement>();
const {copied, copying, message, copy} = useCopyFeedback();

function copyCode() {
    const code = body.value?.querySelector('code')?.textContent?.trimEnd();
    if (code) void copy(code, `已复制${props.label}`);
}
</script>

<template>
    <div class="home-code">
        <div class="home-code-head">
            <span class="home-code-label">{{ label }}</span>
            <span class="home-code-status" role="status" aria-live="polite">{{ message }}</span>
            <button type="button" class="home-code-copy" :class="{'is-copied': copied}" :aria-label="`复制${label}`" :aria-busy="copying" @click="copyCode">
                <span class="icon" :class="copied ? 'i-check' : 'i-copy'" aria-hidden="true"></span>
            </button>
        </div>
        <div ref="body" class="home-code-body"><slot /></div>
    </div>
</template>
