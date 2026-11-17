import {$, mergeProps, removeUndefinedProps} from '@zui/core';
import {Button} from '@zui/button/react';
import {CommonList} from '@zui/common-list/react';
import {RadioButton} from './radio-button';

import type {ComponentType, RenderableProps} from 'preact';
import type {ButtonProps} from '@zui/button';
import type {Item} from '@zui/common-list';
import type {BtnGroupOptions} from '../types';

export class BtnGroup<T extends BtnGroupOptions<Item, unknown> = BtnGroupOptions> extends CommonList<T> {
    static NAME = 'btn-group';

    /**
     * Root element default tag name, used for DOM rendering.
     */
    static TAG = 'nav';

    static ItemComponents = {
        ...CommonList.ItemComponents,
        default: Button,
        _radio: RadioButton as unknown as ComponentType,
    };

    /**
     * Item default common props, used for rendering for all item types.
     */
    static defaultItemProps: Partial<Item> = {
        component: undefined,
    };

    protected _shareBtnProps?: Partial<ButtonProps>;

    protected _radioItemIndex = 0;

    get name() {
        return this.props.radio ? this.constructor.NAME : super.name;
    }

    protected _handleRadioChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (!input.checked || input.matches(':disabled')) {
            return;
        }
        if (this.props.value !== undefined) {
            // Restore checked even when the caller rejects the proposed value.
            this.forceUpdate();
        }
        (this.props.onChange as BtnGroupOptions['onChange'])?.call(this, input.value, event);
    };

    protected _getComponent(props: RenderableProps<T>) {
        return props.radio && !props.tag && !props.component ? 'div' : super._getComponent(props);
    }

    protected _getProps(props: RenderableProps<T>) {
        const attrs = super._getProps(props);
        if (props.radio) {
            delete attrs.onChange;
            attrs.role ??= 'radiogroup';
        }
        return attrs;
    }

    protected _isBtnType({type}: Item): boolean {
        return type === 'item' || type === 'dropdown';
    }

    protected _getItem(props: RenderableProps<T>, item: Item, index: number): false | Item {
        if (!item) {
            return false;
        }
        if (!item.type) {
            item = $.extend({type: (item.dropdown || item.items) ? 'dropdown' : 'item'}, item);
        }
        let itemProps = super._getItem(props, item, index);
        if (!itemProps) {
            return itemProps;
        }
        if (this._isBtnType(itemProps)) {
            itemProps = mergeProps({}, this._shareBtnProps, itemProps);
            if (props.radio) {
                const {name, id, value, defaultValue, disabled, readonly, required} = props;
                itemProps.type = '_radio';
                itemProps.radioOptions = {
                    name: name || `_btn-group-${this._gid}`,
                    id: this._radioItemIndex++ === 0 && id ? id : `_btn-group-${this._gid}-${encodeURIComponent(itemProps.key!)}`,
                    value,
                    defaultValue,
                    disabled,
                    readonly,
                    required,
                    onChange: this._handleRadioChange,
                };
            }
        }
        return itemProps;
    }

    protected _beforeRender(props: RenderableProps<T>) {
        const {btnProps, btnType, size} = props;

        this._radioItemIndex = 0;
        this._shareBtnProps = mergeProps({}, btnProps, removeUndefinedProps({btnType, size}));
    }
}
