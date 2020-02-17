import Vue from 'vue'
import Router from 'vue-router'
import route from './route'
import store from '@store'

import { loadLanguageAsync } from '@UTIL/i18nDynamicLocale'
import { handleJson, getCookie } from '@UTIL'
import { Locals } from '@UTIL/vantLocal'
import Storage from '@UTIL/storage'

Vue.use(Router)

const getParams = async () => {
    const params = {}
    if (location.search.substr(1)) {
        const searchs = location.search.substr(1).split(/&|=/)
        searchs.forEach((item, index) => {
            if (!(index % 2)) {
                params[item] = searchs[index + 1]
            }
        })
        // query 含例外名稱不做 config
        const exceptions = ['redirect', 'test']
        let contain = false
        for (const key in params) {
            exceptions.includes(key) && (contain = true)
        }
        if (!contain) {
            await store.dispatch('Config/READ', params).catch(e => e)
        }
        // query 含例外名稱不做 config
    }
    console.log(params, 'params getParams')
    return params
}

const changeLang = async params => {
    const lang =
        params['lang'] ||
        localStorage.getItem(Storage.i18n) ||
        document.querySelector('html').getAttribute('lang') ||
        'zh_cn'
    const langs = lang.split(/(_|-)/).filter(i => !/(_|-)/.test(i))
    if (langs.length > 1) {
        await Locals(`${langs[0]}-${langs[1].toUpperCase()}`)
    } else {
        await Locals(langs[0].toUpperCase())
    }
    if (lang) {
        await store.dispatch('Common/SET_LANG', lang).catch(e => e)
    }
    await loadLanguageAsync(lang)
}

const getName = async (to, params) => {
    let name = {}
    if (to.name === 'Login' || to.name === 'registerId') {
        document.body.className = to.name !== 'ChatView' ? 'gy_bg_login j_text--body' : 'gy_bg_base j_text--body'
        await store.dispatch('Config/READ', { ...params, isClear: true }).catch(e => e)
    } else {
        document.body.className = 'gy_bg_base j_text--body'
        const noPremiss = ['Home', 'failure', 'ChatView', 'forget', 'forgetPassword', 'forgetAccount']
        // const sameUser =
        // handleJson(localStorage.getItem('userInfo'))['token'] === store.getters['Config/userInfo'].token
        if (!store.getters['Config/userInfo'].token && !noPremiss.includes(to.name)) {
            name = {
                name: 'registerId',
                params: {
                    linkId: '',
                },
            }
        }

        if (store.getters['Config/userInfo'].token && ['registerId', 'Login'].includes(to.name)) {
            name = {
                name: 'Home',
            }
        }
    }
    return name
}

const webview = (name, to, from, next) => {
    const checkingList = ['Home', 'Login', 'registerId']
    if (
        sessionStorage.getItem('device') === 'webview' &&
        sessionStorage.getItem('isWebview') === 'true' &&
        sessionStorage.getItem('footer') === 'hide' &&
        (checkingList.includes(name.name) || checkingList.includes(to.name))
    ) {
        store.dispatch('Config/webview', {
            key: 'action',
            value: 'closewebview',
        })
        return false
    }
    return true
}

const setToken = async (to, from, next) => {
    if (webview(name, to, from, next)) {
        const params = await getParams()
        const name = await getName(to, params)
        await changeLang(params)
        if (
            params.hasOwnProperty('token') &&
            (sessionStorage.getItem('device') !== 'webview' || sessionStorage.getItem('isWebview') !== 'true')
        ) {
            location.href = `${location.origin}${location.pathname}`
        }
        next(name)
    }
}

const router = new Router(route)

/**
 * beforeEach
 * beforeRouteUpdate (component)
 * beforeEnter
 * beforeRouteEnter (component)
 * beforeResolve
 * afterEach
 * beforeRouteEnter (component)
 */
router.beforeEach(setToken)
router.afterEach((to, from) => {
    sessionStorage.setItem('target_url', to.fullPath)
    sessionStorage.setItem('fromRoute', from.name)
})

export default router
