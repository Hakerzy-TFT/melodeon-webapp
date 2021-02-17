<template>
  <div id="description">
    <div id="readme">
      <div id="descriptionNav">
        <button
          id="desNav"
          type="button"
          class="btn btn-dark"
          v-on:click="setTech()"
        >
          Technologies
        </button>
        <button
          id="desNav"
          type="button"
          class="btn btn-dark"
          v-on:click="setAbou()"
        >
          About project
        </button>
        <button
          id="desNav"
          type="button"
          class="btn btn-dark"
          v-on:click="setCont()"
        >
          Contact
        </button>
        <a href="https://github.com/Hakerzy-TFT"
          ><button id="desNav" type="button" class="btn btn-dark">
            Link to GitHub
          </button></a
        >
      </div>
      <div id="decriptionInfo">
        <div id="technologies" v-show="tech">
          In project we are using the following technologies:<br />
          Frontend- Vue.js, Node.js, HTML, CSS, JavaScript<br />
          Backend- C#<br />
          DataBase- MongoDB<br />
          DevOps- GitHub(Organization: Hakerzy-TFT)<br />
        </div>
        <div id="about" v-show="abou">
          Melodeon is webapp which allow us to make playlist of music most
          common with our searching<br />
          Four developers are learning new technologies and creating and create
          their own problems to solve<br />
        </div>
        <div id="contact" v-show="cont">Via e-mail:<br /></div>
      </div>
      <div id="mainPageButton">
        <router-link to="/Home"
          ><button
            id="home"
            type="button"
            class="btn btn-dark"
          >
            Go to main Start page
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      tech: true,
      abou: false,
      cont: false,
    };
  },
  methods: {
    gotoStart() {
      this.$router.push("/Home");
    },
    setTech() {
      this.tech = true;
      this.abou = false;
      this.cont = false;
    },
    setAbou() {
      this.tech = false;
      this.abou = true;
      this.cont = false;
    },
    setCont() {
      this.tech = false;
      this.abou = false;
      this.cont = true;
    },
  },
};
</script>
    
<style>
#description {
  background-size: cover;
  background-repeat: no-repeat;
  width:100vw;
  height: 100vh;
  overflow:hidden;
  background-image: url("../assets/papers.png");
}
#mainPageButton {
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  left: 0;
}
#home {
  width: 100%;
  height: 100%;
}
#decriptionInfo {
  margin: 2% 0 0 2%;
  width: 100%;
  height: 80%;
  bottom: 10%;
}
#descriptionNav {
  background-color: #2c3e50;
  width: 100%;
  height: 5%;
  top: 0;
  left: 0;
}
#desNav {
  width: 20%;
  height: 100%;
  margin-right: 5%;
}
#about,
#technologies,
#contact {
  font-size: 20px;
  line-height: 290%;
}
</style>