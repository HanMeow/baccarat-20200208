import { getApi } from '@API/api'
import register from './register'
// import Storage from '@UTIL/storage'

const api = getApi('login/code')

const state = {
    img: null,
}

const actions = {
    // async [_M.READ]({ getters, dispatch, commit, rootGetters }, payload) {
    //     const params = {
    //         device: 4,
    //         ...payload,
    //     }
    //     const { data } = await dispatch(_M.HANDLE_AJAX_LOADING, { api: api.read, payload: params }, { root: true }).catch(error=>error)
    //     // console.log('debug: data', data)
    //     data && data.list && data.list.length && commit('list', data.list[0])
    //     return state.list
    // },
    /**4.1 產生驗證碼 */
    async [_M.CREATED]({ getters, dispatch, commit, rootGetters }, payload) {
        const params = {
            device: '4',
            ...payload,
        }
        const data = await dispatch(
            _M.HANDLE_AJAX_LOADING,
            {
                api: api.created,
                payload: params,
                method: 'get',
                responseType: 'arraybuffer',
            },
            {
                root: true,
            },
        )
        console.log('debug: data', { data })
        // const { data } = await dispatch(_M.HANDLE_AJAX_LOADING, { api: api.create, tokenOnly: true }, { root: true }).catch(error=>error)
        data && commit('img', data)
        return data
    },
    // async [_M.UPDATED]({ getters, dispatch, commit, rootGetters }, payload) {
    //     const params = {
    //         device: '4',
    //         ...payload,
    //     }
    //     const data = await dispatch(_M.HANDLE_AJAX_LOADING, { api: api.update, payload: params }, { root: true }).catch(error=>error)
    //     // console.log('debug: data', data)
    //     return data || {}
    // },
    // async [_M.DELETED]({ getters, dispatch, commit, rootGetters }, payload) {
    //     const params = {
    //         device: '4',
    //         ...payload,
    //     }
    //     const { data } = await dispatch(_M.HANDLE_AJAX_LOADING, { api: api.delete, payload: params }, { root: true }).catch(error=>error)
    //     console.log('debug: data', data)
    //     // return data || {}
    // },
}
const mutations = {
    img(state, payload) {
        let image = btoa(new Uint8Array(payload).reduce((data, byte) => data + String.fromCharCode(byte), ''))
        state.img = `data:image/png;base64,${image}`
    },
}
const getters = {
    img: state => {
        return state.img
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
    modules: {
        register,
    }
}
