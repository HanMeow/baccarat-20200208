<template>
    <div class="box">
        <div class="title" v-text="title"></div>
        <div class="form">
            <div :class="['input user', foucsActived === 'user' ? 'actived' : '']">
                <Field
                    ref="registeruser"
                    @focus="onFocus($event, 'user')"
                    :error="check.userName"
                    :error-message="error.userName"
                    required
                    clearable
                    pattern="[0-9a-zA-Z]*"
                    type="email"
                    left-icon="user-o"
                    :placeholder="$t('tip_acc_blank')"
                    v-model="data.userName"
                    @keypress.enter="onFocusTo('password')"
                ></Field>
            </div>
            <transition name="fade">
                <span v-if="foucsActived === 'user'" class="tip_words">{{ $t('sysmsg_reg_acc_err') }}</span>
            </transition>
            <div :class="['input password', foucsActived === 'password' ? 'actived' : '']">
                <Field
                    ref="registerpassword"
                    @focus="onFocus($event, 'password')"
                    :error="check.userPassword"
                    :error-message="error.userPassword"
                    required
                    clearable
                    pattern="\w*"
                    left-icon="bag-o"
                    @click-right-icon="toggleType"
                    :right-icon="showPassword ? 'closed-eye' : 'eye-o'"
                    :type="showPassword ? 'text' : 'password'"
                    :placeholder="$t('tip_pwd_blank')"
                    v-model="data.userPassword"
                    @keypress.enter="
                        hasVerifyCode || hasCheckPwd
                            ? onFocusTo(hasCheckPwd ? 'confirmPassword' : 'validate')
                            : checkRule
                    "
                ></Field>
            </div>
            <transition name="fade">
                <span v-show="foucsActived === 'password'" class="tip_words">{{ $t('sysmsg_reg_pwd_err') }}</span>
            </transition>
            <div
                :class="['input confirmPassword', foucsActived === 'confirmPassword' ? 'actived' : '']"
                v-if="hasCheckPwd"
            >
                <Field
                    ref="registerconfirmPassword"
                    @focus="onFocus($event, 'confirmPassword')"
                    :error="check.userConfirmPassword"
                    :error-message="error.userConfirmPassword"
                    required
                    clearable
                    pattern="\w*"
                    left-icon="bag-o"
                    @click-right-icon="toggleConfirm"
                    :right-icon="showConfirmPassword ? 'closed-eye' : 'eye-o'"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    :placeholder="$t('ui_pwd_check')"
                    v-model="data.userConfirmPassword"
                    @keypress.enter="onFocusTo('validate')"
                ></Field>
            </div>
            <transition name="fade" v-if="hasCheckPwd">
                <span v-show="foucsActived === 'confirmPassword'" class="tip_words">{{
                    $t('sysmsg_reg_pwd_err')
                }}</span>
            </transition>
            <div :class="['input validate', foucsActived === 'validate' ? 'actived' : '']" v-if="hasVerifyCode">
                <Field
                    ref="registervalidate"
                    @focus="onFocus($event, 'validate')"
                    :error="check.verificationCode"
                    :error-message="error.verificationCode"
                    required
                    clearable
                    pattern="\d*"
                    type="number"
                    :placeholder="$t('ui_code')"
                    v-model="data.verificationCode"
                    @keydown.enter="checkRule"
                >
                </Field>
                <van-image
                    v-if="showImage"
                    ref="img"
                    width="150px"
                    height="50px"
                    fit="cover"
                    :src="filteredSrc"
                    radius="0 50px 50px 0"
                    @click.stop="changeImage"
                ></van-image>
            </div>
            <div :class="['input referralId', foucsActived === 'referralId' ? 'actived' : '']" v-if="isShowID">
                <Field
                    @focus="onFocus($event, 'referralId')"
                    :error="check.referralId"
                    :error-message="error.referralId"
                    left-icon="user-o"
                    :placeholder="$t('ui_hint_recommended_id')"
                    v-model="data.referralId"
                ></Field>
            </div>
            <Button class="gy_btn" size="small" round type="info" @click="checkRule">
                {{ $t('ui_register_new_account') }}
            </Button>
        </div>
    </div>
</template>

<script>
import { Button, Field, Icon, Image } from 'vant'
// import register from '@mixins/security/register'

export default {
    name: 'register',
    components: { Icon, Field, Button, vanImage: Image },
    // mixins: [register],
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
    transition: opacity 0.5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.tip_words {
    font-size: 0.7rem;
    color: #ecec00;
}
</style>
