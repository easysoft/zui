/**
 * Convert light shade to dark shade
 * @param {string[]} shade
 */
function darkShade(shade) {
    return [...shade].inverse();
}

module.exports = {
    darkShade,
};
