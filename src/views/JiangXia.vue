<template>
  <div id="jiangxia" class="layout">
    <div class="head">江夏区疫情综合风险分析系统</div>

    <div class="map">
      <webmap ref="webmap"></webmap>
    </div>
    <div class="bottom" :class="{full:isFull}">
      <div class="bottom-btn-top">
        <div class="bottom-btn-title">东圆小区</div>
        <div class="fengxian">低风险</div>
        <div class="full-btn" @click="isFull=true" v-if="!isFull"></div>
        <div class="full-btn" @click="isFull=false" v-else style="transform:rotateZ(180deg)"></div>
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
      <div class="bottom-footer" v-if="!isFull" @click="isFull = true">更多周边信息,点击显示...</div>
      <div class="out-list">
        <ul class="filter-list">
          <li
            class="filter-list-item"
            @click="currentItem = item"
            :class="{active:item === currentItem}"
            v-for="(item,index) in filterList"
            :key="index"
          >{{item}}</li>
        </ul>
        <div class="out-list-body">
          <ul class="out-list-body-ul" :style="'heigth:' + (228 * listData.length) + 'px'">
            <li class="out-list-item" v-for="(item,index) in listData" :key="index">
              <div class="out-list-item-title">
                <div class="out-list-item-text">{{item.title}}</div>
                <div class="out-list-item-type">{{item.type}}</div>
              </div>
              <p class="out-list-item-p icon-location">{{item.location}}</p>
              <p class="out-list-item-p icon-phone">{{item.phone}}</p>
              <p class="out-list-item-p icon-time">{{item.time}}</p>
            </li>
          </ul>
        </div>
      </div>
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
    return {
      isFull: false,
      filterList: ["全部", "药店", "商超", "酒店"],
      currentItem: "全部",
      listData: [
        {
          title: "如家商旅酒店(人民路店)",
          type: "酒店",
          phone: "110",
          time: "营业时间8:00 - 19:00",
          location: "枣阳路"
        },
        {
          title: "如家商旅酒店(人民路店)",
          type: "酒店",
          phone: "110",
          time: "营业时间8:00 - 19:00",
          location: "枣阳路"
        },
        {
          title: "如家商旅酒店(人民路店)",
          type: "酒店",
          phone: "110",
          time: "营业时间8:00 - 19:00",
          location: "枣阳路"
        },
        {
          title: "如家商旅酒店(人民路店)",
          type: "酒店",
          phone: "110",
          time: "营业时间8:00 - 19:00",
          location: "枣阳路"
        },
        {
          title: "如家商旅酒店(人民路店)",
          type: "酒店",
          phone: "110",
          time: "营业时间8:00 - 19:00",
          location: "枣阳路"
        },
        {
          title: "如家商旅酒店(人民路店)",
          type: "酒店",
          phone: "110",
          time: "营业时间8:00 - 19:00",
          location: "枣阳路"
        },
      ]
    };
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
  overflow: hidden;
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
  transition: all 0.5s;
  z-index: 4;
  background: #fff;
}
.bottom.full {
  transform: translateY(-897px);
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
  transition: all 0.5s;
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
  color: #628dd1;
  font-size: 18px;
}
.map {
  height: calc(100% - 431px);
  overflow: hidden;
  position: relative;
}
.out-list {
  height: 967px;
  background: #f4f4f4;
  box-sizing: border-box;
  padding-top: 18px;
}
.out-list .filter-list {
  background: #fff;
  height: 80px;
  border: 1px solid #ccc;
  border-left: 0;
  border-right: 0;
  padding-top: 18px;
  padding-left: 41px;
  box-sizing: border-box;
}
.filter-list-item {
  width: 90px;
  height: 41px;
  background: #a4a4a4;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 41px;
  float: left;
  margin-right: 17px;
}
.filter-list-item.active {
  background: #0049cc;
}
.out-list-body {
  height: calc(100% - 134px);
  margin: 34px auto 0;
  width: 707px;
  overflow: auto;
}
.out-list-body-ul {
  width: 100%;
}
.out-list-body-ul > li.out-list-item {
  height: 207px;
  width: 100%;
  border-radius: 9px;
  background: #fff;
  margin-bottom: 21px;
  position: relative;
  padding-left: 23px;
  box-sizing: border-box;
  padding-top: 18px;
  padding-bottom: 23px;
}
.out-list-item .out-list-item-title {
  height: 42px;
  font-size: 30px;
  line-height: 42px;
}
.out-list-item-p {
  margin-top: 11px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  padding-left: 44px;
  position: relative;
}
.out-list-item-p::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: url(./../assets/location.jpg) no-repeat center;
  background-size: 100% 100%;
}
.out-list-item-p.icon-location::after {
  background-image: url(./../assets/location.jpg);
}
.out-list-item-p.icon-phone::after {
  background-image: url(./../assets/phone.jpg);
}
.out-list-item-p.icon-time::after {
  background-image: url(./../assets/time.jpg);
}
.out-list-item-text {
  float: left;
}
.out-list-item-type {
  width: 90px;
  height: 41px;
  background: #0049cc;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 41px;
  float: left;
  margin-left: 27px;
}
</style>