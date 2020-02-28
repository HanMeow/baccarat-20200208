import { mapActions, mapGetters } from 'vuex'
// import { warnMessageBox, errorMessageBox } from '@UTIL'

export const NavHeader = {
    name: 'NavHeader',
    methods: {
        ...mapActions('layout/header', {
            changeTitle: _M.UPDATED,
        }),
    },
    mounted() {
        window.hh = this
    },
    computed: {
        ...mapGetters('layout/header', [
            'state',
        ]),
        goaway() {
            return require('@IMGT/header-goaway.png')
        },
        setup() {
            return require('@IMGT/header-setup.png')
        },
        people() {
            return require('@IMGT/header-people.png')
        },
        money() {
            return require('@IMGT/header-money.png')
        },
        title() {
            return this.state.title
        },
        type() {
            return {
                '1': 'button',
                '2': 'info',
                'button': 'button',
                'info': 'info',
            }[this.state.type] || ''
        },
        logo() {
            return {
                '1': 'left',
                '2': 'right',
                'left': 'left',
                'right': 'right',
            }[this.state.logoPosition] || ''
        },
    }
}
