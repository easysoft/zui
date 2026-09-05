# ZUI 库规范

## 先判断包角色

包角色决定构建排序、导航归类和贡献元数据；实现架构决定源码如何组织。两者必须分别判断。

| `zui.type` | 适用角色 |
| --- | --- |
| `config` | Tailwind 等共享配置 |
| `css-base` | reset、主题或全局 CSS 基础 |
| `control` | 原子、可复用的基础控件 |
| `component` | 由多个控件/能力组成的较高层组件 |
| `js-ui` | 以交互、生命周期或命令式 API 为主的 UI |
| `css-utilities` | 生成或聚合 CSS utility |
| `js-helpers` | 浏览器、DOM、存储或集成型 JS helper |
| `js-lib` | 主要为框架无关的纯函数、类型或通用 JS 类 |
| `other` / `examples` | 仅在现有构建语义或用户目标明确要求时采用 |

不要从名称直接推断类型。读取 `scripts/libs/lib-type.ts`、相似库 `package.json` 和实际输出。

## 新包最小契约

新库默认提供：

- 目录名与 kebab-case 包名 `@zui/<kebab-name>`；
- 版本 `0.0.1`；
- 准确的英文 `description`；
- 实际存在的主入口 `src/main.ts`；
- `"files": ["./src/**/*"]`；
- 与角色一致的 `keywords`；
- `zui.type`、`zui.displayName` 和准确的 `zui.contributes`；
- 仅包含真实导入所需的 `dependencies` 与 `devDependencies`；
- 含 TS/TSX 时提供对应 `tsconfig.json`，TSX 配置使用 Preact。

不要机械复制旧包中缺失或多余的字段。`browser`、`module` 和 `exports` 只在确有相应消费入口时添加；每个目标路径必须存在。不要为了“完整”声明不存在的子路径导出。

`wip`、`zui.notReady`、`separately`、`prebuild` 或 `defaultExport` 只在用户意图或构建要求明确时添加。

## 贡献元数据

`scripts/libs/lib-contributes.ts` 定义当前支持值：

- `css`: `class`、`var`
- `js`: `class`、`var`、`method`、`module`、`component`
- `config`: `tailwind`

`contributes` 描述构建产物对外提供的形态，不等于源码目录：

- 输出可消费 CSS 类时声明 `css.class`；
- 输出公共 CSS 变量时声明 `css.var`；
- 输出可实例化类时声明 `js.class`；
- 输出常量/变量或公共方法时分别声明 `js.var` / `js.method`；
- 输出模块对象或单例时声明 `js.module`；
- 接入 ZUI 组件自动创建/注册体系时声明 `js.component`；
- 提供 Tailwind 配置时声明 `config.tailwind`。

只声明真实产出，并与 `src/main.ts`、构建入口及相似库交叉验证。

## 依赖

- 仓库内部依赖默认使用 `workspace:*`；只有现有版本策略明确要求时沿用其他 workspace 范围。
- 运行时源码导入的包放入 `dependencies`。
- 仅 `README.md`、`dev.ts`、正式文档或构建开发使用的包放入 `devDependencies`。
- 类型导入如果会影响发布类型解析，也需要确保消费者可解析相应依赖。
- 不跨库写相对路径；使用 `@zui/<name>`。不要新增对 gitignored `exts/` 的硬依赖。

## 源码结构

新组件库按实际需要采用：

```text
src/
  main.ts
  component/
  vanilla/
  types/
  style/
  i18n/
```

不要创建空目录。已有库若使用 `components/`、根级 `vars.css` 或其他合理局部结构，继续沿用；不要为本次功能迁移全库。

入口采用显式导出和必要的副作用导入，例如样式、注册或语言接线。仅暴露承诺的公共 API；内部 helper 保持局部。

## 新建与扩展流程

1. 识别包角色、公开消费方式和相似库。
2. 定义真实产出，再写 `package.json` 和入口。
3. 创建最小源码结构并按依赖顺序实现。
4. 复核每个导出和依赖是否真实存在。
5. 对已有库，只修改当前功能需要的元数据；不要借机规范化所有历史字段。

## 验证

按 [共享工作流](workflow.md) 选择本次所需检查；新包或改变相应契约时核对：

- 解析 `package.json` 并确认所有 `main`、`browser`、`module`、`exports`、`files` 目标。
- 对照源码导入检查 dependency 分类。
- 对照构建类型检查 `zui.type` 与 `contributes`。
- 运行受影响的 lint、类型或现有测试；改变入口、依赖、资源或分发时补充所需目标构建。
- 若新增文档或调试页，再执行对应规范中的验证。
