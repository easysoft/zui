export type PageLoadListener = () => void;
export type PageUpdateListener = () => void;

export function onPageLoad(listener: PageLoadListener) {
    const isLoaded = document.getElementById('libPage')?.classList.contains('is-loaded');
    if (isLoaded) {
        listener();
    } else {
        document.addEventListener('dev-page-load', listener);
    }
}

export function onPageUpdate(listener: PageUpdateListener) {
    onPageLoad(listener);
    document.addEventListener('dev-page-update', listener);
}

Object.assign(globalThis, {
    onPageLoad,
    onPageUpdate,
});

declare global {
    function onPageLoad(listener: PageLoadListener): void;
    function onPageUpdate(listener: PageUpdateListener): void;
}
