import { mapActions, mapGetters } from 'vuex'
// import { errorMessageBoxCB } from '@UTIL'
// import Game from '@M/Game'
import { Tabbar as vanTabbar, TabbarItem as vanTabbarItem } from 'vant'

export const NavFooter = {
    components: {
        vanTabbar,
        vanTabbarItem,
    },
    data() {
        return {
            actived: -1, // for van-tabbar
            showClient: true,
            // linkPath: '/Home',
            showLanguage: false,
            // 游戏 | 优惠 | 客服 | 我的 | 体育
            // 游戏 <van-icon name="medel-o" />
            // 优惠 <van-icon name="send-gift-o" />
            // 客服 <van-icon name="service-o" />
            // 我的 <van-icon name="smile-o" />
            // 体育 <van-icon name="fire-o" />
            // btn_main_footer
            // restrict: ['/SportsCompetitions', ],
            restrict: ['/Promotion', '/ChatView', '/Mine'],
            win: {},
        }
    },
    created() {
        this.upDateActived()
    },
    beforeMount() {
        // this.$root.$emit('setStore', { Game })
    },
    watch: {
        $route() {
            this.upDateActived()
        },
        actived(val, oldVal) {
            const { type, url } = this.userConfig['ui_cd_sys'] || {}
            if (this.filteredLinkList[val].path === '/ChatView' && url) {
                this.upDateActived(oldVal)
            }
        },
    },
    methods: {
        ...mapActions('Common', {
            setLang: 'SET_LANG',
        }),
        ...mapActions('Game', {
            getGame: _M.READ,
            updateGame: _M.UPDATED,
        }),
        upDateActived(index) {
            const list = this.filteredLinkList
            // const list = this.linkList
            if (index === list.length - 1) {
                /** 多語選擇 */
                this.showLanguage = true
                // return
            }
            if (
                isNaN(+index) ||
                +index < 0 ||
                +index > list.length - 1 // 濾掉點 多語 及 圖示 的情況，限定在 linkList - 1 範圍內才更新
            ) {
                const match = this.$route.path.match(/^\/\w+/)
                index = list.findIndex(v => v.path === (!!match && match[0]))
            }

            this.actived = +index >= 0 && +index < list.length - 1 ? index : 0
            // console.log(`debug: upDateActived -> this.actived`, this.actived)
        },
        change(index) {
            this.upDateActived(index)
        },
        MenuLink({ path, requireLogin }) {
            const isLogin = this.userInfo && this.userInfo.hasOwnProperty('token')
            const isRestrict = this.restrict.includes(path)
            if (path === '/SportsCompetitions') {
                // this.$root.$emit('openApp', { gameScheme: this.baseUrl.gameScheme })
                if (this.win[`window_${'12'}_${'7'}`]) {
                    this.win[`window_${'12'}_${'7'}`] = ''
                }
                if (this.$fromApp.device !== 'webview' || !this.$fromApp.isWebview) {
                    this.win[`window_${'12'}_${'7'}`] = this.$winOpen('about:blank', `window_${'12'}_${'7'}`)
                }
                this.getGame(
                    this.$snakeCase({
                        company_id: '12',
                        category_id: 7,
                        game_id: '12',
                        code: 'BTI',
                    }),
                )
                    .then(res => {
                        this.win[`window_${'12'}_${'7'}`] = this.$winOpen(res.url, `window_${'12'}_${'7'}`)
                    })
                    .catch(error => {
                        console.log(error, 'error')
                        Dialog({
                            message: this.error.message,
                        }).then(() => {
                            if (this.error['direct']) {
                                this.$router.push({ name: 'login' })
                            }
                        })
                    })
                    .finally(() => {
                        this.loading = false
                    })
            } else {
                !isLogin && isRestrict && (path = 'Login')
                this.$router.push({ path })
            }
        },
        onConfirm(item) {
            // console.log(`debug: onConfirm -> item`, item)
            // this.setLang(item.key)
            // this.showLanguage = false
        },
    },
    computed: {
        // ...mapGetters('Config', ['userInfo', 'userConfig', 'baseUrl']),
        linkList() {
            return [
                {
                    path: '/Home',
                    // title: this.$t('btn_main_footer')[0],
                    // textIndex: 0,
                    text: 'btn_main_footer[0]',
                    // icon: 'medel',
                    icon: 'game',
                    requireLogin: false,
                },
                {
                    path: '/Promotion',
                    // title: this.$t('btn_main_footer')[1],
                    // textIndex: 1,
                    text: 'btn_main_footer[1]',
                    // icon: 'send-gift',
                    icon: 'discount',
                    requireLogin: false,
                },
                {
                    path: '/ChatView',
                    // title: this.$t('btn_main_footer')[2],
                    // textIndex: 2,
                    text: 'btn_main_footer[2]',
                    // icon: 'service',
                    icon: 'support',
                    requireLogin: false,
                },
                {
                    path: '/Mine',
                    // title: this.$t('btn_main_footer')[3],
                    // textIndex: 3,
                    text: 'ui_my_account',
                    // icon: 'smile',
                    icon: 'my',
                    requireLogin: false,
                },
                // {
                //     path: '/SportsCompetitions',
                //     // title: this.$t('btn_main_footer')[4],
                //     // textIndex: 4,
                //     text: 'btn_main_footer[4]',
                //     // icon: 'fire',
                //     icon: 'sport',
                //     requireLogin: false,
                // },
                {
                    text: this.$t(this.nowLang),
                    // icon: 'fire',
                    icon: 'language',
                    requireLogin: false,
                },
            ]
        },
        filteredLinkList() {
            return this.linkList.filter(v => {
                return !v.requireLogin || (this.userInfo && this.userInfo.hasOwnProperty('token'))
            })
        },
    },
}
