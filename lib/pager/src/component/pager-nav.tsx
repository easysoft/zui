import {Button} from '@zui/button/src/component/button';
import {ComponentChildren} from 'preact';
import {PageLinkCreator, PagerInfo, PagerNavProps} from '../types';
import {formatString} from '@zui/helpers/src/format-string';
import {updatePagerInfo} from '../helpers/update-pager-info';

export function PagerNav({
    key,
    type: pagerItemType,
    btnType: type,
    count = 12,
    pagerInfo,
    onClick,
    linkCreator,
    ...btnProps
}: PagerNavProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    if (!pagerInfo.pageTotal) {
        return;
    }
    const newBtnProps = {...btnProps};

    const onClickItem = (event: Event) => {
        if (!event?.target) {
            return;
        }
        const pagerElements = event.target.closest('.pager').querySelectorAll('.pager-nav');
        pagerElements.forEach(element => {
            element.classList.remove('active');
        });
        event.target.classList.add('active');
        onClick?.call(event.target, event);
    };

    const createEllipsis = () => {
        newBtnProps.text = '';
        newBtnProps.icon = 'icon-ellipsis-h';
        newBtnProps.disabled = true;
        return (<Button type={type} {...newBtnProps} />);
    };

    const createItem = (current: number, total: number) => {
        const elements: ComponentChildren[] = [];
        for (let i = current; i <= total; i++ ) {
            newBtnProps.text = i;
            delete newBtnProps.icon;
            newBtnProps.disabled = false;
            const info = updatePagerInfo(pagerInfo, i);
            if (linkCreator) {     
                newBtnProps.url = typeof linkCreator === 'function' ? linkCreator(info)  : formatString(linkCreator, info);
            }
            elements.push(<Button type={type} {...newBtnProps} onClick={onClickItem} />);
        }
        return elements;
    };

    let resultElements: ComponentChildren[] = [];
    resultElements = [...createItem(1,  1)];
    if (pagerInfo.pageTotal <= 1) {
        return resultElements;
    }
    if (pagerInfo.pageTotal <= count) {
        resultElements = [...resultElements, ...createItem(2,  pagerInfo.pageTotal)];
    } else if (pagerInfo.page < (count - 2)) {
        resultElements = [...resultElements, ...createItem(2,  count - 2), createEllipsis(), ...createItem(pagerInfo.pageTotal,  pagerInfo.pageTotal)];
    } else if (pagerInfo.page > (pagerInfo.pageTotal - count + 3)) {
        resultElements = [...resultElements, createEllipsis(), ...createItem((pagerInfo.pageTotal - count + 3), pagerInfo.pageTotal)];
    } else {
        resultElements = [...resultElements, createEllipsis(), ...createItem(pagerInfo.page - Math.ceil((count - 4) / 2), pagerInfo.page + Math.floor((count - 4) / 2)), createEllipsis(), ...createItem(pagerInfo.pageTotal,  pagerInfo.pageTotal)];
    }
    return resultElements;
}

