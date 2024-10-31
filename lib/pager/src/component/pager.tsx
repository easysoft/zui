import {$} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
import {PagerLink} from './pager-link';
import {PagerInfoItem} from './pager-info';
import {PagerNav} from './pager-nav';
import {PagerSizeMenu} from './pager-size-menu';
import {PagerGoto} from './pager-goto';

import type {RenderableProps} from 'preact';
import type {Item} from '@zui/common-list';
import type {PagerInfo, PagerOptions} from '../types';

export class Pager<T extends PagerOptions = PagerOptions> extends Toolbar<T> {
    static NAME = 'pager';

    static ItemComponents = {
        ...Toolbar.ItemComponents,
        info: PagerInfoItem,
        link: PagerLink,
        nav: PagerNav,
        'size-menu': PagerSizeMenu,
        goto: PagerGoto,
    };

    static defaultItemProps: Partial<Item> = {
        btnType: 'ghost',
        size: 'sm',
    };

    protected _pagerInfo?: PagerInfo;

    get pagerInfo() {
        return this._pagerInfo!;
    }

    protected _isBtnType(item: Item): boolean {
        const {type} = item;
        return super._isBtnType(item) || ['link', 'nav', 'size-menu', 'goto'].includes(type!);
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        const {page = 1, recTotal = 0, recPerPage = 10} = this.props;
        this._pagerInfo = {page: +page, recTotal: +recTotal, recPerPage: +recPerPage, pageTotal: recPerPage ? Math.ceil(recTotal / recPerPage) : 0};
        return super._beforeRender(props);
    }

    protected _getItem(props: RenderableProps<T>, item: Item, index: number): false | Item {
        const propsMap = super._getItem(props, item, index);
        if (!propsMap) {
            return false;
        }
        const {type = 'item'} = item;
        const pagerInfo = this._pagerInfo!;
        if (type === 'info') {
            $.extend(propsMap, {pagerInfo});
        } else if (type === 'link' || type === 'size-menu' || type === 'nav' || type === 'goto') {
            $.extend(propsMap, {pagerInfo, linkCreator: props.linkCreator});
        }
        return propsMap;
    }
}
