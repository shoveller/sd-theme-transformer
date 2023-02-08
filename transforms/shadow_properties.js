const transformShadow = (shadow) => {
    const {x, y, blur, spread} = shadow;

    return {
        ...shadow,
        x: `${x}px`,
        y: `${y}px`,
        blur: `${blur}px`,
        spread: `${spread}px`
    }
}

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.shadow_properties = {
    name: 'shadow/properties',
    type: 'value',
    transitive: true,
    matcher: (token) => ['boxShadow'].includes(token.type),
    transformer(token) {
        const {value} = token.original

        if (Array.isArray(value)) {
            return value.map((single) => transformShadow(single))
        }

        return transformShadow(value)
    },
}
