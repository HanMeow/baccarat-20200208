import { getApi } from '@API/api'
// import status from './status'

const api = getApi('register.direct')

const state = {}
const actions = {
    /**4.2.1 網頁端註冊 */
    async [_M.CREATED]({ getters, dispatch, commit, rootGetters }, payload) {
        const params = {
            device: '4',
            ...payload.input,
        }
        // const data = await dispatch(_M.HANDLE_AJAX_LOADING, {
        return dispatch(_M.HANDLE_AJAX_LOADING, {
            api: api.created,
            payload: params,
            // method: 'get',
            // responseType: 'arraybuffer'
        }, {
            root: true
        })
        // console.log('debug: data', {data})
        // const { data } = await dispatch(_M.HANDLE_AJAX_LOADING, { api: api.create, tokenOnly: true }, { root: true }).catch(error=>error)
        // data && commit('img', data)
        // return data
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
    modules: {
    },
}
