<template>
  <div id='Selfform'>
  <div class="meg" v-for="(item,index) in viewArr" v-bind:key="index">
    <el-card class="box-card">
        <el-col :span='2' class="index">
            {{ index + 1 }}
        </el-col>
        <!-- <el-col :span='3' class='line'>
            <el-divider direction="vertical"></el-divider>
        </el-col> -->
        <el-col :span='2' class="content">
          <div class='address'>
            <i class="el-icon-location-information" style="font-size: 0.5em"></i>
            地址 ：{{item.name}}
          </div>
          <div class='time'>
            <i class="el-icon-date" style="font-size: 0.5em"></i>
            住院时间： {{item.type}}
          </div>
        </el-col>
    </el-card>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Selfform",
  data(){
    return{
      viewArr:[
        {name:"1",type:1},
        {name:"2",type:2}
      ]
    }
  },
  methods: {
  },
  mounted(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-card{
  width: 90%;
  text-align: center;
  left: 5em;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 5%;
}
.index{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font:bolder;
  font-size:1em;
  margin-bottom: 5%;
  border-right: 0.5em;
  border-right-color: darkgray;
}
.line{
  margin: 0%;
  border: 0%;
  width: 4%;
}
.content{
  font-family: '宋体';
  /* font:bolder; */
  font-size:0.7em;
  width:80%;
  margin-bottom: 5%;
  text-align: left;
}
.el-divider{
  width:1%
}

</style>