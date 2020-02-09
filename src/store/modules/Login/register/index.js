// import { getApi } from '@API/api'
import direct from './direct'
import linked from './linked'


const state = {}
const actions = {
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
        direct,
        linked,
    }
}
