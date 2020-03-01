<template>
    <div id="app">
        <!-- <span id='title'>湖北省新冠病毒疫情</span> -->
        <img id='img' src ="./dist/Banner.png" width="100%">
        <img id='legend' src ="./dist/legend01.png">
        <p id="title">湖北省新冠病毒疫情</p>
        <webmap ref="webmap"></webmap>
        <!-- <button @click="display">聚点图</button> -->
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
        z-index:1
    }
    #legend {
        position: fixed;
        height: 15%;
        width: 40%;
        z-index:2;
        left: 3%;
        bottom: 15%;
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