import ActivityDefine from './modules/ActivityDefine/'
import App from './modules/App/'
import bank from './modules/bank'
import Common from './modules/Common/'
import Config from './modules/Config'
import fund from './modules/fund'
import layout from './modules/layout'
import LuckyMoney from './modules/LuckyMoney'
// import Login from './modules/Login'
import Mine from './modules/Mine'
import Promotion from './modules/Promotion'
import Recharge from './modules/Recharge'
import Report from './modules/Report'
import security from './modules/security'
import takeCash from './modules/takeCash'
import user from './modules/user'
import Chat from './modules/Chat'
import verification from './modules/verification'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        ActivityDefine,
        App,
        bank,
        Config,
        Common,
        fund,
        layout,
        LuckyMoney,
        // Login,
        Mine,
        Promotion,
        Recharge,
        Report,
        security,
        takeCash,
        user,
        Chat,
        verification
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
})

export default store
