<template>
  <div class="container">
    <div class="row">
      <base-card>
        <form @submit.prevent="submitLoginForm">
          <label for="emailAddress" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="emailAddress"
            placeholder="Email Address"
            v-model="email"
          />

          <label for="inputPassword5" class="form-label">Password</label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="password"
            v-model="password"
          />
          <br />
          <p v-if="!formValidity" class="error">
            Please enter valid email address and password
          </p>
          <button>Login</button>
        </form>
      </base-card>
    </div>
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
  data() {
    return {
      showDialog: false,
      email: "",
      password: "",
      checkTerms: [],
      formValidity: true,
    };
  },
  methods: {
    async submitLoginForm() {
      this.formValidity = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6 
      ) {
        this.formValidity = false;
        return;
      }
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);

        this.$router.replace("/success");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.error {
  color: #ef7c00;
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
  margin-left: 5px;
  margin-top: 20px;
}

.form-control {
  display: inline-block;
  width: 100%;
}
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}
</style>
