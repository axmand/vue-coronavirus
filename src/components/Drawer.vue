<template>
    <div id="Drawer">
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        点我打开
        </el-button>
        <el-drawer
        title="我是 Drawer"
        direction="btt"
        :visible.sync="drawer"
        :with-header="false"
        size="50%">
        <div>
            我是drawer
        </div>
        </el-drawer>
    </div>
</template>

<script>
    export default {
    name: 'Drawer',
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
    /* height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 2; */
  }
  .el-button{
    position: fixed;
    padding: 1%;
    size : 1.5em;
    z-index:2;
    right: 45%;
    bottom: 0%;
  }
  .el-drawer{
    position: fixed;
    padding: 1%;
  }
</style>