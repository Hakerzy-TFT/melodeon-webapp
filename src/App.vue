<template>
  <div id="myRouter">
    <router-view></router-view>
  </div>
</template>
<script>
//import Descript from './components/Descript.vue'
export default {
  name: "App",
  components: {
    //Descript
  },
  data(){
    return{
     
    };
  },
  methods: {
    res:function() {
      var resp = " ";
      var xmlHttp = new XMLHttpRequest();
      if (xmlHttp != null) {
        xmlHttp.open("GET", "https://api.mocki.io/v1/cad7ff04", false);
        xmlHttp.send(null);
        resp = xmlHttp.responseText;
      }
      var config = JSON.parse(resp);
      if (config.db == true && config.api == true && config.webApp == true) {
        this.$store.commit("changeState",true)
      } else {
        this.$store.commit("changeState",false)
      }
    },
    
  },
  mounted() {
      this.$nextTick(this.res());
    },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
  padding: 0%;
  width: 10vw;
  height: 100vh;
}
</style>
