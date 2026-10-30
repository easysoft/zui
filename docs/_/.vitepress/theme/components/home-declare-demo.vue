<script setup lang="ts">
import {nextTick, onMounted, ref} from 'vue';
import HomeCode from './home-code.vue';
import {tokenizeHtml} from '../home-html-tokens';

type ZUIWindow = Window & {
    zui?: {$: (element: HTMLElement) => {zuiInit: () => void}};
    onZUIReady?: (callback: () => void) => void;
};

const code = [
    '<form class="form">',
    '  <div class="form-group">',
    '    <label class="form-label">指派给</label>',
    '    <div zui-create="picker" data-placeholder="选择成员"',
    '      data-items=\'[{"text":"林悦","value":"ly"},{"text":"陈晨","value":"cc"}]\'></div>',
    '  </div>',
    '  <div class="form-group">',
    '    <label class="form-label">截止日期</label>',
    '    <div zui-create="datePicker" data-placeholder="选择日期"></div>',
    '  </div>',
    '  <div class="form-group">',
    '    <label class="form-label">标签颜色</label>',
    '    <div zui-create="colorPicker" data-default-value="#0ea5e9"></div>',
    '  </div>',
    '</form>',
];
const lines = code.map(tokenizeHtml);
const html = code.join('\n');
const host = ref<HTMLElement>();
const ready = ref(false);

onMounted(() => {
    const win = window as ZUIWindow;
    win.onZUIReady?.(async () => {
        ready.value = true;
        await nextTick();
        if (host.value) win.zui?.$(host.value).zuiInit();
    });
});
</script>

<template>
    <div class="home-stage-code">
        <HomeCode label="HTML">
            <div class="language-html vp-adaptive-theme"><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><template v-for="(line, index) in lines" :key="index"><span class="line"><span v-for="(token, tokenIndex) in line" :key="tokenIndex" :style="token.style">{{ token.text }}</span></span>{{ index < lines.length - 1 ? '\n' : '' }}</template></code></pre></div>
        </HomeCode>
    </div>
    <div class="home-stage-preview">
        <div class="home-stage-canvas">
            <div v-if="ready" ref="host" class="home-declare-result" v-html="html"></div>
            <div v-else class="home-declare-result home-declare-placeholder" aria-hidden="true"><i v-for="n in 3" :key="n"></i></div>
        </div>
    </div>
</template>
