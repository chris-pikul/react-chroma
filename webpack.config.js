const Path = require('path');

const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HTMLPlugin = require('html-webpack-plugin');
const CSSPlugin = require('mini-css-extract-plugin');

const Package = require(Path.resolve(__dirname, 'package.json'));

const development = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: Path.resolve(__dirname, 'sandbox', 'index.tsx'),
    output: {
        filename: Package.name+'.dev.js',
        path: Path.resolve(__dirname, 'dev'),
    },
    devServer: {
        contentBase: [
            Path.resolve(__dirname, 'static'),
            Path.resolve(__dirname, 'dev'),
            Path.resolve(__dirname)
        ],
        port: 8080,
        inline: true,
        watchOptions: {
            aggregateTimeout: 500,
            poll: true,
            ignored: /node_modules/,
        },
        watchContentBase: true,
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/, 
                exclude: /node_modules/, 
                loader: 'ts-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    { loader: 'css-loader', options: { sourceMap: true, } },
                    { loader: 'sass-loader', options: { sourceMap: true, } },
                ]
            }
        ],
    },

    plugins: [
        new CleanPlugin(),
        new HTMLPlugin({
            title: Package.name,
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'root',
            mobile: true,
            baseHref: '/',
            links: [],
            scripts: [
                '/node_modules/react/umd/react.development.js',
                '/node_modules/react-dom/umd/react-dom.development.js',
            ],
            window: {
                env: {
                    dev: true
                }
            }
        }),
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [ 
            Path.resolve(__dirname, 'sandbox'),
            Path.resolve(__dirname, 'chroma'),
            Path.resolve(__dirname, 'styles'), 
            'node_modules'
        ],
        alias: {
            'react-chroma': Path.resolve(__dirname, 'chroma'),
            Styles: Path.resolve(__dirname, 'styles'),
        }
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

module.exports = function(env) {
    return development;
}