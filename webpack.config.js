const ngToolsWebpack = require('@ngtools/webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules','./app']
    },
    entry: './app/main.aot.ts',
    output: {
        path: './target/hitechshop',
        publicPath: 'app/',
        filename: 'app/app.main.js'
    },
    plugins: [
        new ngToolsWebpack.AotPlugin({
            tsConfigPath: './tsconfig.aot.json',
            entryModule: __dirname + '/app/app.module#AppModule'
        }),
        new CopyWebpackPlugin([
        	{from: './index.html' },
                {from: 'node_modules/zone.js/dist/zone.js', to: 'resources/js/zonejs/zone.js'},
                {from: './resources/**' }
        ]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ],
    module: {
        loaders: [
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']},
            {test: /\.css$/, loader: 'raw-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.ts$/, loader: '@ngtools/webpack'}
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

