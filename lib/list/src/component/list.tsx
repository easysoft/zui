import {$, HElement, classes} from '@zui/core';
import {ListItem} from './list-item';

import type {ComponentChildren, ComponentType, JSX, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {ListProps, Item} from '../types';

export class List<P extends ListProps = ListProps, S = {}> extends HElement<P, S> {
    static ItemComponents: Record<string, ComponentType<{}>> = {
        item: ListItem,
        element: HElement,
    };

    static NAME = 'list';

    static ITEM_NAME = 'item';

    static ROOT_TAG: keyof JSX.IntrinsicElements = 'div';

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof List;

    protected _items?: Item[];

    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    get name() {
        return this.props.name || this.constructor.NAME;
    }

    get itemName() {
        return this.props.itemName || this.constructor.ITEM_NAME;
    }

    componentDidMount() {
        this.afterRender(true);
    }

    componentDidUpdate(): void {
        this.afterRender(false);
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _renderItem(props: RenderableProps<P>, item: Item, index: number): ComponentChildren {
        const {itemRender} = props;
        if (itemRender) {
            return itemRender.call(this, item, index);
        }
        const {type = 'item'} = item;
        const ItemComponent = (this.constructor as typeof List).ItemComponents[type] || ListItem;
        return <ItemComponent {...item} />;
    }

    protected _getItem(props: RenderableProps<P>, item: Item, index: number): Item {
        const {itemProps, itemPropsMap = {}, getItem} = props;
        const {type = 'item'} = item;
        item = $.extend(
            {key: index, type},
            itemProps,
            itemPropsMap[type],
            item,
            {
                className: classes(`${this.itemName} ${this.name}-${type}`, itemProps?.className, itemPropsMap[type]?.className, item.className),
                'zui-list-item': index,
            },
        );
        return getItem ? getItem.call(this, item, index) : item;
    }

    protected _handleClick(event: MouseEvent) {
        const {onClickItem} = this.props;
        if (!onClickItem) {
            return;
        }
        const $item = $(event.target as HTMLElement).closest('[zui-list-item]');
        const index = +$item.attr('zui-list-item')!;
        const item = this._items?.[index];
        if (!item) {
            return;
        }
        onClickItem.call(this, {item, event, index});
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return [props.className, this.name];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        return {
            onClick: this._handleClick,
            ...super._getProps(props),
        };
    }

    protected _getItems(props: RenderableProps<P>): Item[] {
        const {items = []} = props;
        this._items = typeof items === 'function' ? items.call(this) : items;
        return this._items;
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const items = this._getItems(props);
        const children = items.map((item, index) => this._renderItem(props, this._getItem(props, item, index), index));
        if (props.children) {
            children.push(props.children);
        }
        return children;
    }

    protected _getComponent(props: RenderableProps<P>): ComponentType | keyof JSX.IntrinsicElements {
        return props.component || (this.constructor as typeof List).ROOT_TAG;
    }
}
