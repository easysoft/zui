import {ComponentFromReact} from '@zui/core';
import {VTable as VTableReact} from '../component';

import type {RowData, TableFeatures} from '@tanstack/table-core' with {'resolution-mode': 'import'};
import type {VTableOptions, VTableScrollOptions} from '../types';

export class VTable<TData extends RowData = Record<string, unknown>, TFeatures extends TableFeatures = TableFeatures> extends ComponentFromReact<VTableOptions<TData, TFeatures>, VTableReact<TData, TFeatures>> {
    static NAME = 'VTable';

    static Component = VTableReact;

    get table() {
        return this.$?.table ?? null;
    }

    scrollToRow(id: string, options?: VTableScrollOptions): boolean {
        return this.$?.scrollToRow(id, options) ?? false;
    }

    scrollToColumn(id: string, options?: VTableScrollOptions): boolean {
        return this.$?.scrollToColumn(id, options) ?? false;
    }
}

VTable.register();
