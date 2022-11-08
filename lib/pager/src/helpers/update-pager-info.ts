import {PageName} from '../types';
import {PagerInfo} from '../types/pager-info';

export function updatePagerInfo(info: PagerInfo, page?: PageName): PagerInfo {
    const pageTotal = info.pageTotal || Math.ceil(info.recTotal / info.recPerPage);
    if (typeof page === 'string') {
        if (page === 'first') {
            page = 1;
        } else if (page === 'last') {
            page = pageTotal;
        } else if (page === 'prev') {
            page = info.page - 1;
        } else if (page === 'next') {
            page =  info.page + 1;
        } else {
            page = Number.parseInt(page, 10);
        }
    }
    page = page !== undefined ? Math.max(1, Math.min(page < 0 ? (pageTotal + page) : page, pageTotal)) : info.page;
    return {
        ...info,
        pageTotal,
        page: page,
    };
}
