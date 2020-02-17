// import { errorMessageBoxCB } from '@UTIL'
// import checkedCallApp from '@UTIL/checkedCallApp'
// import getDevices from '@mixins/getDevices'
import { mapGetters } from 'vuex'
export const App = {
    beforeMount() {
        // this.$root.$on('setStore', this.setStore)
        // this.$root.$on('unSetStore', this.unSetStore)
    },
    mounted() {
        // this.$root.$on('openApp', ({ gameScheme, gameHost }) => {
        //     if (!this.userInfo.token) {
        //         errorMessageBoxCB(
        //             {
        //                 message: this.$t('ui_login_not_yet'),
        //             },
        //             {
        //                 callback: () => {
        //                     this.$router.push({ name: 'Login' })
        //                 },
        //             },
        //         )
        //         return
        //     }
        //     const params = {
        //         gameScheme: gameScheme || 'bdsport',
        //         gameHost: gameHost || 'photons.com',
        //     }
        //     this.doOpenApp(params)
        // })
    },
    created() {
        if (document.querySelector('#splash-container')) {
            document.querySelector('#splash-container').remove()
        }
    },
    // mixins: [getDevices],
    methods: {
        // doCheck({ gameScheme, gameHost }) {
        //     checkedCallApp({
        //         name: 'deeplink',
        //         message: '',
        //         gameScheme,
        //         gameHost,
        //         gameParams: {
        //             token: this.userInfo.token,
        //             lang: this.nowLang,
        //         },
        //     })
        // },
        // doOpenApp(params) {
        //     if (this.isSafari && (this.isIosDesktop || this.isIos || this.isPad)) {
        //         errorMessageBoxCB(
        //             {
        //                 message: this.$t('ui_please_ignore_safari_url'),
        //             },
        //             {
        //                 callback: () => {
        //                     this.doCheck(params)
        //                 },
        //             },
        //         )
        //     } else {
        //         this.doCheck(params)
        //     }
        // },
        // setStore(storeObj) {
        //     Object.keys(storeObj).forEach(name => {
        //         if (!this.$store._modules.root.getChild(name)) {
        //             this.$store.registerModule(name, storeObj[name])
        //         }
        //     })
        // },
        // unSetStore(storeArr) {
        //     if (!Array.isArray(storeArr)) {
        //         storeArr = [storeArr]
        //     }
        //     storeArr.forEach(name => {
        //         if (this.$store._modules.root.getChild(name)) {
        //             this.$store.unregisterModule(name)
        //         }
        //     })
        // },
    },
    computed: {
        // ...mapGetters('Config', ['userInfo']),
        // ...mapGetters('Common', ['nowLang']),
    },
}
