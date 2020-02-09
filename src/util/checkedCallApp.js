import CallApp from 'callapp-lib'
import { errorMessageBoxCB, handleStorage } from '@UTIL'
import { getTransfer } from '@UTIL/i18nDynamicLocale'
import saltedMd5 from 'salted-md5'
import { createWinOpen } from '@/plugins/customOpen'

const options = {
    scheme: {
        protocol: 'uniwebview',
        host: 'event',
    },
    timeout: 2500,
}

export default ({ name, gameScheme, gameHost, gameParams }) => {
    const gameQueryString = Object.keys(gameParams)
        .map(key => key + '=' + gameParams[key])
        .join('&')
    // if (sessionStorage.getItem('device') === 'webview' && sessionStorage.getItem('isWebview') === 'true') {
    //     const _path = encodeURIComponent(`${gameScheme}://${gameHost}?${gameQueryString}`)
    //     path = `?name=${name}&message=${_path}`
    // } else {
    options.scheme.protocol = gameScheme
    options.scheme.host = gameHost
    const path = `?${gameQueryString}`
    // }
    const callLib = new CallApp({
        ...options,
    })
    callLib.open({
        path,
        callback: () => {
            errorMessageBoxCB(
                {
                    message: getTransfer('ui_the_environment_is_currently_unavailable') || '目前环境不能使用。',
                },
                {
                    callback: () => {
                        const { CDN, platformCode } = handleStorage('settings')
                        const name = saltedMd5(platformCode, 'sport')
                        createWinOpen({
                            direct:
                                sessionStorage.getItem('device') === 'webview' &&
                                sessionStorage.getItem('isWebview') === 'true',
                        })(`//${CDN}/qr/index_${name}.html`)
                    },
                },
            )
        },
    })
}
