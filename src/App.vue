<script setup>
import { RouterView } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { store } from "./stores/auth.js";

const datos = store();

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // eslint-disable-next-line no-unused-vars
    const uid = user.uid;
    datos.isLoggedIn = true;
  } else {
    datos.isLoggedIn = false;
  }
});
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
<style>
body {
  background: #83a4d4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #b6fbff,
    #83a4d4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #b6fbff,
    #83a4d4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
