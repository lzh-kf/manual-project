const { merge } = require("webpack-merge")
const webpack = require("webpack")
const common = require("./webpack.common.js")
module.exports = merge(common({ mode: "development" }), {
  mode: "development",
  devtool: 'eval-cheap-module-source-map',
  optimization: {
    runtimeChunk: true
  },
  devServer: {
    static: "./docs",
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
  },
  plugins: [
    // 定义环境变量
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        serverUrl: JSON.stringify("dev"),
        base: JSON.stringify("/base-dev"),
      },
    }),
  ],
})
