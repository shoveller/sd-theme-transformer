const {px_rem} = require("./transforms/px_rem");
const {sizes_px} = require("./transforms/sizes_px");
const {typography_shorthand} = require("./transforms/typography_shorthand");
const {typography_properties} = require("./transforms/typography_properties");
const {shadow_shorthand} = require("./transforms/shadow_shorthand");
const {shadow_properties} = require("./transforms/shadow_properties");
const {name_symbol} = require("./transforms/name_symbol");
const {css_variables} = require("./formats/css_variables");
const {javascript_cjs} = require("./formats/javascript_cjs");
const styleDictionary = require('style-dictionary');

/**
 * 포메터 등록
 */
styleDictionary.registerFormat(css_variables);
styleDictionary.registerFormat(javascript_cjs);

/**
 * 트랜스포머 등록
 */
styleDictionary.registerTransform(name_symbol);
styleDictionary.registerTransform(sizes_px);
styleDictionary.registerTransform(px_rem);
styleDictionary.registerTransform(shadow_shorthand);
styleDictionary.registerTransform(shadow_properties);
styleDictionary.registerTransform(typography_shorthand);
styleDictionary.registerTransform(typography_properties);

/**
 *
 * @param {buildPath: string, destination: string, selector: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeCSSTheme = ({ buildPath, destination, selector = ':root' }) => ({
    buildPath,
    transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'sizes/px',
        'shadow/shorthand',
        'px/rem',
        'typography/shorthand',
    ],
    files: [
        {
            destination,
            format: 'css/variables',
            selector,
        },
    ],
});

/**
 *
 * @param {buildPath: string, destination: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeSCSSTheme = ({ buildPath, destination }) => ({
    buildPath,
    transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'sizes/px',
        'shadow/shorthand',
        'px/rem',
        'typography/shorthand',
        'name/symbol',
    ],
    files: [
        {
            destination,
            format: `scss/variables`,
        },
    ],
});

/**
 *
 * @param {buildPath: string, destination: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeESMTheme = ({ buildPath, destination }) => ({
    buildPath,
    transforms: ['name/symbol', 'sizes/px', 'px/rem', 'shadow/properties', 'typography/properties'],
    files: [
        {
            destination,
            format: `javascript/es6`,
        },
    ],
});

/**
 *
 * @param {buildPath: string, destination: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeCJSTheme = ({ buildPath, destination }) => ({
    buildPath,
    transforms: ['sizes/px', 'px/rem', 'shadow/properties', 'typography/properties'],
    files: [
        {
            destination,
            format: `javascript/cjs`,
        },
    ],
});
