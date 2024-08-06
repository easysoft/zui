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

    protected declare _hoverInfo?: {timer: number, keyPath?: string | null, shown?: boolean};

    constructor(props: T) {
        super(props);
        this._handleHover = this._handleHover.bind(this);
    }

    get isHoverTrigger() {
        return this.props.nestedTrigger === 'hover';
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return [super._getClassName(props), this._hasNestedItems ? 'menu-nested' : '', props.className, props.wrap ? {'scrollbar-thin': props.scrollbarThin, 'scrollbar-hover': props.scrollbarHover} : {popup: props.popup, compact: props.compact}];
    }

    protected _getWrapClass(props: RenderableProps<T>): ClassNameLike {
        return ['menu-wrapper', props.wrapClass, {popup: props.popup, compact: props.compact}];
    }

    protected _getWrapperProps(props: RenderableProps<T>): Record<string, unknown> {
        const {wrapAttrs, height, maxHeight, parentKey} = props;
        const wrapProps = mergeProps(
            {'z-list-wrapper': parentKey},
            wrapAttrs,
            (height || maxHeight) ? {style: {height, maxHeight}} : null,
            this.isRoot && this.isHoverTrigger ? {
                onMouseEnter: this._handleHover,
                onMouseLeave: this._handleHover,
                onMouseOver: this._handleHover,
            } : null,
        );
        wrapProps.className = classes(this._getWrapClass(props), wrapProps.className as ClassNameLike);
        return wrapProps;
    }

    protected _renderWrapperHeader(props: RenderableProps<T>): ComponentChildren {
        return <CustomContent key="header" content={props.header} generatorThis={this} />;
    }

    protected _renderWrapperFooter(props: RenderableProps<T>): ComponentChildren {
        return <CustomContent key="footer" content={props.footer} generatorThis={this} />;
    }

    protected _handleHover(event: MouseEvent) {
        const target = event.target;
        if (!(target instanceof HTMLElement) || !this.isHoverTrigger) {
            return;
        }

        let keyPath: string | null | undefined;
        if (event.type !== 'mouseleave') {
            const itemEle = target.closest('[z-item]');
            if (itemEle) {
                keyPath = itemEle.getAttribute('z-key-path') as string;
                if (!itemEle.classList.contains('is-nested')) {
                    keyPath = itemEle.getAttribute('z-parent') as string;
                }
            } else {
                const listEle = target.closest('[z-list-wrapper]');
                keyPath = listEle?.getAttribute('z-list-wrapper');
            }
        }

        const lastInfo = this._hoverInfo;
        const lastKeyPath = lastInfo?.keyPath;
        if (lastKeyPath === keyPath) {
            return;
        }
        if (lastInfo?.timer) {
            clearTimeout(lastInfo.timer);
        }
        const hasKey = typeof keyPath === 'string';
        const lastHasKey = typeof lastKeyPath === 'string';
        const delay = hasKey ? ((lastHasKey && lastInfo?.shown) ? 50 : 200) : (lastInfo?.shown ? 100 : 200);
        this._hoverInfo = {
            keyPath,
            timer: window.setTimeout(() => {
                if (hasKey) {
                    this.toggle(keyPath!, true, true);
                    this._hoverInfo!.shown = true;
                } else {
                    this.toggleAll(false);
                    this._hoverInfo = undefined;
                }
            }, delay),
        };
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        const timer = this._hoverInfo?.timer;
        if (timer) {
            clearTimeout(timer);
        }
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
