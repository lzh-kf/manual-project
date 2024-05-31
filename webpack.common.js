const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
const TerserPlugin = require('terser-webpack-plugin')
const { loader } = MiniCssExtractPlugin
module.exports = (env) => {
  return {
    entry: "./src/index.ts",
    output: {
      filename: `js/[name].[hash].js`,
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        // 分割第三方包
        cacheGroups: {
          vendors:
            env.mode === "development"
              ? {}
              : {
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
        filename: "css/[name].[hash].css",
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new VueLoaderPlugin(),
      AutoImport.default({
        resolvers: [ElementPlusResolver()],
      }),
      Components.default({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".vue", ".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.vue$/i,
          use: ["vue-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.mode === "development" ? "style-loader" : loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: [
            env.mode === "development" ? "style-loader" : loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(ts|tsx)?$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-typescript",
                {
                  allExtensions: true,
                },
              ],
            ],
          },
        },
        // 图片
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            publicPath: "assets/",
            outputPath: "assets/",
          },
        },
        // 字体
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            publicPath: "assets/",
            outputPath: "assets/",
          },
        },
      ],
    },
  }
}
