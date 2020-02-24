<template>
    <van-nav-bar
        :class="[
            'gy_header',
            logo
        ]"
        :zIndex="3000"
        :title="title"
        :left-text="''"
        :fixed="false"
        :left-arrow="false"
        :hairline="false"
    >
        <!-- 右 詳細按鈕/編輯按鈕 -->
        <template v-if="type !== 0" slot="right">
        </template>
        <!-- 右 詳細按鈕/編輯按鈕 -->
    </van-nav-bar>
</template>

<script>
import { NavHeader } from '@mixins/Layout/NavHeader'
// import globeSvg from '@C/svgIcons/globe'
// import languageSelector from '@C/Language/languageSelector'
import vanNavBar from 'vant/lib/nav-bar'

export default {
    name: 'NavHeader',
    components: {
        // languageSelector,
        vanNavBar,
    },
    mixins: [NavHeader],
}
</script>
