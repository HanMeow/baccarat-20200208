import { errorMessageBoxCB, handleStorage } from '@UTIL'
import store from '../store/store'

const localLocale = {
    zh_cn: {
        tip_auth_not_enough: '您的权限不足'
    },
    en_us: {
        tip_auth_not_enough: 'Your permission is insufficient'
    }
}

const showMessage = (flag, from, next) => {
    if (flag) {
        next()
    } else {
        errorMessageBoxCB({
            message: (window.locale || localLocale)[store.getters['Common/nowLang']]['tip_auth_not_enough']
        }, {
            callback: () => {
                if (from.name === 'game') return
                next({ path: '/' })
            },
            payload: undefined
        })
    }
}

const checkLogin = (to, from, next) => {
    if (!store.getters.userInfo.token) {
        next(from.path)
        return false
    }
    return true
}

export const checkToken = (to, form, next) => {
    if (!checkLogin(to, form, next)) {
        return
    }
    next()
}

export const checkActivity = (to, from, next) => {
    let status = store.getters.ActivityMenu.some(i => {
        return i.function !== 'NewPlacard'
    })
    showMessage(status, from, next)
}
export const checkPermission = (to, from, next) => {
    if (!checkLogin(to, from, next)) {
        return
    }
    let hasPermission
    if(to.name === 'TransferMain' || to.name === 'TransferHistory' || to.name === 'TransferStation') {
        // TransferMain TransferHistory TransferStation
        hasPermission = !!store.getters.permissionList.filter(i => i === 'Transfer')[0]
    } else {
        hasPermission = !!store.getters.permissionList.filter(i => i === to.name)[0]
    }
    // const hasPermission = !!store.getters.permissionList.filter(i => i === to.name)[0]
    showMessage(hasPermission, from, next)
}

export const checkDownLoadPermission = (to, from, next) => {
    const ua = window.navigator.userAgent
    const setting = window['misJson'] ? JSON.parse(misJson) : handleStorage('settings')
    if (!/Crosswalk/gi.test(ua) && Array.isArray(setting.iosDownloadLoc) && Array.isArray(setting.androidDownloadLoc) && setting.iosDownloadLoc.length && setting.androidDownloadLoc.length) {
        next()
    } else {
        next({ name: 'home' })
    }
}

export const checkVip = (to, from, next) => {
    if (!checkLogin()) {
        return
    }
    const hasVip = store.getters.userInfo.vipSwitch === 0 && store.getters.permissionList.includes(to.name)
    showMessage(hasVip, from, next)
}

export const checkTestAccount = (to, from, next) => {
    if (!checkLogin()) {
        return
    }
    let hasPermission = store.getters.rechargePermission.code.includes(to.name) || store.getters.rechargePermission.code.includes(to.params.payType) || store.getters.takeCashPermission.code.includes(to.name)
    let userType = !store.getters.userInfo.type
    showMessage(hasPermission && userType, from, next)
}

export const checkDomainID = async (to, from, next) => {
    if (to.params.id === 'undefined' || to.params.id === 'home' || to.params.id.length !== 8) {
        next({ name: 'home' })
    } else {
        await store.dispatch(_M.CHECK_DOMAIN_URL, { id: to.params.id })
        if (window['frontJson'] && +window['frontJson'].ui_login_page === 0 && !store.getters.userInfo.token) {
            next({ name: 'login' })
        } else {
            next()
        }
    }
}

export const redirectFun = (to) => {
    let menu = store.getters[`${to.name}Menu`]
    let hasArray = menu.length !== 0
    // console.log('vv', to.name, menu, hasArray)
    const obj = {
        Recharge: { name: hasArray ? 'bankMain' : 'home' },
        TakeCash: { name: hasArray ? menu[0].link : 'home' },
        Activity: (() => {
            let isLogin = !!store.getters.userInfo.token
            const ActivityDefine = menu.some(v => v.function === 'ActivityDefine') || isLogin ? 'ActivityDefine' : 'NewPlacard'
            return { name: hasArray ? ActivityDefine : 'home' }
        })(),
        Team: { name: hasArray ? 'teamMain' : 'home' }
    }
    return obj[to.name] || { name: hasArray ? menu[0].function : 'home' }
}

export const check3rdPartyChat = (to, from, next) => {
    if (to.name === 'ChatList' && store.getters.thirdparty.length) {
        next()
    } else {
        next({ name: 'Chat' })
    }
}
