---
layout: false
head:
  - - link
    - rel: stylesheet
      href: /zui.css
  - - script
    - src: /zui.umd.cjs
---

<script setup>
import { ref, onMounted } from 'vue'
import { createApp } from 'whyframe:app'
import { trackColorScheme } from './utils'

const el = ref();

onMounted(() => {
  trackColorScheme();
  createApp(el.value);
});
</script>

<!-- empty file to keep vitepress happy. see FrameDefaultLayout.vue -->
<div id="vp-app" ref="el"></div>

<style scoped>
body {
  min-height: initial;
}
#vp-app {
}
</style>
