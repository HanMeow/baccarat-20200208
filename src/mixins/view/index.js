import { mapGetters } from 'vuex'

export const index = {
    methods: {
        changeDocumentTitle(title) {
            document.title = title
        },
        changeTitleByPlatform() {
            const langs = {
                en_us: 'EN',
                zh_cn: 'CN',
                vn: 'VN',
            }
            const lang = langs[this.nowLang] || 'EN'
            let title = this.baseUrl[`DOCUMENT_TITLE_${lang}`]
            title = title && title.replace(/\s+/g, '') !== '' ? title : this.baseUrl[`DOCUMENT_TITLE_EN`]
            title = title && title.replace(/\s+/g, '') !== '' ? title : this.$t('ui_chief_home')
            this.changeDocumentTitle(title)
        },
    },
    mounted() {},
    updated() {
        this.$route.name === 'home' && this.changeTitleByPlatform()
    },
    computed: {
        ...mapGetters('Common', {
            loading: 'loading',
            // nowLang: 'nowLang',
        }),
        // ...mapGetters('Config', {
        //     baseUrl: 'baseUrl',
        // }),
        platformCode() {
            return this.baseUrl.platformCode
        },
    },
}
