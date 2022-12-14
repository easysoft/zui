import {BtnGroup} from '@zui/btn-group/src/component/btn-group';
import {MessagerActionsProps} from '../types';

export default function MessagerActions({
    ...btnGroupProps
}: MessagerActionsProps) {
    return (
        <BtnGroup {...btnGroupProps} />
    );
}
