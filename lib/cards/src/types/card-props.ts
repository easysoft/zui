import type {ClassNameLike, CustomContentType, IconType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ToolbarOptions, ToolbarItemOptions} from '@zui/toolbar';
import type {AvatarOptions} from '@zui/avatar';
import type {ListItemsSetting, ListProps} from '@zui/list';

export interface CardProps extends Item {
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    actions?: ToolbarItemOptions[] | ToolbarOptions | ((col: CardProps) => ToolbarItemOptions[] | ToolbarOptions);
    avatar?: AvatarOptions | ((item: Item) => AvatarOptions);
    icon?: IconType;
    prefix?: CustomContentType;
    prefixClass?: ClassNameLike;
    title?: CustomContentType;
    titleUrl?: string;
    titleAttrs?: Record<string, string>;
    titleClass?: ClassNameLike;
    suffix?: CustomContentType;
    suffixClass?: ClassNameLike;
    heading?: CustomContentType;
    headingClass?: ClassNameLike;
    subtitle?: CustomContentType;
    subtitleClass?: ClassNameLike;
    content?: CustomContentType;
    contentClass?: ClassNameLike;
    footActions?: ToolbarItemOptions[] | ToolbarOptions | ((col: CardProps) => ToolbarItemOptions[] | ToolbarOptions);
    items?: ListItemsSetting | ListProps;
    footer?: CustomContentType;
    footerClass?: ClassNameLike;
}
