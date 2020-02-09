import { getApi } from '@API/api'

const api = getApi('login')

const state = {}
const actions = {
    /**
     * API 取得 分享設定列表
     * 如果 payload 沒值則清除暫存資料
     * 如果 payload 值在暫存資料已經有了則直接引用暫存資料
     * @param {object} payload 分享設定列表
     */
    async [_M.CREATED]({ rootGetters, dispatch, commit }, payload) {
        const params = {
            ...payload,
            device: 4,
        }
        return await dispatch(
            _M.HANDLE_AJAX_LOADING,
            {
                api: api.created,
                payload: params,
            },
            { root: true },
        ).then(result => {
            commit('Config/userInfo', result.data.list[0], { root: true })
            // dispatch('Config/webview', {}, { root: true })
            console.log(result.data.list[0].token, 'result.data.list[0].token')
            dispatch(`Config/${_M.READ}`, { token: result.data.list[0].token }, { root: true })
            return result
        })
        // .catch(err => err)
    },
}
const mutations = {}
const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
