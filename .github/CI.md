# CI 门禁维护

## 必需检查

`main` 的目标规则保存在 [`rulesets/main.json`](rulesets/main.json)，与 [`workflows/pr-checks.yml`](workflows/pr-checks.yml) 中的三个 job 名称对应：

- `Quality and coverage`
- `Distribution and documentation builds`
- `Chromium browser contracts`

规则只作用于 `main`，要求通过 Pull Request 合并、分支与目标分支保持更新、三个检查均通过，并禁止删除和强推。检查来源固定为 GitHub Actions（integration ID `15368`），没有绕过角色；不额外要求人工审批数量。

修改 job 名称时必须同步规则。工作流文件或规则 JSON 被提交，不代表远程规则已经生效，也不代表 Actions 已能执行。

## 应用与核对规则

以下命令需要仓库 Administration 写权限。在仓库根目录执行，先检查是否已有同名规则，避免重复创建：

```sh
gh api repos/easysoft/zui/rulesets \
  --jq '.[] | {id, name, enforcement}'
```

不存在同名规则时创建：

```sh
gh api --method POST repos/easysoft/zui/rulesets \
  --input .github/rulesets/main.json
```

已存在时，将 `<ruleset-id>` 替换为查询返回的实际 ID，再更新：

```sh
gh api --method PUT repos/easysoft/zui/rulesets/<ruleset-id> \
  --input .github/rulesets/main.json
```

应用后核对实际规则：

```sh
gh api repos/easysoft/zui/rules/branches/main
```

规则由 GitHub 管理。提交 JSON 不会自动创建、更新或删除远程规则。

## 自托管执行

所有 job 使用 `lightsail-sgp-zui-validation` 的专用标签 `zui-lightsail-validation-20260927`。该 runner 没有默认的 `self-hosted`、`linux` 标签，不要额外添加这些匹配条件，也不要把 runner 显示名称当作标签。

该方案不使用 GitHub 托管 runner、Artifact 上传／下载或 GitHub 依赖缓存。代码、运行状态和日志仍由 GitHub Actions 管理；pnpm store 和浏览器下载保留在服务器上。自托管调度已能在托管 runner 被账单锁定时执行，但不会消除已有账单。

服务器使用独立普通用户 `gh-runner`。启动前核对 `zui-runner-validation.service`、共享 `github-runners.slice` 的资源限制、swap 和其他 runner 状态，保留现有代理服务的隔离。单台 runner 按质量检查、分发构建、浏览器的顺序执行，前置失败时阻止后续昂贵检查。Vitest、Playwright 使用单 worker，PR 的单元／DOM 测试只在覆盖率步骤运行一次。CI 为冷编译及页面首次加载提供更长时间预算，仍以 `--fail-on-flaky-tests` 拒绝依靠重试通过。Playwright 系统依赖由管理员预装，job 只执行 `playwright install` 下载浏览器，不在受限服务中运行 sudo。

持久 runner 只执行本仓库的受信任代码。必须把 `scripts/ci/allow-runner-job.sh` 安装为 root 所有、runner 不可写的 `/etc/zui-runner-validation/allow-job.sh`，并由服务的 `ACTIONS_RUNNER_HOOK_JOB_STARTED` 指向它。该 hook 在 checkout 前拒绝其他仓库、外部 fork PR、`pull_request_target` 和非成功主分支 push 的部署事件。仓库内 PR 还设有 job 条件；不能仅依赖可被 PR 修改的 YAML 条件。外部 fork 的自动检查会跳过，须由维护者审阅后导入本仓库分支重新验证，不能把跳过当作验收通过。

在已推送的功能分支上手动执行 `PR checks` 或 `Main and nightly checks` 可以验收迁移；后者的手动运行也构建并验证文档，但不会部署官网。合并到 `main` 后，完整分发及三种浏览器检查通过才会构建部署文档，`Deploy` 仅接受本仓库 `main` 的成功 push 运行。始终分别核实 runner 在线、job 实际执行、检查通过和部署成功。

main/nightly 的 Chromium、Firefox、WebKit 在同一 job 中以单 worker 顺序执行，复用一次安装和 Vite 开发服务；浏览器报告包含全部三个 project。PR 继续使用独立的 `Chromium browser contracts` 必需检查名称。

## 本地产物

