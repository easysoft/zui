import {Button} from '@zui/button/react';
import {formatString} from '@zui/helpers';
import {updatePagerInfo} from '../helpers/update-pager-info';
import {PageLinkCreator, PagerInfo, PagerGotoProps} from '../types';
import {classes} from '@zui/core';

export function PagerGoto({
    key,
    page,
    type: pagerItemType,
    btnType: type,
    pagerInfo,
    size,
    onClick,
    onChange,
    linkCreator,
    ...btnProps
}: PagerGotoProps & {pagerInfo: PagerInfo; linkCreator: PageLinkCreator}) {
    const newBtnProps = {...btnProps};
    let inputValue = pagerInfo.page;
    const getValue = (e: Event) => {
        const value = Number((e.target as HTMLInputElement)?.value);
        inputValue = Number.isFinite(value) ? Math.max(1, Math.trunc(value)) : 1;
        inputValue = pagerInfo.pageTotal ? Math.min(inputValue, pagerInfo.pageTotal) : 1;
    };

    const onUpdatePage = (event: Event) => {
        if (!event?.target) {
            return;
        }
        if (!pagerInfo.pageTotal) {
            return;
        }
        inputValue = inputValue <= pagerInfo.pageTotal ? inputValue : pagerInfo.pageTotal;
        const info = updatePagerInfo(pagerInfo, inputValue);
        if (onChange && !onChange({info, event})) {
            event.preventDefault();
            return;
        }
        if (linkCreator) {
            newBtnProps.url = typeof linkCreator === 'function' ? linkCreator(info) : formatString(linkCreator, info);
            const target = event.currentTarget as HTMLAnchorElement | null;
            if (target) {
                target.href = newBtnProps.url;
            }
        }
    };
    const renderInfo = updatePagerInfo(pagerInfo, page || 0);
    if (linkCreator) {
        newBtnProps.url = typeof linkCreator === 'function' ? linkCreator(renderInfo) : formatString(linkCreator, renderInfo);
    }

    return (
        <div className={classes('input-group', 'pager-goto-group', size ? `size-${size}` : '')}>
            <input type="number" className="form-control" defaultValue={pagerInfo.page} max={pagerInfo.pageTotal || undefined} min="1" disabled={!pagerInfo.pageTotal} onInput={getValue} />
            <Button type={type} {...newBtnProps} disabled={!pagerInfo.pageTotal || newBtnProps.disabled} onClick={onUpdatePage} />
        </div>
    );
}
