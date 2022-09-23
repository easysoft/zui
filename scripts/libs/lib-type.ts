export enum LibType {
    cssBase = 'css-base',
    control = 'control',
    jsHelpers = 'js-helpers',
    component = 'component',
    jsUI = 'js-ui',
    cssUtilities = 'css-utilities',
    jsLib = 'js-lib',
    other = 'other',
}

export const libTypeOrders = {
    [LibType.other]: 0,
    [LibType.cssBase]: 1,
    [LibType.control]: 2,
    [LibType.jsHelpers]: 3,
    [LibType.component]: 4,
    [LibType.jsUI]: 5,
    [LibType.cssUtilities]: 6,
    [LibType.jsLib]: 7,
};
