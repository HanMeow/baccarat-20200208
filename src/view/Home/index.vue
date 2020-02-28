<template>
    <div class="home">
        <div class="home-banners j_flex-column-center-around">
            <template v-for="({ src, name }, index) in images">
                <router-link
                    class="link"
                    :to="{name}"
                    :key="index"
                >
                    <van-image
                        :class="['home-banner', `banner-${index}`]"
                        :src="src"
                        :error-icon="'question-o'"
                    >
                        <van-loading
                            slot="loading"
                            type="circular"
                            size="50%"
                        />
                    </van-image>
                </router-link>
            </template>
        </div>
    </div>
</template>

<script>
// import mobile from '@M/mobile'
import { getApi } from '@API/api'
import vanImage from 'vant/lib/image';
import vanLoading from 'vant/lib/loading';
import loadingMask from '@C/loading'
// import { jwtEncode } from '@UTIL'
import { mapGetters } from 'vuex'
import HomeContent from "@mixins/Home"


export default {
    name: 'Home',
    components: {
        loadingMask,
        vanImage,
        vanLoading,
    },
    mixins: [ HomeContent, ],
}
</script>
