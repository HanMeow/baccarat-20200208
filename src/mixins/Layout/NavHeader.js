import { mapActions, mapGetters } from 'vuex'
// import { warnMessageBox, errorMessageBox } from '@UTIL'

export const NavHeader = {
    name: 'NavHeader',
    methods: {
        ...mapActions('layout/header', {
            changeTitle: _M.UPDATED,
        }),
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
        title() {
            return this.state.title
        },
        type() {
            return this.state.type
        },
        logo() {
            return {
                '1': 'left',
                '2': 'right',
                'left': 'left',
                'right': 'right',
            }[this.state.logoPosition] || 0
        },
    }
}
