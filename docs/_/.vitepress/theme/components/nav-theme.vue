<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref, watch} from 'vue';
import {useData, useRoute, withBase} from 'vitepress';
import {createTheme, presets} from '../theme-model';
import {theme, updateTheme} from '../theme-state';

const {isDark} = useData();
const route = useRoute();
const closeScreen = inject<() => void>('close-screen', () => {});
const open = ref(false);
const root = ref<HTMLElement>();
const trigger = ref<HTMLButtonElement>();

function toggle() {
    open.value = !open.value;
    if (open.value) {
        closeScreen();
        trigger.value?.focus();
    }
}

function onOutside(event: Event) {
    if (!root.value?.contains(event.target as Node)) {
        open.value = false;
    }
}

function onEscape(event: KeyboardEvent) {
    if (open.value) {
        event.stopPropagation();
        open.value = false;
        trigger.value?.focus();
    }
}

watch(() => route.path, () => {open.value = false;});
onMounted(() => {
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onOutside);
});
onUnmounted(() => {
    document.removeEventListener('pointerdown', onOutside);
    document.removeEventListener('focusin', onOutside);
});
</script>

<template>
    <div ref="root" class="nav-theme" @keydown.esc="onEscape">
        <button ref="trigger" type="button" class="nav-theme-trigger" aria-label="主题" :aria-expanded="open" aria-controls="nav-theme-panel" @click="toggle">
            <span class="nav-theme-swatch" aria-hidden="true"></span>
            <span>主题</span>
            <span class="vpi-chevron-down" aria-hidden="true"></span>
        </button>
        <section v-if="open" id="nav-theme-panel" class="nav-theme-panel" aria-label="主题设置">
            <div class="nav-theme-heading">
                <strong>选择主题</strong>
                <div class="theme-appearance" role="group" aria-label="主题外观">
                    <button type="button" :aria-pressed="!isDark" @click="isDark = false"><span aria-hidden="true">☀</span> 浅色</button>
                    <button type="button" :aria-pressed="isDark" @click="isDark = true"><span aria-hidden="true">☾</span> 深色</button>
                </div>
            </div>
            <div class="nav-theme-presets" role="group" aria-label="预设主题">
                <button v-for="preset in presets" :key="preset.id" type="button" :aria-label="`应用${preset.name}主题`" :aria-pressed="theme.preset === preset.id" @click="updateTheme(createTheme(preset.id))">
                    <span class="nav-theme-swatch" :style="{background: preset.settings.colors.primary}" aria-hidden="true"></span>
                    <span>{{preset.name}}</span>
                    <span class="nav-theme-check" aria-hidden="true">{{theme.preset === preset.id ? '✓' : ''}}</span>
                </button>
            </div>
            <a class="nav-theme-custom" :href="withBase('/guide/config/theme.html')" @click="open = false; closeScreen()">自定义主题<span aria-hidden="true">→</span></a>
        </section>
    </div>
</template>

<style scoped>
.nav-theme { position: relative; flex-shrink: 0; margin-left: 16px; font-size: 13px; color: var(--vp-c-text-1); }
.nav-theme button, .nav-theme a { cursor: pointer; }
.nav-theme :is(button, a):focus-visible { outline: 2px solid var(--vp-c-brand-1); outline-offset: 3px; }
.nav-theme button:active { filter: brightness(.96); }
.nav-theme-trigger { display: flex; align-items: center; gap: 7px; min-height: 36px; padding: 0 10px; border: 1px solid var(--vp-c-divider); border-radius: 6px; font-weight: 500; }
.nav-theme-trigger:hover, .nav-theme-trigger[aria-expanded="true"] { background: var(--vp-c-bg-soft); border-color: var(--vp-c-brand-1); }
.nav-theme-trigger .vpi-chevron-down { font-size: 12px; color: var(--vp-c-text-2); }
.nav-theme-swatch { flex-shrink: 0; width: 14px; height: 14px; border-radius: 50%; background: var(--color-primary-500); box-shadow: inset 0 0 0 1px #0001; }
.nav-theme-panel { position: absolute; z-index: 1; top: calc(100% + 12px); right: 0; width: 304px; max-height: calc(100vh - 96px); max-height: calc(100dvh - 96px); overflow-y: auto; padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-elv); box-shadow: var(--vp-shadow-3); white-space: normal; }
.nav-theme-heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 12px; }
.nav-theme-presets { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.nav-theme-presets button { display: flex; align-items: center; gap: 7px; min-height: 40px; padding: 6px 9px; border: 1px solid var(--vp-c-divider); border-radius: 6px; }
.nav-theme-presets button:hover { background: var(--vp-c-bg-soft); border-color: var(--vp-c-brand-1); }
.nav-theme-presets button[aria-pressed="true"] { border-color: var(--vp-c-brand-1); box-shadow: inset 0 0 0 1px var(--vp-c-brand-1); }
.nav-theme-check { width: 12px; margin-left: auto; font-weight: 600; }
.nav-theme-custom { display: flex; align-items: center; justify-content: space-between; min-height: 40px; margin-top: 16px; padding: 8px 10px; border-radius: 6px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); font-weight: 500; }
.nav-theme-custom:hover { color: var(--vp-c-brand-1); background: var(--vp-c-bg-alt); }
@media (max-width: 767px) {
  .nav-theme { margin-left: 0; }
  .nav-theme-trigger { min-height: 40px; }
  .nav-theme-panel { position: fixed; top: calc(var(--vp-nav-height) + 8px); right: 16px; width: min(304px, calc(100vw - 32px)); }
  .nav-theme-panel .theme-appearance button { min-height: 36px; }
}
</style>
