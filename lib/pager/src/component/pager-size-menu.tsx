import {classes} from '@zui/core';
import {ToolbarDropdown} from '@zui/toolbar/src/component';
import {formatString} from '@zui/helpers/src/format-string';
import {PageLinkCreator, PagerInfo, PagerSizeMenuProps} from '../types';

export function PagerSizeMenu({
    type: pagerSizeMenuType,
    pagerInfo,
    linkCreator,
    items = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1000, 2000],
    dropdown = {},
    itemProps,
    ...dropdownProps
}: PagerSizeMenuProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    dropdown.items = dropdown.items ?? items.map(recPerPage => {
        const info = {...pagerInfo, recPerPage};
        return {
            ...itemProps,
            text: `${recPerPage}`,
            active: recPerPage === pagerInfo.recPerPage,
            url: typeof linkCreator === 'function' ? linkCreator(info)  : formatString(linkCreator, info),
        };
    });
    const {text = ''} = dropdownProps;
    dropdownProps.text = typeof text === 'function' ? text(pagerInfo) : formatString(text, pagerInfo);
    dropdown.menu = {...dropdown.menu, className: classes(dropdown.menu?.className, 'pager-size-menu')} as typeof dropdown.menu;
    return (
        <ToolbarDropdown type="dropdown" dropdown={dropdown} {...dropdownProps} />
    );
}
