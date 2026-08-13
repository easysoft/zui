# 自动化测试

ZUI 3 使用分层测试覆盖纯逻辑、DOM 组件、发布产物和真实浏览器行为。测试环境要求 Node.js 22.13 或更高版本，并固定使用 pnpm 11.21.0。

## 测试分层

| 层级 | 目录 | 运行环境 | 适合验证的内容 |
| --- | --- | --- | --- |
| 单元测试 | `tests/unit/**/*.test.ts` | Vitest + Node.js | 纯函数、配置解析、状态转换和无 DOM 的工具代码 |
| DOM 组件测试 | `tests/dom/**/*.test.tsx` | Vitest + jsdom | Preact 渲染、原生 Component 生命周期、事件和公开 DOM 行为 |
| 构建消费测试 | `tests/build/**/*.test.ts` | Vitest + Node.js/jsdom | 定制构建、ESM/UMD/CSS、source map、ZIP 和 `--noCash` 契约 |
| 浏览器测试 | `tests/e2e/**/*.spec.ts` | Playwright | 开发页 smoke、真实布局与交互、可访问性扫描和视觉回归 |

优先把测试放在成本最低、仍能覆盖风险的层级。例如，数据转换用单元测试，组件输入和事件用 DOM 测试；只有依赖真实布局、焦点或浏览器引擎的行为才进入 Playwright。一个回归可以同时需要多个层级，但不要在 E2E 中重复所有单元测试分支。

## 安装与常用命令

安装仓库依赖后，另外安装 Playwright 浏览器：

```sh
pnpm install
pnpm exec playwright install chromium
```

需要运行完整跨浏览器检查时，安装全部引擎：

```sh
pnpm exec playwright install chromium firefox webkit
```

| 命令 | 用途 |
| --- | --- |
| `pnpm test` | 运行单元测试和 DOM 组件测试 |
| `pnpm test:watch` | 监听单元测试和 DOM 组件测试 |
| `pnpm test:coverage` | 生成 `coverage/` 覆盖率报告 |
| `pnpm test:skills` | 验证仓库内 ZUI 技能脚本 |
| `pnpm test:build` | 构建并消费代表性 ESM、UMD、CSS、ZIP 和外置 Cash 产物 |
| `pnpm test:e2e` | 使用 Chromium 运行 Playwright 测试 |
| `pnpm test:e2e:all` | 使用 Chromium、Firefox 和 WebKit 运行 Playwright 测试 |
| `pnpm typecheck` | 对源码、工具和测试做 TypeScript 检查 |
| `pnpm check` | 运行 lint、typecheck、单元/DOM 测试和技能测试 |

构建消费测试的临时产物写入 `test-results/build/`；Playwright 报告、trace、截图和视频写入 `playwright-report/` 与 `test-results/playwright/`。这些目录不会提交到 Git。

## 编写单元与 DOM 测试

- 测试文件统一使用 `*.test.ts` 或 `*.test.tsx`，并放在对应层级目录。
- 单元测试只导入完成断言所需的最小模块，避免无意加载浏览器入口。
- DOM 测试通过 Testing Library 按用户可见文本、角色和可访问名称查询元素；只在没有稳定语义选择器时使用 CSS 选择器。
- 交互优先使用 `user-event`，断言公开结果、事件或生命周期，不断言 Preact 私有状态。
- 每个测试自行创建并清理 DOM、实例、计时器和 mock，避免依赖执行顺序。
- 修复缺陷时先写能重现问题的最小回归测试，再验证相关入口形态。

## 构建消费测试

构建测试必须把生成目录显式放在 `test-results/build/`，并从最终文件验证契约，而不是只检查构建命令退出码。代表性检查至少应覆盖：

- ESM 和 UMD 都能在浏览器式 DOM 环境中加载，公开导出存在；
- CSS、source map 和 ZIP 文件名及归档路径稳定；
- `--noCash` 构建确实包含依赖 Cash 的组件，并把 `cash-dom` 保持为外部依赖；
- `--noSourceMap` 不生成 map，也不留下 `sourceMappingURL`。

不要把面向浏览器的 ZUI 产物直接裸导入 Node.js，然后把缺少 `window` 或 `document` 当成分发缺陷。消费测试应先安装最小 jsdom 全局，或在真实浏览器中加载产物。

## 浏览器、可访问性与视觉测试

Playwright 会自动启动本仓库开发服务器。若已经有可访问的服务，可以指定：

```sh
PLAYWRIGHT_BASE_URL=http://127.0.0.1:4173 pnpm test:e2e
```

浏览器测试遵循以下约定：

- smoke 测试监听 `pageerror` 和 `console.error`，覆盖代表性单库路由；
- 交互测试使用受控夹具，但必须调用真实 ZUI 组件，不在夹具中伪造组件应该产生的状态；
- 定位元素优先使用角色、可访问名称和稳定的夹具 ID；
- 不使用固定延时等待动画，优先等待可见性、类名、属性或事件结果；
- 视觉回归只截取稳定的元素级区域。目前的四组契约是 Button、Avatar、展开的 Dropdown 和 Modal；
- Firefox 和 WebKit 参与功能、smoke 与可访问性测试，视觉基线只使用本机 Chromium 评审。
- CI 设置 `PLAYWRIGHT_SKIP_VISUAL=1`，继续执行 smoke、交互与 axe 门禁，但不比较操作系统相关的截图。

可访问性测试通过 axe 检查可自动检测的 WCAG A/AA 问题。axe 无法证明页面完全无障碍；键盘顺序、焦点管理、屏幕阅读器表达、缩放和实际对比度仍需人工验证。

## 更新视觉基线

只在确认样式变化符合预期后更新基线：

```sh
pnpm exec playwright test tests/e2e/visual.spec.ts \
    --project=chromium \
    --update-snapshots
```

基线按 Playwright project 和操作系统分别保存，本地命令只会更新当前操作系统的 Chromium 基线。更新后逐张查看差异，并把当前开发平台的预期 PNG 与代码一起提交。CI 跳过视觉比对，不会生成或接受快照；不要用批量更新掩盖未解释的像素变化。

## CI 检查

Pull Request 会分别运行质量/覆盖率、代表构建与文档构建、Chromium 浏览器检查。`main` 分支和每日任务还会构建完整分发包，并用 Chromium、Firefox、WebKit 三个独立任务检查浏览器行为。截图回归仅在本机 Chromium 中评审，CI 不自动生成、接受或比较截图。CI 检测到 flaky 重试通过也会失败；失败时下载 coverage、Playwright 报告、trace、视频或构建产物进行定位。
