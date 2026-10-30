<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {withBase} from 'vitepress';
import HomeInstall from './home-install.vue';
import HomeNavDemo from './home-nav-demo.vue';
import HomeClassPlayground from './home-class-playground.vue';
import HomeDeclareDemo from './home-declare-demo.vue';

defineProps<{resources: {text: string; href: string}[]}>();

const steps = [
    {id: 'start', index: '01', title: '上手引入', description: '一份 CSS，一份 JS'},
    {id: 'compose', index: '02', title: '样式组合', description: '基础样式，自由组合'},
    {id: 'declare', index: '03', title: '复杂组件声明', description: '复杂交互，拿来即用'},
];
const IDLE_DELAY = 15000;
const root = ref<HTMLElement>();
const tabs = ref<HTMLButtonElement[]>([]);
const active = ref(0);
const cycle = ref(0);
const ready = ref(false);
const reducedMotion = ref(true);
const userPaused = ref(false);
const holding = ref(false);
const hovering = ref(false);
const focusing = ref(false);
const inView = ref(false);
const pageVisible = ref(true);
const canAutoplay = computed(() => ready.value && !reducedMotion.value);
const playing = computed(() => canAutoplay.value && !userPaused.value && !holding.value && !hovering.value && !focusing.value && inView.value && pageVisible.value);
let media: MediaQueryList | undefined;
let observer: IntersectionObserver | undefined;
let holdTimer: ReturnType<typeof setTimeout> | undefined;

function hasOpenPopup() {
    return !!root.value?.querySelector('.home-stage-panel[aria-hidden="false"] :is(.pick.is-open, .pick.focus)');
}

function hold() {
    holding.value = true;
    cycle.value++;
    clearTimeout(holdTimer);
    const release = () => {
        if (hasOpenPopup()) holdTimer = setTimeout(release, IDLE_DELAY);
        else holding.value = false;
    };
    holdTimer = setTimeout(release, IDLE_DELAY);
}

function select(index: number) {
    active.value = index;
    hold();
}

function advance() {
    if (!playing.value) return;
    active.value = (active.value + 1) % steps.length;
    cycle.value++;
}

function onTabKeydown(event: KeyboardEvent, index: number) {
    const last = steps.length - 1;
    const next = {ArrowLeft: index ? index - 1 : last, ArrowRight: index === last ? 0 : index + 1, Home: 0, End: last}[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next);
    tabs.value[next]?.focus();
}

function onStageInteract(event: Event) {
    if (!(event.target as HTMLElement).closest('.home-showcase-toggle')) hold();
}

function onFocusIn(event: FocusEvent) {
    const target = event.target as HTMLElement;
    focusing.value = !target.closest('.home-showcase-toggle') && target.matches(':focus-visible');
}

function onFocusOut(event: FocusEvent) {
    if (!root.value?.contains(event.relatedTarget as Node | null)) focusing.value = false;
}

function togglePlay() {
    userPaused.value = !userPaused.value;
    holding.value = false;
    clearTimeout(holdTimer);
}

function onPreferenceChange() {
    reducedMotion.value = media?.matches ?? true;
}

function onVisibilityChange() {
    pageVisible.value = !document.hidden;
}

onMounted(() => {
    ready.value = true;
    media = window.matchMedia('(prefers-reduced-motion: reduce)');
    onPreferenceChange();
    media.addEventListener('change', onPreferenceChange);
    document.addEventListener('visibilitychange', onVisibilityChange);
    onVisibilityChange();
    if (!('IntersectionObserver' in window) || !root.value) return;
    observer = new IntersectionObserver(([entry]) => {
        inView.value = entry.isIntersecting;
    }, {threshold: 0.4});
    observer.observe(root.value);
});

onUnmounted(() => {
    clearTimeout(holdTimer);
    observer?.disconnect();
    media?.removeEventListener('change', onPreferenceChange);
    document.removeEventListener('visibilitychange', onVisibilityChange);
});
</script>

