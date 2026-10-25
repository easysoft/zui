/** Keep white when it meets 4.5:1; otherwise black is readable on the solid fill. */
function onColor(hex) {
    const [red, green, blue] = [1, 3, 5].map((start) => {
        const channel = parseInt(hex.slice(start, start + 2), 16) / 255;
        return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
    return 1.05 / (luminance + 0.05) >= 4.5 ? '#ffffff' : '#000000';
}

module.exports = palettes => Object.fromEntries(Object.entries(palettes).map(([name, palette]) => [
    name,
    name === 'gray' ? Object.fromEntries(Object.entries(palette).map(([shade, color]) => [shade, onColor(color)])) : onColor(palette[500]),
]));
