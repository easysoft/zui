// check an element whethear is visible in the current viewport
// see https://stackoverflow.com/a/26039199
export function isElementVisible(elementOrSelector: HTMLElement | string, options?: {fullyCheck: boolean}): boolean {
    const element = typeof elementOrSelector === 'string' ? document.querySelector<HTMLElement>(elementOrSelector) : elementOrSelector;
    if (!element) {
        return false;
    }

    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    if (options?.fullyCheck) {
        return (
            (rect.left >= 0)
                && (rect.top >= 0)
                && ((rect.left + rect.width) <= windowWidth)
                && ((rect.top + rect.height) <= windowHeight)
        );
    }
    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    // console.log('isElementInViewport', $.extend({vertInView: vertInView, horInView: horInView, element: element, windowHeight: windowHeight, windowWidth: windowWidth}, rect));
    return vertInView && horInView;
}
