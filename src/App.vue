<template>
  <div id="description">
    
    
    <router-link to="/Home"><button>Go to main Start page</button></router-link>
    <router-view></router-view>
    <Descript />
  </div>
</template>
<script>
import Descript from "./components/Descript.vue";
export default {
  name: "Description",
  components: {
    Descript,
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
  width: 100%;
  height: 100%
}
</style>
