<template>
  <div id="Home">
    <div id="background"></div>
    <div id="conbackground">
      <div id="text">
        <input type="textarea" id="token" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  background-image: url("../assets/home_background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(6px);
}
#conbackground {
  background-image: url("../assets/home_background.png");
  background-size: cover;
  width: 60%;
  height: 90%;
  opacity: 0.9;
  position: absolute;
  top: 5%;
  left: 20%;
  border-radius: 1000px;
}
#token {
  vertical-align: middle; 
  top: 80%;
  height: 30px;
  width: 40%;
  border-radius: 500px;
}
</style>
