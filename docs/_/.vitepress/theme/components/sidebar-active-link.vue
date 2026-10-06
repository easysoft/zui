<script setup lang="ts">
import {nextTick, onMounted, onUnmounted, ref, watch} from 'vue';
import {useRoute} from 'vitepress';

const anchor = ref<HTMLElement>();
const route = useRoute();
let sidebar: HTMLElement | null = null;
let observer: MutationObserver | undefined;

async function revealActiveLink() {
    // Wait for VitePress to expand the group containing the new page.
    await nextTick();
    const item = sidebar?.querySelector<HTMLElement>('.VPSidebarItem.is-active > .item');
    if (!sidebar || !item) {
        return;
    }
    const bounds = sidebar.getBoundingClientRect();
    if (bounds.right <= 0 && !sidebar.classList.contains('open')) {
        return;
    }
    const active = item.getBoundingClientRect();
    const top = bounds.top + parseFloat(getComputedStyle(sidebar).paddingTop);
    // Scroll only the sidebar; leave the document and keyboard focus untouched.
    if (active.top < top) {
        sidebar.scrollTop += active.top - top;
    } else if (active.bottom > bounds.bottom) {
        sidebar.scrollTop += active.bottom - bounds.bottom;
    }
}

onMounted(() => {
    sidebar = anchor.value?.closest<HTMLElement>('.VPSidebar') || null;
    if (sidebar) {
        observer = new MutationObserver(() => {
            if (sidebar?.classList.contains('open')) {
                void revealActiveLink();
            }
        });
        observer.observe(sidebar, {attributes: true, attributeFilter: ['class']});
        void revealActiveLink();
    }
});
watch(() => route.path, revealActiveLink, {flush: 'post'});
onUnmounted(() => observer?.disconnect());
</script>

<template>
    <span ref="anchor" hidden />
</template>
