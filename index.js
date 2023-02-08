const {makeCSSTheme, makeSCSSTheme, makeESMTheme, makeCJSTheme} = require("./platforms");

/**
 *
 * @param  {theme: string, INPUT_DIR: string, buildPath: string}
 * @returns {import('style-dictionary/types').Config}
 */
module.exports.makeThemeConfig = ({source, buildPath = 'theme/'}) => {
    const [fileName = ''] = /([^\/\\]+\.json)$/.exec(source)
    if (!fileName) {
        throw new Error('Invalid source')
    }

    const [theme = ''] = fileName.split('.')
    if (!theme) {
        throw new Error('Invalid source')
    }

    return {
        source: [source],
        platforms: {
            css: makeCSSTheme({
                buildPath,
                destination: `css/${theme}.css`,
                selector: source.includes('global') ? ':root' : `.${theme}-theme`
            }),
            scss: makeSCSSTheme({
                buildPath,
                destination: `scss/${theme}.scss`
            }),
            esm: makeESMTheme({
                buildPath,
                destination: `js/esm/${theme}.js`
            }),
            cjs: makeCJSTheme({
                buildPath,
                destination: `js/cjs/${theme}.js`
            }),
        },
    };
};
