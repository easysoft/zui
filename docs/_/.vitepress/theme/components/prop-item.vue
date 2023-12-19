<template>
  <tr>
    <td><code class="font-bold text-md">{{ name }}</code></td>
    <td class="text-center break-words">
      <code v-for="t in type.split('|')" :key="t">{{ t.trim() }}</code>
    </td>
    <td class="text-center break-words">
      <template v-if="optional">
        <code v-if="defaultValue === undefined" class="opacity-50">null</code>
        <code v-else>{{defaultValue}}</code>
      </template>
      <template v-else>
        <code v-if="defaultValue !== undefined">{{ defaultValue }}</code>
        <span v-else class="opacity-50">—</span>
      </template>
    </td>
    <td>
      <slot><span v-html="commentHtml" /></slot>
      <span v-if="override">
        该属性重写了父部件 <a :href="`/wg/${override}/`"><code>{{ override }}</code></a> 定义。
      </span>
    </td>
  </tr>
</template>

<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps<{
    name: string,
    type: string,
    optional?: boolean,
    defaultValue?: unknown,
    comment?: string,
    override?: string,
}>();

const commentHtml = computed(() => {
    const html = props.comment?.replace(/`([^`]+)`/g, '<code>$1</code>');
    return html?.replace(/\n/g, '<br/>');
});
</script>
