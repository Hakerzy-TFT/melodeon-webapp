<template>
  <div id="Home">
    <div id="background">
    </div>
    <div id="elements">
       <div id="about">
       <router-link to="/"> <img src="../assets/about.png" id="imageAbout" alt="About"  /></router-link>
        </div>
    </div>
    <div id="conbackground">
      
      <div id="text" position: relative>
        <input type="textarea" id="token" placeholder="LOGIN TOKEN" />
        <div id="button">
        <img src="../assets/right_arrow.gif" alt="Button" id="loginbutton" v-on:click="login()"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      login_token: "",
    };
  },
  methods: {
    login() {
      this.login_token = document.getElementById("token").value;
      alert(this.login_token);
    },
  },
  beforeCreate() {
      if(!this.$store.state.appState.stateOfApp){
        this.$router.go(-1);
      }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  background-image: url("../assets/home_background.png");
  background-size: cover;
  width: 100vw;
  height: 100vh;
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
#elements{
  position: absolute;
  background-size: cover;
  width: 100%;
  height:100%;
}
#token {
  margin-top: 60%;
  margin-left: 30%;
  float: left;
  height: 50px;
  width: 40%;
  border-radius: 25px;
}

#token > * {
  z-index: 10;
  float:left;
  clear: both;
}

#loginbutton {
  position: absolute;
  background-image: url("../assets/right_arrow.gif");
  margin-top: 60%;
  margin-left: 10%;
  opacity: 0.9;
  background-size: cover;
  height: 40px;
  width: 80px;
}
#imageAbout{
width: 4vw;
margin: 1%;
float:right;
}
#about{

}
</style>
