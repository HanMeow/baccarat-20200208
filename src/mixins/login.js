import { createNamespacedHelpers, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            inputs: {
                account: {
                    value: '',
                    errorMsg: '',
                    placeholder: '請輸入手機號碼',
                    type: 'digit',
                    src: require('@IMGT/sign-people.png'),
                },
                password: {
                    value: '',
                    errorMsg: '',
                    placeholder: '請輸入密碼',
                    type: 'password',
                    src: require('@IMGT/sign-lock.png'),
                },
            },
            account: '',
            password: '',
        }
    },
    async mounted() {
    },
    methods: {
        ...mapActions('Login', {
            login: _M.CREATED,
        }),
        checkInputs() {
            let result = true
            for (const key in this.inputs) {
                if (!this.inputs[key].value) {
                    this.inputs[key].errorMsg = this.inputs[key].placeholder
                    result = false
                }
            }
            return result
        },
        onPlay() {
            if (this.checkInputs()) {
                this.login()
                    .then(res => {
                        // console.log(`debug: onPlay -> res`, res)
                        this.$router.push({ name: 'Home' })
                    })
                    .catch(err => {
                        
                    })
            }
        },
    },
    computed: {
        // ...mapGetters('Config', ['userInfo', 'baseUrl']),
        ...mapGetters('Common', ['loading']),
        logo() {
            return require('@IMGT/sign-logo.png')
        },
        // people() {
        //     return require('@IMGT/sign-people.png')
        // },
        // lock() {
        //     return require('@IMGT/sign-lock.png')
        // },
        service() {
            return require('@IMGT/sign-service.png')
        },
    },
}