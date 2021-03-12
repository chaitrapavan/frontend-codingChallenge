import { createStore } from "vuex";
import userAuthModule from "./modules/userAuth.js";


export default createStore({
  modules: {
    userAuth: userAuthModule,
  },
});
