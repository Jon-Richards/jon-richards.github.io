<template>
    <div>
        <hello></hello>
    </div>
</template>

<script lang="js">
    import Vue from 'vue';
    import Hello from './hello.vue';
    
    export default Vue.extend({
        components: {
            Hello
        }
    });
</script>