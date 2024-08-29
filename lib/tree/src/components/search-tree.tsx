import {SearchMenu} from '@zui/menu/src/component';
import {Tree} from './tree';

import type {RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {NestedItem} from '@zui/list';
import type {SearchTreeOptions} from '../types';

export class SearchTree<T extends SearchTreeOptions = SearchTreeOptions> extends SearchMenu<T> {
    static NAME = 'tree';

    static inheritNestedProps = [...SearchMenu.inheritNestedProps, 'itemActions', 'expandedIcon', 'collapsedIcon', 'normalIcon'];

    static defaultItemProps: Partial<Item> = {
        ...SearchMenu.defaultProps,
        innerComponent: 'div',
    };

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return [super._getClassName(props), props.lines ? 'tree-lines' : ''];
    }

    protected _getItem(props: RenderableProps<T>, item: NestedItem, index: number): false | NestedItem {
        return Tree.getTreeItem(props, super._getItem(props, item, index));
    }
}
