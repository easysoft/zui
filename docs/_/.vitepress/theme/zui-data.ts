declare global {
    var __ZUI_VERSION__: string;
}

export default {
    version: __ZUI_VERSION__,
    skin: {
        shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
        accent: ['primary', 'secondary', 'success', 'warning', 'danger', 'important', 'special', 'gray'],
        surface: ['canvas', 'surface-light', 'surface', 'surface-strong', 'inverse', 'white', 'black', 'transparent'],
        solid: ['primary', 'secondary', 'success', 'warning', 'danger', 'important', 'special', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900', 'gray-950'],
        gray: ['gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 'gray-600', 'gray-700', 'gray-800', 'gray-900', 'gray-950'],
        pale: ['primary-pale', 'secondary-pale', 'success-pale', 'warning-pale', 'danger-pale', 'important-pale', 'special-pale', 'gray-50-pale', 'gray-100-pale', 'gray-200-pale', 'gray-300-pale', 'gray-400-pale', 'gray-500-pale', 'gray-600-pale', 'gray-700-pale', 'gray-800-pale', 'gray-900-pale', 'gray-950-pale'],
        ghost: ['ghost', 'primary-ghost', 'secondary-ghost', 'success-ghost', 'warning-ghost', 'danger-ghost', 'important-ghost', 'special-ghost'],
        outline: ['outline', 'primary-outline', 'secondary-outline', 'success-outline', 'warning-outline', 'danger-outline', 'important-outline', 'special-outline'],
        rounded: ['rounded-none', 'rounded-sm', 'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full'],
    }
};
