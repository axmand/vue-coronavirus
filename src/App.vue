<template>
    <div id="app">
        <webmap></webmap>
    </div>
</template>

<script>
    import webmap from './components/webmap';
    export default {
        components: {
            webmap
        },
        mounted() {
            
        }
    }
</script>

<style>
    body,
    html,
    #app {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }
</style>