import {Component} from '../component';

export type StickyOptions = {
    side?: 'top' | 'bottom' | 'left' | 'right';
    offset?: number;
    zIndex?: number;
    pinnedClass?: string;
    targets?: string;
    scrollContainer?: string;
};

export class Sticky extends Component<StickyOptions> {
    static NAME = 'Sticky';

    protected declare _ob: IntersectionObserver;

    protected declare _container: HTMLElement;

    protected declare _scrollListener: () => void;

    protected declare _raf: number;

    get $targets() {
        const {$element} = this;
        const {targets} = this.options;
        return targets ? $element.find(targets) : $element;
    }

    protected _handleScroll(container: HTMLElement, side: NonNullable<StickyOptions['side']>, pinnedClass: string) {
        const {offset = 1} = this.options;
        const $currentTargets = this.$targets;
        const containerRect = container.getBoundingClientRect();
        const {scrollTop, scrollLeft} = container;
        $currentTargets.each((_, e) => {
            const rect = e.getBoundingClientRect();
            const isPinned = (side === 'top' && scrollTop > 0 && rect.top <= (containerRect.top + offset)) || (side === 'bottom' && rect.bottom >= (containerRect.bottom - offset)) || (side === 'left' && scrollLeft > 0 && rect.left <= (containerRect.left + offset)) || (side === 'right' && scrollLeft < (container.scrollWidth - container.clientWidth));
            e.classList.toggle(pinnedClass, isPinned);
        });
    }

    init() {
        const {offset = 1, side = 'top', zIndex, pinnedClass = 'is-pinned', scrollContainer} = this.options;
        const {$element, $targets} = this;
        $targets.css({position: 'sticky', zIndex, [side]: 0});

        if (scrollContainer) {
            const container = ($element.closest(scrollContainer)[0] || $element.find(scrollContainer)[0]) as HTMLElement;
            if (container) {
                const listener = () => {
                    if (this._raf) {
                        cancelAnimationFrame(this._raf);
                    }
                    this._raf = requestAnimationFrame(() => {
                        this._raf = 0;
                        this._handleScroll(container, side, pinnedClass);
                    });
                };
                this._scrollListener = listener;
                container.addEventListener('scroll', listener);
            }
            this._container = container;
            requestAnimationFrame(() => {
                this._handleScroll(container, side, pinnedClass);
            });
        } else {
            this._ob = new IntersectionObserver(
                (entries) => {
                    entries.forEach(e => {
                        e.target.classList.toggle(pinnedClass, e.intersectionRatio < offset);
                    });
                },
                {threshold: [1]},
            );

            $targets.css('side', -offset).each((_, e) => this._ob.observe(e));
        }
    }

    destroy() {
        this._ob?.disconnect();
        if (this._container) {
            this._container.removeEventListener('scroll', this._scrollListener);
            if (this._raf) {
                cancelAnimationFrame(this._raf);
            }
        }
    }
}
