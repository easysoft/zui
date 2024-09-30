import {mergeProps, type ClassNameLike} from '@zui/core';
import {List} from '@zui/list/src/component/list';

import type {Item} from '@zui/common-list';
import type {Attributes, RenderableProps} from 'preact';
import type {NavOptions, NavSetting} from '../types';

export class Nav<T extends NavOptions = NavOptions> extends List<T> {
    static NAME = 'nav';

    static defaultItemProps: Partial<Item> = {
        component: 'li',
        innerComponent: 'a',
    };

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        const {type, stacked} = props;
        return [super._getClassName(props), type ? `nav-${type}` : '', stacked ? 'nav-stacked' : ''];
    }

    static render<T extends unknown[] = []>(this: unknown, setting: NavSetting<T> | undefined, args: T, defaultProps?: Partial<NavOptions> & Attributes, thisObject?: unknown) {
        let navOptions = typeof setting === 'function' ? setting.call(thisObject ?? this, ...args) : setting;
        if (!navOptions) {
            return;
        }
        if (Array.isArray(navOptions)) {
            navOptions = {
                items: navOptions,
            };
        }
        if (defaultProps) {
            navOptions = mergeProps(defaultProps as Record<string, unknown>, navOptions);
        }
        return <Nav {...navOptions} />;
    }
}
