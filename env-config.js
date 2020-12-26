const packageJson = require('./package.json')
const prod = process.env.NODE_ENV === 'production'
const prefix = prod ? packageJson.baseUrl : ''

module.exports = {
  'process.env.BACKEND_URL': prefix
}
