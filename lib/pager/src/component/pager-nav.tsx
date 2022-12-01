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
    linkCreator,
    ...btnProps
}: PagerNavProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    if (pagerInfo.pageTotal) {
        const appendItem = (current: number, total: number) => {
            if (!current) {
                btnProps.text = '';
                btnProps.icon = 'icon-ellipsis-h';
                btnProps.disabled = true;
                return (<Button type={type} {...btnProps} />);
            } else {
                const elements: ComponentChildren[] = [];
                for (let i = current; i <= total; i++ ) {
                    btnProps.text = i;
                    delete btnProps.icon;
                    btnProps.disabled = false;
                    const info = updatePagerInfo(pagerInfo, i);
                    if (linkCreator) {     
                        btnProps.url = typeof linkCreator === 'function' ? linkCreator(info)  : formatString(linkCreator, info);
                    }
                    elements.push(<Button type={type} {...btnProps} />);
                }
                return elements;
            }
        };

        const updateNav = () => {
            const resultElements: ComponentChildren[] = [];
            resultElements.push(appendItem(1,  1));
            if (pagerInfo.pageTotal > 1) {
                if (pagerInfo.pageTotal <= count) {
                    resultElements.push(appendItem(2,  pagerInfo.pageTotal));
                } else if (pagerInfo.page < (count - 2)) {
                    resultElements.push(appendItem(2,  count - 2));
                    resultElements.push(appendItem(0,  0));
                    resultElements.push(appendItem(pagerInfo.pageTotal,  pagerInfo.pageTotal));
                } else if (pagerInfo.page > (pagerInfo.pageTotal - count + 3)) {
                    resultElements.push(appendItem(0,  0));
                    resultElements.push(appendItem((pagerInfo.pageTotal - count + 3), pagerInfo.pageTotal));
                } else {
                    resultElements.push(appendItem(0,  0));
                    resultElements.push(appendItem(pagerInfo.page - Math.ceil((count - 4) / 2), pagerInfo.page + Math.floor((count - 4) / 2)));
                    resultElements.push(appendItem(0,  0));
                    resultElements.push(appendItem(pagerInfo.pageTotal,  pagerInfo.pageTotal));
                }
            }
            return resultElements;
        };
        return updateNav();
    }
   
}

