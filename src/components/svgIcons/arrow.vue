<template>
    <svg @click="click($event)" version="1.1" :class="['gy__icon_arrow', ...customClass]" viewBox="0 0 16 16">
        <path class="st0"
            d="M2.6,15.6H0.8l6.1-6.8c0.3-0.3,0.3-0.8,0-1.1L0.8,0.4l1.9,0l6.1,7.3c0.3,0.3,0.2,0.8,0,1.1L2.6,15.6z" />
        <path class="st0"
            d="M8.9,15.6H7l6.1-6.8c0.3-0.3,0.3-0.8,0-1.1L7,0.4l1.9,0l6.1,7.3c0.3,0.3,0.2,0.8,0,1.1L8.9,15.6z" />
    </svg>
</template>

<script>
// import arrowSvg from '@C/svgIcons/arrow'
export default {
    name: 'arrow',
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
