import type {Selector, CopyContents} from '@zui/core';
import type {TooltipOptions} from '@zui/tooltip';

export type CopyBtnOptions = {
    /**
     * 提示方式，可选值为 工具提示（'tooltip'） 或 内容覆盖（'overlay'）
     */
    mode?: 'tooltip' | 'overlay';

    /**
     * 工具提示选项
     */
    tooltipOptions?: Partial<TooltipOptions>;

    /**
     * 内容覆盖时的 CSS 类
     */
    overlayClass?: string;

    /**
     * 复制时的 CSS 类
     */
    copyingClass?: string;

    /**
     * 复制成功后的文本
     */
    copiedText?: string;

    /**
     * 复制成功后的图标
     */
    copiedIcon?: string;

    /**
     * 复制成功后的类
     */
    copiedClass?: string;

    /**
     * 复制成功后的持续时间
     */
    duration?: number;

    /**
     * 复制按钮的目标元素
     */
    target?: Selector;

    /**
     * 复制内容
     */
    content?: CopyContents;

    /**
     * 复制前的回调
     */
    onCopy?: (content: CopyContents | undefined) => (CopyContents | Promise<CopyContents> | void | false);

    /**
     * 复制成功后的回调
     */
    onCopied?: () => void;
};
