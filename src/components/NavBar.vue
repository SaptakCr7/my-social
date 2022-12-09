<script setup>
import { store } from "../stores/auth.js";
const user = store();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand ms-4" href="#">Vue 3 + script setup + Pinia</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Setup</router-link>
          </li>
          <li>
            <router-link v-if="user.isLoggedIn" class="nav-link" to="/about"
              >About</router-link
            >
          </li>
        </ul>
        <form>
          <button
            v-if="!user.isLoggedIn"
            type="button"
            class="btn btn-outline-primary mx-2"
            data-bs-toggle="modal"
            data-bs-target="#login"
          >
            Log in
          </button>
          <button
            v-if="user.isLoggedIn"
            class="btn btn-outline-danger me-2"
            @click="user.signout"
          >
            Log out
          </button>
          <button
            v-if="!user.isLoggedIn"
            type="button"
            class="btn btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target="#registro"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
