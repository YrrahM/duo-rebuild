const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@schemas'] = path.resolve(__dirname, 'sanity/schemas/index.ts')
    return config
  }
}
