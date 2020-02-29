<!-- 主要界面地图模版 -->
<template>
  <div id="WebMap"></div>
</template>

<script>
  import * as maptalks from 'maptalks';
  import { ClusterLayer }  from 'maptalks.markercluster';
  import  markerCount  from '../dist/test.js'

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
      markInfo: function () {
        let that = this
        that.map.removeLayer(that.clusterLayer)
        let markers = []
        this.testpoint = markerCount.testpoint
        console.log(that.testpoint)
        for (var i = 0; i < that.testpoint.length; i++) {
            var a = that.testpoint[i];
            markers.push(new maptalks.Marker([a[1], a[0]]));
        }
        var clusterLayer = new ClusterLayer('cluster', markers, {
            'noClusterWithOneMarker' : false,
            'maxClusterZoom' : 18,
            //"count" is an internal variable: marker count in the cluster.
            'symbol': {
                'markerType' : 'ellipse',
                'markerFill' : { property:'count', type:'interval', stops: [[0, 'rgb(135, 196, 240)'], [9, '#1bbc9b'], [99, 'rgb(216, 115, 149)']] },
                'markerFillOpacity' : 0.7,
                'markerLineOpacity' : 1,
                'markerLineWidth' : 3,
                'markerLineColor' : '#fff',
                'markerWidth' : { property:'count', type:'interval', stops: [[0, 40], [9, 60], [99, 80]] },
                'markerHeight' : { property:'count', type:'interval', stops: [[0, 40], [9, 60], [99, 80]] }
            },
            'drawClusterText': true,
            'geometryEvents' : true,
            'single': true
        });
        this.map.addLayer(clusterLayer);
        this.clusterLayer = clusterLayer
        console.log(map)
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      let that = this
      //构建map
      this.map = new maptalks.Map("WebMap", {
        center: [114.31,30.31],
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
      // new ClusterLayer('cluster', []).addTo(this.map);
      // this.markInfo()
      console.log(this.map)
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
    width: 100%;
    height: 500px;
  }
</style>