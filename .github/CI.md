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

## 恢复被账单阻止的 Actions

如果 job 在零个 step 的情况下失败，且 annotation 为 `The job was not started because your account is locked due to a billing issue.`，需要组织管理员在 GitHub 的 Billing & licensing 中处理账户状态。修改工作流、重复重跑或放宽分支规则不能解决这一问题。

账户恢复后，在包含修复提交的功能分支发起指向 `main` 的 Pull Request，观察三个必需检查实际执行并全部通过。应使用 PR 分支提交本次及其他本地未推送改动，不能直接推送到已受保护的 `main`。

还需观察合并后的 `Main and nightly checks`：完整分发、三种浏览器检查通过后才会构建部署文档；`Deploy` 只消费同一次成功运行生成的文档产物。确认账单恢复和远程全绿之前，应分别报告“规则已生效”和“CI 已成功执行”。

## 本地验证

按变更范围运行 `pnpm check`、`pnpm test:build`、文档构建和 Chromium 检查。构建、文档及浏览器验证会写入生成目录，应在隔离副本中执行，避免覆盖已有 `build/`、`dist/`、`docs/_` 和测试报告。

本地通过用于提交前验证，不能冒充或替代 GitHub 必需检查的状态。
