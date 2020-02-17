<template>
    <div>
        <!-- footer 主體 -->
        <van-tabbar
            v-model="actived"
            class="gy_footer"
            style="z-index: 1000;"
            active-color="#5a5b5d"
            inactive-color="#8d8e90"
            @change="change"
        >
            <van-tabbar-item
                v-for="(link, index) in filteredLinkList"
                :class="`gy_content__link`"
                :key="`link${index}`"
                @click="MenuLink(link)"
            >
                <template v-if="link.requireLogin ? userInfo.token : !0">
                    <!-- 自定义 -->
                    <van-icon
                        slot="icon"
                        class-prefix="footer-icon"
                        :name="`${link.icon}${actived === index ? '' : '-o'}`"
                    />
                    <div
                        class="gy_link__text"
                        v-text="$t(link.text)"
                    />
                </template>
            </van-tabbar-item>
            <!-- 舊多語 -->
            <!-- <van-tabbar-item
                class="language"
                :class="`gy_content__link`"
            >
                <globe-svg
                    slot="icon"
                    :customClass="['color_bg', 'color_stroke']"
                    class="language_icon"
                />
                <div class="gy_link__text" v-text="$t(nowLang)" />
            </van-tabbar-item> -->
            <!-- 舊多語 -->
        </van-tabbar>
        <!-- footer 主體 -->
    </div>
</template>

<script>
import { NavFooter } from '@mixins/Home/NavFooter'
// import languageSelector from '@C/Language/languageSelector'
import globeSvg from '@C/svgIcons/globe'
// import '@IMGT/fonts/footer_icons/css/footer.css'

export default {
    name: 'NavFooter',
    components: { globeSvg },
    mixins: [NavFooter],
}
</script>

<style lang="scss" scoped>
.van-tabbar {
    height: 45px;
    box-shadow: 0px -1px 2px 2px rgba(156, 156, 156, 0.5);
}
</style>
