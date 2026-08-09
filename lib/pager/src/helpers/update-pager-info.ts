import {PageName} from '../types';
import {PagerInfo} from '../types/pager-info';

export function updatePagerInfo(info: PagerInfo, page?: PageName): PagerInfo {
    const recTotal = Number.isFinite(info.recTotal) ? Math.max(0, info.recTotal) : 0;
    const recPerPage = Number.isFinite(info.recPerPage) ? Math.max(1, info.recPerPage) : 1;
    const calculatedPageTotal = Math.ceil(recTotal / recPerPage);
    const pageTotal = Number.isFinite(info.pageTotal) && info.pageTotal > 0 ? info.pageTotal : calculatedPageTotal;
    if (typeof page === 'string') {
        if (page === 'first') {
            page = 1;
        } else if (page === 'last') {
            page = pageTotal;
        } else if (page === 'prev') {
            page = info.page - 1;
        } else if (page === 'next') {
            page = info.page + 1;
        } else if (page === 'current') {
            page = info.page;
        } else {
            page = Number.parseInt(page, 10);
        }
    }
    if (!pageTotal) {
        return {...info, recTotal, recPerPage, pageTotal: 0, page: 0};
    }
    const candidate = typeof page === 'number' && Number.isFinite(page) ? page : info.page;
    page = Math.max(1, Math.min(candidate < 0 ? (pageTotal + candidate) : candidate, pageTotal));
    return {
        ...info,
        recTotal,
        recPerPage,
        pageTotal,
        page: page,
    };
}
