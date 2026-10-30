<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';
import {withBase} from 'vitepress';
import HomeFeatureTile from './home-feature-tile.vue';
import HomeBrandBackdrop from './home-brand-backdrop.vue';
import {createTheme, presets} from '../theme-model';
import {theme, updateTheme} from '../theme-state';
import {changeTheme} from '../theme-transition';
import zuiData from '../zui-data';
import '../home-landing.css';

const repository = 'https://github.com/easysoft/zui';
const resources = [
    {text: 'GitHub 源码', href: repository},
    {text: '更新日志', href: `${repository}/blob/main/CHANGELOG.md`},
    {text: '问题反馈', href: `${repository}/issues`},
    {text: 'MIT 许可', href: `${repository}/blob/main/LICENSE`},
];
const demoPresets = ['zui', 'forest', 'iris', 'sunset', 'ink', 'pop'].map(id => presets.find(preset => preset.id === id)!);
const installs = [
    {id: 'download', text: '下载构建'},
    {id: 'cdn', text: 'CDN'},
    {id: 'npm', text: 'npm'},
];
const activeInstall = ref(installs[0].id);
const tabsReady = ref(false);
const installTabs = ref<HTMLButtonElement[]>([]);

function showMessage() {
    (window as unknown as {zui?: {Messager: {show: (content: string) => void}}}).zui?.Messager.show('你好，ZUI！');
}

function applyPreset(id: string) {
    changeTheme(() => updateTheme(createTheme(id)));
}

function onInstallKeydown(event: KeyboardEvent, index: number) {
    const last = installs.length - 1;
    const next = {ArrowLeft: index ? index - 1 : last, ArrowRight: index === last ? 0 : index + 1, Home: 0, End: last}[event.key];
    if (next === undefined) return;
    event.preventDefault();
    activeInstall.value = installs[next].id;
    installTabs.value[next]?.focus();
}

