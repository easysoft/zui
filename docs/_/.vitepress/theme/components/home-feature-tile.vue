<script setup lang="ts">
import {onUnmounted, ref, watch} from 'vue';
import {withBase} from 'vitepress';

const props = defineProps<{
    id: string;
    category: string;
    title: string;
    description: string;
    href: string;
    reducedMotion: boolean;
}>();
const element = ref<HTMLAnchorElement>();
const motion = ref('idle');
let played = false;
let timer: ReturnType<typeof setTimeout> | undefined;

function settle() {
    clearTimeout(timer);
    motion.value = played ? 'complete' : 'idle';
}

function start() {
    if (props.reducedMotion) {
        settle();
        return;
    }
    motion.value = 'playing';
    timer = setTimeout(settle, 3000);
}

function enter(delay: number) {
    if (played || props.reducedMotion) return;
    played = true;
    motion.value = 'queued';
    timer = setTimeout(start, delay);
}

function replay() {
    if (props.reducedMotion || !['idle', 'complete'].includes(motion.value)) return;
    if (!played) {
        enter(0);
        return;
    }
    motion.value = 'fading';
    timer = setTimeout(start, 200);
}

function onPointerEnter(event: PointerEvent) {
    if (event.pointerType === 'mouse') replay();
}

watch(() => props.reducedMotion, (value) => {
    if (value) settle();
});
onUnmounted(() => clearTimeout(timer));
defineExpose({element, enter, settle});
</script>

<template>
    <a ref="element" class="home-feature" :class="`home-feature-${id}`" :href="withBase(href)"
        :data-motion="motion" :aria-labelledby="`home-${id}-title`" :aria-describedby="`home-${id}-description`"
        @pointerenter="onPointerEnter" @focus="replay">
        <div class="home-feature-copy">
            <span class="home-category">{{ category }}<span class="vpi-arrow-right" aria-hidden="true"></span></span>
            <h2 :id="`home-${id}-title`">{{ title }}</h2>
            <p :id="`home-${id}-description`">{{ description }}</p>
        </div>
        <div class="home-art" aria-hidden="true">
            <div class="home-scene"><slot /></div>
        </div>
    </a>
</template>
