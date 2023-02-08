module.exports.isPx = (/** string */value) => /[\d\.]+px$/.test(value)

module.exports.px2rem = (/** number|string */value) => {
  const baseFontSize = 16;
  const floatValue = parseFloat(value)

  if (isNaN(floatValue)) {
    return value;
  }

  if (floatValue === 0) {
    return 0;
  }

  return floatValue / baseFontSize;
}

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.px_rem = {
  name: 'px/rem',
  type: 'value',
  transformer(token) {
    if (module.exports.isPx(token.value)) {
      const value = token.value.replace('px', '')

      return `${module.exports.px2rem(value)}rem`;
    }

    return token.value;
  },
}
