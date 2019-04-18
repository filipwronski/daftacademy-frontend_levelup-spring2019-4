var path = require('path');

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