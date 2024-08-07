import {CustomContent, classes, mergeProps} from '@zui/core';
import {NestedList, Listitem} from '@zui/list/src/component';

import type {Attributes, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {NestedListState} from '@zui/list';
import type {MenuOptions, MenuSetting} from '../types';

export class Menu<T extends MenuOptions = MenuOptions, S extends NestedListState = NestedListState> extends NestedList<T, S> {
    static NAME = 'menu';

    static TAG = 'menu';

    static inheritNestedProps = [...NestedList.inheritNestedProps, 'compact'];

    static ItemComponents: typeof NestedList.ItemComponents = {
        ...NestedList.ItemComponents,
        item: [Listitem, {innerComponent: 'a'}],
    };

    static defaultProps: Partial<MenuOptions> = {
        ...NestedList.defaultProps,
        scrollbarHover: true,
    };

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return [super._getClassName(props), this._hasNestedItems ? 'menu-nested' : '', props.className, props.wrap ? {'scrollbar-thin': props.scrollbarThin, 'scrollbar-hover': props.scrollbarHover} : {popup: props.popup, compact: props.compact}];
    }

    protected _getWrapClass(props: RenderableProps<T>): ClassNameLike {
        return ['menu-wrapper', props.wrapClass, {popup: props.popup, compact: props.compact}];
    }

    protected _getWrapperProps(props: RenderableProps<T>): Record<string, unknown> {
        const {wrapAttrs, height, maxHeight} = props;
        const wrapProps = mergeProps({}, wrapAttrs, (height || maxHeight) ? {style: {height, maxHeight}} : null);
        wrapProps.className = classes(this._getWrapClass(props), wrapProps.className as ClassNameLike);
        return wrapProps;
    }

    protected _renderWrapperHeader(props: RenderableProps<T>): ComponentChildren {
        return <CustomContent key="header" content={props.header} generatorThis={this} />;
    }

    protected _renderWrapperFooter(props: RenderableProps<T>): ComponentChildren {
        return <CustomContent key="footer" content={props.footer} generatorThis={this} />;
    }

    render(props: RenderableProps<T>) {
        const menuView = super.render(props);
        if (props.wrap) {
            return (
                <menu {...this._getWrapperProps(props)}>
                    {this._renderWrapperHeader(props)}
                    {menuView}
                    {this._renderWrapperFooter(props)}
                </menu>
            );
        }
        return super.render(props);
    }

    static render<T extends unknown[] = []>(this: unknown, setting: MenuSetting<T> | undefined, args: T, defaultProps?: Partial<MenuOptions> & Attributes, thisObject?: unknown) {
        let menuOptions = typeof setting === 'function' ? setting.call(thisObject ?? this, ...args) : setting;
        if (!menuOptions) {
            return;
        }
        if (Array.isArray(menuOptions)) {
            menuOptions = {
                items: menuOptions,
            };
        }
        if (defaultProps) {
            menuOptions = mergeProps(defaultProps as Record<string, unknown>, menuOptions);
        }
        return <Menu {...menuOptions} />;
    }
}
