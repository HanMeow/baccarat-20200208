<template>
    <div class="login-box">
        <loadingMask :loading="loading"></loadingMask>

        <div class="top_v" v-if="version" v-text="version"></div>
        <div class="login-mask">
            <div class="login-form login" :class="{ 'is-active': !showRegister }">
                <login :actived="!showRegister" :src="src" @changeImg="changeImg"></login>
                <div
                    class="j_flex-column-center sider"
                    @click="togglePage"
                >
                    <Icon name="manager" />
                    {{ $t('ui_register_new_account') }}
                </div>
            </div>
            <div class="login-form register" :class="{ 'is-active': showRegister }">
                <div
                    class="j_flex-column-center sider"
                    v-if="!this.$route.params.linkId"
                    @click="togglePage"
                >
                    <Icon name="manager" />{{ $t('btn_back') }}
                </div>
                <register :actived="showRegister" :src="src" @changeImg="changeImg" @success="onSuccess"></register>
            </div>
        </div>
    </div>
</template>

<script>
import mobile from '@M/mobile'
import { getApi } from '@API/api'
import { Icon } from 'vant'
import loadingMask from '@C/loading'
import register from '@V/Login/register'
import login from '@V/Login/login'
import { jwtEncode } from '@UTIL'
import { mapGetters } from 'vuex'

export default {
    name: 'LoginContent',
    components: { loadingMask, Icon, register, login },
    data() {
        return {
            showRegister: false,
            version: '',
            time: +new Date(),
            // imgLoading: false,
            height: 0,
            width: 0,
        }
    },
    async mounted() {
        const ua = window.navigator.userAgent.toLowerCase()
        if (this.$fromApp.has) {
            this.version = `v${this.$fromApp['version']}` || ''
        }
        this.showRegister = this.$router.currentRoute.name === 'registerId'
    },
    methods: {
        togglePage() {
            this.showRegister = !this.showRegister
        },
        changeImg({height = 50, width = 100}) {
            this.src = {height, width}
        },
        onSuccess() {
            this.showRegister = false
            this.$router.replace({
                name: 'Login',
            })
        },
    },
    computed: {
        ...mapGetters('Config', ['userInfo', 'baseUrl']),
        ...mapGetters('Common', ['loading']),
        src: {
            get() {
                if (!this.width || !this.height) {
                    return ''
                }
                const data = {
                    // img_height: 50,
                    // img_width: 100,
                    img_height: this.height,
                    img_width: this.width,
                    font_size: 24,
                }
                return this.baseUrl && this.baseUrl.mainServer
                    ? `//${this.baseUrl.mainServer}${getApi('login/code').created.path}?data=${jwtEncode(data)}&v=${
                          this.time
                      }`
                    : require(`@Static/image/default/no-image.png`)
            },
            set({height, width}) {
                this.height = height
                this.width = width
                this.time = +new Date()
            },
        },
    },
}
</script>
