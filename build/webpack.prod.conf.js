var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxPlugin = require('workbox-webpack-plugin')

var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true,
        }),
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    mode: 'production',
    output: {
        // publicPath: '//CDN/',
        publicPath: '/crown-baccarat/',
        path: `${config.build.assetsRoot}`,
        filename: utils.assetsPath('js/[name].js'),
        chunkFilename: utils.assetsPath('js/[name].js'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendor',
                },
                'async-vendors': {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 2,
                    priority: 1,
                    chunks: 'async',
                    name: 'async-vendors',
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: {
            name: 'manifest',
        },
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env,
            static: `fusionwap`,
        }),
        // extract css into its own file
        new MiniCssExtractPlugin({
            publicPath: `${config.build.assetsRoot}`,
            filename: utils.assetsPath(`css/[name].css`),
            allChunks: true,
        }),
        new webpack.HashedModuleIdsPlugin(),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
                discardComments: {
                    removeAll: true,
                },
            },
        }),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'none',
        }),
        // 忽略moment locale
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        new webpack.optimize.ModuleConcatenationPlugin(),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsOtherDirectory,
                ignore: ['.*'],
            },
        ]),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            importsDirectory: 'worker',
            importWorkboxFrom: 'local',
            clientsClaim: true,
            skipWaiting: true,
        }),
        // new WebpackPwaManifest({
        //     name: 'Yobo Web App',
        //     short_name: 'YoboPWA',
        //     description: 'Yobo Web App!',
        //     background_color: '#ffffff',
        //     crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        //     icons: [
        //         // {
        //         //     src: path.resolve('src/assets/icon.png'),
        //         //     sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        //         // },
        //         // {
        //         //     src: path.resolve('src/assets/large-icon.png'),
        //         //     size: '1024x1024' // you can also use the specifications pattern
        //         // }
        //     ],
        // }),
    ],
})

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8,
        }),
    )
}

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
