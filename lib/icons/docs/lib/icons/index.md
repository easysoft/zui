# 字体图标

`icons` 使用 ZenIcon 字体显示图标。为元素添加 `.icon` 和具体的 `.icon-*` 类即可使用；少量纯 CSS 图形见 [CSS 图标](/lib/icons/css-icons/)。

## 全部图标

<a id="常用图标"></a>

输入名称或别名筛选图标，多个关键词用空格分隔。点击图标复制完整类名（例如 `icon icon-expand-full`），也可以用 Tab 键定位图标并按 Enter 或空格复制。

<Example class="docs-icons-catalog">
  <label for="docs-icons-search">搜索图标</label>
  <div class="flex items-center gap-2">
    <input id="docs-icons-search" v-model="iconSearch" class="form-control min-w-0" type="search" placeholder="名称或别名，例如 fullscreen" :disabled="iconsLoading || !!iconsError" @input="copyMessage = ''">
    <button type="button" class="btn" :disabled="!iconSearch" @click="iconSearch = ''; copyMessage = ''">清空</button>
  </div>
  <p role="status" aria-live="polite">
    <template v-if="iconsLoading">正在加载图标…</template>
    <template v-else-if="iconsError">{{ iconsError }}</template>
    <template v-else>显示 {{ filteredIcons.length }} / {{ icons.length }} 个图标</template>
  </p>
  <p v-if="!iconsLoading && !iconsError && !filteredIcons.length">没有匹配的图标，请换个关键词或清空搜索。</p>
  <div v-if="!iconsLoading && !iconsError" class="docs-icons-grid">
    <button
      v-for="icon in filteredIcons"
      :key="icon.name"
      type="button"
      class="docs-icons-tile center gap-2 rounded p-2 hover:primary-pale"
      :aria-label="`复制 icon icon-${icon.name}`"
      :title="icon.aliases.length ? `别名：${icon.aliases.map(name => `icon-${name}`).join('、')}` : `icon icon-${icon.name}`"
      @click="copyIcon(icon.name)"
    >
      <i :class="`icon icon-${icon.name} icon-2x`" aria-hidden="true"></i>
      <span>icon-{{ icon.name }}</span>
      <span v-if="icon.aliases.length" class="text-sm text-gray">别名：{{ icon.aliases.join('、') }}</span>
    </button>
  </div>
  <p role="status" aria-live="polite">{{ copyMessage }}</p>
</Example>

例如 `.icon-expand-full` 的别名包括 `.icon-arrows-alt` 和 `.icon-fullscreen`，它们显示同一个字形。目录将别名合并到对应图标，搜索别名也会显示该图标；点击时复制其规范名称。也可查看 [图标名称与别名数据](/assets/icons/icons.json)；实际可用类名以所用版本的 CSS 为准。

## 基本使用

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span><i class="icon icon-check" aria-hidden="true"></i> 已完成</span>
  <span><i class="icon icon-search" aria-hidden="true"></i> 搜索任务</span>
  <button type="button" class="btn primary"><i class="icon icon-plus" aria-hidden="true"></i> 新建任务</button>
</Example>

== HTML

```html
<span><i class="icon icon-check" aria-hidden="true"></i> 已完成</span>
<span><i class="icon icon-search" aria-hidden="true"></i> 搜索任务</span>
<button type="button" class="btn primary">
  <i class="icon icon-plus" aria-hidden="true"></i> 新建任务
</button>
```

:::

图标继承文本颜色。添加 `.icon` 可以让图标字形拥有最小 `14px` 的固定宽度，方便对齐。

## 尺寸与颜色

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <i class="icon icon-star" aria-hidden="true"></i>
  <i class="icon icon-star icon-lg" aria-hidden="true"></i>
  <i class="icon icon-star icon-2x text-primary" aria-hidden="true"></i>
  <i class="icon icon-star icon-3x text-success" aria-hidden="true"></i>
  <i class="icon icon-star icon-4x" aria-hidden="true"></i>
  <i class="icon icon-star icon-5x" aria-hidden="true"></i>
