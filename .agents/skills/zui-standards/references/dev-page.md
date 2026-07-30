# ZUI 开发调试页规范

## 入口与职责

单库调试由 `pnpm dev` 自动发现 `lib/*/package.json`，访问 `/<lib-name>/`。目标库通常使用：

- `README.md`：页面内容和实例 DOM；
- `dev.ts`：目标入口、示例依赖和交互初始化。

当前 dev 管线可能优先读取已有 `dev.md`；默认维护用户指定的 `README.md`，不要无理由新增或迁移到 `dev.md`。

调试页用于覆盖开发场景，不是官网正式文档。不要把两套示例语法混用。

## README.md

- 使用 info string 为 `html:example:<utility classes>` 的代码围栏提供实例 DOM。
- 第三个冒号段用于示例容器 utility classes；沿用目标库和成熟示例的格式。
- 通过 `@/` 引用当前库资源，由开发服务器改写。
- 用唯一、可读的 ID 或 data 属性连接脚本，避免多个示例互相影响。
- 覆盖基础、主要变体、disabled/loading/empty/error、长内容和交互边界。
- 为交互元素使用正确语义、可聚焦状态和必要 ARIA。
- 不在 README 中复制大段正式 API 参考；正式说明写入 `docs/lib/...`。

## dev.ts

先导入演示所需依赖，再导入目标入口：

```ts
import '@zui/example-dependency';
import 'zui-dev';
import './src/main';
```

按生命周期放置逻辑：

- `onPageUpdate`：README DOM 首次创建和 HMR 重建后都必须运行的实例化、查询和局部绑定。
- `onPageLoad`：只运行一次的真正全局设置。
- 模块顶层：导入和能保证只注册一次的全局监听；仍要考虑 HMR 重执行。

`onPageUpdate` 会在 load 和每次 page update 触发。不要在其中反复增加 window/document 全局监听，除非先可靠清理。避免不可清理的 interval/timeout、重复实例、遗留 observer、冲突 ID 和闭包持有旧 DOM。

如果组件可销毁，在重建前或重新实例化时清理旧实例。只需要 CSS 的页面可以仅导入入口和演示依赖，不强行添加生命周期代码。

## 场景矩阵

根据组件能力选择，不机械覆盖：

- 默认与主要尺寸/外观；
- HTML 声明式、vanilla 构造器和其他已承诺消费方式；
- controlled/uncontrolled 或数据更新；
- 事件、方法、toggle 和自动创建；
- disabled、loading、empty、error；
- 长文本、大数据、重复操作和销毁重建；
- 键盘、焦点、ARIA 与语言切换。

示例应便于人工观察：提供明确标签、状态输出或日志，但不要依赖不稳定时间顺序。

## 验证

1. 静态检查 `README.md` fence、资源和唯一选择器。
2. 检查 `dev.ts` 导入、类型、全局监听和清理。
3. 运行 `pnpm dev`，访问 `/<lib-name>/`，验证首次加载和修改 README 后的页面更新。
4. 操作主要状态、键盘路径和边界场景，确认控制台无重复初始化或异常。
5. 完成后结束开发服务器，不遗留后台进程。
