import index from '@P/index'
import store from '@store'

const hideFooter = () => {
    // console.log(`debug: {store}`, {store})
    return (
        store._vm &&
        store._vm.$fromApp &&
        store._vm.$fromApp.has &&
        sessionStorage.getItem('device') === 'webview' &&
        sessionStorage.getItem('isWebview') === 'true' &&
        sessionStorage.getItem('footer') === 'hide'
    )
    // ?device=webview&footer=show
}

export default {
    mode: 'history',
    base: '/m',
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
        },
        {
            path: '/',
            component: index,
            redirect: store.getters['Config/userInfo'].token ? { name: 'Home' } : { name: 'Login' },
            children: [
                {
                    path: 'login',
                    meta: {
                        hasFoot: false,
                    },
                    component: { template: '<router-view></router-view>' },
                    // beforeEnter: (to, from, next) => {
                    //     console.log(`debug: hideFooter()`, hideFooter())
                    //     if (hideFooter()) {
                    //         window.setTimeout(function () {
                    //         }, 0)
                    //     } else {
                    //         next()
                    //     }
                    // },
                    redirect: {
                        name: 'Login',
                    },
                    children: [
                        {
                            path: '',
                            name: 'Login',
                            component: r => require.ensure([], () => r(require('@P/Login')), 'LoginContent'),
                        },
                        {
                            path: ':linkId',
                            name: 'registerId',
                            props: true,
                            component: r => require.ensure([], () => r(require('@P/Login')), 'LoginContent'),
                        },
                    ],
                },
                {
                    path: 'register/:id',
                    redirect: to => {
                        return {
                            name: 'registerId',
                            params: {
                                linkId: to.params.id,
                            },
                        }
                    },
                },
                {
                    path: 'forget',
                    name: 'forget',
                    meta: {
                        // hasNav: true,
                        // get hasFoot() {
                        //     return true && !hideFooter()
                        // },
                    },
                    component: {
                        // template:   `<transition name="slide" mode="out-in">
                        //                 <router-view></router-view>
                        //             </transition>`,
                        template: `<router-view></router-view>`,
                        name: 'forgetMain',
                    },
                    redirect: {
                        // name: 'forgetPassword',
                        name: 'forgetAccount',
                    },
                    children: [
                        {
                            path: 'password',
                            name: 'forgetPassword',
                            meta: {
                                // hasNav: true,
                                // get hasFoot() {
                                //     return true && !hideFooter()
                                // },
                            },
                            props: true,
                            component: r => require.ensure([], () => r(require('@P/forget/password')), 'forgetContent'),
                        },
                        {
                            path: 'account',
                            name: 'forgetAccount',
                            meta: {
                                // hasNav: true,
                                // get hasFoot() {
                                //     return true && !hideFooter()
                                // },
                            },
                            props: true,
                            component: r => require.ensure([], () => r(require('@P/forget/account')), 'forgetContent'),
                        },
                    ],
                },
                {
                    path: 'Home',
                    name: 'Home',
                    meta: {
                        get hasFoot() {
                            return true && !hideFooter()
                        },
                    },
                    component: r => require.ensure([], () => r(require('@P/Home')), 'HomeContent'),
                },
                {
                    path: 'ChatView',
                    name: 'ChatView',
                    meta: {
                        hasNav: true,
                        hasFoot: false,
                    },
                    beforeEnter: (to, from, next) => {
                        const { type, url } = store.getters['Config/userConfig'] && store.getters['Config/userConfig']['ui_cd_sys'] || {}
                        if (url) {
                            if (hideFooter()) {
                                window.setTimeout(function () {
                                    //the second time you update your url.
                                    location.href = url
                                }, 0)
                            } else {
                                const newWin = store._vm.$winOpen(url)
                                console.log('newWin: ', newWin)
                            }
                            return
                        } else {
                            next()
                        }
                    },
                    component: r => require.ensure([], () => r(require('@P/Chat')), 'ChatContent'),
                },
                {
                    path: 'Mine',
                    // name: 'Mine',
                    component: r => require.ensure([], () => r(require('@P/Mine')), 'MineContent'),
                    meta: {
                        get hasFoot() {
                            return true && !hideFooter()
                        },
                    },
                    redirect: {
                        name: 'Mine',
                    },
                    children: [
                        {
                            path: '',
                            name: 'Mine',
                            meta: {
                                get hasFoot() {
                                    return true && !hideFooter()
                                },
                            },
                            component: r => require.ensure([], () => r(require('@P/Mine/main')), 'MineMain'),
                        },
                        {
                            path: 'message',
                            name: 'message',
                            meta: {
                                hasNav: true,
                                get hasFoot() {
                                    return true && !hideFooter()
                                },
                            },
                            // component: r => require.ensure([], () => r(require('@P/message/')), 'messageContent'),
                            component: {
                                template: `<router-view></router-view>`,
                                name: 'messageMain',
                            },
                            redirect: {
                                name: 'Announcement',
                            },
                            children: [
                                {
                                    path: 'Announcement',
                                    name: 'Announcement',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/message')), 'messageContent'),
                                },
                                {
                                    path: 'Announcement/:id',
                                    name: 'AnnouncementDetail',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/message')), 'messageContent'),
                                },
                                {
                                    path: 'Promotion',
                                    name: 'messagePromotion',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/message')), 'messageContent'),
                                },
                                {
                                    path: 'mail',
                                    name: 'mail',
                                    props: true,
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/message')), 'messageContent'),
                                },
                                {
                                    path: 'mail/new',
                                    name: 'newMail',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/message/newMail')), 'messageContent'),
                                },
                            ],
                        },
                        {
                            path: 'Transfer',
                            name: 'Transfer',
                            props: true,
                            component: r => require.ensure([], () => r(require('@P/Transfer')), 'TransferContent'),
                            redirect: { name: 'TransferMain' },
                            children: [
                                {
                                    path: '',
                                    name: 'TransferMain',
                                    props: true,
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                        title: 'ui_transfer',
                                    },
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Transfer/TransferMain')),
                                            'TransferMain',
                                        ),
                                },
                                // {
                                //     path: 'TransferStation',
                                //     name: 'TransferStation',
                                //     meta: {
                                //         // hasNav: true,
                                //         get hasFoot() {
                                //             return true && !hideFooter()
                                //         },
                                //     },
                                //     props: true,
                                //     component: r =>
                                //         require.ensure([], () => r(require('@P/Transfer/TransferStation')), 'TransferStation'),
                                // },
                                {
                                    path: '',
                                    redirect: { name: 'TransferMain' },
                                },
                            ],
                        },
                        {
                            path: 'Recharge',
                            name: 'Recharge',
                            props: true,
                            meta: {
                                hasNav: true,
                                get hasFoot() {
                                    return true && !hideFooter()
                                },
                            },
                            component: r => require.ensure([], () => r(require('@P/Recharge')), 'RechargeContent'),
                            // redirect: { name: 'TransferMain' },
                            children: [
                                {
                                    path: '',
                                    redirect: {
                                        name: 'bankCardRecharge',
                                    },
                                },
                                {
                                    path: 'bankCard',
                                    name: 'bankCardRecharge',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Recharge/RechargeMain')),
                                            'RechargeContent',
                                        ),
                                },
                                {
                                    path: 'bank',
                                    //     redirect: {
                                    //         name: 'bankRecharge',
                                    //     },
                                    // },
                                    // {
                                    //     path: 'bank/:id',
                                    name: 'bankRecharge',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Recharge/RechargeMain')),
                                            'RechargeContent',
                                        ),
                                },
                                {
                                    path: 'QRcode',
                                    name: 'QRcodeRecharge',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Recharge/RechargeMain')),
                                            'RechargeContent',
                                        ),
                                },
                                {
                                    path: 'thirdParty',
                                    redirect: {
                                        name: 'bankCardRecharge',
                                    },
                                },
                                {
                                    path: 'thirdParty/:id',
                                    name: 'thirdPartyRecharge',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Recharge/RechargeMain')),
                                            'RechargeContent',
                                        ),
                                },
                            ],
                        },
                        {
                            path: 'TakeCash',
                            name: 'TakeCash',
                            props: true,
                            meta: {
                                hasNav: true,
                                get hasFoot() {
                                    return true && !hideFooter()
                                },
                            },
                            component: r => require.ensure([], () => r(require('@P/TakeCash')), 'TakeCashContent'),
                            children: [],
                        },
                        {
                            path: 'personal',
                            name: 'personal',
                            props: true,
                            meta: {
                                hasNav: true,
                                get hasFoot() {
                                    return true && !hideFooter()
                                },
                            },
                            component: r => require.ensure([], () => r(require('@P/personal')), 'personalContent'),
                            children: [
                                {
                                    path: '',
                                    name: 'personalMain',
                                    props: true,
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/personal/personalMain')),
                                            'personalContent',
                                        ),
                                    children: [],
                                },
                                {
                                    path: 'information',
                                    name: 'personalInformation',
                                    props: true,
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/personal/personalMain')),
                                            'personalContent',
                                        ),
                                    children: [],
                                },
                                {
                                    path: 'password',
                                    name: 'setPassword',
                                    props: true,
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/personal/password')), 'personalContent'),
                                    children: [],
                                },
                                {
                                    path: 'fundPassword',
                                    name: 'fundPassword',
                                    props: true,
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/personal/fundPassword')),
                                            'personalContent',
                                        ),
                                    children: [],
                                },
                                {
                                    path: 'question',
                                    name: 'setQuestion',
                                    props: true,
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/personal/question')), 'personalContent'),
                                    children: [],
                                },
                            ],
                        },
                        {
                            path: 'bank',
                            // name: 'bankCard',
                            component: r => require.ensure([], () => r(require('@P/Bank')), 'bank'),
                            children: [
                                {
                                    path: '',
                                    redirect: {
                                        name: 'bankCard',
                                    },
                                },
                                {
                                    path: 'card',
                                    name: 'bankCard',
                                    meta: {
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                        hasNav: true,
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/Bank/bankCard')), 'bankCard'),
                                },
                                {
                                    path: 'add',
                                    name: 'addCard',
                                    meta: {
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                        hasNav: true,
                                    },
                                    component: r => require.ensure([], () => r(require('@P/Bank/addCard')), 'bankCard'),
                                },
                            ],
                        },
                    ],
                },
                {
                    path: 'Report',
                    name: 'Report',
                    redirect: {
                        name: 'TradeReport',
                    },
                    component: r => require.ensure([], () => r(require('@P/Report')), 'ReportContent'),
                    children: [
                        {
                            path: 'TradeReport',
                            name: 'TradeReport',
                            component: r =>
                                require.ensure([], () => r(require('@P/Report/TradeReport')), 'TradeReportContent'),
                            redirect: {
                                name: 'TradeReportMain',
                                params: {
                                    type: 'rechage',
                                },
                            },
                            children: [
                                {
                                    path: ':type(\\w+)?',
                                    name: 'TradeReportMain',
                                    meta: {
                                        hasNav: true,
                                    },
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Report/TradeReport/Main')),
                                            'TradeReportMain',
                                        ),
                                },
                                {
                                    path: ':type(\\w+)?/:id(\\d+)?',
                                    name: 'TradeReportDetail',
                                    meta: {
                                        hasNav: true,
                                    },
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Report/TradeReport/Detail')),
                                            'TradeReportDetail',
                                        ),
                                },
                            ],
                        },
                        {
                            path: 'GameReport',
                            name: 'GameReport',
                            meta: {
                                hasNav: true,
                            },
                            component: r =>
                                require.ensure([], () => r(require('@P/Report/GameReport')), 'GameReportContent'),
                        },
                    ],
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
                {
                    path: 'Recharge',
                    component: { template: '<router-view></router-view>' },
                    children: [
                        {
                            path: '',
                            props: true,
                            redirect: {
                                name: 'bankCardRecharge',
                            },
                        },
                        {
                            path: 'bankCard',
                            props: true,
                            redirect: {
                                name: 'bankCardRecharge',
                            },
                        },
                        {
                            path: 'bank',
                            props: true,
                            redirect: {
                                name: 'bankRecharge',
                            },
                        },
                        {
                            path: 'QRcode',
                            props: true,
                            redirect: {
                                name: 'QRcodeRecharge',
                            },
                        },
                        {
                            path: 'thirdParty',
                            redirect: {
                                name: 'bankCardRecharge',
                            },
                        },
                        {
                            path: 'thirdParty/:id',
                            props: true,
                            redirect: to => {
                                return {
                                    name: 'thirdPartyRecharge',
                                    params: {
                                        id: to.params.id,
                                    },
                                }
                            },
                        },
                    ],
                },
                {
                    path: 'TakeCash',
                    props: true,
                    redirect: {
                        name: 'TakeCash',
                    },
                },
                {
                    path: 'Team',
                    // name: 'Team',
                    props: true,
                    component: r => require.ensure([], () => r(require('@P/Team')), 'TeamContent'),
                    // redirect: { name: 'TeamMain' },
                    children: [
                        {
                            path: '',
                            name: 'TeamMain',
                            meta: {
                                hasNav: true,
                                get hasFoot() {
                                    return true && !hideFooter()
                                },
                                // title: 'ui_transfer'
                            },
                            component: r => require.ensure([], () => r(require('@P/Team/TeamMain')), 'TeamMainContent'),
                        },
                        {
                            path: 'TeamOverview',
                            name: 'TeamOverview',
                            meta: {
                                hasNav: true,
                                // get hasFoot() {return true && !hideFooter()}
                            },
                            props: true,
                            component: r =>
                                require.ensure([], () => r(require('@P/Team/TeamOverview')), 'TeamOverviewContent'),
                        },
                        {
                            path: 'UserList',
                            name: 'UserList',
                            meta: {
                                hasNav: true,
                                // hasFoot: false
                            },
                            props: true,
                            component: r => require.ensure([], () => r(require('@P/Team/UserList')), 'UserListContent'),
                            children: [
                                {
                                    path: ':id',
                                    // name: 'UserListDetailMain', // 主頁
                                    meta: {
                                        hasNav: true,
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Team/UserList/UserListDetailMain')),
                                            'UserListDetailMain',
                                        ),
                                    children: [
                                        {
                                            path: '',
                                            name: 'UserListDetail', // 詳情
                                            meta: {
                                                hasNav: true,
                                                // title: 'ui_transfer'
                                            },
                                            component: r =>
                                                require.ensure(
                                                    [],
                                                    () => r(require('@P/Team/UserList/UserListDetail')),
                                                    'UserListDetail',
                                                ),
                                        },
                                        {
                                            path: 'UserListRecord', // 投注紀錄
                                            name: 'UserListRecord',
                                            meta: {
                                                hasNav: true,
                                                // title: 'ui_transfer'
                                            },
                                            component: r =>
                                                require.ensure(
                                                    [],
                                                    () => r(require('@P/Team/UserList/UserListRecord')),
                                                    'UserListRecord',
                                                ),
                                        },
                                        {
                                            path: 'UserListRecharge', // 下級充值
                                            name: 'UserListRecharge',
                                            meta: {
                                                hasNav: true,
                                                // title: 'ui_transfer'
                                            },
                                            component: r =>
                                                require.ensure(
                                                    [],
                                                    () => r(require('@P/Team/UserList/UserListRecharge')),
                                                    'UserListRecharge',
                                                ),
                                        },
                                        {
                                            path: 'UserListSetRetreat', // 退水
                                            name: 'UserListSetRetreat',
                                            meta: {
                                                hasNav: true,
                                                // title: 'ui_transfer'
                                            },
                                            component: r =>
                                                require.ensure(
                                                    [],
                                                    () => r(require('@P/Team/UserList/UserListSetRetreat')),
                                                    'UserListSetRetreat',
                                                ),
                                        },
                                        {
                                            path: 'UserListSetRefund', // 退傭
                                            name: 'UserListSetRefund',
                                            meta: {
                                                hasNav: true,
                                                // title: 'ui_transfer'
                                            },
                                            component: r =>
                                                require.ensure(
                                                    [],
                                                    () => r(require('@P/Team/UserList/UserListSetRefund')),
                                                    'UserListSetRefund',
                                                ),
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            path: 'CreateUser',
                            name: 'CreateUser',
                            meta: {
                                hasNav: true,
                                hasFoot: false,
                            },
                            props: true,
                            component: r =>
                                require.ensure([], () => r(require('@P/Team/CreateUser')), 'CreateUserContent'),
                        },
                        {
                            path: 'LinkedUser',
                            name: 'LinkedUser',
                            meta: {
                                hasNav: true,
                                hasFoot: false,
                            },
                            props: true,
                            component: r =>
                                require.ensure([], () => r(require('@P/Team/LinkedUser')), 'LinkedUserContent'),
                        },
                        {
                            path: 'LuckyMoney',
                            // name: 'LuckyMoney',
                            meta: {
                                hasNav: true,
                            },
                            props: true,
                            component: r =>
                                require.ensure([], () => r(require('@P/Team/LuckyMoney')), 'LuckyMoneyContent'),
                            children: [
                                {
                                    path: '',
                                    name: 'LuckyMoneyMain', // 代理活動主頁
                                    meta: {
                                        hasNav: true,
                                        // title: 'ui_transfer'
                                    },
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Team/LuckyMoney/LuckyMoneyMain')),
                                            'LuckyMoneyMainContent',
                                        ),
                                },
                                {
                                    path: 'Activityreport', // 活動報表
                                    name: 'Activityreport',
                                    meta: {
                                        hasNav: true,
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Team/LuckyMoney/Activityreport')),
                                            'ActivityreportContent',
                                        ),
                                },
                                {
                                    path: 'SignBonus', // 注册送红包设置
                                    name: 'SignBonus',
                                    meta: {
                                        hasNav: true,
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Team/LuckyMoney/SignBonus')),
                                            'SignBonusContent',
                                        ),
                                },
                                {
                                    path: 'DayBonus', // 每日送红包设置
                                    name: 'DayBonus',
                                    meta: {
                                        hasNav: true,
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Team/LuckyMoney/DayBonus')),
                                            'DayBonusContent',
                                        ),
                                },
                                {
                                    path: 'OldPlayerBonus', // 老玩家回归送红包设置
                                    name: 'OldPlayerBonus',
                                    meta: {
                                        hasNav: true,
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Team/LuckyMoney/OldPlayerBonus')),
                                            'OldPlayerBonusContent',
                                        ),
                                },
                                {
                                    path: 'AccHoldBonus', // 账号绑定礼金设置
                                    name: 'AccHoldBonus',
                                    meta: {
                                        hasNav: true,
                                    },
                                    props: true,
                                    component: r =>
                                        require.ensure(
                                            [],
                                            () => r(require('@P/Team/LuckyMoney/AccHoldBonus')),
                                            'AccHoldBonusContent',
                                        ),
                                },
                            ],
                        },
                        {
                            path: 'SetRetreat',
                            name: 'SetRetreat',
                            meta: {
                                hasNav: true,
                            },
                            props: true,
                            component: r =>
                                require.ensure([], () => r(require('@P/Team/SetRetreat')), 'SetRetreatContent'),
                        },
                        {
                            path: 'SetRefund',
                            name: 'SetRefund',
                            meta: {
                                hasNav: true,
                            },
                            props: true,
                            component: r =>
                                require.ensure([], () => r(require('@P/Team/SetRefund')), 'SetRefundContent'),
                        },
                        // {
                        //     path: '',
                        //     redirect: { name: 'TeamMain' }
                        // }
                    ],
                },
                {
                    path: 'Promotion',
                    name: 'Promotion',
                    meta: {
                        hasNav: true,
                        get hasFoot() {
                            return true && !hideFooter()
                        },
                    },
                    redirect: {
                        name: 'PromotionMain',
                    },
                    component: r => require.ensure([], () => r(require('@P/Promotion')), 'PromotionContent'),
                    children: [
                        {
                            path: '',
                            name: 'PromotionMain',
                            meta: {
                                hasNav: true,
                                get hasFoot() {
                                    return true && !hideFooter()
                                },
                            },
                            component: r =>
                                require.ensure([], () => r(require('@P/Promotion/main')), 'PromotionContent'),
                            children: [
                                {
                                    path: ':id(\\d+)?',
                                    name: 'PromotionDetail',
                                    meta: {
                                        hasNav: true,
                                        get hasFoot() {
                                            return true && !hideFooter()
                                        },
                                    },
                                    component: r =>
                                        require.ensure([], () => r(require('@P/Promotion/main')), 'PromotionContent'),
                                },
                            ],
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
