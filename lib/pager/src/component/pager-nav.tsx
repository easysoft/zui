import {Button} from '@zui/button/src/component/button';
import {PageLinkCreator, PagerInfo, PagerNavProps} from '../types';

export function PagerNav({
    key,
    type: pagerItemType,
    btnType: type,
    count,
    pagerInfo,
    linkCreator,
    ...btnProps
}: PagerNavProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    return <Button type={type} {...btnProps} />;
}
