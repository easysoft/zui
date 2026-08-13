# 扩展项目 UMD 封装形态决策

## 先解析上下文

从 resolver 获取 `TARGET_LIB_ROOT`、`EXT_ROOT`、`GIT_ROOT`、`ZUI_ROOT + EXTS_NAME` 及 `LIB_FOLDER`、`PACKAGE_NAME`、`ZUI_NAME`、`PUBLIC_PATH`。这些名称用途不同：

- 文件创建在 `TARGET_LIB_ROOT`，依赖与项目检查从 `EXT_ROOT` 执行；
- Git 状态和 diff 使用 `GIT_ROOT`；
- 源码跨包 import 使用真实 `PACKAGE_NAME`；
- 宿主联合构建选择准确 `ZUI_NAME`；
- 开发资源 URL 使用已解析的 `EXTS_NAME + LIB_FOLDER`；
- 生产资源路径以 `PUBLIC_PATH` 和宿主当前构建契约为准。

新库还不存在时，从计划父项目、根配置和至少两个成熟兄弟包推导 package scope、初始版本、依赖协议与目录风格。不要从参考扩展项目复制专属 scope、组名、相邻路径或 commit scope。

## 先判断外部 API，再决定 ZUI 形态

| 外部能力 | 常见 ZUI 适配 | 必要实现 | 不要默认添加 |
| --- | --- | --- | --- |
| 纯函数、解析器、格式化器 | 异步 helper/facade | loader、窄类型、公开异步函数 | `Component`、Preact、样式 |
| 挂载到已有元素的有状态实例 | 原生 `Component` DOM 增强器 | loader、types、vanilla、destroy，按需 style | Preact 或声明式注册 |
| 根据 props 生成 ZUI 结构并真实需要双入口 | Preact + `ComponentFromReact` | component、vanilla、types、ref/update/destroy | 第二套并行状态源 |
| 全局服务、编辑器管理器或单例 | 状态 helper/controller | loader、所有权、重入、错误、cleanup | 虚假的宿主 DOM 组件 |

包角色与实现架构分别判断。`zui.type` 和 `contributes` 以当前宿主的类型定义、目标真实公开产出及相似扩展包为准，不从第三方库名称或目录结构机械推导。

## 最小文件矩阵

按需组合，不把所有目录当成模板；已有库沿用合理的 `component/`、`components/` 等局部风格。

```text
<TARGET_LIB_ROOT>/
  package.json
  tsconfig.json                    # 项目契约需要时
  public/<vendor>/...              # 原始 UMD/CSS/license
  src/main.ts
  src/helper/<vendor>-loader.ts    # 私有 LibLoader 单例
  src/types/...                    # 模块形状与 facade 公共类型
  src/vanilla/...                  # 仅命令式组件需要
  src/component/...                # 仅真实 Preact 消费需要
  src/style/...                    # 仅壳层或资源需要
  README.md 或 dev.md              # 以扩展项目/宿主管线为准
  dev.ts                           # 本地 loader 覆盖与交互
  docs/...                         # 仅批准正式文档时
```

生产入口必须触达 loader 注册和必要样式副作用。私有 loader 不从公共入口导出；只有消费者确需预加载、显式重试或读取模块时才设计稳定公共 API。

## UMD 前提与资源证据

- 检查产物没有顶层 `import`/`export`，能由普通 `<script>` 执行，并在执行后产生 `check` 指定的稳定全局。
- 确认 UMD 全局形状与类型声明、版本和文档一致；文件名或扩展名本身不是证据。
- 记录第三方版本、来源、完整性和许可证；本地托管时原样保留批准的 UMD/CSS/license。
- 发现纯 ESM、缺失全局或需要重打包时停止；本技能不转换、不重新构建，也不提供 ESM loader 兜底。

## 类型策略

按以下优先级选择：

