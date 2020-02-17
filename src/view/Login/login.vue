<template>
    <div class="box">
        <div class="title">{{ $t('btn_login') }}</div>
        <div class="form">
            <div :class="['input user', foucsActived === 'user' ? 'actived' : '']">
                <van-field
                    ref="loginuser"
                    required
                    clearable
                    pattern="\w*"
                    left-icon="user-o"
                    :placeholder="$t('tip_acc_blank')"
                    v-model.trim="data.userName"
                    :error="check.userName"
                    :error-message="errorsMsg.userName"
                    @focus="onFocus($event, 'user')"
                    @blur="checkName"
                    @keypress.enter="onFocusTo('password')"
                ></van-field>
            </div>
            <transition name="fade" mode="out-in">
                <span v-show="foucsActived === 'user'" class="tip_words">{{ $t('sysmsg_reg_acc_err') }}</span>
            </transition>
            <div :class="['input password', foucsActived === 'password' ? 'actived' : '']">
                <van-field
                    ref="loginpassword"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    clearable
                    pattern="\w*"
                    left-icon="bag-o"
                    :right-icon="showPassword ? 'closed-eye' : 'eye-o'"
                    :placeholder="$t('tip_pwd_blank')"
                    :error="check.userPassword"
                    :error-message="errorsMsg.userPassword"
                    v-model.trim="data.userPassword"
                    @click-right-icon="toggleType"
                    @focus="onFocus($event, 'password')"
                    @blur="checkPassword"
                    @keypress.enter="onFocusTo('validate')"
                ></van-field>
            </div>
            <transition name="fade" mode="out-in">
                <span v-show="foucsActived === 'password'" class="tip_words">{{ $t('sysmsg_reg_pwd_err') }}</span>
            </transition>
            <div :class="['input validate', foucsActived === 'validate' ? 'actived' : '']">
                <van-field
                    ref="loginvalidate"
                    type="number"
                    required
                    clearable
                    pattern="\d*"
                    :placeholder="$t('ui_code')"
                    :error="check.verificationCode"
                    :error-message="errorsMsg.verificationCode"
                    v-model.trim="data.verificationCode"
                    @focus="onFocus($event, 'validate')"
                    @blur="checkCode"
                    @keydown.enter="checkRule"
                >
                </van-field>
                <van-image
                    v-if="showImage"
                    ref="img"
                    width="150px"
                    height="50px"
                    fit="cover"
                    :src="src"
                    radius="0 50px 50px 0"
                    @click.stop="changeImage"
                ></van-image>
            </div>
            <div class="j_flex-around">
                <!-- <span class="link" @click="enterHome" v-text="$t('ui_forgot_account')"/> -->
                <!-- <span class="link" @click="enterHome" v-text="$t('ui_forget_password')"/> -->
                <span class="link" v-if="showForgot" @click="enterForget" v-text="$t('ui_forgot_account_or_password')"/>
                <span class="link" @click="enterHome" v-text="$t('ui_guest_login')"/>
            </div>
            <Button class="gy_btn" size="small" round type="default" @click="checkRule">
                {{ $t('btn_login') }}
            </Button>
        </div>
    </div>
</template>

<script>
import Login from '@M/Login/login'
import { createNamespacedHelpers, mapGetters, mapMutations } from 'vuex'
import {
    Button,
    // Field,
    Image
} from 'vant'
const LoginStore = createNamespacedHelpers('Login/')
// import login from '@mixins/security/login'
export default {
    name: 'login',
    components: {
        // Field,
        Button,
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
        this.$root.$emit('setStore', { Login })
    },
    methods: {
        ...LoginStore.mapActions({
            createAccount: _M.CREATED,
        }),
        ...mapMutations('Common', {
            setLoading: 'loading',
            setError: 'error',
        }),
        enterHome() {
            this.$router.push({
                name: 'Home',
            })
        },
        enterForget() {
            this.$router.push({
                name: 'forget',
            })
        },
    },
    computed: {
        ...mapGetters('Common', ['error']),
        ...mapGetters('Config', ['baseUrl', 'userConfig']),
    },
}
</script>

<style lang="scss" scoped>
.input.validate {
    display: flex;

    .van-cell {
        min-height: 44px;
        flex: 35;
    }
    .van-cell:not(:last-child)::after {
        border: none;
    }
    .van-image {
        flex: 50;
    }
}
.fade-enter-active {
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.input {
    transform: all 0.5s ease;
}
.tip_words {
    font-size: 0.7rem;
    color: #ecec00;
}
// .input.actived {
//     outline: none !important;
//     box-shadow: 0 0 10px #719ECE;
// }
</style>
