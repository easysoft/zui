import {List, ListItem} from '@zui/list/src/component';

import type {RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item} from '@zui/list';
import type {NavOptions} from '../types';

export class Nav<T extends NavOptions = NavOptions> extends List<T> {
    static NAME = 'nav';

    static ItemComponents: typeof List.ItemComponents = {
        ...List.ItemComponents,
        item: [ListItem, {innerComponent: 'a'}],
    };

    static defaultItemProps: Partial<Item> = {
        component: 'li',
    };

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        const {type, stacked} = props;
        return [super._getClassName(props), type ? `nav-${type}` : '', stacked ? 'nav-stacked' : ''];
    }
}
