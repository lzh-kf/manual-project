const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                serverUrl: JSON.stringify('pro'),
                base: JSON.stringify('/base-pro')
            },
        })
    ]
})