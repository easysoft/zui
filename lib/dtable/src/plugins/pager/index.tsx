import {PagerOptions} from '@zui/pager/src/types';
import {Pager} from '@zui/pager/src/component';
import {definePlugin} from '../../helpers/shared-plugins';

import type {DTablePlugin, DTableWithPlugin} from '../../types/plugin';

export interface DTablePagerTypes {
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
            if (footPager) {
                if (Array.isArray(footPager.items)) {
                    footPager.items.forEach(item => {
                        if (item.type === 'size-menu' && item.caret === undefined) {
                            item.caret = 'up';
                        }
                    });
                }
                return [<Pager {...footPager} />];
            }
            return [];
        },
    },
};

export const pager = definePlugin(pagerPlugin);
