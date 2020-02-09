<template>
    <svg class="gy_user-balance__refresh" viewBox="0 0 20 20" v-on="$listeners">
        <circle cx="9.5" cy="11" r="9" :class="customClass[0]" />
        <path :class="[customClass[1], 'gy_refresh__item']"
            d="M10.89,12.82l1.2,1.7a6.32,6.32,0,0,1-6.54.37A6.49,6.49,0,0,1,2.33,7.63L.9,7a2.65,2.65,0,0,1-.29-.14c-.15-.09-.14-.2,0-.3a1.41,1.41,0,0,1,.22-.12L4.47,4.57c.47-.24.6-.18.74.34.36,1.33.72,2.65,1.08,4a1.39,1.39,0,0,1,0,.38,1.61,1.61,0,0,1-.36-.06L4.41,8.55a4,4,0,0,0,1.13,3.69A4.34,4.34,0,0,0,10.89,12.82Z"
            transform="translate(0.5 2.1)" />
        <path :class="[customClass[1], 'gy_refresh__item']"
            d="M13.61,9.49a4.14,4.14,0,0,0-1.32-3.86,4.33,4.33,0,0,0-5.18-.41L5.89,3.49c.13-.08.24-.17.37-.24a6.21,6.21,0,0,1,6.53.11A6.2,6.2,0,0,1,15.85,9a6.34,6.34,0,0,1-.15,1.16c0,.19,0,.26.17.33.46.19.91.39,1.36.61a1.37,1.37,0,0,1,.26.21c-.07.08-.14.19-.23.24l-3.87,2c-.29.14-.48.07-.56-.24q-.58-2.11-1.15-4.23a.34.34,0,0,1,0-.29c.06,0,.2,0,.29,0Z"
            transform="translate(0.5 2.1)" />
    </svg>
</template>

<script>
// import refreshSvg from '@C/svgIcons/refresh'
export default {
    name: 'refresh',
    props: {
        customClass: {
            type: Array,
            default() {
                return ['gy_user-balance__refresh__bgcolor', 'gy_user-balance__refresh__color']
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.gy_user-balance__refresh__bgcolor {
    fill: #31b9a0;
}
.gy_user-balance__refresh__color {
    fill: white;
}
</style>
