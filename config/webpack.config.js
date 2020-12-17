const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const index_html = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

 module.exports = {
  entry: {
    index:'./src/index.ja'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [index_html]
}; 