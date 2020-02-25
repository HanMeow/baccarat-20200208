<template>
    <div class="home">
        <div class="home-banners j_flex-column-center-around">
            <van-image
                v-for="({ src, }, index) in images"
                :key="index"
                :class="['home-banner', `banner-${index}`]"
                :src="src"
            />
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
import HomeContent from "@mixins/Home"


export default {
    name: 'Home',
    components: {
        loadingMask,
        vanImage,
    },
    mixins: [ HomeContent, ],
}
</script>
