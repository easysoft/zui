import {ComponentFromReact, createWebComponent, property} from '@zui/core';
import {Pager as PagerReact} from '../component/pager';

import type {WebComponentConfig} from '@zui/core';
import type {PagerInfo, PagerOptions} from '../types';

export type PagerElementOptions = Pick<PagerInfo, 'page' | 'recTotal' | 'recPerPage'> & Pick<PagerOptions, 'items' | 'linkCreator'>;
export type PagerChangeDetail = PagerInfo & {originalEvent: Event};

export class Pager<T extends PagerOptions = PagerOptions> extends ComponentFromReact<T> {
    static NAME = 'Pager';

    static Component = PagerReact;

    static WebComponent: WebComponentConfig<PagerElementOptions, PagerOptions, {pageTotal: number}> = {
        autoDefine: true,
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
    };
}

export const ZuiPagerElement = createWebComponent(Pager);
export type ZuiPagerElement = InstanceType<typeof ZuiPagerElement>;

Pager.register();

declare global {
    interface HTMLElementTagNameMap {
        'zui-pager': ZuiPagerElement;
    }
}
