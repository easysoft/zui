<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import '../../../dist/zui/zui.css';
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">This is my custom page footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
    text-align: center;
}
</style>
