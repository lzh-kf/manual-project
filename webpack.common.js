const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
const { loader } = MiniCssExtractPlugin
module.exports = (env) => {
  return {
    entry: "./src/index.ts",
    output: {
      filename: `js/[name].[chunkhash].js`,
      path: path.resolve(__dirname, "docs"),
      clean: true,
      pathinfo: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: './src/assets/favicon.ico'
      }),
      new VueLoaderPlugin(),
      AutoImport.default({
        resolvers: [ElementPlusResolver()],
      }),
      Components.default({
        resolvers: [ElementPlusResolver()],
      })
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
          include: path.resolve(__dirname, 'src'),
          use: ["vue-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.mode === "development" ? "style-loader" : loader,
            // {
            //   loader: path.resolve(__dirname, "pxToVw.js"),
            // },
            "css-loader",
            'postcss-loader',
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: [
            env.mode === "development" ? "style-loader" : loader,
            // {
            //   loader: path.resolve(__dirname, "pxToVw.js"),
            // },
            "css-loader",
            'postcss-loader',
            "sass-loader",
          ],
        },
        {
          test: /\.(ts|tsx)?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
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
