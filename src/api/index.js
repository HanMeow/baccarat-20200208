import axios from 'axios'

axios.defaults.withCredentials = true

export const handleAjax = async ({ path, method, mainServer, responseType }, input = {}) => {
    const excludePaths = [
        '/static/mis/192.168.99.69.json',
        '/static/mis/lotteryConfig.json'
    ]
    const url = mainServer && !excludePaths.includes(path) ? `//${mainServer}${path}` : `${path}`
    console.log('debug: handleAjax -> responseType', responseType)
    return await axios({
        method: method === 'get' ? 'get' : 'post',
        url,
        ...(method === 'get'
            ? { params: { data: input } }
            : {
                  data: Qs.stringify({
                      data: input,
                  }),
              }),
        ...(responseType ? { responseType } : {}),
    })
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log('err: ', error)
            console.log('err')
            console.log('axios catch error:' + error)
            return Promise.reject({
                message: 'Gateway Timeout',
            })
        })
}
