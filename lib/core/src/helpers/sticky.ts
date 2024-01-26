import {Component} from '../component';

export type StickyOptios = {
    side?: 'top' | 'bottom';
    offset?: number;
    zIndex?: number;
    pinnedClass?: string;
};

export class Sticky extends Component<StickyOptios> {
    static NAME = 'Sticky';

    protected declare _ob: IntersectionObserver;

    init() {
        const {offset = 1, side, zIndex, pinnedClass = 'is-pinned'} = this.options;
        const {$element} = this;
        $element.css({position: 'sticky', zIndex});
        if (side) $element.css(side, -offset);
        this._ob = new IntersectionObserver(
            ([e]) => e.target.classList.toggle(pinnedClass, e.intersectionRatio < offset),
            {threshold: [1]},
        );
        this._ob.observe($element[0] as HTMLElement);
    }

    destroy() {
        this._ob.disconnect();
    }
}
