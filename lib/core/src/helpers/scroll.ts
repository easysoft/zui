import {$, Cash, Selector} from '../cash';

/* Declare types. */
declare module 'cash-dom' {
    interface Cash {
        disableScroll(disable?: boolean): Cash;
        enableScroll(enable?: boolean): Cash;
    }
}

export function disableScroll(selector: Selector, disable = true): void {
    const $element = $(selector);
    const element = $element[0] as HTMLElement;
    const dataName = 'zui-disable-scroll';
    if (disable) {
        if ($element.data(dataName)) {
            return;
        }
        if (($element.css('scrollbar-gutter') || '').includes('stable')) {
            $element.data(dataName, {overflow: $element.css('overflow')}).css('overflow', 'hidden');
            return;
        }
        const scrollbarWidth = (element === document.body || $element.is('html')) ? (window.innerWidth - document.body.clientWidth) : (element.offsetWidth - element.clientWidth);
        if (!scrollbarWidth) {
            return;
        }
        const paddingRight = $element.css('paddingRight') || '0';
        $element.data(dataName, {
            paddingRight: paddingRight,
            overflow: $element.css('overflow'),
        }).css({
            paddingRight: `${scrollbarWidth + Number.parseInt(paddingRight, 10)}px`,
            overflow: 'hidden',
        });
    } else {
        const oldStyle = $element.data(dataName);
        if (!oldStyle) {
            return;
        }
        $element.css(oldStyle).removeData(dataName);
    }
}

/* Extend as $.fn.disableScroll() */
$.fn.disableScroll = function (this: Cash, disable = true): Cash {
    return this.each((_, ele) => {
        disableScroll(ele, disable);
    });
};

$.fn.enableScroll = function (this: Cash, enable = true): Cash {
    return this.disableScroll(!enable);
};
