<template>
    <router-view class="wrapper"></router-view>
    <!-- <div></div> -->
</template>

<script>
import { App } from '@mixins/App'

export default {
    name: 'app',
    components: { },
    mixins: [App],
}
</script>
