import {CustomRender} from '@zui/core';
import {ActionCustomProps} from '../types/action-custom-props';

export function ActionCustom({type, ...props}: ActionCustomProps) {
    return <CustomRender {...props} />;
}
