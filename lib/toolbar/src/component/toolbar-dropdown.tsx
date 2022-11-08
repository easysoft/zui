import {DropdownButton} from '@zui/dropdown/src/component';
import {ToolbarDropdownProps} from '../types';

export function ToolbarDropdown({
    key,
    type: toolbarType,
    btnType: type,
    ...dropdownBtnProps
}: ToolbarDropdownProps) {
    return (
        <DropdownButton type={type} {...dropdownBtnProps} />
    );
}
