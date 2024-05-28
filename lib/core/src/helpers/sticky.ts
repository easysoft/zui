import {Component} from '../component';

export type StickyOptions = {
    side?: 'top' | 'bottom';
    offset?: number;
    zIndex?: number;
    pinnedClass?: string;
    watch?: string;
};

export class Sticky extends Component<StickyOptions> {
    static NAME = 'Sticky';

    protected declare _ob: IntersectionObserver;

    init() {
        const {offset = 1, side, zIndex, pinnedClass = 'is-pinned', watch} = this.options;
        const {$element} = this;
        const $watch = watch ? $element.find(watch) : $element;
        $watch.css({position: 'sticky', zIndex});
        if (side) $watch.css(side, -offset);
        this._ob = new IntersectionObserver(
            ([e]) => e.target.classList.toggle(pinnedClass, e.intersectionRatio < offset),
            {threshold: [1]},
        );
        $watch.each((_, e) => this._ob.observe(e));
    }

    destroy() {
        this._ob.disconnect();
    }
}
