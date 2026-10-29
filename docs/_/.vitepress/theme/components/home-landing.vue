<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import {withBase} from 'vitepress';
import HomeFeatureTile from './home-feature-tile.vue';
import '../home-landing.css';

const features = [
    {id: 'compose', category: 'CSS 组合', title: '从基础样式，组合你的界面', description: '布局、间距与外观，用工具类搭配常用控件。', href: '/utilities/'},
    {id: 'interact', category: '交互组件', title: '为常用操作，补齐交互', description: '菜单、弹窗与反馈，让操作有清楚的回应。', href: '/lib/components/'},
    {id: 'table', category: '数据表格', title: '让数据展示，也能交互', description: '排序、选择与插件，承接更复杂的数据界面。', href: '/lib/components/dtable/'},
    {id: 'theme', category: '主题定制', title: '同一套组件，呈现你的风格', description: '颜色、圆角与深浅外观，在一套主题中保持一致。', href: '/guide/config/theme.html'},
    {id: 'build', category: '按需构建', title: '选择需要的能力，再打包', description: '选择模块，生成项目所需的样式与脚本。', href: '/guide/customize/build.html'},
];
const words = [['基础样式，', '自由', '组合。'], ['复杂交互，', '也有', '现成', '起点。']];
const wordCount = words.flat().length;
const tiles = ref<InstanceType<typeof HomeFeatureTile>[]>([]);
const tagline = ref<HTMLElement>();
const revealed = ref(wordCount);
const revealing = ref(false);
const reducedMotion = ref(false);
let media: MediaQueryList | undefined;
let tileObserver: IntersectionObserver | undefined;
let taglineObserver: IntersectionObserver | undefined;
let frame = 0;
let glowFrame = 0;
let glowX = 0;
let glowY = 0;
let glowActive = false;

function clearGlow() {
    cancelAnimationFrame(glowFrame);
    glowFrame = 0;
    if (!glowActive) return;
    glowActive = false;
    tiles.value.forEach(tile => tile.element?.style.removeProperty('--home-glow-visible'));
}

function onFeaturePointerMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || reducedMotion.value) return;
    glowX = event.clientX;
    glowY = event.clientY;
    glowActive = true;
    if (glowFrame) return;
    glowFrame = requestAnimationFrame(() => {
        glowFrame = 0;
        const positions = tiles.value.map(tile => ({element: tile.element, rect: tile.element?.getBoundingClientRect()}));
        for (const {element, rect} of positions) {
            if (!element || !rect) continue;
            element.style.setProperty('--home-glow-x', `${glowX - rect.left}px`);
            element.style.setProperty('--home-glow-y', `${glowY - rect.top}px`);
            element.style.setProperty('--home-glow-visible', '1');
        }
    });
}

function stopScroll() {
    window.removeEventListener('scroll', requestReveal);
    window.removeEventListener('resize', requestReveal);
    cancelAnimationFrame(frame);
    frame = 0;
}

function finishReveal() {
    revealed.value = wordCount;
    revealing.value = false;
    stopScroll();
    taglineObserver?.disconnect();
}

function updateReveal() {
    frame = 0;
    if (!tagline.value) return;
    const start = window.scrollY + tagline.value.getBoundingClientRect().top - window.innerHeight * 0.85;
    // The final words must also reveal on a short page at its maximum scroll position.
    const end = Math.min(start + window.innerHeight * 0.35, document.documentElement.scrollHeight - window.innerHeight);
    const progress = (window.scrollY - start) / Math.max(1, end - start);
    revealed.value = Math.max(revealed.value, Math.min(wordCount, Math.floor(progress * wordCount)));
    if (revealed.value === wordCount) finishReveal();
}

function requestReveal() {
    if (!frame) frame = requestAnimationFrame(updateReveal);
}

function onPreferenceChange() {
    reducedMotion.value = media?.matches ?? true;
    if (reducedMotion.value) {
        finishReveal();
        clearGlow();
    }
}

function onVisibilityChange() {
    if (document.hidden) {
        tiles.value.forEach(tile => tile.settle());
        clearGlow();
    }
}

onMounted(() => {
    media = window.matchMedia('(prefers-reduced-motion: reduce)');
    onPreferenceChange();
    media.addEventListener('change', onPreferenceChange);
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('scroll', clearGlow, {passive: true});
    if (!('IntersectionObserver' in window)) return;

    tileObserver = new IntersectionObserver((entries) => {
        let batchIndex = 0;
        for (const tile of tiles.value) {
            const entry = entries.find(item => item.target === tile.element);
            if (!entry) continue;
            if (entry.intersectionRatio >= 0.7) tile.enter(200 + batchIndex++ * 250);
            else if (!entry.isIntersecting) tile.settle();
        }
    }, {threshold: [0, 0.7]});
    tiles.value.forEach((tile) => {
        if (tile.element) tileObserver!.observe(tile.element);
    });

    if (reducedMotion.value || !tagline.value) return;
    revealed.value = 0;
    revealing.value = true;
    taglineObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            window.addEventListener('scroll', requestReveal, {passive: true});
            window.addEventListener('resize', requestReveal);
            requestReveal();
        } else {
            stopScroll();
            if (entry.boundingClientRect.bottom < 0) finishReveal();
        }
    });
    taglineObserver.observe(tagline.value);
});

onUnmounted(() => {
    tileObserver?.disconnect();
    taglineObserver?.disconnect();
    media?.removeEventListener('change', onPreferenceChange);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('scroll', clearGlow);
    clearGlow();
    stopScroll();
});
</script>

