<script setup lang="ts">
import {ref} from 'vue';
import Example from './example.vue';

const appearance = ref('fill');
const disabled = ref(false);
const clicks = ref(0);
</script>

<template>
    <Example class="home-preview" :padding="0">
        <h2>组件直接上手</h2>
        <p>切换外观，试试按钮的交互状态。</p>
        <label class="home-preview-field" for="home-button-appearance">
            按钮外观
            <select id="home-button-appearance" v-model="appearance" class="form-control">
                <option value="fill">填充</option>
                <option value="outline">轮廓</option>
                <option value="light">轻量</option>
            </select>
        </label>
        <div class="switch">
            <input id="home-button-disabled" v-model="disabled" type="checkbox" role="switch">
            <label for="home-button-disabled">禁用按钮</label>
        </div>
        <div class="home-preview-result">
            <button class="btn" type="button" :data-appearance="appearance" :disabled="disabled" @click="clicks++">
                点击体验
            </button>
            <output aria-live="polite" aria-atomic="true">已点击 {{ clicks }} 次</output>
        </div>
    </Example>
</template>

<style scoped>
.home-preview {
    --checkbox-color: var(--vp-button-brand-bg);
    --btn-radius: 8px;
    --btn-height: 40px;
    --form-control-radius: 8px;
    display: grid;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    padding: 24px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background: var(--color-canvas);
    color: var(--color-fore);
    box-shadow: none;
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
}

.home-preview h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
}

.home-preview p {
    margin: -12px 0 0;
    color: var(--vp-c-text-2);
}

.home-preview-field {
    display: grid;
    gap: 8px;
}

.home-preview .form-control {
    height: 40px;
    color: var(--color-fore);
}

.home-preview-result {
    display: grid;
    justify-items: center;
    gap: 12px;
    padding: 24px 16px;
    border-radius: 8px;
    background: var(--color-surface);
}

.home-preview .btn {
    min-width: 128px;
    padding-inline: 20px;
    background: var(--vp-button-brand-bg);
    color: var(--vp-button-brand-text);
    box-shadow: none;
    border: 1px solid transparent;
}

.home-preview .btn:not(:disabled):hover {
    background: var(--vp-button-brand-hover-bg);
    color: var(--vp-button-brand-hover-text);
}

.home-preview .btn:not(:disabled):active {
    background: var(--vp-button-brand-active-bg);
    color: var(--vp-button-brand-active-text);
}

.home-preview .btn[data-appearance="outline"] {
    border-color: currentColor;
    background: var(--color-canvas);
    color: var(--color-fore);
}

.home-preview .btn[data-appearance="light"] {
    background: var(--color-canvas);
    color: var(--color-fore);
}

.home-preview .btn:focus-visible,
.home-preview .form-control:focus-visible,
.home-preview .switch > input:focus-visible + label::before {
    outline: 2px solid var(--color-fore);
    outline-offset: 3px;
}

.home-preview .btn:disabled {
    cursor: not-allowed;
    opacity: .6;
}
</style>
