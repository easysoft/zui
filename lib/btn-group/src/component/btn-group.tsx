import {HElement, mergeProps, removeUndefinedProps} from '@zui/core';
import {Button} from '@zui/button/src/component';
import {DropdownButton} from '@zui/dropdown/src/component';

import type {ClassNameLike} from '@zui/core';
import type {RenderableProps, ComponentChildren, ComponentType} from 'preact';
import type {ButtonProps} from '@zui/button';
import type {BtnGroupItem, BtnGroupOptions} from '../types';

export class BtnGroup<T extends BtnGroupOptions = BtnGroupOptions> extends HElement<T> {
    static NAME = 'btn-group';

    static ItemComponents: Record<string, ComponentType> = {
        item: Button,
        dropdown: DropdownButton,
    };

    static defaultProps: Partial<BtnGroupOptions> = {
        component: 'nav',
    };

    protected _shareBtnProps?: Partial<ButtonProps>;

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof BtnGroup;

    protected _getItems(props: RenderableProps<T>): BtnGroupItem[] {
        let {items = []} = props;
        if (typeof items === 'function') {
            items = items.call(this);
        }
        return items;
    }

    protected _renderItem(props: RenderableProps<T>, item: BtnGroupItem, index: number) {
        const {itemRender} = props;
        if (itemRender) {
            return itemRender.call(this, item, index);
        }
        const btnProps = mergeProps({key: index}, this._shareBtnProps, item);
        const type = btnProps.type as string || ((btnProps.dropdown || btnProps.items) ? 'dropdown' : 'item');
        const ComponentName = (btnProps.component || this.constructor.ItemComponents[type]) as ComponentType;
        return <ComponentName {...btnProps}/>;
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        const {btnProps, btnType, size} = props;

        this._shareBtnProps = mergeProps({}, btnProps, removeUndefinedProps({btnType, size}));
    }

    protected _getChildren(props: RenderableProps<T>): ComponentChildren {
        const {getItem} = props;
        return this._getItems(props).map((item, index) => {
            const finalItem = getItem?.call(this, item, index) ?? item;
            if (finalItem === false) {
                return null;
            }
            return this._renderItem(props, finalItem, index);
        });
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return [this.constructor.NAME, props.className];
    }
}
