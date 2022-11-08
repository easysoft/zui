import {Toolbar} from '@zui/toolbar/src/component/toolbar';
import {ActionBasicProps} from '@zui/action-menu/src/types';
import type {PagerOptions, PagerItemOptions} from '../types';
import '../style/index.css';
import {PagerLink} from './pager-link';
import {PagerInfoItem} from './pager-info';
import {PagerNav} from './pager-nav';
import {PagerSizeMenu} from './pager-size-menu';

export class Pager<T extends ActionBasicProps = PagerItemOptions, P extends PagerOptions<T> = PagerOptions<T>> extends Toolbar<T, P> {
    static defaultProps = {
        gap: 1,
        btnProps: {
            btnType: 'ghost',
            size: 'sm',
        },
    };

    static ItemComponents = {
        ...Toolbar.ItemComponents,
        link: PagerLink,
        info: PagerInfoItem,
        nav: PagerNav,
        'size-menu': PagerSizeMenu,
    };


    get pagerInfo() {
        const {page = 1, recTotal = 0, recPerPage = 10} = this.props;
        return {page, recTotal, recPerPage, pageTotal: recPerPage ? Math.ceil(recTotal / recPerPage) : 0};
    }

    isBtnItem(type?: string) {
        return type === 'link' || type === 'nav' || type === 'size-menu' || super.isBtnItem(type);
    }

    getItemRenderProps(options: Omit<P, 'items'> & {items: T[]}, item: T, index: number): T {
        const props = super.getItemRenderProps(options, item, index);
        const type = item.type || 'item';
        if (type === 'info') {
            Object.assign(props, {pagerInfo: this.pagerInfo});
        } else if (type === 'link' || type === 'size-menu' || type === 'nav') {
            Object.assign(props, {pagerInfo: this.pagerInfo, linkCreator: options.linkCreator});
        }
        return props;
    }
}
