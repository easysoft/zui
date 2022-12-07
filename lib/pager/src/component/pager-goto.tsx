import {Button} from '@zui/button/src/component/button';
import {formatString} from '@zui/helpers/src/format-string';
import {updatePagerInfo} from '../helpers/update-pager-info';
import {PageLinkCreator, PagerInfo, PagerGotoProps, PagerOptions} from '../types';
import {classes} from '@zui/browser-helpers/src/classes';

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
}: PagerGotoProps & {pagerInfo: PagerInfo, linkCreator: PageLinkCreator}) {
    const newBtnProps = {...btnProps};
    let inputValue: number;
    const getValue = (e: Event) => {
        inputValue = Number(e.target?.value) || 1;
        inputValue = inputValue > pagerInfo.pageTotal ? pagerInfo.pageTotal : inputValue;
    };

    const onUpdatePage = (event: Event) => {
        if (!event?.target) {
            return;
        }
        inputValue = inputValue <= pagerInfo.pageTotal ? inputValue :  pagerInfo.pageTotal;
        const info = updatePagerInfo(pagerInfo, inputValue);
        if (onChange && !onChange({info, event})) {
            return;
        }
        event.target.href = newBtnProps.url = typeof linkCreator === 'function' ? linkCreator(info)  : formatString(linkCreator, info);
    };
    const renderInfo = updatePagerInfo(pagerInfo, page || 0);
    newBtnProps.url = typeof linkCreator === 'function' ? linkCreator(renderInfo)  : formatString(linkCreator, renderInfo);

    newBtnProps.className = classes('input-group-addon', newBtnProps.className);
    return (
        <div className={classes('input-group', 'pager-goto-group', size ? `size-${size}` : '')}>
            <input type="number" class="form-control" max={pagerInfo.pageTotal} min="1" onInput={getValue}  />
            <Button type={type} {...newBtnProps} onClick={onUpdatePage}/>
        </div>
    );
}
