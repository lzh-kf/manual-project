const webpack = require("webpack")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(common({ mode: "production" }), {
  mode: "production",
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      // 分割第三方包
      cacheGroups: {
        vendors: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            if (module.context.includes("node_modules")) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1]
              return `${packageName.replace("@", "")}`
            }
          },
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("preview"),
        serverUrl: JSON.stringify("pre"),
        base: JSON.stringify("/base-pre"),
      },
    }),
  ],
})
