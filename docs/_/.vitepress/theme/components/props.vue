<template>
  <div class="zui-component-props shadow rounded vp-raw text-base">
    <table class="table">
      <thead>
        <tr>
          <th class="w-32">名称</th>
          <th class="w-20 wtext-center">类型</th>
          <th class="w-28 text-center">默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="child in propList.children" :key="child.ctx?.uid">
          <component :is="child" />
        </template>
        <PropItem
          v-for="item in propList.list"
          :key="item.name"
          v-bind="item"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {computed, useSlots} from 'vue';
import PropItem from './prop-item.vue';

const slots = useSlots();
const propList = computed(() => {
    const children: unknown[] = [];
    const statementLines: string[] = [];
    (slots.default?.() || []).forEach((item) => {
        if (typeof item.children === 'string') {
            statementLines.push(item.children);
        } else {
            children.push(item);
        }
    });
    let tempComment = '';
    const split2Parts = (str: string, splitter: string): [string, string] | [string] => {
        const index = str.indexOf(splitter);
        if (index === -1) {
            return [str];
        }
        return [str.substring(0, index), str.substring(index + splitter.length)];
    };
    const list = statementLines.join('\n').split('\n').reduce<{comment: string, type: string, name: string, optional: boolean, defaultValue?: unknown, override: string}[]>((items, line) => {
        let text = line.trim();
        if (!text.length) {
            return items;
        }
        if (text.startsWith('/*')) {
            tempComment = text.slice(text.startsWith('/**') ? 3 : 2, -2).trim();
            return items;
        }
        let comment = '';
        let optional = false;
        let name = '';
        let type = '';
        let defaultValue: unknown;
        ([text, comment = tempComment] = split2Parts(text, '//'));
        text = text.trim();
        tempComment = '';
        if (text.endsWith(';')) {
            text = text.substring(0, text.length - 1);
        }
        if (text.startsWith('"') || text.startsWith("'")) {
            if (text.endsWith(',')) {
                text = text.slice(0, -1);
            }
            text = text.slice(1, -1);
        }
        ([name, text = ''] = split2Parts(text, ':'));

        if (name.endsWith('?')) {
            name = name.slice(0, -1);
            optional = true;
        }
        ([type, text = ''] = split2Parts(text, ' = '));
        text = text.trim();
        if (text.length) {
            try {
                defaultValue = JSON.parse(text);
            } catch (error) {
                defaultValue = text;
            }
        }

        const item = {
            comment: comment.trim(),
            optional,
            name: name.trim(),
            type: type.trim(),
            defaultValue,
            override: '',
        };
        items.push(item);
        return items;
    }, []);
    return {list, children};
});
</script>

<style>
.zui-component-props td, .zui-component-props th {
  /* @apply -px-2 -py-1 -align-text-top; */
}
</style>
