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

    protected _changedPager = computed(() => {
        return Pager.format({
            ...this.props,
            ...this._pagerChanges.value,
        });
    });

    protected declare _pagerInfo: PagerInfo;

    protected _changeEffect = effect(() => {
        const {onChangePageInfo} = this.props;
        const pagerInfo = this._changedPager.value;
        if (onChangePageInfo && this._changeEvent) {
            onChangePageInfo(pagerInfo, this._changeEvent!);
            this._changeEvent = undefined;
        }
    });

    protected _isBtnType(item: Item): boolean {
        const {type} = item;
        return super._isBtnType(item) || ['link', 'nav', 'size-menu', 'goto'].includes(type!);
    }

    protected _handleClickLink = (event: MouseEvent) => {
        const $target = $(event.currentTarget as HTMLElement);
        if ($target.is('.disabled')) {
            return;
        }
        const page = $target.z('goToPage');
        if (typeof page === 'number') {
            this._changeEvent = event;
            this._pagerChanges.value = {
                ...this._pagerChanges.value,
                page,
            };
        }
    };

    protected _handleClickSizeMenu = (info: {event: Event, item: Item}) => {
        const {item} = info;
        const recPerPage = item['z-change-page-size'];
        if (typeof recPerPage === 'number' && !item.disabled) {
            this._changeEvent = info.event;
            this._pagerChanges.value = {
                ...this._pagerChanges.value,
                recPerPage,
            };
        }
    };

    componentDidUpdate(previousProps: Readonly<T>): void {
        if (!this.props.useState) {
            const {page, recTotal, recPerPage} = this.props;
            if (page !== previousProps.page || recTotal !== previousProps.recTotal || recPerPage !== previousProps.recPerPage) {
                this._pagerChanges.value = {};
            }
        }
    }

    componentWillUnmount(): void {
        this._changeEffect();
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        this._pagerInfo = props.useState ? this._changedPager.value : Pager.format(props);
        return super._beforeRender(props);
    }

    protected _getItem(props: RenderableProps<T>, item: Item, index: number): false | Item {
        const propsMap = super._getItem(props, item, index);
        if (!propsMap) {
            return false;
        }
        const {type = 'item'} = item;
        const pagerInfo = this._pagerInfo;
        if (type === 'info') {
            $.extend(propsMap, {pagerInfo});
        } else if (type === 'link' || type === 'size-menu' || type === 'nav' || type === 'goto') {
            $.extend(propsMap, {pagerInfo, linkCreator: props.linkCreator});
        }
        if (type === 'size-menu') {
            propsMap.menu = {
                onClickItem: this._handleClickSizeMenu,
                ...(propsMap.menu as {}),
            };
        }
        if (type === 'link') {
            propsMap.onClick = this._handleClickLink;
        }
        return propsMap;
    }

    static format(pagerInfo: PagerInfo): PagerInfo {
        const {page = 1, recTotal = 0, recPerPage = 10} = pagerInfo;
        const finalRecTotal = Math.max(0, +recTotal);
        const finalRecPerPage = Math.max(1, +recPerPage);
        const pageTotal = finalRecPerPage ? Math.ceil(finalRecTotal / finalRecPerPage) : 0;
        return {
            page: Math.min(Math.max(1, +page), pageTotal),
            recTotal: finalRecTotal,
            recPerPage: finalRecPerPage,
            pageTotal,
        };
    }
}
