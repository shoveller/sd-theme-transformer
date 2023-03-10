/**
 * @type {import('style-dictionary/types').Format}
 */
module.exports.css_variables = {
  name: 'css/variables',
  formatter({ dictionary }) {
    return `${this.selector} {
${dictionary.allProperties
  .map(({ name, value }) => `  --${name}: ${value};`)
  .join('\n')}}`
  },
}
