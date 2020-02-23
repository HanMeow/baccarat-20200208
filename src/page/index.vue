<template>
    <div>
        <!-- <loadingMask :loading="loading"></loadingMask> -->
        <transition name="header" mode="out-in" ref="header">
            <NavHeader v-if="$route.meta.hasNav"></NavHeader>
        </transition>
        <transition name="slide" mode="out-in">
            <router-view class="main__container"></router-view>
        </transition>
        <transition name="footer" mode="out-in" ref="footer">
            <NavFooter v-if="$route.meta.hasFoot"></NavFooter>
        </transition>
    </div>
</template>

<script>
const NavHeader = () => import('@C/Layout/NavHeader')
const NavFooter = () => import('@C/Layout/NavFooter')
import { index } from '@mixins/view/index'
import loadingMask from '@C/loading'

export default {
    name: 'index',
    components: {
        NavHeader,
        NavFooter,
        loadingMask
    },
    mixins: [index]
}
</script>

