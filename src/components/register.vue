<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <base-card>
          <h3>Free Wi-Fi</h3>
          <form @submit.prevent="submitSignupForm">
            <label for="emailAddress" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailAddress"
              placeholder="Email Address"
              v-model.trim="email"
            />

            <label for="inputPassword5" class="form-label">Password</label>
            <input
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="password"
              v-model.trim="password"
            />

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                v-model="checkTerms"
              />
              <label class="form-check-label">
                I accept the general
                <span @click="showDialog">terms and conditions</span>
              </label>
            </div>

            <br />
            <p v-if="!formValidity" class="error">
              Please enter valid email address, password or please accept our
              terms and conditions
            </p>

            <button class="wifiBtn">Get Free Wi-Fi</button>
          </form>
        </base-card>
      </div>
      <div class="col-xs-12 col-md-6">
        <base-card>
          <h3>Free Facebook Login</h3>

          <p>Free Internet throughout the hotel</p>
          <hr />
          <p>Check email (POP3, IMAP, SMTP)</p>
          <hr />
          <p>Check work email via VPN</p>
          <hr />

          <button @click="facebookLogin">Facebook Login</button>
          <terms-conditions
            v-if="openDialog"
            @close-dialog="closeDialog"
          ></terms-conditions>
        </base-card>
      </div>
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
import termsConditions from "./termsConditions.vue";

export default {
  components: {
    termsConditions,
  },
  data() {
    return {
      email: "",
      password: "",
      checkTerms: [],
      formValidity: true,
      openDialog: false,
    };
  },
  methods: {
    //submiting userdata to access the free wifi
    async submitSignupForm() {
      //validation of input data
      this.formValidity = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6 ||
        this.checkTerms.length === 0
      ) {
        this.formValidity = false;
        return;
      }
      //sending email address and password to the forebase database
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        //redirection to the success page
        this.$router.replace("/success");
      } catch (err) {
        console.log(err);
      }
    },
    //free facebook login
    facebookLogin() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          //redirection to the success page
          this.$router.replace("/success");
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //funcrtion to open terms and condition dialog
    closeDialog() {
      this.openDialog = false;
    },
    //funcrtion to close terms and condition dialog

    showDialog() {
      this.openDialog = true;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
h3 {
  text-align: center;
  background-color: #ef7c00;
  color: white;
  padding: 5px;
}

span {
  color: #ef7c00;
  cursor: pointer;
}
.error {
  color: red;
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
}
.wifiBtn {
  margin-top: 30px;
}
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
  text-decoration: none;
}
.form-control {
  width: 100%;
}
</style>
