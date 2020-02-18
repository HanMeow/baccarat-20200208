<template>
    <div class="login">
        <loadingMask :loading="loading"></loadingMask>

        <div class="login-box j_flex-column-center-between">
            <div class="blocker" />
            <van-image class="login-logo" :src="logo" />
            <div class="login-field j_flex-column-between">

                <!-- 手機號碼 -->
                <div class="login-field-line j_flex-center-between">
                    <van-image
                        class="login-field-icon"
                        :src="people"
                    />
                    <van-field
                        v-model="account"
                        placeholder="請輸入手機號碼"
                    />
                </div>
                <!-- 手機號碼 -->

                <!-- 輸入密碼 -->
                <div class="login-field-line j_flex-center-between">
                    <van-image
                        class="login-field-icon"
                        :src="lock"
                    />
                    <van-field
                        v-model="password"
                        placeholder="請輸入密碼"
                    />
                </div>
                <!-- 輸入密碼 -->

                <!-- 忘記密碼/忘記帳號 -->
                <div class="login-field-line j_flex-center-between">
                    <div class="blocker" />
                    <span class="j_text--day" v-text="'忘記密碼'"/>
                    <span class="j_text--day" v-text="'忘記帳號'"/>
                </div>
                <!-- 忘記密碼/忘記帳號 -->

                <!-- PLAY -->
                <div class="login-field-line j_flex-center-around">
                    <div class="blocker" />
                    <div class="login-button j_flex-column-around">
                        <span class="login-button-text j_text--day" v-text="'PLAY'" />
                    </div>
                </div>
                <!-- PLAY -->

                <div class="blocker" :style="{height: '60px'}"/>

                <!-- 聯絡客服 -->
                <div class="login-field-line j_flex-column-center-around">
                    <van-image
                        class="login-service-icon"
                        :src="service"
                    />
                    <span class="j_text--day" v-text="'聯絡客服'" />
                </div>
                <!-- 聯絡客服 -->

            </div>
            <div class="blocker" />
        </div>

    </div>
</template>

<script>
// import mobile from '@M/mobile'
import { getApi } from '@API/api'
import vanImage from 'vant/lib/image';
import loadingMask from '@C/loading'
// import { jwtEncode } from '@UTIL'
import { mapGetters } from 'vuex'

export default {
    name: 'LoginContent',
    components: {
        loadingMask,
        vanImage,
    },
    data() {
        return {
            account: '',
            password: '',
        }
    },
    async mounted() {
    },
    methods: {
    },
    computed: {
        // ...mapGetters('Config', ['userInfo', 'baseUrl']),
        ...mapGetters('Common', ['loading']),
        logo() {
            return require('@IMGT/sign-logo.png')
        },
        people() {
            return require('@IMGT/sign-people.png')
        },
        lock() {
            return require('@IMGT/sign-lock.png')
        },
        service() {
            return require('@IMGT/sign-service.png')
        },
    },
}
</script>
