import { getApi } from '@API/api'
import register from './register'
import code from './code'
// import Storage from '@UTIL/storage'

const api = getApi('login')

const state = {
}

const actions = {
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
        register,
        code,
    }
}
