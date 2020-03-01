<template>
    <div id="app">
        <webmap ref="webmap"></webmap>
        <!--<button @click="display_cluster">聚点图</button> 
        <button @click='display_heatMap'>企业复工热力图</button>-->
    </div>
</template>

<script>
    import webmap from './components/webmap';
    export default {
        name : 'app',
        components: {
            webmap: webmap
        },
        methods: {
            display_cluster() {
                console.log(this); 
                console.log(this.$refs); 
                // this.$refs.child1得到的子组件实例 
                this.$refs.webmap.markInfo();
            },
            display_heatmap(){
                this.$refs.webmap.heatMapInfo();
            },
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