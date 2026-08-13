# ZUI 扩展库开发调试页规范

## 职责与宿主

目标调试页源文件位于 `TARGET_LIB_ROOT`，常见为 `README.md` 或 `dev.md` 加 `dev.ts`；渲染和 HMR 由 `ZUI_ROOT` 的扩展开发服务器提供。

读取宿主 dev 管线，确认页面内容优先级、入口回退、URL 命名、`zui-dev` API、`@/` 资源解析和 HMR 事件。不要直接照搬内置库的 `pnpm dev` 或 `/lib/<name>/public/...` 路径。

## Markdown 页面

- 保留目标项目既有的 `README.md` / `dev.md` 选择，不无理由迁移。
- 使用宿主当前支持的 example fence 和容器 utility 语法。
- 通过宿主支持的库内资源方式引用资源；扩展 public URL 需使用真实 `EXTS_NAME` / `LIB_FOLDER` 验证。
- 用唯一 ID 或 data 属性连接脚本，覆盖默认、主要变体、交互、边界和无障碍，而非复制静态外观。
- 调试页不是正式文档，不在这里维护完整 API 参考。

## dev.ts 生命周期

先导入真实演示依赖和目标入口。DOM 首次创建及 Markdown HMR 重建后都需要的实例化和绑定放入宿主对应的 page-update 生命周期；真正全局的一次性设置才放入 load 生命周期或安全模块顶层。

避免重复全局监听、冲突 ID、不可清理的 timer/observer/worker 和旧 DOM 引用。组件可销毁时，在重新实例化或页面重建前清理旧实例。开发 loader 覆盖使用同一注册名和 `check`，资源路径通常是：

```text
/exts/<EXTS_NAME>/<LIB_FOLDER>/public/<asset>
```

该形式必须由当前宿主验证，不能固定某个扩展组。

## 场景与验证

按组件能力选择：HTML/Preact/vanilla/自动创建、controlled/uncontrolled、事件与方法、toggle、disabled/loading/empty/error、长内容、大数据、失败重试、重复操作、销毁重建、键盘焦点、ARIA 和语言切换。

先静态检查 fence、selector、import 和清理，再在唯一 `ZUI_ROOT + EXTS_NAME` 中运行实际扩展 dev script，通常为：

```sh
pnpm dev:exts -- --lib=buildIn,<EXTS_NAME>
```

从宿主导航确定目标 URL；短名冲突时使用宿主生成的安全 scoped URL。验证首次加载、Markdown HMR、交互和控制台后结束服务，不遗留后台进程。
