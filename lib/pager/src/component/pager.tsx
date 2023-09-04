import {$} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
import {PagerLink} from './pager-link';
import {PagerInfoItem} from './pager-info';
import {PagerNav} from './pager-nav';
import {PagerSizeMenu} from './pager-size-menu';
import {PagerGoto} from './pager-goto';

import type {RenderableProps, ComponentType} from 'preact';
import type {Item} from '@zui/list';
import type {PagerInfo, PagerOptions} from '../types';

export class Pager<T extends PagerOptions = PagerOptions> extends Toolbar<T> {
    static NAME = 'pager';

    static ItemComponents: typeof Toolbar.ItemComponents = {
        ...Toolbar.ItemComponents,
        info: PagerInfoItem as ComponentType,
        link: [PagerLink as ComponentType, this.getBtnProps],
        nav: [PagerNav as unknown as ComponentType, this.getBtnProps],
        'size-menu': [PagerSizeMenu as ComponentType, this.getBtnProps],
        goto: [PagerGoto as ComponentType, this.getBtnProps],
    };

    static defaultItemProps: Partial<Item> = {
        btnType: 'ghost',
        size: 'sm',
    };

    protected _pagerInfo?: PagerInfo;

    get pagerInfo() {
        return this._pagerInfo!;
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        const {page = 1, recTotal = 0, recPerPage = 10} = this.props;
        this._pagerInfo = {page: +page, recTotal: +recTotal, recPerPage: +recPerPage, pageTotal: recPerPage ? Math.ceil(recTotal / recPerPage) : 0};
        return super._beforeRender(props);
    }

    protected _getItem(props: RenderableProps<T>, item: Item, index: number): Item | undefined {
        const propsMap = super._getItem(props, item, index);
        const type = item.type || 'item';
        const pagerInfo = this._pagerInfo!;
        if (type === 'info') {
            $.extend(propsMap, {pagerInfo});
        } else if (type === 'link' || type === 'size-menu' || type === 'nav' || type === 'goto') {
            $.extend(propsMap, {pagerInfo, linkCreator: props.linkCreator});
        }
        return propsMap;
    }
}
