<script setup lang="ts">
import {computed, reactive, ref} from 'vue';
import HomeCode from './home-code.vue';
import {tokenizeHtml} from '../home-html-tokens';

type GroupId = 'layout' | 'radius' | 'shadow' | 'tone';

const groups: {id: GroupId; label: string; options: string[]}[] = [
    {id: 'layout', label: '排列', options: ['row', 'col']},
    {id: 'radius', label: '圆角', options: ['rounded', 'rounded-2xl']},
    {id: 'shadow', label: '阴影', options: ['shadow-sm', 'shadow-xl']},
    {id: 'tone', label: '配色', options: ['primary', 'success', 'special']},
];
const selected = reactive<Record<GroupId, string>>({layout: 'row', radius: 'rounded-2xl', shadow: 'shadow-xl', tone: 'primary'});
const fresh = ref<string>();
const MARK = '~';

const code = computed(() => {
    const {layout, radius, shadow, tone} = Object.fromEntries(Object.entries(selected).map(([group, value]) => [group, `${MARK}${value}`]));
    return [
        `<div class="${layout} items-center gap-4 p-5 canvas ${radius} ${shadow}">`,
        `  <span class="avatar size-lg rounded-full ${tone}">林</span>`,
        '  <div class="flex-auto">',
        '    <div class="row items-center gap-2">',
        '      <strong class="text-lg">林悦</strong>',
        '      <span class="label success-pale">在线</span>',
        '    </div>',
        '    <div class="text-gray mt-1">产品设计师 · 杭州</div>',
        '  </div>',
        `  <button class="btn ${tone}" type="button">关注</button>`,
        '</div>',
    ];
});
const lines = computed(() => code.value.map(line => tokenizeHtml(line).map((token) => {
    if (!token.word?.startsWith(MARK)) return token;
    const word = token.word.slice(MARK.length);
    return {...token, text: word, word, dynamic: true};
})));
const html = computed(() => code.value.join('\n').replaceAll(MARK, ''));

function choose(group: GroupId, option: string) {
    if (selected[group] === option) return;
    selected[group] = option;
    fresh.value = option;
}
</script>

<template>
    <div class="home-stage-code">
        <HomeCode label="HTML">
            <div class="language-html vp-adaptive-theme"><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><template v-for="(line, index) in lines" :key="index"><span class="line"><span v-for="(token, tokenIndex) in line" :key="token.dynamic ? token.word : tokenIndex" :class="token.dynamic ? {'home-token': true, 'is-fresh': token.word === fresh} : undefined" :style="token.style">{{ token.text }}</span></span>{{ index < lines.length - 1 ? '\n' : '' }}</template></code></pre></div>
        </HomeCode>
    </div>
    <div class="home-stage-preview">
        <div class="home-playground-controls" role="group" aria-label="点选工具类">
            <div v-for="group in groups" :key="group.id" class="home-playground-group" role="group" :aria-labelledby="`home-playground-${group.id}`">
                <span :id="`home-playground-${group.id}`">{{ group.label }}</span>
                <button v-for="option in group.options" :key="option" type="button" class="home-chip" :class="{[`home-chip-${option}`]: group.id === 'tone'}"
                    :aria-pressed="selected[group.id] === option" @click="choose(group.id, option)">{{ option }}</button>
            </div>
        </div>
        <div class="home-stage-canvas">
            <div class="home-playground-result" v-html="html"></div>
        </div>
    </div>
</template>
