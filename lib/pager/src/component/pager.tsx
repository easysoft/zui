import {$, computed, effect, signal} from '@zui/core';
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

    protected _pagerChanges = signal<Partial<PagerInfo>>({});

    protected _changeEvent?: Event;

    protected _pagerInfo = computed(() => {
        const {page = 1, recTotal = 0, recPerPage = 10} = {
            ...this.props,
            ...this._pagerChanges.value,
        };
        const finalRecTotal = Math.max(0, +recTotal);
        const finalRecPerPage = Math.max(1, +recPerPage);
        const pageTotal = finalRecPerPage ? Math.ceil(finalRecTotal / finalRecPerPage) : 0;
        return {
            page: Math.min(Math.max(1, +page), pageTotal),
            recTotal: finalRecTotal,
            recPerPage: finalRecPerPage,
            pageTotal,
        };
    });

    protected _changeEffect = effect(() => {
        const {onChangePageInfo} = this.props;
        if (onChangePageInfo && this._changeEvent) {
            onChangePageInfo(this._pagerInfo.value, this._changeEvent!);
            this._changeEvent = undefined;
        }
    });

    get pagerInfo() {
        return this._pagerInfo!;
    }

    protected _isBtnType(item: Item): boolean {
        const {type} = item;
        return super._isBtnType(item) || ['link', 'nav', 'size-menu', 'goto'].includes(type!);
    }

    protected _handleClickLink = (event: MouseEvent) => {
        const {onGoToPage} = this.props;
        if (!onGoToPage) {
            return;
        }
        const $target = $(event.currentTarget as HTMLElement);
        if ($target.is('.disabled')) {
            return;
        }
        const page = $target.z('goToPage');
        if (typeof page === 'number') {
            this._pagerChanges.value = {
                ...this._pagerChanges.value,
                page,
            };
        }
    };

    protected _handleClickSizeMenu = (info: {event: Event, item: Item}) => {
        const {onChangePageInfo} = this.props;
        if (!onChangePageInfo) {
            return;
        }
        const {item} = info;
        const recPerPage = item['z-change-page-size'];
        if (typeof recPerPage === 'number' && !item.disabled) {
            this._pagerChanges.value = {
                ...this._pagerChanges.value,
                recPerPage,
            };
        }
    };

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
        if (type === 'size-menu' && props.onChangePageInfo) {
            propsMap.menu = {
                onClickItem: this._handleClickSizeMenu,
                ...(propsMap.menu as {}),
            };
        }
        if (type === 'link' && props.onGoToPage) {
            propsMap.onClick = this._handleClickLink;
        }
        return propsMap;
    }
}
