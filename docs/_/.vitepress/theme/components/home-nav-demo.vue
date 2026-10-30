<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';

type NavInstance = {render: (options: {active: string}) => void; destroy: () => void};
type ZUIWindow = Window & {
    zui?: {Nav: new (element: HTMLElement, options: Record<string, unknown>) => NavInstance};
    onZUIReady?: (callback: () => void) => void;
};

const host = ref<HTMLElement>();
let nav: NavInstance | undefined;
let disposed = false;

onMounted(() => {
    const win = window as ZUIWindow;
    win.onZUIReady?.(() => {
        if (disposed || !host.value || !win.zui) return;
        nav = new win.zui.Nav(host.value, {
            type: 'pills',
            active: 'home',
            items: [
                {key: 'home', text: '首页'},
                {key: 'docs', text: '文档'},
                {key: 'blog', text: '博客'},
            ],
            onClickItem: ({item}: {item: {key: string}}) => nav?.render({active: item.key}),
        });
    });
});

onUnmounted(() => {
    disposed = true;
    nav?.destroy();
});
</script>

<template>
    <div class="home-browser">
        <div class="home-browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>index.html</span></div>
        <div class="home-browser-page">
            <nav ref="host" aria-label="示例导航"></nav>
            <div class="home-browser-content" aria-hidden="true"><b></b><span></span><span></span><span></span></div>
        </div>
    </div>
</template>
