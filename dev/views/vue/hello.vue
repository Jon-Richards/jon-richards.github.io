<template>
    <div>
        <p>{{ message }}</p>
        <p>hah! hmr works out of the box!</p>
    </div>
</template>

<script lang="js">
    import Vue from 'vue';

    export default Vue.extend({
        data () {
            return {
                message: 'Hello with TypeScript!'
            }
        }
    });
</script>

<style lang="scss" scoped>
    @import '../scss/index';
    $color-blue: #00f;

    p {
        color: $swatch-2;
        font-size: 2rem;
    }
</style>