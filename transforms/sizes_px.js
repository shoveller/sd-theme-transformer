/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.sizes_px = {
    name: 'sizes/px',
    type: 'value',
    matcher(token) {
        return ['fontSizes', 'spacing', 'borderRadius', 'borderWidth', 'sizing'].includes(token.type);
    },
    transformer(token) {
        return `${parseFloat(token.value)}px`;
    },
}
