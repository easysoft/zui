import {$, Cash} from '../cash';
import {evalValue} from './raw-data';
import {deepGet} from '@zui/helpers/src/object/deep-get';
import {getZData} from './z';

export type GlobalEventOptions = {
    on: string;
    selector?: string;
    prevent?: boolean;
    stop?: boolean;
    call?: string | ((...args: unknown[]) => void);
    self?: boolean;
    params?: unknown[] | string;
    once?: boolean;
    if?: string | ((...args: unknown[]) => boolean);
    do?: string | ((...args: unknown[]) => void);
    [option: string]: unknown;
};

function processGlobalEvent($element: Cash, event: Event, options: GlobalEventOptions) {
    if (!(options.on as string || 'click').split(' ').includes(event.type)) {
        return;
    }
    const $target = options.selector ? $(event.target as HTMLElement).closest(options.selector as string) : $element;
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
        $element.dataset('once-called', true);
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

    const runParams: [string, unknown][] = [['$element', $element], ['event', event], ['options', options], ['$target', $target]];
    const runCode = (code: string | ((...args: unknown[]) => boolean)) => {
        if (typeof code === 'function') {
            return code(...runParams);
        }
        return $.runJS(code as string, ...runParams);
    };
    if (options.if !== undefined && !runCode(options.if)) {
        return;
    }

    const call = options.call;
    if (call) {
        let callback: unknown;
        if (typeof call === 'string') {
            const isFuncName = /^[$A-Z_][0-9A-Z_$.]*$/i.test(call);
            callback = isFuncName ? deepGet(window, call) : runCode(call);
        } else {
            callback = call;
        }
        if (typeof callback === 'function') {
            const params: unknown[] = [];
            const paramsOption = options.params;
            options.params = params;
            if (typeof paramsOption === 'string' && paramsOption.length) {
                if (paramsOption[0] === '[') {
                    params.push(...(parseVal(paramsOption) as unknown[]));
                } else {
                    params.push(...paramsOption.split(', ').map(x => {
                        x = x.trim();
                        if (x === '$element') return $element;
                        if (x === 'event') return event;
                        if (x === 'options') return options;
                        if (x.startsWith('$element.') || x.startsWith('event.') || x.startsWith('options.')) return runCode(x);
                        return parseVal(x);
                    }));
                }
            } else if (Array.isArray(paramsOption)) {
                params.push(...paramsOption);
            } else {
                params.push(paramsOption);
            }
            callback(...params);
        }
    }

    if (options.do) {
        runCode(options.do as string);
    }
}

/**
 * Handle global event.
 * @param event The event object
 * @example
 * ```html
 * <a zui-on="click change ~ console.log('clicked or changed')">Click or changed</a>
 * <a zui-on="click ~ {do: () => console.log('clicked or changed'), if: () => confirm('continue?')}">Click or changed</a>
 * <a zui-on-click="console.log('clicked')">Click</a>
 * <a zui-on-click="console.log('clicked')" zui-on-change="console.log('changed')">Click or changed</a>
 * <a zui-on-click="{do: () => console.log('clicked')}">Click or changed</a>
 *
 * <a data-on="click" data-do="console.log('clicked')">[data-on] is deprecated</a>
 * ```
 */
function handleGlobalEvent(this: Cash, event: Event) {
    const $element = $(this);
    const type = event.type;
    const zuiOn = $element.attr('zui-on');
    if (zuiOn) {
        const [events, code] = zuiOn.split('~').map(x => x.trim());
        if (events && code) {
            processGlobalEvent($element, event, $.extend({
                on: events,
            }, code.startsWith('{') ? evalValue(code) : {do: code}));
        }
    }
    const zuiOnEvent = $element.attr(`zui-on-${type}`);
    if (zuiOnEvent) {
        processGlobalEvent($element, event, $.extend({
            on: type,
        }, zuiOnEvent.startsWith('{') ? evalValue(zuiOnEvent) : {do: zuiOnEvent}));
    }

    const dataOn = $element.attr('data-on');
    if (dataOn) {
        processGlobalEvent($element, event, getZData($element, {prefix: 'data-', evalValue: ['call', 'if', 'do']}) as GlobalEventOptions);
        console.warn(`[ZUI] Use [zui-on-${type}] instead of [data-on="${type}"] on element: `, $element[0]);
    }
}

export function registerGlobalListener(events: string[]) {
    $(document).off('.zui.global').on(events.map(event => `${event}.zui.global`).join(' '), `[zui-on],${events.map(x => `[zui-on-${x}]`)},[data-on]`, handleGlobalEvent);
}

registerGlobalListener(['click', 'change', 'inited']);
