const {camelCase} = require("lodash");

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.name_symbol = {
    name: 'name/symbol',
    type: 'name',
    transformer(token) {
        // return [token.type, ...token.path].map(camelCase).join('_');
        return token.path.map(camelCase).join('_');
    },
}
