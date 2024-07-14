import {Component, $, Selector} from '@zui/core';

const NAV_CLASS = 'nav';

const NAV_ITEM_SELECTOR = '[data-toggle="tab"]';

const ACTIVE_CLASS = 'active';

export class Tabs extends Component<{}, {show: [target: string], shown: [target: string]}> {
    static NAME = 'Tabs';

    _timer = 0;

    active(selector?: Selector) {
        const $nav = this.$element;
        const $items = $nav.find(NAV_ITEM_SELECTOR);

        /* Find the nav item to active. */
        let $navItem = selector ? $(selector).closest(NAV_ITEM_SELECTOR) : $items.filter(`.${ACTIVE_CLASS}`);
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
        const target: string = $navItem.attr('href') || $navItem.data('target');
        const name: string = $navItem.data('name') || target;
        const $activePane = $(target);
        if (!$activePane.length) {
            return;
        }
        $activePane.parent().children('.tab-pane').removeClass('active in');
        $activePane.addClass('active').trigger('show', [name]);

        this.emit('show', name);
        if (this._timer) {
            clearTimeout(this._timer);
        }
        this._timer = setTimeout(() => {
            $activePane.addClass('in').trigger('shown', [name]);
            this.emit('shown', name);
            this._timer = 0;
        }, 10) as unknown as number;
    }
}

Tabs.toggle = {
    name: 'tab',
    handler(element, options) {
        const $target = $(element);
        const $nav = $target.closest(`.${NAV_CLASS}`);
        if ($nav.length) {
            Tabs.ensure($nav, options as {}).active($target);
        }
    },
};

Tabs.register();
