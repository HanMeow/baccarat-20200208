<template>
    <!-- <div>
		<div
			:class="`j_flex-end gy_header`"
			v-show="$route.path !== '/login'
		"> -->
    <van-nav-bar
        v-show="$route.path !== '/login'"
        :class="`j_text--day force gy_header ${background}`"
        :zIndex="3000"
        :title="$t(title)"
        :left-text="left ? $t(leftText) : ''"
        fixed
        :left-arrow="left"
        @click-left="leftClick"
        @click-right="rightClick"
    >
        <!-- 右 詳細按鈕/編輯按鈕 -->
        <template v-if="type !== 0" slot="right">
            <div class="gy_game--header__detail">
                <span class="j_text--day" v-text="$t(rightText)"></span>
                <van-icon :name="['', 'filter-o', 'edit'][type]" color="#FFF"></van-icon>
            </div>
        </template>
        <!-- 右 詳細按鈕/編輯按鈕 -->
    </van-nav-bar>
    <!-- </div>
	</div> -->
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
