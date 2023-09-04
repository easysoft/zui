import {$} from '@zui/core';
import {Button} from '@zui/button/src/component';
import {List} from '@zui/list/src/component';
import {DropdownButton} from '@zui/dropdown/src/component/dropdown-button';

import type {RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {BtnGroupOptions} from '../types';

export class BtnGroup<T extends BtnGroupOptions = BtnGroupOptions> extends List<T> {
    static ItemComponents: typeof List.ItemComponents = {
        ...List.ItemComponents,
        item: [Button, (item, props) => {
            const {style, ...others} = item;
            const {btnProps = {}, btnType} = props as BtnGroupOptions;
            return {
                btnType,
                ...btnProps,
                ...others,
                style: btnProps.style ? $.extend({}, btnProps.style, style) : style,
                type: '',
            };
        }],
        dropdown: [DropdownButton, (item, props) => {
            const {size, btnProps = {}, btnType} = props as BtnGroupOptions;
            return {
                size,
                btnType,
                ...btnProps,
                ...item,
                type: '',
            };
        }],
    };

    static NAME = 'btn-group';

    static ITEM_NAME = '';

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        const {size} = props;
        return [super._getClassName(props), size ? `size-${size}` : ''];
    }
}
