<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
import { App } from '@mixins/App'

export default {
    name: 'app',
    components: { },
    mixins: [App],
}
</script>
