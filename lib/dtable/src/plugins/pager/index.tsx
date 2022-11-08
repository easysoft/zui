import {PagerOptions} from '@zui/pager/src/types';
import {Pager} from '@zui/pager/src/component';
import {definePlugin} from '../../helpers/shared-plugins';
import type {DTablePlugin, DTablePluginTypes, DTableWithPlugin} from '../../types/plugin';

export interface DTablePagerTypes extends DTablePluginTypes {
    options: Partial<{
        footPager: PagerOptions,
    }>,
}

export type DTablePager = DTableWithPlugin<DTablePagerTypes>;

const pagerPlugin: DTablePlugin<DTablePagerTypes> = {
    name: 'pager',
    footer: {
        pager() {
            const {footPager} = this.options;
            return [footPager ? <Pager {...footPager} /> : null];
        },
    },
};

export const pager = definePlugin(pagerPlugin);
