/**
 * Check whether the element is detached from document.
 * @param element  The element to check.
 * @returns       Whether the element is detached from document.
 */
export function isElementDetached(element: Node): boolean {
    if (element.parentNode === document) {
        return false;
    }
    if (!element.parentNode) {
        return true;
    }
    return isElementDetached(element.parentNode);
}
