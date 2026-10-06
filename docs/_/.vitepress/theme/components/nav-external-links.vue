<script setup lang="ts">
import {computed} from 'vue';
import {useData, type DefaultTheme} from 'vitepress';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';

const {theme} = useData<DefaultTheme.Config>();
const items = computed(() => theme.value.nav?.filter(item => 'link' in item && /^https?:\/\//.test(item.link)));
</script>

<template>
    <VPFlyout class="nav-external-links" label="更多导航选项" :items="items" />
</template>
