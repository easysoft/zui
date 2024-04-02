import {$, Cash} from '@zui/core';

export type GlobalEventOptions = {
    on: string;
    selector: string;
    prevent?: boolean;
    stop?: boolean;
    call?: string;
    self?: boolean;
    params?: unknown[];
    once?: boolean;
    if?: string;
    do?: string;
    [option: string]: unknown;
};

function handleGlobalEvent(this: Cash, event: Event) {
    const $this = $(this);
    const options = $this.dataset()!;
    if (!(options.on as string || 'click').split(' ').includes(event.type)) {
        return;
    }
    const $target = options.selector ? $(event.target as HTMLElement).closest(options.selector as string) : $this;
    if (!$target.length) {
        return;
    }
    const parseBool = (value: unknown) => {
        return value === '' ? true : value;
    };
    const parseVal = (value: unknown) => {
        if (typeof value === 'string') {
            try {
                value = JSON.parse(value);
            // eslint-disable-next-line no-empty
            } catch (_) {}
        }
        return value;
    };
    if (parseBool(options.once)) {
        if (options.onceCalled) {
            return;
        }
        $this.dataset('once-called', true);
    }
    if (parseBool(options.prevent)) {
        event.preventDefault();
    }
    if (parseBool(options.stop)) {
        event.stopPropagation();
    }
    if (parseBool(options.self) && event.currentTarget !== event.target) {
        return;
    }

    const runParams: [string, unknown][] = [['$element', $this], ['event', event], ['options', options], ['$target', $target]];
    if (options.if && !$.runJS(options.if as string, ...runParams)) {
        return;
    }

    const call = options.call as string;
    if (call) {
        let callback = window[call as keyof Window];
        const isFuncName = /^[$A-Z_][0-9A-Z_$.]*$/i.test(call as string);
        if (!callback) {
            callback = $.runJS(call as string, ...runParams);
        }
        if (!isFuncName || !$.isFunction(callback)) {
            return;
        }
        const params: unknown[] = [];
        const paramsOption = options.params;
        options.params = params;
        if (typeof paramsOption === 'string' && paramsOption.length) {
            if (paramsOption[0] === '[') {
                params.push(...(parseVal(paramsOption) as unknown[]));
            } else {
                params.push(...paramsOption.split(', ').map(x => {
                    x = x.trim();
                    if (x === '$element') return $this;
                    if (x === 'event') return event;
                    if (x === 'options') return options;
                    if (x.startsWith('$element.') || x.startsWith('event.') || x.startsWith('options.')) return $.runJS(x, ...runParams);
                    return parseVal(x);
                }));
            }
        } else {
            params.push(paramsOption);
        }
        callback(...params);
    }

    if (options.do) {
        $.runJS(options.do as string, ...runParams);
    }
}

$(document).on('click.zui.global change.zui.global inited.zui.global', '[data-on]', handleGlobalEvent);
