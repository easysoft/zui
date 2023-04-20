export interface AjaxFormResult {
    result: 'success' | 'fail';
    locate?: string | {url?: string, selector?: string | string[], target?: string};
    popoverTime?: number;
    popoverTip?: string;
    message?: string | Record<string, string | string[]>;
    closeModal?: boolean | string;
    callback?: string | {name: string, target?: string, params?: unknown[]}
}
