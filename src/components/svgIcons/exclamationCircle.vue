<template>
    <svg class="c_input__icon" viewBox="0 0 42.7 42.7" v-on="$listeners">
        <path :class="customClass[0]"
            d="M21.8,30.9h-1c-0.5,0-1-0.4-1-1V19.4c0-0.5,0.4-1,1-1h1c0.5,0,1,0.4,1,1v10.5 C22.8,30.5,22.4,30.9,21.8,30.9z" />
        <path :class="customClass[0]"
            d="M21.3,11.7L21.3,11.7c-0.5,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,0.9-0.6,1.4c0,0.5,0.2,1,0.6,1.4 c0.4,0.4,0.9,0.6,1.4,0.6c1.1,0,2-0.9,2-2C23.3,12.6,22.4,11.7,21.3,11.7z" />
        <path :class="customClass[1]" stroke-width="0.5" stroke-miterlimit="10"
            d="M21.3,42.4c-11.6,0-21-9.4-21-21 s9.4-21,21-21s21,9.4,21,21S32.9,42.4,21.3,42.4z M21.3,2.1C10.7,2.1,2,10.7,2,21.4s8.7,19.3,19.3,19.3S40.7,32,40.7,21.4S32,2.1,21.3,2.1z" />
    </svg>
</template>

<script>
export default {
    name: 'exclamationCircle',
    props: {
        customClass: {
            type: Array,
            default: () => ['fill', 'fill__stroke']
        },
    },
}
</script>

<style lang="scss" scoped>
.fill {
    fill: #fff;
}
.fill__stroke {
    stroke: #fff;
}
</style>
