const { merge } = require('webpack-merge')
const commonConfig = require('./webpack/common')
const developmentConfig = require('./webpack/dev')
const productionConfig = require('./webpack/prod')

module.exports = (env) => {
  console.log({
    NODE_ENV: process.env.NODE_ENV,
    webpack_env: env,
  })

  switch (process.env.NODE_ENV) {
    case 'development':
      return merge(commonConfig, developmentConfig)
    case 'production':
      return merge(commonConfig, productionConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}
