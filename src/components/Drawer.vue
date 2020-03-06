<template>
    <div id="Drawer">
        <el-button id="bottom" @click="drawer = true"  style="color:#0000FF;border:0px;text-align:center;font-size: 0.7em; ">
                更多信息，点击上拉显示
        </el-button>
        <el-drawer
        title="我是 Drawer"
        direction="btt"
        :visible.sync="drawer"
        :with-header="false"
        size="90%">
        <div id='drawer-content'>
            <el-row id="row1">
                    春晖西元 低风险
            <el-button @click="drawer = false" id="false" icon='el-icon-close' style="float:right;border:0px"></el-button>
            </el-row>
                <el-divider></el-divider>
            <el-row id="row2">
                <span>
                    附近累计确诊：
                </span>
                <span id="num" style="color:red">
                    3
                </span>
                <span>
                    人
                </span>
            </el-row>
            <el-row id="row3">
                    您当前附近范围疫情风险较低，请注意防护。
            </el-row>
            <el-divider></el-divider>
            <Selfform></Selfform>
        </div>
        </el-drawer>
    </div>
</template>

<script>
    import Selfform from './Selfform'
    export default {
    name: 'Drawer',
    components: {
      Selfform: Selfform
    },
    data() {
        return {
            drawer: false,
        };
    },
    methods: {
    },
    mounted () {
    }
    }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #Drawer {
    /* position: fixed;*/
    width: 100%; 
  }
  #bottom{
    position: fixed;
    padding-bottom: 1%;
    padding-top: 1%;
    padding-right: 0%;
    padding-left: 0%;
    /* size : 1.5em; */
    z-index:2;
    width: 100%;
    bottom: 0%;
  }
  #false{
    margin-right: 2%;
    /* right: 1%; */
    padding: 1%;
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
    display:table;
    text-align: center;
    padding-bottom: 2%;
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
  #drawer-content{
    height:99.5%;
    overflow:auto;
  }
</style>