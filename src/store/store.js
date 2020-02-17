import App from './modules/App/'
import Common from './modules/Common/'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        App,
        Common,
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
})

export default store
