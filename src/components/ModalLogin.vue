<script setup>
import { store } from "../stores/auth.js";
const user = store();
</script>

<template>
  <div class="modal fade" id="login">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Log In</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="user.signIn">
            <!-- CORREO -->
            <div class="input-group mb-3">
              <span class="input-group-text">Email</span>
              <input
                v-model="user.email"
                type="email"
                required="true"
                class="form-control"
              />
            </div>
            <!-- PASSWORD -->
            <div class="input-group mb-3">
              <span class="input-group-text">Password</span>
              <input
                v-model="user.password"
                type="password"
                required="true"
                class="form-control"
              />
            </div>
            <div class="d-grid gap-2">
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                <!-- Cierra el modal -->
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