1. 第三方包有与 UMD 全局一致的声明：只使用 `import type`，必要时用 `typeof import('<package>')` 描述模块。
2. 声明与 UMD 全局形状不同：建立窄适配类型，不假装二者相同。
3. 无可靠声明：只手写 facade 实际调用的构造器、方法、事件和 options，避免宽泛 `any`。

公开 `.d.ts` 引用第三方包名时，该依赖必须按 `EXT_ROOT` 的发布策略保证消费者可解析；只有类型不泄漏到公共表面时，纯开发期来源才可能属于 dev dependency。所有第三方实现 import 必须是 type-only，运行时统一来自 loader。

## Facade 约束

### 无状态模块

- 公开函数返回明确 Promise，并在内部等待 loader。
- 定义加载失败是抛错、空值还是降级；不把 `undefined` 传给第三方调用。
- 只承诺 ZUI 实际需要的稳定表面，不无差别转发第三方全部 API。

### 有状态 DOM 实例

- 异步加载后同时检查模块和实例是否已销毁，再创建第三方对象。
- 分离 ZUI 壳 options 与第三方 options，不把 `className`、容器或内部回调误传。
- 定义加载完成前命令式方法行为，以及更新采用增量调用、重建还是明确不支持。
- `destroy()` 释放第三方实例和附加副作用，再调用 `super.destroy()`。

### Preact/vanilla 双形态

- 只保留一个状态与第三方实例所有者。Preact 为源头时用 `ComponentFromReact` 提供 vanilla；必须增强调用方既有 DOM 时优先由 vanilla `Component` 持有实例。
- 用 ref 和生命周期连接外部实例，卸载时销毁；不在 render 中加载资源或创建实例。
- 只有真实入口存在时才声明 React/Preact export、注册组件或增加 `js.component` contributes。

## Loader、失败与竞态

- 同一目标包内共享一个模块级 `LibLoader<T>`；使用稳定唯一的注册名和明确 `check`。
- 默认不公开 loader，不在 facade 上维护第二份模块缓存。
- 明确 `load()` 默认错误缓存、必需能力的错误传播和 `noCache` 显式重试；不通过循环初始化隐式重试。
- 多实例和并发加载共享资源请求，但每个 facade 只拥有自身第三方实例。
- 加载返回前 destroy 必须阻止迟到初始化；最终 destroy 清理实例、listener、observer、timer、DOM 和资源所有权范围内的副作用。

完整 loader 语义始终读取当前 `ZUI_ROOT` 源码和扩展 standards 的 external-library reference，不复制历史实现。

## 资源路径

- 本地托管：原始资源位于 `TARGET_LIB_ROOT/public/`；生产 `src` 相对 `$.libRoot`，结合解析出的 `PUBLIC_PATH` 与宿主构建结果确定。
- 联合调试：在 `dev.ts` 导入生产入口后，以同一注册名和 `check` 覆盖宿主实际 URL。常见形式为 `/exts/<EXTS_NAME>/<LIB_FOLDER>/public/<path>`，但必须由 resolver 与宿主管线验证；任何字段为空时不写猜测路径。
- 绝对 URL：仅在用户明确接受远程运行时依赖时使用，固定版本并记录可用性、CSP、完整性和离线风险。
- 多文件 JS/CSS 或前置依赖用 `GetLibOptions` 表达，不在组件生命周期手写标签或加载序列。

## 验收矩阵

- 扩展侧：package/exports/files、依赖分类、type-only import、lint、类型、测试和 `git diff --check`。
- 宿主侧：唯一 `EXTS_NAME` 注册、准确 `ZUI_NAME` 选择、联合构建、public 复制结果、dev 地址、HMR 和文档。
- 运行时：首次加载、预载复用、并发/多实例、失败、显式重试、销毁竞态、更新、重复初始化和最终清理。
- 交付：分别说明 `EXT_ROOT` 与 `ZUI_ROOT` 的通过、基线失败、未执行和未验证项。
