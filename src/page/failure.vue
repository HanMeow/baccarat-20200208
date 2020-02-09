<template>
    <div class="gy_failure">
        <div class="gy_failure--inner">
            <img src="~@I/failure_bg.png" alt="">
            <div class="gy_failure--content j_text--main">
                <p>
                    链结网址失效
                </p>
                <p>
                    请重新操作
                </p>
                <span v-text="$t('ui_return_in_seconds', [time])" />
            </div>
            <router-link :to="{name: 'Home'}" >
                <button class="gy_failure--button">立即返回首页</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import index from '@P/index'

export default {
    name: 'failure',
    mixins: [index],
	data() {
        return {
            time: 0,
            timer: null
        }
    },
    methods: {
        cuntDown() {
            if (this.time === 0) {
                if (window.downloadLink) {
                    console.log('downloadLink')
                    location.href = /(http|https)/.test(window.downloadLink) ? window.downloadLink : `//${window.downloadLink}`
                } else {
                    console.log('path')
                    this.$router.push({name: 'Home'})
                }
            } else {
                this.time--
            }
        }
    },
    mounted() {
        this.time = 3
        this.timer = setInterval(this.cuntDown, 1000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>
