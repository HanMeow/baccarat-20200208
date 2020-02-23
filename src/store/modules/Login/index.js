// import { getApi } from '@API/api'
// import register from './register'
// import code from './code'
// import Storage from '@UTIL/storage'

// const api = getApi('login')

const state = {
}

const actions = {
    // 登入
    async [_M.CREATED]({ rootGetters, dispatch, commit }, payload) {
        const params = {
        }
        const data = await dispatch(
            _M.HANDLE_AJAX_LOADING,
            {
                api: '',
            },
            {
                root: true,
            },
        )
        console.log(`debug: data`, data)
        return data
    },
}
const mutations = {
}
const getters = {
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
    modules: {
        // register,
        // code,
    }
}
