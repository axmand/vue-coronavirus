<template>
    <div id="layer">
    <el-popover
        trigger="manual"
        placement="left-start"
        v-model="visible">
        <div id="div1">
            <el-checkbox v-model="checked1"  @change="check1" label="区县三级风险图" border size="medium"></el-checkbox>
            <el-checkbox v-model="checked2" @change="check2" label="江夏疫情热力图" border size="medium"></el-checkbox>
        </div >
        <div id ="div2" >
            <el-checkbox v-model="checked3" @change="check3" label="疫情聚合图" border size="medium"></el-checkbox>
            <el-checkbox v-model="checked4" @change="check4" label="区县确诊统计图" border size="medium"></el-checkbox>
        </div>
        <el-button slot="reference" @click="clickbutton" icon="el-icon-s-fold" style="font-size: 25px"></el-button>
    </el-popover>
    </div>
</template>

<script>
    import webmap from './webmap';
    export default {
    name: 'layer',
    data() {
        return {
            visible: false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
        };
    },
    methods: {
        clickbutton(){
            this.visible = !this.visible;
        },
        check1(){
                this.$parent.display_riskmap(this.checked1)
        },
        check2(){
                this.$parent.display_heatmap(this.checked2)
        },
        check3(){
                this.$parent.display_cluster(this.checked3)
        },
        check4(){
        }
    },
    mounted () {
    }
    }
</script>

<!-- 限定局部有效的样式 -->
<style scoped>
  #layer {
    top: 7.1%;
    width: 100%;
    position: absolute;
    z-index: 2;
  }
  .el-button{
    position: fixed;
    padding: 1%;
    size : 10px;
    z-index:2;
    right: 2%;
    bottom: 10%;
  }
  .el-checkbox{
      width: 44%;
      margin-right: 4%;
      font-size: 4px
  }
  #div1 {
    margin: 0%;
    padding: 0;
    width: 30;
  }
  #div2 {
    margin: 0%;
    padding: 0;
    width: 30;
    margin-top: 10px;
  }
  .el-popover{
      width: 150px;
      margin: 0%
  }
</style>