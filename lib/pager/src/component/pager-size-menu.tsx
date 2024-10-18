import {classes} from '@zui/core';
import {DropdownButton} from '@zui/dropdown/src/component';
import {formatString} from '@zui/helpers/src/format-string';
import {PageLinkCreator, PagerInfo, PagerSizeMenuProps} from '../types';
import {Item} from '@zui/common-list/src/types';

export function PagerSizeMenu({
    type: pagerSizeMenuType,
    pagerInfo,
    linkCreator,
    items = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1000, 2000],
    dropdown = {},
    menu,
    itemProps,
    ...dropdownProps
}: PagerSizeMenuProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    dropdown.items = items.map(recPerPage => {
        const info = {...pagerInfo, recPerPage};
        return {
            ...itemProps,
            key: recPerPage,
            text: `${recPerPage}`,
            active: recPerPage === pagerInfo.recPerPage,
            url: linkCreator ? (typeof linkCreator === 'function' ? linkCreator(info)  : formatString(linkCreator, info)) : undefined,
            'z-change-page-size': recPerPage,
        } as unknown as Item;
    }) as Item[];
    const {text = ''} = dropdownProps;
    dropdownProps.text = typeof text === 'function' ? text(pagerInfo) : formatString(text, pagerInfo);
    dropdown.menu = {...menu, ...dropdown.menu, className: classes(dropdown.menu?.className, 'pager-size-menu')} as typeof dropdown.menu;
    return (
        <DropdownButton dropdown={dropdown} {...dropdownProps} />
    );
}
