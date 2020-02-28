import { createNamespacedHelpers, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    async mounted() {
        this.changeTitle({
            logoPosition: 'right',
            type: 'info',
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
        images() {
            return [{
                src: require('@IMGT/home/room-A.png'),
            }, {
                src: require('@IMGT/home/room-B.png'),
            }, {
                src: require('@IMGT/home/room-C.png'),
            }, {
                src: require('@IMGT/home/room-D.png'),
            }, ]
        },
    },
}