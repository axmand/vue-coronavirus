<template>
  <div id="jiangxia" class="layout">
    <div class="head">江夏区疫情综合风险分析系统</div>
    
    <div class="map">
        <webmap ref="webmap"></webmap>
    </div>
    <div class="bottom">
      <div class="bottom-btn-top">
        <div class="bottom-btn-title">东圆小区</div>
        <div class="fengxian">低风险</div>
        <div class="full-btn"></div>
      </div>
      <div class="bottom-center">
        <ul class="number-list">
          <li class="number-list-item">
            <div class="list-item-top">17</div>
            <div class="list-item-bottom">累计确诊</div>
          </li>
          <li class="number-list-item">
            <div class="list-item-top">0</div>
            <div class="list-item-bottom">今日新增</div>
          </li>
          <li class="number-list-item">
            <div class="list-item-top green">16</div>
            <div class="list-item-bottom">累计治愈</div>
          </li>
        </ul>
        <div class="bottom-center-info"></div>
      </div>
      <div class="bottom-footer">更多信息...</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";

import Drawer from "./../components/Drawer";
import webmap from "./../components/webmap";
import info from "./../components/info";
import { MP } from "./../components/map.js";

export default {
  name: "jiangxia",

  components: {
    Drawer: Drawer,
    webmap: webmap,
    info: info
  },

  data() {
    return {};
  },

  methods: {},

  mounted() {
    const _this = this;
    MP(_this.ak).then(BMap => {
      var geolocation = new BMap.Geolocation();
      var gc = new BMap.Geocoder();
      geolocation.enableSDKLocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var lng = r.point.lng;
          var lat = r.point.lat;
          console.log(r);
          //获取地址信息
          gc.getLocation(r.point, function(rs) {
            var addComp = rs.addressComponents;
            Vue.Address = addComp.street + addComp.streetNumber;
            console.log(Vue.Address);
          });
          Vue.mapInstance.setCenter([lng, lat]);
          // Vue.mapInstance.setCenter([114.319815,30.360594])
          var point = new maptalks.Marker([lng, lat], {
            visible: true,
            editable: true,
            cursor: "pointer",
            shadowBlur: 0,
            shadowColor: "black",
            draggable: false,
            dragShadow: false, // display a shadow during dragging
            drawOnAxis: null, // force dragging stick on a axis, can be: x, y
            symbol: {
              markerType: "ellipse",
              markerWidth: 20,
              markerHeight: 20,
              markerFill: "#00CCFF",
              markOpacity: 0.3,
              lineColor: "#000",
              lineWidth: 0.1
            }
          });
          new maptalks.VectorLayer("jx", point).addTo(Vue.mapInstance);
        } else {
          alert("failed" + this.getStatus());
        }
      });
    });
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.layout {
  width: 100%;
  height: 100%;
  position: relative;
}
.layout .head {
  background: url(./../assets/Banner.png) no-repeat center;
  background-size: 100% 100%;
  height: 98px;
  width: 100%;
  font-size: 40px;
  text-align: center;
  line-height: 98px;
  color: #fff;
}
.layout .bottom {
  height: 333px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.bottom-btn-top {
  height: 79px;
  border-bottom: 2px solid #ccc;
  font-size: 30px;
  line-height: 79px;
  padding-left: 39px;
  box-sizing: border-box;
  font-weight: bold;
  position: relative;
  background: #fff;
}
.bottom-btn-title {
  float: left;
}
.fengxian {
  float: left;
  margin-left: 20px;
  font-size: 20px;
  padding: 0 20px;
  height: 34px;
  line-height: 34px;
  background: #97e290;
  border-radius: 14.5px;
  margin-top: 23px;
}
.full-btn {
  width: 39px;
  height: 37px;
  position: absolute;
  top: 20px;
  right: 36px;
  background: url(./../assets/full-btn.jpg) no-repeat center;
  background-size: 100% 100%;
}
.bottom-center {
  height: 182px;
  width: 100%;
  padding-top: 1px;
  border-bottom: 2px solid #ccc;
  position: relative;
}
.number-list {
  height: 78px;
  margin-top: 33px;
  position: relative;
}
.number-list > li.number-list-item {
  height: 100%;
  width: 118px;
  font-size: 28px;
  position: absolute;
  left: 88px;
  top: 0;
  text-align: center;
}
.number-list > li.number-list-item:nth-child(2) {
  left: 321px;
}
.number-list > li.number-list-item:nth-child(3) {
  right: 80px;
  left: auto;
}
.list-item-top.green {
  color: #0f9854;
}
.list-item-top {
  height: 28px;
  margin-bottom: 14px;
  font-size: 30px;
  text-align: center;
  color: #ff5357;
}
.list-item-bottom {
  height: 26px;
}
.bottom-center-info {
  height: 34px;
  width: 659px;
  position: absolute;
  bottom: 21px;
  left: 50%;
  transform: translateX(-50%);
  background: pink;
  border-radius: 17px;
}
.bottom-footer {
  height: 71px;
  text-align: center;
  line-height: 71px;
  color: #1a2c74;
  font-size: 18px;
}
.map {
    height:calc(100% - 431px);
    overflow: hidden;
    position: relative;
}
</style>