const features = [
    {id: 'compose', category: 'CSS 组合', title: '用工具类拼出界面', description: '布局、间距和外观，都有现成的工具类。', href: '/utilities/'},
    {id: 'interact', category: '交互组件', title: '现成的交互组件', description: '菜单、弹窗和消息提示，让每次操作都有反馈。', href: '/lib/components/'},
    {id: 'table', category: '数据表格', title: '能排序、能选择的表格', description: '支持排序和行选择，还能用插件继续扩展。', href: '/lib/components/dtable/'},
    {id: 'theme', category: '主题定制', title: '一套组件，换成你的风格', description: '颜色、圆角和深浅色，一处调整全局生效。', href: '/guide/config/theme.html'},
    {id: 'build', category: '按需构建', title: '只打包用得到的部分', description: '挑选模块，生成项目需要的样式和脚本。', href: '/guide/customize/build.html'},
];
const words = [['基础样式，', '自由', '组合。'], ['复杂交互，', '拿来', '即用。']];
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
    tabsReady.value = true;
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
        <HomeBrandBackdrop />
        <section class="home-hero" aria-labelledby="home-title">
            <div class="home-hero-copy">
                <a class="home-release" :href="resources[1].href"><b>3.1.0</b>新增 JSON UI、表单生成器和虚拟列表<span class="vpi-arrow-right" aria-hidden="true"></span></a>
                <h1 id="home-title"><span class="home-title-line">回归 <span class="code text-primary bg-transparent">&lt;HTML&gt;</span></span><span class="home-title-line">声明即界面</span></h1>
                <p class="home-intro">无需编译，无需搭建脚手架。引入 ZUI，直接书写 HTML，就能组合布局、表单、数据表格与丰富的交互组件。</p>
                <div class="home-actions">
                    <a class="btn primary size-lg home-primary" :href="withBase('/guide/start/')"><span class="home-primary-sheen" aria-hidden="true"></span>快速开始<span class="vpi-arrow-right" aria-hidden="true"></span></a>
                    <a class="btn size-lg home-secondary" :href="withBase('/lib/components/')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false">
                            <rect x="3" y="3" width="7" height="7" rx="1.5" />
                            <rect x="14" y="3" width="7" height="7" rx="1.5" />
                            <rect x="3" y="14" width="7" height="7" rx="1.5" />
                            <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        </svg>
                        浏览组件
                    </a>
                    <a class="btn size-lg home-secondary" :href="repository" target="_blank" rel="noreferrer"><i class="icon icon-github" aria-hidden="true"></i>GitHub</a>
                </div>
            </div>
            <div class="home-demo rounded-lg">
                <slot name="demo-code" />
                <div class="home-demo-result" role="group" aria-labelledby="home-demo-label">
                    <span id="home-demo-label" class="home-demo-label">运行效果</span>
                    <button type="button" class="btn primary" @click="showMessage">显示消息</button>
                    <div class="home-demo-themes" role="group" aria-labelledby="home-demo-themes-label">
                        <span id="home-demo-themes-label">换个主题试试</span>
                        <div class="home-swatches">
                            <button v-for="preset in demoPresets" :key="preset.id" type="button" class="home-swatch" :style="{background: preset.settings.colors.primary}" :title="preset.name" :aria-label="`应用${preset.name}主题`" :aria-pressed="theme.preset === preset.id" @click="applyPreset(preset.id)"></button>
                        </div>
                        <a :href="withBase('/guide/config/theme.html')">全部主题</a>
                    </div>
                </div>
            </div>
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
                    <svg class="build-connector" viewBox="0 0 48 112" width="48" height="112" aria-hidden="true" focusable="false">
                        <path class="build-route" d="M0 16H12Q24 16 24 28V44Q24 56 36 56H48" />
                        <path class="build-route" d="M0 96H12Q24 96 24 84V68Q24 56 36 56H48" />
                        <path class="build-beam build-beam-1" pathLength="100" d="M0 16H12Q24 16 24 28V44Q24 56 36 56H48" />
                        <path class="build-beam build-beam-3" pathLength="100" d="M0 96H12Q24 96 24 84V68Q24 56 36 56H48" />
                    </svg>
                    <div class="home-wire-window build-result"><span class="home-wire-bar"></span><span class="home-wire-bar"></span><span class="home-wire-bar"></span><i class="home-wire-check"></i></div>
                </div>
            </HomeFeatureTile>
        </section>

        <section ref="tagline" class="home-tagline" :data-revealing="revealing" aria-label="按需组合">
            <h2><span v-for="(line, lineIndex) in words" :key="lineIndex" class="home-tagline-line"><span v-for="(word, index) in line" :key="word" class="home-word" :class="{'is-revealed': index + (lineIndex ? words[0].length : 0) < revealed}">{{ word }}</span></span></h2>
        </section>

        <section class="home-start" aria-labelledby="home-start-title">
            <div class="home-start-head">
                <div><h2 id="home-start-title">从第一个示例开始</h2><p>选一种方式引入 ZUI，再按快速上手运行示例。</p></div>
                <a class="btn primary size-lg home-primary" :href="withBase('/guide/start/')"><span class="home-primary-sheen" aria-hidden="true"></span>快速开始<span class="vpi-arrow-right" aria-hidden="true"></span></a>
            </div>
            <div class="home-install">
                <div v-if="tabsReady" class="home-install-tabs" role="tablist" aria-label="接入方式">
                    <button v-for="(install, index) in installs" :id="`home-install-tab-${install.id}`" :key="install.id" ref="installTabs" type="button" role="tab"
                        :aria-selected="activeInstall === install.id" :aria-controls="`home-install-${install.id}`" :tabindex="activeInstall === install.id ? 0 : -1"
                        @click="activeInstall = install.id" @keydown="onInstallKeydown($event, index)">{{ install.text }}</button>
                </div>
                <div class="home-install-panels" :class="{'is-ready': tabsReady}">
                    <div v-for="install in installs" :id="`home-install-${install.id}`" :key="install.id" class="home-install-panel"
                        :role="tabsReady ? 'tabpanel' : undefined" :aria-labelledby="tabsReady ? `home-install-tab-${install.id}` : undefined"
                        :aria-hidden="tabsReady && activeInstall !== install.id" :inert="tabsReady && activeInstall !== install.id">
                        <slot :name="`install-${install.id}`" />
                        <a v-if="install.id === 'download'" class="btn size-sm home-download" :href="withBase(`/zui-${zuiData.version}.zip`)" download><span class="icon i-download" aria-hidden="true"></span>下载 zui-{{ zuiData.version }}.zip</a>
                    </div>
                </div>
            </div>
            <ul class="home-resources">
                <li v-for="resource in resources" :key="resource.text"><a :href="resource.href" target="_blank" rel="noreferrer">{{ resource.text }}</a></li>
            </ul>
        </section>
    </div>
</template>
