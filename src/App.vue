<template>
    <div id="app">
        <img id='img' src ="./dist/Banner.png" width="100%">
        <img id='legend' src ="./dist/legend01.png">
        <p id="title">湖北省疫情综合风险分析系统</p>
        <statistic></statistic>
        <webmap ref="webmap"></webmap>
        <layer></layer>
    </div>
</template>

<script>
    import statistic from './components/statistic';
    import webmap from './components/webmap';
    import layer from './components/layer';
    export default {
        name : 'app',
        components: {
            webmap: webmap,
            statistic:statistic,
            layer:layer
        },
        methods: {
            display_cluster(i) {
                // this.$refs.child1得到的子组件实例 
                this.$refs.webmap.markInfo(i);
            },
            display_heatmap(i){
                this.$refs.webmap.heatMapInfo(i);
            },
            display_riskmap(i){
                this.$refs.webmap.polygon(i);
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
        z-index:1
    }
    #legend {
        position: fixed;
        height: 15%;
        width: 40%;
        z-index:2;
        left: 3%;
        bottom: 20%;
    }
    #img {
        position: fixed;
        z-index:2
    }
    #title {
        position: absolute;
        left: 5%;
        top: 1%;
        margin: 0;
        padding: 0;
        color: #fff;
        font: 25px'微软雅黑';
        z-index:3
    }
    /* .el-divider {
        border-radius: 4px;
    } */
</style>