const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const packageJson = require('./package.json')
const prod = process.env.NODE_ENV === 'production'
const prefix = prod ? packageJson.baseUrl : ''

const disable = !!process.env.NO_SW

module.exports = withPWA({
  assetPrefix: prefix,
  pwa: {
    disable: disable,
    scope: './',
    subdomainPrefix: prefix,
    sw: disable ? '' : '/sw.js',
    dest: 'public',
    runtimeCaching
  }
})
