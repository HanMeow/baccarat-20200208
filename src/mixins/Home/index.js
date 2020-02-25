import { createNamespacedHelpers, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    async mounted() {
        this.changeTitle({
            logoPosition: 'left',
        })
    },
    methods: {
        // ...mapActions('Login', {
        //     login: _M.CREATED,
        // }),
        ...mapActions('layout/header', {
            changeTitle: _M.UPDATED,
        }),
    },
    computed: {
        ...mapGetters('layout/header', {
            headerState: 'state',
        }),
        // ...mapGetters('Config', ['userInfo', 'baseUrl']),
        // lock() {
        //     return require('@IMGT/sign-lock.png')
        // },
    },
}