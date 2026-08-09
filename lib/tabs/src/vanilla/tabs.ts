import {Component, $, Selector, evalValue} from '@zui/core';

const NAV_CLASS = 'nav';

const NAV_ITEM_SELECTOR = '[data-toggle="tab"],[zui-toggle="tab"]';

const ACTIVE_CLASS = 'active';

export class Tabs extends Component<object, {show: [target: string]; shown: [target: string]}> {
    static NAME = 'Tabs';

    _timer = 0;

    destroy(): void {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = 0;
        }
        super.destroy();
    }

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

        /* Find the matching pane before changing the currently active item. */
        let target = ($navItem.attr('href') || $navItem.data('target')) as string | undefined;
        if (!target) {
            const toggleOptions = $navItem.attr('zui-toggle-tab') as string;
            target = toggleOptions ? evalValue<{target?: string}>(toggleOptions)?.target : undefined;
        }
        if (!target) {
            return;
        }
        const $tabsContainer = $nav.closest('.tabs');
        let $activePane;
        try {
            $activePane = $tabsContainer.length ? $tabsContainer.find(target) : $(target);
        } catch {
            return;
        }
        if (!$activePane.length) {
            return;
        }

        /* Activate the nav item and its pane only after the target is valid. */
        $items.removeClass('active');
        $navItem.addClass('active');
        const name: string = $navItem.data('name') || target;
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
            Tabs.ensure($nav, options).active($target);
        }
    },
};

Tabs.register();
