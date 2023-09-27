//const path = require('path');
module.exports = {
    entry: './code/main.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource'
            }
        ]
    }
}