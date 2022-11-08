import {ActionBasic} from '@zui/action-menu/src/component/action-basic';
import {formatString} from '@zui/helpers';
import {updatePagerInfo} from '../helpers/update-pager-info';
import {PagerInfo, PagerInfoProps} from '../types';

export function PagerInfoItem({
    key,
    type: pagerItemType,
    page,
    text = '',
    pagerInfo,
    children,
    ...props
}: PagerInfoProps & {pagerInfo: PagerInfo}) {
    const info = updatePagerInfo(pagerInfo, page);
    text = typeof text === 'function' ? text(info) : formatString(text, pagerInfo);
    return (<ActionBasic {...props}>
        {children}
        {text}
    </ActionBasic>);
}
