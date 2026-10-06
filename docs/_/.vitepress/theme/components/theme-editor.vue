<script setup lang="ts">
import {computed, ref} from 'vue';
import {useData} from 'vitepress';
import ThemeColorField from './theme-color-field.vue';
import {createTheme, exportThemeCSS, paletteFields, presets, surfaceFields, type ThemeMode} from '../theme-model';
import {downloadTheme, resetTheme, saveMessage, theme, updateTheme} from '../theme-state';
import {useCopyFeedback} from '../copy-feedback';

const {isDark} = useData();
const mode = computed<ThemeMode>(() => isDark.value ? 'dark' : 'light');
const css = computed(() => exportThemeCSS(theme.value));
const themeName = computed(() => presets.find(preset => preset.id === theme.value.preset)?.name || '自定义主题');
const fieldRevision = ref(0);
const {copy, copying, message} = useCopyFeedback();
const previewName = ref('我的新项目');
const previewMessage = ref('');

function setPalette(key: typeof paletteFields[number]['key'], value: string) {
    updateTheme({...theme.value, preset: 'custom', colors: {...theme.value.colors, [key]: value}});
}

function setSurface(key: typeof surfaceFields[number]['key'], value: string) {
    updateTheme({...theme.value, preset: 'custom', [mode.value]: {...theme.value[mode.value], [key]: value}});
}

function setSize(key: 'radius' | 'fontSize', event: Event) {
    updateTheme({...theme.value, preset: 'custom', [key]: Number((event.target as HTMLInputElement).value)});
}

function download() {
    try {
        downloadTheme();
        exportMessage.value = '已生成 zui-theme.css';
    } catch {
        exportMessage.value = '下载失败，请复制下方 CSS 保存。';
    }
}
const exportMessage = ref('');
</script>

