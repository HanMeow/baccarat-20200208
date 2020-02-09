var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
const { VueLoaderPlugin } = require('vue-loader')
var webpack = require('webpack')
const filterGradient = require('postcss-filter-gradient')
const WorkboxPlugin = require('workbox-webpack-plugin')
// const URLImportPlugin = require('webpack-external-import/webpack')

const resolve = dir => path.join(__dirname, '../src', dir)

module.exports = {
    entry: {
        app: resolve('/main.js'),
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@APP': resolve('/App'),
            '@router': resolve(`/router`),
            '@store': resolve('/store/store'),
            '@json': resolve('/json'),
            vue$: 'vue/dist/vue.esm.js',
            '@language': resolve('/language'),
            '@Main': resolve(`/main`),
            '@': resolve(''),
            '@T': resolve(``),
            '@C': resolve('/components'),
            '@V': resolve(`/view`),
            '@P': resolve(`/page`),
            '@IMGT': resolve(`/image`),
            '@API': resolve('/api'),
            '@CSS': resolve('../css'),
            '@CSST': resolve(`/css`),
            '@Style': resolve(`/css/Style/gy_default`),
            '@M': resolve('/store/modules'),
            '@UTIL': resolve('/util'),
            '@E': resolve('/components/element-ui'),
            '@I': resolve('/assets/image'),
            // 'vue-awesome-swiper$': 'vue-awesome-swiper/dist/vue-awesome-swiper.min.js',
            'vue-i18n$': 'vue-i18n/dist/vue-i18n.min.js',
            '@mixins': resolve(`/mixins`),
            '@Static': resolve(`../static`),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig,
            },
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: [resolve(''), resolve('../test'), resolve('../language/validate/')],
                // include: [resolve(''), resolve('../test'), resolve('node_modules/vue-awesome'), resolve('../language/validate/')]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    name: utils.assetsPath('img/[name].[ext]'),
                },
                // exclude: /\.webp(\?.*)?$/,
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]'),
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'es6-promise',
            Qs: 'Qs',
            moment: 'moment',
            // icon: ['vue-awesome/components/Icon', 'default'],
            _M: resolve('/store/modules/mutations'),
        }),
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [filterGradient()],
            },
        }),
        // new URLImportPlugin({
        //   manifestName: 'website-one'
        // }),
        new VueLoaderPlugin(),
        // new WorkboxPlugin.GenerateSW({
        //     // these options encourage the ServiceWorkers to get in there fast
        //     // and not allow any straggling "old" SWs to hang around
        //     // importWorkboxFrom: 'local',
        //     clientsClaim: true,
        //     skipWaiting: true,
        // }),
    ],
}
