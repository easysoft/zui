import {CustomContent, classes, mergeProps} from '@zui/core';
import {NestedList, Listitem} from '@zui/list/src/component';

import type {RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {NestedListState} from '@zui/list';
import type {MenuOptions} from '../types';

export class Menu<T extends MenuOptions = MenuOptions, S extends NestedListState = NestedListState> extends NestedList<T, S> {
    static NAME = 'menu';

    static TAG = 'menu';

    static inheritNestedProps = [...NestedList.inheritNestedProps, 'compact'];

    static ItemComponents: typeof NestedList.ItemComponents = {
        ...NestedList.ItemComponents,
        item: [Listitem, {innerComponent: 'a'}],
    };

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return classes(super._getClassName(props), this._hasNestedItems ? 'menu-nested' : '', props.className, props.popup ? 'popup' : '', props.compact ? 'compact' : '');
    }

    render(props: RenderableProps<T>) {
        const menuView = super.render(props);
        const {wrap} = props;
        if (wrap) {
            const {wrapClass, wrapHeight, wrapMaxHeight, header, footer} = props;
            const {className, ...otherProps} = mergeProps({className: wrapClass}, typeof wrap === 'object' ? wrap : null, (wrapHeight || wrapMaxHeight) ? {style: {height: wrapHeight, maxHeight: wrapMaxHeight}} : null);
            return (
                <menu className={classes('menu-wrapper', className as string)} {...otherProps}>
                    <CustomContent content={header} />
                    {menuView}
                    <CustomContent content={footer} />
                </menu>
            );
        }
        return menuView;
    }
}
