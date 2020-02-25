// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*eslint camelcase: ["error", {properties: "never"}]*/
import 'babel-polyfill'
// import '@UTIL/tools'

import Vue from 'vue'
// import Vuelidate from 'vuelidate'
import App from './APP'
import router from '@router'
import store from '@store'

// import VueI18n from 'vue-i18n'
import { i18n } from '@UTIL/i18nDynamicLocale'

// import '@CSS/reset.css'

/**模擬桌面mouse事件 */
import '@vant/touch-emulator'

import '@CSST/style.scss'

Vue.config.productionTip = false

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/crown-baccarat/service-worker.js')
            .then(registration => {
                console.log('SW registered: ', registration)
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError)
            })
    })
}
/** 骨架屏元件 */
import { Field, Grid, GridItem, Icon, Loading, Picker, Popup, Skeleton, Toast } from 'vant'

Vue.use(Field)
    .use(Grid)
    .use(GridItem)
    .use(Icon)
    .use(Loading)
    .use(Picker)
    .use(Popup)
    .use(Skeleton)
    .use(Toast)

/**  改駝峰 */
import changeCase from '@/plugins/changeCase'
// import customOpen from '@/plugins/customOpen'
import getQueryParams from '@/plugins/getQueryParams'
import getDevice from '@/plugins/getDevice'
Vue.use(changeCase)
    // .use(customOpen)
    .use(getQueryParams)
    .use(getDevice)

/* eslint-disable no-new */
export const vue$ = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    // template: '<div/>',
    components: {
        App,
    },
})

// export const getters = vue$.$store.getters
// export const router$ = vue$.$router
// export const vue = vue$
// export default {
//     getters,
//     router$,
// }
