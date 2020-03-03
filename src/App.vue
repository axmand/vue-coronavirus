<template>
    <div id="app">
        <img id='img' src ="./assets/Banner.png" width="100%">
        <img id='legend' src ="./assets/legend01.png" style="display:block" @click="display_img">
        <p id="title">湖北省疫情综合风险分析系统</p>
        <statistic></statistic>
        <webmap ref="webmap"></webmap>
        <layer></layer>
        <mapChoose></mapChoose>
    </div>
</template>

<script>
    import statistic from './components/statistic';
    import webmap from './components/webmap';
    import layer from './components/layer';
    import mapChoose from './components/mapChoose';
    export default {
        name : 'app',
        components: {
            webmap: webmap,
            statistic:statistic,
            layer:layer,
            mapChoose:mapChoose
        },
        methods: {
            display_img(i){
                if(i){
                    legend.style.display = "block";
                }
                else{
                    legend.style.display = "none";
                }
            },
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
            display_patient(i){
                this.$refs.webmap.allPatient(i);
            },
            display_heal(i){
                this.$refs.webmap.allHeal(i);
            },
            hybird_map(){
                this.$refs.webmap.hybird_map();
            },
            Vector_map(){
                this.$refs.webmap.Vector_map();
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
        height: 6em;
        width: auto;
        z-index:2;
        left: 3%;
        bottom: 20%;
    }
    #img {
        position: fixed;
        width: 100%;
        height: auto;
        z-index:2
    }
    #title {
        position: absolute;
        left: 5%;
        top: 1%;
        margin: 0;
        padding: 0;
        color: #fff;
        font: 1.2em'微软雅黑';
        z-index:3
    }
    /* .el-divider {
        border-radius: 4px;
    } */
</style>