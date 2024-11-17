import {Button} from '@zui/button/src/component/button';
import {formatString} from '@zui/helpers/src/format-string';
import {updatePagerInfo} from '../helpers/update-pager-info';
import {PageLinkCreator, PagerInfo, PagerLinkProps} from '../types';

export function PagerLink({
    key,
    type: pagerItemType,
    btnType: type,
    page,
    format,
    pagerInfo,
    linkCreator,
    ...btnProps
}: PagerLinkProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    const info = updatePagerInfo(pagerInfo, page);
    if (btnProps.text === undefined && !btnProps.icon && format) {
        btnProps.text = typeof format === 'function' ? format(info) : formatString(format, info);
    }
    if (btnProps.url === undefined && linkCreator) {
        btnProps.url = typeof linkCreator === 'function' ? linkCreator(info)  : formatString(linkCreator, info);
    }
    if (btnProps.disabled === undefined) {
        btnProps.disabled = page !== undefined && info.page === pagerInfo.page;
    }
    return <Button type={type} z-go-to-page={info.page} {...btnProps} />;
}
