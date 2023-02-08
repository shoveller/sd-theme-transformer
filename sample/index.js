const styleDictionary = require('style-dictionary')
const { makeThemeConfig } = require('../index')

const SD = styleDictionary.extend(
  makeThemeConfig({ source: 'data/global.json' })
)

SD.buildAllPlatforms()
