import { mapActions, mapGetters } from 'vuex'
// import { warnMessageBox, errorMessageBox } from '@UTIL'

export const NavHeader = {
    name: 'NavHeader',
    methods: {
        ...mapActions('Config', {
            getMenuList: 'getMenuList'
        }),
        changeLang() {
            this.getMenuList()
        },
        direct(path) {
            path && this.$router.push(path)
        },
        leftClick() {
            // console.log('debug: leftClick -> typeof backFunction', typeof this.backFunction)
            return typeof this.backFunction === 'function' ? this.backFunction() : this.$router.back()
        },
        rightClick() {
            // console.log(`debug: rightClick -> typeof this.rightFunction`, typeof this.rightFunction)
            return typeof this.rightFunction === 'function' ? this.rightFunction() : false
        },
    },
    computed: {
        ...mapGetters('Config', [
            'baseUrl',
            'userInfo',
            'list',
            'mailNumber',
            'EnvelopeMenu',
        ]),
        ...mapGetters('layout/header', [
            'title',
            'right',
            'rightText',
            'rightFunction',
            'left',
            'leftText',
            'backFunction',
            'backgroundType',
            'type',
        ]),
        logoUrl() {
            let url = '../../image/logo.png'
            if (this.baseUrl.CDN) {
                url = `//${this.baseUrl.CDN}/${this.baseUrl.platformCode}/logo.png`
            }
            return url
        },
        background() {
            switch (this.backgroundType) {
                case 1:
                    return 'j_background--main';
                    break;
                case 0:
                default:
                    return 'j_background--header';
                    break;
            }
        },
        isShowEnvelope() {
            return this.EnvelopeMenu.length !== 0 && !!this.userInfo.token
        },
        mailCount() {
            return this.mailNumber > 99 ? '99+' : this.mailNumber
        },
    }
}
