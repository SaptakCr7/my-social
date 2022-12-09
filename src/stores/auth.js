import { defineStore } from "pinia";
import router from "../router/index";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const store = defineStore({
  id: "main",
  state: () => ({
    isLoggedIn: true,
    email: "",
    password: "",
    repassword: "",
    errorMessage: "",
  }),
  getters: {},
  actions: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },

    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          router.push("/auth");
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },

    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },
  },
});
