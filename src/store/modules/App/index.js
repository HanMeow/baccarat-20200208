import { getApi } from '@API/api'
import Storage from '@UTIL/storage'

const state = {
    list: [],
    pagination: {
        page: 1,
        totalPage: 1,
        limit: 20
    }
}

const actions = {
    async [_M.READ]({ getters, dispatch, commit }) {
        // const { data } = await dispatch(_M.HANDLE_AJAX_LOADING, { api: api.read, payload: {} }, { root: true })
        // commit('setUrl', super_vip_url)
    },
}
const mutations = {
   
}
const getters = {
    list: state => state.list,
    pagination: state => state.pagination,
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
