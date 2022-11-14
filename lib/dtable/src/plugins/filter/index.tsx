import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import '@zui/icons';
import type {DTableWithPlugin, DTablePlugin, DTablePluginTypes} from '../../types/plugin';
import type {RowInfo} from '../../types/row';

export interface DTableFilterTypes extends DTablePluginTypes {
    options: Partial<{
        filterable: boolean;
        filterHandler: string;
        onRemove: (this: DTableFilterable, from: RowInfo, to: RowInfo, orders: string[]) => void;
    }>,
    col: Partial<{
        filterHandler: boolean;
    }>;
}

export type DTableFilterable = DTableWithPlugin<DTableFilterTypes>;

const filterPlugin: DTablePlugin<DTableFilterTypes> = {
    name: 'filterable',
    defaultOptions: {
        filterable: true,
        filterHref: '',
    },
    onRenderHeaderCell(result, {col}) {
        const {filterable: filterTypeSetting, filterHref} = col.setting;
        if (filterTypeSetting) {
            const href = `#${filterHref}` || '';
            result.push(
                <button class="btn dtable-filter" type="button" data-toggle="dropdown" href={href}><i className={'icon icon-filter'}></i></button>,
            );
        }
        return result;
    },
    when: options => !!options.filterable,
};

export const filterable = definePlugin(filterPlugin);
