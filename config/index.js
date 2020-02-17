// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var argvs = process.argv
var argv = argvs[argvs.length - 2] || 'classic'
var style = argvs[argvs.length - 1] || 'default'

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/fusionlotterywap/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        // assetsSubDirectory: argv === 'lala' ? (isPrew() ? `${argv}_${prew}/${style}` : `${argv}/${style}`) : (isPrew() ? `${argv}_${prew}` : `${argv}`) ,
        assetsSubDirectory: `fusionlotterywap/gy_default`,
        assetsOtherDirectory: 'fusionlotterywap',
        assetsPublicPath: '/',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        // npm run --report => process.env.npm_config_report
        bundleAnalyzerReport: process.env.npm_config_report,
    },
    dev: {
        env: require('./dev.env'),
        port: 8090,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        // proxyTable: {
        //     '/api': {
        //         target: {
        //             host: 'urt008.100piv.tech',
        //             protocol: 'http:',
        //             port: 80,
        //         },
        //         changeOrigin: true,
        //         secure: false,
        //     },
        // },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false,
    },
}
