import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import loaders from './webpack.loaders';
import WebpackCleanupPlugin from 'webpack-cleanup-plugin';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
// import OfflinePlugin from 'offline-plugin';

const __DEV__ = process.env.NODE_ENV !== 'production';

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        sourceMap: __DEV__,
        plugins: [
            require('postcss-import'),
            require('postcss-simple-vars'),
            require('postcss-property-lookup'),
            require('postcss-nested-props'),
            require('postcss-nested'),
            require('postcss-advanced-variables'),
            require('postcss-assets')({
                relative: true,
                basePath: path.resolve(__dirname, 'app'),
            }),
            require('postcss-functions')({
                functions: {
                    'vw-column': (piece = 1, pie = 24) => {
                        return (piece / pie) * 100 + 'vw';
                    }
                }
            }),
            require('postcss-cssnext')({
                features: {
                    customProperties: false
                }
            }),
            require('stylefmt'),
        ],
    }
};

const rules = [
    ...loaders,
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: __DEV__,
                        minimize: !__DEV__,
                    }
                },
                {
                    loader: 'resolve-url-loader',
                    options: {
                        sourceMap: __DEV__
                    }
                },
                postCSSLoader,
            ]
        })
        
    },
    {
        test: /\.sss$/,
        loaders: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                }
            },
            postCSSLoader
        ],
    }
];

// Basic settings
var config = {
    entry: [
        './app/main.jsx',
        './app/css/general.css',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: __DEV__ ? '[name].js' : '[name].[hash].js',
        publicPath: '/',
        chunkFilename: "[name].[chunkhash].js",

        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },
    target: "web",
    module: {
        rules,

        noParse: [
            /fastclick/
        ],
    },
    externals: {
        TweenLite: 'TweenLite'
    },
    resolve: {
        alias: {
            Views: path.resolve(__dirname, './app/views'),
            CSS: path.resolve(__dirname, './app/css'),
        },
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        // new webpack.LoaderOptionsPlugin(),
        // extractSCSS,

        new ExtractTextPlugin({
			filename: 'style.[hash].css',
			allChunks: true
		}),

        new HtmlWebpackPlugin({
            inject: true,
            template: 'app/index.html',
        }),

        // Set global variables in JS
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(__DEV__)
        }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     minChunks: function (module) {
        //         // this assumes your vendor imports exist in the node_modules directory
        //         return module.context && module.context.indexOf('node_modules') !== -1;
        //     }
        // }),

        //     new WebpackAssetsManifest({
        //         // Options go here
        //         output: './manifest.json',
        //     }),
    ],
};

let completeConfig;

// Development settings
if (__DEV__ == true) {
    completeConfig = {
        ...config,
        plugins: [
            ...config.plugins,
            new FriendlyErrorsWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ],
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, "build"),
            publicPath: '',
            port: 9000,

            // It suppress everything except error, so it has to be set to false as well
            // to see success build.
            noInfo: false,
            // enable HMR
            hot: true,
            // embed the webpack-dev-server runtime into the bundle
            inline: true,
            // serve index.html in place of 404 responses to allow HTML5 history
            historyApiFallback: true,
            // It suppress error shown in console, so it has to be set to false.
            quiet: false,
        }
    }
}
// Production settings
else {
    completeConfig = {
        ...config,
        plugins: [
            new WebpackCleanupPlugin(), // cleans build folder

            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                }
            }),

            ...config.plugins,

            new UglifyJSPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            // new OfflinePlugin()
        ],

        performance: {
            hints: "warning", // enum
            maxAssetSize: 200000, // int (in bytes),
            maxEntrypointSize: 400000, // int (in bytes)
            assetFilter: function (assetFilename) {
                // Function predicate that provides asset filenames
                return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
            }
        },
    }
}

module.exports = completeConfig;