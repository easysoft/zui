import {$} from '@zui/core';
import {Button} from '@zui/button/src/component';
import {List} from '@zui/list/src/component';
import {DropdownButton} from '@zui/dropdown/src/component';

import type {RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ListProps, Item} from '@zui/list';
import type {BtnGroupOptions} from '../types';

function getBtnProps(item: Item, props: ListProps) {
    const {style, rootClass, class: className, class: className2, ...others} = item;
    const {btnProps = {}, btnType} = props as BtnGroupOptions;
    return {
        btnType,
        ...btnProps,
        ...others,
        style: btnProps.style ? $.extend({}, btnProps.style, style) : style,
        className: [className, className2, rootClass, btnProps.className],
        type: '',
    };
}

export class BtnGroup<T extends BtnGroupOptions = BtnGroupOptions> extends List<T> {
    static ItemComponents: typeof List.ItemComponents = {
        ...List.ItemComponents,
        item: [Button, getBtnProps],
        dropdown: [DropdownButton, getBtnProps],
    };

    static NAME = 'btn-group';

    static ITEM_NAME = '';

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        const {size} = props;
        return [super._getClassName(props), size ? `size-${size}` : ''];
    }
}
