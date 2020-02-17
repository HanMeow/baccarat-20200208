import { handleAjax } from '@API'
// import { jwtEncode, errorMessageBox } from '@UTIL'
// import { loadLanguageAsync } from '@UTIL/i18nDynamicLocale'
import Storage from '@UTIL/storage'
// import router from '@router'
// import { Toast } from 'vant'

const state = {
    error: {},
    message: {},
    loginMessage: {},
    loading: false,
    nowLang: localStorage.getItem(Storage.i18n) || 'zh_cn',
}

const actions = {
    HANDLE_AJAX({ getters, dispatch, commit, rootGetters },
        {
            api,
            payload = {},
            tokenOnly,
            method,
            responseType
        }
    ) {
        console.log(`debug: api`, api)
        console.log('debug: HANDLE_AJAX -> method, responseType', method, responseType)
        let params = {}
        let userInfo = rootGetters['Config/userInfo'] || { lang: 'zh_cn', platformCode: 'UUU001' }
        params = {
            lang: rootGetters['Common/nowLang'],
            // platformCode: rootGetters['Config/baseUrl'].platformCode,
            platform_code: rootGetters['Config/baseUrl'].platformCode,
            device: 'mobile',
            ...payload,
        }
        // debug
        let encryptData = tokenOnly ? '' : jwtEncode(params)
        if (userInfo.token) {
            encryptData = `${userInfo.token}${tokenOnly ? '' : '.'}${encryptData}`
        }
        const mainServer = rootGetters['Config/baseUrl'].mainServer
        if (mainServer) {
            api.mainServer = mainServer
        }
        if (method) {
            api.method = method
        }
        if (responseType) {
            api.responseType = responseType
        }
        if (process.env.NODE_ENV !== 'production') {
            console.log('HANDLE_AJAX debug:', { api, params })
        }
        return handleAjax(api, encryptData)
            .then(response => {
                // commit('loading', false)
                if (response.result === 1) {
                    const error = {
                        message: response.data.message || 'fail',
                        error: response.data.error,
                        direct: response.data.error === 'X1004' || response.data.error === 'H1004', //tmp(support error message),
                    }
                    return Promise.reject(error)
                } else {
                    if (response['data'] && response['data']['message']) {
                        commit('message', response.data)
                    }
                    return Promise.resolve(response)
                }
            })
            .catch(error => {
                if (error.message && !payload['hideError']) {
                    commit('error', error)
                    commit('loginMessage', error)
                    if (/login/i.test(api.path)) {
                        errorMessageBox({ message: error.message, error: error.error })
                        console.log('error.message', error.message)
                    }
                    if (!payload['hideError']) {
                        //暫時關閉
                        // Toast.fail(error.message || 'fail')
                    }
                }
                // token 失效至登入頁
                // if (error.direct) {
                //     router && router.replace({ path: '/Login' })
                // }
                // commit('loading', false)
                let returnError = new Error(error.message || 'fail')
                returnError.error = error.error
                return Promise.reject(returnError)
            })
    },
    HANDLE_AJAX_LOADING({ dispatch, commit }, { api, payload = {}, tokenOnly = false, method, responseType }) {
        commit('loading', true)
        return dispatch('HANDLE_AJAX', {
            api,
            payload,
            loading: true,
            tokenOnly,
            method,
            responseType
        }).finally(
            response => {
                commit('loading', false)
                return response
            },
        )
    },
    async SET_LANG({ getters, dispatch, commit }, payload) {
        await loadLanguageAsync(payload)
        localStorage[Storage.i18n] = payload
        commit('setLang', payload)
        dispatch('Config/getUserConfig', { force: true }, { root: true }).catch(error => error)
    },
}
const mutations = {
    error(state, payload) {
        state.error = payload
    },
    message(state, payload) {
        state.message = payload
    },
    loginMessage(state, payload) {
        state.loginMessage = payload
    },
    loading(state, payload) {
        state.loading = payload
    },
    setLang(state, payload) {
        state.nowLang = payload
    },
}
const getters = {
    error: state => state.error,
    message: state => state.message,
    loginMessage: state => state.loginMessage,
    loading: state => state.loading,
    nowLang: state => state.nowLang,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
