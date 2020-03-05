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
    import { MP } from './../components/map.js'

    export default {
        name: 'jiangxia',
        
        components: {
           Drawer : Drawer,
           webmap : webmap,
           info : info
        },

        data(){
            return{
            }
        },

        methods: {    
            getMylocation(){
                Vue.mapInstance.setCenter([113.69801525292405,34.79696180530942])   
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(this.$options.methods.displayLocation(),this.$options.methods.displayError());
                }else{
                    alert('no geolocation support');
                }
            },

            displayLocation(position){
                var lat=position.coords.latitude;
                var lon=position.coords.longitude;
                Vue.mapInstance.setCenter([lon,lat])
                console.log(lat,lon)
            },

            displayError(error){
                var errorTypes={
                    0:'unknow error',
                    1:'permission denied by user',
                    2:'position is not avaliable',
                    3:'request time out'
                };
                var errorMessage=errorTypes[error.code];
                console.log(errorMessage)
            }    
        },
        mounted () {
            // this.$nextTick(() => {
            //     const _this = this
            //     MP(_this.ak).then(BMap => {
            //         var geolocation = new BMap.Geolocation();
            //         geolocation.enableSDKLocation();
            //         geolocation.getCurrentPosition(function(r) {
            //             if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            //                 console.log(r);
            //                 var lng = r.point.lng;
            //                 var lat = r.point.lat
            //                 Vue.mapInstance.setCenter([lng,lat])
            //                 // Vue.mapInstance.setZoom(17)
            //             } else {
            //                 alert('failed' + this.getStatus());
            //             }
            //         });
            //     })
            // })
            // navigator.geolocation.getCurrentPosition(
            //     function(position) {
            //           console.log(position.coords.longitude)
            //           console.log(position.coords.latitude)
            //     },
            //     function(error){
            //           console.log(error)
            //     }
            // )
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