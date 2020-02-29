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
  import markerCount from '../assets/points.js';
  import county from '../assets/polygon.js';
  import street from '../assets/street.js';

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
        let markers = []
        const testpoint = markerCount.testpoint;
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
      },
      //加载区划信息
      polygon() {
        const geometries = maptalks.GeoJSON.toGeometry(street);
        const vectorLayer = Vue.mapInstance.getLayer('v').addGeometry(geometries);
        //设置style
        vectorLayer.forEach(function (feature) {
          feature.updateSymbol([{
            'polygonFill' : 'rgb(135,196,240)',
            'polygonOpacity' : 1,
            'lineColor' : '#1bbc9b',
            'lineWidth' : 6,
            'lineJoin'  : 'round', //miter, round, bevel
            'lineCap'   : 'round', //butt, round, square
            'lineDasharray' : null,//dasharray, e.g. [10, 5, 5]
            'lineOpacity ' : 1
          }]);
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
        baseLayer: new maptalks.TileLayer("base", {
          urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          subdomains: ['a', 'b', 'c'],
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        }),
        layers: [
          new maptalks.VectorLayer('v')
        ]
      });
      //marker
      this.markInfo();
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
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }
</style>