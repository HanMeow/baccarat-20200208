import index from '@P/index'
import store from '@store'

const hideFooter = () => sessionStorage.getItem('footer') === 'hide'

export default {
    mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
    base: '/crown-baccarat',
    scrollBehavior() {
        // 控制導頁預設起始位置
        // console.log({ to, from, savedPosition })
        return {
            x: 0,
            y: 0,
        }
    },
    routes: [
        {
            path: '/failure',
            name: 'failure',
            component: r => require.ensure([], () => r(require('@P/failure')), 'failure'),
            // component: { template: '<div></div>' },
        },
        {
            path: '/',
            component: index,
            redirect: (store.getters['Config/userInfo'] || {}).token ? { name: 'Home' } : { name: 'Login' },
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    meta: {
                        hasFoot: false,
                    },
                    component: r => require.ensure([], () => r(require('@P/Login')), 'Login'),
                    // component: { template: '<div></div>' },
                    // beforeEnter: (to, from, next) => {
                    // },
                    // redirect: {
                    //     name: 'Login',
                    // },
                },
                {
                    path: 'register',
                    name: 'Register',
                    meta: {
                        hasFoot: false,
                    },
                    component: r => require.ensure([], () => r(require('@P/Register')), 'Login'),
                    // component: { template: '<div></div>' },
                    // path: 'register/:id',
                    // redirect: to => {
                    //     return {
                    //         name: 'Register',
                    //         params: {
                    //             linkId: to.params.id,
                    //         },
                    //     }
                    // },
                },
                {
                    path: 'Home',
                    name: 'Home',
                    meta: {
                        hasNav: true,
                        hasFoot: false,
                        // get hasFoot() {
                        //     return true && !hideFooter()
                        // },
                    },
                    component: r => require.ensure([], () => r(require('@P/Home')), 'HomeContent'),
                    // component: { template: '<div></div>' },
                },
                {
                    path: 'Transfer',
                    props: true,
                    component: { template: '<router-view></router-view>' },
                    children: [
                        {
                            path: '',
                            props: true,
                            redirect: { name: 'TransferMain' },
                        },
                    ],
                },
            ],
        },
        {
            path: '*',
            redirect: {
                name: 'failure',
            },
        },
    ],
}
