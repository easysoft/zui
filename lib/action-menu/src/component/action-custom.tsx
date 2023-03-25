import {CustomRender} from '@zui/com-helpers/src/helpers/custom-render';
import {ActionCustomProps} from '../types/action-custom-props';

export function ActionCustom({type, ...props}: ActionCustomProps) {
    return <CustomRender {...props} />;
}
