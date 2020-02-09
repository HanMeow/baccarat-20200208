import { getTransfer } from '@UTIL/i18nDynamicLocale'
window.newWindow = ''
const customOpen = {}

const beforeLoading = () => {
    if (window.newWindow) {
        window.newWindow.document.title = `${getTransfer('ui_desperately_loading_for_you')}...`
        const styles = document.createElement('link')
        styles.href = 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.11/theme-chalk/index.css'
        styles.rel = 'stylesheet'
        styles.type = 'text/css'
        window.newWindow.document.head.appendChild(styles)
        const div = document.createElement('div')
        div.innerHTML = `<div class="el-loading-mask">
                <div class="el-loading-spinner">
                    <svg viewBox="25 25 50 50" class="circular">
                        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
                    </svg>
                </div>
            </div>`
        window.newWindow.document.body.appendChild(div)
    }
}
export const createWinOpen = function(opt) {
    return (url, action, target = '_blank') => {
        if (url === 'about:blank' || url === '') {
            window.newWindow = ''
        }
        if (
            /client/gi.test(navigator.userAgent) ||
            opt['direct'] ||
            (sessionStorage.getItem('device') === 'webview' && sessionStorage.getItem('isWebview') === 'true')
        ) {
            window.newWindow = window.open(url, target)
            beforeLoading(action)
        } else {
            if (!window.newWindow || window.newWindow.closed) {
                window.newWindow = window.open('about:blank', target)
                beforeLoading(action)
            }
            if (window.newWindow && url) {
                window.newWindow.location = url
                beforeLoading(action)
            } else {
                const link = document.createElement('a')
                link.href = url
                link.target = target
                link.click()
            }
        }
        return window.newWindow
    }
}

customOpen.install = (Vue, options = {}) => {
    Vue.prototype.$winOpen = createWinOpen(options)
}
export default customOpen
