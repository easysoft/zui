/** The explicit attribute/property contract of a custom element option. */
export type ElementProperty = {
    attribute?: string;
    defaultValue?: unknown;
    reflect?: boolean;
    fromAttribute?: (value: string | null) => unknown;
    normalize?: (value: unknown) => unknown;
    toAttribute?: (value: unknown) => string | null;
};

export function stringProperty(attribute: string, defaultValue = '', reflect = true): ElementProperty {
    return {
        attribute,
        defaultValue,
        reflect,
        fromAttribute: value => value ?? defaultValue,
        normalize: value => value == null ? defaultValue : String(value),
    };
}

/** Boolean attributes use HTML presence semantics, including disabled="false". */
export function booleanProperty(attribute: string): ElementProperty {
    return {
        attribute,
        defaultValue: false,
        reflect: true,
        fromAttribute: value => value !== null,
        normalize: Boolean,
        toAttribute: value => value ? '' : null,
    };
}

/** Invalid, non-finite and out-of-range numbers fall back to the declared default. */
export function numberProperty(attribute: string, defaultValue: number, minimum = 0): ElementProperty {
    const normalize = (value: unknown) => {
        const number = value === null || value === undefined || value === '' ? NaN : Number(value);
        return Number.isFinite(number) && Number.isInteger(number) && number >= minimum ? number : defaultValue;
    };
    return {attribute, defaultValue, reflect: true, fromAttribute: normalize, normalize};
}
