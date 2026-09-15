import {ZuiPagerElement} from '@zui/pager';
import '@zui/pager/css';
import '@zui/button/css';

export {ZuiPagerElement} from '@zui/pager';
export type {PagerElementOptions, PagerChangeDetail} from '@zui/pager';

/** Compatibility entry; importing Pager already applies its autoDefine configuration. */
export function definePager(): void {
    ZuiPagerElement.define('zui-pager');
}
