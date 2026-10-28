---
name: zui-dev
description: "维护 ZUI 主仓库 lib/* 的 README/dev.md、dev.ts 和 Storybook 场景；用于开发示例、Controls、交互与 HMR，不用于官网文档。"
---

# ZUI 开发示例

## 发现与分流

按[共享工作流](../zui-standards/references/workflow.md)定位目标、保留已有改动并复用上下文。读取[开发示例规范](../zui-standards/references/dev-page.md)的相关章节；需求明确后直接完成范围内修改与验证，只要求审阅时保持只读。

| 目标 | 流程 |
| --- | --- |
| README.md / dev.md、dev.ts | Markdown 调试页 |
| *.stories.ts(x)、Controls、Actions | Storybook |
| 官网 API 说明、静态封面 | zui-doc |

涉及布局类时读取[CSS utilities 核实流程](../zui-standards/references/utilities.md)；自定义元素示例读取[Web Component 示例与验证](../zui-standards/references/web-component.md#示例与验证)。先核实真实公开 API，不为演示修改范围外运行时、文档或 i18n。

## Markdown 调试页

1. 核实实际来源：已有 dev.md 优先，否则 README.md；不无理由迁移。
2. 使用 `html:example:<utility classes>` fence 创建 DOM，资源通过 `@/` 引用。封面复用 [assets/preview.html](../zui-standards/references/component-preview.md)。
3. dev.ts 导入目标入口与演示依赖。每次 DOM 重建后的初始化放在 `onPageUpdate`，真正一次性设置放在 `onPageLoad`。
4. 清理旧实例、监听、timer 和 observer，覆盖本次涉及的首次加载、交互和 HMR。

## Storybook

按[Storybook 规范](../zui-standards/references/dev-page.md#storybook)维护库根的场景文件。沿用现有宿主适配器，处理 args 更新和卸载清理；Storybook 不加载 dev.ts，不使用其全局生命周期函数。

## 验证与交付

Markdown 页面通过目标 dev 页验收；Storybook 使用目标类型检查与场景预览，必要时构建/巡检。选择受影响状态、键盘/焦点和销毁场景，修复本次引入的问题后复验。按共享工作流管理服务及临时产物，复用已有有效检查。

汇报实际页面源、场景、生命周期处理、验证结果和未覆盖项；组合任务沿用共同范围，不自动提交。
