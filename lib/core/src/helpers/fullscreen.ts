import {$, Cash, type Selector} from '../cash';

export type EnterFullscreenOptions = {
    target: Selector;
    onError?: (error: Error) => void;
    onSuccess?: () => void;
    afterEnter?: (event: Event) => void;
    afterExit?: (event: Event) => void;
};

export function getFullscreenElement() {
    return document.fullscreenElement || (document as {webkitFullscreenElement?: typeof document.fullscreenElement}).webkitFullscreenElement || (document as {mozFullScreenElement?: typeof document.fullscreenElement}).mozFullScreenElement;
}

export async function enterFullscreen(options: Selector | EnterFullscreenOptions) {
    if (typeof options === 'string' || options instanceof Element || options instanceof $) {
        options = {target: options as Selector};
    }
    const {target, onError, onSuccess, afterExit, afterEnter} = options as EnterFullscreenOptions;
    const $target = $(target);
    const element = $target[0] as Element;
    if (!element) {
        return;
    }
    const requestMethod = element.requestFullscreen || (element as {webkitRequestFullscreen?: typeof element.requestFullscreen}).webkitRequestFullscreen || (element as {mozRequestFullScreen?: typeof element.requestFullscreen}).mozRequestFullScreen;
    if (!requestMethod) {
        onError?.call(element, new Error('[ZUI] The browser does not support full screen feature.'));
        return;
    }

    try {
        await requestMethod.call(element);
        onSuccess?.call(element);
        $(element).off('.zui.fullscreen');
        if (afterExit) {
            $target.on('exitFullscreen.zui.fullscreen', afterExit);
        }
        if (afterEnter) {
            $target.on('enterFullscreen.zui.fullscreen', afterEnter);
        }
    } catch (error) {
        onError?.call(element, error as Error);
    }

    if (!(document as {zuiBindFullscreenChange?: boolean}).zuiBindFullscreenChange) {
        (document as {zuiBindFullscreenChange?: boolean}).zuiBindFullscreenChange = true;
        $(document).on('fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui', (event) => {
            const fullscreenElement = getFullscreenElement();
            let triggerElement: Element | Document | null | undefined = fullscreenElement;
            if (fullscreenElement) {
                $(fullscreenElement).addClass('is-in-fullscreen');
            } else {
                triggerElement = $(document).find('.is-in-fullscreen')[0] || document;
                $(triggerElement).removeClass('is-in-fullscreen');
            }
            $('body').toggleClass('has-in-fullscreen', !!fullscreenElement);
            const data = {event, target: triggerElement, fullscreenElement};
            $(triggerElement).trigger(fullscreenElement ? 'enterFullscreen' : 'exitFullscreen', data).trigger('toggleFullscreen', data);
        });
    }
}

export async function toggleFullscreen(options?: Selector | EnterFullscreenOptions | false) {
    const fullscreenElement = getFullscreenElement();
    if (options === false) {
        if (!!fullscreenElement === options) {
            return options;
        }
    }

    if (fullscreenElement) {
        document.exitFullscreen();
        return false;
    }
    await enterFullscreen(options);
    return true;
}

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        fullscreen(this: Cash, options?: EnterFullscreenOptions | false): Promise<boolean>;
    }

    interface CashStatic {
        getFullscreenElement: typeof getFullscreenElement;
        toggleFullscreen: typeof toggleFullscreen;
    }
}

/** Extend the $.fn.fullscreen. */
$.fn.fullscreen = function (this: Cash, options?: EnterFullscreenOptions | false) {
    return toggleFullscreen({
        target: this,
        ...options,
    });
};

/** Extend the $.getFullscreenElement. */
$.getFullscreenElement = getFullscreenElement;

/** Extend the $.toggleFullscreen. */
$.toggleFullscreen = toggleFullscreen;
