export interface AjaxFormResult {
    result: 'success' | 'fail';
    load?: string | {url?: string, selector?: string | string[]};
    /** @deprecated */
    locate?: string | {url?: string, selector?: string | string[]};
    popoverTime?: number;
    popoverTip?: string;
    message?: string | Record<string, string | string[]>;
    closeModal?: boolean | string;
    callback?: string | {name: string, target?: string, params?: unknown[]}
}
