import {JSX, ComponentType} from 'preact';
import {CellInfo, DTablePlugin, DTableWithPlugin} from '../../types';
import {$} from '@zui/core';
import {HtmlContent} from '@zui/core/src/react';
import {formatString} from '@zui/helpers';
import {definePlugin} from '../../helpers/shared-plugins';

export type DTableCustomHTMLCode = string;
export type DTableCustomHTMLElementType = keyof JSX.IntrinsicElements;

export type DTableCustomInfo = {
    component: DTableCustomHTMLCode | DTableCustomHTMLElementType | ComponentType;
    props?: Record<string, unknown> | ((this: DTableCustom, info: CellInfo) => Record<string, unknown>);
};

export type DTableCustomSetting = DTableCustomHTMLCode | DTableCustomHTMLElementType | DTableCustomInfo | DTableCustomInfo[] | ((this: DTableCustom, cell: CellInfo) => (DTableCustomInfo | DTableCustomInfo[] | undefined));

export type DTableCustomTypes = {
    col: Partial<{
        custom: DTableCustomSetting;
    }>,
    options: {
        customMap: Record<string, DTableCustomInfo>;
    }
};

export type DTableCustom = DTableWithPlugin<DTableCustomTypes>;

const defaultCustomMap: Record<string, DTableCustomInfo> = {
    html: {component: HtmlContent as unknown as ComponentType},
};

const customPlugin: DTablePlugin<DTableCustomTypes> = {
    name: 'custom',
    onRenderCell(result, cell) {
        const {col} = cell;
        let {custom} = col.setting;
        if (typeof custom === 'function') {
            custom = custom.call(this, cell);
        }
        if (!custom) {
            return result;
        }
        const customList = Array.isArray(custom) ? custom : [custom];
        const {customMap} = this.options;
        customList.forEach(setting => {
            let info: DTableCustomInfo;
            if (typeof setting === 'string') {
                info = setting.startsWith('<') ? {
                    component: HtmlContent as unknown as ComponentType,
                    props: {html: formatString(setting, {value: cell.value, ...cell.row.data, $value: cell.value})},
                } : {
                    component: setting,
                };
            } else {
                info = setting;
            }
            let {component} = info;
            const reducers = [info];
            if (typeof component === 'string') {
                reducers.unshift(defaultCustomMap[component], customMap?.[component]);
            }
            const props = {};
            reducers.forEach((current) => {
                if (current) {
                    const {props: currentProps} = current;
                    if (currentProps) {
                        $.extend(props, typeof currentProps === 'function' ? currentProps.call(this, cell) : currentProps);
                    }
                    component = current.component || component;
                }
            }, {props: {}} as DTableCustomInfo);
            const Component = component as ComponentType;
            result[0] = {outer: true, className: 'dtable-custom-cell', children: <Component {...props} />};
        });
        return result;
    },
};

export const custom = definePlugin(customPlugin);
