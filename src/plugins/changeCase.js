const changeCase = {}
const genReplaceFunction = ({options, regex, pattern}) => {
    const opt = {}
    if (typeof options === 'object') {
        Object
            .keys(options)
            .forEach(function(item) {
                opt[item.replace(regex, pattern)] = options[item]
            })
        return opt
    } else if (typeof options === 'string') {
        return options.replace(regex, pattern)
    } else {
        return new Error('type not a object or a string')
    }
}

export const snakeCase = (options) => genReplaceFunction({
    options,
    regex: /([a-z])([A-Z])/g,
    pattern: function (match, p1, p2, p3, offset, string) {
        return p1 + '_' + p2.toLowerCase()
    }
})

export const camelCase = (options) => genReplaceFunction({
    options,
    regex: /_([a-zA-Z])/g,
    pattern: function(match, p1, p2, p3, offset, string) {
        return match[1].toUpperCase()
    }
})

changeCase.install = (Vue, options) => {
    Vue.prototype.$snakeCase = snakeCase
    Vue.prototype.$camelCase = camelCase
}

export default changeCase
