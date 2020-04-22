const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',

    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        contentBase: [
            path.resolve(__dirname, 'dist'),
            path.resolve(__dirname, 'static'),
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname),
        ],
        port: 8080,
        open: true,
        watchContentBase: true,
    },

    module: {
        rules: [
            { 
                test: /\.(?:js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'ts-loader' },
                ],
            },
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'source-map-loader',
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};