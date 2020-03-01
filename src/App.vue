<template>
    <div id="app">
        <webmap ref="webmap"></webmap>
        <!-- <button @click="display">聚点图</button> -->
        <!-- <el-divider></el-divider>
        <echartsdisplay/> -->
    </div>


</template>

<script>
    import webmap from './components/webmap';
    import echartsdisplay from './components/echartsdisplay';
    export default {
        name : 'app',
        components: {
            webmap: webmap,
            echartsdisplay: echartsdisplay
        },
        methods: {
            display() {
                console.log(this); 
                console.log(this.$refs); 
                // this.$refs.child1得到的子组件实例 
                this.$refs.webmap.markInfo();
            }
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
    /* .el-divider {
        border-radius: 4px;
    } */
</style>