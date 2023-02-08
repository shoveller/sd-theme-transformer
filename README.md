
# Plugin for Style-Dictionary<br />
[This repository is based on e.uid's design system offline class](https://github.com/simseonbeom/offline-class/blob/main/build-theme.js)<br />
This plugin converts design tokens into esm, cjs, css and scss variables.

## Install

```bash
$ npm i sd-theme-transformer -D
# or with yarn
$ yarn add sd-theme-transformer -D
```

## Usage

### Create a configuration file and load it into the cli 

```js
// build-theme.js
const styleDictionary = require('style-dictionary')
const { makeThemeConfig } = require('sd-theme-transformer')

const SD = styleDictionary.extend(
  makeThemeConfig({ source: 'data/global.json' })
)

SD.buildAllPlatforms()
```

Output:

```css
/* theme/css/global.css */
:root {
    --colors-white: #ffffff;
}
```

```js
// theme/js/cjs/global.js
module.exports = {
    "colors": {
        "white": "#ffffff"
    }
}
```

```js
// theme/js/esm/global.js
export const colors_white = "#ffffff";
```

```scss
// theme/scss/global.scss
$colors_white: #ffffff;
```

### Creating each theme file

Create an object for each theme, assuming that various customizations will be made in the configuration file.  

```js
// build-theme.js
const styleDictionary = require('style-dictionary');
const { makeThemeConfig } = require('sd-theme-transformer');

['data/global.json', 'data/dark.json', 'data/light.json'].forEach((source) => {
    const SD = styleDictionary.extend(makeThemeConfig({ source }));
    SD.buildAllPlatforms()
});
```

### Options
| Attribute         | Description                                                                                                                                                                       | Type               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| source            | [`source`](https://github.com/amzn/style-dictionary/blob/main/README.md#configjson) attribute of style-dictionary.                         | string    |
| buildPath         | [`platform.buildPath`](https://github.com/amzn/style-dictionary/blob/main/README.md#configjson) attribute of style-dictionary.<br>Default value: `'theme/'`                       | string             |


## License

[Apache 2.0](https://github.com/nado1001/sd-theme-transformer/blob/main/license)
