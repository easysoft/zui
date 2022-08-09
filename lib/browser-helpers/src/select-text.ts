/**
 * Select text in an element
 * @param elementOrSelector Element or element selector to select
 */
export function selectText(elementOrSelector: HTMLElement | string): boolean {
    const element = typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector) : elementOrSelector;
    if (!element) {
        return false;
    }
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.select();
        return true;
    }
    if (window.getSelection) {
        const selection = window.getSelection();
        if (selection) {
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            return true;
        }
    }
    return false;
}
