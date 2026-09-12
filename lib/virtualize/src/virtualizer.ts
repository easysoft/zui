import {
    Virtualizer,
    elementScroll,
    observeElementOffset,
    observeElementRect,
    observeWindowOffset,
    observeWindowRect,
    windowScroll,
} from '@tanstack/virtual-core';
import type {PartialKeys, VirtualizerOptions} from '@tanstack/virtual-core';

export {Virtualizer, defaultRangeExtractor} from '@tanstack/virtual-core';
export type {VirtualItem, VirtualizerOptions, Rect, Range, ScrollToOptions} from '@tanstack/virtual-core';

// Core reports logical RTL offsets, while element.scrollLeft uses negative values.
const rtlElementScroll: typeof elementScroll = (offset, {adjustments = 0, ...options}, instance) => {
    elementScroll(-offset, {...options, adjustments: -adjustments}, instance);
};

/** TanStack options with the element observation and scrolling defaults supplied. */
export type ElementVirtualizerOptions<TScrollElement extends Element = HTMLElement, TItemElement extends Element = HTMLElement> = PartialKeys<
    VirtualizerOptions<TScrollElement, TItemElement>,
    'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
>;

/** TanStack options defaulting to the current window as the scroll container. */
export type WindowVirtualizerOptions<TItemElement extends Element = HTMLElement> = PartialKeys<
    VirtualizerOptions<Window, TItemElement>,
    'getScrollElement' | 'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
>;

/**
 * Owns a TanStack virtualizer's lifecycle without managing its rendering.
 * Create with the element or window factory, mount after the DOM is committed,
 * and call update after subsequent commits. A destroyed controller is terminal.
 */
export class VirtualizerController<
    TScrollElement extends Element | Window,
    TItemElement extends Element,
    TOptions = VirtualizerOptions<TScrollElement, TItemElement>,
> {
    readonly instance: Virtualizer<TScrollElement, TItemElement>;

    private _cleanup?: () => void;

    private _destroyed = false;

    private _onChange?: VirtualizerOptions<TScrollElement, TItemElement>['onChange'];

    constructor(options: TOptions, private readonly _resolveOptions: (options: TOptions) => VirtualizerOptions<TScrollElement, TItemElement>) {
        this.instance = new Virtualizer(this._getOptions(options));
    }

    private _handleChange = (instance: Virtualizer<TScrollElement, TItemElement>, sync: boolean) => {
        if (!this._destroyed) {
            this._onChange?.(instance, sync);
        }
    };

    private _getOptions(options: TOptions): VirtualizerOptions<TScrollElement, TItemElement> {
        const resolved = this._resolveOptions(options);
        // Reusing instance.options must not wrap our own callback recursively.
        if (resolved.onChange !== this._handleChange) {
            this._onChange = resolved.onChange;
        }
        return {...resolved, onChange: this._handleChange};
    }

    /** Starts observing the current scroll container. Repeated calls are safe. */
    mount(): void {
        if (this._destroyed || this._cleanup) {
            return;
        }
        this._cleanup = this.instance._didMount();
        this.update();
    }

    /** Reconciles the scroll container after rendering; does nothing before mount. */
    update(): void {
        if (!this._destroyed && this._cleanup) {
            this.instance._willUpdate();
        }
    }

    /**
     * Replaces all user options while applying the factory defaults again.
     * This does not reconcile the DOM; call update after committing the new layout.
     */
    setOptions(options: TOptions): void {
        if (!this._destroyed) {
            this.instance.setOptions(this._getOptions(options));
        }
    }

    /** Releases observers, listeners, pending scrolling and cached DOM references. */
    destroy(): void {
        if (this._destroyed) {
            return;
        }
        this._destroyed = true;
        this._onChange = undefined;
        (this._cleanup ?? this.instance._didMount())();
        this._cleanup = undefined;
        this.instance.elementsCache.clear();
    }
}

/** Creates an unmounted, SSR-safe virtualizer for an element scroll container. */
export function createVirtualizer<TScrollElement extends Element = HTMLElement, TItemElement extends Element = HTMLElement>(
    options: ElementVirtualizerOptions<TScrollElement, TItemElement>,
): VirtualizerController<TScrollElement, TItemElement, ElementVirtualizerOptions<TScrollElement, TItemElement>> {
    return new VirtualizerController(options, nextOptions => ({
        ...nextOptions,
        observeElementRect: nextOptions.observeElementRect ?? observeElementRect,
        observeElementOffset: nextOptions.observeElementOffset ?? observeElementOffset,
        scrollToFn: nextOptions.scrollToFn ?? (nextOptions.horizontal && nextOptions.isRtl ? rtlElementScroll : elementScroll),
    }));
}

/** Creates an unmounted, SSR-safe virtualizer for the current or supplied window. */
export function createWindowVirtualizer<TItemElement extends Element = HTMLElement>(
    options: WindowVirtualizerOptions<TItemElement>,
): VirtualizerController<Window, TItemElement, WindowVirtualizerOptions<TItemElement>> {
    return new VirtualizerController(options, (nextOptions) => {
        const getScrollElement = nextOptions.getScrollElement ?? (() => (typeof window === 'undefined' ? null : window));
        return {
            ...nextOptions,
            getScrollElement,
            observeElementRect: nextOptions.observeElementRect ?? observeWindowRect,
            observeElementOffset: nextOptions.observeElementOffset ?? observeWindowOffset,
            scrollToFn: nextOptions.scrollToFn ?? windowScroll,
            initialOffset: nextOptions.initialOffset ?? (() => {
                const scrollWindow = getScrollElement();
                return (nextOptions.horizontal ? scrollWindow?.scrollX : scrollWindow?.scrollY) ?? 0;
            }),
        };
    });
}
