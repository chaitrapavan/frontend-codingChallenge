<template>
  <div class="container">
    <h1>Congratulations!</h1>
    <h5>
      You are logged in. Now you can access the free internet provided by
      m3connect
    </h5>

    <button @click="logOut">Logout</button>
    <hr />
    <div class="row">
      <div class="col-md-6 col-lg-6">
        <p>
          Copyright: ©2012-2021 m3connect GmbH Friedlandstraße 18 52064 Aachen
          <span>Imprint Privacy</span>
        </p>
      </div>
      <div class="col-md-6">
        <p>Powered By:<span class="m3connect">M3CONNECT</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {

    //logout and redirection to the registration page
    async logOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      this.$router.replace("/register");
    },
  },
};
</script>

<style scoped>
h1,
h3,
h5 {
  text-align: center;
}
.m3connect {
  color: #ef7c00;
}
button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  display: block;
  margin: auto;
  margin-top: 50px;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
  text-decoration: none;
}
span {
  color: #ef7c00;
}
</style>
