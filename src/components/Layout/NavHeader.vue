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
        <template  slot="right">
            <transition-group name="van-fade">
                <!-- 設定/登出 -->
                <div
                    v-if="type === 'button'"
                    class="header-right j_flex-center-around"
                    key="button"
                >
                    <van-image
                        :width="27"
                        :src="setup"
                    />
                    <van-image
                        :width="27"
                        :src="goaway"
                    />
                </div>
                <!-- 設定/登出 -->

                <!-- 帳號/金額 -->
                <div
                    v-if="type === 'info'"
                    class="header-right j_flex-center-around"
                    key="info"
                >
                    <van-image
                        class="snapshot"
                        :width="40"
                        :src="people"
                    />
                    <div class="j_flex-column-between">
                        <span class="account" v-text="123456" />
                        <div class="j_flex-center-between">
                            <van-image
                                :width="13"
                                :src="money"
                            />
                            <span class="money"  v-text="123.456" />
                        </div>
                    </div>
                </div>
                <!-- 帳號/金額 -->
            </transition-group>
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
