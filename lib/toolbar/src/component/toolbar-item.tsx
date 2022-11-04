import {Button} from '@zui/button/src/component/button';
import {ToolbarItemProps} from '../types';

export function ToolbarItem({
    key,
    type: toolbarType,
    btnType: type,
    ...btnProps
}: ToolbarItemProps) {
    return <Button type={type} {...btnProps} />;
}
