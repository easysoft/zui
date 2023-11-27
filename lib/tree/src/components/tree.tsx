import {Menu} from '@zui/menu/src/component';

import type {RenderableProps} from 'preact';
import type {Item} from '@zui/common-list';
import type {NestedItem} from '@zui/list';
import type {TreeOptions, TreeState} from '../types';

export class Tree<T extends TreeOptions = TreeOptions, S extends TreeState = TreeState> extends Menu<T, S> {
    static NAME = 'tree';

    static defaultProps: Partial<TreeOptions> = {
        ...Menu.defaultProps,
        indent: 12,
    };

    static defaultItemProps: Partial<Item> = {
        ...Menu.defaultItemProps,
        innerComponent: 'div',
    };

    static inheritNestedProps = [...Menu.inheritNestedProps, 'itemActions', 'expandedIcon', 'collapsedIcon', 'normalIcon'];

    protected _getItem(props: RenderableProps<T>, item: NestedItem, index: number): false | NestedItem {
        return (this.constructor as typeof Tree).getTreeItem(props, super._getItem(props, item, index));
    }

    static getTreeItem(props: TreeOptions, item: false | NestedItem): false | NestedItem {
        if (!item) {
            return item;
        }
        if (item.type === 'item') {
            if (item.icon === undefined) {
                item.icon = item.items ? (item.expanded ? props.expandedIcon : props.collapsedIcon) : props.normalIcon;
            }

            if (item.actions === undefined) {
                item.actions = props.itemActions;
            }
        }
        return item;
    }
}
