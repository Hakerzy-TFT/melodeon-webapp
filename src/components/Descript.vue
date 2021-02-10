<template>
  <div id="description">
      
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