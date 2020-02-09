<template>
    <div>
        <van-popup
            @opened="getPopup"
            v-model="getLoading"
            :get-container="selector"
            ref="popup"
            :close-on-click-overlay="false"
            :close-on-popstate="true"
            style="overflow: hidden; background: transparent; height: 50%; width: 50%;"
        >
            <van-loading
                :size="getSize"
                v-if="showLoading"
                vertical
                style="overflow: hidden; text-align: center;"
                color="#1989fa"
            >
                <slot></slot>
            </van-loading>
            <div v-else>.</div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: 'loading',
    props: {
        loading: {
            default: false,
        },
        selector: {
            type: [String, Function],
            default: 'body',
        },
    },
    data() {
        return {
            popup: {},
        }
    },
    created() {
        this.$nextTick(() => {
            this.popup = (this.$refs.popup && this.$refs.popup.$el) || {}
        })
    },
    methods: {
        getPopup() {
            this.$nextTick(() => {
                this.popup = (this.$refs.popup && this.$refs.popup.$el) || {}
            })
        },
    },
    computed: {
        getLoading: {
            get() {
                return Boolean(this.loading)
            },
            set(val) {
                return val
            },
        },
        showLoading() {
            return Object.keys(this.popup).length
        },
        getSize() {
            const width = this.popup.clientWidth || 50
            const height = this.popup.clientHeight || 50
            return width < height ? width : height
        },
    },
}
</script>

<style lang="scss" scoped>
.van-popup--center {
    transform: translate3d(-50%, -50%, 0);
}
</style>
