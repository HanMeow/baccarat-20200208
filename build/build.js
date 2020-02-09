require('./check-versions')()

process.env.NODE_ENV = 'production'
const isPrew = () => process.argv.indexOf('-prew') !== -1

var fs = require('fs')
var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var argvs = process.argv
var argv = process.env.npm_config_theme ? process.env.npm_config_theme.split(/\_/)[0] : argvs[argvs.length - 2]
var style = process.env.npm_config_theme ? process.env.npm_config_theme.split(/\_/).slice(1).join('_') : argvs[argvs.length - 1]
argv = isPrew() ? `${argv}_prew` : `${argv}`
var spinner = ora('building for production...')
spinner.start()
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
        fs.writeFile(`logs/${argv}_${style}.txt`, stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n', function (err) {
            if (err) console.error(err)
            console.log('Write operation complete.')
        });
        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
