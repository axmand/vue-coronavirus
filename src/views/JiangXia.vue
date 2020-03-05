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
            getMylocation(){
                Vue.mapInstance.setCenter([114.330506,30.358314])
                Vue.mapInstance.setZoom(17)
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(this.$options.methods.displayLocation,this.$options.methods.displayError);
                }else{
                    alert('no geolocation support');
                }
            },

            displayLocation(position){
                var lat=position.coords.latitude;
                var lon=position.coords.longitude;
                Vue.mapInstance.setCenter([num(lon),num(lat)])
            },

            displayError(error){
                var errorTypes={
                    0:'unknow error',
                    1:'permission denied by user',
                    2:'position is not avaliable',
                    3:'request time out'
                };
                var errorMessage=errorTypes[error.code];
                console.log(errorMessage);
            }
        },
        mounted () {
            this.getMylocation()
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