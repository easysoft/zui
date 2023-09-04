import type {ListProps} from '@zui/list';
import type {ButtonProps} from '@zui/button';

export interface BtnGroupOptions extends ListProps {
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    btnType?: string;
    btnProps?: Partial<ButtonProps>;
}
