<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {withBase} from 'vitepress';
import zuiData from '../zui-data';

const installs = [
    {id: 'download', text: '下载构建'},
    {id: 'cdn', text: 'CDN'},
    {id: 'npm', text: 'npm'},
];
const activeInstall = ref(installs[0].id);
const tabsReady = ref(false);
const installTabs = ref<HTMLButtonElement[]>([]);

function onInstallKeydown(event: KeyboardEvent, index: number) {
    const last = installs.length - 1;
    const next = {ArrowLeft: index ? index - 1 : last, ArrowRight: index === last ? 0 : index + 1, Home: 0, End: last}[event.key];
    if (next === undefined) return;
    event.preventDefault();
    activeInstall.value = installs[next].id;
    installTabs.value[next]?.focus();
}

onMounted(() => {
    tabsReady.value = true;
});
</script>

<template>
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
                <slot :name="install.id" />
                <a v-if="install.id === 'download'" class="btn size-sm home-download" :href="withBase(`/zui-${zuiData.version}.zip`)" download><span class="icon i-download" aria-hidden="true"></span>下载 zui-{{ zuiData.version }}.zip</a>
            </div>
        </div>
    </div>
</template>
