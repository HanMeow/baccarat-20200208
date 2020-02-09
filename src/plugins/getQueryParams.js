const getQueryParams = {}
getQueryParams.install = (Vue, options) => {
    Vue.prototype.$getQueryParams = (() => {
        const params = {}
        if (location.search.substr(1)) {
            const searchs = location.search.substr(1).split(/&|=/)
            searchs.forEach((item, index) => {
                if (!(index % 2)) {
                    params[item] = searchs[index + 1]
                }
            })
        }
        return {
            params,
            searchs: location.search.substr(1)
        }
    })()
}

export default getQueryParams
