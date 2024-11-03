import type {JSX, ComponentType} from 'preact';
import type {ClassNameLike, CustomContentType, IconType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {AvatarOptions} from '@zui/avatar';
import type {CheckboxProps, CheckedType} from '@zui/checkbox';
import type {ToolbarSetting} from '@zui/toolbar';

export interface ListitemProps extends Item {
    innerComponent?: ComponentType | keyof JSX.IntrinsicElements;
    innerClass?: ClassNameLike;
    innerAttrs?: Record<string, unknown>;
    multiline?: boolean;
    checked?: CheckedType;
    checkbox?: CheckboxProps;
    disabled?: boolean;
    active?: boolean;
    divider?: boolean;
    toggleIcon?: CustomContentType;
    icon?: IconType;
    iconClass?: ClassNameLike;
    selected?: boolean;
    avatar?: AvatarOptions | ((item: Item) => AvatarOptions);
    leading?: CustomContentType;
    leadingClass?: ClassNameLike;
    url?: string;
    target?: string;
    text?: CustomContentType;
    textClass?: ClassNameLike;
    title?: CustomContentType;
    titleClass?: ClassNameLike;
    titleAttrs?: Record<string, unknown>;
    subtitle?: CustomContentType;
    subtitleClass?: ClassNameLike;
    trailing?: CustomContentType;
    trailingClass?: ClassNameLike;
    trailingIcon?: IconType;
    trailingIconClass?: ClassNameLike;
    actions?: ToolbarSetting<[Item]>;
    contentClass?: ClassNameLike;
    content?: CustomContentType;
    contentAttrs?: Record<string, unknown>;
    hint?: string;
    command?: string;
}
