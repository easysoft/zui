import {JSX, ComponentType} from 'preact';
import {CellInfo, ColInfo, DTablePlugin, DTableWithPlugin, RowInfo} from '../../types';
import {HtmlContent} from '@zui/core/src/react';
import {formatString} from '@zui/helpers';
import {definePlugin} from '../../helpers/shared-plugins';

export type DTableCustomHTMLCode = string;
export type DTableCustomHTMLElementType = keyof JSX.IntrinsicElements;

export type DTableCustomInfo = {
    component: DTableCustomHTMLCode | DTableCustomHTMLElementType | ComponentType;
    props?: Record<string, unknown> | ((info: CellInfo) => Record<string, unknown>);
};

export type DTableCustomSetting = DTableCustomHTMLCode | DTableCustomHTMLElementType | DTableCustomInfo | DTableCustomInfo[];

export type DTableCustomTypes = {
    col: Partial<{
        custom: DTableCustomSetting;
    }>,
    options: {
        customMap: Record<string, DTableCustomSetting>;
    }
};

export type DTableCustom = DTableWithPlugin<DTableCustomTypes>;

const customPlugin: DTablePlugin<DTableCustomTypes> = {
    name: 'custom',
    onRenderCell(result, cell) {
        const {col} = cell;
        const {custom} = col.setting;
        if (!custom) {
            return result;
        }
        const customList = Array.isArray(custom) ? custom : [custom];
        const {customMap} = this.options;
        customList.forEach(setting => {
            let info: DTableCustomInfo;
            if (typeof setting === 'string') {
                setting = customMap[setting] || setting;
                info = setting.startsWith('<') ? {
                    component: HtmlContent as unknown as ComponentType,
                    props: {html: formatString(setting, {value: cell.value, ...cell.row.data, $value: cell.value})},
                } : {
                    component: setting,
                };
            } else {
                info = setting;
            }
            const Component = info.component as ComponentType;
            let props = info.props || (cell as Record<string, unknown>);
            if (typeof props === 'function') {
                props = props(cell);
            }
            result[0] = <Component {...props} />;
        });
        return result;
    },
};

export const custom = definePlugin(customPlugin);
