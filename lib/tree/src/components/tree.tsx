import {classes} from '@zui/core';
import {NestedList} from '@zui/list/src/component';
import {Toolbar} from '@zui/toolbar/src/component';

import type {ComponentChild, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, NestedItem} from '@zui/list';
import type {TreeActionsSetting, TreeOptions} from '../types';

export class Tree<T extends TreeOptions = TreeOptions> extends NestedList<T> {
    static defaultItemProps: Partial<Item> = {
        component: 'li',
        innerComponent: 'div',
        className: 'tree-item-content',
        trailingClass: 'tree-actions',
    };

    static NAME = 'tree';

    static inheritNestedProps = [...NestedList.inheritNestedProps, 'itemActions', 'expandedIcon', 'collapsedIcon', 'normalIcon'];

    protected _getItem(props: RenderableProps<T>, item: NestedItem, index: number): NestedItem | undefined {
        const nestedItem = super._getItem(props, item, index);
        if (!nestedItem) {
            return;
        }
        if (nestedItem.type === 'item') {
            if (nestedItem.icon === undefined) {
                nestedItem.icon = item.items ? (nestedItem.expanded ? props.expandedIcon : props.collapsedIcon) : props.normalIcon;
            }
            let actions = (nestedItem.actions as TreeActionsSetting) || props.itemActions;
            if (typeof actions === 'function') {
                actions = actions.call(this, nestedItem);
            }
            if (Array.isArray(actions)) {
                actions = {items: actions};
            }
            if (actions) {
                let trailing = nestedItem.trailing || [];
                if (!Array.isArray(trailing)) {
                    trailing = [trailing];
                }
                (trailing as ComponentChild[]).push(<Toolbar key="toolbar" className={classes('not-nested-toggle', nestedItem.actionsClass as ClassNameLike, actions.className)} size="sm" {...actions} />);
                nestedItem.trailing = trailing;
            }
        }
        nestedItem.actions = true;
        return nestedItem;
    }
}
