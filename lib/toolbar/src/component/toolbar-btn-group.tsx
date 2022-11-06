import {BtnGroup} from '@zui/btn-group/src/component/btn-group';
import {ToolbarBtnGroupProps} from '../types';

export function ToolbarBtnGroup({
    key,
    type: toolbarType,
    btnType: type,
    ...btnGroupProps
}: ToolbarBtnGroupProps) {
    return (
        <BtnGroup type={type} {...btnGroupProps} />
    );
}
