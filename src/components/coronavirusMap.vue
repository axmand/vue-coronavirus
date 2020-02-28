<template>
    <div id="mapDiv">{{msg}}</div>
</template>

<script>
  //引入maptalks
  import * as maptalks from 'maptalks'

  export default {
    name: 'coronavirusMap',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      click() {

      }
    },
    mounted() {
      //全局对象
      this.mapInstance = new maptalks.Map("mapDiv", {
        center: [180, 0],
        zoom: 4,
        baseLayer: new maptalks.TileLayer("base", {
          urlTemplate: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          subdomains: ['a', 'b', 'c']
        }),
        layers: [
          new maptalks.VectorLayer('v', [new maptalks.Marker([180, 0])])
        ]
      });
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #mapDiv {
    width: 100%;
    height: 500px;
    border: 1px solid black;
  }
</style>