`scripts/ci/preserve-results.sh` 将报告、npm 候选包、分发文件和文档保存在 runner 用户的 `$HOME/zui-ci-results/<run-id>/<run-attempt>/<job>/`。每份归档包含 `results.tar.gz` 和 `commit`，路径会写入 Job Summary；通过服务器下载，不再出现在 GitHub Artifacts 列表。清理只针对这一专用目录中的过期运行，保留当前运行及最近 14 天的结果，不清理其他工作区或 runner 的资料。

PR 的 npm 包位于 `build` 归档，main/nightly 的包和完整分发位于 `distributions` 归档。归档保留测试生成的同一 `.tgz` 与 `artifact.json`，不为留存重新打包。失败任务也保留已生成的诊断，不能把存在归档作为验证成功的凭据。

文档构建与部署继续使用不同权限的 job。main 部署读取上游成功运行的 ID、attempt 和 SHA，dev 部署读取本次运行的相同信息；核对 `commit` 后提取文档。部署任务不 checkout 或执行项目源代码，也不重新构建。两个任务必须路由到同一台持久 runner；若以后扩容为多台，需要先提供共享存储。取消后未完成的归档不得用于部署。

## 本地验证

PR、main/夜间检查和 dev 文档部署在安装锁定依赖后运行 `pnpm audit --audit-level=high`，发现 high/critical 漏洞或审计服务失败时阻止后续检查和部署。审计覆盖开发依赖，不使用 `--ignore-registry-errors`。`pnpm-workspace.yaml` 中仅对已应用本地补丁的 `GHSA-vfj7-8cjw-p6xm` 设置带复核期限的例外，`tests/unit/braces-security.test.ts` 验证实际安装的补丁；不得删除补丁而保留例外。CI 使用 Node.js 22 系列最新补丁，pnpm 版本继续固定为仓库约定的 12.5.1。

pnpm 安装 Action 固定为支持 pnpm 12 原生发行方式的 `pnpm/action-setup` 6.1.0，并锁定完整提交 SHA。升级时需同时验证安装、缓存路径和 frozen-lockfile 行为。

按变更范围运行 `pnpm check`、`pnpm test:build`、文档构建和 Chromium 检查。构建、文档及浏览器验证会写入生成目录，应在隔离副本中执行，避免覆盖已有 `build/`、`dist/`、`docs/_` 和测试报告。

本地通过用于提交前验证，不能冒充或替代 GitHub 必需检查的状态。

## 官网示例门禁

PR 的 `Distribution and documentation builds` 在文档构建后运行 `pnpm test:docs --workers=1 --fail-on-flaky-tests`。基础巡检从构建产物自动发现全部文档页面，检查页面内容、站内链接与锚点、资源加载和页面脚本错误；同时保留快速上手、Tree、SearchBox 和 FileList 的深度验收，并覆盖 DTable 客户端切页、懒加载及 Dashboard 复制代码和布局回归。main 和 dev 也运行同一检查，失败时只留存诊断，不执行部署。必需检查名称保持不变。

本地先运行 `pnpm docs:build`，再运行 `pnpm test:docs`。浏览器检查不隐式重建文档；默认在端口 4174 临时预览产物，结束后关闭自身服务。端口被占用时会失败，不能停止不属于本任务的服务。

构建和检查必须使用相同的 `BASE_PATH`。例如，main 使用 `BASE_PATH=/zui/3/`，dev 使用 `BASE_PATH=/zui/dev/`；两步都要传入该变量。截图和 trace 位于 `test-results/docs/`，HTML 报告位于 `playwright-report/docs/`，CI 将诊断归档到上述服务器本地目录。

部署后，可通过 `PLAYWRIGHT_DOCS_BASE_URL=https://实际站点/部署目录/ pnpm test:docs --workers=1` 复测。URL 以斜杠结尾，指向网站根目录；此模式不启动本地服务。部署验收须保留同一次构建的本地 `docs/_/.vitepress/dist` 和对应源码，作为页面清单及内容核对依据。复制代码检查只将新页面导航定向到测试生成的独立 HTML，不写入远程网站。

新增示例遵循现有 `<Example>`、`<ZUI>` 和代码标签写法，完整运行示例用 `data-doc-example` 标识。官网测试直接提取页面代码，不复制到独立 fixture；新增标识时同时补充行为断言。第三方 CDN 在修改版本或地址时单独检查，不成为 PR 的网络依赖。

基础巡检不把示例容器中的示意链接当作文档导航，也不验证外部站点的可用性。它覆盖全部页面的加载与基础完整性，不等同于所有组件交互、版本及发布文案均已验收；已有资源路径缺陷仍会使对应部署路径的检查失败。
