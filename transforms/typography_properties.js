const {px2rem} = require("./px_rem");

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.typography_properties = {
    name: 'typography/properties',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'typography',
    transformer(token) {
        const { value } = token;

        return {
            ...value,
            fontSize: `${px2rem(value.fontSize)}rem`
        }
    },
}
