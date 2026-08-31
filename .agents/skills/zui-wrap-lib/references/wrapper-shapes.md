# UMD 封装形态决策

## 先判断外部 API，再决定 ZUI 形态

包角色、实现架构和目录不是同一个判断。先确认第三方 UMD 暴露什么能力，再选择最小适配层。

| 外部能力 | 常见 ZUI 适配 | 必要实现 | 不要默认添加 |
| --- | --- | --- | --- |
| 纯函数、解析器、格式化器 | 异步 helper/facade | loader、窄类型、公开异步函数 | `Component`、Preact、样式 |
| 挂载到已有元素的有状态实例 | 原生 `Component` DOM 增强器 | loader、types、vanilla、destroy，按需 style | Preact 或声明式注册 |
| 根据 props 生成 ZUI 结构并需要双入口 | Preact + `ComponentFromReact` | component、vanilla、types、ref/reset/destroy | 另一套并行状态源 |
| 全局服务、编辑器管理器或单例 | 状态 helper/controller | loader、所有权、重入、错误、cleanup | 虚假的宿主 DOM 组件 |

`zui.type` 仍按库的真实产出选择：通用函数通常接近 `js-lib`，浏览器/DOM 集成通常接近 `js-helpers`，交互型 UI 通常接近 `js-ui` 或 `component`。最终以当前 `library.md`、构建类型和相似库为准。

## 最小文件矩阵

按需组合，不把下面所有文件都当成模板：

```text
lib/<name>/
  package.json
  tsconfig.json                    # 有 TS/TSX 时
  public/<vendor>/...              # 本地托管的原始 UMD/CSS/license
  src/main.ts
  src/helper/<vendor>-loader.ts    # 私有 LibLoader 单例
  src/types/...                    # 外部模块形状与公开 options/API
  src/vanilla/...                  # 仅命令式组件需要
  src/component/...                # 仅真实 Preact 消费需要
  src/style/...                    # 仅壳层或外部库需要
  README.md                        # 调试页 DOM
  dev.ts                           # 本地 loader 覆盖与交互
  docs/lib/.../index.md            # 仅批准正式文档时
```

生产入口必须能触达 loader 注册和必要样式副作用。私有 loader 不从 `src/main.ts` 导出；只有用户确实需要自行预加载、重试或读取模块时，才设计稳定的公共加载 API。

## 类型策略

按以下优先级选择：

1. 第三方包有与 UMD 全局一致的声明：使用 `import type`，必要时用 `typeof import('<package>')` 描述模块形状。
2. 第三方声明与 UMD 全局形状不同：为全局对象建立适配类型，不为了省代码假装二者相同。
3. 没有可靠声明：只手写 ZUI facade 实际调用到的构造器、方法、事件和选项，避免宽泛 `any`。

若公开 `.d.ts` 会引用第三方包名，把它视为消费者需要解析的依赖并按 library 规范分类；只有完全不会泄漏到公开类型时，才把纯开发期类型来源留在 `devDependencies`。所有第三方实现导入必须是 type-only，运行时统一来自 loader。

## Facade 约束

### 无状态模块

- 公开函数返回明确的 Promise，并在内部 `await loader.load()`。
- 明确加载失败是抛错、返回空值还是降级；不要把 `undefined` 传给第三方调用。
- 不为了暴露第三方全部 API 而无差别转发；只承诺 ZUI 实际需要的稳定表面。

### 有状态 DOM 实例

- 在异步初始化后同时检查模块与 `this.destroyed`，再创建第三方实例。
- 将 ZUI 壳层 options 与第三方 options 分离，不把 `className`、容器或内部回调等字段误传给第三方。
- 定义加载完成前调用方法的行为，以及更新是增量调用、重建还是不支持。
- `destroy()` 先释放第三方实例和附加副作用，再调用 `super.destroy()`。

### Preact/vanilla 双形态

- 只保留一个状态与第三方实例所有者。若 Preact 是源头，使用 `ComponentFromReact` 提供 vanilla；若第三方必须增强调用方已有 DOM，则优先让 vanilla `Component` 持有实例。
- 用 ref 和 Preact 生命周期连接外部实例，卸载时销毁；不要在 render 中加载资源或创建实例。
- 只有真实入口存在时才声明 `./react` export、注册 React component 或增加 `js.component` contributes。

## 资源路径

- 本地托管：把原始产物放在 `lib/<name>/public/`，生产 loader 使用相对于 `$.libRoot` 的 `<publicPath-or-name>/<path>`。
- 本地调试：在 `dev.ts` 导入生产入口后，以相同注册名和 `check` 覆盖 `/lib/<name>/public/<path>`。
- 外部 URL：只有用户明确接受远程运行时依赖时才使用绝对 URL，并记录版本固定、可用性和完整性风险。
- 多文件 JS/CSS 或前置依赖用 `GetLibOptions` 表达，不在组件生命周期中手写标签或加载序列。

loader 的缓存、失败、重试和完整代码范式以 `../../zui-standards/references/external-library.md` 与当前 `@zui/core` 源码为准。
