# ZUI 扩展 helper 规范

## 分类与归属

先判断 helper 是库内私有工具、纯函数/类型、状态类、store/单例，还是浏览器 DOM 模块。不要因为可能复用就放入宿主共享 helper 包；先检查目标消费者、稳定性和发布承诺。

若确需跨扩展包共享，先发现 `EXT_ROOT` 的现有公共 helper 包和真实 `PACKAGE_NAME`。通用纯函数通常接近 `js-lib`，浏览器/DOM/存储集成通常接近 `js-helpers`，最终以当前宿主类型和相似库为准。

## 行为设计

- 纯函数默认无副作用、确定性，不偷偷修改输入；定义空值、非法输入、边界值、locale/timezone 和错误语义。
- 状态对象明确创建者、所有者、初始状态、更新入口、重入、并发、reset/destroy。
- store 明确订阅顺序、持久化后端、序列化格式、版本兼容、损坏数据与失败回退。
- 浏览器模块明确 window/document/storage 不可用时的行为，以及 listener、observer、worker、timer、缓存与 DOM 引用的释放。
- 单例避免不必要的 import-time 副作用。

## 公开 API 与依赖

- 为公共函数、类、options、事件、返回值与非直观错误添加必要 JSDoc。
- 从局部 index 和 package 入口显式导出；不让消费者依赖未承诺深层路径。
- 扩展兄弟包使用真实包名，依赖声明服从 `DEPENDENCY_POLICY`；不要导入宿主 `exts/` 路径。
- package role 和 `zui.contributes` 对应真实导出。
- 私有 helper 不因实现便利被提升为公共 API。

## 计划与验收

修改前计划包含四层上下文、分类、放置位置、两个相似实现、API/类型/错误、状态和数据流、副作用及清理、文件/入口/依赖、文档/dev 需求与宿主验证。

验证正常、空值、边界、非法输入、重入/并发、序列化损坏、浏览器 API 缺失、清理、公共类型解析；优先使用 `EXT_ROOT` 已有测试设施，再做准确 `ZUI_NAME` 的宿主联合构建。
