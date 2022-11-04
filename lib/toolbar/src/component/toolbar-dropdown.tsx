import {Button} from '@zui/button/src/component/button';
import {DropdownTrigger} from '@zui/dropdown/src/component/dropdown-trigger';
import {ToolbarDropdownProps} from '../types';

export function ToolbarDropdown({
    key,
    type: toolbarType,
    btnType: type,
    dropdown,
    ...btnProps
}: ToolbarDropdownProps) {
    return (
        <DropdownTrigger {...dropdown}>
            <Button type={type} caret {...btnProps} />
        </DropdownTrigger>
    );
}
