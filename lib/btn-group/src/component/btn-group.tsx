import {$, mergeProps, removeUndefinedProps} from '@zui/core';
import {Button} from '@zui/button/src/component';
import {DropdownButton} from '@zui/dropdown/src/component';
import {CommonList} from '@zui/common-list/src/component';

import type {RenderableProps} from 'preact';
import type {ButtonProps} from '@zui/button';
import type {Item} from '@zui/common-list';
import type {BtnGroupOptions} from '../types';

export class BtnGroup<T extends BtnGroupOptions = BtnGroupOptions> extends CommonList<T> {
    static NAME = 'btn-group';

    /**
     * Root element default tag name, used for DOM rendering.
     */
    static TAG = 'nav';

    static ItemComponents = {
        ...CommonList.ItemComponents,
        default: Button,
        dropdown: DropdownButton,
    };

    protected _shareBtnProps?: Partial<ButtonProps>;

    protected _isBtnType(item: Item): boolean {
        return item.type === 'button' || item.type === 'dropdown';
    }

    protected _getItem(props: RenderableProps<T>, item: Item, index: number): false | Item {
        if (!item.type && (item.dropdown || item.items)) {
            item = $.extend({type: 'dropdown'}, item);
        }
        const itemProps = super._getItem(props, item, index);
        if (!itemProps) {
            return itemProps;
        }
        if (this._isBtnType(item)) {
            return mergeProps({}, this._shareBtnProps, itemProps);
        }
        return itemProps;
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        const {btnProps, btnType, size} = props;

        this._shareBtnProps = mergeProps({}, btnProps, removeUndefinedProps({btnType, size}));
    }
}
