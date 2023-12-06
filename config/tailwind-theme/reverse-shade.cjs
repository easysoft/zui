/**
 * Reverse tailwind shade list.
 *
 * @param {{'50': string, '100': string, '200': string, '300': string, '400': string, '500': string, '600': string, '700': string, '800': string, '900': string, '950': string}} shade
 * @returns {{'50': string, '100': string, '200': string, '300': string, '400': string, '500': string, '600': string, '700': string, '800': string, '900': string, '950': string}}
 */
function reverseShade(shade) {
    const keys = Object.keys(shade).sort((a, b) => Number(a) - Number(b));
    return keys.reduce((reversedShade, key, index) => {
        reversedShade[key] = shade[keys[keys.length - 1 - index]];
        return reversedShade;
    }, {});
}

module.exports = {
    reverseShade,
};
