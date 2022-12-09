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
