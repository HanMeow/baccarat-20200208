<template>
    <div :class="[
        'mail-chat-box',
        is_me ? 'j_background--cyan-blue':'j_background--button',
        is_me ? 'j_border--blue-t3':'j_border--base-t5',
        is_me ? '':'not-me',
        ]"
    >
        <p v-if="sender" v-text="`${is_me ? '':'From: '}${sender}`"/>
        <p v-if="title">
            <van-icon name="chat" size="15px"/>
            <span v-text="title"></span>
        </p>
        <p class="j_text--secondary" v-text="time"/>
        <van-divider />
        <p v-text="message"/>
    </div>
</template>

<script>
import { Divider } from 'vant'

export default {
    name: 'mailChatBox',
    props: {
        is_me: {
            type: [String, Boolean],
            default: true
        },
        sender: {
            type: [Number, String],
            default: ''
        },
        title: {
            type: [Number, String],
            default: ''
        },
        time: {
            type: [Number, String],
            default: '--'
        },
        message: {
            type: [Number, String],
            default: '--'
        },
    },
    components: { vanDivider: Divider },
    data() {
        return {

        }
    },
    mounted() {
        
    },
    watch: {
        
    },
    methods: {
        
    },
    computed: {

    },
}
</script>
