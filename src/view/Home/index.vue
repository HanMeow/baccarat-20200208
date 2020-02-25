<template>
    <div class="login">

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
