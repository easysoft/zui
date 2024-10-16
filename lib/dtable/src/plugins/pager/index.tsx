import type {PagerInfo, PagerOptions} from '@zui/pager';
import {Pager} from '@zui/pager/src/component';
import {definePlugin} from '../../helpers/shared-plugins';

import type {DTablePlugin, DTableWithPlugin} from '../../types/plugin';

export interface DTablePagerTypes {
    options: Partial<{
        footPager: PagerOptions,
        localPager: PagerInfo | boolean,
    }>,
    state: {
        pager?: PagerInfo;
    },
}

export type DTablePager = DTableWithPlugin<DTablePagerTypes>;

const pagerPlugin: DTablePlugin<DTablePagerTypes> = {
    name: 'pager',
    state() {
        const localPager = this.props.localPager as DTablePagerTypes['options']['localPager'];
        if (localPager) {
            const {page = 1, recTotal = 0, recPerPage = 20, pageTotal = 1} = (this.props.footPager || {}) as Partial<PagerInfo>;
            return {
                pager: {
                    page,
                    recTotal,
                    recPerPage,
                    pageTotal,
                    ...(typeof localPager === 'object' ? localPager : null),
                },
            };
        }
        return {};
    },
    footer: {
        pager() {
            let {footPager} = this.options;
            const {localPager} = this.options;
            if (footPager) {
                footPager = {
                    items: [
                        {
                            'type': 'link',
                            'page': 'first',
                            'icon': 'icon-first-page',
                        },
                        {
                            'type': 'link',
                            'page': 'prev',
                            'icon': 'icon-angle-left',
                        },
                        {
                            'type': 'info',
                            'text': '{page}/{pageTotal}',
                        },
                        {
                            'type': 'link',
                            'page': 'next',
                            'icon': 'icon-angle-right',
                        },
                        {
                            'type': 'link',
                            'page': 'last',
                            'icon': 'icon-last-page',
                        },
                    ],
                    ...footPager,
                    ...(typeof localPager === 'object' ? localPager : null),
                    ...this.state.pager,
                    recTotal: this.layout.allRows.length,
                };
                if (Array.isArray(footPager.items)) {
                    footPager.items.forEach(item => {
                        if (item.type === 'size-menu' && item.caret === undefined) {
                            item.caret = 'up';
                        }
                    });
                }
                if (this.options.localPager) {
                    footPager.onChangePageInfo = (newPager) => {
                        this.update({
                            dirtyType: 'layout',
                            state: (prevState) => {
                                const pager = {...(prevState as unknown as DTablePagerTypes['state']).pager, ...newPager};
                                return {pager};
                            },
                        });
                    };
                }
                return [<Pager {...footPager} />];
            }
            return [];
        },
    },
    onAddRows(rows) {
        const {localPager} = this.options;
        if (localPager) {
            const {page = 1, recPerPage = 20} = {
                ...(typeof localPager === 'object' ? localPager : null),
                ...this.state.pager,
            };
            const start = (page - 1) * recPerPage;
            const end = Math.min(page * recPerPage, rows.length);
            return rows.slice(start, end);
        }
    },
};

export const pager = definePlugin(pagerPlugin);