<template>
    <section ref="root" class="home-showcase" aria-labelledby="home-showcase-title" :data-autoplay="canAutoplay" :data-playing="playing" @focusin="onFocusIn" @focusout="onFocusOut">
        <div class="home-showcase-head">
            <div>
                <h2 id="home-showcase-title">从第一行代码到完整界面</h2>
                <p>引入资源、组合样式、声明组件，每段代码旁边都是真实的运行效果。</p>
            </div>
            <a class="btn primary size-lg home-primary" :href="withBase('/guide/start/')"><span class="home-primary-sheen" aria-hidden="true"></span>快速开始<span class="vpi-arrow-right" aria-hidden="true"></span></a>
        </div>

        <div class="home-stage-frame">
            <div v-if="ready" class="home-showcase-nav">
                <div class="home-showcase-tabs" role="tablist" aria-label="示例">
                    <button v-for="(step, index) in steps" :id="`home-showcase-tab-${step.id}`" :key="step.id" ref="tabs" type="button" role="tab" class="home-step"
                        :aria-selected="active === index" :aria-controls="`home-showcase-${step.id}`" :aria-labelledby="`home-step-title-${step.id}`" :aria-describedby="`home-step-description-${step.id}`" :tabindex="active === index ? 0 : -1"
                        @click="select(index)" @keydown="onTabKeydown($event, index)">
                        <span class="home-step-index" aria-hidden="true">{{ step.index }}</span>
                        <span class="home-step-text"><span :id="`home-step-title-${step.id}`" class="home-step-title">{{ step.title }}</span><span :id="`home-step-description-${step.id}`" class="home-step-description">{{ step.description }}</span></span>
                        <span v-if="canAutoplay && active === index" :key="cycle" class="home-step-progress" aria-hidden="true" @animationend="advance"></span>
                    </button>
                </div>
                <button v-if="canAutoplay" type="button" class="home-showcase-toggle" :aria-label="userPaused ? '继续自动切换示例' : '暂停自动切换示例'" :title="userPaused ? '继续自动切换' : '暂停自动切换'" @click="togglePlay">
                    <svg v-if="userPaused" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5 3.5v9l7.5-4.5z" fill="currentColor" /></svg>
                    <svg v-else width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M5 3.5v9M11 3.5v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
                </button>
            </div>

            <div class="home-stage" :class="{'is-ready': ready}" @pointerenter="hovering = $event.pointerType === 'mouse'" @pointerleave="hovering = false" @pointerdown="onStageInteract" @keydown="onStageInteract">
                <div v-for="(step, index) in steps" :id="`home-showcase-${step.id}`" :key="step.id" class="home-stage-panel" :class="`home-stage-${step.id}`"
                    :role="ready ? 'tabpanel' : undefined" :aria-labelledby="ready ? `home-showcase-tab-${step.id}` : undefined"
                    :aria-hidden="ready && active !== index" :inert="ready && active !== index">
                    <h3 v-if="!ready" class="home-stage-title"><span>{{ step.index }}</span>{{ step.title }} · {{ step.description }}</h3>
                    <template v-if="step.id === 'start'">
                        <div class="home-stage-code">
                            <HomeInstall>
                                <template #download><slot name="install-download" /></template>
                                <template #cdn><slot name="install-cdn" /></template>
                                <template #npm><slot name="install-npm" /></template>
                            </HomeInstall>
                        </div>
                        <div class="home-stage-preview">
                            <div class="home-stage-canvas"><HomeNavDemo /></div>
                        </div>
                    </template>
                    <HomeClassPlayground v-else-if="step.id === 'compose'" />
                    <HomeDeclareDemo v-else />
                </div>
            </div>
        </div>

        <ul class="home-resources">
            <li v-for="resource in resources" :key="resource.text"><a :href="resource.href" target="_blank" rel="noreferrer">{{ resource.text }}</a></li>
        </ul>
    </section>
</template>
