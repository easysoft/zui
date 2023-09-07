import type {ComponentChildren, HElementProps} from '@zui/core';
import type {ButtonProps} from '@zui/button';
import type {BtnGroupItem} from './btn-group-item';

export interface BtnGroupOptions extends HElementProps {
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    items: BtnGroupItem[] | (() => BtnGroupItem[]);
    type?: string;
    btnType?: string;
    btnProps?: Partial<ButtonProps>;
    getItem?: (item: BtnGroupItem, index: number) => BtnGroupItem | false | undefined;
    itemRender?: (item: BtnGroupItem, index: number) => ComponentChildren;
}