</Example>

== HTML

```html
<i class="icon icon-star" aria-hidden="true"></i>
<i class="icon icon-star icon-lg" aria-hidden="true"></i>
<i class="icon icon-star icon-2x text-primary" aria-hidden="true"></i>
<i class="icon icon-star icon-3x text-success" aria-hidden="true"></i>
<i class="icon icon-star icon-4x" aria-hidden="true"></i>
<i class="icon icon-star icon-5x" aria-hidden="true"></i>
```

:::

| 类名 | 字号 |
| --- | --- |
| `.icon` | `14px` |
| `.icon-lg` | 伪元素字号为当前字号的约 `1.33` 倍，同时调整垂直位置 |
| `.icon-2x` | `28px` |
| `.icon-3x` | `42px` |
| `.icon-4x` | `56px` |
| `.icon-5x` | `70px` |

也可使用 `style="font-size: 20px"` 指定字号。

## 只有图标的按钮

装饰性图标使用 `aria-hidden="true"`，按钮本身提供清晰的可访问名称。

::: tabs

== 示例

<Example>
  <button type="button" class="btn square" aria-label="搜索任务"><i class="icon icon-search" aria-hidden="true"></i></button>
</Example>

== HTML

```html
<button type="button" class="btn square" aria-label="搜索任务">
  <i class="icon icon-search" aria-hidden="true"></i>
</button>
```

:::

图标单独传达信息时，可以在外层使用 `role="img"` 和 `aria-label` 描述含义，避免辅助技术直接读取字体编码。

## 引入与部署

在 ZUI 源码工作区内可通过库名引入：

```js
import '@zui/icons';
```

`@zui/icons` 是源码工作区包。普通应用按[快速上手](/guide/start/)加载包含图标的 ZUI 样式。

自定义构建需要包含 `icons` 库。部署时保留构建输出中的字体文件及其与 CSS 的相对路径；加载失败时先检查浏览器网络面板中的字体请求。使用跨域字体地址时，服务端还需允许相应的跨域请求。

<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {withBase} from 'vitepress';

const iconSearch = ref('');
const icons = ref([]);
const iconsLoading = ref(true);
const iconsError = ref('');
const copyMessage = ref('');
let request;
let disposed = false;

const filteredIcons = computed(() => {
    const terms = iconSearch.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return icons.value.filter(icon => terms.every(term => icon.searchText.includes(term)));
});

async function copyIcon(name) {
    const className = `icon icon-${name}`;
    try {
        await navigator.clipboard.writeText(className);
        if (!disposed) {
            copyMessage.value = `已复制：${className}`;
        }
    } catch {
        if (!disposed) {
            copyMessage.value = `复制失败，请手动复制：${className}`;
        }
    }
}

onMounted(async () => {
    request = new AbortController();
    try {
        const response = await fetch(withBase('/assets/icons/icons.json'), {signal: request.signal});
        if (!response.ok) {
            throw new Error('图标数据加载失败');
        }
        const data = await response.json();
        if (!disposed) {
            icons.value = Object.keys(data).sort().map(name => {
                const aliases = data[name].alias || [];
                return {name, aliases, searchText: [name, ...aliases].map(value => `icon-${value}`).join(' ').toLowerCase()};
            });
        }
    } catch {
        if (!disposed) {
            iconsError.value = '图标目录加载失败，请刷新页面重试，或查看下方图标数据链接。';
        }
    } finally {
        if (!disposed) {
            iconsLoading.value = false;
        }
    }
});

onUnmounted(() => {
    disposed = true;
    request?.abort();
});
</script>

<style scoped>
.docs-icons-catalog > p {
    margin: 0.75rem 0;
}
.docs-icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7.5rem, 1fr));
    gap: 0.5rem;
    max-height: 24rem;
    overflow: auto;
    padding: 0.25rem;
}
.docs-icons-tile {
    min-height: 7rem;
    border: 1px solid var(--color-border);
    overflow-wrap: anywhere;
}
.docs-icons-tile:focus-visible {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 1px;
}
</style>
