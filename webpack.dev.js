const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        historyApiFallback: true
    },
    plugins: [
        // 定义环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                serverUrl: JSON.stringify('dev'),
                base: JSON.stringify('/base-dev')
            },
        })
    ],
})