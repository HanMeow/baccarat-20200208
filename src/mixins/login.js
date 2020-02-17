import { mapGetters } from 'vuex'
import vanButton from 'vant/lib/button';

export default {
    name: 'login',
    data() {
        return {
            foucsActived: true,
            data: {},
            check: {},
            errorsMsg: {},
        }
    },
    components: {
        // Field,
        vanButton,
        vanImage: Image
    },
    // mixins: [login],
    props: {
        actived: {
            type: Boolean,
            default: false,
        },
        src: {
            type: String,
            // default: require(`@Static/image/default/no-image.png`),
        },
    },
    beforeMount() {
    },
    methods: {
        checkName() {},
    },
    computed: {
    },
}