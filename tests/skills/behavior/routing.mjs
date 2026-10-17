const domains = [
    ['component', '修复 lib/widget 中组件销毁后事件监听没有移除的问题，补回归测试，暂不提交。', 'edit'],
    ['helper', 'lib/cache 的纯函数对空 key 返回错误，修复并测试；保持现有公开 API。', 'edit'],
    ['doc', '优化 lib/widget/docs/lib/components/index.md 的 API 说明，只修正文案与已有示例。', 'edit'],
    ['dev', '修复 lib/widget/README.md 示例在热更新后失效的问题，更新 dev.ts 的重建和清理生命周期。', 'edit'],
    ['i18n', '补全 lib/widget 英文缺失的文案键并修复 fallback，保留现有语言结构。', 'edit'],
    ['lib', '新增完整的 lib/tag-picker 库，包含组件、类型、国际化、官网文档和开发示例。', 'edit'],
    ['optimize', '只读审计 lib/widget 整库的 API、生命周期、文档和国际化质量，报告已确认的问题。', 'readonly'],
    ['review', '评审本地未提交改动，不修复；已有暂存、未暂存和未跟踪文件都属于本次评审范围。', 'readonly'],
    ['standards', '说明此库通过公开入口复用跨包 helper 的规范，给出当前源码依据，不修改文件。', 'readonly'],
    ['wrap-lib', '将已提供的 formatter.umd.js 封装成异步 format() API；这是无 UI 的函数库。', 'edit'],
    ['commit', '只提交已有暂存快照，保留未暂存和未跟踪文件，不推送。', 'commit'],
];

// Expectations stay in the scoring process; prepareCase exposes only scenario inputs.
export const ROUTING_GROUPS = [
    ...[
        ['routing-main', 'main', 'zui', '目标是 ZUI 主源码仓库，内置包位于 lib/*，包名为 @zui/*。'],
        ['routing-extension', 'ext', 'zuix', '目标是独立扩展项目，包位于 lib/*、名为 @acme/*；Git 根属于扩展项目，ZUI 宿主在另一个目录。'],
    ].map(([id, prefix, skillPrefix, context]) => ({
        id,
        scenarios: domains.map(([domain, request, mode], index) => ({
            id: `${prefix}-${String(index + 1).padStart(2, '0')}`,
            context,
            request,
            primary: `${skillPrefix}-${domain}`,
            mode,
        })),
    })),
    {
        id: 'routing-consumer',
        scenarios: [
            {
                id: 'app-01',
                context: '已有业务应用已安装 ZUI；当前仓库不包含 ZUI 源码。',
                request: '在应用里创建并注册一个可复用的自定义 ZUI 组件，沿用当前项目结构。',
                primary: 'zui', mode: 'edit',
            },
            {
                id: 'app-02',
                context: '目标目录为空，没有现有应用、package.json 或构建工具。',
                request: '用 ZUI 做一个可以直接打开的独立静态页面，不需要 npm 和打包工具。',
                primary: 'zui-build', mode: 'edit',
            },
            {
                id: 'app-03',
                context: '已有 Vue 应用使用 npm 安装的 ZUI，有自己的路由、构建和组件目录。',
                request: '加一个使用 ZUI 的列表页，保留现有应用结构和 ZUI 版本。',
                primary: 'zui', mode: 'edit',
            },
            {
                id: 'app-04',
                context: '消费方应用通过 script 引入已发布的 ZUI，样式加载正常但组件无法初始化。',
                request: '只分析初始化失败的原因，先不要修改文件或升级依赖。',
                primary: 'zui', mode: 'readonly',
            },
        ],
    },
    {
        id: 'routing-boundaries',
        scenarios: [
            {
                id: 'boundary-01', context: 'ZUI 主源码仓库，已有暂存和未暂存改动。',
                request: '$zui-commit，只生成提交信息，不要暂存或提交。',
                primary: 'zui-commit', mode: 'readonly',
            },
            {
                id: 'boundary-02', context: '独立 ZUI 扩展项目，已有暂存和未暂存改动。',
                request: '$zuix-commit，只分析如何拆分提交并给出信息，不要写入。',
                primary: 'zuix-commit', mode: 'readonly',
            },
            {
                id: 'boundary-03', context: 'ZUI 主源码仓库；此前授权的文件修改已经保存到磁盘。',
                request: '把改好的文件保存一下，暂不提交。',
                primary: 'none', mode: 'readonly',
            },
            {
                id: 'boundary-04', context: '正在讨论项目的技能说明，没有开发或提交任务。',
                request: '解释一下 zui-commit 技能中“保存”和“提交”的区别，不修改文件。',
                primary: 'none', mode: 'readonly',
            },
            {
                id: 'boundary-05', context: 'ZUI 主源码仓库。',
                request: '优化文档：只把 lib/widget/docs/lib/components/index.md 中的“配至”改为“配置”。',
                primary: 'zui-doc', mode: 'edit',
            },
            {
                id: 'boundary-06', context: '独立扩展项目，已知目标文档路径，但没有找到 ZUI 宿主。',
                request: '只把 lib/widget/docs/lib/components/index.md 中的“配至”改为“配置”。',
                primary: 'zuix-doc', mode: 'edit',
            },
            {
                id: 'boundary-07', context: 'ZUI 主源码仓库。第三方只提供纯 ESM，未提供可用的 UMD/IIFE 文件。',
                request: '$zui-wrap-lib，将这份第三方资源封装成按需加载库；不要换版本。',
                primary: 'zui-wrap-lib', mode: 'clarify',
            },
            {
                id: 'boundary-08', context: '独立扩展项目。第三方只提供纯 ESM，未提供可用的 UMD/IIFE 文件。',
                request: '$zuix-wrap-lib，将这份第三方资源封装成按需加载库；不要换版本。',
                primary: 'zuix-wrap-lib', mode: 'clarify',
            },
        ],
    },
];
