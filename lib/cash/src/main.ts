import $ from 'cash-dom';

declare global {
    interface Window {
        $: typeof $
    }
}

window.$ = $;

export default $;
