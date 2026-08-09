import {Button} from '@zui/button/react';
import {ComponentChildren} from 'preact';
import {PageLinkCreator, PagerInfo, PagerNavProps} from '../types';
import {formatString} from '@zui/helpers';
import {updatePagerInfo} from '../helpers/update-pager-info';

export function PagerNav({
    type: pagerItemType,
    btnType: type,
    count = 12,
    pagerInfo,
    linkCreator,
    ...btnProps
}: PagerNavProps & {pagerInfo: PagerInfo; linkCreator: PageLinkCreator}) {
    if (!pagerInfo.pageTotal) {
        return;
    }
    const newBtnProps = {...btnProps, square: true};
    const finalCount = Math.max(5, Math.floor(count));
    let ellipsisIndex = 0;

    const createEllipsis = () => {
        newBtnProps.text = '';
        newBtnProps.icon = 'icon-ellipsis-h';
        newBtnProps.disabled = true;
        return (<Button key={`ellipsis-${ellipsisIndex++}`} type={type} {...newBtnProps} />);
    };

    const createItem = (current: number, total: number) => {
        const elements: ComponentChildren[] = [];
        for (let i = current; i <= total; i++) {
            newBtnProps.text = i;
            delete newBtnProps.icon;
            newBtnProps.disabled = false;
            const info = updatePagerInfo(pagerInfo, i);
            if (linkCreator) {
                newBtnProps.url = typeof linkCreator === 'function' ? linkCreator(info) : formatString(linkCreator, info);
            }
            elements.push(<Button key={i} type={type} {...newBtnProps} z-go-to-page={info.page} active={info.page === pagerInfo.page} disabled={info.page === pagerInfo.page} />);
        }
        return elements;
    };

    let resultElements: ComponentChildren[] = [];
    resultElements = [...createItem(1, 1)];
    if (pagerInfo.pageTotal <= 1) {
        return resultElements;
    }
    if (pagerInfo.pageTotal <= finalCount) {
        resultElements = [...resultElements, ...createItem(2, pagerInfo.pageTotal)];
    } else if (pagerInfo.page < (finalCount - 2)) {
        resultElements = [...resultElements, ...createItem(2, finalCount - 2), createEllipsis(), ...createItem(pagerInfo.pageTotal, pagerInfo.pageTotal)];
    } else if (pagerInfo.page > (pagerInfo.pageTotal - finalCount + 3)) {
        resultElements = [...resultElements, createEllipsis(), ...createItem((pagerInfo.pageTotal - finalCount + 3), pagerInfo.pageTotal)];
    } else {
        resultElements = [...resultElements, createEllipsis(), ...createItem(pagerInfo.page - Math.ceil((finalCount - 4) / 2), pagerInfo.page + Math.floor((finalCount - 4) / 2)), createEllipsis(), ...createItem(pagerInfo.pageTotal, pagerInfo.pageTotal)];
    }
    return resultElements;
}
