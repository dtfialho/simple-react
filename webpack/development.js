const common = require('./common')

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
    port: '3000',
    static: ['../public'],
    open: true,
    hot: true,
    liveReload: true
  }
}
