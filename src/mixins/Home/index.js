import { createNamespacedHelpers, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    async mounted() {
        this.changeTitle({
            logoPosition: 'left',
            type: 'button',
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
                    src: require('@IMGT/home/Baccarat-01.png'),
                    name: 'HomeLobby',
                },
                {
                    src: require('@IMGT/home/Baccarat-02.png'),
                    // route: 'HomeLobby',
                },
                {
                    src: require('@IMGT/home/Baccarat-03.png'),
                    // route: 'HomeLobby',
                },
            ]
        },
    },
}