<template>
    <div class="home-landing">
        <svg class="home-brand-backdrop" viewBox="0 0 800 900" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
            <path d="M630-80h180L124 900H-56Z" fill="currentColor" opacity=".045" />
            <path d="M810-80h160L284 900H124Z" fill="currentColor" opacity=".085" />
            <path d="M970-80h210L494 900H284Z" fill="currentColor" opacity=".15" />
            <path d="M1180-80h110L604 900H494Z" fill="currentColor" opacity=".035" />
            <path d="M810-80 124 900M970-80 284 900" fill="none" stroke="currentColor" stroke-opacity=".12" />
        </svg>
        <section class="home-hero" aria-labelledby="home-title">
            <h1 id="home-title"><span class="home-title-line">用熟悉的代码，</span><span class="home-title-line">搭建完整的界面。</span></h1>
            <p class="home-intro">ZUI 3 是可组合、可定制的前端开发框架。用 HTML、CSS 与 JavaScript，组合常用控件、交互和数据表格。</p>
            <a class="btn primary size-lg home-primary" :href="withBase('/guide/start/')">快速开始<span class="vpi-arrow-right" aria-hidden="true"></span></a>
            <p class="home-proof">MIT 开源<span aria-hidden="true">·</span>原生 DOM 调用<span aria-hidden="true">·</span>支持主题定制</p>
        </section>

        <section class="home-features" aria-label="ZUI 核心能力" @pointermove="onFeaturePointerMove" @pointerleave="clearGlow" @pointercancel="clearGlow">
            <HomeFeatureTile v-for="feature in features" :key="feature.id" ref="tiles" v-bind="feature" :reduced-motion="reducedMotion">
                <div v-if="feature.id === 'compose'" class="home-compose">
                    <div class="home-wire-window compose-window">
                        <div class="home-window-top"><i></i><i></i><i></i></div>
                        <div class="compose-layout">
                            <div class="compose-sidebar"><b></b><i v-for="n in 4" :key="n"></i></div>
                            <div class="compose-content">
                                <span class="home-wire-bar compose-heading"></span>
                                <span class="home-wire-bar compose-subheading"></span>
                                <div class="compose-fields"><i></i><i></i></div>
                                <div class="compose-footer"><span class="home-wire-bar"></span><b></b></div>
                            </div>
                        </div>
                    </div>
                    <div class="compose-palette"><i></i><i></i><i></i></div>
                </div>

                <div v-else-if="feature.id === 'interact'" class="home-interact">
                    <div class="interact-trigger"><span class="home-wire-bar"></span><i></i></div>
                    <div class="home-wire-window interact-menu"><div v-for="n in 3" :key="n"><i></i><span class="home-wire-bar"></span></div></div>
                    <div class="home-wire-window interact-result"><i class="home-wire-check"></i><span class="home-wire-bar"></span></div>
                    <svg class="home-cursor" width="24" height="32" viewBox="0 0 24 32" fill="none"><path d="M3 2v24l6-6 5 10 4-2-5-9h9L3 2Z" /></svg>
                </div>

                <div v-else-if="feature.id === 'table'" class="home-wire-window home-table">
                    <div class="home-table-head"><i></i><span class="home-wire-bar"></span><b></b></div>
                    <div class="home-table-body"><div v-for="n in 4" :key="n" class="home-table-row" :class="`home-table-row-${n}`"><i></i><span class="home-wire-bar"></span><b></b></div></div>
                    <div class="home-table-foot"><i></i><i></i><i></i></div>
                </div>

                <div v-else-if="feature.id === 'theme'" class="home-theme-scene">
                    <div class="home-wire-window home-theme-preview home-theme-before"><div class="home-window-top"><i></i><i></i><i></i></div><div class="home-theme-preview-body"><span class="home-wire-bar"></span><span class="home-wire-bar"></span><i></i><b></b></div></div>
                    <div class="home-wire-window home-theme-preview home-theme-after"><div class="home-window-top"><i></i><i></i><i></i></div><div class="home-theme-preview-body"><span class="home-wire-bar"></span><span class="home-wire-bar"></span><i></i><b></b></div></div>
                    <div class="home-theme-palette"><i></i><i></i><i><span class="home-wire-check"></span></i></div>
                </div>

                <div v-else class="home-build">
                    <div class="build-modules"><div v-for="n in 3" :key="n" :class="`build-module-${n}`"><i></i><span class="home-wire-bar"></span><b class="home-wire-check"></b></div></div>
                    <div class="build-connector"><i></i><i></i><i></i></div>
                    <div class="home-wire-window build-result"><span class="home-wire-bar"></span><span class="home-wire-bar"></span><span class="home-wire-bar"></span><i class="home-wire-check"></i></div>
                </div>
            </HomeFeatureTile>
        </section>

        <section ref="tagline" class="home-tagline" :data-revealing="revealing" aria-label="按需组合">
            <h2><span v-for="(line, lineIndex) in words" :key="lineIndex" class="home-tagline-line"><span v-for="(word, index) in line" :key="word" class="home-word" :class="{'is-revealed': index + (lineIndex ? words[0].length : 0) < revealed}">{{ word }}</span></span></h2>
        </section>

        <section class="home-start" aria-labelledby="home-start-title">
            <div><h2 id="home-start-title">从第一个示例开始</h2><ol><li>选择接入方式</li><li>加载资源</li><li>运行示例</li></ol></div>
            <a class="btn primary size-lg home-primary" :href="withBase('/guide/start/')">快速开始<span class="vpi-arrow-right" aria-hidden="true"></span></a>
        </section>
    </div>
</template>
