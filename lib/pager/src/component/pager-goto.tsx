import {Button} from '@zui/button/src/component/button';
import {formatString} from '@zui/helpers/src/format-string';
import {updatePagerInfo} from '../helpers/update-pager-info';
import {PageLinkCreator, PagerInfo, PagerGotoProps} from '../types';
import {classes} from '@zui/browser-helpers/src/classes';

export function PagerGoto({
    key,
    page,
    type: pagerItemType,
    btnType: type,
    pagerInfo,
    size,
    onClick,
    linkCreator,
    ...btnProps
}: PagerGotoProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    let updatedPage: number;
    let inputValue: number;
    const getValue = (e: Event) => {
        inputValue = Number(e.target?.value) || 1;
        if (inputValue > pagerInfo.pageTotal) {
            return;
        }
        updatedPage = inputValue > pagerInfo.pageTotal ? pagerInfo.pageTotal : inputValue;
        return updatedPage;
    };

    const onUpdatePage = (event: Event) => {
        updatedPage = updatedPage <= pagerInfo.pageTotal ? updatedPage :  pagerInfo.pageTotal;
        const info = updatePagerInfo(pagerInfo, updatedPage);
        btnProps.url = typeof linkCreator === 'function' ? linkCreator(info)  : formatString(linkCreator, info);
        onClick?.call(event.target, event);
    };

    const {className} = btnProps;
    btnProps.className = 'input-group-addon';
    return (
        <div className={classes('input-group', size ? `size-${size}` : '', className)}>
            <input type="text" class="form-control" onInput={getValue} />
            <Button type={type} {...btnProps} onClick={onUpdatePage}/>
        </div>
    );
}
