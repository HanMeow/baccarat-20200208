var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // template: pages[argv+'/index'],
            template: 'src/index.html',
            inject: true,
            chunksSortMode: 'none',
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            // importWorkboxFrom: 'local',
            clientsClaim: true,
            skipWaiting: true,
        }),
        new FriendlyErrorsPlugin(),
    ],
})

// for (var page in pages) {

//   // 配置生成的html文件，定义路径等
//   var conf = {
//     filename: 'index.html',
//     template: ,   // 模板路径
//     inject: true              // js插入位置
//   };
//   if (page in module.exports.entry) {
//     conf.chunks = ['manifest', 'vendor', 'app'];
//     // conf.hash = true;
//   }
//   console.log(conf)
//   module.exports.plugins.push(new HtmlWebpackPlugin(conf));
// }
