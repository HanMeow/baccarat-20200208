<template>
    <van-button
        round
        size="large"
        :hairline="true"
        :class="`main__submit${$route.meta.hasFoot ? '' : '-no_footer'}${relative ? '-relative' : ''}${subbutton ? ' subbutton' : ''}`"
        :disabled="disabled"
        :icon="icon"
        :type="type"
        @click="onClick"
        :text="$t(text)"
    ></van-button>
</template>

<script>
// import MainButton from '@C/MainButton'
import vanButton from 'vant/lib/button';

export default {
    name: 'MainButton',
    components: {
        vanButton
    },
    props: {
        subbutton: {
            default: false,
        },
        relative: {
            default: false,
        },
        disabled: {
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'default',
        },
        text: {
            type: [String, Number],
            default: 'btn_submit',
        },
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        onClick($event) {
            this.$emit('click', $event)
        },
    },
    // computed: {
    // },
}
</script>

<style lang="scss">
</style>
