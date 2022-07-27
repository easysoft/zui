<template>
  <div class="example rounded border p-4" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from 'vue';

const props = defineProps<{background?: 'light-grid' | 'blue-circle'}>();

const style = computed(() => {
    if (props.background === 'light-grid') {
        return {
            'background-image': 'repeating-linear-gradient(135deg, rgba(189,189,189,0.1) 0px, rgba(189,189,189,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))'
        };
    }
    if (props.background === 'blue-circle') {
        return {
            'background-image': 'radial-gradient(circle at 31% 83%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 54% 21%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 8%,transparent 8%, transparent 92%),radial-gradient(circle at 68% 13%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 30% 64%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 51% 96%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 40% 16%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 75% 47%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 6%,transparent 6%, transparent 94%),radial-gradient(circle at 44% 44%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 10% 17%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 90% 72%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),radial-gradient(circle at 0% 45%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 4%,transparent 4%, transparent 96%),linear-gradient(90deg, rgb(18, 30, 254),rgb(34, 191, 228))'
        };
    }
    if (props.background === 'light-circle') {
        return {
            'background-image': 'radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))'
        }
    }
});
</script>
