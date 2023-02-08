const {px2rem} = require("./px_rem");

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.typography_shorthand = {
    name: 'typography/shorthand',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'typography',
    transformer(token) {
        const { value } = token;
        return `${value.fontWeight} ${px2rem(value.fontSize)}rem/${value.lineHeight} ${value.fontFamily}`;
    },
}
