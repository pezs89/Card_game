const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');

const config = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [{
                loader: 'awesome-typescript-loader',
                options: {
                    transpileOnly: true,
                    configFileName: 'tsconfig.json'
                }
            }, 'angular2-template-loader']
        },
        {
            test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
            parser: {
                system: true
            },
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[ext]'
        },
        {
            test: /\.(css|scss)$/,
            exclude: helpers.root('src', 'app'),
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            })
        },
        {
            test: /\.(css|scss)$/,
            include: helpers.root('src', 'app'),
            use: ['raw-loader', 'sass-loader']
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css'
        }),
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)fesm5/,
            path.resolve(__dirname, 'src'), {}
        ),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ]),
    ]
}

module.exports = config;