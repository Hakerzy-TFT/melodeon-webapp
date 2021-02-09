<template>
  <div id="description">
      <button v-on:click="gotoStart()">Go to main Start page</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Description",
  data(){
      return{
          path:""
      }
  },
  methods: {
    gotoStart() {
      this.$router.push('/Home')
    },
  },
};
</script>
    
<style>

</style>