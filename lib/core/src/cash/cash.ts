import $ from 'cash-dom';
export type * from 'cash-dom';

declare global {
    interface Window {
        $: typeof $
    }
}

window.$ = $;

export {$, $ as cash};
