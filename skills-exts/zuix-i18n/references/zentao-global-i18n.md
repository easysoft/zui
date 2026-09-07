# 禅道全局 i18n 模式参考

本参考整理禅道扩展库基于 `@zui/core` 的 `i18n.addLang` / `i18n.getLang` 全局注册约定，供其他扩展项目借鉴。适用于已采用全局注册，或跨组件/helper 共享文案且选择全局注册的库。组件私有映射、已有语言集合、namespace 和文件结构继续服从目标项目契约，不因采用本技能而迁移。

## 命名空间与语言文件

- 禅道采用与包公开标识对齐的 camelCase namespace，例如 `@zentao/form-designer` 使用 `formDesigner`。其他项目先核对真实包标识、已有契约及与内置库和其他扩展的冲突，再决定名称，不仅凭目录名转换，也不直接复用示例 namespace。
- 翻译键按功能分组，用小驼峰和 `.` 分层，如 `controls.text`、`fieldPanel.title`；优先复用语义相同的键。
- 本模式使用 `src/i18n/{index,zh-cn,zh-tw,en}.ts`，对应语言码 `zh_cn`、`zh_tw`、`en`。其他项目可以沿用自己的文件名和语言集合，只需明确注册映射。
- 各语言文件默认导出不含 namespace 的翻译对象；嵌套结构、叶子键和占位符一致。按目标类型约定使用基础语言对象的 `typeof`、`satisfies` 或共享类型约束其他语言。

`src/i18n/index.ts` 的注册与 helper 示例；采用时替换 namespace，并核实当前宿主 API：

```ts
import {i18n} from '@zui/core';
import zh_cn from './zh-cn';
import zh_tw from './zh-tw';
import en from './en';

i18n.addLang({
    zh_cn: {formDesigner: zh_cn},
    zh_tw: {formDesigner: zh_tw},
    en: {formDesigner: en},
});

export function getLang(key: string, args?: Parameters<typeof i18n.getLang>[1]) {
    return i18n.getLang(`formDesigner.${key}`, args);
}
```

## 文案与调用

只替换用户可见文案，包括可见错误、schema 的 title/label/hint。字段 name/key、CSS class、widget/组件名、icon、URL、事件名、注释和开发日志保持原样。

基础文案统一维护在语言资源中，组件实现只传翻译键，有插值时才传对象参数：

```ts
getLang('toolbar.delete');
getLang('error.notFound', {name});
```

不在调用处传入默认文案，也不通过 `||`、`??` 等方式拼接中文回退。缺少语言或键时，先补齐语言资源、修复注册路径；确需回退时在 i18n 配置或库级 helper 中统一处理，并按目标项目基础语言和当前宿主能力验证。上面的最小 helper 只转发查询，不保证缺失键自动回退到中文。

留给分页器或 FormBuilder 等下游组件处理的 `{recTotal}`、`{title}` 等占位符原样保留；调用 `getLang` 时不传插值参数，避免提前消费。

返回类型以实际 helper 契约为准。消费方需要 `string` 时，从语言覆盖和集中处理确定保证方式，不给所有调用统一添加非空断言来掩盖缺失键或接线问题。

## 注册顺序与动态语言

禅道全局模式在 `src/main.ts` 首条语句写 `import './i18n';`，先于会触发文案求值的导出或导入。其他直接消费入口也须保证语言注册先于相关模块级常量求值；只创建语言文件不算接入完成。

模块级数组、配置和常量中的翻译只求值一次；要求运行时切换语言时，将对应数据改为按需求值的函数或随渲染重新求值，并验证实际更新路径。不要据此承诺全局 helper 支持组件实例的语言或 i18n override；这些能力须核对当前消费方式。

## 增量补全

- 保留现有 namespace、分组和调用契约；按各语言现有键的并集补齐缺失项，结合源码原文、已有翻译和调用场景确定文案。
- 疑似无用键只在报告中列出，补全过程不自动删除；清理键需要明确范围和引用依据。
- 按本次修改验证语言键集与占位符、源码键引用、调用处无重复文案和真实入口加载顺序；改变语言切换、覆盖或集中回退时验证相应消费路径。其余检查与交付沿用 [zuix-i18n](../SKILL.md)，不另设工作流或确认门禁。
