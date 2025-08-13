import type {JSX, ComponentChildren} from 'preact';
import type {IconType, HElementProps, ClassNameLike} from '@zui/core';

/**
 * 按钮组件的属性接口
 * 继承自 HElementProps
 */
export interface ButtonProps extends HElementProps {
    /** 按钮类型：primary（主要）、secondary（次要）等 */
    type?: string;
    /** 按钮的 HTML 类型：button、submit、reset 或自定义类型 */
    btnType?: 'button' | 'submit' | 'reset' | (string & {});
    /** 按钮尺寸：xs（极小）、sm（小）、md（中）、lg（大）、xl（特大） */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    /** 点击事件处理函数 */
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
    /** 按钮链接地址 */
    url?: string;
    /** 链接打开方式（如 _blank） */
    target?: string;
    /** 是否禁用按钮 */
    disabled?: boolean;
    /** 是否圆角或自定义圆角值 */
    rounded?: boolean | string;
    /** 是否处于激活状态 */
    active?: boolean;
    /** 按钮图标 */
    icon?: IconType;
    /** 图标的自定义类名 */
    iconClass?: ClassNameLike;
    /** 按钮文本内容 */
    text?: ComponentChildren;
    /** 文本的自定义类名 */
    textClass?: ClassNameLike;
    /** 是否为方形按钮 */
    square?: boolean;
    /** 按钮尾部图标 */
    trailingIcon?: IconType;
    /** 尾部图标的自定义类名 */
    trailingIconClass?: ClassNameLike;
    /** 下拉箭头方向：上、下、左、右，或布尔值 */
    caret?: 'up' | 'down' | 'left' | 'right' | boolean;
    /** 按钮提示文本 */
    hint?: string;
    /** 是否处于加载状态 */
    loading?: boolean;
    /** 加载状态下的图标 */
    loadingIcon?: IconType;
    /** 加载状态下的文本 */
    loadingText?: string;
    /** 按钮命令 */
    command?: string;
}
