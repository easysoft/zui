import {$, HElement, classes, fetchData, mergeProps, removeUndefinedProps} from '@zui/core';
import {CommonList} from '@zui/common-list/src/component';
import {Listitem} from './listitem';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ListProps, ListState, ListItemsSetting, ListItemsFetcher} from '../types';

export class List<P extends ListProps = ListProps, S extends ListState = ListState> extends CommonList<P, S> {
    static ItemComponents: typeof CommonList.ItemComponents  = {
        ...CommonList.ItemComponents,
        default: HElement,
        item: Listitem,
        heading: Listitem,
    };

    static NAME = 'list';

    protected _loadedSetting?: ListItemsSetting;

    protected declare _hasIcons: boolean;

    protected declare _hasCheckbox: boolean;

    constructor(props: P) {
        super(props);
        this.state = {} as S;
    }

    componentDidMount() {
        this._afterRender(true);
        this.tryLoad();
    }

    componentDidUpdate(): void {
        this._afterRender(false);
        this.tryLoad();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
    }

    load(): void {
        const {items, onLoad, onLoadFail} = this.props;
        this._loadedSetting = items;
        this.setState({loading: true, items: []}, async () => {
            const newState = {loading: false} as Partial<S>;
            try {
                const newItems = await fetchData(items as ListItemsFetcher, [this], {throws: true});
                newState.items = onLoad?.call(this, newItems) || newItems;
            } catch (error) {
                newState.loadFailed = (typeof onLoadFail === 'function' ? (onLoadFail as (error: Error) => CustomContentType | undefined).call(this, error as Error) : onLoadFail) || String(error);
            }
            this.setState(newState);
        });
    }

    tryLoad(): void {
        const {loading} = this.state;
        const {items} = this.props;
        if (loading || !items || Array.isArray(items) || items === this._loadedSetting) {
            return;
        }
        this.load();
    }

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _getItems(props: RenderableProps<P>): Item[] {
        const {items} = props;
        const {items: stateItems} = this.state;
        return stateItems || (Array.isArray(items) ? items : []);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _getRenderedItem(props: RenderableProps<P>, renderedItem: Item, index: number): Item {
        const {divider, hover, multiline} = props;
        renderedItem = mergeProps({}, removeUndefinedProps({
            divider,
            hover,
            multiline,
        }), renderedItem);

        const {itemName, name} = this;
        renderedItem.innerClass = [itemName ? `${itemName}-inner${name ? ` ${name}-${renderedItem.type}-inner` : ''}` : '', renderedItem.innerClass];

        if (renderedItem.type === 'item') {
            const {checkbox} = props;
            if (checkbox) {
                if (renderedItem.checked === undefined) {
                    renderedItem.checked = false;
                }
                if (typeof checkbox === 'object') {
                    renderedItem.checkbox = renderedItem.checkbox ? $.extend({}, checkbox, renderedItem.checkbox) : checkbox;
                }
            }
        }

        if (renderedItem.icon) {
            this._hasIcons = true;
        }
        if (renderedItem.checked !== undefined) {
            this._hasCheckbox = true;
        }

        return renderedItem;
    }

    protected _getItem(props: RenderableProps<P>, item: Item, index: number): Item | false {
        const renderedItem = super._getItem(props, item, index);
        if (!renderedItem) {
            return renderedItem;
        }
        return this._getRenderedItem(props, renderedItem, index);
    }

    protected _renderItem(props: RenderableProps<P>, item: Item, index: number): ComponentChildren {
        if (item.type === 'item' && this._hasIcons && item.icon === undefined) {
            item.icon = 'EMPTY';
        }
        return super._renderItem(props, item, index);
    }


    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        const {loading, loadFailed} = this.state;
        return [super._getClassName(props), loading ? 'loading' : (loadFailed ? 'is-load-failed' : '')];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {className, ...others} = super._getProps(props);
        return {
            ...others,
            onClick: this._handleClick,
            className: classes(className as ClassNameLike, this._hasIcons ? 'has-icons' : '', this._hasCheckbox ? 'has-checkbox' : ''),
        };
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const children = super._getChildren(props) as ComponentChild[];
        const {loadFailed} = this.state;
        if (loadFailed) {
            children.push(loadFailed);
        }
        return children;
    }
}
