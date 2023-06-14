import {ActionMenuNested} from '@zui/action-menu/src/component/action-menu-nested';
import {classes} from '@zui/core';
import type {ActionMenuItemOptions} from '@zui/action-menu/src/types';
import type {TreeOptions, TreeItemOptions} from '../types';
import {TreeItem} from './tree-item';

export class Tree<T extends ActionMenuItemOptions = TreeItemOptions> extends ActionMenuNested<T, TreeOptions<T>> {
    static ItemComponents = {
        item: TreeItem,
    };

    static NAME = 'tree';

    get nestedTrigger() {
        return this.props.nestedTrigger || 'click';
    }

    get menuName() {
        return 'tree';
    }

    getNestedMenuProps(items: TreeItemOptions[]): TreeOptions {
        const props = super.getNestedMenuProps(items) as TreeOptions<T>;
        const {collapsedIcon, expandedIcon, normalIcon, itemActions} = this.props;
        return {
            collapsedIcon, expandedIcon, normalIcon, itemActions,
            ...props,
        } as TreeOptions;
    }

    getItemRenderProps(props: Omit<TreeOptions<T>, 'items'> & {items: T[];}, item: T, index: number): T {
        const itemProps = super.getItemRenderProps(props, item, index) as TreeItemOptions;
        const {collapsedIcon, expandedIcon, normalIcon, itemActions} = props;
        if (itemProps.icon === undefined) {
            itemProps.icon = itemProps.items ? (itemProps.show ? expandedIcon : collapsedIcon) : normalIcon;
        }
        if (itemProps.actions === undefined && itemActions) {
            itemProps.actions = typeof itemActions === 'function' ? itemActions(item) : itemActions;
        }
        return itemProps as T;
    }

    renderToggleIcon() {
        return null;
    }

    beforeRender(): Omit<TreeOptions<T>, 'items'> & {items: T[];} {
        const props = super.beforeRender();
        const {hover} = this.props;
        if (hover) {
            props.className = classes(props.className, 'tree-hover');
        }
        return props;
    }
}
