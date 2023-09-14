import type {ClassNameLike, CustomContentType, IconType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ToolbarSetting} from '@zui/toolbar';
import type {AvatarOptions} from '@zui/avatar';
import type {ListItemsSetting, ListProps} from '@zui/list';

export interface CardProps extends Item {
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    actions?: ToolbarSetting<[CardProps]>;
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
    footActions?: ToolbarSetting<[CardProps]>;
    items?: ListItemsSetting | ListProps;
    footer?: CustomContentType;
    footerClass?: ClassNameLike;
}
