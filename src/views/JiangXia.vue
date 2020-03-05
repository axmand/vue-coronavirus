<template>
    <div id="jiangxia">
        <img id='img' src="./../assets/Banner.png" width="100%">
        <p id="title">江夏区疫情综合风险分析系统</p>
        <webmap ref="webmap"></webmap>
        <info></info>
        <Drawer></Drawer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Drawer from './../components/Drawer';
    import webmap from './../components/webmap';
    import info from './../components/info';
    export default {
        name: 'jiangxia',
        components: {
           Drawer : Drawer,
           webmap : webmap,
           info : info
        },
        methods: {
            getCoordinates(){
                Vue.Center = [118,38];
                // Vue.mapInstance.center = Vue.Center
                this.$set(this.mapInstance,'center',Vue.Center)
            }
        },
        mounted () {
            Vue.Center = [];
            this.getCoordinates()
        }
    }
</script>

<style>
    #img {
        position: fixed;
        width: 100%;
        height: auto;
        z-index: 2
    }
    #title {
        position: absolute;
        left: 5%;
        top: 1%;
        margin: 0;
        padding: 0;
        color: #fff;
        font: 1.2em'微软雅黑';
        z-index: 3
    }
</style>