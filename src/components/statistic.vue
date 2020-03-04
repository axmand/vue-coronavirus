<template>
    <div id="statistic">
        <el-row id="row1">
            <el-col :span='3'>
                <ul type="none">
                <li id="num" style="color:red">{{ item.patient }}</li>
                <li id='type'>确诊</li>
                </ul>  
            </el-col>
            <el-col :span='3'>
                <ul type="none">
                <li id='num'>{{ item.death }}</li>
                <li id="type">死亡</li>
                </ul>  
            </el-col>
            <el-col :span='3'>
                <ul type="none">
                <li id="num" style="color:green">{{ item.reheal }}</li>
                <li id='type'>治愈</li>
                </ul>  
            </el-col>
        </el-row>
        <el-row id="row2">
                数据来源    截止2020.3.3 18：00 来源：各地卫健委
        </el-row>
    </div>
</template>
 
 

<script>
import Vue from 'vue';
export default {
  name: 'statistic',
  data() {
    return{
      item:{
       }
    }
  },
  methods: {
    GetCount(){
          fetch("http://120.77.76.166/coronavius/assets/hbqx.json").then(result => result.json()).then(result => {
            var features = result.features;
            var ALLPATIENT = 0
            var ALLDEATH = 0
            var ALLREHEAL = 0
            for (var i = 0; i < features.length; i++) {
              var a = features[i];
              if (!a.properties.ALLREHEAL) {
                a.properties.ALLREHEAL = 0;
              }
              else if(!a.properties.ALLPATIENT){               
                 a.properties.ALLPATIENT = 0;
              }
              else if(!a.properties.ALLDEATH){
                a.properties.ALLDEATH = 0
              }
              ALLPATIENT += Number(a.properties.ALLPATIENT);
              ALLDEATH += Number(a.properties.ALLDEATH);
              ALLREHEAL += Number(a.properties.ALLREHEAL);
              }
              Vue.Allcount.ALLPATIENT = ALLPATIENT;
              Vue.Allcount.ALLDEATH = ALLDEATH;
              Vue.Allcount.ALLREHEAL = ALLREHEAL;
              console.log(Vue.Allcount.ALLREHEAL)
              this.$set(this.item,'patient',Vue.Allcount.ALLPATIENT)
              this.$set(this.item,'death',Vue.Allcount.ALLDEATH)
              this.$set(this.item,'reheal',Vue.Allcount.ALLREHEAL)
          });
    }
  },
  mounted () {
        //初始化Count
    Vue.Allcount = {};
    Vue.Allcount.ALLPATIENT = 0;
    Vue.Allcount.ALLDEATH = 0;
    Vue.Allcount.ALLREHEAL = 0;
    this.GetCount()
  },
}
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #statistic {
    top: 7.1%;
    width: 100%;
    position: absolute;
    z-index: 2;
  }
  #row1 {
    background: #e5e9f2;
    opacity: 80%;
    width: 100%;
    height: 20%;
  }
  #row2{
    background: #e5e9f2;
    opacity: 80%;
    width: 100%;
    display:table;
    text-align: center;
    padding-bottom: 2%;
    font-size: 0.6em
  }
  .ul{
      display:table;
      list-style-type: none;
      text-align: center;
  }
  .el-col {
    /* border-radius: 4px; */
    background: #e5e9f2;
    width: 33%
  }
  #num{
      font: bolder;
      font-size: 1.4em;
      text-align:center
  }
  #type{
      font-weight: bolder;
      font-size: 0.9em;
      text-align:center
  }
  #explain{
      font: bolder;
      font-size: 0.2em
  }
</style>