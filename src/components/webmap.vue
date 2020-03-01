<!-- 主要界面地图模版 -->
<template>
  <div id="WebMap"></div>
</template>

<script>
  import Vue from 'vue';
  import * as maptalks from 'maptalks';
  import 'maptalks/dist/maptalks.css';
  import {
    ClusterLayer
  } from 'maptalks.markercluster';
  import {
    HeatLayer
  } from 'maptalks.heatmap';

  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "WebMap",
    components: {},
    data() {
      //这里存放数据
      return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      markInfo() {
        fetch("http://120.77.76.166/coronavius/assets/points.json").then(result => result.json()).then(result => {
          let markers = []
          const testpoint = result.points;
          for (var i = 0; i < testpoint.length; i++) {
            var a = testpoint[i];
            markers.push(new maptalks.Marker([a[1], a[0]]));
          }
          let clusterLayer = new ClusterLayer('cluster', markers, {
            'noClusterWithOneMarker': false,
            'maxClusterZoom': 18,
            //"count" is an internal variable: marker count in the cluster.
            'symbol': {
              'markerType': 'ellipse',
              'markerFill': {
                property: 'count',
                type: 'interval',
                stops: [
                  [0, 'rgb(135, 196, 240)'],
                  [9, '#1bbc9b'],
                  [99, 'rgb(216, 115, 149)']
                ]
              },
              'markerFillOpacity': 0.7,
              'markerLineOpacity': 1,
              'markerLineWidth': 3,
              'markerLineColor': '#fff',
              'markerWidth': {
                property: 'count',
                type: 'interval',
                stops: [
                  [0, 40],
                  [9, 60],
                  [99, 80]
                ]
              },
              'markerHeight': {
                property: 'count',
                type: 'interval',
                stops: [
                  [0, 40],
                  [9, 60],
                  [99, 80]
                ]
              }
            },
            'drawClusterText': true,
            'geometryEvents': true,
            'single': true
          });
          Vue.mapInstance.addLayer(clusterLayer);
        });
      },
      //加载企业复工热力图
      heatMapInfo(){
        fetch("http://120.77.76.166/coronavius/assets/points.json").then(result => result.json()).then(result => {
          const testpoint = result.points;
          let data = testpoint.map(function (p) { 
            return [p[1], p[0]];
           });
          let heatLayer = new HeatLayer('heat', data, {
              'heatValueScale': 0.7,
              'forceRenderOnRotating' : true,
             'forceRenderOnMoving' : true
          });
          Vue.mapInstance.addLayer(heatLayer);
        });
      },
      //加载区划信息
      polygon() {
        fetch("http://120.77.76.166/coronavius/assets/county.json").then(result => result.json()).then(county => {
          const geometries = maptalks.GeoJSON.toGeometry(county);
          const vectorLayer = Vue.mapInstance.getLayer('v').addGeometry(geometries);
          //设置style
          vectorLayer.setStyle([{
              'filter': ['==', 'RISK', '低风险'],
              'symbol': {
                'polygonFill': 'rgb(0,255,0)',
                'polygonOpacity': 0.5,
                'lineColor': '#000',
                'lineWidth': 2
              }
            },
            {
              'filter': ['==', 'RISK', '中风险'],
              'symbol': {
                'polygonFill': 'rgb(255,255,0)',
                'polygonOpacity': 0.5,
                'lineColor': '#000',
                'lineWidth': 2
              }
            },
            {
              'filter': ['==', 'RISK', '高风险'],
              'symbol': {
                'polygonFill': 'rgb(255,0,0)',
                'polygonOpacity': 0.5,
                'lineColor': '#000',
                'lineWidth': 2
              }
            }
          ]);
        });
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      //构建map
      Vue.mapInstance = new maptalks.Map("WebMap", {
        center: [114.31, 30.31],
        zoom: 14,
        spatialReference: {
          projection: 'baidu'
        },
        layers: [
          new maptalks.VectorLayer('v')
        ]
      });
      const dpr = Vue.mapInstance.getDevicePixelRatio();
      const scaler = dpr > 1 ? 2 : 1;
      Vue.mapInstance.setBaseLayer(new maptalks.TileLayer("base", {
        'urlTemplate': `http://online2.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=${scaler}&udt=20190704`,
        'subdomains': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        'attribution': '&copy; <a target="_blank" href="http://map.baidu.com">Baidu</a>'
      }));
      //marker
      this.markInfo();
      //heatmap
      this.heatMapInfo();
      //
      this.polygon();

    },

    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #WebMap {
    height: 100%;
<<<<<<< HEAD
    /*height: 500px;*/
    /*position: absolute;*/
=======
    position: absolute;
    /* position:relative; */
>>>>>>> d35a9e867d0be9d23ec9e7ad4bf283b021bf8585
    top: 0px;
    left: 0px;
    width: 100%;
  }
</style>