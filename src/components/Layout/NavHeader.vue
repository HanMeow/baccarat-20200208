<template>
    <van-nav-bar
        :class="[
            'crown_header',
            logo
        ]"
        :zIndex="3000"
        :title="title"
        :left-text="''"
        :fixed="false"
        :left-arrow="false"
        :hairline="false"
    >
        <!-- 右 登出/設定 按鈕組 -->
        <template v-if="type !== 0" slot="right">
            <div class="header-right j_flex-center-around" >
                <van-image
                    :width="27"
                    :src="setup"
                />
                <van-image
                    :width="27"
                    :src="goaway"
                />
            </div>
        </template>
        <!-- 右 登出/設定 按鈕組 -->
    </van-nav-bar>
</template>

<script>
import { NavHeader } from '@mixins/Layout/NavHeader'
// import globeSvg from '@C/svgIcons/globe'
// import languageSelector from '@C/Language/languageSelector'
import vanNavBar from 'vant/lib/nav-bar'
import vanImage from 'vant/lib/image'

export default {
    name: 'NavHeader',
    components: {
        // languageSelector,
        vanNavBar,
        vanImage,
    },
    mixins: [NavHeader],
}
</script>
