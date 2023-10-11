import {classes, $, mergeProps} from '@zui/core';
import {BtnGroup} from '@zui/btn-group/src/component/btn-group';

import type {Item} from '@zui/common-list';
import type {ToolbarOptions, ToolbarSetting} from '../types';
import type {ClassNameLike} from '@zui/core/src/helpers';
import type {Attributes, RenderableProps} from 'preact';

export class Toolbar<T extends ToolbarOptions = ToolbarOptions> extends BtnGroup<T> {
    static NAME = 'toolbar';

    static defaultProps: Partial<Item> = {
        btnProps: {
            btnType: 'ghost',
        },
    };

    static ItemComponents = {
        ...BtnGroup.ItemComponents,
        btnGroup: BtnGroup,
        'btn-group': BtnGroup,
    };

    protected _getProps(props: RenderableProps<T>): Record<string, unknown> {
        const {gap} = props;
        const propsMap = super._getProps(props);
        if (gap) {
            if (typeof gap === 'number') {
                propsMap.className = classes(propsMap.className as ClassNameLike, `gap-${gap}`);
            } else {
                propsMap.style = $.extend(propsMap.style || {}, {gap: gap});
            }
        }
        return propsMap;
    }

    protected _getItem(props: RenderableProps<T>, item: Item, index: number): false | Item {
        const itemProps = super._getItem(props, item, index);
        if (!itemProps) {
            return itemProps;
        }
        const {type} = itemProps;
        const isBtnGroup = type === 'btn-group' || type === 'btnGroup';
        if (isBtnGroup) {
            itemProps.btnProps = mergeProps({}, this._shareBtnProps, itemProps.btnProps);
        }
        if ((isBtnGroup || type === 'dropdown') && !itemProps.relativeTarget) {
            itemProps.relativeTarget = props.relativeTarget;
        }
        return itemProps;
    }

    static render<T extends unknown[] = []>(this: unknown, setting: ToolbarSetting<T> | undefined, args: T, defaultProps?: Partial<ToolbarOptions> & Attributes, thisObject?: unknown) {
        let toolbarOptions = typeof setting === 'function' ? setting.call(thisObject ?? this, ...args) : setting;
        if (!toolbarOptions) {
            return;
        }
        if (Array.isArray(toolbarOptions)) {
            toolbarOptions = {
                items: toolbarOptions,
            };
        }
        if (defaultProps) {
            toolbarOptions = mergeProps(defaultProps as Record<string, unknown>, toolbarOptions);
        }
        return <Toolbar {...toolbarOptions} />;
    }
}
