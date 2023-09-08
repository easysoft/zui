import type {ButtonProps} from '@zui/button';
import type {CommonListProps, Item} from '@zui/common-list';
import type {BtnGroupItem} from './btn-group-item';

export interface BtnGroupOptions<T extends Item = BtnGroupItem> extends CommonListProps<T> {
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    type?: string;
    btnType?: string;
    btnProps?: Partial<ButtonProps>;
}
