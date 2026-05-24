---
description: 分析代码变更并提交代码
---

# zui-commit

## 提交规范

- 首行格式：`<type> <scope>: <description>`
  - `<type>`：`*` = change（修改）、`+` = addition（新增）、`-` = removal（移除）
  - `<scope>`：`lib/<name>/` 下的库变更写作 `<lib-name>`（如 `button`）；仓库根或跨库变更写作 `proj`
  - `<description>`：英文一句话简述
- 提交信息全部使用英文，不允许 emoji
- 如需详细说明，与首行空一行后用 Markdown 撰写，多条变更使用列表项
- 提交信息中不要包含 `Co-authored-by: xxx` 等 Agent 相关信息。

示例：

```text
* form-builder: add textarea option to form field panel
+ utilities: add new whiteboard extension
* proj: update pnpm-lock.yaml after dependency bump
```

## 步骤

1. 并行运行 `git status`、`git diff --cached`（暂存变更）、`git diff`（未暂存变更）、`git log --oneline -10`（最近提交风格）。
2. 判断暂存区状态：
   - 若暂存区已有文件，**仅对暂存区的文件提交**，不额外 add。
   - 若暂存区为空，将所有已修改/新增的文件 `git add` 到暂存区（排除 `.env`、`credentials.json` 等敏感文件）。
3. 分析待提交的变更，判断是否需要拆分为多个提交。出现以下任一情况时拆分：
   - 涉及 `lib/` 下多个不同库的变更 —— 每个库单独一个提交。
   - 同一库内包含多种 type（如既有新增又有修改） —— 按 type 拆分。
   - 包含多个逻辑上独立的功能变更 —— 按功能拆分。
4. 对每个提交，按上述提交规范生成 commit message，使用 HEREDOC 方式执行 `git commit`。
5. 所有提交完成后运行 `git status` 确认最终状态。
