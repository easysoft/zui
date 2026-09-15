import {defineWebComponent, property} from '@zui/core';
import {Pager as PagerReact} from '../component/pager';
import type {PagerInfo, PagerOptions} from '../types';

export type PagerElementOptions = Pick<PagerInfo, 'page' | 'recTotal' | 'recPerPage'> & Pick<PagerOptions, 'items' | 'linkCreator'>;
export type PagerChangeDetail = PagerInfo & {originalEvent: Event};

export const ZuiPagerElement = defineWebComponent<PagerElementOptions, PagerOptions, {pageTotal: number}>(PagerReact, {
    tagName: 'zui-pager',
    properties: {
        page: property.number('page', 1),
        recTotal: property.number('rec-total', 0),
        recPerPage: property.number('rec-per-page', 10, 1),
        items: property<PagerOptions['items']>(),
        linkCreator: property<PagerOptions['linkCreator']>(),
    },
    getters: {
        pageTotal: props => Math.ceil(props.recTotal / props.recPerPage),
    },
    options: (props, context) => {
        const info = PagerReact.format({...props, pageTotal: context.element.pageTotal});
        context.set({page: info.page});
        return {
            ...info,
            items: props.items ?? [{type: 'nav', count: 7}],
            linkCreator: props.linkCreator,
            useState: false,
            attrs: {role: 'navigation', 'aria-label': 'Pagination', ...context.accessibleAttributes()},
            onChangePageInfo: (nextInfo, originalEvent) => {
                context.set({page: nextInfo.page, recPerPage: nextInfo.recPerPage});
                context.emit<PagerChangeDetail>('zui-change', {...nextInfo, originalEvent});
            },
        };
    },
});

export type ZuiPagerElement = InstanceType<typeof ZuiPagerElement>;

declare global {
    interface HTMLElementTagNameMap {
        'zui-pager': ZuiPagerElement;
    }
}
