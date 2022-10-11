export function isDisabled(element?: HTMLElement): boolean {
    if (element?.nodeType !== Node.ELEMENT_NODE) {
        return true;
    }

    if (element.classList.contains('disabled')) {
        return true;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
}
