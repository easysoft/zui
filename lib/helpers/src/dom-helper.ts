/**
 * Select text in an element
 * @param element Element or element selector to select
 */
export function selectText(elementOrSelector: Element | string) {
    const element = typeof elementOrSelector === 'string' ? document.querySelector(elementOrSelector) : elementOrSelector;
    if (element && window.getSelection) {
        const selection = window.getSelection();
        if (selection) {
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}
