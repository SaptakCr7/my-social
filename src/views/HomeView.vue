<script>
import Navbar from "../components/Navbar.vue";
import ModalLogIn from "../components/ModalLogIn.vue";
import ModalRegister from "../components/ModalRegister.vue";
export default {
  components: {
    Navbar,
    ModalLogIn,
    ModalRegister,
  },
};
</script>

<template>
  <Navbar />
  <ModalLogIn />
  <ModalRegister />
  <div
    class="d-sm-flex align-items-center justify-content-between w-100"
    style="height: 90.7vh"
  >
    <div class="col-md-4 mx-auto mb-4 mb-sm-0 headline">
      <h1 class="display-4 my-4 font-weight-bold" style="margin-left: 20px">
        Social Media App
        <span style="color: #9b5de5">Vue JS+ Bootsrap + firebase</span>
      </h1>
    </div>
    <!-- in mobile remove the clippath -->
    <div
      class="col-md-8 h-100 clipped"
      style="
        min-height: 350px;
        background-image: url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80);
        background-position: center;
        background-size: cover;
      "
    ></div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif !important;
}

.headline {
  left: 130px;
}
.clipped {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
}
@media screen and (max-width: 650px) {
  .headline {
    left: 20px;
  }
  .clipped {
    clip-path: none;
    max-height: 300px !important;
  }
}
</style>