<template>
    <div class="theme-editor vp-raw" data-testid="theme-editor">
        <div class="theme-toolbar">
            <div class="theme-appearance" role="group" aria-label="文档外观">
                <button type="button" :aria-pressed="!isDark" @click="isDark = false"><span aria-hidden="true">☀</span> 浅色</button>
                <button type="button" :aria-pressed="isDark" @click="isDark = true"><span aria-hidden="true">☾</span> 深色</button>
            </div>
            <span class="theme-save-status" role="status" aria-live="polite">{{saveMessage}}</span>
            <button type="button" class="theme-reset" @click="resetTheme(); fieldRevision++">恢复默认</button>
        </div>

        <section class="theme-presets" aria-labelledby="theme-presets-heading">
            <div class="theme-section-heading">
                <h2 id="theme-presets-heading">选择预设</h2>
                <span>当前：{{themeName}}</span>
            </div>
            <div class="theme-preset-grid">
                <button v-for="preset in presets" :key="preset.id" type="button" class="theme-preset" :aria-label="`应用${preset.name}主题`" :aria-pressed="theme.preset === preset.id" @click="updateTheme(createTheme(preset.id)); fieldRevision++">
                    <span class="theme-preset-colors" aria-hidden="true">
                        <span :style="{background: preset.settings.colors.primary}"></span>
                        <span :style="{background: preset.settings.colors.secondary}"></span>
                        <span :style="{background: preset.settings.light.surface}"></span>
                        <span :style="{background: preset.settings.dark.canvas}"></span>
                    </span>
                    <span class="theme-preset-name">{{preset.name}}<span v-if="theme.preset === preset.id" aria-hidden="true">✓</span></span>
                    <span class="theme-preset-description">{{preset.description}}</span>
                </button>
            </div>
        </section>

        <div class="theme-workbench">
            <div class="theme-controls">
                <section aria-labelledby="theme-palette-heading">
                    <div class="theme-section-heading"><h2 id="theme-palette-heading">配色</h2><span>自动生成完整色阶</span></div>
                    <div class="theme-fields">
                        <ThemeColorField v-for="field in paletteFields" :key="`${fieldRevision}-${field.key}`" :name="field.key" :label="field.label" :variable="`--color-${field.key}-500`" :value="theme.colors[field.key]" @change="setPalette(field.key, $event)" />
                    </div>
                </section>

                <section aria-labelledby="theme-surface-heading">
                    <div class="theme-section-heading"><h2 id="theme-surface-heading">{{isDark ? '深色' : '浅色'}}外观</h2><span>两种模式分别保存</span></div>
                    <div class="theme-fields">
                        <ThemeColorField v-for="field in surfaceFields" :key="`${fieldRevision}-${mode}-${field.key}`" :name="field.key" :label="field.label" :variable="`--color-${field.key}`" :value="theme[mode][field.key]" @change="setSurface(field.key, $event)" />
                    </div>
                </section>

                <section aria-labelledby="theme-shape-heading">
                    <div class="theme-section-heading"><h2 id="theme-shape-heading">形状与排版</h2></div>
                    <div class="theme-slider-field">
                        <label for="theme-radius">圆角 <output>{{theme.radius}} px</output></label>
                        <input id="theme-radius" type="range" min="0" max="16" step="1" :value="theme.radius" @input="setSize('radius', $event)">
                        <span class="theme-field-help">--radius · 按比例调整圆角系列</span>
                    </div>
                    <div class="theme-slider-field">
                        <label for="theme-font-size">基础字号 <output>{{theme.fontSize}} px</output></label>
                        <input id="theme-font-size" type="range" min="12" max="20" step="1" :value="theme.fontSize" @input="setSize('fontSize', $event)">
                        <span class="theme-field-help">--font-size-root · 影响使用 rem 的文字与尺寸</span>
                    </div>
                </section>
            </div>

            <aside class="theme-preview" aria-labelledby="theme-preview-heading">
                <div class="theme-section-heading"><h2 id="theme-preview-heading">实时预览</h2><span>使用 ZUI 组件样式</span></div>
                <div class="theme-preview-canvas">
                    <div class="theme-preview-panel">
                        <div class="theme-preview-top"><span class="theme-preview-mark" aria-hidden="true">Z</span><strong>项目工作台</strong><span class="label success">进行中</span></div>
                        <div class="theme-preview-body">
                            <h3>让创意开始成形</h3>
                            <p>按钮、表单与状态颜色，都跟随你的主题。</p>
                            <label for="theme-preview-name">项目名称</label>
                            <input id="theme-preview-name" v-model="previewName" class="form-control" autocomplete="off">
                            <div class="theme-preview-actions"><button type="button" class="btn primary" @click="previewMessage = `已创建「${previewName.trim() || '未命名项目'}」（预览）`">创建项目</button><button type="button" class="btn" @click="previewName = '我的新项目'; previewMessage = ''">重置示例</button></div>
                            <div class="theme-preview-feedback" role="status">{{previewMessage || '试试输入文字、点击按钮或切换外观。'}}</div>
                            <div class="theme-preview-progress"><span>任务进度</span><strong>68%</strong></div>
                            <progress max="100" value="68" aria-label="任务进度 68%"></progress>
                            <div class="theme-preview-labels"><span class="label success">已完成</span><span class="label warning">待处理</span><span class="label danger">需关注</span></div>
                        </div>
                    </div>
                    <div class="theme-tones" aria-label="主色色阶">
                        <span v-for="shade in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]" :key="shade" :style="{background: `var(--color-primary-${shade})`}" :title="`主色 ${shade}`"></span>
                    </div>
                </div>
                <p class="theme-preview-note">整个文档站也是预览。前往其他组件页面，主题会继续生效。</p>
            </aside>
        </div>

        <section class="theme-export" aria-labelledby="theme-export-heading">
            <div class="theme-section-heading"><h2 id="theme-export-heading">带到你的项目</h2><div class="theme-export-actions"><button type="button" class="btn" :disabled="copying" :aria-busy="copying" @click="copy(css, 'CSS 已复制')">复制 CSS</button><button type="button" class="btn primary" @click="download">下载 CSS</button></div></div>
            <p>将以下代码保存为 <code>zui-theme.css</code>，在 ZUI 样式之后加载。包含浅色、深色及跟随系统的规则，无需重新构建 ZUI。</p>
            <div class="theme-export-status" role="status" aria-live="polite">{{message || exportMessage}}</div>
            <textarea :value="css" aria-label="主题 CSS" readonly spellcheck="false" wrap="off"></textarea>
            <p class="theme-export-hint">默认跟随系统外观；在 <code>&lt;html&gt;</code> 上使用 <code>class="light"</code> 或 <code>class="dark"</code> 可手动指定。导出仅含 ZUI 变量，不包含文档站布局样式。自定义配色后，请检查文字与背景的对比度。</p>
        </section>
    </div>
</template>
