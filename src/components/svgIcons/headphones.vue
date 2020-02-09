<template>
    <svg @click="click($event)" version="1.1" :class="[...customClass]" viewBox="0 0 512 512">
        <path
            d="m61 257v15h-30v30h30v45c0 24.813 20.187 45 45 45h75v-180h-75c-24.813 0-45 20.187-45 45z" />
        <path
            d="m481 272h-30v-15c0-24.813-20.187-45-45-45h-75v180h75c24.813 0 45-20.187 45-45v-45h30z" />
        <path
            d="m256 30c87.09 0 158.64 67.83 164.59 153.43 11.24 2.22 21.58 6.96 30.41 13.61v-2.04c0-107.52-87.48-195-195-195s-195 87.48-195 195v2.04c8.83-6.65 19.17-11.39 30.41-13.61 5.95-85.6 77.5-153.43 164.59-153.43z" />
        <path
            d="m405.96 422c-13.69 18.21-35.47 30-59.96 30h-47.58c-6.192-17.459-22.865-30-42.42-30-24.813 0-45 20.187-45 45s20.187 45 45 45c19.555 0 36.228-12.541 42.42-30h47.58c46.09 0 85.33-29.84 99.42-71.22-11.46 7.11-24.97 11.22-39.42 11.22z" />
    </svg>
</template>

<script>
// import headphonesSvg from '@C/svgIcons/headphones'
export default {
    name: 'headphones',
    props: {
        customClass: {
            type: Array,
            default() {
                return ['', '', '', '']
            }
        }
    },
    methods: {
        click($event) {
            this.$emit('click', $event)
        }
    }
}
</script>
