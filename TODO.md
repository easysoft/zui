# TODO

## 长期：清理构建工具链中的 braces 依赖

目标：通过升级或替换上游工具，移除 `braces` 的全部引入路径，最终删除本地补丁及对应的安全审计例外。

背景（2026-10-04）：`braces@3.0.3` 的 [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) 尚无正式修复版本。当前已回补 [上游 PR #72](https://github.com/micromatch/braces/pull/72) 的深度保护，并通过回归测试；补丁和单项审计例外配置在 `pnpm-workspace.yaml`。由 ZUI 仓库维护者在 **2026-11-04 前复核**上游进展。

实施路径：

- [ ] 升级直接使用的 `chokidar@3` 到不再依赖 `braces` 的版本。由于新版本移除了 glob 支持，将 `scripts/docs/watch.ts` 改为监听目录并筛选文件，保留文档和扩展目录的新增、修改、删除同步及监听资源清理行为。
- [ ] 评估以 Node.js 原生文件遍历或 glob 能力替换直接使用的 `fast-glob`，核对 Node.js 版本要求、匹配语义、隐藏文件、忽略规则、符号链接和路径转义。涉及 `scripts/build/metadata.ts`、`scripts/build/zip.ts`、`scripts/docs/sync.ts`、`scripts/utilities/recursive-last-modified.ts`。
- [ ] 评估将 Tailwind CSS 3 迁移到不再引入 `braces` 的工具链，例如 Tailwind CSS 4。核对 `scripts/build/css-config.cjs` 中的 PostCSS 接线、`tailwindcss/loadConfig`、主题及变量插件，以及现有 `@apply` 前缀、CSS 产物和浏览器兼容性；形成迁移方案后分步实施。

注意：只升级仓库直接依赖的 `chokidar` 或替换 `fast-glob`，仍不能移除 Tailwind CSS 3 自身引入的 `braces`，需以完整依赖图为准。

完成条件：

- [ ] `pnpm why braces` 不再显示引入路径，锁文件中不再包含该包。
- [ ] 删除 `patches/braces@3.0.3.patch`、对应 `patchedDependencies` 注册和该 GHSA 的 `audit.ignore` 项；移除仅服务于该补丁的 `tests/unit/braces-security.test.ts`，保留迁移后文件扫描、监听和样式构建所需的回归覆盖。
- [ ] 无该项例外时，`pnpm audit --audit-level=high` 通过；`pnpm check`、`pnpm test:build`、`pnpm docs:build` 及文件监听验收通过，CSS 行为和浏览器兼容性符合 ZUI 的支持范围。

过渡处理：若上游先发布正式修复版，优先验证并升级，移除临时补丁及审计例外；工具链迁移继续按其兼容性和维护收益评估。
