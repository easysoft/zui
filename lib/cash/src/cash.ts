import $ from 'cash-dom';
export type {CashStatic, Cash, Element, Selector, Comparator, Context} from 'cash-dom';

declare global {
    interface Window {
        $: typeof $
    }
}

window.$ = $;

export const cash = $;
export {$};
