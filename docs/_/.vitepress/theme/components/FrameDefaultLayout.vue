<script setup>
import { ref, onMounted } from 'vue'
// Special api to mount the app
import { createApp } from 'whyframe:app'

const el = ref()

onMounted(() => {
  // Mount the app to the ref
  createApp(el.value)
})
</script>

<template>
  <div ref="el" style="color:green"></div>
</template>
