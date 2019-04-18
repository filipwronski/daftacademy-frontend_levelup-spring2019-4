const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
var path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';
module.exports = {
    mode:  process.env.NODE_ENV,
    entry: './src/script.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
}