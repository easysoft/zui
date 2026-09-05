import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {
    addDate,
    contrastColor,
    convertBytes,
    convertString,
    createDate,
    decodeBase64,
    deepCall,
    deepGet,
    deepGetPath,
    encodeBase64,
    escapeHtml,
    formatBytes,
    formatDate,
    formatDateSpan,
    formatString,
    formatWithPipes,
    getUniqueCode,
    hex2Rgb,
    hslToRgb,
    isLightColor,
    isSameWeek,
    isTomorrow,
    isValidDate,
    isYesterday,
} from '@zui/helpers';

describe('@zui/helpers', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 7, 1, 9, 30, 0));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe('date helpers', () => {
        it('normalizes seconds, milliseconds, numeric strings, and Date references', () => {
            expect(createDate(1_700_000_000).getTime()).toBe(1_700_000_000_000);
            expect(createDate('1700000000').getTime()).toBe(1_700_000_000_000);

            const original = new Date(2026, 0, 1);
            expect(createDate(original)).toBe(original);
            const clone = createDate(original, true);
            expect(clone).not.toBe(original);
            expect(clone.getTime()).toBe(original.getTime());
        });

        it('parses date-only ISO strings as local midnight in any time zone', () => {
            const originalTZ = process.env.TZ;
            try {
                for (const tz of ['America/Edmonton', 'Asia/Shanghai', 'UTC']) {
                    process.env.TZ = tz;
                    const date = createDate('2026-09-17');
                    expect([date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()]).toEqual([2026, 8, 17, 0]);
                    expect(formatDate('2026-09-17', 'yyyy-MM-dd')).toBe('2026-09-17');
                    expect(formatDate(' 2026-09-17 ', 'yyyy-MM-dd')).toBe('2026-09-17');
                }
            } finally {
                process.env.TZ = originalTZ;
            }
            expect(createDate('2026-09-17T00:00:00Z').getTime()).toBe(Date.UTC(2026, 8, 17));
            expect(createDate('2026-09-17 10:30:00').getHours()).toBe(10);
        });

        it('rejects out-of-range fields in date-only ISO strings', () => {
            for (const value of ['2026-13-17', '2026-00-17', '2026-09-00', '2026-09-32', '0000-00-00']) {
                expect(isValidDate(value)).toBe(false);
                expect(formatDate(value, 'yyyy-MM-dd', 'invalid')).toBe('invalid');
            }
        });

        it('preserves years below 100 in date-only ISO strings', () => {
            for (const [value, year] of [['0000-01-01', 0], ['0001-01-01', 1], ['0099-01-01', 99]] as const) {
                const date = createDate(value);
                expect([date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()]).toEqual([year, 0, 1, 0]);
            }
        });

        it('adds supported calendar units without mutating the input', () => {
            const original = new Date(2026, 0, 5, 10, 0, 0);
            expect(addDate(original, '2week').getDate()).toBe(19);
            expect(addDate(original, 3, 'hour').getHours()).toBe(13);
            expect(formatDate(addDate('2026-12-31', 1, 'day'), 'yyyy-MM-dd')).toBe('2027-01-01');
            expect(formatDate(addDate('2026-11-15', 2, 'month'), 'yyyy-MM-dd')).toBe('2027-01-15');
            expect(original.getDate()).toBe(5);
            expect(original.getHours()).toBe(10);
        });

        it('uses Monday as the first day of a week', () => {
            expect(isSameWeek('2026-06-01', '2026-06-07')).toBe(true);
            expect(isSameWeek('2026-06-01', '2026-06-08')).toBe(false);
        });

        it('formats tokens, invalid values, and date spans deterministically', () => {
            const date = new Date(2026, 7, 1, 9, 3, 5, 5);
            expect(formatDate(date, 'yyyy-MM-dd hh:mm:ss.SSS')).toBe('2026-08-01 09:03:05.005');
            expect(formatDate('not-a-date', 'yyyy-MM-dd', 'invalid')).toBe('invalid');
            expect(formatDateSpan('2026-08-01', '2026-08-05')).toBe('8-1 ~ 5');
            expect(isYesterday('2026-07-31', '2026-08-01')).toBe(true);
            expect(isTomorrow('2026-08-02', '2026-08-01')).toBe(true);
        });
    });

    describe('string helpers', () => {
        it('runs converter pipelines and supports custom converter overrides', () => {
            expect(convertString('jim', 'upper|quote')).toBe('"JIM"');
            expect(convertString('123456', 'mask:2,0')).toBe('12****');
            expect(convertString('value', 'missing')).toBe('value');
            expect(convertString('abc', 'upper', {upper: value => `custom:${value}`})).toBe('custom:abc');
        });

        it('formats object and positional placeholders without consuming missing keys', () => {
            expect(formatWithPipes('Hello {name|upper}; {missing}', {name: 'zui'})).toBe('Hello ZUI; {missing}');
            expect(formatString('{0} {1}!', 'Hello', 'ZUI')).toBe('Hello ZUI!');
            expect(formatString('{answer}', {answer: 42})).toBe('42');
        });

        it('converts byte values at unit boundaries and rejects malformed values', () => {
            expect(formatBytes(1023)).toBe('1023.00B');
            expect(formatBytes(1024)).toBe('1.00KB');
            expect(convertBytes('1.5mb')).toBe(1_572_864);
            expect(convertBytes('100')).toBe(100);
            expect(convertBytes('1 MB')).toBe(0);
        });

        it('escapes HTML and round-trips UTF-8 base64 content', () => {
            expect(escapeHtml('<p title="x">Tom & Jerry\'s</p>')).toBe('&lt;p title=&quot;x&quot;&gt;Tom &amp; Jerry&#039;s&lt;/p&gt;');
            const source = 'ZUI 你好 👋';
            expect(decodeBase64(encodeBase64(source))).toBe(source);
            expect(() => decodeBase64('%%%')).toThrow();
        });
    });

    describe('object helpers', () => {
        it('returns the complete access path without mutating path arrays', () => {
            const source = {a: [{b: {c: 1}}]};
            const path = ['a', '0', 'b', 'c'];
            expect(deepGetPath(source, path)).toEqual([source, source.a, source.a[0], source.a[0].b, 1]);
            expect(path).toEqual(['a', '0', 'b', 'c']);
        });

        it('supports bracket access to Maps and returns defaults for unresolved paths', () => {
            const value = {items: new Map([['first', {name: 'ZUI'}]])};
            expect(deepGet(value, 'items[first].name')).toBe('ZUI');
            expect(deepGet(value, 'items[missing].name', 'fallback')).toBe('fallback');
            expect(() => deepGetPath({a: 1}, 'a[0].name')).toThrow(/Cannot access property/);
        });

        it('calls methods with their parent as this and honors explicit receivers', () => {
            const source = {
                value: 3,
                nested: {
                    value: 5,
                    add(this: {value: number}, amount: number) {
                        return this.value + amount;
                    },
                },
            };
            expect(deepCall(source, 'nested.add', [2])).toBe(7);
            expect(deepCall(source, 'nested.add', [2], {value: 10})).toBe(12);
            expect(() => deepCall(source, 'nested.value', [], undefined, true)).toThrow(/Cannot call function/);
        });
    });

    describe('color and code helpers', () => {
        it('parses valid HEX colors and rejects invalid characters or lengths', () => {
            expect(hex2Rgb('#f00')).toEqual([255, 0, 0]);
            expect(hex2Rgb('00ff7f')).toEqual([0, 255, 127]);
            expect(() => hex2Rgb('zzzzzz')).toThrow('Invalid HEX color');
            expect(() => hex2Rgb('#ffff')).toThrow('Invalid HEX color');
        });

        it('wraps hue, clamps saturation/lightness, and picks contrast colors', () => {
            const green = hslToRgb(120, 1, 0.5);
            expect(green[0]).toBeCloseTo(0);
            expect(green[1]).toBeCloseTo(255);
            expect(green[2]).toBeCloseTo(0);
            expect(hslToRgb(120, 5, 2)).toEqual([255, 255, 255]);
            expect(isLightColor('#ffffff')).toBe(true);
            expect(contrastColor('#ffffff')).toBe('#333333');
            expect(contrastColor('#000000')).toBe('#ffffff');
        });

        it('produces stable, non-cryptographic string codes', () => {
            expect(getUniqueCode('ZUI')).toBe(getUniqueCode('ZUI'));
            expect(getUniqueCode('ZUI')).not.toBe(getUniqueCode('zui'));
            expect(getUniqueCode('')).toBe(0);
        });
    });
});
