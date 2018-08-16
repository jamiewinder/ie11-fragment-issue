const path = require('path');

module.exports = env => ({
    entry: [
        '@babel/polyfill',
        path.resolve(__dirname, 'src/index.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'dist/')
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        symlinks: false
    }
});
