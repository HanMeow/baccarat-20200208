// const api = getApi('login')

const state = {
    title: '',
    type: '',
    logoPosition: '',
}

const actions = {
    [_M.UPDATED]({ getters, dispatch, commit, rootGetters }, payload) {
        if (typeof payload === 'object') {
            commit('set', payload)
        }
    },
}
const mutations = {
    set(state, payload) {
        for (const key in payload) {
            if (state.hasOwnProperty(key)) {
                state[key] = payload[key]
            }
        }
    },
}
const getters = {
    state: state => state
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
    modules: {
    }
}
