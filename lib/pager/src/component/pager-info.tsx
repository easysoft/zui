import {HElement} from '@zui/core';
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
    text = typeof text === 'function' ? text(info) : formatString(text, info);
    return (<HElement {...props}>
        {children}
        {text}
    </HElement>);
}
