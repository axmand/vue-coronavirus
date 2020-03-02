<template>
    <div id="statistic">
        <el-row id="row1">
            <el-col :span='3'>
                <ul type="none">
                <li id="num">66907</li>
                <li id='type'>确诊</li>
                </ul>  
            </el-col>
            <el-col :span='3'>
                <ul type="none">
                <li id='num'>2761</li>
                <li id="type">死亡</li>
                </ul>  
            </el-col>
            <el-col :span='3'>
                <ul type="none">
                <li id="num">31500</li>
                <li id='type'>治愈</li>
                </ul>  
            </el-col>
        </el-row>
        <el-row id="row2">
                数据来源    截止2020.3.1 20：00 来源：各地卫健委
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'statistic',
  methods: {
  },
  mounted () {
  }
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
    padding-bottom: 2%
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
      font-size: 1em;
      text-align:center
  }
  #type{
      font: bolder;
      font-size: 0.8em;
      text-align:center
  }
  #explain{
      font: bolder;
      font-size: 0.2em
  }
</style>