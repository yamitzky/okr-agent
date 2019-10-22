const path = require('path')

module.exports = {
  webpack(config, _) {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  }
}
