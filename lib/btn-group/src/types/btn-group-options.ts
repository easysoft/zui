import type {ButtonProps} from '@zui/button';
import type {CommonListProps, Item} from '@zui/common-list';
import type {BtnGroupItem} from './btn-group-item';

export interface BtnGroupOptions<T extends Item = BtnGroupItem, OnChange = (value: string, event: Event) => void> extends CommonListProps<T> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    type?: string;
    btnType?: string;
    btnProps?: Partial<ButtonProps>;
    /** Render native radio inputs with button labels. */
    radio?: boolean;
    /** Form field name in radio mode; list class name otherwise. */
    name?: string;
    /** ID of the first radio input, for an external field label. */
    id?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    onChange?: OnChange;
}
