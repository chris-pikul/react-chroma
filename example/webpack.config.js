const Path = require('path');

const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CSSPlugin = require('mini-css-extract-plugin');

const Package = require(Path.resolve(__dirname, 'package.json'));

const development = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: Path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: Package.name+'.dev.js',
        path: Path.resolve(__dirname, 'dev'),
    },
    devServer: {
        contentBase: [
            Path.resolve(__dirname, 'dev'),
            Path.resolve(__dirname, 'static'),
            Path.resolve(__dirname),
        ],
        port: 8080,
        inline: true,
        watchOptions: {
            aggregateTimeout: 500,
            poll: true,
            ignored: /node_modules/
        },
        watchContentBase: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader', options: {
                    } },
                   /* { loader: CSSPlugin.loader, options: {
                         publicPath: 'dist/',
                         sourceMap: true,
                    } },*/
                    { loader: 'css-loader', options: { 
                        importLoaders: 1,
                        sourceMap: true,
                    } },
                    { loader: 'sass-loader', options: {
                        sourceMap: true,
                    } },
                ]
            }
        ],
    },

    plugins: [
        new CleanPlugin(),
    ],

    resolve: {
        extensions: ['.js', '.json'],
        modules: [ Path.resolve(__dirname, 'src'), 'node_modules' ],
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

module.exports = function(env) {
    return development;
}