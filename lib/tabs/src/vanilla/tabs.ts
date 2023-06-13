import {Component, $, Selector} from '@zui/core';

const NAV_CLASS = 'nav';

const NAV_ITEM_SELECTOR = '[data-toggle="tab"]';

const ACTIVE_CLASS = 'active';

export class Tabs extends Component {
    static NAME = 'Tabs';

    #timer = 0;

    active(selector?: Selector) {
        const $nav = this.$element;
        const $items = $nav.find(NAV_ITEM_SELECTOR);

        /* Find the nav item to active. */
        let $navItem = selector ? $(selector).first() : $items.filter(`.${ACTIVE_CLASS}`);
        if (!$navItem.length) {
            $navItem = $nav.find(NAV_ITEM_SELECTOR).first();
            if (!$navItem.length) {
                return;
            }
        }

        /* Add active class to nav item. */
        $items.removeClass('active');
        $navItem.addClass('active');

        /* Add active class to panes. */
        const target = $navItem.attr('href') || $navItem.data('target');
        const $activePane = $(target);
        if (!$activePane.length) {
            return;
        }
        $activePane.parent().children('.tab-pane').removeClass('active in');
        $activePane.addClass('active');

        if (this.#timer) {
            clearTimeout(this.#timer);
        }
        this.#timer = setTimeout(() => {
            $activePane.addClass('in');
            this.#timer = 0;
        }, 10) as unknown as number;
    }
}

$(document).on('click.tabs.zui', NAV_ITEM_SELECTOR, (event: MouseEvent) => {
    event.preventDefault();
    const $target = $(event.target as HTMLElement);
    const $nav = $target.closest(`.${NAV_CLASS}`);
    if ($nav.length) {
        Tabs.ensure($nav).active($target);
    }
});
