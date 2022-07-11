const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const common = require('./common')

common.plugins.push(new ReactRefreshPlugin())

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
    port: '3000',
    static: ['../public'],
    open: true,
    hot: true
  }
}
