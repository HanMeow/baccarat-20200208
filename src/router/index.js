import Vue from 'vue'
import Router from 'vue-router'
import route from './route'
import store from '@store'

// import { handleJson, getCookie } from '@UTIL'
import Storage from '@UTIL/storage'

Vue.use(Router)

const getParams = async () => {
    const params = {}
    if (location.search.substr(1)) {
        const searchs = location.search.substr(1).split('&')
        searchs.forEach((item, index) => {
            const [key, value] = item.split('=')
            params[key || index] = value || ''
        })
    }
    console.log(`debug: getParams -> params`, params)
    return params
}

const addClass = (classes, el = null) => {
    const classList = (el || (document || {}).body || {}).classList
    if (!classList) return;
    if (!Array.isArray(classes)) classes = [classes]
    for (const str of classes) {
        console.log(`debug: addClass -> str`, str)
        if (!classList.contains[str])
            classList.add(str)
    }
}

const removeClass = (classes, el) => {
    const classList = (el || (document || {}).body || {}).classList
    if (!classList) return;
    if (!Array.isArray(classes)) classes = [classes]
    for (const str of classes) {
        if (classList.contains[str])
            classList.remove(str)
    }
}

const getName = async (to, params) => {
    let name = {}
    if (to.name === 'Login' || to.name === 'Register') {
        addClass(['crown_bg_base', 'crown_bg_login', 'j_text--body'])
        // await store.dispatch('Config/READ', { ...params, isClear: true }).catch(e => e)
    } else {
        removeClass('crown_bg_login')
        addClass(['crown_bg_base', 'j_text--body'])
        const noPremiss = ['Home', 'failure', 'ChatView', 'forget', 'forgetPassword', 'forgetAccount']
    //     // const sameUser =
    //     // handleJson(localStorage.getItem('userInfo'))['token'] === (store.getters['Config/userInfo'] || {}).token
    //     if (!(store.getters['Config/userInfo'] || {}).token && !noPremiss.includes(to.name)) {
    //         name = {
    //             name: 'Register',
    //             params: {
    //                 linkId: '',
    //             },
    //         }
    //     }

    //     if ((store.getters['Config/userInfo'] || {}).token && ['Register', 'Login'].includes(to.name)) {
    //         name = {
    //             name: 'Home',
    //         }
    //     }
    }

    return name
}

const webview = (name, to, from, next) => {
    // const checkingList = ['Home', 'Login', 'Register']
    // if (
    //     sessionStorage.getItem('device') === 'webview' &&
    //     sessionStorage.getItem('isWebview') === 'true' &&
    //     sessionStorage.getItem('footer') === 'hide' &&
    //     (checkingList.includes(name.name) || checkingList.includes(to.name))
    // ) {
    //     store.dispatch('Config/webview', {
    //         key: 'action',
    //         value: 'closewebview',
    //     })
    //     return false
    // }
    return true
}

const setToken = async (to, from, next) => {
    if (webview(name, to, from, next)) {
        const params = await getParams()
        const name = await getName(to, params)
        // await changeLang(params)
        // if (
        //     params.hasOwnProperty('token') &&
        //     (sessionStorage.getItem('device') !== 'webview' || sessionStorage.getItem('isWebview') !== 'true')
        // ) {
        //     location.href = `${location.origin}${location.pathname}`
        // }
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
    // sessionStorage.setItem('target_url', to.fullPath)
    // sessionStorage.setItem('fromRoute', from.name)
})

export default router
