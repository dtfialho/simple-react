const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "..", "src", "index.js"), 
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "main.js"
  },
  target: "web",
  resolve: {
    extensions: ['.js','.jsx','.json'] 
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:  'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "public", "index.html")
    })
  ]
}
