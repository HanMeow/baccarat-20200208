<template>
    <div class="login">
        <loadingMask :loading="loading"></loadingMask>

        <router-link :to="{ name: 'Login' }" replace>
            <van-icon
                class="login-back"
                name="play"
                size="30px"
            />
        </router-link>

        <div class="login-box j_flex-column-center-between">
            <div class="blocker" />
            <van-image class="login-logo" :src="logo" />
            <div class="login-field j_flex-column-between">

                <!-- 輸入 -->
                <div
                    v-for="(term, key) in termList"
                    :key="key"
                    class="login-field-line j_flex-center-between"
                >
                    <van-field
                        v-model="term.text"
                        :placeholder="term.placeholder"
                    />
                </div>
                <!-- 輸入 -->

                <div class="blocker" />

                <!-- 註冊 -->
                <div class="login-field-line j_flex-center-around">
                    <div class="login-button j_flex-column-around">
                        <span class="login-button-text j_text--day" v-text="'註冊'" />
                    </div>
                </div>
                <!-- 註冊 -->

                <div class="blocker" :style="{height: '60px'}"/>

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
            termList: {
                nickName: {
                    placeholder: '輸入暱稱',
                    text: '',
                },
                account: {
                    placeholder: '輸入帳號',
                    text: '',
                },
                password: {
                    placeholder: '輸入密碼',
                    text: '',
                },
                confirm: {
                    placeholder: '確認密碼',
                    text: '',
                },
                phone: {
                    placeholder: '輸入電話',
                    text: '',
                },
            },
        }
    },
    async mounted() {
        // window.r = this
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
