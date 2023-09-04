import {classes} from '@zui/core';
import {NestedList, ListItem} from '@zui/list/src/component';

import type {RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {NestedListState} from '@zui/list';
import type {MenuOptions} from '../types';

export class Menu<T extends MenuOptions = MenuOptions, S extends NestedListState = NestedListState> extends NestedList<T, S> {
    static NAME = 'menu';

    static ROOT_TAG = 'menu';

    static ItemComponents: typeof NestedList.ItemComponents = {
        ...NestedList.ItemComponents,
        item: [ListItem, {innerComponent: 'a'}],
    };

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return classes(super._getClassName(props), this._hasNestedItems ? 'menu-nested' : '', props.className, props.popup ? 'popup' : '');
    }
}
