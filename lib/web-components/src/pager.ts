import {Pager} from '@zui/pager';
import {Pager as PagerView} from '@zui/pager/react';
import '@zui/pager/css';
import '@zui/button/css';
import {ComponentElement} from './component-element';
import {numberProperty} from './properties';
import './style.css';

import type {PagerInfo, PagerOptions} from '@zui/pager';
import type {ElementComponentOptions} from './component-element';

export type PagerElementOptions = Pick<PagerInfo, 'page' | 'recTotal' | 'recPerPage'> & Pick<PagerOptions, 'items' | 'linkCreator'>;

export type PagerChangeDetail = PagerInfo & {originalEvent: Event};

export class ZuiPagerElement extends ComponentElement<PagerElementOptions, PagerOptions> {
    static properties = {
        page: numberProperty('page', 1),
        recTotal: numberProperty('rec-total', 0),
        recPerPage: numberProperty('rec-per-page', 10, 1),
        items: {},
        linkCreator: {},
    };

    declare page: number;
    declare recTotal: number;
    declare recPerPage: number;
    declare items: PagerOptions['items'];
    declare linkCreator: PagerOptions['linkCreator'];

    get pageTotal(): number {
        return Math.ceil(this.recTotal / this.recPerPage);
    }

    protected _componentOptions(): ElementComponentOptions<PagerOptions> {
        const {items, linkCreator} = this.options;
        const info = PagerView.format({...this.options, pageTotal: this.pageTotal});
        this._setProperty('page', info.page, 'internal');
        return {
            ...info,
            items: items ?? [{type: 'nav', count: 7}],
            linkCreator,
            useState: false,
            attrs: {role: 'navigation', 'aria-label': 'Pagination', ...this._accessibleAttributes()},
            onChangePageInfo: (nextInfo, originalEvent) => {
                this._setProperty('page', nextInfo.page, 'internal');
                this._setProperty('recPerPage', nextInfo.recPerPage, 'internal');
                this._emit<PagerChangeDetail>('zui-change', {...nextInfo, originalEvent});
            },
        };
    }

    protected _createComponent(container: HTMLElement, options: ElementComponentOptions<PagerOptions>) {
        return new Pager(container, options);
    }
}

export function definePager(): void {
    ZuiPagerElement.define('zui-pager');
}

declare global {
    interface HTMLElementTagNameMap {
        'zui-pager': ZuiPagerElement;
    }
}
