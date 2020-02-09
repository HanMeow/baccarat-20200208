// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        // to edit target browsers: use "browserlist" field in package.json
        autoprefixer: {}
    },
    'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
    }
}
