import {Component} from '../component';

export type StickyOptions = {
    side?: 'top' | 'bottom';
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

    init() {
        const {offset = 1, side, zIndex, pinnedClass = 'is-pinned', targets, scrollContainer} = this.options;
        const {$element} = this;
        const $targets = targets ? $element.find(targets) : $element;
        $targets.css({position: 'sticky', zIndex});
        if (side) $targets.css(side, -offset);

        if (scrollContainer) {
            const container = $element.closest(scrollContainer)[0] as HTMLElement;
            if (container) {
                const listener = () => {
                    if (this._raf) {
                        cancelAnimationFrame(this._raf);
                    }
                    this._raf = requestAnimationFrame(() => {
                        this._raf = 0;
                        if (container.scrollTop === 0 && (!side || side === 'top')) {
                            $targets.toggleClass(pinnedClass, false);
                            return;
                        }
                        const containerRect = container.getBoundingClientRect();
                        $targets.each((_, target) => {
                            const rect = target.getBoundingClientRect();
                            const pinned = rect[side || 'top'] === containerRect[side || 'top'];
                            target.classList.toggle(pinnedClass, pinned);
                        });
                    });
                };
                this._scrollListener = listener;
                container.addEventListener('scroll', listener);
            }
            this._container = container;
        } else {
            this._ob = new IntersectionObserver(
                (entries) => {
                    entries.forEach(e => {
                        e.target.classList.toggle(pinnedClass, e.intersectionRatio < offset);
                    });
                },
                {threshold: [1]},
            );

            $targets.each((_, e) => this._ob.observe(e));
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
