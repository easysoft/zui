import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
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
    },
    onRenderHeaderCell(result, {col}) {
        const {filterable: filterTypeSetting} = col.setting;
        if (filterTypeSetting) {
            result.push(
                <button class="btn dtable-filter" type="button" data-toggle="dropdown" href="#filterExp"><i className={'icon icon-filter'}></i></button>,
            );
        }
        return result;
    },
    when: options => !!options.filterable,
};

export const filterable = definePlugin(filterPlugin);
