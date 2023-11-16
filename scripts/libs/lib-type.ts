export enum LibType {
    config = 'config',
    cssBase = 'css-base',
    control = 'control',
    jsHelpers = 'js-helpers',
    component = 'component',
    jsUI = 'js-ui',
    cssUtilities = 'css-utilities',
    jsLib = 'js-lib',
    other = 'other',
    examples = 'examples',
}

export const libTypeOrders = {
    [LibType.config]: 0,
    [LibType.cssBase]: 10,
    [LibType.control]: 20,
    [LibType.jsHelpers]: 30,
    [LibType.component]: 40,
    [LibType.jsUI]: 50,
    [LibType.cssUtilities]: 60,
    [LibType.jsLib]: 70,
    [LibType.other]: 80,
    [LibType.examples]: 90,
};
