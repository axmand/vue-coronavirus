<template>
    <div id="info" v-if="reFresh">
        <el-row id="row1" >
                {{item.address}} {{item.risk}}
        </el-row>
            <el-divider></el-divider>
        <el-row id="row2">
            <span>
                附近累计确诊：
            </span>
            <span id="num" style="color:red">
                {{item.number}}
            </span>
            <span>
                人
            </span>
        </el-row>
        <el-row id="row3">
                您当前附近范围疫情风险较低，请注意防护。
        </el-row>
            <el-divider></el-divider>
    </div>
</template>
 
 

<script>
import Vue from 'vue';
import { MP } from './map.js'
export default {
  name: 'info',

  data() {
    return{
        reFresh:true,
        menuTree:[],
        item:{
          'address':Vue.address
        }
    }
  },
  methods: {
    
  },
  mounted () {
        // this.updatedata()

  },
  watch:{
      menuTree(){
          this.reFresh= false
          this.$nextTick(()=>{
            this.reFresh = true
            console.log(111)
        })
    }
  }
}
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #info {
    bottom: 0%;
    width: 100%;
    height: 20%;
    position: fixed;
    z-index: 2;
    background: #ffffff
  }
  #row1 {
    opacity: 100%;
    width: 100%;
    left:1%;
    padding: 1%;
    padding-top: 3%;
    font-size: 1em;
    font-family:'微软雅黑';
    font:bolder;
  }
  #row2{
    opacity: 100%;
    width: 100%;
    left:1%;
    display:table;
    padding: 1%;
    font-family:'黑体';
    font:bolder;
    padding-bottom: 2%;
    font-size: 1em
  }
  #row3{
    opacity: 100%;
    width: 100%;
    margin-bottom: 1%;
        left:1%;
    padding: 1%;
    display:table;
    text-align: left;
    /* padding-bottom: 10%; */
    font-size: 0.8em
  }
  #row4{
    opacity: 100%;
    width: 100%;
    display:table;
    text-align: center;
    font-size: 0.7em;
    bottom: 0%;
  }
  #num{
      font: bolder;
      font-size: 1.2em;
      text-align:left;
      /* width: 1.em */
  }
  .el-divider{
      margin: 2%;
  }
</style>